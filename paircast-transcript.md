<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#1750">00:01</a></sup>

 Hey, my name is Ian Jennings. And today we're going to get started with public view.

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#6660">00:06</a></sup>

 So what I've done here is I've actually created a basic view app using the view, See, Eli.

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#9926">00:09</a></sup>

 ```ubuntu.exe > Select ianjennings@DESKTOP-9EPH6Q2: /mnt/c/Users/Jennings/Desktop```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#13910">00:13</a></sup>

 And so all we need to do now is say, npm run served and that we have our basic view.

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#19929">00:19</a></sup>

 ```ubuntu.exe > ianjennings@DESKTOP-9EPH6Q2: /mnt/c/Users/Jennings/Desktop```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#19940">00:19</a></sup>

 And there we go.

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#25620">00:25</a></sup>

 So well that starts

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#28000">00:28</a></sup>

 I'm gonna open up the folder in

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#29940">00:29</a></sup>

 ```explorer.exe > pubnub-vue-demo```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#30940">00:30</a></sup>

 Riesco, so we'll obey us with code and so that server started and let's pop it open in the browser.

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#39940">00:39</a></sup>

 ```chrome.exe > pubnub-vue-demo - Google Chrome```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#40950">00:40</a></sup>

 All right. There we go.

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#42360">00:42</a></sup>

 So we've got everything set here, except we don't have public up. So what I'm going to do now is used the public. The USDA and all we need to do is pop up in the terminal again going to kill the server and MGM install

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#49954">00:49</a></sup>

 ```Code.exe > package.json - pubnub-vue-demo - Visual Studio Code```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#57430">00:57</a></sup>

 That's going in self interview within our package.

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#59936">00:59</a></sup>

 ```ubuntu.exe > ianjennings@DESKTOP-9EPH6Q2: /mnt/c/Users/Jennings/Desktop/pubnub-vue-demo```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#63210">01:03</a></sup>

 Well, that's happening. Let's imported because we can predict where it will be. So we're going to source and then we'll go into Maine and we will say Import public knob.

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#69942">01:09</a></sup>

 ```Code.exe > main.js - pubnub-vue-demo - Visual Studio Code```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#74810">01:14</a></sup>

 You from? It actually goes online to there. Okay, so that's been imported. And we are just going to configure this to use our Putnam publisher and subscribe keys. So to do that, we're going to say you you and this is going to make sure that this public packages used within globally within view.

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#75356">01:15</a></sup>

```diff
diff --git package.json package.json
--- package.json
+++ package.json
@@ -9,6 +9,7 @@
 },
 "dependencies": {
 "core-js": "^3.6.4",
+"pubnub-vue": "^1.0.1",
 "vue": "^2.6.11"
 },
 "devDependencies": {
```



<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#80297">01:20</a></sup>

```diff
diff --git src/main.js src/main.js
--- src/main.js
+++ src/main.js
@@ -1,4 +1,5 @@
 import Vue from 'vue'
+import PubNubVue from 'pubnub-vue';
 import App from './App.vue'
 
 Vue.config.productionTip = false
```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#89950">01:29</a></sup>

 ```Code.exe > ● main.js - pubnub-vue-demo - Visual Studio Code```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#96610">01:36</a></sup>

 It's a part of you.

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#99090">01:39</a></sup>

 Subscribed No and publish key demo.



<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#105954">01:45</a></sup>

```diff
diff --git src/main.js src/main.js
--- src/main.js
+++ src/main.js
@@ -2,7 +2,12 @@ import Vue from 'vue'
 import PubNubVue from 'pubnub-vue';
 import App from './App.vue'
 
-Vue.config.productionTip = false
+Vue.config.productionTip = false;
+
+Vue.use(PubNubVue, {
+subscribeKey: 'demo',
+publishKey: 'demo'
+})
 
 new Vue({
 render: h => h(App),
```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#107260">01:47</a></sup>

 So this is essentially saying.

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#108423">01:48</a></sup>

```diff
diff --git src/main.js src/main.js
--- src/main.js
+++ src/main.js
@@ -7,7 +7,7 @@ Vue.config.productionTip = false;
 Vue.use(PubNubVue, {
 subscribeKey: 'demo',
 publishKey: 'demo'
-})
+});
 
 new Vue({
 render: h => h(App),
```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#109981">01:49</a></sup>

 ```Code.exe > main.js - pubnub-vue-demo - Visual Studio Code```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#109990">01:49</a></sup>

 Use public view globally and use and public is configured with these two keys. You subscribe key and your public. You have Scott Key and you're published.

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#118290">01:58</a></sup>

 Now we're using demo keys for this editorial, But you should put your own keys in there.



