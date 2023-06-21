import{_ as x,H as m,o as i,c as h,J as o,E as l,F as y,C as u,a as p,D as V,G as b}from"./chunks/framework.a299805b.js";const k={name:"wordFather",data(){return{formData:{header1:"",tags:[],basicInstructions:"",valueOfWords:3,videoIncluded:!1,musicIncluded:!1,bvid:"",musicID:""}}},computed:{result(){let s={},t=[];for(let r=0;r<this.formData.tags.length;r++)s.text=this.formData.tags[r],t.push(JSON.stringify(s));let f=t.toString(),d=":tomato:";for(let r=0;r<this.formData.valueOfWords-1;r++)d=d+":tomato:";let e=`
        ---
        tags: [${f}]
        ---
        <script setup>
        import biliplayer from '../components/bilibili-player.vue'
        import tag from '../components/tag.vue'
        import wangyiPlayer from '../components/163-player.vue'

        <\/script>

        # ${this.formData.header1}

        <tag v-for="item in $frontmatter.tags" :tagName='item.text'/>

        ## 词条解释
        ${this.formData.basicInstructions}

        ## 问题价值
        ${d}
        `;return this.formData.videoIncluded&&(e=e+`
        ## 相关视频
        <biliplayer BV="${this.formData.bvid}" />
        `),this.formData.musicIncluded&&(e=e+`
        ## 相关音乐
        <wangyiPlayer musicId="${this.formData.musicID}" />
        `),e}}},w=u("br",null,null,-1),B=u("br",null,null,-1),U=u("h2",null,"词条生成结果",-1);function F(s,t,f,d,e,r){const c=m("t-input"),n=m("t-form-item"),g=m("t-tagInput"),_=m("t-textarea"),I=m("t-input-number"),D=m("t-checkbox"),v=m("t-form");return i(),h(y,null,[o(v,{style:{margin:"20px"}},{default:l(()=>[o(n,{label:"一级标题"},{default:l(()=>[o(c,{placeholder:"请输入内容",modelValue:e.formData.header1,"onUpdate:modelValue":t[0]||(t[0]=a=>e.formData.header1=a)},null,8,["modelValue"])]),_:1}),o(n,{label:"标签"},{default:l(()=>[o(g,{modelValue:e.formData.tags,"onUpdate:modelValue":t[1]||(t[1]=a=>e.formData.tags=a)},null,8,["modelValue"])]),_:1}),o(n,{label:"词条解释"},{default:l(()=>[o(_,{modelValue:e.formData.basicInstructions,"onUpdate:modelValue":t[2]||(t[2]=a=>e.formData.basicInstructions=a)},null,8,["modelValue"])]),_:1}),o(n,{label:"问题价值"},{default:l(()=>[o(I,{min:"1",max:"5",modelValue:e.formData.valueOfWords,"onUpdate:modelValue":t[3]||(t[3]=a=>e.formData.valueOfWords=a)},null,8,["modelValue"])]),_:1}),o(n,{label:"视频选项"},{default:l(()=>[o(D,{modelValue:e.formData.videoIncluded,"onUpdate:modelValue":t[4]||(t[4]=a=>e.formData.videoIncluded=a)},{default:l(()=>[p("包含视频")]),_:1},8,["modelValue"])]),_:1}),e.formData.videoIncluded?(i(),V(n,{key:0,label:"BV号"},{default:l(()=>[o(c,{modelValue:e.formData.bvid,"onUpdate:modelValue":t[5]||(t[5]=a=>e.formData.bvid=a),placeholder:"输入B站视频BV号"},null,8,["modelValue"])]),_:1})):b("",!0),o(n,{label:"音乐选项"},{default:l(()=>[o(D,{modelValue:e.formData.musicIncluded,"onUpdate:modelValue":t[6]||(t[6]=a=>e.formData.musicIncluded=a)},{default:l(()=>[p("包含音乐")]),_:1},8,["modelValue"])]),_:1}),e.formData.musicIncluded?(i(),V(n,{key:1,label:"网易云音乐ID"},{default:l(()=>[o(c,{modelValue:e.formData.musicID,"onUpdate:modelValue":t[7]||(t[7]=a=>e.formData.musicID=a),placeholder:"网易云音乐ID"},null,8,["modelValue"])]),_:1})):b("",!0)]),_:1}),w,B,U,o(_,{value:r.result,autosize:!0},null,8,["value"])],64)}const N=x(k,[["render",F]]),O=u("h1",{id:"词条图形化生成器",tabindex:"-1"},[p("词条图形化生成器 "),u("a",{class:"header-anchor",href:"#词条图形化生成器","aria-label":'Permalink to "词条图形化生成器"'},"​")],-1),S=JSON.parse('{"title":"词条图形化生成器","description":"","frontmatter":{},"headers":[],"relativePath":"wordFather.md","filePath":"wordFather.md"}'),P={name:"wordFather.md"},W=Object.assign(P,{setup(s){return(t,f)=>(i(),h("div",null,[O,o(N)]))}});export{S as __pageData,W as default};
