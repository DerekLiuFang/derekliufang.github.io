# Docker

## Docker 简介

Docker 最初是 dotCloud 公司创始人 Solomon Hykes 在法国期间发起的一个公司内部项目，它是基于 dotCloud 公司多年云服务技术的一次革新，并于 2013 年 3 月以 Apache 2.0 授权协议开源，主要项目代码在 GitHub 上进行维护。Docker 项目后来还加入了 Linux 基金会，并成立推动 开放容器联盟（OCI）。

Docker 使用 Google 公司推出的 Go 语言 进行开发实现，基于 Linux 内核的 cgroup，namespace，以及 OverlayFS 类的 Union FS 等技术，对进程进行封装隔离，属于 操作系统层面的虚拟化技术。由于隔离的进程独立于宿主和其它的隔离的进程，因此也称其为容器。最初实现是基于 LXC，从 0.7 版本以后开始去除 LXC，转而使用自行开发的 libcontainer，从 1.11 版本开始，则进一步演进为使用 runC 和 containerd。

## 基本概念

**镜像`iamges`**
我们都知道，操作系统分为 `内核` 和 `用户空间`。对于 Linux 而言，内核启动后，会挂载 root 文件系统为其提供用户空间支持。而`Docker 镜像（Image）`，就相当于是一个 root 文件系统。比如官方镜像 ubuntu:18.04 就包含了完整的一套 Ubuntu 18.04 最小系统的 root 文件系统。

## 常用 docker 命令

**1. 从镜像仓库`(images hub)`拉取镜像到本地**

```shell
# 拉取nginx镜像
docker pull nginx:latest
```

nginx: 镜像名称

latest: 镜像标签(类似版本号)

**2. 通过镜像生成容器**

```shell
# 生成nginx-test容器
docker run --name nginx-test -p 80:80 -v /tmp/nginx:/usr/share/nginx/html -e KEY1=VALUE1 -d  nginx:latest
```

--name: 容器名称（Container name）

-p: 指定端口映射(Ports HostPorts:ContainerPorts)

-v: 指定数据卷挂载目录(Volumes HostPath:ContainerPath)

-e: 指定环境变量(Environment variables)

-d: 后台运行

nginx:latest: 需要生成容器的本地镜像

docker run 命令执行成功后，会返回生成容器的 hash id：
![容器id](assets/images/docker-hash.awebp)

**3. 查看本地镜像和容器**

```shell
# 查看镜像
docker images
# 查看运行中的容器
docker ps
# 查看所有容器
docker ps -a
```

**4. 查看容器日志**

```shell
# 查看日志
docker logs containerId
```

![容器日志](assets/images/docker-logs.awebp)

**5. 查看容器详情**

```shell
# 查看详情
docker inspect containerId
```

![容器详情](assets/images/docker-inspect.awebp)

**6. 查看容器数据卷信息**

```shell
# 查看详情
docker volume
```

![容器详情](assets/images/docker-vol.awebp)

**7. 其他常用命令**

```shell
# 启动一个已经停止的容器
docker start containerId
# 删除一个容器
docker rm containerId
# 停止一个容器
docker stop containerId
```
