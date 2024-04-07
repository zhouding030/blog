# k8s介绍

Kubernetes 简称 k8s，是一个开源的容器编排引擎，用于自动部署、扩展和管理容器化应用程序的开源系统。它将组成应用程序的容器组合成逻辑单元，以便于管理和服务发现。Kubernetes 源自 Google 15 年生产环境的运维经验，同时凝聚了社区的最佳创意和实践。

Kubernetes 特性：
自动化上线和回滚：
Kubernetes 会分步骤地将针对应用或其配置的更改上线，同时监视应用程序运行状况以确保你不会同时终止所有实例。如果出现问题，Kubernetes 会为你回滚所作更改。你应该充分利用不断成长的部署方案生态系统。

服务发现与负载均衡：
无需修改你的应用程序即可使用陌生的服务发现机制。Kubernetes 为容器提供了自己的 IP 地址和一个 DNS 名称，并且可以在它们之间实现负载均衡。

存储编排：
自动挂载所选存储系统，包括本地存储、诸如 GCP 或 AWS 之类公有云提供商所提供的存储或者诸如 NFS、iSCSI、Gluster、Ceph、Cinder 或 Flocker 这类网络存储系统。

Secret 和配置管理：
部署和更新 Secrets 和应用程序的配置而不必重新构建容器镜像，且不必将软件堆栈配置中的秘密信息暴露出来。

自动装箱：
根据容器的资源需求和其他约束自动放置容器，同时避免影响可用性。将关键性工作负载和尽力而为性质的服务工作负载进行混合放置，以提高资源利用率并节省更多的资源。

批量执行：
除了服务之外，Kubernetes 还可以管理你的批处理和 CI 工作负载，在期望时替换掉失效的容器。

IPv4/IPv6 双协议栈：
为 Pod 和 Service 分配 IPv4 和 IPv6 地址。

水平扩缩：
使用一个简单的命令、一个 UI 或基于 CPU 使用情况自动对应用程序进行扩缩。

自我修复：
重新启动失败的容器，在节点死亡时替换并重新调度容器，杀死不响应用户定义的健康检查的容器，并且在它们准备好服务之前不会将它们公布给客户端。

为扩展性设计：
无需更改上游源码即可扩展你的 Kubernetes 集群。

Kubernetes 组件：
当你部署完 Kubernetes，您将得到一个完整的集群。

Kubernetes 集群由一组运行容器化应用程序的工作机器（称为节点）组成。每个集群至少有一个工作节点。

工作节点托管作为应用程序工作负载组件的 Pod。控制平面管理集群中的工作节点和 Pod。在生产环境中，控制平面通常跨多台计算机运行，集群通常运行多个节点，提供容错和高可用性。


控制平面组件（Control Plane Components）：
控制平面组件做出关于集群的全局决策(例如：调度)以及检测和响应集群事件(例如：当部署的副本字段不满足要求时启动一个新的 Pod)。

控制平面组件可以在集群中的任何机器上运行。但是为了简单起见，设置脚本通常在同一台机器上启动所有控制平面组件，并且不要在这台机器上运行用户容器。

kube-apiserver：
API 服务器是 Kubernetes 控制平面的一个组件，用于公开 Kubernetes API。API 服务器是 Kubernetes 控制平面的前端，负责提供 HTTP API，以供用户、集群中的不同部分和集群外部组件相互通讯。

Kubernetes API 服务器的主要实现是 kube-apiserver。kube-apiserver被设计为水平扩展，也就是说它通过部署更多的实例来进行扩展。您可以运行多个 kube-apiserver 实例，并在这些实例之间平衡流量。

etcd：
作为 Kubernetes 所有集群数据的备份存储的一致且高可用的键值存储。如果您的 Kubernetes 集群使用 etcd 作为备份存储，请确保为这些数据制定备份计划。

kube-scheduler：
控制平面组件监视新创建的没有指定节点的 Pod，并选择一个节点让它们运行。调度决策考虑的因素包括：个人和集体资源需求、硬件/软件/策略约束、亲和性和反亲和性规范、数据局部性、工作负载间的干扰和截止日期。

