var f=Object.defineProperty;var a=(t,s)=>f(t,"name",{value:s,configurable:!0});import{B as p}from"./Button.754ec0d6.js";import{C as u}from"./Checkbox.8858d33e.js";import{a as r,F as c,j as e}from"./jsx-runtime.c23a331c.js";import{T as i}from"./Text.91bf4284.js";import{T as n,a as g}from"./TextInput.8c863390.js";import{r as x}from"./index.fdaeca86.js";import{I as L,r as w}from"./IconBase.esm.a8a7db95.js";import"./clsx.m.256e9345.js";import"./index.module.07224552.js";import"./index.9bba6934.js";import"./iframe.dc6af619.js";var o=new Map;o.set("bold",function(t){return r(c,{children:[e("path",{d:"M93.2,122.8A70.3,70.3,0,0,1,88,96a72,72,0,1,1,72,72,70.3,70.3,0,0,1-26.8-5.2h0L120,176H96v24H72v24H32V184l61.2-61.2Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),e("circle",{cx:"180",cy:"76",r:"16"})]})});o.set("duotone",function(t){return r(c,{children:[e("path",{d:"M93.2,122.8A70.3,70.3,0,0,1,88,96a72,72,0,1,1,72,72,70.3,70.3,0,0,1-26.8-5.2h0L120,176H96v24H72v24H32V184l61.2-61.2Z",opacity:"0.2"}),e("path",{d:"M93.2,122.8A70.3,70.3,0,0,1,88,96a72,72,0,1,1,72,72,70.3,70.3,0,0,1-26.8-5.2h0L120,176H96v24H72v24H32V184l61.2-61.2Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),e("circle",{cx:"180",cy:"76",r:"12"})]})});o.set("fill",function(){return e(c,{children:e("path",{d:"M160,16A80.1,80.1,0,0,0,83.9,120.8L26.3,178.3A8.1,8.1,0,0,0,24,184v40a8,8,0,0,0,8,8H72a8,8,0,0,0,8-8V208H96a8,8,0,0,0,8-8V184h16a8.1,8.1,0,0,0,5.7-2.3l9.5-9.6A80,80,0,1,0,160,16Zm20,76a16,16,0,1,1,16-16A16,16,0,0,1,180,92Z"})})});o.set("light",function(t){return r(c,{children:[e("path",{d:"M93.2,122.8A70.3,70.3,0,0,1,88,96a72,72,0,1,1,72,72,70.3,70.3,0,0,1-26.8-5.2h0L120,176H96v24H72v24H32V184l61.2-61.2Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),e("circle",{cx:"180",cy:"76",r:"10"})]})});o.set("thin",function(t){return r(c,{children:[e("path",{d:"M93.2,122.8A70.3,70.3,0,0,1,88,96a72,72,0,1,1,72,72,70.3,70.3,0,0,1-26.8-5.2h0L120,176H96v24H72v24H32V184l61.2-61.2Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),e("circle",{cx:"180",cy:"76",r:"8"})]})});o.set("regular",function(t){return r(c,{children:[e("path",{d:"M93.2,122.8A70.3,70.3,0,0,1,88,96a72,72,0,1,1,72,72,70.3,70.3,0,0,1-26.8-5.2h0L120,176H96v24H72v24H32V184l61.2-61.2Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),e("circle",{cx:"180",cy:"76",r:"12"})]})});var C=a(function(s,m){return w(s,m,o)},"renderPath"),l=x.exports.forwardRef(function(t,s){return e(L,{...Object.assign({ref:s},t,{renderPath:C})})});l.displayName="Key";const y=l,v="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAiAAAABMCAYAAABUIAwUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANpSURBVHgB7d1BkpUwEABQtLyd19ALuHLlwpUrL6DX8Hxa1q+p0hR8YEg66fDeemqAkA4h3T8sCwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM583RP/zw6dvvJaGf3z8fvkagvqixo4z1XscFjnm7AAAEMwEBAMK9W17hx9f3y8g+fvm1AOOpPXYcjfVexwW2WQEBAMKtroBkLThds3YtisYAoC8rIABAOBMQACDcbhHq6AWna9bOWdEYAIzDCggAEO5VP8OdTZai263i2VbnH3282l7OP/v9LY16PYq714mXNrLHS2mW8fYMKyAAQDgTEAAgXHgKptfOhUeNVnR7tnj26vlHH6+2vfPPfn9Lva9Hcfc54uWa7PFSmn283aMGJJEyFxiVc59pY7qRbd3fLO3fq3+ORrzEyB4vW+7Uf6RgAIBwXVdAyjckbw4AcA9SMIMrc369c+4ZN6Yb2dn7O1r7j9Y/RyNe6soeL2fN3n+kYACAcCYgAEC4rikYNR8AcE9qQCqbPSd5VfYagez3V//MRbz0NXv79yYFAwCEC18B8YYFAEjBNDTLznytZN8pM/v91T9zES99zdL+I5GCAQDCWQFpyJvlc2fb567fFoG/sseLb7T8L/r+jNh/rIAAAOFMQACAcFIwldX+lc9s39Y42z6+LcKdZY+X7OPh3c4/+vxMQAAgWFmTcccaNykYACCcFZBE/AoE4MF4mF/4BORojsmOqQBcUT5vej9XyuPfvcbNCkgicoYAD8bD/NSAAADhuq6AlDNWO4cCcIXnSh5SMJXt5fTO5iBnyxna1wOOmz3eo8fD2u05eq3i6P1HCgYACGcCAgCEk4Jp6CUXKQe5TtU6Nc0eZ9njpdd4WLvdsvazEfuPFRAAIJwVELpp/SbResaf/Y3bylwu2eMlin69bsT+YwICpGXHZMhLCgYACGcFhFCt31hb/+49+xu3FYNcssdLb3fv76P3HysgAEA4ExAAIJwUDMATPh8AbZiAcEo5GKspuObqtyx6t7+H83PihX9lj/fapGAAgHBWQAAO8vkAqMcEhF3loGunwTa2Hm5Z2t/D+UG8cET2eK9hdwLSK8c763Gz///ex7tqtpoF7Z+L+zXX/4822/WoAQEAwpmAAAAAAAAAAAAAAAAAML4/sCyRCTtV15QAAAAASUVORK5CYII=";function d({children:t}){return e("form",{children:e("div",{className:"bg-grey-1 rounded-lg flex flex-col justify-center items-center p-8 gap-6 mx-auto my-auto h-fit w-fit",children:t})})}a(d,"FormRoot");d.displayName="Form.Root";function h({children:t}){return r("div",{className:"bg-blue-2 rounded-lg flex flex-col justify-center items-center w-fit p-8 gap-4 border-solid border-8 border-blue-3",children:[e("img",{src:v,className:"h-8 mb-4"}),t]})}a(h,"FormContent");h.displayName="Form.Content";const A={Root:d,Content:h};try{A.Root.displayName="Form.Root",A.Root.__docgenInfo={description:"",displayName:"Form.Root",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Form.tsx#Form.Root"]={docgenInfo:A.Root.__docgenInfo,name:"Form.Root",path:"src/components/Form.tsx#Form.Root"})}catch{}const I={title:"Components/Form",component:A.Root,args:{children:[e(A.Content,{})]},argTypes:{}},j={},S={args:{children:[r(A.Content,{children:[r("label",{htmlFor:"twitch",className:"w-full gap-1 flex flex-col",children:[e(i,{size:"text-sm",className:"text-offwhite",children:"Login"}),r(n.Root,{children:[e(n.Icon,{children:e(g,{})}),e(n.Input,{placeholder:"User da Twitch",name:"twitch",id:"twitch"})]})]}),r("label",{htmlFor:"senha",className:"w-full gap-1 flex flex-col",children:[e(i,{size:"text-sm",className:"text-offwhite",children:"Senha"}),r(n.Root,{children:[e(n.Icon,{children:e(y,{})}),e(n.Input,{placeholder:"*********",type:"password",name:"password",id:"password"})]})]}),r("label",{htmlFor:"remember",className:"flex items-center gap-2 cursor-pointer",children:[e(u,{id:"remember",name:"remember"}),e(i,{size:"text-xs",className:"text-offwhite",children:"Permanecer logado"})]}),e(p,{type:"submit",children:"Entrar"}),e("a",{href:"reset-password",className:"outline-none focus:ring-2 ring-offwhite",children:e(i,{size:"text-xs",className:"underline text-offwhite",children:"Esqueceu sua senha?"})})]}),e("a",{href:"register",className:"outline-none focus:ring-2 ring-offwhite",children:e(i,{size:"text-xs",className:"underline text-offwhite",children:"N\xE3o tem uma conta? Cadastre-se!"})})]}},W=["Default","Login"];export{j as Default,S as Login,W as __namedExportsOrder,I as default};
//# sourceMappingURL=Form.stories.99c1d892.js.map