<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#124290">02:04</a></sup>

 All right. So let's start this and just make sure everything works right now. So we'll do npm run served, and from now on, we won't actually have to restart the server because the packages have already been installed.

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#129964">02:09</a></sup>

 ```ubuntu.exe > ianjennings@DESKTOP-9EPH6Q2: /mnt/c/Users/Jennings/Desktop/pubnub-vue-demo```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#136060">02:16</a></sup>

 Get ready to refresh this. And I'm also gonna pop the consul open, too, so you can see what happens.

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#139958">02:19</a></sup>

 ```chrome.exe > pubnub-vue-demo - Google Chrome```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#143390">02:23</a></sup>

 Okay, so that would give

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#146110">02:26</a></sup>

 So what public does allows you to publish and receive messages over the Internet in real time?



<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#153399.9">02:33</a></sup>

 I'm going to start just by publishing a message.

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#156289.9">02:36</a></sup>

 And to do that, within our out, you were going to make a method called

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#159750">02:39</a></sup>

 Push.

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#159983">02:39</a></sup>

 ```Code.exe > App.vue - pubnub-vue-demo - Visual Studio Code```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#161690">02:41</a></sup>

 So here. This is our default. It looks like I need an extension to render this with some color code. So let's do that.



<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#170180">02:50</a></sup>

 Meanwhile, I'll start typing. So what we need here is a method. So this is the default view. Initialize initialization kind of configuration methodology. You're probably familiar with.



<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#181290">03:01</a></sup>

 And what we're going to do here is, um

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#186300">03:06</a></sup>

 Take this. Hello, world of you, So let's go back and find that

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#189880">03:09</a></sup>

 Components. Hello, world And so this is our initial view component. There we go. The highlighted kicked in.



<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#196500">03:16</a></sup>

 Okay, So what we're going to do now is we're gonna actually delete a lot of this temple. It's stuff. We don't need a lot of this.

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#200000">03:20</a></sup>

 ```Code.exe > HelloWorld.vue - pubnub-vue-demo - Visual Studio Code```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#202610">03:22</a></sup>

 Andi have this message we have. It's been initialized with Hello, world.

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#208240">03:28</a></sup>

 Great.

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#209979">03:29</a></sup>

 ```Code.exe > ● HelloWorld.vue - pubnub-vue-demo - Visual Studio Code```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#210800">03:30</a></sup>

 Message straight. Okay, let's still lead a bunch of this stuff. We just don't need it.

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#216980">03:36</a></sup>

 Okay, So what we do need, though, is we're going to need

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#219812">03:39</a></sup>

```diff
diff --git src/components/HelloWorld.vue src/components/HelloWorld.vue
--- src/components/HelloWorld.vue
+++ src/components/HelloWorld.vue
@@ -1,33 +1,4 @@
 <template>
-<div class="hello">
-<h1>{{ msg }}</h1>
-<p>
-For a guide and recipes on how to configure / customize this project,<br>
-check out the
-<a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
-</p>
-<h3>Installed CLI Plugins</h3>
-<ul>
-<li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
-<li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
-</ul>
-<h3>Essential Links</h3>
-<ul>
-<li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
-<li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
-<li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
-<li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
-<li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
-</ul>
-<h3>Ecosystem</h3>
-<ul>
-<li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
-<li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
-<li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
-<li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
-<li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
-</ul>
-</div>
 </template>
 
 <script> @@ -41,18 +12,4 @@ export default {
 
 <!-- Add "scoped" attribute to limit CSS to this component only -->
 <style scoped>
-h3 {
-margin: 40px 0 0;
-}
-ul {
-list-style-type: none;
-padding: 0;
-}
-li {
-display: inline-block;
-margin: 0 10px;
-}
-a {
-color: #42b983;
-}
 </style>
```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#219982">03:39</a></sup>

 ```Code.exe > HelloWorld.vue - pubnub-vue-demo - Visual Studio Code```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#222000">03:42</a></sup>

 It doesn't like that. The Templars requires exactly one. Okay. I think we actually do need some of this stuff and we go. We'll just use the helo.

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#227462">03:47</a></sup>

```diff
diff --git src/components/HelloWorld.vue src/components/HelloWorld.vue
--- src/components/HelloWorld.vue
+++ src/components/HelloWorld.vue
@@ -1,15 +1,98 @@
 <template>
+<div class="hello">
+<h1>{{ msg }}</h1>
+<p>
+For a guide and recipes on how to configure / customize this project,
+<br />check out the
+<a
+href="https://cli.vuejs.org"
+target="_blank"
+rel="noopener"
+>vue-cli documentation</a>.
+</p>
+<h3>Installed CLI Plugins</h3>
+<ul>
+<li>
+<a
+href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
+target="_blank"
+rel="noopener"
+>babel</a>
+</li>
+<li>
+<a
+href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
+target="_blank"
+rel="noopener"
+>eslint</a>
+</li>
+</ul>
+<h3>Essential Links</h3>
+<ul>
+<li>
+<a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a>
+</li>
+<li>
+<a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a>
+</li>
+<li>
+<a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a>
+</li>
+<li>
+<a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a>
+</li>
+<li>
+<a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a>
+</li>
+</ul>
+<h3>Ecosystem</h3>
+<ul>
+<li>
+<a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a>
+</li>
+<li>
+<a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a>
+</li>
+<li>
+<a
+href="https://github.com/vuejs/vue-devtools#vue-devtools"
+target="_blank"
+rel="noopener"
+>vue-devtools</a>
+</li>
+<li>
+<a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a>
+</li>
+<li>
+<a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a>
+</li>
+</ul>
+</div>
 </template>
 
 <script>
 export default {
-name: 'HelloWorld',
+name: "HelloWorld",
 props: {
 msg: String
 }
-}
+};
 </script>
 
 <!-- Add "scoped" attribute to limit CSS to this component only -->
 <style scoped>
+h3 {
+margin: 40px 0 0;
+}
+ul {
+list-style-type: none;
+padding: 0;
+}
+li {
+display: inline-block;
+margin: 0 10px;
+}
+a {
+color: #42b983;
+}
 </style>
```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#228800">03:48</a></sup>

 Get rid of these.