kube-controller-manager：
运行控制器进程的控制平面组件。从逻辑上讲，每个控制器都是一个独立的进程，但为了降低复杂性，它们都被编译成一个二进制文件，并在一个进程中运行。

控制器类型有：
节点控制器：

负责节点宕机时的通知和响应。

作业控制器：

监视表示一次性任务的Job对象，然后创建Pod来运行这些任务直至完成。

端点控制器：

填充端点对象（即连接Services和Pods）。

服务帐户和令牌控制器：

为新的名称空间创建默认帐户和API访问令牌。

cloud-controller-manager：
Kubernetes 控制平面组件，它嵌入特定于云的控制逻辑。云控制器管理器允许您将集群链接到云提供商的 API 中，并将与该云平台交互的组件同与你的集群交互的组件分离出来。

云控制器管理器只运行特定于您的云提供商的控制器。如果您在自己的环境中运行 Kubernetes 或者在自己的 PC 学习环境中运行Kubernetes，那么集群没有云控制器管理器。

与 kube-controller-manager 一样，cloud-controller-manager 将几个逻辑上独立的控制循环组合成一个二进制文件，您可以作为一个进程运行它。您也可以水平扩展（运行多个副本）以提高性能或帮助容忍故障。

以下控制器可以和云提供商有依赖关系：
节点控制器：

用于检查云提供商，以确定节点停止响应后是否已在云中删除。

路由控制器：

用于在底层云基础设施中设置路由。

服务控制器：

用于创建、更新和删除云提供商负载均衡器。

Node 组件（Node Components）：
节点组件在每个节点上运行，维护运行 Pod 并提供 Kubernetes 运行时环境。

Kubernetes 通过将容器放置到 Pods 中以在 Node 上运行来运行工作负载。节点可以是虚拟机，也可以是物理机，这取决于集群。每个节点由控制平面管理，包括运行 Pods 所需的服务。

kubelet：
运行在集群中每个节点上的代理，确保容器在 Pod 中运行。kubelet 接受一组通过各种机制提供的 podspec，并确保这些 podspec 中描述的容器运行良好。kubelet 不管理不是由 Kubernetes 创建的容器。

kube-proxy：
kube-proxy 是一个网络代理，运行在集群中的每个节点上，实现了Kubernetes 服务概念的一部分。kube-proxy 在节点上维护网络规则。这些网络规则允许从集群内部或外部的网络会话与 Pod 进行网络通信。如果操作系统有可用的包过滤层，kube-proxy 将使用操作系统的包过滤层，否则 kube-proxy自己转发流量。

Container runtime：
Container runtime 是负责运行容器的软件。Kubernetes 支持几种Container runtime：Docker、containerd、CRI-O，以及Kubernetes CRI（Container runtime 接口）的任何实现。

Cgroup drivers 控制组用于约束分配给进程的资源。

当 systemd 被选为Linux 发行版的 init 系统时，init 进程生成并消耗一个根控制组（cgroup），并充当 cgroup 管理器。systemd 与 cgroups 紧密集成，并为每个 systemd 单元分配一个 cgroup。可以配置容器运行时和 kubelet 来使用 cgroupfs。与systemd 一起使用 cgroupfs 意味着将有两个不同的 cgroup 管理器。

单个cgroup 管理器简化了正在分配资源的视图，并且默认情况下对可用资源和正在使用的资源有更一致的视图。当一个系统上有两个 cgroup 管理器时，您将得到这些资源的两个视图。在这个领域有人报告过这样的情况：配置为对 kubelet和 Docker 使用 cgroupfs，而对其余进程使用 systemd 的节点，在资源压力下变得不稳定。

改变设置，使 Container runtime 和 kubelet 使用 systemd 作为 cgroup驱动程序稳定系统。请为 Docker 配置 native.cgroupdriver=systemd（配置 Docker 的 cgroup driver 为 systemd.docx）。

警告：

