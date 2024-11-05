(()=>{"use strict";var e,a={998:()=>{const e=window.wp.blocks,a=(window.wp.i18n,window.wp.blockEditor),l=window.wp.components,i=window.ReactJSXRuntime,o=JSON.parse('{"UU":"create-block/image-slider"}');(0,e.registerBlockType)(o.UU,{edit:function({attributes:e,setAttributes:o}){const{images:s=[],animationDuration:r=5,imagesToShow:c=1}=e,t=(0,a.useBlockProps)({className:"wp-block-create-block-image-slider"});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.InspectorControls,{children:(0,i.jsxs)(l.PanelBody,{title:"Slider Settings",children:[(0,i.jsx)(l.RangeControl,{label:"Animation duration (seconds)",value:r,onChange:e=>o({animationDuration:e}),min:1,max:10}),(0,i.jsx)(l.RangeControl,{label:"Images to show",value:c,onChange:e=>o({imagesToShow:e}),min:1,max:Math.max(1,s.length)})]})}),(0,i.jsx)("div",{...t,children:(0,i.jsx)(a.MediaUploadCheck,{children:(0,i.jsx)(a.MediaUpload,{onSelect:e=>{o({images:e.map((e=>({url:e.url,id:e.id,alt:e.alt||""})))})},allowedTypes:["image"],multiple:!0,value:s.map((e=>e.id)),render:({open:e})=>(0,i.jsx)("div",{className:"wp-block-create-block-image-slider__container",children:s.length>0?(0,i.jsxs)("div",{className:"wp-block-create-block-image-slider__slider",style:{"--animation-duration":`${r}s`,"--images-to-show":c},children:[(0,i.jsx)("div",{className:"wp-block-create-block-image-slider__wrapper",children:s.map(((e,a)=>(0,i.jsx)("div",{className:"wp-block-create-block-image-slider__slide",children:(0,i.jsx)("img",{src:e.url,alt:e.alt||`Slide ${a+1}`})},e.id||a)))}),(0,i.jsxs)("div",{className:"wp-block-create-block-image-slider__controls",children:[(0,i.jsx)("button",{className:"wp-block-create-block-image-slider__controls-button wp-block-create-block-image-slider__controls-button--prev","aria-label":"Previous slide",children:"❮"}),(0,i.jsx)("button",{className:"wp-block-create-block-image-slider__controls-button wp-block-create-block-image-slider__controls-button--next","aria-label":"Next slide",children:"❯"})]}),(0,i.jsx)("div",{className:"wp-block-create-block-image-slider__pagination",children:s.map(((e,a)=>(0,i.jsx)("button",{className:"wp-block-create-block-image-slider__pagination-dot","aria-label":`Go to slide ${a+1}`},a)))})]}):(0,i.jsx)(l.Button,{onClick:e,className:"wp-block-create-block-image-slider__placeholder",variant:"primary",children:"Select Images"})})})})})]})},save:function({attributes:e}){const{images:l=[],animationDuration:o=5,imagesToShow:s=1}=e,r=a.useBlockProps.save({className:"wp-block-create-block-image-slider"});return(0,i.jsx)("div",{...r,children:(0,i.jsx)("div",{className:"wp-block-create-block-image-slider__container",children:(0,i.jsxs)("div",{className:"wp-block-create-block-image-slider__slider","data-animation-duration":o,"data-images-to-show":s,children:[(0,i.jsx)("div",{className:"wp-block-create-block-image-slider__wrapper",children:l.map(((e,a)=>(0,i.jsx)("div",{className:"wp-block-create-block-image-slider__slide",children:(0,i.jsx)("img",{src:e.url,alt:e.alt||`Slide ${a+1}`})},e.id||a)))}),(0,i.jsxs)("div",{className:"wp-block-create-block-image-slider__controls",children:[(0,i.jsx)("button",{className:"wp-block-create-block-image-slider__controls-button wp-block-create-block-image-slider__controls-button--prev","aria-label":"Previous slide",children:"❮"}),(0,i.jsx)("button",{className:"wp-block-create-block-image-slider__controls-button wp-block-create-block-image-slider__controls-button--next","aria-label":"Next slide",children:"❯"})]}),(0,i.jsx)("div",{className:"wp-block-create-block-image-slider__pagination",children:l.map(((e,a)=>(0,i.jsx)("button",{className:"wp-block-create-block-image-slider__pagination-dot","aria-label":`Go to slide ${a+1}`},a)))})]})})})}})}},l={};function i(e){var o=l[e];if(void 0!==o)return o.exports;var s=l[e]={exports:{}};return a[e](s,s.exports,i),s.exports}i.m=a,e=[],i.O=(a,l,o,s)=>{if(!l){var r=1/0;for(d=0;d<e.length;d++){l=e[d][0],o=e[d][1],s=e[d][2];for(var c=!0,t=0;t<l.length;t++)(!1&s||r>=s)&&Object.keys(i.O).every((e=>i.O[e](l[t])))?l.splice(t--,1):(c=!1,s<r&&(r=s));if(c){e.splice(d--,1);var n=o();void 0!==n&&(a=n)}}return a}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[l,o,s]},i.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),(()=>{var e={57:0,350:0};i.O.j=a=>0===e[a];var a=(a,l)=>{var o,s,r=l[0],c=l[1],t=l[2],n=0;if(r.some((a=>0!==e[a]))){for(o in c)i.o(c,o)&&(i.m[o]=c[o]);if(t)var d=t(i)}for(a&&a(l);n<r.length;n++)s=r[n],i.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return i.O(d)},l=self.webpackChunkimage_slider=self.webpackChunkimage_slider||[];l.forEach(a.bind(null,0)),l.push=a.bind(null,l.push.bind(l))})();var o=i.O(void 0,[350],(()=>i(998)));o=i.O(o)})();