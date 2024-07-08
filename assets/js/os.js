const osData = {
    'Windows 10': {
        name: 'Windows 10',
        description: 'Windows 10 is an operating system developed by Microsoft.',
        downloadUrl: 'https://www.microsoft.com/en-us/software-download/windows10',
        setupScriptUrl: 'https://setupscript/windows10',
        toolchain: {
            'Windows SDK 10': 'https://developer.microsoft.com/en-us/windows/downloads/windows-10-sdk/',
            'PowerShell 7.1': 'https://github.com/PowerShell/PowerShell',
            '.NET Framework 4.8': 'https://dotnet.microsoft.com/download/dotnet-framework',
            'OpenSSH 8.1': 'https://github.com/PowerShell/Win32-OpenSSH',
            'OpenSSL 1.1.1': 'https://www.openssl.org/',
            '.NET Core 3.1': 'https://dotnet.microsoft.com/download/dotnet/3.1',
            'Visual Studio 2022 (supported)': 'https://visualstudio.microsoft.com/vs/older-downloads/',
            'TLS 1.2, 1.3': 'https://tools.ietf.org/html/rfc8446'
        },
        releaseModel: 'Semi-rolling release',
        releaseModelDesc: 'Releases major updates periodically of core components while continuously updating packages throughout each release cycle.',
        latestRelease: '22H2',
        latestReleaseUrl: 'https://support.microsoft.com/en-us/help/13853/windows-lifecycle-fact-sheet',
        supportUntil: 'October 14, 2025',
        supportUrl: 'https://support.microsoft.com/en-us/help/13853/windows-lifecycle-fact-sheet',
        developedBy: 'Microsoft',
        developedByUrl: 'https://www.microsoft.com',
        financedBy: 'Microsoft',
        financedByUrl: 'https://www.microsoft.com',
        licensing: 'Commercial',
        licensingUrl: 'https://www.microsoft.com/en-us/legal/intellectualproperty/copyright/default.aspx',
        fiscalManagement: 'Microsoft Corporation',
        fiscalManagementUrl: 'https://www.microsoft.com/en-us/about',
        officialRepresentative: [
            { name: 'Satya Nadella', url: 'https://www.microsoft.com/en-us/satya-nadella' },
            { name: 'Brad Smith', url: 'https://www.microsoft.com/en-us/brad-smith' }
        ],
        packageFormat: 'MSIX',
        packageManager: [
            { name: 'Windows Package Manager (winget)', example: 'winget install Mozilla.Firefox' }
        ],
        packageSource: 'https://winget.run/',
        appStore: { name: 'Microsoft Store', url: 'https://www.microsoft.com/store' }
    },
    'Windows 11': {
        name: 'Windows 11',
        description: 'Windows 11 is an operating system developed by Microsoft.',
        downloadUrl: 'https://www.microsoft.com/en-us/software-download/windows11',
        setupScriptUrl: 'https://setupscript/windows11',
        toolchain: {
            'Windows SDK 11': 'https://developer.microsoft.com/en-us/windows/downloads/windows-sdk/',
            'PowerShell 7.2': 'https://github.com/PowerShell/PowerShell',
            '.NET Framework 4.8': 'https://dotnet.microsoft.com/download/dotnet-framework',
            'OpenSSH 8.2': 'https://github.com/PowerShell/Win32-OpenSSH',
            'OpenSSL 1.1.1': 'https://www.openssl.org/',
            '.NET Core 5.0': 'https://dotnet.microsoft.com/download/dotnet/5.0',
            'Visual Studio 2022 (supported)': 'https://visualstudio.microsoft.com/vs/older-downloads/',
            'TLS 1.2, 1.3': 'https://tools.ietf.org/html/rfc8446'
        },
        releaseModel: 'Fixed Release',
        releaseModelDesc: 'Releases major updates periodically of core components and packages with a focus on stability.',
        latestRelease: '22H2',
        latestReleaseUrl: 'https://support.microsoft.com/en-us/help/13853/windows-lifecycle-fact-sheet',
        supportUntil: 'October 14, 2025',
        supportUrl: 'https://support.microsoft.com/en-us/help/13853/windows-lifecycle-fact-sheet',
        developedBy: 'Microsoft',
        developedByUrl: 'https://www.microsoft.com',
        financedBy: 'Microsoft',
        financedByUrl: 'https://www.microsoft.com',
        licensing: 'Commercial',
        licensingUrl: 'https://www.microsoft.com/en-us/legal/intellectualproperty/copyright/default.aspx',
        fiscalManagement: 'Microsoft Corporation',
        fiscalManagementUrl: 'https://www.microsoft.com/en-us/about',
        officialRepresentative: [
            { name: 'Satya Nadella', url: 'https://www.microsoft.com/en-us/satya-nadella' },
            { name: 'Brad Smith', url: 'https://www.microsoft.com/en-us/brad-smith' }
        ],
        packageFormat: 'MSIX',
        packageManager: [
            { name: 'Windows Package Manager (winget)', example: 'winget install Mozilla.Firefox' }
        ],
        packageSource: 'https://winget.run/',
        appStore: { name: 'Microsoft Store', url: 'https://www.microsoft.com/store' }
    },
    'Windows Server 2016': {
        name: 'Windows Server 2016',
        description: 'Windows Server 2016 is a server operating system produced by Microsoft.',
        downloadUrl: 'https://www.microsoft.com/en-us/software-download/windows-server-2016',
        setupScriptUrl: 'https://setupscript/windows-server-2016',
        toolchain: {
            'Windows SDK 10': 'https://developer.microsoft.com/en-us/windows/downloads/windows-sdk/',
            'PowerShell 7.1': 'https://github.com/PowerShell/PowerShell',
            '.NET Framework 4.8': 'https://dotnet.microsoft.com/download/dotnet-framework',
            'OpenSSH 8.1': 'https://github.com/PowerShell/Win32-OpenSSH',
            'OpenSSL 1.1.1': 'https://www.openssl.org/',
            '.NET Core 2.1': 'https://dotnet.microsoft.com/download/dotnet/2.1',
            'Visual Studio 2022 (supported)': 'https://visualstudio.microsoft.com/vs/older-downloads/',
            'TLS 1.2, 1.3': 'https://tools.ietf.org/html/rfc8446'
        },
        releaseModel: 'Fixed Release',
        releaseModelDesc: 'Releases major updates periodically of core components and packages with a focus on stability.',
        latestRelease: 'Server 2016',
        latestReleaseUrl: 'https://support.microsoft.com/en-us/lifecycle/search?alpha=Windows%20Server%202016',
        supportUntil: 'January 12, 2027',
        supportUrl: 'https://support.microsoft.com/en-us/lifecycle/search?alpha=Windows%20Server%202016',
        developedBy: 'Microsoft',
        developedByUrl: 'https://www.microsoft.com',
        financedBy: 'Microsoft',
        financedByUrl: 'https://www.microsoft.com',
        licensing: 'Commercial',
        licensingUrl: 'https://www.microsoft.com/en-us/legal/intellectualproperty/copyright/default.aspx',
        fiscalManagement: 'Microsoft Corporation',
        fiscalManagementUrl: 'https://www.microsoft.com/en-us/about',
        officialRepresentative: [
            { name: 'Satya Nadella', url: 'https://www.microsoft.com/en-us/satya-nadella' },
            { name: 'Brad Smith', url: 'https://www.microsoft.com/en-us/brad-smith' }
        ],
        packageFormat: 'MSIX',
        packageManager: [
            { name: 'Windows Package Manager (winget)', example: 'winget install Mozilla.Firefox' }
        ],
        packageSource: 'https://winget.run/',
        appStore: { name: 'Microsoft Store', url: 'https://www.microsoft.com/store' }
    },
    'Windows Server 2019': {
        name: 'Windows Server 2019',
        description: 'Windows Server 2019 is a server operating system produced by Microsoft.',
        downloadUrl: 'https://www.microsoft.com/en-us/software-download/windows-server-2019',
        setupScriptUrl: 'https://setupscript/windows-server-2019',
        toolchain: {
            'Windows SDK 10': 'https://developer.microsoft.com/en-us/windows/downloads/windows-sdk/',
            'PowerShell 7.2': 'https://github.com/PowerShell/PowerShell',
            '.NET Framework 4.8': 'https://dotnet.microsoft.com/download/dotnet-framework',
            'OpenSSH 8.1': 'https://github.com/PowerShell/Win32-OpenSSH',
            'OpenSSL 1.1.1': 'https://www.openssl.org/',
            '.NET Core 3.1': 'https://dotnet.microsoft.com/download/dotnet/3.1',
            'Visual Studio 2022 (supported)': 'https://visualstudio.microsoft.com/vs/older-downloads/',
            'TLS 1.2, 1.3': 'https://tools.ietf.org/html/rfc8446'
        },
        releaseModel: 'Fixed Release',
        releaseModelDesc: 'Releases major updates periodically of core components and packages with a focus on stability.',
        latestRelease: 'Server 2019',
        latestReleaseUrl: 'https://support.microsoft.com/en-us/lifecycle/search?alpha=Windows%20Server%202019',
        supportUntil: 'January 9, 2029',
        supportUrl: 'https://support.microsoft.com/en-us/lifecycle/search?alpha=Windows%20Server%202019',
        developedBy: 'Microsoft',
        developedByUrl: 'https://www.microsoft.com',
        financedBy: 'Microsoft',
        financedByUrl: 'https://www.microsoft.com',
        licensing: 'Commercial',
        licensingUrl: 'https://www.microsoft.com/en-us/legal/intellectualproperty/copyright/default.aspx',
        fiscalManagement: 'Microsoft Corporation',
        fiscalManagementUrl: 'https://www.microsoft.com/en-us/about',
        officialRepresentative: [
            { name: 'Satya Nadella', url: 'https://www.microsoft.com/en-us/satya-nadella' },
            { name: 'Brad Smith', url: 'https://www.microsoft.com/en-us/brad-smith' }
        ],
        packageFormat: 'MSIX',
        packageManager: [
            { name: 'Windows Package Manager (winget)', example: 'winget install Mozilla.Firefox' }
        ],
        packageSource: 'https://winget.run/',
        appStore: { name: 'Microsoft Store', url: 'https://www.microsoft.com/store' }
    },
    'Windows Server 2022': {
        name: 'Windows Server 2022',
        description: 'Windows Server 2022 is a server operating system produced by Microsoft.',
        downloadUrl: 'https://www.microsoft.com/en-us/software-download/windows-server-2022',
        setupScriptUrl: 'https://setupscript/windows-server-2022',
        toolchain: {
            'Windows SDK 11': 'https://developer.microsoft.com/en-us/windows/downloads/windows-sdk/',
            'PowerShell 7.2': 'https://github.com/PowerShell/PowerShell',
            '.NET Framework 4.8': 'https://dotnet.microsoft.com/download/dotnet-framework',
            'OpenSSH 8.2': 'https://github.com/PowerShell/Win32-OpenSSH',
            'OpenSSL 1.1.1': 'https://www.openssl.org/',
            '.NET Core 5.0': 'https://dotnet.microsoft.com/download/dotnet/5.0',
            'Visual Studio 2022 (supported)': 'https://visualstudio.microsoft.com/vs/older-downloads/',
            'TLS 1.2, 1.3': 'https://tools.ietf.org/html/rfc8446'
        },
        releaseModel: 'Fixed Release',
        releaseModelDesc: 'Releases major updates periodically of core components and packages with a focus on stability.',
        latestRelease: 'Server 2022',
        latestReleaseUrl: 'https://support.microsoft.com/en-us/lifecycle/search?alpha=Windows%20Server%202022',
        supportUntil: 'October 14, 2031',
        supportUrl: 'https://support.microsoft.com/en-us/lifecycle/search?alpha=Windows%20Server%202022',
        developedBy: 'Microsoft',
        developedByUrl: 'https://www.microsoft.com',
        financedBy: 'Microsoft',
        financedByUrl: 'https://www.microsoft.com',
        licensing: 'Commercial',
        licensingUrl: 'https://www.microsoft.com/en-us/legal/intellectualproperty/copyright/default.aspx',
        fiscalManagement: 'Microsoft Corporation',
        fiscalManagementUrl: 'https://www.microsoft.com/en-us/about',
        officialRepresentative: [
            { name: 'Satya Nadella', url: 'https://www.microsoft.com/en-us/satya-nadella' },
            { name: 'Brad Smith', url: 'https://www.microsoft.com/en-us/brad-smith' }
        ],
        packageFormat: 'MSIX',
        packageManager: [
            { name: 'Windows Package Manager (winget)', example: 'winget install Mozilla.Firefox' }
        ],
        packageSource: 'https://winget.run/',
        appStore: { name: 'Microsoft Store', url: 'https://www.microsoft.com/store' }
    },
    'macOS Big Sur': {
        name: 'macOS Big Sur',
        description: 'macOS Big Sur is an operating system developed by Apple.',
        downloadUrl: 'https://www.apple.com/macos/big-sur/',
        setupScriptUrl: 'https://setupscript/macosbigsur',
        toolchain: {
            'Xcode 12.5 (supported)': 'https://developer.apple.com/xcode/',
            'OpenSSH 8.1p1': 'https://opensource.apple.com/',
            'OpenSSL 1.1.1': 'https://www.openssl.org/',
            'Python 3.8': 'https://www.python.org/',
            'Ruby 2.7': 'https://www.ruby-lang.org/en/',
            'Homebrew 2.7.7': 'https://brew.sh/',
            'TLS 1.2, 1.3': 'https://tools.ietf.org/html/rfc8446'
        },
        releaseModel: 'Fixed Release',
        releaseModelDesc: 'Releases major updates periodically of core components and packages with a focus on stability.',
        latestRelease: 'Big Sur',
        latestReleaseUrl: 'https://support.apple.com/en-us/HT201222',
        supportUntil: 'November 30, 2023',
        supportUrl: 'https://support.apple.com/en-us/HT201222',
        developedBy: 'Apple Inc.',
        developedByUrl: 'https://www.apple.com',
        financedBy: 'Apple Inc.',
        financedByUrl: 'https://www.apple.com',
        licensing: 'Commercial',
        licensingUrl: 'https://www.apple.com/legal/intellectual-property/',
        fiscalManagement: 'Apple Inc.',
        fiscalManagementUrl: 'https://www.apple.com/legal/',
        officialRepresentative: [
            { name: 'Tim Cook', url: 'https://www.apple.com/leadership/tim-cook/' },
            { name: 'Katherine Adams', url: 'https://www.apple.com/leadership/katherine-adams/' }
        ],
        packageFormat: 'PKG',
        packageManager: [
            { name: 'Homebrew', example: 'brew install firefox' }
        ],
        packageSource: 'https://formulae.brew.sh/',
        appStore: { name: 'Mac App Store', url: 'https://www.apple.com/app-store/' }
    },
    'macOS Sonoma': {
        name: 'macOS Sonoma',
        description: 'macOS Sonoma is an operating system developed by Apple.',
        downloadUrl: 'https://www.apple.com/macos/sonoma/',
        setupScriptUrl: 'https://setupscript/macossoma',
        toolchain: {
            'Xcode 13.0 (supported)': 'https://developer.apple.com/xcode/',
            'OpenSSH 8.2p1': 'https://opensource.apple.com/',
            'OpenSSL 1.1.1': 'https://www.openssl.org/',
            'Python 3.9': 'https://www.python.org/',
            'Ruby 3.0': 'https://www.ruby-lang.org/en/',
            'Homebrew 3.1.0': 'https://brew.sh/',
            'TLS 1.2, 1.3': 'https://tools.ietf.org/html/rfc8446'
        },
        releaseModel: 'Fixed Release',
        releaseModelDesc: 'Releases major updates periodically of core components and packages with a focus on stability.',
        latestRelease: 'Sonoma',
        latestReleaseUrl: 'https://support.apple.com/en-us/HT201222',
        supportUntil: 'November 30, 2024',
        supportUrl: 'https://support.apple.com/en-us/HT201222',
        developedBy: 'Apple Inc.',
        developedByUrl: 'https://www.apple.com',
        financedBy: 'Apple Inc.',
        financedByUrl: 'https://www.apple.com',
        licensing: 'Commercial',
        licensingUrl: 'https://www.apple.com/legal/intellectual-property/',
        fiscalManagement: 'Apple Inc.',
        fiscalManagementUrl: 'https://www.apple.com/legal/',
        officialRepresentative: [
            { name: 'Tim Cook', url: 'https://www.apple.com/leadership/tim-cook/' },
            { name: 'Katherine Adams', url: 'https://www.apple.com/leadership/katherine-adams/' }
        ],
        packageFormat: 'PKG',
        packageManager: [
            { name: 'Homebrew', example: 'brew install firefox' }
        ],
        packageSource: 'https://formulae.brew.sh/',
        appStore: { name: 'Mac App Store', url: 'https://www.apple.com/app-store/' }
    },
    'Debian': {
        name: 'Debian',
        description: 'For users who seek a user-friendly system that prioritize accesibility, compatibility and stability over the latest features and package versions.',
        downloadUrl: 'https://get.debian.org/images/release/current-live/amd64/iso-hybrid/debian-live-12.6.0-amd64-gnome.iso',
        setupScriptUrl: 'https://setupscript/debian',
        toolchain: {
            'GCC 12.2.0': 'https://gcc.gnu.org/',
            'Binutils 2.40': 'https://www.gnu.org/software/binutils/',
            'LLVM 14.0.6': 'https://llvm.org/',
            'Perl 5.36.0': 'https://www.perl.org/',
            'Golang 1.19.8': 'https://golang.org/',
            'Python 3.11.2': 'https://www.python.org/',
            'Rustc 1.63.0': 'https://www.rust-lang.org/',
            'OpenSSH 9.2p1': 'https://www.openssh.com/',
            'OpenSSL 3.0.13': 'https://www.openssl.org/',
            'TLS 1.2, 1.3': 'https://tools.ietf.org/html/rfc8446'
        },
        releaseModel: 'Fixed Release',
        releaseModelDesc: 'Releases major updates periodically of core components and packages with a focus on stability.',
        latestRelease: 'Debian 12.6',
        latestReleaseUrl: 'https://www.debian.org/releases/',
        supportUntil: 'June 2028',
        supportUrl: 'https://endoflife.date/debian',
        developedBy: 'Debian Project',
        developedByUrl: 'https://www.debian.org',
        financedBy: 'Community',
        financedByUrl: 'https://www.debian.org',
        licensing: 'GPL',
        licensingUrl: 'https://www.gnu.org/licenses/gpl-3.0.html',
        fiscalManagement: 'Software in the Public Interest, Inc.',
        fiscalManagementUrl: 'https://www.spi-inc.org',
        officialRepresentative: [
            { name: 'Jonathan Carter', url: 'https://www.debian.org/intro/organization#leader' }
        ],
        packageFormat: 'DEB',
        packageManager: [
            { name: 'APT', example: 'sudo apt install firefox' },
            { name: 'Flatpak', example: 'flatpak install flathub org.mozilla.firefox' }
        ],
        packageSource: 'https://packages.debian.org/',
        appStore: { name: 'Snap Store', url: 'https://snapcraft.io/store' }
    },
    'Fedora': {
        name: 'Fedora',
        description: 'For users can you who seek a user-friendly system that brings latest 100% open-source technologies, features and solutions.',
        downloadUrl: 'https://download.fedoraproject.org/pub/fedora/linux/releases/40/Workstation/x86_64/iso/Fedora-Workstation-Live-x86_64-40-1.14.iso',
        setupScriptUrl: 'https://setupscript/fedora',
        toolchain: {
            'GCC 14.1.1': 'https://gcc.gnu.org/',
            'Binutils 2.41': 'https://www.gnu.org/software/binutils/',
            'LLVM 18.1.6': 'https://llvm.org/',
            'Perl 5.38.2': 'https://www.perl.org/',
            'Golang 1.22.4': 'https://golang.org/',
            'Python 3.12.4': 'https://www.python.org/',
            'Rustc 1.79.0': 'https://www.rust-lang.org/',
            'OpenSSH 9.6p1': 'https://www.openssh.com/',
            'OpenSSL 3.2.1': 'https://www.openssl.org/',
            'TLS 1.2, 1.3': 'https://tools.ietf.org/html/rfc8446'
        },
        releaseModel: 'Semi-rolling Release',
        releaseModelDesc: 'Releases major updates periodically of core components while continuously updating packages throughout each release cycle.',
        latestRelease: 'Fedora 40',
        latestReleaseUrl: 'https://fedoraproject.org/',
        supportUntil: 'May 2025',
        supportUrl: 'https://endoflife.date/fedora',
        developedBy: 'Fedora Project',
        developedByUrl: 'https://fedoraproject.org',
        financedBy: 'Red Hat',
        financedByUrl: 'https://www.redhat.com',
        licensing: 'GPL',
        licensingUrl: 'https://www.gnu.org/licenses/gpl-3.0.html',
        fiscalManagement: 'Red Hat, Inc.',
        fiscalManagementUrl: 'https://www.redhat.com/en/about/company',
        officialRepresentative: [
            { name: 'Matthew Miller', url: 'https://fedoraproject.org/wiki/User:Mattdm' }
        ],
        packageFormat: 'RPM',
        packageManager: [
            { name: 'DNF', example: 'sudo dnf install firefox' },
            { name: 'Flatpak', example: 'flatpak install flathub org.mozilla.firefox' }
        ],
        packageSource: 'https://packages.fedoraproject.org/',
        appStore: { name: 'GNOME Software', url: 'https://wiki.gnome.org/Apps/Software' }
    },
    'openSUSE': {
        name: 'openSUSE',
        description: 'For users who seek a user-friendly system that offers both stability (Leap) and cutting-edge options (Tumbleweed), with packages either stable or close to upstream versions.',
        downloadUrl: 'https://www.opensuse.org/',
        setupScriptUrl: 'https://setupscript/opensuse',
        toolchain: {
            'GCC 10.2.1': 'https://gcc.gnu.org/',
            'Binutils 2.35.1': 'https://www.gnu.org/software/binutils/',
            'LLVM 11.0.1': 'https://llvm.org/',
            'Perl 5.32.1': 'https://www.perl.org/',
            'Golang 1.15.9': 'https://golang.org/',
            'Python 3.9.2': 'https://www.python.org/',
            'Rustc 1.49.0': 'https://www.rust-lang.org/',
            'OpenSSH 8.4p1': 'https://www.openssh.com/',
            'OpenSSL 1.1.1j': 'https://www.openssl.org/',
            'TLS 1.2, 1.3': 'https://tools.ietf.org/html/rfc8446'
        },
        releaseModel: 'Fixed Release',
        releaseModelDesc: 'Releases major updates periodically of core components and packages with a focus on stability.',
        latestRelease: 'Leap 15.3',
        latestReleaseUrl: 'https://en.opensuse.org/Releases',
        supportUntil: 'October 2024',
        supportUrl: 'https://en.opensuse.org/Lifetime',
        developedBy: 'openSUSE Project',
        developedByUrl: 'https://www.opensuse.org',
        financedBy: 'Community',
        financedByUrl: 'https://www.opensuse.org',
        licensing: 'GPL',
        licensingUrl: 'https://www.gnu.org/licenses/gpl-3.0.html',
        fiscalManagement: 'openSUSE Project',
        fiscalManagementUrl: 'https://www.opensuse.org',
        officialRepresentative: [
            { name: 'Douglas DeMaio', url: 'https://en.opensuse.org/User:Dimstar' }
        ],
        packageFormat: 'RPM',
        packageManager: [
            { name: 'Zypper', example: 'sudo zypper install firefox' },
            { name: 'Flatpak', example: 'flatpak install flathub org.mozilla.firefox' }
        ],
        packageSource: 'https://build.opensuse.org/',
        appStore: { name: 'YaST', url: 'https://en.opensuse.org/Portal:YaST' }
    },
    'Gentoo': {
        name: 'Gentoo',
        description: 'For users who seek an advanced system that offers maximum performance and customatization by allowing them to compile packages from source.',
        downloadUrl: 'https://www.gentoo.org/downloads/',
        setupScriptUrl: 'https://setupscript/gentoo',
        toolchain: {
            'GCC 10.2.0': 'https://gcc.gnu.org/',
            'Binutils 2.35.1': 'https://www.gnu.org/software/binutils/',
            'LLVM 11.0.0': 'https://llvm.org/',
            'Perl 5.32.0': 'https://www.perl.org/',
            'Golang 1.15.6': 'https://golang.org/',
            'Python 3.8.7': 'https://www.python.org/',
            'Rustc 1.47.0': 'https://www.rust-lang.org/',
            'OpenSSH 8.4p1': 'https://www.openssh.com/',
            'OpenSSL 1.1.1i': 'https://www.openssl.org/',
            'TLS 1.2, 1.3': 'https://tools.ietf.org/html/rfc8446'
        },
        releaseModel: 'Rolling Release',
        releaseModelDesc: 'Provides continuous updates for core components and packages without distinct version releases.',
        latestRelease: 'Rolling',
        latestReleaseUrl: 'https://wiki.gentoo.org/wiki/Handbook:AMD64/Installation/Media',
        supportUntil: 'N/A',
        supportUrl: 'https://wiki.gentoo.org/wiki/Main_Page',
        developedBy: 'Gentoo Foundation',
        developedByUrl: 'https://www.gentoo.org',
        financedBy: 'Community',
        financedByUrl: 'https://www.gentoo.org',
        licensing: 'GPL',
        licensingUrl: 'https://www.gnu.org/licenses/gpl-3.0.html',
        fiscalManagement: 'Gentoo Foundation, Inc.',
        fiscalManagementUrl: 'https://www.gentoo.org/foundation/en/',
        officialRepresentative: [
            { name: 'Robin H. Johnson', url: 'https://www.gentoo.org/about/trustees/#robbat2' }
        ],
        packageFormat: 'Source',
        packageManager: [
            { name: 'Portage', example: 'emerge --ask www-client/firefox' },
            { name: 'Flatpak', example: 'flatpak install flathub org.mozilla.firefox' }
        ],
        packageSource: 'https://packages.gentoo.org/',
        appStore: { name: 'N/A', url: 'N/A' }
    },
    'NixOS': {
        name: 'NixOS',
        description: 'For users who require an advanced system which is reliable, with reproducible system configurations, and a focus on development and deployment environments.',
        downloadUrl: 'https://nixos.org/download.html',
        setupScriptUrl: 'https://setupscript/nixos',
        toolchain: {
            'GCC 10.3.0': 'https://gcc.gnu.org/',
            'Binutils 2.36.1': 'https://www.gnu.org/software/binutils/',
            'LLVM 12.0.0': 'https://llvm.org/',
            'Perl 5.32.1': 'https://www.perl.org/',
            'Golang 1.16.3': 'https://golang.org/',
            'Python 3.9.4': 'https://www.python.org/',
            'Rustc 1.51.0': 'https://www.rust-lang.org/',
            'OpenSSH 8.6p1': 'https://www.openssh.com/',
            'OpenSSL 1.1.1k': 'https://www.openssl.org/',
            'TLS 1.2, 1.3': 'https://tools.ietf.org/html/rfc8446'
        },
        releaseModel: 'Rolling Release',
        releaseModelDesc: 'Provides continuous updates for core components and packages without distinct version releases.',
        latestRelease: '21.11',
        latestReleaseUrl: 'https://nixos.org/releases.html',
        supportUntil: 'N/A',
        supportUrl: 'https://nixos.org/',
        developedBy: 'NixOS Foundation',
        developedByUrl: 'https://nixos.org',
        financedBy: 'Community',
        financedByUrl: 'https://nixos.org',
        licensing: 'GPL',
        licensingUrl: 'https://www.gnu.org/licenses/gpl-3.0.html',
        fiscalManagement: 'NixOS Foundation',
        fiscalManagementUrl: 'https://nixos.org/',
        officialRepresentative: [
            { name: 'Eelco Dolstra', url: 'https://nixos.org/users.html#eelco' }
        ],
        packageFormat: 'Nix',
        packageManager: [
            { name: 'Nix', example: 'nix-env -iA nixpkgs.firefox' },
            { name: 'Flatpak', example: 'flatpak install flathub org.mozilla.firefox' }
        ],
        packageSource: 'https://nixos.org/nixos/packages.html',
        appStore: { name: 'N/A', url: 'N/A' }
    },
    'Arch': {
        name: 'Arch',
        description: 'For users who seek a highly customizable and lightweight system that they can build from scratch, and want to keep up with upstream versions of all packages as much as possible.',
        downloadUrl: 'https://www.archlinux.org/download/',
        setupScriptUrl: 'https://setupscript/arch',
        toolchain: {
            'GCC 10.2.0': 'https://gcc.gnu.org/',
            'Binutils 2.35.1': 'https://www.gnu.org/software/binutils/',
            'LLVM 11.1.0': 'https://llvm.org/',
            'Perl 5.32.1': 'https://www.perl.org/',
            'Golang 1.16.2': 'https://golang.org/',
            'Python 3.9.4': 'https://www.python.org/',
            'Rustc 1.51.0': 'https://www.rust-lang.org/',
            'OpenSSH 8.5p1': 'https://www.openssh.com/',
            'OpenSSL 1.1.1k': 'https://www.openssl.org/',
            'TLS 1.2, 1.3': 'https://tools.ietf.org/html/rfc8446'
        },
        releaseModel: 'Rolling Release',
        releaseModelDesc: 'Provides continuous updates for core components and packages without distinct version releases.',
        latestRelease: 'Rolling',
        latestReleaseUrl: 'https://www.archlinux.org/releng/releases/',
        supportUntil: 'N/A',
        supportUrl: 'https://wiki.archlinux.org/',
        developedBy: 'Levente Polyak',
        developedByUrl: 'https://www.archlinux.org/people/developers/#levente-polyak',
        financedBy: 'Community',
        financedByUrl: 'https://archlinux.org/donate/',
        licensing: 'GPL',
        licensingUrl: 'https://www.gnu.org/licenses/gpl-3.0.html',
        fiscalManagement: 'Arch Linux Team',
        fiscalManagementUrl: 'https://archlinux.org/',
        officialRepresentative: [
            { name: 'Levente Polyak', url: 'https://www.archlinux.org/people/developers/#levente-polyak' }
        ],
        packageFormat: 'PKGBUILD',
        packageManager: [
            { name: 'Pacman', example: 'sudo pacman -S firefox' },
            { name: 'Flatpak', example: 'flatpak install flathub org.mozilla.firefox' }
        ],
        packageSource: 'https://aur.archlinux.org/',
        appStore: { name: 'AUR', url: 'https://aur.archlinux.org/' }
    }
};