<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#231460">03:51</a></sup>

 He's here. Okay, There we go. So we have that defense. Hello?

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#235285">03:55</a></sup>

```diff
diff --git src/components/HelloWorld.vue src/components/HelloWorld.vue
--- src/components/HelloWorld.vue
+++ src/components/HelloWorld.vue
@@ -1,73 +1,5 @@
 <template>
-<div class="hello">
-<h1>{{ msg }}</h1>
-<p>
-For a guide and recipes on how to configure / customize this project,
-<br />check out the
-<a
-href="https://cli.vuejs.org"
-target="_blank"
-rel="noopener"
->vue-cli documentation</a>.
-</p>
-<h3>Installed CLI Plugins</h3>
-<ul>
-<li>
-<a
-href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
-target="_blank"
-rel="noopener"
->babel</a>
-</li>
-<li>
-<a
-href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
-target="_blank"
-rel="noopener"
->eslint</a>
-</li>
-</ul>
-<h3>Essential Links</h3>
-<ul>
-<li>
-<a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a>
-</li>
-<li>
-<a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a>
-</li>
-<li>
-<a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a>
-</li>
-<li>
-<a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a>
-</li>
-<li>
-<a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a>
-</li>
-</ul>
-<h3>Ecosystem</h3>
-<ul>
-<li>
-<a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a>
-</li>
-<li>
-<a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a>
-</li>
-<li>
-<a
-href="https://github.com/vuejs/vue-devtools#vue-devtools"
-target="_blank"
-rel="noopener"
->vue-devtools</a>
-</li>
-<li>
-<a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a>
-</li>
-<li>
-<a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a>
-</li>
-</ul>
-</div>
+<div class="hello"></div>
 </template>
 
 <script>
```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#235840">03:55</a></sup>

 And the message is there. Um I'm actually gonna find out where that message comes from. I'm not curious. Welcomed other Hello, World message. So this is our main template and we're gonna be rendering it in. Hello, world. OK, so

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#237456">03:57</a></sup>

```diff
diff --git src/components/HelloWorld.vue src/components/HelloWorld.vue
--- src/components/HelloWorld.vue
+++ src/components/HelloWorld.vue
@@ -1,5 +1,7 @@
 <template>
-<div class="hello"></div>
+<div class="hello">
+<h1>{{ msg }}</h1>
+</div>
 </template>
 
 <script>
```



<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#248740">04:08</a></sup>

 Let's put this push function into this. Hello, world component. So what we're going to do is call is just to find them view methods here and we're going to make a method called Push.



<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#259993">04:19</a></sup>

 ```Code.exe > ● HelloWorld.vue - pubnub-vue-demo - Visual Studio Code```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#260959.99999999997">04:20</a></sup>

 And now we have an object called this

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#264950">04:24</a></sup>

 Keon published available and this is essentially the public published function.



<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#272730">04:32</a></sup>

 The channel, which were defining now is like a room say in a chat application, and it could be typically that's general. Right. So we'll call the general and the message will just be something simple. Like



<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#281883">04:41</a></sup>

```diff
diff --git src/components/HelloWorld.vue src/components/HelloWorld.vue
--- src/components/HelloWorld.vue
+++ src/components/HelloWorld.vue
@@ -9,6 +9,13 @@ export default {
 name: "HelloWorld",
 props: {
 msg: String
+},
+methods: {
+push() {
+this.$pnPublish({
+channel: "general"
+});
+}
 }
 };
 </script>
```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#287780">04:47</a></sup>

 A new day.



<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#294440">04:54</a></sup>

 Great. So we have this method called push.

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#295329">04:55</a></sup>

