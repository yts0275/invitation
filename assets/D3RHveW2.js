import{d,o as r,k as s,l as m,q as l,Q as f,R as h,u as S,F as e,V as w,x as D,G as n,U as g}from"./Dg9-IL-D.js";import{u as k}from"./F6ZmSYA0.js";import"./C_ctNW6A.js";const B=e("h1",null,"테스트 페이지",-1),y=e("hr",null,null,-1),V=e("hr",null,null,-1),L=d({__name:"TestPage",setup(v){const c=Array.from({length:10},(o,a)=>({id:a+1,name:`user ${a+1}`,content:`content ${a+1}`,created_at:new Date})),u=k("slideData",()=>c),i=o=>o.toLocaleDateString();return(o,a)=>{const p=g,_=w;return r(),s("div",null,[B,y,m(_,{"slides-per-view":3,"space-between":30,loop:!0},{default:l(()=>[(r(!0),s(f,null,h(S(u),t=>(r(),D(p,{key:t.id},{default:l(()=>[e("p",null,"번호: "+n(t.id),1),e("p",null,"이름: "+n(t.name),1),e("p",null,"내용: "+n(t.content),1),e("p",null,"작성일자: "+n(i(t.created_at)),1)]),_:2},1024))),128))]),_:1}),V])}}});export{L as default};