function generateLinks(toolchain) {
    return Object.keys(toolchain).map(key => {
        return `<a href="${toolchain[key]}">${key}</a>`;
    }).join('<br>');
}

function selectMainSquare(os, element) {
    const firstRow = document.getElementById('firstRow');
    firstRow.style.height = '5vh';

    const secondRow = document.getElementById('secondRow');
    secondRow.style.height = '5vh';

    // Remove selected class from all main squares
    const mainSquares = document.querySelectorAll('.first-row .square');
    mainSquares.forEach(square => square.classList.remove('selected'));

    // Add selected class to the clicked main square
    element.classList.add('selected');

    // Populate the second row based on the selected OS
    let squaresContent = [];
    if (os === 'Windows') {
        squaresContent = ['Windows 10', 'Windows 11', 'Windows Server 2016', 'Windows Server 2019', 'Windows Server 2022'];
    } else if (os === 'macOS') {
        squaresContent = ['macOS Big Sur', 'macOS Sonoma'];
    } else if (os === 'Linux') {
        squaresContent = ['Debian', 'Fedora', 'openSUSE', 'Gentoo', 'NixOS', 'Arch'];
    }

    secondRow.innerHTML = squaresContent.map(content => 
        `<div class="small-square" onclick="changeContent('${content}')">${content}</div>`
    ).join('');
}