```diff
diff --git src/components/HelloWorld.vue src/components/HelloWorld.vue
--- src/components/HelloWorld.vue
+++ src/components/HelloWorld.vue
@@ -13,7 +13,8 @@ export default {
 methods: {
 push() {
 this.$pnPublish({
-channel: "general"
+channel: "general",
+message: new Date().now()
 });
 }
 }
```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#298269.9">04:58</a></sup>

 And when it executes its going to publish a message over the channel into that room, So let's make a way to trigger this. Let's call this makeup, but him and we'll call it um and do be on click equals Bush.

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#300005">05:00</a></sup>

 ```Code.exe > HelloWorld.vue - pubnub-vue-demo - Visual Studio Code```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#303738">05:03</a></sup>

```diff
diff --git src/components/HelloWorld.vue src/components/HelloWorld.vue
--- src/components/HelloWorld.vue
+++ src/components/HelloWorld.vue
@@ -12,10 +12,12 @@ export default {
 },
 methods: {
 push() {
+
 this.$pnPublish({
 channel: "general",
 message: new Date().now()
 });
+
 }
 }
 };
```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#309993">05:09</a></sup>

 ```Code.exe > ● HelloWorld.vue - pubnub-vue-demo - Visual Studio Code```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#314440">05:14</a></sup>

 Okay, so that we have this little button. I think I think they're like this. We're going to say publish

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#315905">05:15</a></sup>

```diff
diff --git src/components/HelloWorld.vue src/components/HelloWorld.vue
--- src/components/HelloWorld.vue
+++ src/components/HelloWorld.vue
@@ -1,6 +1,7 @@
 <template>
 <div class="hello">
 <h1>{{ msg }}</h1>
+<button v-on:click="push()" />
 </div>
 </template>
  @@ -12,12 +13,10 @@ export default {
 },
 methods: {
 push() {
-
 this.$pnPublish({
 channel: "general",
 message: new Date().now()
 });
-
 }
 }
 };
```



<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#323359.89999999997">05:23</a></sup>

 Okay, let's see. So that's been defined here only click this.

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#324272">05:24</a></sup>

```diff
diff --git src/components/HelloWorld.vue src/components/HelloWorld.vue
--- src/components/HelloWorld.vue
+++ src/components/HelloWorld.vue
@@ -1,7 +1,7 @@
 <template>
 <div class="hello">
 <h1>{{ msg }}</h1>
-<button v-on:click="push()" />
+<button v-on:click="push()">Publish</button>
 </div>
 </template>
 
```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#327760">05:27</a></sup>

 Again here Value now is not a function. Okay? That makes sense. This is trying this new date. Um

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#330007">05:30</a></sup>

 ```Code.exe > HelloWorld.vue - pubnub-vue-demo - Visual Studio Code```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#332478">05:32</a></sup>

```diff
diff --git src/components/HelloWorld.vue src/components/HelloWorld.vue
--- src/components/HelloWorld.vue
+++ src/components/HelloWorld.vue
@@ -15,7 +15,7 @@ export default {
 push() {
 this.$pnPublish({
 channel: "general",
-message: new Date().now()
+message: Date().now()
 });
 }
 }
```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#334790">05:34</a></sup>

 Yeah.

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#336524">05:36</a></sup>

```diff
diff --git src/components/HelloWorld.vue src/components/HelloWorld.vue
--- src/components/HelloWorld.vue
+++ src/components/HelloWorld.vue
@@ -15,7 +15,7 @@ export default {
 push() {
 this.$pnPublish({
 channel: "general",
-message: Date().now()
+message: Date().getTime()
 });
 }
 }
```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#339730">05:39</a></sup>

 Publish.

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#339993">05:39</a></sup>

 ```chrome.exe > pubnub-vue-demo - Google Chrome```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#341470">05:41</a></sup>

 Okay, get time's not function. I wonder why

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#344385">05:44</a></sup>

```diff
diff --git src/components/HelloWorld.vue src/components/HelloWorld.vue
--- src/components/HelloWorld.vue
+++ src/components/HelloWorld.vue
@@ -15,7 +15,7 @@ export default {
 push() {
 this.$pnPublish({
 channel: "general",
-message: Date().getTime()
+message: new Date().getTime()
 });
 }
 }
```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#347790">05:47</a></sup>

 Okay, There we go. So that's working now.

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#350010">05:50</a></sup>

 And we can see here in the network tab.



<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#354570">05:54</a></sup>

 That those messages are being published over the public network, but we're still missing.

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#359990">05:59</a></sup>

 The rent rendering of them right. We can't see them anywhere. So what we're going to do now is make another method. It's actually an event that subscribes to the same channel and renders the messages as they come in.



<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#370010">06:10</a></sup>

 ```Code.exe > HelloWorld.vue - pubnub-vue-demo - Visual Studio Code```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#371070">06:11</a></sup>

 So

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#372330">06:12</a></sup>

 To do that we're going to actually bind to the mounted view function. This is a ah function in that view provides



<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#380215">06:20</a></sup>