强烈建议不要修改已加入集群的节点的 cgroup 驱动程序。如果 kubelet使用一个 cgroup 驱动程序的语义创建了 Pod，那么在试图为现有的 Pod 重新创建 Pod 沙箱时，将 Container runtime 更改为另一个 cgroup 驱动程序可能会导致错误。重新启动 kubelet 可能无法解决这些错误。如果有了自动化，可以使用更新后的配置将该节点替换为其他节点或者使用自动化重新安装该节点。

插件（Addons）：
Addons 使用 Kubernetes 资源(DaemonSet、Deployment等)来实现集群特性。因为它们提供了集群级别的特性，所以插件的命名空间资源属于 kube-system 命名空间。

DNS：
虽然其他插件不是严格要求的，但所有 Kubernetes 集群都应该有集群DNS，因为许多示例都依赖它。群集 DNS 是一个 DNS 服务器，除了您环境中的其他 DNS 服务器之外，它为 Kubernetes 服务提供 DNS 记录。Kubernetes 启动的容器会自动在 DNS 中搜索该 DNS 包含的服务器。

Web UI（Dashboard）：
Dashboard 是 Kubernetes 集群的通用、基于 Web 的 UI。它允许用户管理集群中运行的应用程序，并对其进行故障诊断。

Container Resource Monitoring（容器资源监控）：
Container Resource Monitoring 记录中央数据库中容器的一般时间序列指标，并提供一个用于浏览该数据的 UI。

Cluster-level Logging（集群级别日志）：
Cluster-level Logging 机制负责将容器日志保存到具有搜索/浏览界面的中央日志存储。

Kubernetes 核心技术：
Pod：

Pod 是可以在 Kubernetes 系统中创建和管理的最小的可部署计算单元。Pod 是一组（一个或多个）容器，这些容器共享存储、网络、以及运行这些容器的声明。Pod 是在 Kubernetes 上运行容器化应用的资源对象，其他的资源对象都是用来支撑或者扩展 Pod 对象功能的，比如 Controller 对象是用来管控 Pod 对象的，Service 或Ingress 资源对象是用来暴露 Pod 引用对象的，PersistentVolume 资源对象是用来为 Pod 提供存储等。Kubernetes 不会直接处理容器，而是直接处理 Pod，Pod 是由一个或多个 container 组成。

Pod 是 Kubernetes 的最重要概念，每一个 Pod 都有一个特殊的被称为“根容器”的 Pause容器。Pause 容器对应的镜像属于 Kubernetes 平台的一部分，除了 Pause 容器，每个 Pod 还包含一个或多个紧密相关的用户业务容器。

Pod 被设计成支持多个协作流程（作为容器），这些流程形成了一个内聚的服务单元。Pod 中的容器自动地在集群中的同一个物理机或虚拟机上同步定位和调度。容器可以共享资源和依赖项，相互通信，并协调何时以及如何终止它们。

Pod 特性：
1、资源共享
一个 Pod 里的多个容器可以共享存储和网络，可以看作一个逻辑的主机。共享的如 namespace、cgroups 或者其他的隔离资源。

多个容器共享同一 network namespace，由此在一个 Pod 里的多个容器共享 Pod 的 IP 和端口 namespace，所以一个 Pod 内的多个容器之间可以通过 localhost 来进行通信，所需要注意的是不同容器要注意不要有端口冲突即可。不同的 Pod 有不同的 IP，不同 Pod 内的多个容器之前通信，不可以使用 IPC（如果没有特殊指定的话）通信，通常情况下使用 Pod 的 IP 进行通信。

一个 Pod 里的多个容器可以共享存储卷，这个存储卷会被定义为 Pod 的一部分，并且可以挂载到该 Pod 里的所有容器的文件系统上。

2、生命周期短暂
Pod 属于生命周期比较短暂的组件，比如当 Pod 所在节点发生故障，那么该节点上的 Pod 会被调度到其他节点，但需要注意的是，被重新调度的 Pod 是一个全新的 Pod，跟之前的 Pod 没有半毛钱关系。

3、平坦的网络
k8s 集群中的所有 Pod 都在同一个共享网络地址空间中，也就是说每个 Pod 都可以通过其他 Pod 的 IP 地址来实现访问。

同一个 Pod 中的容器总会被调度到相同的 Node 节点，不同节点间 Pod 的通信基于虚拟二层网络技术实现。

