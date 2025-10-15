function FindProxyForURL(url, host) 
{  
// Apple
if (dnsDomainIs (host, "albert.apple.com") ||
	dnsDomainIs (host, "captive.apple.com") ||
	dnsDomainIs (host, "gs.apple.com") ||
	dnsDomainIs (host, "humb.apple.com") ||
	dnsDomainIs (host, "static.ips.apple.com") ||
	dnsDomainIs (host, "sq-device.apple.com") ||
	dnsDomainIs (host, "tbsc.apple.com") ||
	shExpMatch (host, "*.push.apple.com") ||
	dnsDomainIs (host, "deviceenrollment.apple.com") ||
	dnsDomainIs (host, "deviceservices-external.apple.com") ||
	dnsDomainIs (host, "gdmf.apple.com") ||
	dnsDomainIs (host, "identity.apple.com") ||
	dnsDomainIs (host, "iprofiles.apple.com") ||
	dnsDomainIs (host, "mdmenrollment.apple.com") ||
	dnsDomainIs (host, "setup.icloud.com") ||
	dnsDomainIs (host, "vpp.itunes.apple.com") ||
	shExpMatch (host, "*.business.apple.com") ||
	shExpMatch (host, "*.school.apple.com") ||
	dnsDomainIs (host, "upload.appleschoolcontent.com") ||
	dnsDomainIs (host, "ws-ee-maidsvc.icloud.com") ||
	dnsDomainIs (host, "axm-adm-enroll.apple.com") ||
	dnsDomainIs (host, "axm-adm-mdm.apple.com") ||
	dnsDomainIs (host, "axm-adm-scep.apple.com") ||
	dnsDomainIs (host, "axm-app.apple.com") ||
	dnsDomainIs (host, "appldnld.apple.com") ||
	dnsDomainIs (host, "configuration.apple.com") ||
	dnsDomainIs (host, "gdmf.apple.com") ||
	dnsDomainIs (host, "gg.apple.com") ||
	dnsDomainIs (host, "gnf-mdn.apple.com") ||
	dnsDomainIs (host, "gnf-mr.apple.com") ||
	dnsDomainIs (host, "gs.apple.com") ||
	dnsDomainIs (host, "ig.apple.com") ||
	dnsDomainIs (host, "mesu.apple.com") ||
	dnsDomainIs (host, "ns.itunes.apple.com") ||
	dnsDomainIs (host, "oscdn.apple.com") ||
	dnsDomainIs (host, "osrecovery.apple.com") ||
	dnsDomainIs (host, "skl.apple.com") ||
	dnsDomainIs (host, "swcdn.apple.com") ||
	dnsDomainIs (host, "swdist.apple.com") ||
	dnsDomainIs (host, "swdownload.apple.com") ||
	dnsDomainIs (host, "swscan.apple.com") ||
	dnsDomainIs (host, "updates-http.cdn-apple.com") ||
	dnsDomainIs (host, "updates.cdn-apple.com") ||
	dnsDomainIs (host, "xp.apple.com") ||
	shExpMatch (host, "*.itunes.apple.com") ||
	shExpMatch (host, "*.apps.apple.com") ||
	shExpMatch (host, "*.mzstatic.com") ||
	dnsDomainIs (host, "itunes.apple.com") ||
	dnsDomainIs (host, "ppq.apple.com") ||
	dnsDomainIs (host, "appldnld.apple.com") ||
	dnsDomainIs (host, "appldnld.apple.com.edgesuite.net") ||
	dnsDomainIs (host, "itunes.com") ||
	dnsDomainIs (host, "itunes.apple.com") ||
	dnsDomainIs (host, "updates-http.cdn-apple.com") ||
	dnsDomainIs (host, "updates.cdn-apple.com") ||
	dnsDomainIs (host, "lcdn-registration.apple.com") ||
	dnsDomainIs (host, "suconfig.apple.com") ||
	dnsDomainIs (host, "xp-cdn.apple.com") ||
	dnsDomainIs (host, "lcdn-locator.apple.com") ||
	dnsDomainIs (host, "serverstatus.apple.com") ||
	dnsDomainIs (host, "17.248.128.0/18") ||
	dnsDomainIs (host, "17.250.64.0/18") ||
	dnsDomainIs (host, "17.248.192.0/19") ||
	shExpMatch (host, "*.appattest.apple.com") ||
	dnsDomainIs (host, "bpapi.apple.com") ||
	dnsDomainIs (host, "cssubmissions.apple.com") ||
	dnsDomainIs (host, "fba.apple.com") ||
	dnsDomainIs (host, "diagassets.apple.com") ||
	dnsDomainIs (host, "doh.dns.apple.com") ||
	dnsDomainIs (host, "certs.apple.com") ||
	dnsDomainIs (host, "crl.apple.com") ||
	dnsDomainIs (host, "crl.entrust.net") ||
	dnsDomainIs (host, "crl3.digicert.com") ||
	dnsDomainIs (host, "crl4.digicert.com") ||
	dnsDomainIs (host, "ocsp.apple.com") ||
	dnsDomainIs (host, "ocsp.digicert.cn") ||
	dnsDomainIs (host, "ocsp.digicert.com") ||
	dnsDomainIs (host, "ocsp.entrust.net") ||
	dnsDomainIs (host, "ocsp2.apple.com") ||
	dnsDomainIs (host, "valid.apple.com") ||
	dnsDomainIs (host, "appleid.apple.com") ||
	dnsDomainIs (host, "appleid.cdn-apple.com") ||
	dnsDomainIs (host, "idmsa.apple.com") ||
	dnsDomainIs (host, "gsa.apple.com") ||
	shExpMatch (host, "*.apple-cloudkit.com") ||
	shExpMatch (host, "*.apple-livephotoskit.com") ||
	shExpMatch (host, "*.apzones.com") ||
	shExpMatch (host, "*.cdn-apple.com") ||
	shExpMatch (host, "*.gc.apple.com") ||
	shExpMatch (host, "*.icloud.com") ||
	shExpMatch (host, "*.icloud.com.cn") ||
	shExpMatch (host, "*.icloud.apple.com") ||
	shExpMatch (host, "*.icloud-content.com") ||
	shExpMatch (host, "*.iwork.apple.com") ||
	dnsDomainIs (host, "mask.icloud.com") ||
	dnsDomainIs (host, "mask-h2.icloud.com") ||
	dnsDomainIs (host, "mask-api.icloud.com") ||
	dnsDomainIs (host, "audiocontentdownload.apple.com") ||
	dnsDomainIs (host, "devimages-cdn.apple.com") ||
	dnsDomainIs (host, "download.developer.apple.com") ||
	dnsDomainIs (host, "playgrounds-assets-cdn.apple.com") ||
	dnsDomainIs (host, "playgroups-cdn.apple.com") ||
	dnsDomainIs (host, "sylvan.apple.com"))
{
    return "DIRECT";
}
// Microsoft
if (dnsDomainIs (host, "login.microsoftonline.com") ||
	shExpMatch (host, "*.officeconfig.msocdn.com") ||
	dnsDomainIs (host, "config.office.com") ||
	dnsDomainIs (host, "graph.windows.net") ||
	dnsDomainIs (host, "enterpriseregistration.windows.net") ||
	shExpMatch (host, "*.manage.microsoft.com") ||
	dnsDomainIs (host, "manage.microsoft.com") ||
    shExpMatch (host, "*.microsoftonline.com") ||
    shExpMatch (host, "*.msauth.net"))
{
    return "DIRECT";
}
// Google
if (dnsDomainIs (host, "clients1.google.com") ||
    dnsDomainIs (host, "clients2.google.com") ||
    dnsDomainIs (host, "clients3.google.com") ||
    dnsDomainIs (host, "clients4.google.com") ||
    dnsDomainIs (host, "clients5.google.com") ||
    dnsDomainIs (host, "clients6.google.com") ||
    dnsDomainIs (host, "chrome.google.com") ||
    dnsDomainIs (host, "commondatastorage.googleapis.com") ||
    dnsDomainIs (host, "dl-ssl.google.com") ||
    dnsDomainIs (host, "dl.google.com") ||
    dnsDomainIs (host, "gweb-gettingstartedguide.appspot.com") ||
    dnsDomainIs (host, "m.google.com") ||
    dnsDomainIs (host, "hangouts.google.com") ||
    dnsDomainIs (host, "pack.google.com") ||
    dnsDomainIs (host, "safebrowsing-cache.google.com") ||
    dnsDomainIs (host, "safebrowsing.google.com") ||
    dnsDomainIs (host, "ssl.gstatic.com") ||
    dnsDomainIs (host, "storage.googleapis.com") ||
    dnsDomainIs (host, "tools.google.com") ||
    dnsDomainIs (host, "www.googleapis.com") ||
    shExpMatch (host, "*.gstatic.com") ||
    dnsDomainIs (host, "play.google.com") ||
    dnsDomainIs (host, "android.googleapis.com") ||
    dnsDomainIs (host, "android.apis.google.com") ||
    dnsDomainIs (host, "mtalk.google.com") ||
    dnsDomainIs (host, "accounts.google.com") ||
    dnsDomainIs (host, "aadcdn.msftauthimages.net") ||
    dnsDomainIs (host, "aadcdn.msftauth.net") ||
    dnsDomainIs (host, "omahaproxy.appspot.com") ||
    dnsDomainIs (host, "cros-omahaproxy.appspot.com")) ||
	dnsDomainIs (host, "fac.insacorp.ca"))
{
    return "DIRECT";
}
return "PROXY turbo-vhhizczi.edge.prod.fortisase.com:11637; DIRECT"; 
}