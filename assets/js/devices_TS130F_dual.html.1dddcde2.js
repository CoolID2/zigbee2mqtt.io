"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[88376],{78802:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>a,data:()=>l});var i=o(6254);const n={},a=(0,o(89596).A)(n,[["render",function(e,t){const o=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[t[8]||(t[8]=(0,i.Lk)("h1",{id:"lonsonho-ts130f-dual",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#lonsonho-ts130f-dual"},[(0,i.Lk)("span",null,"Lonsonho TS130F_dual")])],-1)),(0,i.Lk)("table",null,[t[6]||(t[6]=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1)),(0,i.Lk)("tbody",null,[t[2]||(t[2]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"TS130F_dual")],-1)),(0,i.Lk)("tr",null,[t[1]||(t[1]=(0,i.Lk)("td",null,"Vendor",-1)),(0,i.Lk)("td",null,[(0,i.bF)(o,{to:"/supported-devices/#v=Lonsonho"},{default:(0,i.k6)((()=>t[0]||(t[0]=[(0,i.eW)("Lonsonho")]))),_:1})])]),t[3]||(t[3]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"Dual curtain/blind module")],-1)),t[4]||(t[4]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"moving, calibration_time, cover (state, position), calibration, motor_reversal, linkquality")],-1)),t[5]||(t[5]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TS130F_dual.png",alt:"Lonsonho TS130F_dual"})])],-1))])]),t[9]||(t[9]=(0,i.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><p>The output is only driven once the input signal is released, hence making this device difficult to work with non-momentary switches.</p><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>Press on pair button for 10 seconds to enter pairing mode</p><h3 id="calibration" tabindex="-1"><a class="header-anchor" href="#calibration"><span>Calibration</span></a></h3><ul><li>Press the open button on the switch, wait until the curtains are completely open.</li><li>Press the same button on the switch again to &#39;stop&#39;.</li><li>Put the device into calibration mode, see <a href="#calibration-binary">below</a>.</li><li>Press the close button on the switch, wait until curtains are fully closed.</li><li>Press the same button on the switch.</li><li>Disable the calibration mode, see <a href="#calibration-binary">below</a>.</li></ul><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',7)),(0,i.Lk)("p",null,[(0,i.Lk)("em",null,[(0,i.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.k6)((()=>t[7]||(t[7]=[(0,i.eW)("How to use device type specific configuration")]))),_:1})])]),t[10]||(t[10]=(0,i.Fv)('<ul><li><p><code>invert_cover</code>: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>cover_position_tilt_disable_report</code>: Do not publish set cover target position as a normal &#39;position&#39; value (default false). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="moving-enum-left-endpoint" tabindex="-1"><a class="header-anchor" href="#moving-enum-left-endpoint"><span>Moving (enum, left endpoint)</span></a></h3><p>Value can be found in the published state on the <code>moving_left</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>UP</code>, <code>STOP</code>, <code>DOWN</code>.</p><h3 id="moving-enum-right-endpoint" tabindex="-1"><a class="header-anchor" href="#moving-enum-right-endpoint"><span>Moving (enum, right endpoint)</span></a></h3><p>Value can be found in the published state on the <code>moving_right</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>UP</code>, <code>STOP</code>, <code>DOWN</code>.</p><h3 id="calibration-time-numeric-left-endpoint" tabindex="-1"><a class="header-anchor" href="#calibration-time-numeric-left-endpoint"><span>Calibration time (numeric, left endpoint)</span></a></h3><p>Calibration time. Value can be found in the published state on the <code>calibration_time_left</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>s</code>.</p><h3 id="calibration-time-numeric-right-endpoint" tabindex="-1"><a class="header-anchor" href="#calibration-time-numeric-right-endpoint"><span>Calibration time (numeric, right endpoint)</span></a></h3><p>Calibration time. Value can be found in the published state on the <code>calibration_time_right</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>s</code>.</p><h3 id="cover-left-endpoint" tabindex="-1"><a class="header-anchor" href="#cover-left-endpoint"><span>Cover (left endpoint)</span></a></h3><p>The current state of this cover is in the published state under the <code>state_left</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_left&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state_left&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state_left&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position_left&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id="calibration-binary-left-endpoint" tabindex="-1"><a class="header-anchor" href="#calibration-binary-left-endpoint"><span>Calibration (binary, left endpoint)</span></a></h3><p>Value can be found in the published state on the <code>calibration_left</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;calibration_left&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;calibration_left&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> calibration is ON, if <code>OFF</code> OFF.</p><h3 id="motor-reversal-binary-left-endpoint" tabindex="-1"><a class="header-anchor" href="#motor-reversal-binary-left-endpoint"><span>Motor reversal (binary, left endpoint)</span></a></h3><p>Value can be found in the published state on the <code>motor_reversal_left</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;motor_reversal_left&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;motor_reversal_left&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> motor reversal is ON, if <code>OFF</code> OFF.</p><h3 id="cover-right-endpoint" tabindex="-1"><a class="header-anchor" href="#cover-right-endpoint"><span>Cover (right endpoint)</span></a></h3><p>The current state of this cover is in the published state under the <code>state_right</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_right&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state_right&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state_right&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position_right&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id="calibration-binary-right-endpoint" tabindex="-1"><a class="header-anchor" href="#calibration-binary-right-endpoint"><span>Calibration (binary, right endpoint)</span></a></h3><p>Value can be found in the published state on the <code>calibration_right</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;calibration_right&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;calibration_right&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> calibration is ON, if <code>OFF</code> OFF.</p><h3 id="motor-reversal-binary-right-endpoint" tabindex="-1"><a class="header-anchor" href="#motor-reversal-binary-right-endpoint"><span>Motor reversal (binary, right endpoint)</span></a></h3><p>Value can be found in the published state on the <code>motor_reversal_right</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;motor_reversal_right&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;motor_reversal_right&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> motor reversal is ON, if <code>OFF</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',24))])}]]),l=JSON.parse('{"path":"/devices/TS130F_dual.html","title":"Lonsonho TS130F_dual control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Lonsonho TS130F_dual control via MQTT","description":"Integrate your Lonsonho TS130F_dual via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-01-01T12:47:02.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Calibration","slug":"calibration","link":"#calibration","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Moving (enum, left endpoint)","slug":"moving-enum-left-endpoint","link":"#moving-enum-left-endpoint","children":[]},{"level":3,"title":"Moving (enum, right endpoint)","slug":"moving-enum-right-endpoint","link":"#moving-enum-right-endpoint","children":[]},{"level":3,"title":"Calibration time (numeric, left endpoint)","slug":"calibration-time-numeric-left-endpoint","link":"#calibration-time-numeric-left-endpoint","children":[]},{"level":3,"title":"Calibration time (numeric, right endpoint)","slug":"calibration-time-numeric-right-endpoint","link":"#calibration-time-numeric-right-endpoint","children":[]},{"level":3,"title":"Cover (left endpoint)","slug":"cover-left-endpoint","link":"#cover-left-endpoint","children":[]},{"level":3,"title":"Calibration (binary, left endpoint)","slug":"calibration-binary-left-endpoint","link":"#calibration-binary-left-endpoint","children":[]},{"level":3,"title":"Motor reversal (binary, left endpoint)","slug":"motor-reversal-binary-left-endpoint","link":"#motor-reversal-binary-left-endpoint","children":[]},{"level":3,"title":"Cover (right endpoint)","slug":"cover-right-endpoint","link":"#cover-right-endpoint","children":[]},{"level":3,"title":"Calibration (binary, right endpoint)","slug":"calibration-binary-right-endpoint","link":"#calibration-binary-right-endpoint","children":[]},{"level":3,"title":"Motor reversal (binary, right endpoint)","slug":"motor-reversal-binary-right-endpoint","link":"#motor-reversal-binary-right-endpoint","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1734813344000},"filePathRelative":"devices/TS130F_dual.md"}')}}]);