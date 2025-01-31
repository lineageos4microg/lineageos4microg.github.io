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

- of LineageOS for microG, 'vanilla' LineageOS, and / or other LineageOS-based custom ROMs (e.g. [IodéOS](https://iode.tech/));
- for other devices, whether or not officially supported by those projects.

### Project Status

The project is currently in a fairly stable state:
- we are (mostly) achieving our objective of delivering monthly builds
- the only essential work that is ongoing is to
    - monitor the delivery process,  to fix any problems that may occur, and to make any changes that are needed to ensure that the problems do not recur
    - to make any changes needed when upstreams make changes. In particular, when LineageOS introduces support for a new Android version and / or drops support for older Android versions

The project is therefore - in the opinion of the currently active maintainers - essentially 'feature complete' and in 'maintenance' mode. The only change that we believe might significantly improve the project is to support other classes of Android devices, specifically
- ~~`Minimal` & `Android TV` devices~~ (Now mostly supported)
- [`Treble-capable`](https://www.xda-developers.com/list-android-devices-project-treble-support/) devices which are not officially supported by LOS.  [As has recently been suggested](https://github.com/lineageos4microg/docker-lineage-cicd/issues/462) building for the `lineage_gsi` target would make our builds available for and usable on these devices.

### Project Deliverables

1. The device-specific ROM `zip` files, for manual and OTA installation: made available in sub-directories on [the download server](https://download.lineage.microg.org/)
2. Other device-specific `zip` and `.img` files that are needed for installing or updating the ROM zip file (e.g. `boot.img`, `recovery.img`): also made available on [the download server](https://download.lineage.microg.org/)
3. The Docker image used to make the builds: made available on [DockerHub](https://hub.docker.com/r/lineageos4microg/docker-lineage-cicd/)
4. Documentation
    - The [main project wiki](https://github.com/lineageos4microg/l4m-wiki/wiki)
    - The Docker image [`README.md`](https://github.com/lineageos4microg/docker-lineage-cicd#) and [wiki](https://github.com/lineageos4microg/docker-lineage-cicd/wiki)

### Project Priorities

There are always changes that ***could*** be made to the project: any project can always be "improved" in some way. When any changes are suggested, we will make decisions about them according to where they fit in the following "spectrum" of priority and importance:
1. ***Must*** be changed. Not changing them means we cannot deliver our key objectives e.g.
  - we cannot make our builds e.g. because our build tools are failing, our build servers are unavailable or out of service;
  - we cannot make the builds available for download e.g because the download server is unavailable or out of disk space
  - the builds don't run e.g. the [recent bootloop](https://github.com/lineageos4microg/docker-lineage-cicd/issues/720) or [flashing](https://github.com/lineageos4microg/docker-lineage-cicd/issues/727) problems
2. ***Should*** be changed. Changing them will significantly  
  - improve the quality of our deliverables (bulds, tools, documentation)
  - make life easier for users of our deliverables
  - make life easier for project maintainers
3. ***Could*** be fixed. Fixing them may
  - slightly improve quality, but take a lot of effort
  - add new functionality (to our tools or to our builds) which is 'nice to have' but not essential e.g. keeping old builds available after official support has ended
  - 'scratch an itch' for the project maintainers: e.g. changing the Docker image so that it can make builds of IodéOS or other custom ROMs based on lineageos4microg.
4. ***Should not*** be changed
  - change has limited benefit (for deliverable quality, for users, for project maintainers), but high cost / effort, or high risk
  - change has no benefit

Decisions about such changes are likely to be subjective: things like 'quality' or 'risk' can sometimes be very hard to define or to agree on. For the most part though, decisions on where a change lies on this spectrum are usually quite clear, to the project maintainers at least. 😄

### Build Targets and Frequency

We build for the same devices as LineageOS using [their list of build targets](https://github.com/LineageOS/hudson/blob/main/lineage-build-targets) as the input to our build run.

We aim to make builds monthly, and we (usually) start a 'build run' on the first day of the month. The devices included in a build run are defined by the content of the [LineageOS target list](https://github.com/LineageOS/hudson/blob/main/lineage-build-targets) ***at the point the build run starts***. Our monthly build run takes 20-25 days to complete. The progress of the build run is published in [a dedicated matrix room](https://matrix.to/#/#microg-lineage-os-builds:matrix.domainepublic.net)

If builds for any devices fail during a build run, we will try the build again ***after the main build run has completed***. If you do not see a new build for your device when you expect it, please check whether the build failure was reported in the matrix room. If it was, there is no need to report it - we will deal with it! If the failure was not reported in the matrix room, then please report it in [the `docker-lineage-cicd` project issue tracker](https://github.com/lineageos4microg/docker-lineage-cicd/issues) or in [the XDA Forums thread](https://xdaforums.com/t/lineageos-for-microg.3700997/)

#### Builds for devices no longer supported by LineageOS

When LineageOS stop supporting a device, the last LineageOS for MicroG build will be kept available on [our download server](https://download.lineage.microg.org/)

Some builds for devices which were last supported at version `lineage-18.1` can be found on [the Wayback Machine / Internet Archive](https://web.archive.org/web/20240527093848/https://download.lineage.microg.org/archive/)

### Project Github repositories

The project has two main public repositories on GitHub:
-  [`docker-lineage-cicd`]( https://github.com/lineageos4microg/docker-lineage-cicd)
 The Docker image used by the project to make the regular builds, along with a [`README.md`](https://github.com/lineageos4microg/docker-lineage-cicd#readme) explaining how it can be used. The Docker images is rebuilt and pushed to [DockerHub](https://hub.docker.com/r/lineageos4microg/docker-lineage-cicd/) automatically when changes are pushed to the `master` branch
- [`android_vendor_partner_gms`](https://github.com/lineageos4microg/android_vendor_partner_gms)
The pre-built components from MicroG, along with makefiles for easy integration in the Android build system. The pre-built components are pulled automatically from the MicroG releases.

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