function changeContent(content) {
    const squares = document.querySelectorAll('.small-square');
    squares.forEach(square => square.classList.remove('selected'));
    event.target.classList.add('selected');

    const data = osData[content];
    document.getElementById('bigSquare').innerHTML = `
        <div class="row">
            <div class="horizontal-division-large">
                <h3>${data.name}</h3>
                <p>${data.description}</p>
                <a href="${data.downloadUrl}" class="download-button">Download</a>
                <button class="setup-button" onclick="copyToClipboard('${data.setupScriptUrl}')">Setup Script</button>
            </div>
            <div class="horizontal-division-small">
                <h4>Toolchain (updated monthly)</h4>
                <pre>${generateLinks(data.toolchain)}</pre>
            </div>
        </div>
        <div class="row">
            <div class="horizontal-division-small">
                <h4>Latest Release</h4>
                <a href="${data.latestReleaseUrl}">${data.latestRelease}</a>
                <h4>Support Until</h4>
                <a href="${data.supportUrl}">${data.supportUntil}</a>
                <h4>Licensing</h4>
                <a href="${data.licensingUrl}">${data.licensing}</a>
            </div>
            <div class="horizontal-division-small">
                <h4>Release Model</h4>
                <p>${data.releaseModel}</p>
                <p>${data.releaseModelDesc}</p>
            </div>
            <div class="horizontal-division-small">
                <h4>Official Representative</h4>
                ${data.officialRepresentative.map(rep => `<a href="${rep.url}">${rep.name}</a>`).join('<br>')}
                <h4>Developed By</h4>
                <a href="${data.developedByUrl}">${data.developedBy}</a>
                <h4>Financed By</h4>
                <a href="${data.financedByUrl}">${data.financedBy}</a>
                <h4>Fiscal Management</h4>
                <a href="${data.fiscalManagementUrl}">${data.fiscalManagement}</a>
            </div>
            <div class="horizontal-division-small">
                <h4>Package Format</h4>
                <p>${data.packageFormat}</p>
                <h4>Package Manager(s)</h4>
                ${data.packageManager.map(pm => `<p>${pm.name}: ${pm.example}</p>`).join('')}
                <h4>Package Source(s)</h4>
                <p><a href="${data.packageSource}">${data.packageSource}</a></p>
                <h4>App Store</h4>
                <a href="${data.appStore.url}">${data.appStore.name}</a>
            </div>
        </div>
    `;
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        showNotification('Setup script URL copied to clipboard!');
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerText = message;
    document.body.appendChild(notification);
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
        document.body.removeChild(notification);
    }, 3000);
}