```diff
diff --git src/components/HelloWorld.vue src/components/HelloWorld.vue
--- src/components/HelloWorld.vue
+++ src/components/HelloWorld.vue
@@ -18,7 +18,8 @@ export default {
 message: new Date().getTime()
 });
 }
-}
+},
+mounted() {}
 };
 </script>
 
```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#382420">06:22</a></sup>

 And we're going to call PN subscribe.

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#390021">06:30</a></sup>

 ```Code.exe > ● HelloWorld.vue - pubnub-vue-demo - Visual Studio Code```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#392980">06:32</a></sup>

 And we're just going to say the same channel subscribe uses a paramedical channels rather than channel cause you can subscribe to multiple one, so we'll go to chant General again.



<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#404010">06:44</a></sup>

 There we go. So this means that we're now subscribe, and you actually saw that pop up here in the heart beat

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#404125">06:44</a></sup>

```diff
diff --git src/components/HelloWorld.vue src/components/HelloWorld.vue
--- src/components/HelloWorld.vue
+++ src/components/HelloWorld.vue
@@ -19,7 +19,11 @@ export default {
 });
 }
 },
-mounted() {}
+mounted() {
+this.$pnSubscribe({
+channels: ["general"]
+});
+}
 };
 </script>
 
```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#410034">06:50</a></sup>

 ```chrome.exe > pubnub-vue-demo - Google Chrome```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#413280">06:53</a></sup>

 All right.

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#414420">06:54</a></sup>

 So we have published. We've subscribed and now all we need to do is render those messages.

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#420025">07:00</a></sup>

 ```Code.exe > HelloWorld.vue - pubnub-vue-demo - Visual Studio Code```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#421750">07:01</a></sup>

 Now there's a really cool way to do this with one of you, and it actually binds into your data component. So interview data can be dynamic. And what we do here is we actually say.

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#430096">07:10</a></sup>

 ```Code.exe > ● HelloWorld.vue - pubnub-vue-demo - Visual Studio Code```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#433140">07:13</a></sup>

 Um

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#434740">07:14</a></sup>

 Let's define the message. Or how about last message is this p n get message?



<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#444910">07:24</a></sup>

 No one general. Actually Sorry, General.

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#446660">07:26</a></sup>

```diff
diff --git src/components/HelloWorld.vue src/components/HelloWorld.vue
--- src/components/HelloWorld.vue
+++ src/components/HelloWorld.vue
@@ -11,6 +11,11 @@ export default {
 props: {
 msg: String
 },
+data() {
+return {
+lastMessage: this.$pnGetMessage("ch1")
+};
+},
 methods: {
 push() {
 this.$pnPublish({
```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#448788">07:28</a></sup>

```diff
diff --git src/components/HelloWorld.vue src/components/HelloWorld.vue
--- src/components/HelloWorld.vue
+++ src/components/HelloWorld.vue
@@ -13,7 +13,7 @@ export default {
 },
 data() {
 return {
-lastMessage: this.$pnGetMessage("ch1")
+lastMessage: this.$pnGetMessage("general")
 };
 },
 methods: {
```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#449730">07:29</a></sup>

 So

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#450037">07:30</a></sup>

 ```Code.exe > HelloWorld.vue - pubnub-vue-demo - Visual Studio Code```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#450960">07:30</a></sup>

 That is going to make a political last message on the view component.

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#455230">07:35</a></sup>

 Which contains the last message. I was published, and so in this demo that would be the get time.



<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#460990">07:40</a></sup>

 Now All we have to do to render this message is just put a message.

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#466686">07:46</a></sup>

```diff
diff --git src/components/HelloWorld.vue src/components/HelloWorld.vue
--- src/components/HelloWorld.vue
+++ src/components/HelloWorld.vue
@@ -1,6 +1,6 @@
 <template>
 <div class="hello">
-<h1>{{ msg }}</h1>
+<h1>{{ lastMessage }}</h1>
 <button v-on:click="push()">Publish</button>
 </div>
 </template>
```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#467810">07:47</a></sup>

 So there we go. Now when we publish we can see that last message be rendered.

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#470032">07:50</a></sup>

 ```chrome.exe > pubnub-vue-demo - Google Chrome```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#473610">07:53</a></sup>

 I was incorrect. Actually, this is an array

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#476420">07:56</a></sup>

 So we'll call it last messages.

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#478534">07:58</a></sup>

```diff
diff --git src/components/HelloWorld.vue src/components/HelloWorld.vue
--- src/components/HelloWorld.vue
+++ src/components/HelloWorld.vue
@@ -13,7 +13,7 @@ export default {
 },
 data() {
 return {
-lastMessage: this.$pnGetMessage("general")
+lastMessages: this.$pnGetMessage("general")
 };
 },
 methods: {
```



<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#482230">08:02</a></sup>

 Messages.

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#484505">08:04</a></sup>

