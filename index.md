# LineageOS for microG
![The full Android experience without Google Apps](images/screen_logo.jpg)

## The full Android experience without Google Apps

<ul class="actions">
  <p>
  <li>
    <a href="https://download.lineage.microg.org/" class=
    "button special icon fa-download">Download</a>
  </li>
  <li>
    <a href="https://liberapay.com/microG/" class=
    "button icon scrolly">
      <i class="fa fa-heart" aria-hidden="true" style="color:#EB1E63"></i>
      Donate</a>
  </li>
  <li>
    <a href="https://github.com/lineageos4microg/l4m-wiki/wiki/Installation" class=
    "button icon fa-chevron-down scrolly">Installation</a>
  </li>
  <li>
    <a href="https://github.com/lineageos4microg/l4m-wiki/wiki/" class=
    "button icon fa-chevron-down scrolly">Docs</a>
  </li>
  </p>
</ul>

## About
LineageOS for microG is a custom Android ROM which integrates the following components:
- [The LineageOS Android Distribution](https://lineageos.org/)<br>A free and open-source operating system for various devices, based on the Android mobile platform.
- [microG](https://microg.org/)<br>A free-as-in-freedom re-implementation of Google’s proprietary Android user space apps and libraries, enabling the use of every Google service you need without keeping another closed-source binary blob in your Android system
- The [F-Droid App store](https://f-droid.org/)<br>An installable catalogue of FOSS (Free and Open Source Software) applications for the Android platform. You can use it to access plenty of FOSS applications or even the Play Store via Aurora Store.

### Project Objectives

1. Make regular builds of our ROM for all the phones and tablets currently supported officially by LineageOS;
2. Make the builds available for download for manual and OTA installation
3. Create and maintain the tools and computing resources needed to achieve 1 & 2.

A secondary objective is to make our main build tool available for other projects and individuals to use to make and maintain their own builds:

- of LineageOS for microG, 'vanilla' LineageOS, and / or other LOS-based custom ROMs (e.g. [IodéOS](https://iode.tech/));
- for other devices, whether or not officially supported by those projects.

### Project deliverables

1. The device-specific ROM `zip` files, for manual and OTA installation: made available in sub-directories on [the download server](https://download.lineage.microg.org/)
2. Other device-specific `zip` and `.img` files that are needed for installing or updating the ROM zip file (e.g. `boot.img`, `recovery.img`): also made available on [the download server](https://download.lineage.microg.org/)
3. The Docker image used to make the builds: made available on [DockerHub](https://hub.docker.com/r/lineageos4microg/docker-lineage-cicd/)
4. Documentation
    - The [main project wiki](https://github.com/lineageos4microg/l4m-wiki/wiki)
    - The Docker image [`README.md`](https://github.com/lineageos4microg/docker-lineage-cicd#) and [wiki](https://github.com/lineageos4microg/docker-lineage-cicd/wiki)

### Build Targets and Frequency

We build for the same devices as LineageOS using [their list of build targets](https://github.com/LineageOS/hudson/blob/main/lineage-build-targets) as the input to our build run.

We aim to make builds monthly, and we (usually) start a 'build run' on the first day of the month. The devices included in a build run are defined by the content of the [LineageOS target list](https://github.com/LineageOS/hudson/blob/main/lineage-build-targets) ***at the point the build run starts***. Our monthly build run takes 20-25 days to complete. The progress of the build run is published in [a dedicated matrix room](https://matrix.to/#/#microg-lineage-os-builds:matrix.domainepublic.net)

If builds for any devices fail during a build run, we will try the build again ***after the main build run has completed***. If you do not see a new build for your device when you expect it, please check whether the build failure was reported in the matrix room. If it was, there is no need to report it - we will deal with it! If the failure was not reported in the matrix room, then please report it in [the `docker-lineage-cicd` project issue tracker](https://github.com/lineageos4microg/docker-lineage-cicd/issues) or in [the XDA Forums thread](https://xdaforums.com/t/lineageos-for-microg.3700997/)

### Upstreams

The project has two main 'upstream` projects:

- LineageOS ([website](https://lineageos.org/), [github repos](https://github.com/LineageOS))
- MicroG ([website](https://microg.org/), [github repos](https://github.com/microg))

Like LineageOS, the project also uses 'TheMuppets` [github](https://github.com/TheMuppets/) and [gitlab](https://gitlab.com/the-muppets) repos as the source for device-specific vendor binary blobs.

The main work of the project is to integrate the upstream components and build them into the ROM images we make available.

## Project Sponsor
Thanks to [SysEleven](https://www.syseleven.de/en/) who are generously providing the cloud computing resources the project uses to make and publish our builds, and to host this site.

<footer id="footer">
  <p class="copyright">© LineageOS for microG</p>
</footer>
