"use client";
import Image from "next/image";
import Slideshow from "../components/slideshow"

export default function Home() {
  return (
    <div className=" w-full  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" >
    <h1 className="font-extrabold text-4xl p-4">Anime Toys at best price : </h1>
     <div
     className="flex flex-row overflow-y-scroll"
     >
     <Slideshow propdata={"deathnote"} />
     <Slideshow propdata={"demon"} />
     <Slideshow propdata={"gojo"} />
     <Slideshow propdata={"hitachi"} />
     <Slideshow propdata={"jaraya"} />
     <Slideshow propdata={"naruto"} />
     <Slideshow propdata={"shaska"} />
     <Slideshow propdata={"shikamaru"} />
     <Slideshow propdata={"shitachi"} />
     <Slideshow propdata={"spyx"} />
      </div>
    <h1 className="font-extrabold text-4xl p-4">Games : </h1>
    <a href="https://poki.com/" target="_black">
    <div className="grid gap-4 overflow-x-scroll p-4 " style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}>
        <Image src="https://img.poki.com/cdn-cgi/image/quality=78,width=188,height=188,fit=cover,f=auto/9b373b5219cd66a82389d81d7cda8e23.jpeg" alt="Image 1" layout="fixed" width={300} height={200} className={"hover:scale-125 transition-all bg-indigo-400 rounded-2xl shadow-xl  "} />
        <Image src="https://img.poki.com/cdn-cgi/image/quality=78,width=188,height=188,fit=cover,f=auto/bd5a1fd8b5c3f8b641bdcb953aa4b7b1.png" alt="Image 2" layout="fixed" width={300} height={200} className={"hover:scale-125 transition-all bg-indigo-400 rounded-2xl shadow-xl  "} />
        <Image src="https://img.poki.com/cdn-cgi/image/quality=78,width=188,height=188,fit=cover,f=auto/496ce4d278e060a7e0e55f25916400a3.png" alt="Image 3" layout="fixed" width={300} height={200} className={"hover:scale-125 transition-all bg-indigo-400 rounded-2xl shadow-xl  "} />
        <Image src="https://img.poki.com/cdn-cgi/image/quality=78,width=188,height=188,fit=cover,f=auto/502faf18f9073a92b69ede56a5ee9d6b.png" alt="Image 4" layout="fixed" width={300} height={200} className={"hover:scale-125 transition-all bg-indigo-400 rounded-2xl shadow-xl  "} />
        <Image src="https://img.poki.com/cdn-cgi/image/quality=78,width=188,height=188,fit=cover,f=auto/12eadccf9d65bfd8fd1526ae103ed33e.png" alt="Image 5" layout="fixed" width={300} height={200} className={"hover:scale-125 transition-all bg-indigo-400 rounded-2xl shadow-xl  "} />
        <Image src="https://img.poki.com/cdn-cgi/image/quality=78,width=188,height=188,fit=cover,f=auto/c8f467b7f05ce3646938733e935d139b.png" alt="Image 6" layout="fixed" width={300} height={200} className={"hover:scale-125 transition-all bg-indigo-400 rounded-2xl shadow-xl  "} />
        <Image src="https://img.poki.com/cdn-cgi/image/quality=78,width=188,height=188,fit=cover,f=auto/291aaf2dcf5c1322558a9c038b3c5251.png" alt="Image 7" layout="fixed" width={300} height={200} className={"hover:scale-125 transition-all bg-indigo-400 rounded-2xl shadow-xl  "} />
        <Image src="https://img.poki.com/cdn-cgi/image/quality=78,width=188,height=188,fit=cover,f=auto/c651417fba6e32adab6835bee843d3fe.png" alt="Image 8" layout="fixed" width={300} height={200} className={"hover:scale-125 transition-all bg-indigo-400 rounded-2xl shadow-xl  "} />
        <Image src="https://img.poki.com/cdn-cgi/image/quality=78,width=188,height=188,fit=cover,f=auto/9aa6000ed201eba3c8f878c489a7c3ce.png" alt="Image 9" layout="fixed" width={300} height={200} className={"hover:scale-125 transition-all bg-indigo-400 rounded-2xl shadow-xl  "} />
        <Image src="https://img.poki.com/cdn-cgi/image/quality=78,width=188,height=188,fit=cover,f=auto/baccf9660bfb476fe2c8ae9f5a2ec4d2.png" alt="Image 10" layout="fixed" width={300} height={200} className={"hover:scale-125 transition-all bg-indigo-400 rounded-2xl shadow-xl  "} />
        <Image src="https://img.poki.com/cdn-cgi/image/quality=78,width=188,height=188,fit=cover,f=auto/51fdd5d34809af6174723ebf999cb220.png" alt="Image 11" layout="fixed" width={300} height={200} className={"hover:scale-125 transition-all bg-indigo-400 rounded-2xl shadow-xl  "} />
        <Image src="https://img.poki.com/cdn-cgi/image/quality=78,width=188,height=188,fit=cover,f=auto/0e1aa55382d86a9dadaadfdd23c175f6.png" alt="Image 12" layout="fixed" width={300} height={200} className={"hover:scale-125 transition-all bg-indigo-400 rounded-2xl shadow-xl  "} />
        <Image src="https://img.poki.com/cdn-cgi/image/quality=78,width=188,height=188,fit=cover,f=auto/70e565ff687043e10e150e23d0ae5ea2.png" alt="Image 13" layout="fixed" width={300} height={200} className={"hover:scale-125 transition-all bg-indigo-400 rounded-2xl shadow-xl  "} />
        <Image src="https://img.poki.com/cdn-cgi/image/quality=78,width=188,height=188,fit=cover,f=auto/86305f923d7fa5c8554bdf9f905c6cfb.png" alt="Image 14" layout="fixed" width={300} height={200} className={"hover:scale-125 transition-all bg-indigo-400 rounded-2xl shadow-xl  "} />
        <Image src="https://img.poki.com/cdn-cgi/image/quality=78,width=188,height=188,fit=cover,f=auto/2ac0e37aaff9325c6e2dd60bef91354a.png" alt="Image 15" layout="fixed" width={300} height={200} className={"hover:scale-125 transition-all bg-indigo-400 rounded-2xl shadow-xl  "} />
        <Image src="https://img.poki.com/cdn-cgi/image/quality=78,width=188,height=188,fit=cover,f=auto/df8a21c437d18f2aca99790135790c9e.png" alt="Image 16" layout="fixed" width={300} height={200} className={"hover:scale-125 transition-all bg-indigo-400 rounded-2xl shadow-xl  "} />
        <Image src="https://img.poki.com/cdn-cgi/image/quality=78,width=188,height=188,fit=cover,f=auto/db6315053336a87ed71553a3a18120d4.png" alt="Image 17" layout="fixed" width={300} height={200} className={"hover:scale-125 transition-all bg-indigo-400 rounded-2xl shadow-xl  "} />
        <Image src="https://img.poki.com/cdn-cgi/image/quality=78,width=188,height=188,fit=cover,f=auto/cbeba74384bccce06ab61ad4aa08f9d3.png" alt="Image 18" layout="fixed" width={300} height={200} className={"hover:scale-125 transition-all bg-indigo-400 rounded-2xl shadow-xl  "} />
        <Image src="https://img.poki.com/cdn-cgi/image/quality=78,width=188,height=188,fit=cover,f=auto/030bec0d229cfea9036a83695b8bd9b4.png" alt="Image 19" layout="fixed" width={300} height={200} className={"hover:scale-125 transition-all bg-indigo-400 rounded-2xl shadow-xl  "} />
        <Image src="https://img.poki.com/cdn-cgi/image/quality=78,width=188,height=188,fit=cover,f=auto/623fc333ec7c123ac6ec5e130ded5c05.jfif" alt="Image 20" layout="fixed" width={300} height={200} className={"hover:scale-125 transition-all bg-indigo-400 rounded-2xl shadow-xl  "} />
        <Image src="https://img.poki.com/cdn-cgi/image/quality=78,width=188,height=188,fit=cover,f=auto/84ad3def86043b739c7720b3098ae15b.png" alt="Image 21" layout="fixed" width={300} height={200} className={"hover:scale-125 transition-all bg-indigo-400 rounded-2xl shadow-xl  "} />
        <Image src="https://img.poki.com/cdn-cgi/image/quality=78,width=188,height=188,fit=cover,f=auto/1e3f3fcfb827a63040bb48aecbaa3962.png" alt="Image 22" layout="fixed" width={300} height={200} className={"hover:scale-125 transition-all bg-indigo-400 rounded-2xl shadow-xl  "} />
        <Image src="https://img.poki.com/cdn-cgi/image/quality=78,width=188,height=188,fit=cover,f=auto/64f007bab52b2c59515c7077424fc802.png" alt="Image 23" layout="fixed" width={300} height={200} className={"hover:scale-125 transition-all bg-indigo-400 rounded-2xl shadow-xl  "} />
        <Image src="https://img.poki.com/cdn-cgi/image/quality=78,width=188,height=188,fit=cover,f=auto/caf90442dc36b16784f9bfe7a913370f.png" alt="Image 24" layout="fixed" width={300} height={200} className={"hover:scale-125 transition-all bg-indigo-400 rounded-2xl shadow-xl  "} />
        <Image src="https://img.poki.com/cdn-cgi/image/quality=78,width=188,height=188,fit=cover,f=auto/b9bdc9a88501dbcc3c477281ed9fdbbe.png" alt="Image 25" layout="fixed" width={300} height={200} className={"hover:scale-125 transition-all bg-indigo-400 rounded-2xl shadow-xl  "} />
        <Image src="https://img.poki.com/cdn-cgi/image/quality=78,width=188,height=188,fit=cover,f=auto/224988e0e6513cb7a3de8058f819b07e.png" alt="Image 26" layout="fixed" width={300} height={200} className={"hover:scale-125 transition-all bg-indigo-400 rounded-2xl shadow-xl  "} />
        <Image src="https://img.poki.com/cdn-cgi/image/quality=78,width=188,height=188,fit=cover,f=auto/94f0d123275fb73da13aaed4a2725184.png" alt="Image 27" layout="fixed" width={300} height={200} className={"hover:scale-125 transition-all bg-indigo-400 rounded-2xl shadow-xl  "} />
        <Image src="https://img.poki.com/cdn-cgi/image/quality=78,width=188,height=188,fit=cover,f=auto/dca8f210136ad70d800b95624586b4d1.png" alt="Image 28" layout="fixed" width={300} height={200} className={"hover:scale-125 transition-all bg-indigo-400 rounded-2xl shadow-xl  "} />
        <Image src="https://img.poki.com/cdn-cgi/image/quality=78,width=188,height=188,fit=cover,f=auto/9b373b5219cd66a82389d81d7cda8e23.jpeg" alt="Image 1" layout="fixed" width={300} height={200} className={"hover:scale-125 transition-all bg-indigo-400 rounded-2xl shadow-xl  "} />
        <Image src="https://img.poki.com/cdn-cgi/image/quality=78,width=188,height=188,fit=cover,f=auto/bd5a1fd8b5c3f8b641bdcb953aa4b7b1.png" alt="Image 2" layout="fixed" width={300} height={200} className={"hover:scale-125 transition-all bg-indigo-400 rounded-2xl shadow-xl  "} />
        <Image src="https://img.poki.com/cdn-cgi/image/quality=78,width=188,height=188,fit=cover,f=auto/496ce4d278e060a7e0e55f25916400a3.png" alt="Image 3" layout="fixed" width={300} height={200} className={"hover:scale-125 transition-all bg-indigo-400 rounded-2xl shadow-xl  "} />
        <Image src="https://img.poki.com/cdn-cgi/image/quality=78,width=188,height=188,fit=cover,f=auto/502faf18f9073a92b69ede56a5ee9d6b.png" alt="Image 4" layout="fixed" width={300} height={200} className={"hover:scale-125 transition-all bg-indigo-400 rounded-2xl shadow-xl  "} />
        <Image src="https://img.poki.com/cdn-cgi/image/quality=78,width=188,height=188,fit=cover,f=auto/12eadccf9d65bfd8fd1526ae103ed33e.png" alt="Image 5" layout="fixed" width={300} height={200} className={"hover:scale-125 transition-all bg-indigo-400 rounded-2xl shadow-xl  "} />
        <Image src="https://img.poki.com/cdn-cgi/image/quality=78,width=188,height=188,fit=cover,f=auto/c8f467b7f05ce3646938733e935d139b.png" alt="Image 6" layout="fixed" width={300} height={200} className={"hover:scale-125 transition-all bg-indigo-400 rounded-2xl shadow-xl  "} />
        <Image src="https://img.poki.com/cdn-cgi/image/quality=78,width=188,height=188,fit=cover,f=auto/291aaf2dcf5c1322558a9c038b3c5251.png" alt="Image 7" layout="fixed" width={300} height={200} className={"hover:scale-125 transition-all bg-indigo-400 rounded-2xl shadow-xl  "} />
        <Image src="https://img.poki.com/cdn-cgi/image/quality=78,width=188,height=188,fit=cover,f=auto/c651417fba6e32adab6835bee843d3fe.png" alt="Image 8" layout="fixed" width={300} height={200} className={"hover:scale-125 transition-all bg-indigo-400 rounded-2xl shadow-xl  "} />
        <Image src="https://img.poki.com/cdn-cgi/image/quality=78,width=188,height=188,fit=cover,f=auto/9aa6000ed201eba3c8f878c489a7c3ce.png" alt="Image 9" layout="fixed" width={300} height={200} className={"hover:scale-125 transition-all bg-indigo-400 rounded-2xl shadow-xl  "} />
        <Image src="https://img.poki.com/cdn-cgi/image/quality=78,width=188,height=188,fit=cover,f=auto/baccf9660bfb476fe2c8ae9f5a2ec4d2.png" alt="Image 10" layout="fixed" width={300} height={200} className={"hover:scale-125 transition-all bg-indigo-400 rounded-2xl shadow-xl  "} />
        <Image src="https://img.poki.com/cdn-cgi/image/quality=78,width=188,height=188,fit=cover,f=auto/51fdd5d34809af6174723ebf999cb220.png" alt="Image 11" layout="fixed" width={300} height={200} className={"hover:scale-125 transition-all bg-indigo-400 rounded-2xl shadow-xl  "} />
        <Image src="https://img.poki.com/cdn-cgi/image/quality=78,width=188,height=188,fit=cover,f=auto/0e1aa55382d86a9dadaadfdd23c175f6.png" alt="Image 12" layout="fixed" width={300} height={200} className={"hover:scale-125 transition-all bg-indigo-400 rounded-2xl shadow-xl  "} />
        <Image src="https://img.poki.com/cdn-cgi/image/quality=78,width=188,height=188,fit=cover,f=auto/70e565ff687043e10e150e23d0ae5ea2.png" alt="Image 13" layout="fixed" width={300} height={200} className={"hover:scale-125 transition-all bg-indigo-400 rounded-2xl shadow-xl  "} />
        <Image src="https://img.poki.com/cdn-cgi/image/quality=78,width=188,height=188,fit=cover,f=auto/86305f923d7fa5c8554bdf9f905c6cfb.png" alt="Image 14" layout="fixed" width={300} height={200} className={"hover:scale-125 transition-all bg-indigo-400 rounded-2xl shadow-xl  "} />
        <Image src="https://img.poki.com/cdn-cgi/image/quality=78,width=188,height=188,fit=cover,f=auto/2ac0e37aaff9325c6e2dd60bef91354a.png" alt="Image 15" layout="fixed" width={300} height={200} className={"hover:scale-125 transition-all bg-indigo-400 rounded-2xl shadow-xl  "} />
        <Image src="https://img.poki.com/cdn-cgi/image/quality=78,width=188,height=188,fit=cover,f=auto/df8a21c437d18f2aca99790135790c9e.png" alt="Image 16" layout="fixed" width={300} height={200} className={"hover:scale-125 transition-all bg-indigo-400 rounded-2xl shadow-xl  "} />
        <Image src="https://img.poki.com/cdn-cgi/image/quality=78,width=188,height=188,fit=cover,f=auto/db6315053336a87ed71553a3a18120d4.png" alt="Image 17" layout="fixed" width={300} height={200} className={"hover:scale-125 transition-all bg-indigo-400 rounded-2xl shadow-xl  "} />
        <Image src="https://img.poki.com/cdn-cgi/image/quality=78,width=188,height=188,fit=cover,f=auto/cbeba74384bccce06ab61ad4aa08f9d3.png" alt="Image 18" layout="fixed" width={300} height={200} className={"hover:scale-125 transition-all bg-indigo-400 rounded-2xl shadow-xl  "} />
        <Image src="https://img.poki.com/cdn-cgi/image/quality=78,width=188,height=188,fit=cover,f=auto/030bec0d229cfea9036a83695b8bd9b4.png" alt="Image 19" layout="fixed" width={300} height={200} className={"hover:scale-125 transition-all bg-indigo-400 rounded-2xl shadow-xl  "} />
        <Image src="https://img.poki.com/cdn-cgi/image/quality=78,width=188,height=188,fit=cover,f=auto/623fc333ec7c123ac6ec5e130ded5c05.jfif" alt="Image 20" layout="fixed" width={300} height={200} className={"hover:scale-125 transition-all bg-indigo-400 rounded-2xl shadow-xl  "} />
        <Image src="https://img.poki.com/cdn-cgi/image/quality=78,width=188,height=188,fit=cover,f=auto/84ad3def86043b739c7720b3098ae15b.png" alt="Image 21" layout="fixed" width={300} height={200} className={"hover:scale-125 transition-all bg-indigo-400 rounded-2xl shadow-xl  "} />
        <Image src="https://img.poki.com/cdn-cgi/image/quality=78,width=188,height=188,fit=cover,f=auto/1e3f3fcfb827a63040bb48aecbaa3962.png" alt="Image 22" layout="fixed" width={300} height={200} className={"hover:scale-125 transition-all bg-indigo-400 rounded-2xl shadow-xl  "} />
        <Image src="https://img.poki.com/cdn-cgi/image/quality=78,width=188,height=188,fit=cover,f=auto/64f007bab52b2c59515c7077424fc802.png" alt="Image 23" layout="fixed" width={300} height={200} className={"hover:scale-125 transition-all bg-indigo-400 rounded-2xl shadow-xl  "} />
        <Image src="https://img.poki.com/cdn-cgi/image/quality=78,width=188,height=188,fit=cover,f=auto/caf90442dc36b16784f9bfe7a913370f.png" alt="Image 24" layout="fixed" width={300} height={200} className={"hover:scale-125 transition-all bg-indigo-400 rounded-2xl shadow-xl  "} />
        <Image src="https://img.poki.com/cdn-cgi/image/quality=78,width=188,height=188,fit=cover,f=auto/b9bdc9a88501dbcc3c477281ed9fdbbe.png" alt="Image 25" layout="fixed" width={300} height={200} className={"hover:scale-125 transition-all bg-indigo-400 rounded-2xl shadow-xl  "} />
        <Image src="https://img.poki.com/cdn-cgi/image/quality=78,width=188,height=188,fit=cover,f=auto/224988e0e6513cb7a3de8058f819b07e.png" alt="Image 26" layout="fixed" width={300} height={200} className={"hover:scale-125 transition-all bg-indigo-400 rounded-2xl shadow-xl  "} />
        <Image src="https://img.poki.com/cdn-cgi/image/quality=78,width=188,height=188,fit=cover,f=auto/94f0d123275fb73da13aaed4a2725184.png" alt="Image 27" layout="fixed" width={300} height={200} className={"hover:scale-125 transition-all bg-indigo-400 rounded-2xl shadow-xl  "} />
        <Image src="https://img.poki.com/cdn-cgi/image/quality=78,width=188,height=188,fit=cover,f=auto/dca8f210136ad70d800b95624586b4d1.png" alt="Image 28" layout="fixed" width={300} height={200} className={"hover:scale-125 transition-all bg-indigo-400 rounded-2xl shadow-xl  "} />
      </div>
     

    </a>
        </div>
  );
}