```diff
diff --git src/components/HelloWorld.vue src/components/HelloWorld.vue
--- src/components/HelloWorld.vue
+++ src/components/HelloWorld.vue
@@ -1,6 +1,6 @@
 <template>
 <div class="hello">
-<h1>{{ lastMessage }}</h1>
+<h1>{{ lastMessages }}</h1>
 <button v-on:click="push()">Publish</button>
 </div>
 </template>
```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#485020">08:05</a></sup>

 And now those are rendered.

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#487140">08:07</a></sup>

 Like, so it's not very helpful to have this giant H one that renders these messages so big. So what we'll do is turn this into a list.

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#490060">08:10</a></sup>

 ```Code.exe > HelloWorld.vue - pubnub-vue-demo - Visual Studio Code```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#494810">08:14</a></sup>

 In view, That's easy enough. What we'll do is we'll make a loop and we'll call it. Um, you well well, okay, don't do Ally and the four equals message in last messages.

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#500052">08:20</a></sup>

 ```Code.exe > ● HelloWorld.vue - pubnub-vue-demo - Visual Studio Code```



<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#516820.00000000006">08:36</a></sup>

 And then for each

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#519750">08:39</a></sup>

 Message. Will dio will just type like that.



<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#524319">08:44</a></sup>

```diff
diff --git src/components/HelloWorld.vue src/components/HelloWorld.vue
--- src/components/HelloWorld.vue
+++ src/components/HelloWorld.vue
@@ -1,6 +1,9 @@
 <template>
 <div class="hello">
-<h1>{{ lastMessages }}</h1>
+<ul>
+<li v-for="message in lastMessages">{{message}}</li>
+</ul>
+{{ lastMessages }}
 <button v-on:click="push()">Publish</button>
 </div>
 </template>
```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#529939">08:49</a></sup>

```diff
diff --git src/components/HelloWorld.vue src/components/HelloWorld.vue
--- src/components/HelloWorld.vue
+++ src/components/HelloWorld.vue
@@ -3,7 +3,6 @@
 <ul>
 <li v-for="message in lastMessages">{{message}}</li>
 </ul>
-{{ lastMessages }}
 <button v-on:click="push()">Publish</button>
 </div>
 </template>
```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#530060">08:50</a></sup>

 ```Code.exe > HelloWorld.vue - pubnub-vue-demo - Visual Studio Code```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#530789.9">08:50</a></sup>

 Our syntax, Highlighter says. We actually included buying. So do be bind.

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#535270.1">08:55</a></sup>

 Ke equals last message.

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#540047">09:00</a></sup>

 ```Code.exe > ● HelloWorld.vue - pubnub-vue-demo - Visual Studio Code```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#543437">09:03</a></sup>

```diff
diff --git src/components/HelloWorld.vue src/components/HelloWorld.vue
--- src/components/HelloWorld.vue
+++ src/components/HelloWorld.vue
@@ -1,7 +1,7 @@
 <template>
 <div class="hello">
 <ul>
-<li v-for="message in lastMessages">{{message}}</li>
+<li v-for="message in lastMessages" v-bind:key="lastMessage.date">{{message}}</li>
 </ul>
 <button v-on:click="push()">Publish</button>
 </div>
```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#544039.9">09:04</a></sup>

 Last message, I'd I'm actually let's actually look at the

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#545673">09:05</a></sup>

```diff
diff --git src/components/HelloWorld.vue src/components/HelloWorld.vue
--- src/components/HelloWorld.vue
+++ src/components/HelloWorld.vue
@@ -1,7 +1,7 @@
 <template>
 <div class="hello">
 <ul>
-<li v-for="message in lastMessages" v-bind:key="lastMessage.date">{{message}}</li>
+<li v-for="message in lastMessages" v-bind:key="lastMessage.id">{{message}}</li>
 </ul>
 <button v-on:click="push()">Publish</button>
 </div>
```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#549230">09:09</a></sup>

 Last message time took and that will be, you know, that's a good way time.



<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#555150.1">09:15</a></sup>

 Token.

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#557404">09:17</a></sup>

```diff
diff --git src/components/HelloWorld.vue src/components/HelloWorld.vue
--- src/components/HelloWorld.vue
+++ src/components/HelloWorld.vue
@@ -1,7 +1,7 @@
 <template>
 <div class="hello">
 <ul>
-<li v-for="message in lastMessages" v-bind:key="lastMessage.id">{{message}}</li>
+<li v-for="message in lastMessages" v-bind:key="lastMessage.timetoken">{{message}}</li>
 </ul>
 <button v-on:click="push()">Publish</button>
 </div>
```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#560051">09:20</a></sup>

 ```Code.exe > HelloWorld.vue - pubnub-vue-demo - Visual Studio Code```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#561320">09:21</a></sup>

 Effected a message message, and there we go.

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#564946">09:24</a></sup>

