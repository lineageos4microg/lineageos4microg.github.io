% LineageOS for microG
%
%

> %jumbotron%
> # <img src="/images/screen_logo.jpg" alt="LineageOS for microG">
> ### The full Android experience without Google Apps

## About
LineageOS for microG is a custom Android ROM which integrates the following components:
- [The LineageOS Android Distribution](https://lineageos.org/) A free and open-source operating system for various devices, based on the Android mobile platform.
- [microG:](https://microg.org/) A free-as-in-freedom re-implementation of Google’s proprietary Android user space apps and libraries.
- The [F-Droid App store](https://f-droid.org/) An installable catalogue of FOSS (Free and Open Source Software) applications for the Android platform.

### Project Objectives

1. Make regular builds of our ROM for all the phones and tablets currently supported officially by LineageOS;
2. Make the builds available for download for manual and OTA installation
3. Create and maintain the tools and computing resources needed to achieve 1 & 2.

A secondary objective is to make our main build tool available for other projects and individuals to use to make and maintain their own builds:
- of LineageOS for microG, 'vanilla' LineageOS, and / or other LOS-based custom ROMs (e.g. [IodéOS](https://iode.tech/));
- for other devices, whether or not officially supported by those projects.

### Project deliverables

1. The device-specific ROM `zip` files, for manual and OTA installation
2. Other device-specific `zip` and `.img` files that are needed for installing or updating the ROM zip file (e.g. `boot.img`,  `recovery.img`).
3. The Docker image used to make the builds, including the (limited) documentation in the `README.md`.

The ROM zips and other device-specific files are made available in sub-directories on [the download server](https://download.lineage.microg.org/).

The Docker image is pushed to [DockerHub](https://hub.docker.com/r/lineageos4microg/docker-lineage-cicd/).

### Upstreams

The project has two main 'upstream` projects:
- LineageOS ([website](https://lineageos.org/), [github repos](https://github.com/LineageOS))
- MicroG ([website](https://microg.org/), [github repos](https://github.com/microg))

Like LineageOS, the project also uses 'TheMuppets` [github](https://github.com/TheMuppets/) and [gitlab](https://gitlab.com/the-muppets) repos as the source for device-specific vendor binary blobs.

The main work of the project is to integrate the upstream components and build them into the ROM images we make available.

#### Build Targets and Frequency

We build for the same devices as LineageOS using [their list of build targets](https://github.com/LineageOS/hudson/blob/main/lineage-build-targets) as the input to our build run.

We aim to make builds monthly, and we (usually) start a 'build run' starting on the first day of the month. The devices included in a build run are defined by the content of the [LineageOS target list](https://github.com/LineageOS/hudson/blob/main/lineage-build-targets) ***at the point the build run starts***. Our monthly build run takes 15-20 days to complete. The progress of the build run is published in [a dedicated matrix room](https://matrix.to/#/#microg-lineage-os-builds:matrix.domainepublic.net)

If builds for any devices fail during a build run, we will try the build again ***after the main build run has completed***. If you do not see a new build for your device when you expect it, please check whether the build failure was reported in the matrix room. If it was, there is no need to report it - we will deal with it! If the failure was not reported in the matrix room, then please report it in [our issue tracker][issue-tracker] or in [the XDA Forums thread](https://xdaforums.com/t/lineageos-for-microg.3700997/)
