import{ae as g,af as l,ag as i,bN as f,cj as w,aq as m,V as C,ck as r}from"./index-462dc4aa.js";const c=g.create({baseURL:l});async function S(t){const s=await i(),{data:{message:e}}=await c.post("/assistant/ask",{...t},s);switch(t.operation){case"checkSensitiveContent":return{hasSensitiveContent:e.hasSensitiveContent};case"suggestCourseOutline":return{suggestedOutline:e.suggestedOutline};case"detectLanguage":return{detectedLanguage:e.locale};case"fineTuneText":return{updatedText:e.updatedText}}}async function L(t,s){let e=()=>{};try{if(!f())throw new Error("Only users with a verified email address can create courses");const{statusId:a,...u}=await w(s.user,s.onProgress);e=u.unsubscribe;const o=await i(),{team_id:d}=await m(),{data:n}=await c.post("/assistant/course",{...t,teamId:d,statusId:a,clientVersion:C},o);s.onSuccess({course:r(n.course),usage:r(n.usage)})}catch(a){s.onError(a)}finally{e()}}export{S as a,L as c};