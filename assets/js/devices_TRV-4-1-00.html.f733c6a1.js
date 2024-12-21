"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[16658],{75280:(e,o,t)=>{t.r(o),t.d(o,{comp:()=>a,data:()=>c});var d=t(6254);const i={},a=(0,t(89596).A)(i,[["render",function(e,o){const t=(0,d.g2)("RouteLink");return(0,d.uX)(),(0,d.CE)("div",null,[o[11]||(o[11]=(0,d.Lk)("h1",{id:"nodon-trv-4-1-00",tabindex:"-1"},[(0,d.Lk)("a",{class:"header-anchor",href:"#nodon-trv-4-1-00"},[(0,d.Lk)("span",null,"NodOn TRV-4-1-00")])],-1)),(0,d.Lk)("table",null,[o[6]||(o[6]=(0,d.Lk)("thead",null,[(0,d.Lk)("tr",null,[(0,d.Lk)("th"),(0,d.Lk)("th")])],-1)),(0,d.Lk)("tbody",null,[o[2]||(o[2]=(0,d.Lk)("tr",null,[(0,d.Lk)("td",null,"Model"),(0,d.Lk)("td",null,"TRV-4-1-00")],-1)),(0,d.Lk)("tr",null,[o[1]||(o[1]=(0,d.Lk)("td",null,"Vendor",-1)),(0,d.Lk)("td",null,[(0,d.bF)(t,{to:"/supported-devices/#v=NodOn"},{default:(0,d.k6)((()=>o[0]||(o[0]=[(0,d.eW)("NodOn")]))),_:1})])]),o[3]||(o[3]=(0,d.Lk)("tr",null,[(0,d.Lk)("td",null,"Description"),(0,d.Lk)("td",null,"Thermostatic Radiateur Valve")],-1)),o[4]||(o[4]=(0,d.Lk)("tr",null,[(0,d.Lk)("td",null,"Exposes"),(0,d.Lk)("td",null,"lock (state), climate (local_temperature, pi_heating_demand, local_temperature_calibration, occupied_heating_setpoint, unoccupied_heating_setpoint, system_mode), mirror_display, battery, trv_mode, valve_position, linkquality")],-1)),o[5]||(o[5]=(0,d.Lk)("tr",null,[(0,d.Lk)("td",null,"Picture"),(0,d.Lk)("td",null,[(0,d.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TRV-4-1-00.png",alt:"NodOn TRV-4-1-00"})])],-1))])]),o[12]||(o[12]=(0,d.Lk)("h2",{id:"ota-updates",tabindex:"-1"},[(0,d.Lk)("a",{class:"header-anchor",href:"#ota-updates"},[(0,d.Lk)("span",null,"OTA updates")])],-1)),(0,d.Lk)("p",null,[o[8]||(o[8]=(0,d.eW)("This device supports OTA updates, for more information see ")),(0,d.bF)(t,{to:"/guide/usage/ota_updates.html"},{default:(0,d.k6)((()=>o[7]||(o[7]=[(0,d.eW)("OTA updates")]))),_:1}),o[9]||(o[9]=(0,d.eW)("."))]),o[13]||(o[13]=(0,d.Lk)("h2",{id:"options",tabindex:"-1"},[(0,d.Lk)("a",{class:"header-anchor",href:"#options"},[(0,d.Lk)("span",null,"Options")])],-1)),(0,d.Lk)("p",null,[(0,d.Lk)("em",null,[(0,d.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,d.k6)((()=>o[10]||(o[10]=[(0,d.eW)("How to use device type specific configuration")]))),_:1})])]),o[14]||(o[14]=(0,d.Fv)('<ul><li><code>thermostat_unit</code>: Controls the temperature unit of the thermostat (default celsius). The value must be one of <code>celsius</code>, <code>fahrenheit</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="child-lock-lock" tabindex="-1"><a class="header-anchor" href="#child-lock-lock"><span>Child lock (lock)</span></a></h3><p>The current state of this lock is in the published state under the <code>child_lock</code> property (value is <code>LOCK</code> or <code>UNLOCK</code>). To control this lock publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;child_lock&quot;: &quot;LOCK&quot;}</code> or <code>{&quot;child_lock&quot;: &quot;UNLOCK&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate"><span>Climate</span></a></h3><p>This climate device supports the following features: <code>local_temperature</code>, <code>pi_heating_demand</code>, <code>local_temperature_calibration</code>, <code>occupied_heating_setpoint</code>, <code>unoccupied_heating_setpoint</code>, <code>system_mode</code>.</p><ul><li><code>pi_heating_demand</code>: Position of the valve (= demanded heat) where 0% is fully closed and 100% is fully open. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;pi_heating_demand&quot;: VALUE}</code> where <code>VALUE</code> is the % between <code>0</code> and <code>100</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;pi_heating_demand&quot;: &quot;&quot;}</code>.</li><li><code>occupied_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>7.5</code> and <code>28.5</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature&quot;: &quot;&quot;}</code>.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>auto</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;system_mode&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature_calibration</code>: Offset to add/subtract to the local temperature. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;local_temperature_calibration&quot;: VALUE}.</code>To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature&quot;: &quot;&quot;}</code>.The minimal value is <code>-12.8</code> and the maximum value is <code>12.7</code> with a step size of <code>0.1</code>.</li></ul><h3 id="mirror-display-binary" tabindex="-1"><a class="header-anchor" href="#mirror-display-binary"><span>Mirror display (binary)</span></a></h3><p>Mirror display of the thermostat. Useful when it is mounted in a way where the display is presented upside down.. Value can be found in the published state on the <code>mirror_display</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;mirror_display&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;mirror_display&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> mirror display is ON, if <code>OFF</code> OFF.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="trv-mode-enum" tabindex="-1"><a class="header-anchor" href="#trv-mode-enum"><span>Trv mode (enum)</span></a></h3><p>Select between direct control of the TRV via the <code>valve_position_mode</code> or automatic control of the TRV based on the <code>current_heating_setpoint</code>. When switched to manual mode the display shows a value from 0 (valve closed) to 100 (valve fully open) and the buttons on the device are disabled.. Value can be found in the published state on the <code>trv_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;trv_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;trv_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>auto</code>, <code>valve_position_mode</code>, <code>manual</code>.</p><h3 id="valve-position-numeric" tabindex="-1"><a class="header-anchor" href="#valve-position-numeric"><span>Valve position (numeric)</span></a></h3><p>Directly control the radiator valve when <code>trv_mode</code> is set to <code>valve_position_mode</code>.The values range from 0 (valve closed) to 100 (valve fully open) in %.. Value can be found in the published state on the <code>valve_position</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;valve_position&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;valve_position&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',17))])}]]),c=JSON.parse('{"path":"/devices/TRV-4-1-00.html","title":"NodOn TRV-4-1-00 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"NodOn TRV-4-1-00 control via MQTT","description":"Integrate your NodOn TRV-4-1-00 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-10-31T20:34:53.000Z"},"headers":[{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Child lock (lock)","slug":"child-lock-lock","link":"#child-lock-lock","children":[]},{"level":3,"title":"Climate","slug":"climate","link":"#climate","children":[]},{"level":3,"title":"Mirror display (binary)","slug":"mirror-display-binary","link":"#mirror-display-binary","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Trv mode (enum)","slug":"trv-mode-enum","link":"#trv-mode-enum","children":[]},{"level":3,"title":"Valve position (numeric)","slug":"valve-position-numeric","link":"#valve-position-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1734813344000},"filePathRelative":"devices/TRV-4-1-00.md"}')}}]);