Pod 状态：
Pending：
API Server 已经创建了该 Pod，但 Pod 中的一个或多个容器的镜像还没有下载或创建，亦未运行。此阶段包括等待 Pod 被调度的时间和通过网络下载镜像的时间。

Running：
Pod 已经绑定到某个节点，并且该 Pod 中所有容器已被创建，且至少一个容器处于运行状态、正在启动状态或正在重启状态。

Completed/Succeeded：
Pod 中所有容器都已成功执行退出，且不会再重启。

Failed：
Pod 中所有容器都已终止，但至少有一个容器是因为失败终止。也就是说，容器以非 0 状态退出或者被系统终止。

Unknown：
由于某种原因无法获取 Pod 状态，例如与 Pod 所在主机通讯失败。

Pod 的生命周期：
Pod 遵循一个已定义的生命周期，从挂起阶段开始，如果至少有一个主容器启动正常，则移动到运行阶段，然后根据 Pod 中的任何容器是否在失败中终止，通过成功会失败阶段。当 Pod 运行时， kubelet 能够重新启动容器来处理一些故障。在 Pod 中，Kubernetes 跟踪不同的容器状态，并决定采取什么行动使 Pod 恢复健康。在 Kubernetes API 中，Pod 有一个规范和一个实际状态。Pod 对象的状态由一组 Pod 条件组成，如果对应用程序有用，还可以将自定义就绪状态信息注入 Pod 的条件数据中。Pod 只会被安排一次，一旦一个 Pod 被调度（分配）到一个节点中，Pod 就会运行在哪个节点上，直到它停止或终止。

Pod 中的容器状态：
除了 Pod 的总体阶段外，Kubernetes 还跟踪 Pod 中每个容器的状态。您可以使用容器的生命周期钩子在容器生命周期的某些点触发事件。一旦调度器将 Pod 分配给 Node，kubelet 就开始使用容器运行时为该 Pod 创建容器。有三种可能的容器状态：Waiting、Running 和 Terminated。

要查看 Pod 容器的状态，可以使用 kubectl describe pod <Pod_name>，输出显示 Pod 中每个容器的状态。

Waiting：
如果容器既不处于 Running，也不处于 Terminated，则为 Waiting。处于Waiting 状态的容器仍在运行其启动所需的操作。例如，从某个容器镜像仓库中拉取容器镜像，或向容器应用 Secret 数据等等。当你使用 kubectl 来查询包含 Waiting 状态的容器的 Pod 时，你也会看到一个 Reason 字段，其中给出了容器处于 Waiting 状态的原因。

Running：
Running 状态表明容器正在执行状态并且没有问题发生。如果配置了 postStart 回调，那么该回调已经执行且已完成。如果你使用 kubectl 来查询包含 Running 状态的容器的 Pod 时，你也会看到关于容器进入 Running 状态的信息。

Terminated：
处于 Terminated 状态的容器已经执行完毕，并且正常结束或异常终止了。如果你使用 kubectl 来查询包含 Terminated 状态的容器的 Pod 时，你会看到容器进入此状态的原因、退出代码以及容器执行期间的起止时间。

如果容器配置了 preStop 回调，则该回调会在容器进入 Terminated 状态之前执行。

Pod 中容器的重启策略：
Always：
默认值，当容器失效时，由 kubelet 自动重启该容器。

OnFailure：
当容器终止运行且退出状态码不为 0 时，由 kubelet 自动重启该容器。

Never：
不论容器运行状态如何，kubelet 都不会重启该容器。

Label：

Label 是 Kubernetes 系统中的核心概念。一个 Label 是一个 key=value 的键值对，其中 key 与 value 由用户自己指定。Label 可以附加到各种资源对象上，如 Node、Pod、Service、RC，一个资源对象可以定义任意数量的 Label， 同一个 Label 也可以被添加到任意数量的资源对象上，Label 通常在资源对象定义时确定，也可以在对象创建后动态添加或删除。