```diff
diff --git src/components/HelloWorld.vue src/components/HelloWorld.vue
--- src/components/HelloWorld.vue
+++ src/components/HelloWorld.vue
@@ -1,7 +1,7 @@
 <template>
 <div class="hello">
 <ul>
-<li v-for="message in lastMessages" v-bind:key="lastMessage.timetoken">{{message}}</li>
+<li v-for="message in lastMessages" v-bind:key="message.timetoken">{{message}}</li>
 </ul>
 <button v-on:click="push()">Publish</button>
 </div>
```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#565909.9">09:25</a></sup>

 There we go. So now we have a list of messages with a giant view logo up top.

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#570053">09:30</a></sup>

 ```chrome.exe > pubnub-vue-demo - Google Chrome```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#572180">09:32</a></sup>

 And we actually only want the contents and so that content will be under message for clarification. I'm actually going to turn this into

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#580053">09:40</a></sup>

 ```Code.exe > HelloWorld.vue - pubnub-vue-demo - Visual Studio Code```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#583340.1">09:43</a></sup>

 Roll message.

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#585493">09:45</a></sup>

```diff
diff --git src/components/HelloWorld.vue src/components/HelloWorld.vue
--- src/components/HelloWorld.vue
+++ src/components/HelloWorld.vue
@@ -1,7 +1,7 @@
 <template>
 <div class="hello">
 <ul>
-<li v-for="message in lastMessages" v-bind:key="message.timetoken">{{message}}</li>
+<li v-for="rawMessage in lastMessages" v-bind:key="message.timetoken">{{message}}</li>
 </ul>
 <button v-on:click="push()">Publish</button>
 </div>
```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#588130">09:48</a></sup>

 Okay, So now we have a list of wrong messages.

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#588794">09:48</a></sup>

```diff
diff --git src/components/HelloWorld.vue src/components/HelloWorld.vue
--- src/components/HelloWorld.vue
+++ src/components/HelloWorld.vue
@@ -1,7 +1,7 @@
 <template>
 <div class="hello">
 <ul>
-<li v-for="rawMessage in lastMessages" v-bind:key="message.timetoken">{{message}}</li>
+<li v-for="rawMessage in lastMessages" v-bind:key="rawMessage.timetoken">{{message}}</li>
 </ul>
 <button v-on:click="push()">Publish</button>
 </div>
```



<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#593640">09:53</a></sup>

 Publish publish publish.

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#596630">09:56</a></sup>

 And instead what we're going to do

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#599380">09:59</a></sup>

 Is rendered the message attributes of that raw message. So there we go there our hour.

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#600070">10:00</a></sup>

 ```Code.exe > ● HelloWorld.vue - pubnub-vue-demo - Visual Studio Code```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#602000">10:02</a></sup>

```diff
diff --git src/components/HelloWorld.vue src/components/HelloWorld.vue
--- src/components/HelloWorld.vue
+++ src/components/HelloWorld.vue
@@ -1,7 +1,10 @@
 <template>
 <div class="hello">
 <ul>
-<li v-for="rawMessage in lastMessages" v-bind:key="rawMessage.timetoken">{{message}}</li>
+<li
+v-for="rawMessage in lastMessages"
+v-bind:key="rawMessage.timetoken"
+>{{rawMessage.message}}</li>
 </ul>
 <button v-on:click="push()">Publish</button>
 </div>
```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#606510">10:06</a></sup>

 Messages. Now the super cool thing about this is ABI openness and another window.

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#610091">10:10</a></sup>

 ```chrome.exe > pubnub-vue-demo - Google Chrome```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#612840.1">10:12</a></sup>

 And publish. You're going to see them appear in both.

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#619840.1">10:19</a></sup>

 All right, so let's add our own message.

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#620074">10:20</a></sup>

 ```Code.exe > HelloWorld.vue - pubnub-vue-demo - Visual Studio Code```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#625070">10:25</a></sup>

 Why don't we have an input here and that'll be? We'll call it in quick message.

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#630092">10:30</a></sup>

 ```Code.exe > ● HelloWorld.vue - pubnub-vue-demo - Visual Studio Code```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#632800">10:32</a></sup>

 Um

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#636030.1">10:36</a></sup>

 I bind it is input message.



<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#640780.1">10:40</a></sup>

 Wait. We need type text there.

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#645113">10:45</a></sup>

```diff
diff --git src/components/HelloWorld.vue src/components/HelloWorld.vue
--- src/components/HelloWorld.vue
+++ src/components/HelloWorld.vue
@@ -6,6 +6,7 @@
 v-bind:key="rawMessage.timetoken"
 >{{rawMessage.message}}</li>
 </ul>
+<input v-bind="inputMessage" type="text" />
 <button v-on:click="push()">Publish</button>
 </div>
 </template>
```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#645830">10:45</a></sup>

 Okay, So we have that.

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#648700">10:48</a></sup>

 And now we want in this mess in this push method what we're going to do.

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#650119">10:50</a></sup>

 ```Code.exe > HelloWorld.vue - pubnub-vue-demo - Visual Studio Code```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#653570">10:53</a></sup>

 Is

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#655810">10:55</a></sup>

 Actually, first we need to find this as a data property, so return input.

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#660077">11:00</a></sup>

 ```Code.exe > ● HelloWorld.vue - pubnub-vue-demo - Visual Studio Code```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#665587">11:05</a></sup>

