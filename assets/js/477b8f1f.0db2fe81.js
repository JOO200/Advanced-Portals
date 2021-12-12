"use strict";(self.webpackChunkadvanced_portals_docs=self.webpackChunkadvanced_portals_docs||[]).push([[385],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),u=o,h=p["".concat(s,".").concat(u)]||p[u]||m[u]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1318:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],l={sidebar_position:3},s="Portal Tags",d={unversionedId:"portal-tags",id:"portal-tags",title:"Portal Tags",description:"Below is a list of currently accepted tags for portals. Only the name: tag is necessary though other tags may be needed to give the portal's functionality.",source:"@site/docs/portal-tags.md",sourceDirName:".",slug:"/portal-tags",permalink:"/docs/portal-tags",editUrl:"https://github.com/sekwah41/Advanced-Portals/edit/website/docs/portal-tags.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Commands",permalink:"/docs/commands"}},c=[{value:"Necessary Tags",id:"necessary-tags",children:[{value:"<code>name:(name for portal)</code>",id:"namename-for-portal",children:[],level:3}],level:2},{value:"Available Tags",id:"available-tags",children:[{value:"<code>destination:(destination name)</code> or <code>desti:(destination name)</code>",id:"destinationdestination-name-or-destidestination-name",children:[],level:3},{value:"<code>delayed:true</code>",id:"delayedtrue",children:[],level:3},{value:"<code>triggerblock:(material)</code>",id:"triggerblockmaterial",children:[],level:3},{value:"<code>bungee:(server_name)</code>",id:"bungeeserver_name",children:[],level:3},{value:"<code>message:(word)</code> or <code>message:&quot;(some sentence you want)&quot;</code>",id:"messageword-or-messagesome-sentence-you-want",children:[],level:3},{value:"<code>permission:(some.custom.test.perms)</code>",id:"permissionsomecustomtestperms",children:[],level:3},{value:"<code>command:(command) or command:&quot;(multi-word command)&quot;</code>",id:"commandcommand-or-commandmulti-word-command",children:[],level:3},{value:"Command Tag Flags",id:"command-tag-flags",children:[],level:3}],level:2}],m={toc:c};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"portal-tags"},"Portal Tags"),(0,r.kt)("p",null,"Below is a list of currently accepted tags for portals. Only the name: tag is necessary though other tags may be needed to give the portal's functionality."),(0,r.kt)("p",null,"Example use: ",(0,r.kt)("inlineCode",{parentName:"p"},"/portal create name:testportal desti:somedesti triggerblock:WATER")),(0,r.kt)("h2",{id:"necessary-tags"},"Necessary Tags"),(0,r.kt)("h3",{id:"namename-for-portal"},(0,r.kt)("inlineCode",{parentName:"h3"},"name:(name for portal)")),(0,r.kt)("p",null,"Sets the name for the portal. These have to be unique across the whole server."),(0,r.kt)("h2",{id:"available-tags"},"Available Tags"),(0,r.kt)("p",null,"These add or alter specific functionality for the portals."),(0,r.kt)("h3",{id:"destinationdestination-name-or-destidestination-name"},(0,r.kt)("inlineCode",{parentName:"h3"},"destination:(destination name)")," or ",(0,r.kt)("inlineCode",{parentName:"h3"},"desti:(destination name)")),(0,r.kt)("p",null,"Sets the desired destination for the portal. If this is defined if the portal is triggered, the player will be teleported to the desired location."),(0,r.kt)("h3",{id:"delayedtrue"},(0,r.kt)("inlineCode",{parentName:"h3"},"delayed:true")),(0,r.kt)("p",null,"The portal uses the portal event rather than movement events. Will trigger with a delay on portal events. While this does the normal delayed behaviour for nether portals (instant if you are in creative), the end portals will trigger instantly anyway as that is normal behaviour for them."),(0,r.kt)("h3",{id:"triggerblockmaterial"},(0,r.kt)("inlineCode",{parentName:"h3"},"triggerblock:(material)")),(0,r.kt)("p",null,"Sets the material of the trigger block of the portal. This is the material that you need to be inside to trigger the portal. Suggestions/Tab complete will work for the names though they are in block caps and use the spigot names "),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html"},"A full list of materials for 1.13+ can be found here")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://helpch.at/docs/1.12.2/org/bukkit/Material.html"},"And a 1.12 and below list here")),(0,r.kt)("p",null,"The most common types generally used are ",(0,r.kt)("inlineCode",{parentName:"p"},"NETHER_PORTAL"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"END_PORTAL"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"END_GATEWAY")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"WATER")),(0,r.kt)("h3",{id:"bungeeserver_name"},(0,r.kt)("inlineCode",{parentName:"h3"},"bungee:(server_name)")),(0,r.kt)("p",null,"Specifies which server to send the player too if connected through bungee. It needs to be the same as whatever you would use for ",(0,r.kt)("inlineCode",{parentName:"p"},"/server (server_name)")," to swap manually."),(0,r.kt)("h3",{id:"messageword-or-messagesome-sentence-you-want"},(0,r.kt)("inlineCode",{parentName:"h3"},"message:(word)")," or ",(0,r.kt)("inlineCode",{parentName:"h3"},'message:"(some sentence you want)"')),(0,r.kt)("p",null,"Sets the warp message for the portal. Colour codes can be used e.g. &c is red. ",(0,r.kt)("a",{parentName:"p",href:"https://minecraft.gamepedia.com/Formatting_codes"},"See here for color codes"),"."),(0,r.kt)("h3",{id:"permissionsomecustomtestperms"},(0,r.kt)("inlineCode",{parentName:"h3"},"permission:(some.custom.test.perms)")),(0,r.kt)("p",null,"Sets what permission you need to use the portal(can be customised to anything)"),(0,r.kt)("h3",{id:"commandcommand-or-commandmulti-word-command"},(0,r.kt)("inlineCode",{parentName:"h3"},'command:(command) or command:"(multi-word command)"')),(0,r.kt)("p",null,"Whatever is typed in here the player will execute as a command, there are several flags you can use listed below to alter the execution, however only one can be used at once."),(0,r.kt)("p",null,"You can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"@player")," to place the teleporting user's name into the command."),(0,r.kt)("p",null,"Example: ",(0,r.kt)("inlineCode",{parentName:"p"},'command:"#say @player has triggered a console command portal"')),(0,r.kt)("h3",{id:"command-tag-flags"},"Command Tag Flags"),(0,r.kt)("p",null,"You can only use one of these at the start of a command tag."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"!")," Execute command as op"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"^")," Execute command with * permission"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"#")," Execute command as console"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"%")," Send command to bungee"))}p.isMDXComponent=!0}}]);