Label 附加到 Kubernetes 集群中各种资源对象上，目的就是对这些资源对象进行分组管理，而分组管理的核心是 Label Selector。Label 与 Label Selector 都不能单独定义，必须附加在一些资源对象的定义文件上，一般附加 在 RC 和 Service 的资源定义文件中。

Controller：

Deployments：

Deployment 是 Kubenetes v1.2 引入的新概念，Deployment 是为 Pod 和 ReplicaSet 提供声明式的更新能力。

ReplicaSet（RS）：

ReplicaSet 和 ReplicationController 没有本质的不同，只是名字不一样，并且 RS 支持集合式的 selector（RC 仅支持等式）。Kubernetes 官方强烈建议避免直接使用 RS，而应该通过 Deployment 来创建 RS 和 Pod。由于 RS 是 RC 的代替物，因此用法基本相同，唯一的区别在于 RS 支持集合式的 selector。

RS 的目的是维护一组在任何时候都处于运行状态的 Pod 副本的稳定集合。因此，它通常用来保证给定数量的、完全相同的 Pod 的可用性。

RS 工作原理：
RS 是通过一组字段来定义的，包括一个用来识别可获得的 Pod 的集合的选择算符、一个用来标明应该维护的副本个数的数值、一个用来指定应该创建新 Pod 以满足副本个数条件时要使用的 Pod 模板等。每个 RS 都根据需要创建和删除 Pod 以使得副本个数达到期望值，进而实现其存在价值。当 RS 需要创建新的 Pod 时，会使用所提供的 Pod 模板。

RS 通过 Pod 上的 metadata.ownerReferences 字段连接到附属 Pod，该字段给出当前对象的属主资源。RS 所获得的 Pod 都在其 ownerReferences 字段中包含了属主 RS 的标识信息。正是通过这一连接，RS 知道它所维护的 Pod 集合的状态，并据此计划其操作行为。

RS 使用其选择算符来辨识要获得的 Pod 集合。如果某个 Pod 没有 OwnerReference 或者其 OwnerReference 不是一个控制器，且其匹配到某 RS 的选择算符，则该 Pod 立即被此 RS 获得。

何时使用 RS：
RS 确保任何时间都有指定数量的 Pod 副本在运行。然而 Deployment 是一个更高级的概念，它管理 RS，并向 Pod 提供声明式的更新以及许多其他有用的功能。因此我们建议使用 Deployment 而不是直接使用 RS，除非你需要自定义更新业务流程或根本不需要更新。

这实际上意味着，你可能永远不需要操作 RS 对象，而是使用 Deployment，并在 spec 部分定义你的应用。

StatefulSets：

StatefulSet 是用来管理有状态应用的工作负载 API 对象。StatefulSet 用来管理某 Pod 集合的部署和扩缩，并为这些 Pod 提供持久存储和持久标识符。和 Deployment 类似，StatefulSet 管理基于相同容器规约的一组 Pod。但和 Deployment 不同的是， StatefulSet 为它们的每个 Pod 维护了一个有粘性的 ID。这些 Pod 是基于相同的规约来创建的，但是不能相互替换，无论怎么调度，每个 Pod 都有一个永久不变的 ID。

如果希望使用存储卷为工作负载提供持久存储，可以使用 StatefulSet 作为解决方案的一部分。尽管 StatefulSet 中的单个 Pod 仍可能出现故障，但持久的 Pod 标识符使得将现有卷与替换已失败 Pod 的新 Pod 相匹配变得更加容易。

DaemonSet：

DaemonSet 确保全部（或者某些）节点上运行一个 Pod 的副本。当有节点加入集群时，也会为它们新增一个 Pod。当有节点从集群移除时，这些 Pod 也会被回收。删除 DaemonSet 将会删除它创建的所有 Pod。

DaemonSet 的典型用法：
1、在每个节点上运行集群守护进程；

2、在每个节点上运行日志收集守护进程；

3、在每个节点上运行监控守护进程。

一种简单的用法是为每种类型的守护进程在所有的节点上都启动一个 DaemonSet。一个稍微复杂的用法是为同一种守护进程部署多个 DaemonSet，每个具有不同的标志，并且对不同硬件类型具有不同的内存、CPU要求。

Jobs：