```diff
diff --git src/components/HelloWorld.vue src/components/HelloWorld.vue
--- src/components/HelloWorld.vue
+++ src/components/HelloWorld.vue
@@ -19,6 +19,7 @@ export default {
 },
 data() {
 return {
+inputMessage,
 lastMessages: this.$pnGetMessage("general")
 };
 },
```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#667090">11:07</a></sup>

 The best thiss.

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#670097">11:10</a></sup>

 ```Code.exe > HelloWorld.vue - pubnub-vue-demo - Visual Studio Code```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#670275">11:10</a></sup>

```diff
diff --git src/components/HelloWorld.vue src/components/HelloWorld.vue
--- src/components/HelloWorld.vue
+++ src/components/HelloWorld.vue
@@ -19,7 +19,7 @@ export default {
 },
 data() {
 return {
-inputMessage,
+inputMessage: this.inputMessage,
 lastMessages: this.$pnGetMessage("general")
 };
 },
```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#672060">11:12</a></sup>

 So

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#673520">11:13</a></sup>

 What we're going to do now is when we publish we're going to actually published the input message here, then we're actually going to set the input message to know again that way. It doesn't

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#680088">11:20</a></sup>

 ```Code.exe > ● HelloWorld.vue - pubnub-vue-demo - Visual Studio Code```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#681272">11:21</a></sup>

```diff
diff --git src/components/HelloWorld.vue src/components/HelloWorld.vue
--- src/components/HelloWorld.vue
+++ src/components/HelloWorld.vue
@@ -27,7 +27,7 @@ export default {
 push() {
 this.$pnPublish({
 channel: "general",
-message: new Date().getTime()
+message: this.inputMessage
 });
 }
 },
```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#685594">11:25</a></sup>

```diff
diff --git src/components/HelloWorld.vue src/components/HelloWorld.vue
--- src/components/HelloWorld.vue
+++ src/components/HelloWorld.vue
@@ -29,6 +29,8 @@ export default {
 channel: "general",
 message: this.inputMessage
 });
+
+this.inputMessage = "";
 }
 },
 mounted() {
```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#686010">11:26</a></sup>

 Keep you know doesn't keep publishing the same message. Refresh your test.

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#690090">11:30</a></sup>

 ```chrome.exe > pubnub-vue-demo - Google Chrome```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#692240">11:32</a></sup>

 We're getting some kind of barrier check status for details.

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#699010">11:39</a></sup>

 Okay, well, something is going wrong here and we're going to do is look at what this input message is when we are logging it.

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#700089">11:40</a></sup>

 ```Code.exe > ● HelloWorld.vue - pubnub-vue-demo - Visual Studio Code```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#706767">11:46</a></sup>

```diff
diff --git src/components/HelloWorld.vue src/components/HelloWorld.vue
--- src/components/HelloWorld.vue
+++ src/components/HelloWorld.vue
@@ -25,6 +25,8 @@ export default {
 },
 methods: {
 push() {
+console.log(this.inputMessage);
+
 this.$pnPublish({
 channel: "general",
 message: this.inputMessage
```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#710090">11:50</a></sup>

 ```chrome.exe > pubnub-vue-demo - Google Chrome```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#711660">11:51</a></sup>

 Undefined, Okay?

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#713450">11:53</a></sup>

 So

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#714540">11:54</a></sup>

 V Bind is not working. I'm going to be blind again because I'm

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#719950">11:59</a></sup>

 See, I think we want the model. Actually, that's what it is. Yes.

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#720097">12:00</a></sup>

 ```chrome.exe > v-bind - Google Search - Google Chrome```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#724123">12:04</a></sup>

```diff
diff --git src/components/HelloWorld.vue src/components/HelloWorld.vue
--- src/components/HelloWorld.vue
+++ src/components/HelloWorld.vue
@@ -6,7 +6,7 @@
 v-bind:key="rawMessage.timetoken"
 >{{rawMessage.message}}</li>
 </ul>
-<input v-bind="inputMessage" type="text" />
+<input v-model="inputMessage" type="text" />
 <button v-on:click="push()">Publish</button>
 </div>
 </template>
```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#727530">12:07</a></sup>

 Okay, so there we were Publishing now. The messages.

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#730093">12:10</a></sup>

 ```chrome.exe > pubnub-vue-demo - Google Chrome```

<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#735310">12:15</a></sup>

 And again if we open another window.



<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#740920">12:20</a></sup>

 They appear on both sides.



<sup><a href="https://app.paircast.io/replay/7d77c93e-df0b-47f9-b7ac-154925054ca5#754380">12:34</a></sup>

 All right there you have it. Thanks for taking the time to get started. With public view. These are the essentials and you'll be able to create some amazing things from here.
