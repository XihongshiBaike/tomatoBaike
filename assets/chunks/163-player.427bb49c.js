import{_ as r,o as t,c as i}from"./framework.a299805b.js";const c={name:"wangyiPlayer",props:{musicId:String},computed:{musicLink(){return"//music.163.com/outchain/player?type=2&id="+this.musicId+"&auto=1&height=66"}}},n=["src"];function o(s,a,m,u,d,e){return t(),i("iframe",{frameborder:"no",border:"0",marginwidth:"0",marginheight:"0",width:"330",height:"86",src:e.musicLink},null,8,n)}const p=r(c,[["render",o]]);export{p as w};