Job 会创建一个或者多个 Pods，并将继续重试 Pods 的执行，直到指定数量的 Pods 成功终止。 随着 Pods 成功结束，Job 跟踪记录成功完成的 Pods 个数。当数量达到指定的成功个数阈值时，Job 结束。删除 Job 的操作会清除所创建的全部 Pods。挂起 Job 的操作会删除 Job 的所有活跃 Pod，直到 Job 被再次恢复执行。

一种简单的使用场景下，你会创建一个 Job 对象以便以一种可靠的方式运行某 Pod 直到完成。当第一个 Pod 失败或者被删除（比如因为节点硬件失效或者重启）时，Job 对象会启动一个新的 Pod。你也可以使用 Job 以并行的方式运行多个 Pod。

CronJob：

CronJob 创建基于时隔重复调度的 Jobs。一个 CronJob 对象就像 crontab (cron table)文件中的一行。它用 Cron 格式进行编写，并周期性地在给定的调度时间执行 Job。

CronJobs 对于创建周期性的、反复重复的任务很有用，例如执行数据备份或者发送邮件。CronJobs 也可以用来计划在指定时间来执行的独立任务，例如计划当集群看起来很空闲时执行某个 Job。

ReplicationController（RC）：

RC 是 Kubernetes 系统中核心概念之一，当我们定义了一个 RC 并提交到 Kubernetes 集群中以后，控制平面节点上的 Controller Manager 组件就会得到通知，定期检查系统中存活的 Pod，并确保目标 Pod 实例的数量刚好等于 RC 的预期值，如果有过多或过少的 Pod 运行，系统就会停掉或创建一些 Pod。此外我们也可以通过修改 RC 的副本数量来实现 Pod 的动态缩放功能（kubectl scale rc nginx --replicas=5）。

由于 RC 与 Kubernetes 代码中的 ReplicationController 模块同名，所以在 Kubernetes v1.2 时，它就升级成了另外一个新的概念 ReplicaSet，官方解释为下一代的 RC，它与 RC 的区别是：ReplicaSet 支持基于集合的 Label selector，而 RC 只支持基于等式的 Label Selector。我们很少单独使用 ReplicaSet，它主要被 Deployment 这个更高层面的资源对象所使用，从而形成一整套创建、删除、更新 Pod 的编排机制。最好不要越过 RC 直接创建 Pod，因为 RC 会通过 RC 管理 Pod 副本，实现自动创建、补足、替换、删除 Pod 副本，这样能提高应用的容灾能力，减少由于节点崩溃等意外状况造成的损失。即使应用程序只有一个 Pod 副本，也强烈建议使用 RC 来定义 Pod。

ConfigMap：

ConfigMap 功能在 Kubernetes1.2 版本中引入，许多应用程序会从配置文件、命令行参数或环境变量中读取配置信息。ConfigMap API 给我们提供了向容器中注入配置信息的机制，ConfigMap 可以被用来保存单个属性，也可以用来保存整个配置文件或者 JSON 二进制大对象。

Service：

Service 是 Kubernetes 最核心概念，通过创建 Service 可以为一组具有相同功能的容器应用提供一个统一的入口地址，并且将请求均衡到后端的各个容器应用上。

服务类型：
ClusterIP：
通过集群的内部 IP 暴露服务，选择该值时服务只能够在集群内部访问。这也是默认的服务类型。

NodePort：
通过每个节点上的 IP 和静态端口（NodePort）暴露服务。NodePort 服务会路由到自动创建的 ClusterIP 服务。通过请求 <Node_IP>:<Node_Port>，你可以从集群的外部访问一个 NodePort 服务。对外暴露的端口范围是 30000-32767。

LoadBalancer：
使用云提供商的负载均衡器向外部暴露服务。 外部负载均衡器可以将流量路由到自动创建的 NodePort 服务和 ClusterIP 服务上。

ExternalName：
通过返回 CNAME 和对应值，可以将服务映射到 externalName 字段的内容（例如 http://foo.bar.example.com），无需创建任何类型代理。表示把集群外部的服务引入到集群内部中来，即实现了集群内部 Pod 和集群外部服务进行通信。

