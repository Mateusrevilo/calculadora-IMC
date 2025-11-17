let e,t,o,r,n,a,c;var h,d,p,u,g,f,m,b,v={602:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isWide=t.isFullWidth=t.isAmbiguous=void 0,t.isAmbiguous=e=>161===e||164===e||167===e||168===e||170===e||173===e||174===e||e>=176&&e<=180||e>=182&&e<=186||e>=188&&e<=191||198===e||208===e||215===e||216===e||e>=222&&e<=225||230===e||e>=232&&e<=234||236===e||237===e||240===e||242===e||243===e||e>=247&&e<=250||252===e||254===e||257===e||273===e||275===e||283===e||294===e||295===e||299===e||e>=305&&e<=307||312===e||e>=319&&e<=322||324===e||e>=328&&e<=331||333===e||338===e||339===e||358===e||359===e||363===e||462===e||464===e||466===e||468===e||470===e||472===e||474===e||476===e||593===e||609===e||708===e||711===e||e>=713&&e<=715||717===e||720===e||e>=728&&e<=731||733===e||735===e||e>=768&&e<=879||e>=913&&e<=929||e>=931&&e<=937||e>=945&&e<=961||e>=963&&e<=969||1025===e||e>=1040&&e<=1103||1105===e||8208===e||e>=8211&&e<=8214||8216===e||8217===e||8220===e||8221===e||e>=8224&&e<=8226||e>=8228&&e<=8231||8240===e||8242===e||8243===e||8245===e||8251===e||8254===e||8308===e||8319===e||e>=8321&&e<=8324||8364===e||8451===e||8453===e||8457===e||8467===e||8470===e||8481===e||8482===e||8486===e||8491===e||8531===e||8532===e||e>=8539&&e<=8542||e>=8544&&e<=8555||e>=8560&&e<=8569||8585===e||e>=8592&&e<=8601||8632===e||8633===e||8658===e||8660===e||8679===e||8704===e||8706===e||8707===e||8711===e||8712===e||8715===e||8719===e||8721===e||8725===e||8730===e||e>=8733&&e<=8736||8739===e||8741===e||e>=8743&&e<=8748||8750===e||e>=8756&&e<=8759||8764===e||8765===e||8776===e||8780===e||8786===e||8800===e||8801===e||e>=8804&&e<=8807||8810===e||8811===e||8814===e||8815===e||8834===e||8835===e||8838===e||8839===e||8853===e||8857===e||8869===e||8895===e||8978===e||e>=9312&&e<=9449||e>=9451&&e<=9547||e>=9552&&e<=9587||e>=9600&&e<=9615||e>=9618&&e<=9621||9632===e||9633===e||e>=9635&&e<=9641||9650===e||9651===e||9654===e||9655===e||9660===e||9661===e||9664===e||9665===e||e>=9670&&e<=9672||9675===e||e>=9678&&e<=9681||e>=9698&&e<=9701||9711===e||9733===e||9734===e||9737===e||9742===e||9743===e||9756===e||9758===e||9792===e||9794===e||9824===e||9825===e||e>=9827&&e<=9829||e>=9831&&e<=9834||9836===e||9837===e||9839===e||9886===e||9887===e||9919===e||e>=9926&&e<=9933||e>=9935&&e<=9939||e>=9941&&e<=9953||9955===e||9960===e||9961===e||e>=9963&&e<=9969||9972===e||e>=9974&&e<=9977||9979===e||9980===e||9982===e||9983===e||10045===e||e>=10102&&e<=10111||e>=11094&&e<=11097||e>=12872&&e<=12879||e>=57344&&e<=63743||e>=65024&&e<=65039||65533===e||e>=127232&&e<=127242||e>=127248&&e<=127277||e>=127280&&e<=127337||e>=127344&&e<=127373||127375===e||127376===e||e>=127387&&e<=127404||e>=917760&&e<=917999||e>=983040&&e<=1048573||e>=1048576&&e<=1114109,t.isFullWidth=e=>12288===e||e>=65281&&e<=65376||e>=65504&&e<=65510,t.isWide=e=>e>=4352&&e<=4447||8986===e||8987===e||9001===e||9002===e||e>=9193&&e<=9196||9200===e||9203===e||9725===e||9726===e||9748===e||9749===e||e>=9800&&e<=9811||9855===e||9875===e||9889===e||9898===e||9899===e||9917===e||9918===e||9924===e||9925===e||9934===e||9940===e||9962===e||9970===e||9971===e||9973===e||9978===e||9981===e||9989===e||9994===e||9995===e||10024===e||10060===e||10062===e||e>=10067&&e<=10069||10071===e||e>=10133&&e<=10135||10160===e||10175===e||11035===e||11036===e||11088===e||11093===e||e>=11904&&e<=11929||e>=11931&&e<=12019||e>=12032&&e<=12245||e>=12272&&e<=12287||e>=12289&&e<=12350||e>=12353&&e<=12438||e>=12441&&e<=12543||e>=12549&&e<=12591||e>=12593&&e<=12686||e>=12688&&e<=12771||e>=12783&&e<=12830||e>=12832&&e<=12871||e>=12880&&e<=19903||e>=19968&&e<=42124||e>=42128&&e<=42182||e>=43360&&e<=43388||e>=44032&&e<=55203||e>=63744&&e<=64255||e>=65040&&e<=65049||e>=65072&&e<=65106||e>=65108&&e<=65126||e>=65128&&e<=65131||e>=94176&&e<=94180||94192===e||94193===e||e>=94208&&e<=100343||e>=100352&&e<=101589||e>=101632&&e<=101640||e>=110576&&e<=110579||e>=110581&&e<=110587||110589===e||110590===e||e>=110592&&e<=110882||110898===e||e>=110928&&e<=110930||110933===e||e>=110948&&e<=110951||e>=110960&&e<=111355||126980===e||127183===e||127374===e||e>=127377&&e<=127386||e>=127488&&e<=127490||e>=127504&&e<=127547||e>=127552&&e<=127560||127568===e||127569===e||e>=127584&&e<=127589||e>=127744&&e<=127776||e>=127789&&e<=127797||e>=127799&&e<=127868||e>=127870&&e<=127891||e>=127904&&e<=127946||e>=127951&&e<=127955||e>=127968&&e<=127984||127988===e||e>=127992&&e<=128062||128064===e||e>=128066&&e<=128252||e>=128255&&e<=128317||e>=128331&&e<=128334||e>=128336&&e<=128359||128378===e||128405===e||128406===e||128420===e||e>=128507&&e<=128591||e>=128640&&e<=128709||128716===e||e>=128720&&e<=128722||e>=128725&&e<=128727||e>=128732&&e<=128735||128747===e||128748===e||e>=128756&&e<=128764||e>=128992&&e<=129003||129008===e||e>=129292&&e<=129338||e>=129340&&e<=129349||e>=129351&&e<=129535||e>=129648&&e<=129660||e>=129664&&e<=129672||e>=129680&&e<=129725||e>=129727&&e<=129733||e>=129742&&e<=129755||e>=129760&&e<=129768||e>=129776&&e<=129784||e>=131072&&e<=196605||e>=196608&&e<=262141},5090:(e,t,o)=>{o.d(t,{FlowLayout:()=>FlowLayout,flow:()=>n}),o.r(t);let SizeCache=class SizeCache{constructor(e){this._map=new Map,this._roundAverageSize=!1,this.totalSize=0,e?.roundAverageSize===!0&&(this._roundAverageSize=!0)}set(e,t){let o=this._map.get(e)||0;this._map.set(e,t),this.totalSize+=t-o}get averageSize(){if(this._map.size>0){let e=this.totalSize/this._map.size;return this._roundAverageSize?Math.round(e):e}return 0}getSize(e){return this._map.get(e)}clear(){this._map.clear(),this.totalSize=0}};function r(e){return"horizontal"===e?"width":"height"}let BaseLayout=class BaseLayout{_getDefaultConfig(){return{direction:"vertical"}}constructor(e,t){this._latestCoords={left:0,top:0},this._direction=null,this._viewportSize={width:0,height:0},this.totalScrollSize={width:0,height:0},this.offsetWithinScroller={left:0,top:0},this._pendingReflow=!1,this._pendingLayoutUpdate=!1,this._pin=null,this._firstVisible=0,this._lastVisible=0,this._physicalMin=0,this._physicalMax=0,this._first=-1,this._last=-1,this._sizeDim="height",this._secondarySizeDim="width",this._positionDim="top",this._secondaryPositionDim="left",this._scrollPosition=0,this._scrollError=0,this._items=[],this._scrollSize=1,this._overhang=1e3,this._hostSink=e,Promise.resolve().then(()=>this.config=t||this._getDefaultConfig())}set config(e){Object.assign(this,Object.assign({},this._getDefaultConfig(),e))}get config(){return{direction:this.direction}}get items(){return this._items}set items(e){this._setItems(e)}_setItems(e){e!==this._items&&(this._items=e,this._scheduleReflow())}get direction(){return this._direction}set direction(e){(e="horizontal"===e?e:"vertical")!==this._direction&&(this._direction=e,this._sizeDim="horizontal"===e?"width":"height",this._secondarySizeDim="horizontal"===e?"height":"width",this._positionDim="horizontal"===e?"left":"top",this._secondaryPositionDim="horizontal"===e?"top":"left",this._triggerReflow())}get viewportSize(){return this._viewportSize}set viewportSize(e){let{_viewDim1:t,_viewDim2:o}=this;Object.assign(this._viewportSize,e),o!==this._viewDim2?this._scheduleLayoutUpdate():t!==this._viewDim1&&this._checkThresholds()}get viewportScroll(){return this._latestCoords}set viewportScroll(e){Object.assign(this._latestCoords,e);let t=this._scrollPosition;this._scrollPosition=this._latestCoords[this._positionDim],Math.abs(t-this._scrollPosition)>=1&&this._checkThresholds()}reflowIfNeeded(e=!1){(e||this._pendingReflow)&&(this._pendingReflow=!1,this._reflow())}set pin(e){this._pin=e,this._triggerReflow()}get pin(){if(null!==this._pin){let{index:e,block:t}=this._pin;return{index:Math.max(0,Math.min(e,this.items.length-1)),block:t}}return null}_clampScrollPosition(e){return Math.max(-this.offsetWithinScroller[this._positionDim],Math.min(e,this.totalScrollSize[r(this.direction)]-this._viewDim1))}unpin(){null!==this._pin&&(this._sendUnpinnedMessage(),this._pin=null)}_updateLayout(){}get _viewDim1(){return this._viewportSize[this._sizeDim]}get _viewDim2(){return this._viewportSize[this._secondarySizeDim]}_scheduleReflow(){this._pendingReflow=!0}_scheduleLayoutUpdate(){this._pendingLayoutUpdate=!0,this._scheduleReflow()}_triggerReflow(){this._scheduleLayoutUpdate(),Promise.resolve().then(()=>this.reflowIfNeeded())}_reflow(){this._pendingLayoutUpdate&&(this._updateLayout(),this._pendingLayoutUpdate=!1),this._updateScrollSize(),this._setPositionFromPin(),this._getActiveItems(),this._updateVisibleIndices(),this._sendStateChangedMessage()}_setPositionFromPin(){if(null!==this.pin){let e=this._scrollPosition,{index:t,block:o}=this.pin;this._scrollPosition=this._calculateScrollIntoViewPosition({index:t,block:o||"start"})-this.offsetWithinScroller[this._positionDim],this._scrollError=e-this._scrollPosition}}_calculateScrollIntoViewPosition(e){let{block:t}=e,o=Math.min(this.items.length,Math.max(0,e.index)),r=this._getItemPosition(o)[this._positionDim],n=r;if("start"!==t){let e=this._getItemSize(o)[this._sizeDim];if("center"===t)n=r-.5*this._viewDim1+.5*e;else{let o=r-this._viewDim1+e;if("end"===t)n=o;else{let e=this._scrollPosition;n=Math.abs(e-r)<Math.abs(e-o)?r:o}}}return n+=this.offsetWithinScroller[this._positionDim],this._clampScrollPosition(n)}getScrollIntoViewCoordinates(e){return{[this._positionDim]:this._calculateScrollIntoViewPosition(e)}}_sendUnpinnedMessage(){this._hostSink({type:"unpinned"})}_sendVisibilityChangedMessage(){this._hostSink({type:"visibilityChanged",firstVisible:this._firstVisible,lastVisible:this._lastVisible})}_sendStateChangedMessage(){let e=new Map;if(-1!==this._first&&-1!==this._last)for(let t=this._first;t<=this._last;t++)e.set(t,this._getItemPosition(t));let t={type:"stateChanged",scrollSize:{[this._sizeDim]:this._scrollSize,[this._secondarySizeDim]:null},range:{first:this._first,last:this._last,firstVisible:this._firstVisible,lastVisible:this._lastVisible},childPositions:e};this._scrollError&&(t.scrollError={[this._positionDim]:this._scrollError,[this._secondaryPositionDim]:0},this._scrollError=0),this._hostSink(t)}get _num(){return -1===this._first||-1===this._last?0:this._last-this._first+1}_checkThresholds(){if(0===this._viewDim1&&this._num>0||null!==this._pin)this._scheduleReflow();else{let e=Math.max(0,this._scrollPosition-this._overhang),t=Math.min(this._scrollSize,this._scrollPosition+this._viewDim1+this._overhang);this._physicalMin>e||this._physicalMax<t?this._scheduleReflow():this._updateVisibleIndices({emit:!0})}}_updateVisibleIndices(e){if(-1===this._first||-1===this._last)return;let t=this._first;for(;t<this._last&&Math.round(this._getItemPosition(t)[this._positionDim]+this._getItemSize(t)[this._sizeDim])<=Math.round(this._scrollPosition);)t++;let o=this._last;for(;o>this._first&&Math.round(this._getItemPosition(o)[this._positionDim])>=Math.round(this._scrollPosition+this._viewDim1);)o--;(t!==this._firstVisible||o!==this._lastVisible)&&(this._firstVisible=t,this._lastVisible=o,e&&e.emit&&this._sendVisibilityChangedMessage())}};let n=e=>Object.assign({type:FlowLayout},e);function a(e){return"horizontal"===e?"marginLeft":"marginTop"}let MetricsCache=class MetricsCache{constructor(){this._childSizeCache=new SizeCache,this._marginSizeCache=new SizeCache,this._metricsCache=new Map}update(e,t){let o=new Set;for(let n of(Object.keys(e).forEach(n=>{let a=Number(n);this._metricsCache.set(a,e[a]),this._childSizeCache.set(a,e[a][r(t)]),o.add(a),o.add(a+1)}),o)){let e=this._metricsCache.get(n)?.[a(t)]||0,o=this._metricsCache.get(n-1)?.["horizontal"===t?"marginRight":"marginBottom"]||0;this._marginSizeCache.set(n,function(e,t){let o=[e,t].sort();return o[1]<=0?Math.min(...o):o[0]>=0?Math.max(...o):o[0]+o[1]}(e,o))}}get averageChildSize(){return this._childSizeCache.averageSize}get totalChildSize(){return this._childSizeCache.totalSize}get averageMarginSize(){return this._marginSizeCache.averageSize}get totalMarginSize(){return this._marginSizeCache.totalSize}getLeadingMarginValue(e,t){return this._metricsCache.get(e)?.[a(t)]||0}getChildSize(e){return this._childSizeCache.getSize(e)}getMarginSize(e){return this._marginSizeCache.getSize(e)}clear(){this._childSizeCache.clear(),this._marginSizeCache.clear(),this._metricsCache.clear()}};let FlowLayout=class FlowLayout extends BaseLayout{constructor(){super(...arguments),this._itemSize={width:100,height:100},this._physicalItems=new Map,this._newPhysicalItems=new Map,this._metricsCache=new MetricsCache,this._anchorIdx=null,this._anchorPos=null,this._stable=!0,this._measureChildren=!0,this._estimate=!0}get measureChildren(){return this._measureChildren}updateItemSizes(e){this._metricsCache.update(e,this.direction),this._scheduleReflow()}_getPhysicalItem(e){return this._newPhysicalItems.get(e)??this._physicalItems.get(e)}_getSize(e){return this._getPhysicalItem(e)&&this._metricsCache.getChildSize(e)}_getAverageSize(){return this._metricsCache.averageChildSize||this._itemSize[this._sizeDim]}_estimatePosition(e){let t=this._metricsCache;if(-1===this._first||-1===this._last)return t.averageMarginSize+e*(t.averageMarginSize+this._getAverageSize());if(e<this._first){let o=this._first-e;return this._getPhysicalItem(this._first).pos-(t.getMarginSize(this._first-1)||t.averageMarginSize)-(o*t.averageChildSize+(o-1)*t.averageMarginSize)}{let o=e-this._last;return this._getPhysicalItem(this._last).pos+(t.getChildSize(this._last)||t.averageChildSize)+(t.getMarginSize(this._last)||t.averageMarginSize)+o*(t.averageChildSize+t.averageMarginSize)}}_getPosition(e){let t=this._getPhysicalItem(e),{averageMarginSize:o}=this._metricsCache;return 0===e?this._metricsCache.getMarginSize(0)??o:t?t.pos:this._estimatePosition(e)}_calculateAnchor(e,t){return e<=0?0:t>this._scrollSize-this._viewDim1?this.items.length-1:Math.max(0,Math.min(this.items.length-1,Math.floor((e+t)/2/this._delta)))}_getAnchor(e,t){if(0===this._physicalItems.size||this._first<0||this._last<0)return this._calculateAnchor(e,t);let o=this._getPhysicalItem(this._first),r=this._getPhysicalItem(this._last),n=o.pos;if(r.pos+this._metricsCache.getChildSize(this._last)<e||n>t)return this._calculateAnchor(e,t);let a=this._firstVisible-1,c=-1/0;for(;c<e;)c=this._getPhysicalItem(++a).pos+this._metricsCache.getChildSize(a);return a}_getActiveItems(){0===this._viewDim1||0===this.items.length?this._clearItems():this._getItems()}_clearItems(){this._first=-1,this._last=-1,this._physicalMin=0,this._physicalMax=0;let e=this._newPhysicalItems;this._newPhysicalItems=this._physicalItems,this._newPhysicalItems.clear(),this._physicalItems=e,this._stable=!0}_getItems(){let e,t,o=this._newPhysicalItems;if(this._stable=!0,null!==this.pin){let{index:e}=this.pin;this._anchorIdx=e,this._anchorPos=this._getPosition(e)}if(e=this._scrollPosition-this._overhang,(t=this._scrollPosition+this._viewDim1+this._overhang)<0||e>this._scrollSize)return void this._clearItems();(null===this._anchorIdx||null===this._anchorPos)&&(this._anchorIdx=this._getAnchor(e,t),this._anchorPos=this._getPosition(this._anchorIdx));let r=this._getSize(this._anchorIdx);void 0===r&&(this._stable=!1,r=this._getAverageSize());let n=this._metricsCache.getMarginSize(this._anchorIdx)??this._metricsCache.averageMarginSize,a=this._metricsCache.getMarginSize(this._anchorIdx+1)??this._metricsCache.averageMarginSize;0===this._anchorIdx&&(this._anchorPos=n),this._anchorIdx===this.items.length-1&&(this._anchorPos=this._scrollSize-a-r);let c=0;for(this._anchorPos+r+a<e&&(c=e-(this._anchorPos+r+a)),this._anchorPos-n>t&&(c=t-(this._anchorPos-n)),c&&(this._scrollPosition-=c,e-=c,t-=c,this._scrollError+=c),o.set(this._anchorIdx,{pos:this._anchorPos,size:r}),this._first=this._last=this._anchorIdx,this._physicalMin=this._anchorPos-n,this._physicalMax=this._anchorPos+r+a;this._physicalMin>e&&this._first>0;){let e=this._getSize(--this._first);void 0===e&&(this._stable=!1,e=this._getAverageSize());let t=this._metricsCache.getMarginSize(this._first);void 0===t&&(this._stable=!1,t=this._metricsCache.averageMarginSize),this._physicalMin-=e;let r=this._physicalMin;if(o.set(this._first,{pos:r,size:e}),this._physicalMin-=t,!1===this._stable&&!1===this._estimate)break}for(;this._physicalMax<t&&this._last<this.items.length-1;){let e=this._getSize(++this._last);void 0===e&&(this._stable=!1,e=this._getAverageSize());let t=this._metricsCache.getMarginSize(this._last);void 0===t&&(this._stable=!1,t=this._metricsCache.averageMarginSize);let r=this._physicalMax;if(o.set(this._last,{pos:r,size:e}),this._physicalMax+=e+t,!this._stable&&!this._estimate)break}let h=this._calculateError();h&&(this._physicalMin-=h,this._physicalMax-=h,this._anchorPos-=h,this._scrollPosition-=h,o.forEach(e=>e.pos-=h),this._scrollError+=h),this._stable&&(this._newPhysicalItems=this._physicalItems,this._newPhysicalItems.clear(),this._physicalItems=o)}_calculateError(){return 0===this._first?this._physicalMin:this._physicalMin<=0?this._physicalMin-this._first*this._delta:this._last===this.items.length-1?this._physicalMax-this._scrollSize:this._physicalMax>=this._scrollSize?this._physicalMax-this._scrollSize+(this.items.length-1-this._last)*this._delta:0}_reflow(){let{_first:e,_last:t}=this;super._reflow(),(-1===this._first&&-1==this._last||this._first===e&&this._last===t)&&this._resetReflowState()}_resetReflowState(){this._anchorIdx=null,this._anchorPos=null,this._stable=!0}_updateScrollSize(){let{averageMarginSize:e}=this._metricsCache;this._scrollSize=Math.max(1,this.items.length*(e+this._getAverageSize())+e)}get _delta(){let{averageMarginSize:e}=this._metricsCache;return this._getAverageSize()+e}_getItemPosition(e){return{[this._positionDim]:this._getPosition(e),[this._secondaryPositionDim]:0,["horizontal"===this.direction?"xOffset":"yOffset"]:-(this._metricsCache.getLeadingMarginValue(e,this.direction)??this._metricsCache.averageMarginSize)}}_getItemSize(e){return{[this._sizeDim]:this._getSize(e)||this._getAverageSize(),[this._secondarySizeDim]:this._itemSize[this._secondarySizeDim]}}_viewDim2Changed(){this._metricsCache.clear(),this._scheduleReflow()}}},6047:(e,t,o)=>{o(602)}},y={};function w(e){var t=y[e];if(void 0!==t)return t.exports;var o=y[e]={exports:{}};return v[e](o,o.exports,w),o.exports}w.d=(e,t)=>{for(var o in t)w.o(t,o)&&!w.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},w.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),w.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},Object.defineProperty(w,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch{return"#{root}/dist/webviews/"}},set:function(e){}});let context_request_event_s=class context_request_event_s extends Event{constructor(e,t,o,r){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t,this.callback=o,this.subscribe=r??!1}};let value_notifier_s=class value_notifier_s{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){let o=t||!Object.is(e,this.o);this.o=e,o&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(let[e,{disposer:t}]of this.subscriptions)e(this.o,t)},void 0!==e&&(this.value=e)}addCallback(e,t,o){if(!o)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});let{disposer:r}=this.subscriptions.get(e);e(this.value,r)}clearCallbacks(){this.subscriptions.clear()}};let context_provider_e=class context_provider_e extends Event{constructor(e,t){super("context-provider",{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t}};let i=class i extends value_notifier_s{constructor(e,t,o){super(void 0!==t.context?t.initialValue:o),this.onContextRequest=e=>{if(e.context!==this.context)return;let t=e.contextTarget??e.composedPath()[0];t!==this.host&&(e.stopPropagation(),this.addCallback(e.callback,t,e.subscribe))},this.onProviderRequest=e=>{if(e.context!==this.context||(e.contextTarget??e.composedPath()[0])===this.host)return;let t=new Set;for(let[e,{consumerHost:o}]of this.subscriptions)t.has(e)||(t.add(e),o.dispatchEvent(new context_request_event_s(this.context,o,e,!0)));e.stopPropagation()},this.host=e,void 0!==t.context?this.context=t.context:this.context=t,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new context_provider_e(this.context,this.host))}};function _(e,t,o){let r,n,a,c,h,d,p,u,g,f,m=0;null!=o&&({edges:d,maxWait:p,signal:u,aggregator:g}=o);let b="leading"===(d??="trailing")||"both"===d,v="trailing"===d||"both"===d;function y(){if(null!=r){m=Date.now();let t=r,o=f;return f=void 0,r=void 0,a=e.apply(o,t)}}function w(){null!=c&&(clearTimeout(c),c=void 0)}function _(){null!=h&&(clearTimeout(h),h=void 0)}function k(){w(),_(),f=void 0,r=void 0,n=void 0,m=0}function x(...e){if(u?.aborted)return;let o=Date.now();null!=g&&null!=r?r=g(r,e):(f=this,r=e);let d=null==c&&null==h;n=o,w();let _=Date.now();if(n=_,c=setTimeout(()=>{c=void 0,function(e){let o=e-(n??0),r=e-m;return null==n||o>=t||o<0||null!=p&&r>=p}(Date.now())&&v&&y(),k()},t),null!=p&&!h){let e=p-(_-m);e>0?h=setTimeout(()=>{h=void 0,v&&null!=r&&y(),m=Date.now()},e):(v&&null!=r&&y(),k())}return b&&d?y():a}return x.cancel=k,x.flush=function(){return w(),_(),y()},x.pending=function(){return null!=c||null!=h},u?.addEventListener("abort",k,{once:!0}),x}let IpcCall=class IpcCall{constructor(e,t,o=!1,r=!1){this.scope=e,this.reset=o,this.pack=r,this.method=`${e}/${t}`}is(e){return e.method===this.method}};let IpcCommand=class IpcCommand extends IpcCall{};let IpcRequest=class IpcRequest extends IpcCall{constructor(e,t,o,r){super(e,t,o,r),this.response=new IpcNotification(this.scope,`${t}/completion`,this.reset,this.pack)}};let IpcNotification=class IpcNotification extends IpcCall{};let k=new IpcCommand("core","webview/ready"),x=new IpcCommand("core","webview/focus/changed"),C=new IpcCommand("core","command/execute"),S=new IpcRequest("core","promos/applicable");new IpcCommand("core","configuration/update");let A=new IpcCommand("core","telemetry/sendEvent"),E=new IpcNotification("core","ipc/promise/settled");new IpcNotification("core","window/focus/didChange");let P=new IpcCommand("core","webview/focus/didChange"),I=new IpcNotification("core","webview/visibility/didChange");function R(e){let t=.001*performance.now(),o=Math.floor(t),r=Math.floor(t%1*1e9);return void 0!==e&&(o-=e[0],(r-=e[1])<0&&(o--,r+=1e9)),[o,r]}new IpcNotification("core","configuration/didChange"),w(6047);var T=((h=T||{})[h.Hash=35]="Hash",h[h.Slash=47]="Slash",h[h.Digit0=48]="Digit0",h[h.Digit1=49]="Digit1",h[h.Digit2=50]="Digit2",h[h.Digit3=51]="Digit3",h[h.Digit4=52]="Digit4",h[h.Digit5=53]="Digit5",h[h.Digit6=54]="Digit6",h[h.Digit7=55]="Digit7",h[h.Digit8=56]="Digit8",h[h.Digit9=57]="Digit9",h[h.Backslash=92]="Backslash",h[h.A=65]="A",h[h.B=66]="B",h[h.C=67]="C",h[h.D=68]="D",h[h.E=69]="E",h[h.F=70]="F",h[h.Z=90]="Z",h[h.a=97]="a",h[h.b=98]="b",h[h.c=99]="c",h[h.d=100]="d",h[h.e=101]="e",h[h.f=102]="f",h[h.z=122]="z",h),M=((d=M||{}).AngleBracketLeftHeavy="❰",d.AngleBracketRightHeavy="❱",d.ArrowBack="↩",d.ArrowDown="↓",d.ArrowDownUp="⇵",d.ArrowDropRight="⤷",d.ArrowHeadRight="➤",d.ArrowLeft="←",d.ArrowLeftDouble="⇐",d.ArrowLeftRight="↔",d.ArrowLeftRightDouble="⇔",d.ArrowLeftRightDoubleStrike="⇎",d.ArrowLeftRightLong="⟷",d.ArrowRight="→",d.ArrowRightDouble="⇒",d.ArrowRightHollow="⇨",d.ArrowUp="↑",d.ArrowUpDown="⇅",d.ArrowUpRight="↗",d.ArrowsHalfLeftRight="⇋",d.ArrowsHalfRightLeft="⇌",d.ArrowsLeftRight="⇆",d.ArrowsRightLeft="⇄",d.Asterisk="∗",d.Bullseye="◎",d.Check="✔",d.Dash="—",d.Dot="•",d.Ellipsis="…",d.EnDash="–",d.Envelope="✉",d.EqualsTriple="≡",d.Flag="⚑",d.FlagHollow="⚐",d.MiddleEllipsis="⋯",d.MuchLessThan="≪",d.MuchGreaterThan="≫",d.Pencil="✎",d.Space=" ",d.SpaceThin=" ",d.SpaceThinnest=" ",d.SquareWithBottomShadow="❏",d.SquareWithTopShadow="❐",d.Warning="⚠",d.ZeroWidthSpace="​",d);Object.freeze({".png":"image/png",".gif":"image/gif",".jpg":"image/jpeg",".jpeg":"image/jpeg",".jpe":"image/jpeg",".webp":"image/webp",".tif":"image/tiff",".tiff":"image/tiff",".bmp":"image/bmp"}),Object.freeze(["left","alt+left","ctrl+left","right","alt+right","ctrl+right","alt+,","alt+.","alt+enter","ctrl+enter","escape"]);var O=((p=O||{}).File="file",p.Git="git",p.GitHub="github",p.GitLens="gitlens",p.GitLensAIMarkdown="gitlens-ai-markdown",p.PRs="pr",p.Remote="vscode-remote",p.Vsls="vsls",p.VslsScc="vsls-scc",p.Virtual="vscode-vfs",p);Object.freeze(new Set(["file","git","gitlens","pr","vscode-remote","vsls","vsls-scc","vscode-vfs","github"]));let L="source=gitlens&product=gitlens&utm_source=gitlens-extension&utm_medium=in-app-links",D=Object.freeze({codeSuggest:`https://gitkraken.com/solutions/code-suggest?${L}`,cloudPatches:`https://gitkraken.com/solutions/cloud-patches?${L}`,graph:`https://gitkraken.com/solutions/commit-graph?${L}`,launchpad:`https://gitkraken.com/solutions/launchpad?${L}`,platform:`https://gitkraken.com/devex?${L}`,pricing:`https://gitkraken.com/gitlens/pricing?${L}`,proFeatures:`https://gitkraken.com/gitlens/pro-features?${L}`,security:`https://help.gitkraken.com/gitlens/security?${L}`,workspaces:`https://gitkraken.com/solutions/workspaces?${L}`,cli:`https://gitkraken.com/cli?${L}`,browserExtension:`https://gitkraken.com/browser-extension?${L}`,desktop:`https://gitkraken.com/git-client?${L}`,githubIssues:`https://github.com/gitkraken/vscode-gitlens/issues/?${L}`,githubDiscussions:`https://github.com/gitkraken/vscode-gitlens/discussions/?${L}`,helpCenter:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${L}`,helpCenterHome:`https://help.gitkraken.com/gitlens/home-view/?${L}`,helpCenterMCP:`https://help.gitkraken.com/mcp/mcp-getting-started/?${L}`,releaseNotes:`https://help.gitkraken.com/gitlens/gitlens-release-notes-current/?${L}`,acceleratePrReviews:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${L}#accelerate-pr-reviews`,communityVsPro:`https://help.gitkraken.com/gitlens/gitlens-community-vs-gitlens-pro/?${L}`,homeView:`https://help.gitkraken.com/gitlens/home-view/?${L}&utm_campaign=walkthrough`,interactiveCodeHistory:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${L}#interactive-code-history`,startIntegrations:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${L}#improve-workflows-with-integrations`,streamlineCollaboration:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${L}#streamline-collaboration`,aiFeatures:`https://help.gitkraken.com/gitlens/gl-gk-ai/?${L}`,getStarted:`https://help.gitkraken.com/gitlens/gitlens-home/?${L}`,welcomeInTrial:`https://help.gitkraken.com/gitlens/gitlens-home/?${L}`,welcomePaid:`https://help.gitkraken.com/gitlens/gitlens-home/?${L}`,welcomeTrialExpired:`https://help.gitkraken.com/gitlens/gitlens-community-vs-gitlens-pro/?${L}`,welcomeTrialReactivationEligible:`https://help.gitkraken.com/gitlens/gitlens-community-vs-gitlens-pro/?${L}`}),N=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,B=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,F=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]],j=new Map,U=new Map,H=["th","st","nd","rd"];function q(t,o){null==t&&(t="decimal");let r=`${o??""}:${t}`,n=U.get(r);if(null==n){let a={localeMatcher:"best fit",style:t};n=new Intl.NumberFormat(null==o?e:"system"===o?void 0:[o],a),U.set(r,n)}return n.format}function V(e){let[t,o]=R(e);return 1e3*t+Math.floor(o/1e6)}function W(e,t,o){let n;if(null==o)return r??=q(),`${r(t)} ${e}${1===t?"":"s"}`;let a=1===t?e:o.plural??`${e}s`;return o.only?a:(0===t?n=o.zero??t:!1===o.format?n=t:null!=o.format?n=o.format(t):(r??=q(),n=r(t)),`${n}${o.infix??" "}${a}`)}new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,62,0,0,0,63,52,53,54,55,56,57,58,59,60,61,0,0,0,64,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,0,0,0,0,0,0,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51]);var G=((u=G||{})[u.Off=0]="Off",u[u.Error=1]="Error",u[u.Warn=2]="Warn",u[u.Info=3]="Info",u[u.Debug=4]="Debug",u);let K=["accessToken","password","token"],Z=new class Logger2{constructor(){this._isDebugging=!1,this.level=0,this._logLevel="off"}configure(e,t,o=!1){if(null!=e.sanitizeKeys)for(let t of K)e.sanitizeKeys.add(t);else e.sanitizeKeys=new Set(K);this.provider=e,this._isDebugging=o,this.logLevel=t}enabled(e){return this.level>=Y(e)}get isDebugging(){return this._isDebugging}get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e,this.level=Y(this._logLevel),"off"===e?(this.output?.dispose?.(),this.output=void 0):this.output??=this.provider.createChannel(this.provider.name)}get timestamp(){return`[${new Date().toISOString().replace(/T/," ").slice(0,-1)}]`}debug(e,...t){let o;(!(this.level<4)||this.isDebugging)&&("string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<4||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!0,t)}`))}error(e,t,...o){let r;if(!(this.level<1)||this.isDebugging){if(null==(r=null==t||"string"==typeof t?t:`${t.prefix} ${o.shift()??""}`)){let t=e instanceof Error?e.stack:void 0;if(t){let e=/.*\s*?at\s(.+?)\s/.exec(t);null!=e&&(r=e[1])}}this.isDebugging,null==this.output||this.level<1||this.output.appendLine(`${this.timestamp} ${r??""}${this.toLoggableParams(!1,o)}${null!=e?`
${String(e)}`:""}`)}}log(e,...t){let o;(!(this.level<3)||this.isDebugging)&&("string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<3||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,t)}`))}warn(e,...t){let o;(!(this.level<2)||this.isDebugging)&&("string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<2||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,t)}`))}showOutputChannel(e){this.output?.show?.(e)}toLoggable(e,t){if("object"!=typeof e)return String(e);if(Array.isArray(e))return`[${e.map(e=>this.toLoggable(e,t)).join(", ")}]`;let o=this.provider.toLoggable?.(e);if(null!=o)return o;try{return JSON.stringify(e,(e,o)=>this.provider.sanitizeKeys.has(e)?`<${e}>`:(null!=t&&(o=t(e,o)),this.provider?.sanitizer!=null&&(o=this.provider.sanitizer(e,o)),o))}catch{return"<error>"}}toLoggableParams(e,t){if(0===t.length||e&&this.level<4&&!this.isDebugging)return"";let o=t.map(e=>this.toLoggable(e)).join(", ");return 0!==o.length?` \u2014 ${o}`:""}};function Y(e){switch(e){case"off":default:return 0;case"error":return 1;case"warn":return 2;case"info":return 3;case"debug":return 4}}let X=new WeakMap,J={enabled:e=>Z.enabled(e)||Z.isDebugging,log:(e,t,o,...r)=>{switch(e){case"error":Z.error(void 0,t,o,...r);break;case"warn":Z.warn(t,o,...r);break;case"info":Z.log(t,o,...r);break;default:Z.debug(t,o,...r)}}},ee=0x40000000-1;function ei(){let e=0;return{get current(){return e},next:function(){return e===ee&&(e=0),++e},reset:function(){e=0}}}let eo=ei(),es=new Map;function er(e,t){return null==t?`[${e.toString(16).padStart(13)}]`:`[${t.toString(16).padStart(5)} \u2192 ${e.toString(16).padStart(5)}]`}function en(e,t){if(null!=t&&"boolean"!=typeof t)return{scopeId:t.scopeId,prevScopeId:t.prevScopeId,prefix:`${t.prefix}${e}`};let o=t?eo.current:void 0,r=eo.next();return{scopeId:r,prevScopeId:o,prefix:`${er(r,o)} ${e}`}}let LoggerContext=class LoggerContext{constructor(e){this.scope=en(e,void 0),Z.configure({name:e,createChannel:function(e){return{name:e,appendLine:Z.isDebugging?function(){}:function(e){}}}},"off",!1)}log(e,...t){"string"==typeof e?Z.log(this.scope,e,...t):Z.log(e,t.shift(),...t)}};let ea="home";new IpcRequest(ea,"launchpad/summary"),new IpcRequest(ea,"overview/active"),new IpcRequest(ea,"overview/inactive"),new IpcRequest(ea,"overviewFilter"),new IpcCommand(ea,"overview/repository/change"),new IpcNotification(ea,"overview/repository/didChange"),new IpcCommand(ea,"previewEnabled/toggle"),new IpcCommand(ea,"section/collapse"),new IpcCommand(ea,"walkthrough/dismiss"),new IpcNotification(ea,"ai/allAccess/didChange"),new IpcNotification(ea,"mcp/didChange"),new IpcCommand(ea,"ai/allAccess/dismiss"),new IpcCommand(ea,"overview/filter/set"),new IpcCommand(ea,"openInGraph"),new IpcNotification(ea,"repositories/didCompleteDiscovering"),new IpcNotification(ea,"previewEnabled/didChange"),new IpcNotification(ea,"repository/wip/didChange"),new IpcNotification(ea,"repositories/didChange"),new IpcNotification(ea,"walkthroughProgress/didChange"),new IpcNotification(ea,"integrations/didChange"),new IpcNotification(ea,"launchpad/didChange");let el=new IpcNotification(ea,"subscription/didChange");new IpcNotification(ea,"org/settings/didChange"),new IpcNotification(ea,"home/ownerFilter/didChange"),new IpcNotification(ea,"account/didFocus");let ec="graph";new IpcCommand(ec,"chooseRepository"),new IpcCommand(ec,"dblclick"),new IpcCommand(ec,"dblclick"),new IpcCommand(ec,"avatars/get"),new IpcCommand(ec,"refs/metadata/get"),new IpcCommand(ec,"rows/get"),new IpcCommand(ec,"pullRequest/openDetails"),new IpcCommand(ec,"search/openInView"),new IpcCommand(ec,"columns/update"),new IpcCommand(ec,"refs/update/visibility"),new IpcCommand(ec,"filters/update/excludeTypes"),new IpcCommand(ec,"configuration/update"),new IpcCommand(ec,"search/update/mode"),new IpcCommand(ec,"filters/update/includedRefs"),new IpcCommand(ec,"selection/update"),new IpcRequest(ec,"chooseRef"),new IpcRequest(ec,"rows/ensure"),new IpcRequest(ec,"counts"),new IpcRequest(ec,"row/hover/get"),new IpcRequest(ec,"search"),new IpcNotification(ec,"repositories/integration/didChange"),new IpcNotification(ec,"didChange",!0,!0),new IpcNotification(ec,"configuration/didChange");let eh=new IpcNotification(ec,"subscription/didChange");new IpcNotification(ec,"org/settings/didChange"),new IpcNotification(ec,"avatars/didChange"),new IpcNotification(ec,"mcp/didChange"),new IpcNotification(ec,"branchState/didChange"),new IpcNotification(ec,"refs/didChangeMetadata"),new IpcNotification(ec,"columns/didChange"),new IpcNotification(ec,"scrollMarkers/didChange"),new IpcNotification(ec,"refs/didChangeVisibility"),new IpcNotification(ec,"rows/didChange",void 0,!0),new IpcNotification(ec,"rows/stats/didChange"),new IpcNotification(ec,"selection/didChange"),new IpcNotification(ec,"workingTree/didChange"),new IpcNotification(ec,"didSearch"),new IpcNotification(ec,"didFetch"),new IpcNotification(ec,"featurePreview/didStart");let ed="timeline";new IpcRequest(ed,"ref/choose"),new IpcRequest(ed,"path/choose"),new IpcCommand(ed,"point/open"),new IpcCommand(ed,"config/update"),new IpcCommand(ed,"scope/update");let ep=new IpcNotification(ed,"didChange");let PromosContext=class PromosContext{constructor(e){this.disposables=[],this._promos=new Map,this.ipc=e,this.disposables.push(this.ipc.onReceiveMessage(e=>{(el.is(e)||eh.is(e)||ep.is(e))&&this._promos.clear()}))}async getApplicablePromo(e,t){let o=`${e}|${t}`,r=this._promos.get(o);return null==r&&(r=this.ipc.sendRequest(S,{plan:e,location:t}).then(e=>e.promo,()=>void 0),this._promos.set(o,r)),await r}dispose(){this.disposables.forEach(e=>e.dispose())}};let TelemetryContext=class TelemetryContext{constructor(e){this.disposables=[],this.ipc=e}sendEvent(e){this.ipc.sendCommand(A,e)}dispose(){this.disposables.forEach(e=>e.dispose())}};function eu(e){return(e=e.toString().toLowerCase()).includes("ms")?parseFloat(e):e.includes("s")?1e3*parseFloat(e):parseFloat(e)}function eg(e,t){return new Promise(o=>{e.addEventListener(t,function r(n){n.target===e&&(e.removeEventListener(t,r),o())})})}(m||(m={})).on=function(e,t,o,r){let n=!1;if("string"==typeof e){let a=function(t){let r=t?.target?.closest(e);null!=r&&o(t,r)};return document.addEventListener(t,a,r??!0),{dispose:()=>{n||(n=!0,document.removeEventListener(t,a,r??!0))}}}let a=function(e){o(e,this)};return e.addEventListener(t,a,r??!1),{dispose:()=>{n||(n=!0,e.removeEventListener(t,a,r??!1))}}};let ef=/\(([\s\S]*)\)/,em=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,eb=/\s?=.*$/;function ev(e,t=!1){let o,r,n,a,c,h=0,d=!1,p=!1,u=!0;null!=e&&({args:o,if:r,enter:n,exit:a,prefix:c,logThreshold:h=0,scoped:d=!0,singleLine:p=!1,timed:u=!0}=e),h>0&&(p=!0,u=!0),u&&(d=!0);let g=Z.isDebugging,f=t?Z.debug:Z.log,m=g?"debug":"info";return(e,t,b)=>{let v,y;if("function"==typeof b.value?(v=b.value,y="value"):"function"==typeof b.get&&(v=b.get,y="get"),null==v||null==y)throw Error("Not supported");let w=!1!==o?function(e){if("function"!=typeof e)throw Error("Not supported");if(0===e.length)return[];let t=Function.prototype.toString.call(e),o=(t=(t=t.replace(em,"")||t).slice(0,t.indexOf("{"))).indexOf("("),r=t.indexOf(")");o=o>=0?o+1:0,r=r>0?r:t.indexOf("="),t=t.slice(o,r),t=`(${t})`;let n=ef.exec(t);return null!=n?n[1].split(",").map(e=>e.trim().replace(eb,"")):[]}(v):[];b[y]=function(...e){var b,y;let _,k;if(!g&&!Z.enabled(m)||null!=r&&!r.apply(this,e))return v.apply(this,e);let x=eo.current,C=eo.next(),S=this!=null?function(e){let t;if("function"==typeof e){if(null==(t=e.prototype?.constructor))return e.name}else t=e.constructor;let o=t?.name??"",r=o.indexOf("_");-1!==r&&(o=o.substring(r+1));let n=X.get(t);return n?.(e,o)??o}(this):void 0,A=S?d?`${er(C,x)} ${S}.${t}`:`${S}.${t}`:t;null!=c&&(A=c({id:C,instance:this,instanceName:S??"",name:t,prefix:A},...e)),d&&(b={scopeId:C,prevScopeId:x,prefix:A},b={prevScopeId:eo.current,...b},es.set(C,b),_=b);let E=null!=n?n(...e):"";if(!1===o||0===e.length)k="",p||f.call(Z,`${A}${E}`);else{let t,r,n,a;k="";let c=-1;for(a of e){if(r=w[++c],null!=(t=o?.[c])){if("boolean"==typeof t)continue;if(k.length>0&&(k+=", "),"string"==typeof t){k+=t;continue}n=String(t(a))}else k.length>0&&(k+=", "),n=Z.toLoggable(a);k+=r?`${r}=${n}`:n}p||f.call(Z,k?`${A}${E}(${k})`:`${A}${E}`)}if(p||u||null!=a){let t,o=u?R():void 0,r=e=>{let t=void 0!==o?` [${V(o)}ms]`:"";p?Z.error(e,k?`${A}${E}(${k})`:`${A}${E}`,_?.exitDetails?`failed${_.exitDetails}${t}`:`failed${t}`):Z.error(e,A,_?.exitDetails?`failed${_.exitDetails}${t}`:`failed${t}`),d&&es.delete(C)};try{t=v.apply(this,e)}catch(e){throw r(e),e}let n=e=>{let t,r,n,c;if(null!=o?(t=V(o))>500?(r=Z.warn,n=` [*${t}ms] (slow)`):(r=f,n=` [${t}ms]`):(n="",r=f),null!=a)if("function"==typeof a)try{c=a(e)}catch(e){c=`@log.exit error: ${e}`}else!0===a&&(c=`returned ${Z.toLoggable(e)}`);else _?.exitFailed?(c=_.exitFailed,r=(e,...t)=>Z.error(null,e,...t)):c="completed";p?(0===h||t>h)&&r.call(Z,k?`${A}${E}(${k}) ${c}${_?.exitDetails||""}${n}`:`${A}${E} ${c}${_?.exitDetails||""}${n}`):r.call(Z,k?`${A}(${k}) ${c}${_?.exitDetails||""}${n}`:`${A} ${c}${_?.exitDetails||""}${n}`),d&&es.delete(C)};return null!=t&&null!=(y=t)&&(y instanceof Promise||"function"==typeof y?.then)?t.then(n,r):n(t),t}return v.apply(this,e)}}}Symbol.dispose??=Symbol("Symbol.dispose"),Symbol.asyncDispose??=Symbol("Symbol.asyncDispose");let Stopwatch=class Stopwatch{constructor(e,t,...o){let r;if(this._stopped=!1,this.logScope=null!=e&&"string"!=typeof e?e:en(e??"",!1),r="boolean"==typeof t?.log?t.log?{}:void 0:t?.log??{},this.logLevel=t?.logLevel??"info",this.logProvider=t?.provider??J,this._time=R(),null!=r){if(!this.logProvider.enabled(this.logLevel))return;o.length?this.logProvider.log(this.logLevel,this.logScope,`${r.message??""}${r.suffix??""}`,...o):this.logProvider.log(this.logLevel,this.logScope,`${r.message??""}${r.suffix??""}`)}}get startTime(){return this._time}[Symbol.dispose](){this.stop()}elapsed(){let[e,t]=R(this._time);return 1e3*e+Math.floor(t/1e6)}log(e){this.logCore(e,!1)}restart(e){this.logCore(e,!0),this._time=R(),this._stopped=!1}stop(e){this._stopped||(this.restart(e),this._stopped=!0)}logCore(e,t){if(!this.logProvider.enabled(this.logLevel))return;if(!t)return void this.logProvider.log(this.logLevel,this.logScope,`${e?.message??""}${e?.suffix??""}`);let[o,r]=R(this._time),n=1e3*o+Math.floor(r/1e6),a=e?.message??"";this.logProvider.log(n>250?"warn":this.logLevel,this.logScope,`${a?`${a} `:""}[${n}ms]${e?.suffix??""}`)}};let Emitter=class Emitter{constructor(){this._disposed=!1}static{this._noop=function(){}}get event(){return null==this._event&&(this._event=(e,t,o)=>{null==this.listeners&&(this.listeners=new LinkedList);let r=this.listeners.push(null==t?e:[e,t]),n={dispose:()=>{n.dispose=Emitter._noop,this._disposed||r()}};return Array.isArray(o)&&o.push(n),n}),this._event}fire(e){if(null!=this.listeners){null==this._deliveryQueue&&(this._deliveryQueue=new LinkedList);for(let t=this.listeners.iterator(),o=t.next();!o.done;o=t.next())this._deliveryQueue.push([o.value,e]);for(;this._deliveryQueue.size>0;){let[e,t]=this._deliveryQueue.shift();try{"function"==typeof e?e(t):e[0].call(e[1],t)}catch{}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};let ey={done:!0,value:void 0};let events_Node=class events_Node{static{this.Undefined=new events_Node(void 0)}constructor(e){this.element=e,this.next=events_Node.Undefined,this.prev=events_Node.Undefined}};let LinkedList=class LinkedList{constructor(){this._first=events_Node.Undefined,this._last=events_Node.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===events_Node.Undefined}clear(){this._first=events_Node.Undefined,this._last=events_Node.Undefined,this._size=0}unshift(e){return this._insert(e,!1)}push(e){return this._insert(e,!0)}_insert(e,t){let o=new events_Node(e);if(this._first===events_Node.Undefined)this._first=o,this._last=o;else if(t){let e=this._last;this._last=o,o.prev=e,e.next=o}else{let e=this._first;this._first=o,o.next=e,e.prev=o}this._size+=1;let r=!1;return()=>{r||(r=!0,this._remove(o))}}shift(){if(this._first===events_Node.Undefined)return;let e=this._first.element;return this._remove(this._first),e}pop(){if(this._last===events_Node.Undefined)return;let e=this._last.element;return this._remove(this._last),e}_remove(e){if(e.prev!==events_Node.Undefined&&e.next!==events_Node.Undefined){let t=e.prev;t.next=e.next,e.next.prev=t}else e.prev===events_Node.Undefined&&e.next===events_Node.Undefined?(this._first=events_Node.Undefined,this._last=events_Node.Undefined):e.next===events_Node.Undefined?(this._last=this._last.prev,this._last.next=events_Node.Undefined):e.prev===events_Node.Undefined&&(this._first=this._first.next,this._first.prev=events_Node.Undefined);this._size-=1}iterator(){let e,t=this._first;return{next:function(){return t===events_Node.Undefined?ey:(null==e?e={done:!1,value:t.element}:e.value=t.element,t=t.next,e)}}}toArray(){let e=[];for(let t=this._first;t!==events_Node.Undefined;t=t.next)e.push(t.element);return e}};var ew=Object.defineProperty,e_=Object.getOwnPropertyDescriptor,ek=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?e_(t,o):t,c=e.length-1;c>=0;c--)(n=e[c])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&ew(t,o,a),a};function ex(){return n??=acquireVsCodeApi()}let e$=ei();function eC(){return`webview:${e$.next()}`}let eS=class{constructor(e){this.appName=e,this._onReceiveMessage=new Emitter,this._pendingHandlers=new Map,this._api=ex(),this._disposable=m.on(window,"message",e=>this.onMessageReceived(e))}get onReceiveMessage(){return this._onReceiveMessage.event}dispose(){this._disposable.dispose()}onMessageReceived(e){let t=es.get(eo.current),o=e.data;if(o.packed&&o.params instanceof Uint8Array){let r=function(e,t,...o){return(t?.provider??J).enabled(t?.logLevel??"info")?new Stopwatch(e,t,...o):void 0}(en(` deserializing msg=${e.data.method}`,t),{log:!1,logLevel:"debug"});this._textDecoder??=new TextDecoder,o.params=JSON.parse(this._textDecoder.decode(o.params)),r?.stop()}if(this.replaceIpcPromisesWithPromises(o.params),null!=o.completionId){var r,n;let e=(r=o.method,n=o.completionId,`${r}|${n}`);this._pendingHandlers.get(e)?.(o);return}this._onReceiveMessage.fire(o)}replaceIpcPromisesWithPromises(e){if(null!=e&&"object"==typeof e)for(let t in e){let o=e[t];null!=o&&"object"==typeof o&&"__ipc"in o&&"promise"===o.__ipc&&"id"in o&&"string"==typeof o.id&&"method"in o&&"string"==typeof o.method?e[t]=this.getResponsePromise(o.method,o.id):this.replaceIpcPromisesWithPromises(o)}}sendCommand(e,t){let o=eC();this.postMessage({id:o,scope:e.scope,method:e.method,params:t})}async sendRequest(e,t){let o=eC(),r=this.getResponsePromise(e.response.method,o);return this.postMessage({id:o,scope:e.scope,method:e.method,params:t,completionId:o}),r}getResponsePromise(e,t){return new Promise((o,r)=>{var n,a;let c,h=(n=e,a=t,`${n}|${a}`);function d(){clearTimeout(c),c=void 0,this._pendingHandlers.delete(h)}c=setTimeout(()=>{d.call(this),r(Error(`Timed out waiting for completion of ${h}`))},(Z.isDebugging?60:5)*6e4),this._pendingHandlers.set(h,e=>{if(d.call(this),e.method===E.method){let t=e.params;"rejected"===t.status?queueMicrotask(()=>r(Error(t.reason))):queueMicrotask(()=>o(t.value))}else queueMicrotask(()=>o(e.params))})})}setPersistedState(e){this._api.setState(e)}updatePersistedState(e){let t=this._api.getState();null!=t&&"object"==typeof t?(t={...t,...e},this._api.setState(t)):t=e,this.setPersistedState(t)}postMessage(e){this._api.postMessage(e)}};ek([ev({args:{0:e=>`${e.data.id}, method=${e.data.method}`}},!0)],eS.prototype,"onMessageReceived",1),ek([ev({args:{0:e=>e.method,1:!1}},!0)],eS.prototype,"sendCommand",1),ek([ev({args:{0:e=>e.method,1:!1,2:!1}},!0)],eS.prototype,"sendRequest",1),ek([ev({args:{0:e=>`${e.id}, method=${e.method}`}},!0)],eS.prototype,"postMessage",1),eS=ek([(g=e=>`${e.appName}(HostIpc)`,e=>void X.set(e,g))],eS);function eA(e,t){let o=Math.pow(10,t);return Math.round(e*o)/o}let RGBA=class RGBA{constructor(e,t,o,r=1){this._rgbaBrand=void 0,this.r=0|Math.min(255,Math.max(0,e)),this.g=0|Math.min(255,Math.max(0,t)),this.b=0|Math.min(255,Math.max(0,o)),this.a=eA(Math.max(Math.min(1,r),0),3)}static equals(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b&&e.a===t.a}};let HSLA=class HSLA{constructor(e,t,o,r){this._hslaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=eA(Math.max(Math.min(1,t),0),3),this.l=eA(Math.max(Math.min(1,o),0),3),this.a=eA(Math.max(Math.min(1,r),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.l===t.l&&e.a===t.a}static fromRGBA(e){let t=e.r/255,o=e.g/255,r=e.b/255,n=e.a,a=Math.max(t,o,r),c=Math.min(t,o,r),h=0,d=0,p=(c+a)/2,u=a-c;if(u>0){switch(d=Math.min(p<=.5?u/(2*p):u/(2-2*p),1),a){case t:h=(o-r)/u+6*(o<r);break;case o:h=(r-t)/u+2;break;case r:h=(t-o)/u+4}h*=60,h=Math.round(h)}return new HSLA(h,d,p,n)}static _hue2rgb(e,t,o){return(o<0&&(o+=1),o>1&&(o-=1),o<1/6)?e+(t-e)*6*o:o<.5?t:o<2/3?e+(t-e)*(2/3-o)*6:e}static toRGBA(e){let t,o,r,n=e.h/360,{s:a,l:c,a:h}=e;if(0===a)t=o=r=c;else{let e=c<.5?c*(1+a):c+a-c*a,h=2*c-e;t=HSLA._hue2rgb(h,e,n+1/3),o=HSLA._hue2rgb(h,e,n),r=HSLA._hue2rgb(h,e,n-1/3)}return new RGBA(Math.round(255*t),Math.round(255*o),Math.round(255*r),h)}};let HSVA=class HSVA{constructor(e,t,o,r){this._hsvaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=eA(Math.max(Math.min(1,t),0),3),this.v=eA(Math.max(Math.min(1,o),0),3),this.a=eA(Math.max(Math.min(1,r),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.v===t.v&&e.a===t.a}static fromRGBA(e){let t=e.r/255,o=e.g/255,r=e.b/255,n=Math.max(t,o,r),a=n-Math.min(t,o,r);return new HSVA(Math.round(60*(0===a?0:n===t?((o-r)/a%6+6)%6:n===o?(r-t)/a+2:(t-o)/a+4)),0===n?0:a/n,n,e.a)}static toRGBA(e){let{h:t,s:o,v:r,a:n}=e,a=r*o,c=a*(1-Math.abs(t/60%2-1)),h=r-a,[d,p,u]=[0,0,0];return t<60?(d=a,p=c):t<120?(d=c,p=a):t<180?(p=a,u=c):t<240?(p=c,u=a):t<300?(d=c,u=a):t<=360&&(d=a,u=c),new RGBA(d=Math.round((d+h)*255),p=Math.round((p+h)*255),u=Math.round((u+h)*255),n)}};function eE(e,t){return t.getPropertyValue(e).trim()}let Color=class Color{static from(e){return e instanceof Color?e:parseColor(e)||Color.red}static fromCssVariable(e,t){return parseColor(eE(e,t))||Color.red}static fromHex(e){return parseHexColor(e)||Color.red}static equals(e,t){return!e&&!t||!!e&&!!t&&e.equals(t)}get hsla(){return this._hsla?this._hsla:HSLA.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:HSVA.fromRGBA(this.rgba)}constructor(e){if(e)if(e instanceof RGBA)this.rgba=e;else if(e instanceof HSLA)this._hsla=e,this.rgba=HSLA.toRGBA(e);else if(e instanceof HSVA)this._hsva=e,this.rgba=HSVA.toRGBA(e);else throw Error("Invalid color ctor argument");else throw Error("Color needs a value")}equals(e){return null!=e&&!!e&&RGBA.equals(this.rgba,e.rgba)&&HSLA.equals(this.hsla,e.hsla)&&HSVA.equals(this.hsva,e.hsva)}getRelativeLuminance(){let e=Color._relativeLuminanceForComponent(this.rgba.r),t=Color._relativeLuminanceForComponent(this.rgba.g);return eA(.2126*e+.7152*t+.0722*Color._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(e){let t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}luminance(e){return luminance(this,e)}getContrastRatio(e){let t=this.getRelativeLuminance(),o=e.getRelativeLuminance();return t>o?(t+.05)/(o+.05):(o+.05)/(t+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(e){return this.getRelativeLuminance()>e.getRelativeLuminance()}isDarkerThan(e){return this.getRelativeLuminance()<e.getRelativeLuminance()}lighten(e){return new Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*e,this.hsla.a))}darken(e){return new Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*e,this.hsla.a))}transparent(e){let{r:t,g:o,b:r,a:n}=this.rgba;return new Color(new RGBA(t,o,r,n*e))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new Color(new RGBA(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(e){let t=e.rgba,o=this.rgba.a,r=t.a,n=o+r*(1-o);if(n<1e-6)return Color.transparent;let a=this.rgba.r*o/n+t.r*r*(1-o)/n;return new Color(new RGBA(a,this.rgba.g*o/n+t.g*r*(1-o)/n,this.rgba.b*o/n+t.b*r*(1-o)/n,n))}mix(e,t){return mixColors(this,e,t)}makeOpaque(e){if(this.isOpaque()||1!==e.rgba.a)return this;let{r:t,g:o,b:r,a:n}=this.rgba;return new Color(new RGBA(e.rgba.r-n*(e.rgba.r-t),e.rgba.g-n*(e.rgba.g-o),e.rgba.b-n*(e.rgba.b-r),1))}flatten(...e){let t=e.reduceRight((e,t)=>Color._flatten(t,e));return Color._flatten(this,t)}static _flatten(e,t){let o=1-e.rgba.a;return new Color(new RGBA(o*t.rgba.r+e.rgba.a*e.rgba.r,o*t.rgba.g+e.rgba.a*e.rgba.g,o*t.rgba.b+e.rgba.a*e.rgba.b))}toString(){return this._toString||(this._toString=function(e){return e.isOpaque()?`#${eP(e.rgba.r)}${eP(e.rgba.g)}${eP(e.rgba.b)}`:`rgba(${e.rgba.r}, ${e.rgba.g}, ${e.rgba.b}, ${Number(e.rgba.a.toFixed(2))})`}(this)),this._toString}static getLighterColor(e,t,o){if(e.isLighterThan(t))return e;o=o||.5;let r=e.getRelativeLuminance(),n=t.getRelativeLuminance();return o=o*(n-r)/n,e.lighten(o)}static getDarkerColor(e,t,o){if(e.isDarkerThan(t))return e;o=o||.5;let r=e.getRelativeLuminance(),n=t.getRelativeLuminance();return o=o*(r-n)/r,e.darken(o)}static{this.white=new Color(new RGBA(255,255,255,1))}static{this.black=new Color(new RGBA(0,0,0,1))}static{this.red=new Color(new RGBA(255,0,0,1))}static{this.blue=new Color(new RGBA(0,0,255,1))}static{this.green=new Color(new RGBA(0,255,0,1))}static{this.cyan=new Color(new RGBA(0,255,255,1))}static{this.lightgrey=new Color(new RGBA(211,211,211,1))}static{this.transparent=new Color(new RGBA(0,0,0,0))}};function eP(e){let t=e.toString(16);return 2!==t.length?`0${t}`:t}let eI=new Emitter,eR=eI.event;function eT(e){let t=document.documentElement,o=window.getComputedStyle(t),r=document.body.classList,n=r.contains("vscode-light")||r.contains("vscode-high-contrast-light"),a=r.contains("vscode-high-contrast")||r.contains("vscode-high-contrast-light"),c=eE("--vscode-editor-background",o),h=eE("--vscode-editor-foreground",o);return h||(h=eE("--vscode-foreground",o)),{colors:{background:c,foreground:h},computedStyle:o,isLightTheme:n,isHighContrastTheme:a,isInitializing:null==e}}let App=class App{constructor(e){this.appName=e;let t=[],o=eT();if(null!=this.onThemeUpdated&&(this.onThemeUpdated(o),t.push(eR(this.onThemeUpdated,this))),this.state=window.bootstrap,window.bootstrap=void 0,this.placement=document.body.getAttribute("data-placement")??"editor",this._logger=new LoggerContext(e),this.log("opening..."),this._api=ex(),this._hostIpc=new eS(this.appName),t.push(this._hostIpc),this._promos=new PromosContext(this._hostIpc),t.push(this._promos),this._telemetry=new TelemetryContext(this._hostIpc),t.push(this._telemetry),new i(document.body,{context:"ipc",initialValue:this._hostIpc}),new i(document.body,{context:"logger",initialValue:this._logger}),new i(document.body,{context:"promos",initialValue:this._promos}),new i(document.body,{context:"telemetry",initialValue:this._telemetry}),null!=this.state){let e=this.getState();this.state.timestamp>=(e?.timestamp??0)?this._api.setState(this.state):this.state=e}t.push(function(){let e=new MutationObserver(e=>{eI.fire(eT(e))});return e.observe(document.body,{attributeFilter:["class"]}),{dispose:()=>e.disconnect()}}()),requestAnimationFrame(()=>{this.log("initializing...");try{this.onInitialize?.(),this.bind(),null!=this.onMessageReceived&&t.push(this._hostIpc.onReceiveMessage(e=>{switch(!0){case P.is(e):window.dispatchEvent(new CustomEvent(e.params.focused?"webview-focus":"webview-blur"));break;case I.is(e):window.dispatchEvent(new CustomEvent(e.params.visible?"webview-visible":"webview-hidden"));break;default:this.onMessageReceived(e)}})),this.sendCommand(k,void 0),this.onInitialized?.()}finally{this.log("initialized"),document.body.classList.contains("preload")&&setTimeout(()=>{document.body.classList.remove("preload")},500)}}),t.push(m.on(window,"pagehide",()=>{t?.forEach(e=>e.dispose()),this.bindDisposables?.forEach(e=>e.dispose()),this.bindDisposables=void 0})),t.push(m.on(window,"gl-telemetry-fired",e=>{this._telemetry.sendEvent(e.detail)})),this.log("opened")}bind(){document.querySelectorAll("a").forEach(e=>{e.href===e.title&&e.removeAttribute("title")}),this.bindDisposables?.forEach(e=>e.dispose()),this.bindDisposables=this.onBind?.(),null==this.bindDisposables&&(this.bindDisposables=[]);let e=_(e=>{this.sendCommand(x,e)},150);this.bindDisposables.push(m.on(document,"focusin",t=>{let o=t.composedPath().some(e=>"INPUT"===e.tagName);(!0!==this._focused||this._inputFocused!==o)&&(this._focused=!0,this._inputFocused=o,e({focused:!0,inputFocused:o}))}),m.on(document,"focusout",()=>{(!1!==this._focused||!1!==this._inputFocused)&&(this._focused=!1,this._inputFocused=!1,e({focused:!1,inputFocused:!1}))}))}log(e,...t){this._logger.log(e,...t)}getState(){return this._api.getState()}sendCommand(e,t){this._hostIpc.sendCommand(e,t)}sendRequest(e,t){return this._hostIpc.sendRequest(e,t)}setState(e){this._api.setState(e)}};var ez={408:(e,t)=>{var o=Symbol.for("react.element"),r=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),h=Symbol.for("react.provider"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),m=Symbol.iterator,b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v=Object.assign,y={};function w(e,t,o){this.props=e,this.context=t,this.refs=y,this.updater=o||b}function _(){}function k(e,t,o){this.props=e,this.context=t,this.refs=y,this.updater=o||b}w.prototype.isReactComponent={},w.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},w.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=w.prototype;var x=k.prototype=new _;x.constructor=k,v(x,w.prototype),x.isPureReactComponent=!0;var C=Array.isArray,S=Object.prototype.hasOwnProperty,A={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,r){var n,a={},c=null,h=null;if(null!=t)for(n in void 0!==t.ref&&(h=t.ref),void 0!==t.key&&(c=""+t.key),t)S.call(t,n)&&!E.hasOwnProperty(n)&&(a[n]=t[n]);var d=arguments.length-2;if(1===d)a.children=r;else if(1<d){for(var p=Array(d),u=0;u<d;u++)p[u]=arguments[u+2];a.children=p}if(e&&e.defaultProps)for(n in d=e.defaultProps)void 0===a[n]&&(a[n]=d[n]);return{$$typeof:o,type:e,key:c,ref:h,props:a,_owner:A.current}}function I(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var R=/\/+/g;function T(e,t){var o,r;return"object"==typeof e&&null!==e&&null!=e.key?(o=""+e.key,r={"=":"=0",":":"=2"},"$"+o.replace(/[=:]/g,function(e){return r[e]})):t.toString(36)}function M(e,t,n){if(null==e)return e;var a=[],c=0;return function e(t,n,a,c,h){var d,p,u,g=typeof t;"undefined"!==g&&"boolean"!==g||(t=null);var f=!1;if(null===t)f=!0;else switch(g){case"string":case"number":f=!0;break;case"object":switch(t.$$typeof){case o:case r:f=!0}}if(f)return h=h(f=t),t=""===c?"."+T(f,0):c,C(h)?(a="",null!=t&&(a=t.replace(R,"$&/")+"/"),e(h,n,a,"",function(e){return e})):null!=h&&(I(h)&&(d=h,p=a+(!h.key||f&&f.key===h.key?"":(""+h.key).replace(R,"$&/")+"/")+t,h={$$typeof:o,type:d.type,key:p,ref:d.ref,props:d.props,_owner:d._owner}),n.push(h)),1;if(f=0,c=""===c?".":c+":",C(t))for(var b=0;b<t.length;b++){var v=c+T(g=t[b],b);f+=e(g,n,a,v,h)}else if("function"==typeof(v=null===(u=t)||"object"!=typeof u?null:"function"==typeof(u=m&&u[m]||u["@@iterator"])?u:null))for(t=v.call(t),b=0;!(g=t.next()).done;)f+=e(g=g.value,n,a,v=c+T(g,b++),h);else if("object"===g)throw Error("Objects are not valid as a React child (found: "+("[object Object]"===(n=String(t))?"object with keys {"+Object.keys(t).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return f}(e,a,"","",function(e){return t.call(n,e,c++)}),a}function O(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var L={current:null},D={transition:null};t.Children={map:M,forEach:function(e,t,o){M(e,function(){t.apply(this,arguments)},o)},count:function(e){var t=0;return M(e,function(){t++}),t},toArray:function(e){return M(e,function(e){return e})||[]},only:function(e){if(!I(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=w,t.Fragment=n,t.Profiler=c,t.PureComponent=k,t.StrictMode=a,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED={ReactCurrentDispatcher:L,ReactCurrentBatchConfig:D,ReactCurrentOwner:A},t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=v({},e.props),a=e.key,c=e.ref,h=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,h=A.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var d=e.type.defaultProps;for(p in t)S.call(t,p)&&!E.hasOwnProperty(p)&&(n[p]=void 0===t[p]&&void 0!==d?d[p]:t[p])}var p=arguments.length-2;if(1===p)n.children=r;else if(1<p){d=Array(p);for(var u=0;u<p;u++)d[u]=arguments[u+2];n.children=d}return{$$typeof:o,type:e.type,key:a,ref:c,props:n,_owner:h}},t.createContext=function(e){return(e={$$typeof:d,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:h,_context:e},e.Consumer=e},t.createElement=P,t.createFactory=function(e){var t=P.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:p,render:e}},t.isValidElement=I,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:O}},t.memo=function(e,t){return{$$typeof:g,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=D.transition;D.transition={};try{e()}finally{D.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return L.current.useCallback(e,t)},t.useContext=function(e){return L.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return L.current.useDeferredValue(e)},t.useEffect=function(e,t){return L.current.useEffect(e,t)},t.useId=function(){return L.current.useId()},t.useImperativeHandle=function(e,t,o){return L.current.useImperativeHandle(e,t,o)},t.useInsertionEffect=function(e,t){return L.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return L.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return L.current.useMemo(e,t)},t.useReducer=function(e,t,o){return L.current.useReducer(e,t,o)},t.useRef=function(e){return L.current.useRef(e)},t.useState=function(e){return L.current.useState(e)},t.useSyncExternalStore=function(e,t,o){return L.current.useSyncExternalStore(e,t,o)},t.useTransition=function(){return L.current.useTransition()},t.version="18.2.0"},294:(e,t,o)=>{e.exports=o(408)}},eM={};function eO(e){var t=eM[e];if(void 0!==t)return t.exports;var o=eM[e]={exports:{}};return ez[e](o,o.exports,eO),o.exports}eO.d=(e,t)=>{for(var o in t)eO.o(t,o)&&!eO.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},eO.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var eL={};(()=>{let e,t,o,r,n,a;eO.d(eL,{Tn:()=>Se,qE:()=>He,HE:()=>Le,Ct:()=>Be,zx:()=>Ge,M1:()=>Je,sX:()=>bo,D0:()=>yo,fs:()=>vo,Tw:()=>tr,ud:()=>tc,wt:()=>th,ne:()=>tp,Ku:()=>tf,FU:()=>tv,XO:()=>tP,Ze:()=>tI,K$:()=>tR,cX:()=>tN,Js:()=>tB,J9:()=>tF,si:()=>tC,sg:()=>tU,hW:()=>tH,II:()=>Ro,v2:()=>Mo,sN:()=>Do,Lb:()=>Ho,J2:()=>xe,$$:()=>po,Vp:()=>Bo,u:()=>$e,fW:()=>function e(...t){t.forEach(t=>{t.elementName&&!customElements.get(t.elementName)&&(customElements.define(t.elementName,t),t.components&&t.components.length>0&&e(...t.components))})},WV:()=>eu,h4:()=>ep,kZ:()=>ed});let c=globalThis,h=c.ShadowRoot&&(void 0===c.ShadyCSS||c.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,d=Symbol(),p=new WeakMap;let s=class s{constructor(e,t,o){if(this._$cssResult$=!0,o!==d)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(h&&void 0===e){let o=void 0!==t&&1===t.length;o&&(e=p.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&p.set(t,e))}return e}toString(){return this.cssText}};let u=(e,...t)=>new s(1===e.length?e[0]:t.reduce((t,o,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[r+1],e[0]),e,d),g=h?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t,o="";for(let t of e.cssRules)o+=t.cssText;return new s("string"==typeof(t=o)?t:t+"",void 0,d)})(e):e,{is:f,defineProperty:m,getOwnPropertyDescriptor:b,getOwnPropertyNames:v,getOwnPropertySymbols:y,getPrototypeOf:w}=Object,_=globalThis,k=_.trustedTypes,x=k?k.emptyScript:"",C=_.reactiveElementPolyfillSupport,S={toAttribute(e,t){switch(t){case Boolean:e=e?x:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch{o=null}}return o}},A=(e,t)=>!f(e,t),E={attribute:!0,type:String,converter:S,reflect:!1,hasChanged:A};Symbol.metadata??=Symbol("metadata"),_.litPropertyMetadata??=new WeakMap;let $=class $ extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=E){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){let o=Symbol(),r=this.getPropertyDescriptor(e,o,t);void 0!==r&&m(this.prototype,e,r)}}static getPropertyDescriptor(e,t,o){let{get:r,set:n}=b(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return r?.call(this)},set(t){let a=r?.call(this);n.call(this,t),this.requestUpdate(e,a,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??E}static _$Ei(){if(this.hasOwnProperty("elementProperties"))return;let e=w(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty("finalized"))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty("properties")){let e=this.properties;for(let t of[...v(e),...y(e)])this.createProperty(t,e[t])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,o]of t)this.elementProperties.set(e,o)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let o of new Set(e.flat(1/0).reverse()))t.unshift(g(o));else void 0!==e&&t.push(g(e));return t}static _$Eu(e,t){let o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$ES??=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$ES?.splice(this._$ES.indexOf(e)>>>0,1)}_$E_(){let e=new Map;for(let t of this.constructor.elementProperties.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(h)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let o of t){let t=document.createElement("style"),r=c.litNonce;void 0!==r&&t.setAttribute("nonce",r),t.textContent=o.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$ES?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EO(e,t){let o=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,o);if(void 0!==r&&!0===o.reflect){let n=(void 0!==o.converter?.toAttribute?o.converter:S).toAttribute(t,o.type);this._$Em=e,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(e,t){let o=this.constructor,r=o._$Eh.get(e);if(void 0!==r&&this._$Em!==r){let e=o.getPropertyOptions(r),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:S;this._$Em=r,this[r]=n.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,o,r=!1,n){if(void 0!==e){if(!((o??=this.constructor.getPropertyOptions(e)).hasChanged??A)(r?n:this[e],t))return;this.C(e,t,o)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,o){this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,o]of e)!0!==o.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],o)}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$ES?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$ES?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(e=>this._$EO(e,this[e])),this._$ET()}updated(e){}firstUpdated(e){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$.elementProperties=new Map,$.finalized=new Map,C?.({ReactiveElement:$}),(_.reactiveElementVersions??=[]).push("2.0.0");let P=globalThis,I=P.trustedTypes,R=I?I.createPolicy("lit-html",{createHTML:e=>e}):void 0,T="$lit$",M=`lit$${(Math.random()+"").slice(9)}$`,O="?"+M,L=`<${O}>`,D=document,N=()=>D.createComment(""),B=e=>null===e||"object"!=typeof e&&"function"!=typeof e,F=Array.isArray,j=`[ 	
\f\r]`,U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,q=/>/g,V=RegExp(`>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),W=/'/g,G=/"/g,K=/^(?:script|style|textarea|title)$/i,Z=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),Y=Z(1),X=(Z(2),Symbol.for("lit-noChange")),J=Symbol.for("lit-nothing"),ee=new WeakMap,ei=D.createTreeWalker(D,129);function eo(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==R?R.createHTML(t):t}let Q=class Q{constructor({strings:e,_$litType$:t},o){let r;this.parts=[];let n=0,a=0,c=e.length-1,h=this.parts,[d,p]=((e,t)=>{let o=e.length-1,r=[],n,a=2===t?"<svg>":"",c=U;for(let t=0;t<o;t++){let o=e[t],h,d,p=-1,u=0;for(;u<o.length&&(c.lastIndex=u,null!==(d=c.exec(o)));)u=c.lastIndex,c===U?"!--"===d[1]?c=H:void 0!==d[1]?c=q:void 0!==d[2]?(K.test(d[2])&&(n=RegExp("</"+d[2],"g")),c=V):void 0!==d[3]&&(c=V):c===V?">"===d[0]?(c=n??U,p=-1):void 0===d[1]?p=-2:(p=c.lastIndex-d[2].length,h=d[1],c=void 0===d[3]?V:'"'===d[3]?G:W):c===G||c===W?c=V:c===H||c===q?c=U:(c=V,n=void 0);let g=c===V&&e[t+1].startsWith("/>")?" ":"";a+=c===U?o+L:p>=0?(r.push(h),o.slice(0,p)+T+o.slice(p)+M+g):o+M+(-2===p?t:g)}return[eo(e,a+(e[o]||"<?>")+(2===t?"</svg>":"")),r]})(e,t);if(this.el=Q.createElement(d,o),ei.currentNode=this.el.content,2===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(r=ei.nextNode())&&h.length<c;){if(1===r.nodeType){if(r.hasAttributes())for(let e of r.getAttributeNames())if(e.endsWith(T)){let t=p[a++],o=r.getAttribute(e).split(M),c=/([.?@])?(.*)/.exec(t);h.push({type:1,index:n,name:c[2],strings:o,ctor:"."===c[1]?it:"?"===c[1]?rt:"@"===c[1]?st:nt}),r.removeAttribute(e)}else e.startsWith(M)&&(h.push({type:6,index:n}),r.removeAttribute(e));if(K.test(r.tagName)){let e=r.textContent.split(M),t=e.length-1;if(t>0){r.textContent=I?I.emptyScript:"";for(let o=0;o<t;o++)r.append(e[o],N()),ei.nextNode(),h.push({type:2,index:++n});r.append(e[t],N())}}}else if(8===r.nodeType)if(r.data===O)h.push({type:2,index:n});else{let e=-1;for(;-1!==(e=r.data.indexOf(M,e+1));)h.push({type:7,index:n}),e+=M.length-1}n++}}static createElement(e,t){let o=D.createElement("template");return o.innerHTML=e,o}};function es(e,t,o=e,r){if(t===X)return t;let n=void 0!==r?o._$Co?.[r]:o._$Cl,a=B(t)?void 0:t._$litDirective$;return n?.constructor!==a&&(n?._$AO?.(!1),void 0===a?n=void 0:(n=new a(e))._$AT(e,o,r),void 0!==r?(o._$Co??=[])[r]=n:o._$Cl=n),void 0!==n&&(t=es(e,n._$AS(e,t.values),n,r)),t}let et=class et{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:o}=this._$AD,r=(e?.creationScope??D).importNode(t,!0);ei.currentNode=r;let n=ei.nextNode(),a=0,c=0,h=o[0];for(;void 0!==h;){if(a===h.index){let t;2===h.type?t=new ot(n,n.nextSibling,this,e):1===h.type?t=new h.ctor(n,h.name,h.strings,this,e):6===h.type&&(t=new at(n,this,e)),this._$AV.push(t),h=o[++c]}a!==h?.index&&(n=ei.nextNode(),a++)}return ei.currentNode=D,r}p(e){let t=0;for(let o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}};let ot=class ot{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,r){this.type=2,this._$AH=J,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){let o;B(e=es(this,e,t))?e===J||null==e||""===e?(this._$AH!==J&&this._$AR(),this._$AH=J):e!==this._$AH&&e!==X&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):F(o=e)||"function"==typeof o?.[Symbol.iterator]?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==J&&B(this._$AH)?this._$AA.nextSibling.data=e:this.$(D.createTextNode(e)),this._$AH=e}g(e){let{values:t,_$litType$:o}=e,r="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=Q.createElement(eo(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new et(r,this),o=e.u(this.options);e.p(t),this.$(o),this._$AH=e}}_$AC(e){let t=ee.get(e.strings);return void 0===t&&ee.set(e.strings,t=new Q(e)),t}T(e){F(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,o,r=0;for(let n of e)r===t.length?t.push(o=new ot(this.k(N()),this.k(N()),this,this.options)):o=t[r],o._$AI(n),r++;r<t.length&&(this._$AR(o&&o._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}};let nt=class nt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,r,n){this.type=1,this._$AH=J,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=n,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=J}_$AI(e,t=this,o,r){let n=this.strings,a=!1;if(void 0===n)(a=!B(e=es(this,e,t,0))||e!==this._$AH&&e!==X)&&(this._$AH=e);else{let r,c,h=e;for(e=n[0],r=0;r<n.length-1;r++)(c=es(this,h[o+r],t,r))===X&&(c=this._$AH[r]),a||=!B(c)||c!==this._$AH[r],c===J?e=J:e!==J&&(e+=(c??"")+n[r+1]),this._$AH[r]=c}a&&!r&&this.j(e)}j(e){e===J?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}};let it=class it extends nt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===J?void 0:e}};let rt=class rt extends nt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==J)}};let st=class st extends nt{constructor(e,t,o,r,n){super(e,t,o,r,n),this.type=5}_$AI(e,t=this){if((e=es(this,e,t,0)??J)===X)return;let o=this._$AH,r=e===J&&o!==J||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,n=e!==J&&(o===J||r);r&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}};let at=class at{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){es(this,e)}};let er=P.litHtmlPolyfillSupport;er?.(Q,ot),(P.litHtmlVersions??=[]).push("3.0.0");let ct=class ct extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{let r=o?.renderBefore??t,n=r._$litPart$;if(void 0===n){let e=o?.renderBefore??null;r._$litPart$=n=new ot(t.insertBefore(N(),e),e,void 0,o??{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return X}};ct._$litElement$=!0,ct.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ct});let en=globalThis.litElementPolyfillSupport;en?.({LitElement:ct}),(globalThis.litElementVersions??=[]).push("4.0.0");let ea={attribute:!0,type:String,converter:S,reflect:!1,hasChanged:A};function el(e){return(t,o)=>"object"==typeof o?((e=ea,t,o)=>{let{kind:r,metadata:n}=o,a=globalThis.litPropertyMetadata.get(n);if(void 0===a&&globalThis.litPropertyMetadata.set(n,a=new Map),a.set(o.name,e),"accessor"===r){let{name:r}=o;return{set(o){let n=t.get.call(this);t.set.call(this,o),this.requestUpdate(r,n,e)},init(t){return void 0!==t&&this.C(r,void 0,e),t}}}if("setter"===r){let{name:r}=o;return function(o){let n=this[r];t.call(this,o),this.requestUpdate(r,n,e)}}throw Error("Unsupported decorator location: "+r)})(e,t,o):((e,t,o)=>{let r=t.hasOwnProperty(o);return t.constructor.createProperty(o,r?{...e,wrapped:!0}:e),r?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}let ec=(e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,o),o);function eh(e,t){return(o,r,n)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:c}="object"==typeof r?o:n??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return ec(o,r,{get(){if(t){let t=e.call(this);return void 0===t&&(t=a(this),c.call(this,t)),t}return a(this)}})}return ec(o,r,{get(){return a(this)}})}}let gt=class gt extends ct{};let ed=u`.sr-only,.sr-only-focusable:not(:active):not(:focus){clip:rect(0 0 0 0);clip-path:inset(50%);width:1px;height:1px;overflow:hidden;position:absolute;white-space:nowrap}`,ep=u``,eu=u`:host{box-sizing:border-box}:host *,:host ::after,:host ::before{box-sizing:inherit}[hidden]{display:none!important}`,eg=Math.min,ef=Math.max,em=Math.round,eb=(Math.floor,e=>({x:e,y:e})),ev={left:"right",right:"left",bottom:"top",top:"bottom"},ey={start:"end",end:"start"};function ew(e,t){return"function"==typeof e?e(t):e}function e_(e){return e.split("-")[0]}function ek(e){return e.split("-")[1]}function ex(e){return"x"===e?"y":"x"}function e$(e){return"y"===e?"height":"width"}function eC(e){return["top","bottom"].includes(e_(e))?"y":"x"}function eS(e){return e.replace(/start|end/g,e=>ey[e])}function eA(e){return e.replace(/left|right|bottom|top/g,e=>ev[e])}function eE(e){return"number"!=typeof e?{top:0,right:0,bottom:0,left:0,...e}:{top:e,right:e,bottom:e,left:e}}function eP(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function eI(e,t,o){let r,{reference:n,floating:a}=e,c=eC(t),h=ex(eC(t)),d=e$(h),p=e_(t),u="y"===c,g=n.x+n.width/2-a.width/2,f=n.y+n.height/2-a.height/2,m=n[d]/2-a[d]/2;switch(p){case"top":r={x:g,y:n.y-a.height};break;case"bottom":r={x:g,y:n.y+n.height};break;case"right":r={x:n.x+n.width,y:f};break;case"left":r={x:n.x-a.width,y:f};break;default:r={x:n.x,y:n.y}}switch(ek(t)){case"start":r[h]-=m*(o&&u?-1:1);break;case"end":r[h]+=m*(o&&u?-1:1)}return r}async function eR(e,t){var o;void 0===t&&(t={});let{x:r,y:n,platform:a,rects:c,elements:h,strategy:d}=e,{boundary:p="clippingAncestors",rootBoundary:u="viewport",elementContext:g="floating",altBoundary:f=!1,padding:m=0}=ew(t,e),b=eE(m),v=h[f?"floating"===g?"reference":"floating":g],y=eP(await a.getClippingRect({element:null==(o=await (null==a.isElement?void 0:a.isElement(v)))||o?v:v.contextElement||await (null==a.getDocumentElement?void 0:a.getDocumentElement(h.floating)),boundary:p,rootBoundary:u,strategy:d})),w="floating"===g?{...c.floating,x:r,y:n}:c.reference,_=await (null==a.getOffsetParent?void 0:a.getOffsetParent(h.floating)),k=await (null==a.isElement?void 0:a.isElement(_))&&await (null==a.getScale?void 0:a.getScale(_))||{x:1,y:1},x=eP(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({rect:w,offsetParent:_,strategy:d}):w);return{top:(y.top-x.top+b.top)/k.y,bottom:(x.bottom-y.bottom+b.bottom)/k.y,left:(y.left-x.left+b.left)/k.x,right:(x.right-y.right+b.right)/k.x}}function eT(e){return eD(e)?(e.nodeName||"").toLowerCase():"#document"}function ez(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function eM(e){var t;return null==(t=(eD(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function eD(e){return e instanceof Node||e instanceof ez(e).Node}function eN(e){return e instanceof Element||e instanceof ez(e).Element}function eB(e){return e instanceof HTMLElement||e instanceof ez(e).HTMLElement}function eF(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof ez(e).ShadowRoot)}function ej(e){let{overflow:t,overflowX:o,overflowY:r,display:n}=eV(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+o)&&!["inline","contents"].includes(n)}function eU(e){let t=eH(),o=eV(e);return"none"!==o.transform||"none"!==o.perspective||!!o.containerType&&"normal"!==o.containerType||!t&&!!o.backdropFilter&&"none"!==o.backdropFilter||!t&&!!o.filter&&"none"!==o.filter||["transform","perspective","filter"].some(e=>(o.willChange||"").includes(e))||["paint","layout","strict","content"].some(e=>(o.contain||"").includes(e))}function eH(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function eq(e){return["html","body","#document"].includes(eT(e))}function eV(e){return ez(e).getComputedStyle(e)}function eW(e){return eN(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function eG(e){if("html"===eT(e))return e;let t=e.assignedSlot||e.parentNode||eF(e)&&e.host||eM(e);return eF(t)?t.host:t}function eK(e){let t=eV(e),o=parseFloat(t.width)||0,r=parseFloat(t.height)||0,n=eB(e),a=n?e.offsetWidth:o,c=n?e.offsetHeight:r,h=em(o)!==a||em(r)!==c;return h&&(o=a,r=c),{width:o,height:r,$:h}}function eZ(e){return eN(e)?e:e.contextElement}function eY(e){let t=eZ(e);if(!eB(t))return eb(1);let o=t.getBoundingClientRect(),{width:r,height:n,$:a}=eK(t),c=(a?em(o.width):o.width)/r,h=(a?em(o.height):o.height)/n;return c&&Number.isFinite(c)||(c=1),h&&Number.isFinite(h)||(h=1),{x:c,y:h}}let eX=eb(0);function eQ(e){let t=ez(e);return eH()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:eX}function eJ(e,t,o,r){var n;void 0===t&&(t=!1),void 0===o&&(o=!1);let a=e.getBoundingClientRect(),c=eZ(e),h=eb(1);t&&(r?eN(r)&&(h=eY(r)):h=eY(e));let d=(void 0===(n=o)&&(n=!1),!(!r||n&&r!==ez(c))&&n)?eQ(c):eb(0),p=(a.left+d.x)/h.x,u=(a.top+d.y)/h.y,g=a.width/h.x,f=a.height/h.y;if(c){let e=ez(c),t=r&&eN(r)?ez(r):r,o=e.frameElement;for(;o&&r&&t!==e;){let e=eY(o),t=o.getBoundingClientRect(),r=eV(o),n=t.left+(o.clientLeft+parseFloat(r.paddingLeft))*e.x,a=t.top+(o.clientTop+parseFloat(r.paddingTop))*e.y;p*=e.x,u*=e.y,g*=e.x,f*=e.y,p+=n,u+=a,o=ez(o).frameElement}}return eP({width:g,height:f,x:p,y:u})}function e0(e){return eJ(eM(e)).left+eW(e).scrollLeft}function e1(e,t,o){let r;if("viewport"===t)r=function(e,t){let o=ez(e),r=eM(e),n=o.visualViewport,a=r.clientWidth,c=r.clientHeight,h=0,d=0;if(n){a=n.width,c=n.height;let e=eH();(!e||e&&"fixed"===t)&&(h=n.offsetLeft,d=n.offsetTop)}return{width:a,height:c,x:h,y:d}}(e,o);else if("document"===t)r=function(e){let t=eM(e),o=eW(e),r=e.ownerDocument.body,n=ef(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),a=ef(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),c=-o.scrollLeft+e0(e),h=-o.scrollTop;return"rtl"===eV(r).direction&&(c+=ef(t.clientWidth,r.clientWidth)-n),{width:n,height:a,x:c,y:h}}(eM(e));else if(eN(t))r=function(e,t){let o=eJ(e,!0,"fixed"===t),r=o.top+e.clientTop,n=o.left+e.clientLeft,a=eB(e)?eY(e):eb(1);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:n*a.x,y:r*a.y}}(t,o);else{let o=eQ(e);r={...t,x:t.x-o.x,y:t.y-o.y}}return eP(r)}function e2(e,t){return eB(e)&&"fixed"!==eV(e).position?t?t(e):e.offsetParent:null}function e5(e,t){let o=ez(e);if(!eB(e))return o;let r=e2(e,t);for(;r&&["table","td","th"].includes(eT(r))&&"static"===eV(r).position;)r=e2(r,t);return r&&("html"===eT(r)||"body"===eT(r)&&"static"===eV(r).position&&!eU(r))?o:r||function(e){let t=eG(e);for(;eB(t)&&!eq(t);){if(eU(t))return t;t=eG(t)}return null}(e)||o}let e3={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:o,strategy:r}=e,n=eB(o),a=eM(o);if(o===a)return t;let c={scrollLeft:0,scrollTop:0},h=eb(1),d=eb(0);if((n||!n&&"fixed"!==r)&&(("body"!==eT(o)||ej(a))&&(c=eW(o)),eB(o))){let e=eJ(o);h=eY(o),d.x=e.x+o.clientLeft,d.y=e.y+o.clientTop}return{width:t.width*h.x,height:t.height*h.y,x:t.x*h.x-c.scrollLeft*h.x+d.x,y:t.y*h.y-c.scrollTop*h.y+d.y}},getDocumentElement:eM,getClippingRect:function(e){let{element:t,boundary:o,rootBoundary:r,strategy:n}=e,a=[..."clippingAncestors"===o?function(e,t){let o=t.get(e);if(o)return o;let r=(function e(t,o,r){var n;void 0===o&&(o=[]),void 0===r&&(r=!0);let a=function e(t){let o=eG(t);return eq(o)?t.ownerDocument?t.ownerDocument.body:t.body:eB(o)&&ej(o)?o:e(o)}(t),c=a===(null==(n=t.ownerDocument)?void 0:n.body),h=ez(a);return c?o.concat(h,h.visualViewport||[],ej(a)?a:[],h.frameElement&&r?e(h.frameElement):[]):o.concat(a,e(a,[],r))})(e,[],!1).filter(e=>eN(e)&&"body"!==eT(e)),n=null,a="fixed"===eV(e).position,c=a?eG(e):e;for(;eN(c)&&!eq(c);){let t=eV(c),o=eU(c);o||"fixed"!==t.position||(n=null),(a?!o&&!n:!o&&"static"===t.position&&n&&["absolute","fixed"].includes(n.position)||ej(c)&&!o&&function e(t,o){let r=eG(t);return!(r===o||!eN(r)||eq(r))&&("fixed"===eV(r).position||e(r,o))}(e,c))?r=r.filter(e=>e!==c):n=t,c=eG(c)}return t.set(e,r),r}(t,this._c):[].concat(o),r],c=a[0],h=a.reduce((e,o)=>{let r=e1(t,o,n);return e.top=ef(r.top,e.top),e.right=eg(r.right,e.right),e.bottom=eg(r.bottom,e.bottom),e.left=ef(r.left,e.left),e},e1(t,c,n));return{width:h.right-h.left,height:h.bottom-h.top,x:h.left,y:h.top}},getOffsetParent:e5,getElementRects:async function(e){let{reference:t,floating:o,strategy:r}=e,n=this.getOffsetParent||e5,a=this.getDimensions;return{reference:function(e,t,o){let r=eB(t),n=eM(t),a="fixed"===o,c=eJ(e,!0,a,t),h={scrollLeft:0,scrollTop:0},d=eb(0);if(r||!r&&!a)if(("body"!==eT(t)||ej(n))&&(h=eW(t)),r){let e=eJ(t,!0,a,t);d.x=e.x+t.clientLeft,d.y=e.y+t.clientTop}else n&&(d.x=e0(n));return{x:c.left+h.scrollLeft-d.x,y:c.top+h.scrollTop-d.y,width:c.width,height:c.height}}(t,await n(o),r),floating:{x:0,y:0,...await a(o)}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){return eK(e)},getScale:eY,isElement:eN,isRTL:function(e){return"rtl"===eV(e).direction}},e6=u`:host{display:contents;position:relative}.popover{display:block;left:0;top:0;position:absolute;z-index:var(--gk-popover-z-index,100)}.arrow{background:var(--gk-tooltip-background-color,#000);height:8px;position:absolute;transform:rotate(45deg);width:8px}`;var e9,e7=function(e,t,o,r){var n,a=arguments.length,c=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,r);else for(var h=e.length-1;h>=0;h--)(n=e[h])&&(c=(a<3?n(c):a>3?n(t,o,c):n(t,o))||c);return a>3&&c&&Object.defineProperty(t,o,c),c};let xe=class xe extends gt{constructor(){super(...arguments),this.arrow=!1,this.hover=!1,this.placement="top",this.popoverId=`popover_${Math.random().toString(16).slice(2)}`,this.srVisible=!1,this.open=!1,this.isTrackingOutside=!1}static{this.styles=[eu,ed,e6]}static{this.elementName="gk-popover"}firstUpdated(e){let t=this.triggerSlot.assignedElements()[0];this.triggerEl=t instanceof HTMLSlotElement?t.assignedElements({flatten:!0})[0]:t}async connectedCallback(){super.connectedCallback(),await this.updateComplete,await this.updateToggle(),null==this._toggleHandler&&(this._toggleHandler=this.handleToggle.bind(this)),this.hover?(this.triggerEl?.addEventListener("mouseover",this._toggleHandler,!1),this.triggerEl?.addEventListener("mouseout",this._toggleHandler,!1)):this.triggerEl?.addEventListener("focus",this._toggleHandler,!1)}disconnectedCallback(){super.disconnectedCallback(),null!=this._toggleHandler&&(this.triggerEl?.removeEventListener("focus",this._toggleHandler,!1),this.triggerEl?.removeEventListener("mouseover",this._toggleHandler,!1),this.triggerEl?.removeEventListener("mouseout",this._toggleHandler,!1),this._toggleHandler=void 0),this.disposeTrackOutside()}handleToggle(e){e.composedPath().includes(this.triggerEl)&&(this.open=!this.open,this.updateToggle())}async updateToggle(){this.open?(await this.showPopover(),null!=this.popoverEl&&window.requestAnimationFrame(()=>{this.popoverEl?.focus()})):this.hidePopover()}handleDocumentEvent(e){!1!==this.open&&(e.composedPath().includes(this)||this.hidePopover())}trackOutside(){this.hover||this.isTrackingOutside||!this.open||(this.isTrackingOutside=!0,null==this._documentEventHandler&&(this._documentEventHandler=this.handleDocumentEvent.bind(this)),document.addEventListener("click",this._documentEventHandler,!1),document.addEventListener("focusin",this._documentEventHandler,!1))}disposeTrackOutside(){this.isTrackingOutside&&(this.isTrackingOutside=!1,null!=this._documentEventHandler&&(document.removeEventListener("click",this._documentEventHandler,!1),window.removeEventListener("focusin",this._documentEventHandler,!1),this._documentEventHandler=void 0))}async updatePositioning(){var e,t;let o,r=[{name:"offset",options:6,async fn(e){let{x:t,y:o}=e,r=await async function(e,t){let{placement:o,platform:r,elements:n}=e,a=await (null==r.isRTL?void 0:r.isRTL(n.floating)),c=e_(o),h=ek(o),d="y"===eC(o),p=["left","top"].includes(c)?-1:1,u=a&&d?-1:1,g=ew(6,e),{mainAxis:f,crossAxis:m,alignmentAxis:b}="number"==typeof g?{mainAxis:g,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...g};return h&&"number"==typeof b&&(m="end"===h?-1*b:b),d?{x:m*u,y:f*p}:{x:f*p,y:m*u}}(e,6);return{x:t+r.x,y:o+r.y,data:r}}},(void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var o,r,n,a,c;let{placement:h,middlewareData:d,rects:p,initialPlacement:u,platform:g,elements:f}=e,{mainAxis:m=!0,crossAxis:b=!0,fallbackPlacements:v,fallbackStrategy:y="bestFit",fallbackAxisSideDirection:w="none",flipAlignment:_=!0,...k}=ew(t,e);if(null!=(o=d.arrow)&&o.alignmentOffset)return{};let x=e_(h),C=e_(u)===u,S=await (null==g.isRTL?void 0:g.isRTL(f.floating)),A=v||(C||!_?[eA(u)]:function(e){let t=eA(e);return[eS(e),t,eS(t)]}(u));v||"none"===w||A.push(...function(e,t,o,r){let n=ek(e),a=function(e,t,o){let r=["left","right"],n=["right","left"];switch(e){case"top":case"bottom":return o?t?n:r:t?r:n;case"left":case"right":return t?["top","bottom"]:["bottom","top"];default:return[]}}(e_(e),"start"===o,r);return n&&(a=a.map(e=>e+"-"+n),t&&(a=a.concat(a.map(eS)))),a}(u,_,w,S));let E=[u,...A],P=await eR(e,k),I=[],R=(null==(r=d.flip)?void 0:r.overflows)||[];if(m&&I.push(P[x]),b){let e=function(e,t,o){void 0===o&&(o=!1);let r=ek(e),n=ex(eC(e)),a=e$(n),c="x"===n?r===(o?"end":"start")?"right":"left":"start"===r?"bottom":"top";return t.reference[a]>t.floating[a]&&(c=eA(c)),[c,eA(c)]}(h,p,S);I.push(P[e[0]],P[e[1]])}if(R=[...R,{placement:h,overflows:I}],!I.every(e=>e<=0)){let e=((null==(n=d.flip)?void 0:n.index)||0)+1,t=E[e];if(t)return{data:{index:e,overflows:R},reset:{placement:t}};let o=null==(a=R.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:a.placement;if(!o)switch(y){case"bestFit":{let e=null==(c=R.map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:c[0];e&&(o=e);break}case"initialPlacement":o=u}if(h!==o)return{reset:{placement:o}}}return{}}}),{name:"shift",options:e={padding:5},async fn(t){let{x:o,y:r,placement:n}=t,{mainAxis:a=!0,crossAxis:c=!1,limiter:h={fn:e=>{let{x:t,y:o}=e;return{x:t,y:o}}},...d}=ew(e,t),p={x:o,y:r},u=await eR(t,d),g=eC(e_(n)),f=ex(g),m=p[f],b=p[g];if(a){let e="y"===f?"bottom":"right";m=ef(m+u["y"===f?"top":"left"],eg(m,m-u[e]))}if(c){let e="y"===g?"bottom":"right";b=ef(b+u["y"===g?"top":"left"],eg(b,b-u[e]))}let v=h.fn({...t,[f]:m,[g]:b});return{...v,data:{x:v.x-o,y:v.y-r}}}}];this.arrowEl&&r.push({name:"arrow",options:o={element:this.arrowEl},async fn(e){let{x:t,y:r,placement:n,rects:a,platform:c,elements:h,middlewareData:d}=e,{element:p,padding:u=0}=ew(o,e)||{};if(null==p)return{};let g=eE(u),f={x:t,y:r},m=ex(eC(n)),b=e$(m),v=await c.getDimensions(p),y="y"===m,w=y?"clientHeight":"clientWidth",_=a.reference[b]+a.reference[m]-f[m]-a.floating[b],k=f[m]-a.reference[m],x=await (null==c.getOffsetParent?void 0:c.getOffsetParent(p)),C=x?x[w]:0;C&&await (null==c.isElement?void 0:c.isElement(x))||(C=h.floating[w]||a.floating[b]);let S=C/2-v[b]/2-1,A=eg(g[y?"top":"left"],S),E=eg(g[y?"bottom":"right"],S),P=C-v[b]-E,I=C/2-v[b]/2+(_/2-k/2),R=ef(A,eg(I,P)),T=!d.arrow&&null!=ek(n)&&I!=R&&a.reference[b]/2-(I<A?A:E)-v[b]/2<0,M=T?I<A?I-A:I-P:0;return{[m]:f[m]+M,data:{[m]:R,centerOffset:I-R-M,...T&&{alignmentOffset:M}},reset:T}}}),await ((e,t,o)=>{let r=new Map,n={platform:e3,...o},a={...n.platform,_c:r};return(async(e,t,o)=>{let{placement:r="bottom",strategy:n="absolute",middleware:a=[],platform:c}=o,h=a.filter(Boolean),d=await (null==c.isRTL?void 0:c.isRTL(t)),p=await c.getElementRects({reference:e,floating:t,strategy:n}),{x:u,y:g}=eI(p,r,d),f=r,m={},b=0;for(let o=0;o<h.length;o++){let{name:a,fn:v}=h[o],{x:y,y:w,data:_,reset:k}=await v({x:u,y:g,initialPlacement:r,placement:f,strategy:n,middlewareData:m,rects:p,platform:c,elements:{reference:e,floating:t}});u=null!=y?y:u,g=null!=w?w:g,m={...m,[a]:{...m[a],..._}},k&&b<=50&&(b++,"object"==typeof k&&(k.placement&&(f=k.placement),k.rects&&(p=!0===k.rects?await c.getElementRects({reference:e,floating:t,strategy:n}):k.rects),{x:u,y:g}=eI(p,f,d)),o=-1)}return{x:u,y:g,placement:f,strategy:n,middlewareData:m}})(e,t,{...n,platform:a})})(this.triggerEl,this.popoverEl,{middleware:r,placement:this.placement}).then(({x:e,y:t,placement:o,middlewareData:r})=>{if(Object.assign(this.popoverEl.style,{left:`${e}px`,top:`${t}px`}),this.arrowEl){let e=r.arrow?.x,t=r.arrow?.y,n={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];Object.assign(this.arrowEl.style,{left:null!=e?`${e}px`:"",top:null!=t?`${t}px`:"",right:"",bottom:"",[n]:"-4px"})}})}async showPopover(){this.open=!0,null!=this.triggerEl&&(this.triggerEl.ariaExpanded="true"),this.srVisible?this.popoverEl.classList.remove("sr-only"):this.popoverEl.removeAttribute("hidden"),await this.updatePositioning(),this.trackOutside()}hidePopover(){this.open=!1,null!=this.triggerEl&&(this.triggerEl.ariaExpanded="false"),this.srVisible?this.popoverEl.classList.add("sr-only"):this.popoverEl.setAttribute("hidden","true"),this.disposeTrackOutside()}get arrowMarkup(){return this.arrow?Y`<div part="arrow" class="arrow"></div>`:""}render(){return Y`<slot name="trigger" aria-describedby="${this.popoverId}"></slot><div class="popover ${this.srVisible&&"sr-only"}" ?hidden="${!this.srVisible}" id="${this.popoverId}" part="popover" role="tooltip"><slot></slot>${this.arrowMarkup}</div>`}};e7([el({type:Boolean})],xe.prototype,"arrow",void 0),e7([el({type:Boolean})],xe.prototype,"hover",void 0),e7([el()],xe.prototype,"placement",void 0),e7([el({attribute:"popover-id"})],xe.prototype,"popoverId",void 0),e7([el({attribute:"sr-visible",type:Boolean})],xe.prototype,"srVisible",void 0),e7([eh('slot[name="trigger"]')],xe.prototype,"triggerSlot",void 0),e7([eh(".popover")],xe.prototype,"popoverEl",void 0),e7([eh(".arrow")],xe.prototype,"arrowEl",void 0),e7([el({...void 0,state:!0,attribute:!1})],xe.prototype,"open",void 0);let e8=u`gk-popover::part(popover){background:var(--gk-tooltip-background-color,#000);border-radius:var(--gk-tooltip-border-radius,0);color:var(--gk-tooltip-font-color,#fff);font-size:var(--gk-tooltip-font-size, 14px);font-weight:var(--gk-tooltip-font-weight,bold);line-height:var(--gk-tooltip-line-height, 14px);max-width:var(--gk-tooltip-max-width,none);padding:var(--gk-tooltip-padding,10px 16px);text-align:var(--gk-tooltip-text-align,left);width:max-content}`;let $e=class $e extends gt{constructor(){super(...arguments),this.srVisible=!1}static{this.styles=[eu,ed,e8]}static{this.elementName="gk-tooltip"}static{this.components=[xe]}render(){return Y`<gk-popover arrow hover ?sr-visible="${this.srVisible}" part="base"><slot name="trigger" slot="trigger"></slot><slot></slot></gk-popover>`}};!function(e,t,o,r){var n,a=arguments.length,c=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,r);else for(var h=e.length-1;h>=0;h--)(n=e[h])&&(c=(a<3?n(c):a>3?n(t,o,c):n(t,o))||c);a>3&&c&&Object.defineProperty(t,o,c)}([el({attribute:"sr-visible",type:Boolean})],$e.prototype,"srVisible",void 0);let e4=u`:host{display:inline-block;vertical-align:middle;font-weight:700}.deletions{color:var(--gk-deletions-color,#fe5955);padding-left:4px}.additions{color:var(--gk-additions-color,#74b666);padding-right:4px}`;let Se=class Se extends gt{constructor(){super(...arguments),this.tooltipText="Lines Added/Removed",this.tooltipId=`additions-deletions_${Math.random().toString(16).slice(2)}`}static{this.styles=e4}static{this.elementName="gk-additions-deletions"}static{this.components=[$e]}render(){return Y`<gk-tooltip sr-visible tooltip-id="${this.tooltipId}"><span slot="trigger" part="base"><span class="additions">+<slot name="additions"></slot></span>/ <span class="deletions">−<slot name="deletions"></slot></span></span><span>${this.tooltipText}</span></gk-tooltip>`}};!function(e,t,o,r){var n,a=arguments.length,c=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,r);else for(var h=e.length-1;h>=0;h--)(n=e[h])&&(c=(a<3?n(c):a>3?n(t,o,c):n(t,o))||c);a>3&&c&&Object.defineProperty(t,o,c)}([el({attribute:"tooltip-text"})],Se.prototype,"tooltipText",void 0);let te=new Set(["children","localName","ref","style","className"]),tt=new WeakMap,ti=(e,t,o,r,n)=>{let a,c,h=n?.[t];void 0===h||o===r?(e[t]=o,null==o&&t in HTMLElement.prototype&&e.removeAttribute(t)):(void 0===(a=tt.get(e))&&tt.set(e,a=new Map),c=a.get(h),void 0!==o?void 0===c?(a.set(h,c={handleEvent:o}),e.addEventListener(h,c)):c.handleEvent=o:void 0!==c&&(a.delete(h),e.removeEventListener(h,c)))},to=({react:e,tagName:t,elementClass:o,events:r,displayName:n})=>{let a=new Set(Object.keys(r??{})),c=e.forwardRef((n,c)=>{let h=e.useRef(null),d=e.useRef(null),p={},u={};for(let[e,t]of Object.entries(n))te.has(e)?p["className"===e?"class":e]=t:a.has(e)||e in o.prototype?u[e]=t:p[e]=t;return e.useLayoutEffect(()=>{if(null!==d.current){for(let e in u)ti(d.current,e,n[e],h.current?h.current[e]:void 0,r);h.current=n}}),e.useLayoutEffect(()=>{d.current?.removeAttribute("defer-hydration")},[]),p.suppressHydrationWarning=!0,e.createElement(t,{...p,ref:e=>{d.current=e,"function"==typeof c?c(e):null!==c&&(c.current=e)}})});return c.displayName=n??o.name,c};var ts=eO(294);let tr=to({react:ts,tagName:Se.elementName,elementClass:Se}),tn=u`:host{display:inline-block}.avatar{vertical-align:middle;background-color:var(--gk-avatar-background-color,#e0e0e0);width:var(--gk-avatar-size,30px);aspect-ratio:1/1;border-radius:50%;transition:.2s}.avatar.is-offline{border:2px solid var(--gk-avatar-offline-outline-color,#3d424d)}.avatar.is-online{border:2px solid var(--gk-avatar-online-outline-color,#60b864)}.avatar--image{display:inline-block;object-fit:cover;object-position:50% 50%}.avatar--content{display:inline-flex;justify-content:center;align-items:center;font-size:var(--gk-avatar-font-size, 11px);line-height:var(--gk-avatar-size, 30px);text-align:center}.avatar:hover{transform:scale(1.2)}`,ta=u`:host{display:inline-block}.avatar-group{display:inline-flex;flex-direction:row;justify-content:center;align-items:center}.avatar-group::slotted(:not(:first-child)){margin-left:calc(var(--gk-avatar-size,2.4rem) * -.2)}.avatar-group:focus-within::slotted(*),.avatar-group:hover::slotted(*){opacity:.5}.avatar-group:focus-within::slotted(:focus),.avatar-group:hover::slotted(:hover){opacity:1;z-index:var(--gk-avatar-selected-zindex,1)!important}`;var tl=function(e,t,o,r){var n,a=arguments.length,c=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,r);else for(var h=e.length-1;h>=0;h--)(n=e[h])&&(c=(a<3?n(c):a>3?n(t,o,c):n(t,o))||c);return a>3&&c&&Object.defineProperty(t,o,c),c};let He=class He extends gt{static{this.styles=[eu,tn]}static{this.elementName="gk-avatar"}get indicatorClass(){return this.indicator?`is-${this.indicator}`:""}render(){return this.src?Y`<img src="${this.src}" class="avatar avatar--image${this.indicatorClass}" part="base" alt="">`:Y`<slot class="avatar avatar--content${this.indicatorClass}" part="base"></slot>`}};tl([el()],He.prototype,"src",void 0),tl([el()],He.prototype,"indicator",void 0);let Le=class Le extends gt{static{this.elementName="gk-avatar-group"}static{this.styles=[eu,ta]}render(){return Y`<slot class="avatar-group" part="base"></slot>`}};let tc=to({react:ts,tagName:He.elementName,elementClass:He}),th=to({react:ts,tagName:Le.elementName,elementClass:Le}),td=u`.badge{border-radius:var(--gk-badge-border-radius,22px);display:inline-block;font-size:var(--gk-badge-font-size, 12px)}.badge--outline{border-color:var(--gk-badge-outline-color,#ffffff99);border-style:solid;border-width:var(--gk-badge-outline-border-width,1px);color:var(--gk-badge-outline-color,#ffffff99);padding:var(--gk-badge-outline-padding,0 8px)}.badge--filled{background-color:var(--gk-badge-filled-background-color,#2b2f36);color:var(--gk-badge-filled-color,#ffffff99);padding:var(--gk-badge-filled-padding,2px 6px)}`;let Be=class Be extends gt{constructor(){super(...arguments),this.variant="outline"}static{this.styles=td}static{this.elementName="gk-badge"}render(){return Y`<slot class="${`badge badge--${this.variant}`}" part="base"></slot>`}};!function(e,t,o,r){var n,a=arguments.length,c=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,r);else for(var h=e.length-1;h>=0;h--)(n=e[h])&&(c=(a<3?n(c):a>3?n(t,o,c):n(t,o))||c);a>3&&c&&Object.defineProperty(t,o,c)}([el()],Be.prototype,"variant",void 0);let tp=to({react:ts,tagName:Be.elementName,elementClass:Be}),tu=u`:host{display:inline-block}button{appearance:none;border:none;padding:8px 12px}button:hover{cursor:pointer}button:focus{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.button--ghost{background:0 0;color:var(--gk-button-ghost-color,#fff)}.button--ghost:focus,.button--ghost:hover{text-decoration:underline}.button--ghost:active{color:var(--gk-button-ghost-color-active,#adb8c2)}.button--ghost:disabled,.button--ghost:disabled:active,.button--ghost:disabled:focus,.button--ghost:disabled:hover{color:var(--gk-button-ghost-color-disabled,#ffffff60);cursor:default;text-decoration:none}.button--outline{background:0 0;border-radius:2px;border-style:solid;border-width:var(--gk-button-outline-border-width,1px);color:var(--gk-button-outline-color,#fff)}.button--outline:focus,.button--outline:hover{background-color:#ffffff50}.button--outline:active{background-color:var(--gk-button-outline-color-active,#adb8c2)}.button--outline:disabled,.button--outline:disabled:active,.button--outline:disabled:focus,.button--outline:disabled:hover{background-color:transparent;border-color:var(--gk-button-outline-color-disabled,#ffffff60);color:var(--gk-button-outline-color-disabled,#ffffff60);cursor:default;text-decoration:none}`;var tg=function(e,t,o,r){var n,a=arguments.length,c=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,r);else for(var h=e.length-1;h>=0;h--)(n=e[h])&&(c=(a<3?n(c):a>3?n(t,o,c):n(t,o))||c);return a>3&&c&&Object.defineProperty(t,o,c),c};let Ge=class Ge extends gt{constructor(){super(...arguments),this.disabled=!1,this.type="button",this.variant="ghost"}static{this.styles=tu}static{this.elementName="gk-button"}get allClasses(){let e=["button"];return e.push(`button--${this.variant}`),e.join(" ")}_handleClick(e){e.stopPropagation(),this.dispatchEvent(new Event("click"))}render(){return Y`<button class="${this.allClasses}" @click="${this._handleClick}" ?disabled="${this.disabled}" part="base" type="${this.type}"><slot name="prefix"></slot><slot></slot><slot name="suffix"></slot></button>`}};tg([el({type:Boolean,reflect:!0})],Ge.prototype,"disabled",void 0),tg([el({reflect:!0})],Ge.prototype,"type",void 0),tg([el()],Ge.prototype,"variant",void 0);let tf=to({react:ts,tagName:Ge.elementName,elementClass:Ge,events:{onClick:"click"}}),tm=u`:host{display:inline-block}.complexity-indicator{display:inline-flex}.complexity-indicator__box{display:block;height:var(--gk-complexity-indicator-box-size,8px);width:var(--gk-complexity-indicator-box-size,8px)}.complexity-indicator__box:not(:last-of-type){margin-right:var(--gk-complexity-indicator-space-between,2px)}.complexity-indicator--level-1 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-1,#5cb85c)}.complexity-indicator--level-2 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-2,#4d88ff)}.complexity-indicator--level-3 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-3,#de9b43)}.complexity-indicator--level-4 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-4,#d9413d)}`;var tb=function(e,t,o,r){var n,a=arguments.length,c=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,r);else for(var h=e.length-1;h>=0;h--)(n=e[h])&&(c=(a<3?n(c):a>3?n(t,o,c):n(t,o))||c);return a>3&&c&&Object.defineProperty(t,o,c),c};let Je=class Je extends gt{constructor(){super(...arguments),this.level=1,this.label="Complexity of pull request"}static{this.styles=[eu,ed,tm]}static{this.elementName="gk-complexity-indicator"}render(){let e=[];for(let t=0;t<this.level;t++)e.push(t);return Y`<div class="complexity-indicator complexity-indicator--level-${this.level}" part="base"><span class="sr-only">${this.label}</span> ${e.map(()=>Y`<span class="complexity-indicator__box"></span>`)}</div>`}};tb([el({type:Number})],Je.prototype,"level",void 0),tb([el()],Je.prototype,"label",void 0);let tv=to({react:ts,tagName:Je.elementName,elementClass:Je}),ty=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,tw=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,t_=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]],tk=new Map,tx=["th","st","nd","rd"];var t$=function(e,t,o,r){var n,a=arguments.length,c=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,r);else for(var h=e.length-1;h>=0;h--)(n=e[h])&&(c=(a<3?n(c):a>3?n(t,o,c):n(t,o))||c);return a>3&&c&&Object.defineProperty(t,o,c),c};let po=class po extends gt{constructor(){super(...arguments),this.date=new Date,this.format="MMMM Do, YYYY h:mma"}static{this.styles=[eu]}static{this.elementName="gk-date-from"}static{this.components=[$e]}get relativeTime(){return function(n,a){let c=("number"==typeof n?n:n.getTime())-(new Date).getTime();for(let[n,h,d,p]of t_){let u=Math.abs(c);if(u>=h||1e3===h)return a?(null==e&&(e=null!=r?r.resolvedOptions().locale:null!=o?o.resolvedOptions().locale:(r=new Intl.RelativeTimeFormat(t,{localeMatcher:"best fit",numeric:"always",style:"narrow"})).resolvedOptions().locale),"en"===e||e?.startsWith("en-")?`${Math.round(u/d)}${p}`:(null==r&&(r=new Intl.RelativeTimeFormat(t,{localeMatcher:"best fit",numeric:"always",style:"narrow"})),r.format(Math.round(c/d),n))):(null==o&&(o=new Intl.RelativeTimeFormat(t,{localeMatcher:"best fit",numeric:"auto",style:"long"})),o.format(Math.round(c/d),n))}return""}(this.date,!0)}get isDate(){return this.date&&!isNaN(this.date.getMilliseconds())}render(){if(this.isDate)return Y`<gk-tooltip><time datetime="${this.date}" part="base" slot="trigger">${this.relativeTime}</time><span>${function(e,o,r,n=!0){let a=`${(void 0)??""}:${o=o??void 0}`,c=tk.get(a);if(null==c){let e,r=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};let t=tw.exec(e);if(null!=t?.groups){let{dateStyle:e,timeStyle:o}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:o||void 0}}let o={localeMatcher:"best fit"};for(let{groups:t}of e.matchAll(ty))if(null!=t)for(let e in t){let r=t[e];if(null!=r)switch(e){case"year":o.year=4===r.length?"numeric":"2-digit";break;case"month":switch(r.length){case 4:o.month="long";break;case 3:o.month="short";break;case 2:o.month="2-digit";break;case 1:o.month="numeric"}break;case"day":o.day="DD"===r?"2-digit":"numeric";break;case"weekday":switch(r.length){case 4:o.weekday="long";break;case 3:o.weekday="short";break;case 2:o.weekday="narrow"}break;case"hour":o.hour=2===r.length?"2-digit":"numeric",o.hour12="hh"===r||"h"===r;break;case"minute":o.minute=2===r.length?"2-digit":"numeric";break;case"second":o.second=2===r.length?"2-digit":"numeric";break;case"fractionalSecond":o.fractionalSecondDigits=3;break;case"dayPeriod":o.dayPeriod="narrow",o.hour12=!0,o.hourCycle="h12";break;case"timeZoneName":o.timeZoneName=2===r.length?"long":"short"}}return o}(o);e=t,c=new Intl.DateTimeFormat(e,r),n&&tk.set(a,c)}if(null==o||tw.test(o))return c.format(e);let h=c.formatToParts(e);return o.replace(ty,(o,a,c,d,p,u,g,f,m,b,v,y,w,_,k)=>{if(null!=a)return a.substring(1,a.length-1);for(let o in k){let a=k[o];if(null==a)continue;let c=h.find(e=>e.type===o);if("Do"===a&&"day"===c?.type){var x=Number(c.value);let e=x%100;return`${x}${tx[(e-20)%10]??tx[e]??tx[0]}`}if("a"===a&&"dayPeriod"===c?.type){let o=(function(e){let o=`${r??""}:time:${e}`,a=tk.get(o);if(null==a){let c;c=null==r?t:"system"===r?void 0:[r],a=new Intl.DateTimeFormat(c,{localeMatcher:"best fit",timeStyle:e}),n&&tk.set(o,a)}return a})("short").formatToParts(e).find(e=>"dayPeriod"===e.type);return`${(o??c)?.value??""}`}return c?.value??""}return""})}(this.date,this.format??"MMMM Do, YYYY h:mma")}</span></gk-tooltip>`}};t$([el({converter:(n=navigator.language,{toAttribute:e=>e.toLocaleDateString(n),fromAttribute:e=>new Date(e)}),reflect:!0})],po.prototype,"date",void 0),t$([el()],po.prototype,"format",void 0);let tC=to({react:ts,tagName:po.elementName,elementClass:po}),tS=u`.row--heading{text-transform:uppercase;color:var(--gk-text-secondary-color,rgba(255,255,255,.6))}.content::slotted(:not(:first-child)){border-top:1px solid var(--gk-divider-color,rgba(255,255,255,.04))}`,tA=u`:host{display:contents}.row{display:flex;flex-direction:row;padding:var(--gk-focus-row-padding,8px)}.row:not(.row--heading):focus-within,.row:not(.row--heading):hover{background-color:var(--gk-focus-background-color-hover,rgba(255,255,255,.04))}.row:not(.row--heading):focus-within{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.row__key{flex:none;display:block;width:var(--gk-focus-row-key-min-width,64px)}@media (max-width:720px){.row__key{width:var(--gk-focus-row-key-min-width-screen-sm,32px)}}.row__content{flex:1;display:block}.row__pin{display:block;min-width:var(--gk-focus-row-pin-min-width,35px)}.row__date{display:block;min-width:var(--gk-focus-row-date-min-width,48px)}@media (max-width:720px){.row--heading .item__date,.row--heading .item__secondary{display:none}}`,tE=u`.item{display:flex;flex-direction:row;align-items:center;gap:8px}@media (max-width:720px){.item{flex-direction:column;align-items:stretch}}.item__primary{flex:1;display:flex;flex-direction:row;gap:12px}.item__type{flex:none}@media (max-width:720px){.item__type{order:-1}}.item__content{display:flex;flex-direction:column;gap:6px;min-width:var(--gk-focus-item-content-min-width,92px)}@media (max-width:720px){.item__content{align-items:stretch}}.item__content>p{margin:0}.item__secondary{flex:none;display:flex;flex-direction:row;align-items:center;gap:8px}@media (max-width:720px){.item__secondary{flex-wrap:wrap;padding-left:36px}}.item__people{display:block;min-width:var(--gk-focus-item-people-min-width,92px)}@media (max-width:720px){.item__people{min-width:0}}.item__repo{display:block;width:var(--gk-focus-item-repo-min-width,150px)}@media (max-width:720px){.item__repo{width:max-content}}@media (max-width:720px){.item__date{align-self:flex-start;min-width:0}}.item__actions{display:block;min-width:var(--gk-focus-item-actions-min-width,70px)}@media (max-width:720px){.item__actions{width:100%}}`;let yo=class yo extends gt{static{this.styles=[eu,tE]}static{this.elementName="gk-focus-item"}render(){return Y`<div class="item"><div class="item__primary"><div class="item__content" part="base"><slot></slot></div></div><div class="item__secondary"><slot name="people" class="item__people" part="people"></slot><slot name="repo" class="item__repo" part="repo"></slot><slot name="actions" class="item__actions" part="actions"></slot></div></div>`}};let vo=class vo extends gt{static{this.styles=[eu,tA]}static{this.elementName="gk-focus-row"}render(){return Y`<div class="row" part="row"><slot name="pin" class="row__pin" part="pin"></slot><div class="row__date" part="date"><slot name="date"></slot></div><div class="row__key" part="key"><slot name="key"></slot></div><slot class="row__content"></slot></div>`}};let bo=class bo extends gt{static{this.styles=[eu,tA,tE,tS]}static{this.elementName="gk-focus-container"}render(){return Y`<div class="row row--heading"><slot name="pin" class="row__pin" part="pin">Pinned</slot><slot name="date" class="row__date" part="date">Updated</slot><slot name="key" class="row__key" part="key">Key</slot><div class="row__content"><div class="item"><div class="item__primary"><slot name="item" class="item__content" part="item">Item</slot></div><div class="item__secondary"><slot name="people" class="item__people" part="people">People</slot><slot name="repo" class="item__repo" part="repo">Repo</slot><slot name="actions" class="item__actions" part="actions">Action</slot></div></div></div></div><slot class="content"></slot>`}};let tP=to({react:ts,tagName:yo.elementName,elementClass:yo}),tI=to({react:ts,tagName:vo.elementName,elementClass:vo}),tR=to({react:ts,tagName:bo.elementName,elementClass:bo});let $o=class $o{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};let tT=(a=class extends $o{constructor(e){if(super(e),1!==e.type||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.it){for(let o in this.it=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),t)t[o]&&!this.st?.has(o)&&this.it.add(o);return this.render(t)}let o=e.element.classList;for(let e of this.it)e in t||(o.remove(e),this.it.delete(e));for(let e in t){let r=!!t[e];r===this.it.has(e)||this.st?.has(e)||(r?(o.add(e),this.it.add(e)):(o.remove(e),this.it.delete(e)))}return X}},(...e)=>({_$litDirective$:a,values:e})),tz=u`:host{display:block}.input-container{background-color:var(--gk-input-background-color,#000);border:1px solid var(--gk-input-border-color,#ffffff14);border-radius:var(--gk-input-border-radius,2px);color:var(--gk-input-color,#ffffff99);cursor:text;display:inline-flex;justify-content:start;padding:var(--gk-input-padding,10px);vertical-align:middle;width:100%}.input{appearance:none;background:inherit;border:none;box-shadow:none;color:inherit;flex:1 1 auto;font:inherit;height:100%;margin:0;outline:0;padding:0}.input-container:focus-within{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}`;var tM=function(e,t,o,r){var n,a=arguments.length,c=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,r);else for(var h=e.length-1;h>=0;h--)(n=e[h])&&(c=(a<3?n(c):a>3?n(t,o,c):n(t,o))||c);return a>3&&c&&Object.defineProperty(t,o,c),c};let Ro=class Ro extends gt{static{this.formAssociated=!0}static{this.styles=[eu,ed,tz]}static{this.elementName="gk-input"}constructor(){super(),this.disabled=!1,this.labelVisibility="visible",this.required=!1,this.type="text",this.value="";try{this.internals=this.attachInternals()}catch{}}firstUpdated(){this.internals&&this.internals.setFormValue(this.value)}render(){return Y`<div class="field"><label class="${tT({label:!0,"sr-only":"sr-only"===this.labelVisibility})}" for="input" ?hidden="${"hidden"===this.labelVisibility}" part="field-label"><slot name="label">${this.label}</slot></label><div class="${tT({"input-container":!0,"input-container--disabled":this.disabled})}"><slot name="prefix" part="prefix"></slot><input autocomplete="${this.autocomplete??J}" autocorrect="${this.autocorrect??J}" class="input" ?disabled="${this.disabled}" id="input" name="${this.name??J}" part="input" placeholder="${this.placeholder??J}" type="${this.type}" @input="${this.onInput}"><slot name="suffix" part="suffix"></slot></div></div>`}onInput(e){this.value=e.target.value,this.internals&&this.internals.setFormValue(this.value)}};tM([el()],Ro.prototype,"autocomplete",void 0),tM([el()],Ro.prototype,"autocorrect",void 0),tM([el({type:Boolean,reflect:!0})],Ro.prototype,"disabled",void 0),tM([el()],Ro.prototype,"label",void 0),tM([el({attribute:"label-visibility"})],Ro.prototype,"labelVisibility",void 0),tM([el()],Ro.prototype,"name",void 0),tM([el()],Ro.prototype,"placeholder",void 0),tM([el({type:Boolean,reflect:!0})],Ro.prototype,"required",void 0),tM([el({reflect:!0})],Ro.prototype,"type",void 0),tM([el()],Ro.prototype,"value",void 0);let tO=u`:host{display:inline-block}.menu{border:1px solid var(--gk-menu-border-color,#2a2f35);border-radius:4px;background:var(--gk-menu-background-color,#32363f);box-shadow:0 5px 16px 0 rgba(0,0,0,.85);display:inline-block;padding:4px 0}`,tL=u`:host{display:block}.menu-item{font-size:var(--gk-menu-item-font-size, 12px);padding:5px 6px}.menu-item:focus,.menu-item:hover{background-color:var(--gk-menu-item-background-color-hover,#4d88ff1a);cursor:pointer}.menu-item:focus{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.menu-item:active{background-color:var(--gk-menu-item-background-color-active,#4d88ff4d)}.menu-item--disabled,.menu-item--disabled:active,.menu-item--disabled:focus,.menu-item--disabled:hover{background-color:initial;color:var(--gk-menu-item-font-color-disabled,#ffffff60);cursor:default;pointer-events:none}`,tD=u`:host{display:block}.menu-label{cursor:default;display:inline-block;font-size:var(--gk-menu-label-font-size, 12px);font-weight:700;padding:5px 6px}`;let Mo=class Mo extends gt{constructor(){super(...arguments),this._currentMenuItem=void 0}static{this.styles=[eu,tO]}static{this.elementName="gk-menu"}_handleSlotChange(){let e=this._getAllItems();e.length&&this._setCurrentItem(e[0])}_handleClick(e){e.stopPropagation();let t=e.target.closest("gk-menu-item");if(!t||t.disabled)return;this._currentMenuItem=t;let o=new CustomEvent("select",{detail:{target:t}});this.dispatchEvent(o)}_handleKeyDown(e){if("Enter"===e.key||" "===e.key)return e.preventDefault(),void this._currentMenuItem?.click();if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=this._getAllItems(),o=t.length,r=this._currentMenuItem?t.indexOf(this._currentMenuItem):0;"ArrowUp"===e.key?r=(r-1+o)%o:"ArrowDown"===e.key?r=(r+1)%o:"Home"===e.key?r=0:"End"===e.key&&(r=o-1),this._setCurrentItem(t[r]),t[r].focus()}}_handleMouseDown(e){let t=e.target;this._isMenuItem(t)&&this._setCurrentItem(t)}_isMenuItem(e){let t=e.getAttribute("role")||"";return"gk-menu-item"===e.tagName.toLowerCase()||["menuitem","menuitemcheckbox","menuitemradio"].includes(t)}_setCurrentItem(e){this._currentMenuItem=e,this._setTabIndex()}_getAllItems(){return this.slotChildren.filter(e=>this._isMenuItem(e))}_setTabIndex(){this._getAllItems().forEach(e=>{e.setAttribute("tabindex",this._currentMenuItem===e?"0":"-1")})}render(){return Y`<slot class="menu" @click="${this._handleClick}" @keydown="${this._handleKeyDown}" @mousedown="${this._handleMouseDown}" @slotchange="${this._handleSlotChange}" part="base" role="menu"></slot>`}};!function(e,t,o,r){var n,a=arguments.length,c=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,r);else for(var h=e.length-1;h>=0;h--)(n=e[h])&&(c=(a<3?n(c):a>3?n(t,o,c):n(t,o))||c);a>3&&c&&Object.defineProperty(t,o,c)}([(e9={flatten:!0},(e,t)=>{let{slot:o,selector:r}=e9??{},n="slot"+(o?`[name=${o}]`:":not([name])");return ec(e,t,{get(){let e=this.renderRoot?.querySelector(n),t=e?.assignedElements(e9)??[];return void 0===r?t:t.filter(e=>e.matches(r))}})})],Mo.prototype,"slotChildren",void 0);let Do=class Do extends gt{constructor(){super(...arguments),this.disabled=!1}static{this.styles=[eu,tL]}static{this.elementName="gk-menu-item"}get allClasses(){return this.disabled?"menu-item--disabled":""}render(){return Y`<div aria-disabled="${this.disabled}" class="menu-item ${this.allClasses}" part="base" role="menuitem"><slot name="prefix"></slot><slot></slot><slot name="suffix"></slot></div>`}};!function(e,t,o,r){var n,a=arguments.length,c=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,r);else for(var h=e.length-1;h>=0;h--)(n=e[h])&&(c=(a<3?n(c):a>3?n(t,o,c):n(t,o))||c);a>3&&c&&Object.defineProperty(t,o,c)}([el({type:Boolean,reflect:!0})],Do.prototype,"disabled",void 0);let Ho=class Ho extends gt{static{this.styles=[eu,tD]}static{this.elementName="gk-menu-label"}render(){return Y`<slot class="menu-label" part="base"></slot>`}};let tN=to({react:ts,tagName:Mo.elementName,elementClass:Mo,events:{onClick:"select"}}),tB=to({react:ts,tagName:Do.elementName,elementClass:Do}),tF=to({react:ts,tagName:Ho.elementName,elementClass:Ho}),tj=u`:host{display:inline-block}.tag{display:inline-flex;align-items:center;vertical-align:middle;gap:8px;padding:var(--gk-tag-padding,2px 6px);border-radius:var(--gk-tag-radius,4px);background-color:var(--gk-tag-background-color,#33363e);color:var(--gk-tag-color,#85868b);max-width:100%}.tag__prefix,.tag__suffix{flex:none}.tag__label{display:inline;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tag--ghost{background-color:transparent}`;let Bo=class Bo extends gt{static{this.styles=[eu,tj]}static{this.elementName="gk-tag"}render(){return Y`<span class="tag ${this.variant?`tag--${this.variant}`:""}" part="base"><slot class="tag__prefix" name="prefix"></slot><slot class="tag__label"></slot><slot class="tag__suffix" name="suffix"></slot></span>`}};!function(e,t,o,r){var n,a=arguments.length,c=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,r);else for(var h=e.length-1;h>=0;h--)(n=e[h])&&(c=(a<3?n(c):a>3?n(t,o,c):n(t,o))||c);a>3&&c&&Object.defineProperty(t,o,c)}([el()],Bo.prototype,"variant",void 0);let tU=to({react:ts,tagName:Bo.elementName,elementClass:Bo}),tH=to({react:ts,tagName:$e.elementName,elementClass:$e})})(),eL.Tn;var eD=eL.qE,eN=(eL.HE,eL.Ct),eB=eL.zx,eF=(eL.M1,eL.sX,eL.D0,eL.fs,eL.Tw,eL.ud,eL.wt,eL.ne,eL.Ku,eL.FU,eL.XO,eL.Ze,eL.K$,eL.cX,eL.Js,eL.J9,eL.si,eL.sg,eL.hW,eL.II,eL.v2),ej=eL.sN,eU=(eL.Lb,eL.J2),eH=(eL.$$,eL.Vp,eL.u,eL.fW);eL.WV,eL.h4,eL.kZ;let eq=globalThis,eV=eq.ShadowRoot&&(void 0===eq.ShadyCSS||eq.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,eW=Symbol(),eG=new WeakMap;let css_tag_n=class css_tag_n{constructor(e,t,o){if(this._$cssResult$=!0,o!==eW)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(eV&&void 0===e){let o=void 0!==t&&1===t.length;o&&(e=eG.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&eG.set(t,e))}return e}toString(){return this.cssText}};let eK=e=>new css_tag_n("string"==typeof e?e:e+"",void 0,eW),eZ=(e,...t)=>new css_tag_n(1===e.length?e[0]:t.reduce((t,o,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[r+1],e[0]),e,eW),eY=eV?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let o of e.cssRules)t+=o.cssText;return eK(t)})(e):e,{is:eX,defineProperty:eQ,getOwnPropertyDescriptor:eJ,getOwnPropertyNames:e0,getOwnPropertySymbols:e1,getPrototypeOf:e2}=Object,e5=globalThis,e3=e5.trustedTypes,e6=e3?e3.emptyScript:"",e9=e5.reactiveElementPolyfillSupport,e7={toAttribute(e,t){switch(t){case Boolean:e=e?e6:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch{o=null}}return o}},e8=(e,t)=>!eX(e,t),e4={attribute:!0,type:String,converter:e7,reflect:!1,useDefault:!1,hasChanged:e8};Symbol.metadata??=Symbol("metadata"),e5.litPropertyMetadata??=new WeakMap;let reactive_element_y=class reactive_element_y extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=e4){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let o=Symbol(),r=this.getPropertyDescriptor(e,o,t);void 0!==r&&eQ(this.prototype,e,r)}}static getPropertyDescriptor(e,t,o){let{get:r,set:n}=eJ(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);n?.call(this,t),this.requestUpdate(e,a,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??e4}static _$Ei(){if(this.hasOwnProperty("elementProperties"))return;let e=e2(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty("finalized"))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty("properties")){let e=this.properties;for(let t of[...e0(e),...e1(e)])this.createProperty(t,e[t])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,o]of t)this.elementProperties.set(e,o)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let o of new Set(e.flat(1/0).reverse()))t.unshift(eY(o));else void 0!==e&&t.push(eY(e));return t}static _$Eu(e,t){let o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map;for(let t of this.constructor.elementProperties.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(eV)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let o of t){let t=document.createElement("style"),r=eq.litNonce;void 0!==r&&t.setAttribute("nonce",r),t.textContent=o.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$ET(e,t){let o=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,o);if(void 0!==r&&!0===o.reflect){let n=(void 0!==o.converter?.toAttribute?o.converter:e7).toAttribute(t,o.type);this._$Em=e,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(e,t){let o=this.constructor,r=o._$Eh.get(e);if(void 0!==r&&this._$Em!==r){let e=o.getPropertyOptions(r),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:e7;this._$Em=r;let a=n.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,o){if(void 0!==e){let r=this.constructor,n=this[e];if(!(((o??=r.getPropertyOptions(e)).hasChanged??e8)(n,t)||o.useDefault&&o.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,o))))return;this.C(e,t,o)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:o,reflect:r,wrapped:n},a){o&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==n||void 0!==a)||(this._$AL.has(e)||(this.hasUpdated||o||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,o]of e){let{wrapped:e}=o,r=this[t];!0!==e||this._$AL.has(t)||void 0===r||this.C(t,void 0,o,r)}}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};reactive_element_y.elementStyles=[],reactive_element_y.shadowRootOptions={mode:"open"},reactive_element_y.elementProperties=new Map,reactive_element_y.finalized=new Map,e9?.({ReactiveElement:reactive_element_y}),(e5.reactiveElementVersions??=[]).push("2.1.1");let te=globalThis,tt=te.trustedTypes,ti=tt?tt.createPolicy("lit-html",{createHTML:e=>e}):void 0,to="$lit$",ts=`lit$${Math.random().toFixed(9).slice(2)}$`,tr="?"+ts,tn=`<${tr}>`,ta=document,tl=()=>ta.createComment(""),tc=e=>null===e||"object"!=typeof e&&"function"!=typeof e,th=Array.isArray,td=e=>th(e)||"function"==typeof e?.[Symbol.iterator],tp=`[ 	
\f\r]`,tu=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,tg=/-->/g,tf=/>/g,tm=RegExp(`>|${tp}(?:([^\\s"'>=/]+)(${tp}*=${tp}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),tb=/'/g,tv=/"/g,ty=/^(?:script|style|textarea|title)$/i,tw=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),t_=tw(1),tk=(tw(2),tw(3),Symbol.for("lit-noChange")),tx=Symbol.for("lit-nothing"),t$=new WeakMap,tC=ta.createTreeWalker(ta,129);function tS(e,t){if(!th(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==ti?ti.createHTML(t):t}let tA=(e,t)=>{let o=e.length-1,r=[],n,a=2===t?"<svg>":3===t?"<math>":"",c=tu;for(let t=0;t<o;t++){let o=e[t],h,d,p=-1,u=0;for(;u<o.length&&(c.lastIndex=u,null!==(d=c.exec(o)));)u=c.lastIndex,c===tu?"!--"===d[1]?c=tg:void 0!==d[1]?c=tf:void 0!==d[2]?(ty.test(d[2])&&(n=RegExp("</"+d[2],"g")),c=tm):void 0!==d[3]&&(c=tm):c===tm?">"===d[0]?(c=n??tu,p=-1):void 0===d[1]?p=-2:(p=c.lastIndex-d[2].length,h=d[1],c=void 0===d[3]?tm:'"'===d[3]?tv:tb):c===tv||c===tb?c=tm:c===tg||c===tf?c=tu:(c=tm,n=void 0);let g=c===tm&&e[t+1].startsWith("/>")?" ":"";a+=c===tu?o+tn:p>=0?(r.push(h),o.slice(0,p)+to+o.slice(p)+ts+g):o+ts+(-2===p?t:g)}return[tS(e,a+(e[o]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),r]};let lit_html_N=class lit_html_N{constructor({strings:e,_$litType$:t},o){let r;this.parts=[];let n=0,a=0,c=e.length-1,h=this.parts,[d,p]=tA(e,t);if(this.el=lit_html_N.createElement(d,o),tC.currentNode=this.el.content,2===t||3===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(r=tC.nextNode())&&h.length<c;){if(1===r.nodeType){if(r.hasAttributes())for(let e of r.getAttributeNames())if(e.endsWith(to)){let t=p[a++],o=r.getAttribute(e).split(ts),c=/([.?@])?(.*)/.exec(t);h.push({type:1,index:n,name:c[2],strings:o,ctor:"."===c[1]?lit_html_H:"?"===c[1]?lit_html_I:"@"===c[1]?lit_html_L:lit_html_k}),r.removeAttribute(e)}else e.startsWith(ts)&&(h.push({type:6,index:n}),r.removeAttribute(e));if(ty.test(r.tagName)){let e=r.textContent.split(ts),t=e.length-1;if(t>0){r.textContent=tt?tt.emptyScript:"";for(let o=0;o<t;o++)r.append(e[o],tl()),tC.nextNode(),h.push({type:2,index:++n});r.append(e[t],tl())}}}else if(8===r.nodeType)if(r.data===tr)h.push({type:2,index:n});else{let e=-1;for(;-1!==(e=r.data.indexOf(ts,e+1));)h.push({type:7,index:n}),e+=ts.length-1}n++}}static createElement(e,t){let o=ta.createElement("template");return o.innerHTML=e,o}};function tE(e,t,o=e,r){if(t===tk)return t;let n=void 0!==r?o._$Co?.[r]:o._$Cl,a=tc(t)?void 0:t._$litDirective$;return n?.constructor!==a&&(n?._$AO?.(!1),void 0===a?n=void 0:(n=new a(e))._$AT(e,o,r),void 0!==r?(o._$Co??=[])[r]=n:o._$Cl=n),void 0!==n&&(t=tE(e,n._$AS(e,t.values),n,r)),t}let lit_html_M=class lit_html_M{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:o}=this._$AD,r=(e?.creationScope??ta).importNode(t,!0);tC.currentNode=r;let n=tC.nextNode(),a=0,c=0,h=o[0];for(;void 0!==h;){if(a===h.index){let t;2===h.type?t=new lit_html_R(n,n.nextSibling,this,e):1===h.type?t=new h.ctor(n,h.name,h.strings,this,e):6===h.type&&(t=new z(n,this,e)),this._$AV.push(t),h=o[++c]}a!==h?.index&&(n=tC.nextNode(),a++)}return tC.currentNode=ta,r}p(e){let t=0;for(let o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}};let lit_html_R=class lit_html_R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,r){this.type=2,this._$AH=tx,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){tc(e=tE(this,e,t))?e===tx||null==e||""===e?(this._$AH!==tx&&this._$AR(),this._$AH=tx):e!==this._$AH&&e!==tk&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):td(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==tx&&tc(this._$AH)?this._$AA.nextSibling.data=e:this.T(ta.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:o}=e,r="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=lit_html_N.createElement(tS(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new lit_html_M(r,this),o=e.u(this.options);e.p(t),this.T(o),this._$AH=e}}_$AC(e){let t=t$.get(e.strings);return void 0===t&&t$.set(e.strings,t=new lit_html_N(e)),t}k(e){th(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,o,r=0;for(let n of e)r===t.length?t.push(o=new lit_html_R(this.O(tl()),this.O(tl()),this,this.options)):o=t[r],o._$AI(n),r++;r<t.length&&(this._$AR(o&&o._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}};let lit_html_k=class lit_html_k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,r,n){this.type=1,this._$AH=tx,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=n,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=tx}_$AI(e,t=this,o,r){let n=this.strings,a=!1;if(void 0===n)(a=!tc(e=tE(this,e,t,0))||e!==this._$AH&&e!==tk)&&(this._$AH=e);else{let r,c,h=e;for(e=n[0],r=0;r<n.length-1;r++)(c=tE(this,h[o+r],t,r))===tk&&(c=this._$AH[r]),a||=!tc(c)||c!==this._$AH[r],c===tx?e=tx:e!==tx&&(e+=(c??"")+n[r+1]),this._$AH[r]=c}a&&!r&&this.j(e)}j(e){e===tx?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}};let lit_html_H=class lit_html_H extends lit_html_k{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===tx?void 0:e}};let lit_html_I=class lit_html_I extends lit_html_k{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==tx)}};let lit_html_L=class lit_html_L extends lit_html_k{constructor(e,t,o,r,n){super(e,t,o,r,n),this.type=5}_$AI(e,t=this){if((e=tE(this,e,t,0)??tx)===tk)return;let o=this._$AH,r=e===tx&&o!==tx||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,n=e!==tx&&(o===tx||r);r&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}};let z=class z{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){tE(this,e)}};let tP=te.litHtmlPolyfillSupport;tP?.(lit_html_N,lit_html_R),(te.litHtmlVersions??=[]).push("3.3.1");let tI=globalThis;let lit_element_i=class lit_element_i extends reactive_element_y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{let r=o?.renderBefore??t,n=r._$litPart$;if(void 0===n){let e=o?.renderBefore??null;r._$litPart$=n=new lit_html_R(t.insertBefore(tl(),e),e,void 0,o??{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return tk}};lit_element_i._$litElement$=!0,lit_element_i.finalized=!0,tI.litElementHydrateSupport?.({LitElement:lit_element_i});let tR=tI.litElementPolyfillSupport;tR?.({LitElement:lit_element_i}),(tI.litElementVersions??=[]).push("4.2.1");let tT=e=>(t,o)=>{void 0!==o?o.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},tz={attribute:!0,type:String,converter:e7,reflect:!1,hasChanged:e8};function tM(e){return(t,o)=>"object"==typeof o?((e=tz,t,o)=>{let{kind:r,metadata:n}=o,a=globalThis.litPropertyMetadata.get(n);if(void 0===a&&globalThis.litPropertyMetadata.set(n,a=new Map),"setter"===r&&((e=Object.create(e)).wrapped=!0),a.set(o.name,e),"accessor"===r){let{name:r}=o;return{set(o){let n=t.get.call(this);t.set.call(this,o),this.requestUpdate(r,n,e)},init(t){return void 0!==t&&this.C(r,void 0,e,t),t}}}if("setter"===r){let{name:r}=o;return function(o){let n=this[r];t.call(this,o),this.requestUpdate(r,n,e)}}throw Error("Unsupported decorator location: "+r)})(e,t,o):((e,t,o)=>{let r=t.hasOwnProperty(o);return t.constructor.createProperty(o,e),r?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}function tO(e){return tM({...e,state:!0,attribute:!1})}let tL=(e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,o),o);function tD(e,t){return(o,r,n)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}="object"==typeof r?o:n??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return tL(o,r,{get(){let o=e.call(this);return void 0===o&&(null!==(o=a(this))||this.hasUpdated)&&t.call(this,o),o}})}return tL(o,r,{get(){return a(this)}})}}function tN(e,t,o){return e?t(e):o?.(e)}let tB="commitDetails",tF=`\0
\0`,tj=new IpcCommand(tB,"commit/suggestChanges"),tU=new IpcCommand(tB,"commit/actions/execute"),tH=new IpcCommand(tB,"file/actions/execute"),tq=new IpcCommand(tB,"file/open"),tV=new IpcCommand(tB,"file/openOnRemote"),tW=new IpcCommand(tB,"file/compareWorking"),tG=new IpcCommand(tB,"file/comparePrevious"),tK=new IpcCommand(tB,"file/stage"),tZ=new IpcCommand(tB,"file/unstage"),tY=new IpcCommand(tB,"pickCommit"),tX=new IpcCommand(tB,"searchCommit"),tQ=new IpcCommand(tB,"switchMode");new IpcCommand(tB,"autolinkSettings");let tJ=new IpcCommand(tB,"pin"),t0=new IpcCommand(tB,"navigate"),t1=new IpcCommand(tB,"preferences/update"),t2=new IpcCommand(tB,"wip/createPatch"),t5=new IpcCommand(tB,"wip/changeReviewMode"),t3=new IpcCommand(tB,"wip/showCodeSuggestion"),t6=new IpcCommand(tB,"fetch"),t9=new IpcCommand(tB,"publish"),t7=new IpcCommand(tB,"push"),t8=new IpcCommand(tB,"pull"),t4=new IpcCommand(tB,"switch"),ie=new IpcCommand(tB,"openPullRequestChanges"),ii=new IpcCommand(tB,"openPullRequestComparison"),io=new IpcCommand(tB,"openPullRequestOnRemote"),is=new IpcCommand(tB,"openPullRequestDetails"),ir=new IpcRequest(tB,"explain"),ia=new IpcRequest(tB,"generate"),il=new IpcNotification(tB,"didChange",!0),ic=new IpcNotification(tB,"didChange/wip");new IpcNotification(tB,"org/settings/didChange");let ih=new IpcNotification(tB,"didChange/account"),id=new IpcNotification(tB,"didChange/patch"),ip=new IpcNotification(tB,"didChange/integrations"),iu=Object.freeze({add:"\\ea60",plus:"\\ea60","gist-new":"\\ea60","repo-create":"\\ea60",lightbulb:"\\ea61","light-bulb":"\\ea61",repo:"\\ea62","repo-delete":"\\ea62","gist-fork":"\\ea63","repo-forked":"\\ea63","git-pull-request":"\\ea64","git-pull-request-abandoned":"\\ea64","record-keys":"\\ea65",keyboard:"\\ea65",tag:"\\ea66","git-pull-request-label":"\\ea66","tag-add":"\\ea66","tag-remove":"\\ea66",person:"\\ea67","person-follow":"\\ea67","person-outline":"\\ea67","person-filled":"\\ea67","git-branch":"\\ea68","git-branch-create":"\\ea68","git-branch-delete":"\\ea68","source-control":"\\ea68",mirror:"\\ea69","mirror-public":"\\ea69",star:"\\ea6a","star-add":"\\ea6a","star-delete":"\\ea6a","star-empty":"\\ea6a",comment:"\\ea6b","comment-add":"\\ea6b",alert:"\\ea6c",warning:"\\ea6c",search:"\\ea6d","search-save":"\\ea6d","log-out":"\\ea6e","sign-out":"\\ea6e","log-in":"\\ea6f","sign-in":"\\ea6f",eye:"\\ea70","eye-unwatch":"\\ea70","eye-watch":"\\ea70","circle-filled":"\\ea71","primitive-dot":"\\ea71","close-dirty":"\\ea71","debug-breakpoint":"\\ea71","debug-breakpoint-disabled":"\\ea71","debug-hint":"\\ea71","terminal-decoration-success":"\\ea71","primitive-square":"\\ea72",edit:"\\ea73",pencil:"\\ea73",info:"\\ea74","issue-opened":"\\ea74","gist-private":"\\ea75","git-fork-private":"\\ea75",lock:"\\ea75","mirror-private":"\\ea75",close:"\\ea76","remove-close":"\\ea76",x:"\\ea76","repo-sync":"\\ea77",sync:"\\ea77",clone:"\\ea78","desktop-download":"\\ea78",beaker:"\\ea79",microscope:"\\ea79",vm:"\\ea7a","device-desktop":"\\ea7a",file:"\\ea7b","file-text":"\\ea7b",more:"\\ea7c",ellipsis:"\\ea7c","kebab-horizontal":"\\ea7c","mail-reply":"\\ea7d",reply:"\\ea7d",organization:"\\ea7e","organization-filled":"\\ea7e","organization-outline":"\\ea7e","new-file":"\\ea7f","file-add":"\\ea7f","new-folder":"\\ea80","file-directory-create":"\\ea80",trash:"\\ea81",trashcan:"\\ea81",history:"\\ea82",clock:"\\ea82",folder:"\\ea83","file-directory":"\\ea83","symbol-folder":"\\ea83","logo-github":"\\ea84","mark-github":"\\ea84",github:"\\ea84",terminal:"\\ea85",console:"\\ea85",repl:"\\ea85",zap:"\\ea86","symbol-event":"\\ea86",error:"\\ea87",stop:"\\ea87",variable:"\\ea88","symbol-variable":"\\ea88",array:"\\ea8a","symbol-array":"\\ea8a","symbol-module":"\\ea8b","symbol-package":"\\ea8b","symbol-namespace":"\\ea8b","symbol-object":"\\ea8b","symbol-method":"\\ea8c","symbol-function":"\\ea8c","symbol-constructor":"\\ea8c","symbol-boolean":"\\ea8f","symbol-null":"\\ea8f","symbol-numeric":"\\ea90","symbol-number":"\\ea90","symbol-structure":"\\ea91","symbol-struct":"\\ea91","symbol-parameter":"\\ea92","symbol-type-parameter":"\\ea92","symbol-key":"\\ea93","symbol-text":"\\ea93","symbol-reference":"\\ea94","go-to-file":"\\ea94","symbol-enum":"\\ea95","symbol-value":"\\ea95","symbol-ruler":"\\ea96","symbol-unit":"\\ea96","activate-breakpoints":"\\ea97",archive:"\\ea98","arrow-both":"\\ea99","arrow-down":"\\ea9a","arrow-left":"\\ea9b","arrow-right":"\\ea9c","arrow-small-down":"\\ea9d","arrow-small-left":"\\ea9e","arrow-small-right":"\\ea9f","arrow-small-up":"\\eaa0","arrow-up":"\\eaa1",bell:"\\eaa2",bold:"\\eaa3",book:"\\eaa4",bookmark:"\\eaa5","debug-breakpoint-conditional-unverified":"\\eaa6","debug-breakpoint-conditional":"\\eaa7","debug-breakpoint-conditional-disabled":"\\eaa7","debug-breakpoint-data-unverified":"\\eaa8","debug-breakpoint-data":"\\eaa9","debug-breakpoint-data-disabled":"\\eaa9","debug-breakpoint-log-unverified":"\\eaaa","debug-breakpoint-log":"\\eaab","debug-breakpoint-log-disabled":"\\eaab",briefcase:"\\eaac",broadcast:"\\eaad",browser:"\\eaae",bug:"\\eaaf",calendar:"\\eab0","case-sensitive":"\\eab1",check:"\\eab2",checklist:"\\eab3","chevron-down":"\\eab4","chevron-left":"\\eab5","chevron-right":"\\eab6","chevron-up":"\\eab7","chrome-close":"\\eab8","chrome-maximize":"\\eab9","chrome-minimize":"\\eaba","chrome-restore":"\\eabb","circle-outline":"\\eabc",circle:"\\eabc","debug-breakpoint-unverified":"\\eabc","terminal-decoration-incomplete":"\\eabc","circle-slash":"\\eabd","circuit-board":"\\eabe","clear-all":"\\eabf",clippy:"\\eac0","close-all":"\\eac1","cloud-download":"\\eac2","cloud-upload":"\\eac3",code:"\\eac4","collapse-all":"\\eac5","color-mode":"\\eac6","comment-discussion":"\\eac7","credit-card":"\\eac9",dash:"\\eacc",dashboard:"\\eacd",database:"\\eace","debug-continue":"\\eacf","debug-disconnect":"\\ead0","debug-pause":"\\ead1","debug-restart":"\\ead2","debug-start":"\\ead3","debug-step-into":"\\ead4","debug-step-out":"\\ead5","debug-step-over":"\\ead6","debug-stop":"\\ead7",debug:"\\ead8","device-camera-video":"\\ead9","device-camera":"\\eada","device-mobile":"\\eadb","diff-added":"\\eadc","diff-ignored":"\\eadd","diff-modified":"\\eade","diff-removed":"\\eadf","diff-renamed":"\\eae0",diff:"\\eae1","diff-sidebyside":"\\eae1",discard:"\\eae2","editor-layout":"\\eae3","empty-window":"\\eae4",exclude:"\\eae5",extensions:"\\eae6","eye-closed":"\\eae7","file-binary":"\\eae8","file-code":"\\eae9","file-media":"\\eaea","file-pdf":"\\eaeb","file-submodule":"\\eaec","file-symlink-directory":"\\eaed","file-symlink-file":"\\eaee","file-zip":"\\eaef",files:"\\eaf0",filter:"\\eaf1",flame:"\\eaf2","fold-down":"\\eaf3","fold-up":"\\eaf4",fold:"\\eaf5","folder-active":"\\eaf6","folder-opened":"\\eaf7",gear:"\\eaf8",gift:"\\eaf9","gist-secret":"\\eafa",gist:"\\eafb","git-commit":"\\eafc","git-compare":"\\eafd","compare-changes":"\\eafd","git-merge":"\\eafe","github-action":"\\eaff","github-alt":"\\eb00",globe:"\\eb01",grabber:"\\eb02",graph:"\\eb03",gripper:"\\eb04",heart:"\\eb05",home:"\\eb06","horizontal-rule":"\\eb07",hubot:"\\eb08",inbox:"\\eb09","issue-reopened":"\\eb0b",issues:"\\eb0c",italic:"\\eb0d",jersey:"\\eb0e",json:"\\eb0f","kebab-vertical":"\\eb10",key:"\\eb11",law:"\\eb12","lightbulb-autofix":"\\eb13","link-external":"\\eb14",link:"\\eb15","list-ordered":"\\eb16","list-unordered":"\\eb17","live-share":"\\eb18",loading:"\\eb19",location:"\\eb1a","mail-read":"\\eb1b",mail:"\\eb1c",markdown:"\\eb1d",megaphone:"\\eb1e",mention:"\\eb1f",milestone:"\\eb20","git-pull-request-milestone":"\\eb20","mortar-board":"\\eb21",move:"\\eb22","multiple-windows":"\\eb23",mute:"\\eb24","no-newline":"\\eb25",note:"\\eb26",octoface:"\\eb27","open-preview":"\\eb28",package:"\\eb29",paintcan:"\\eb2a",pin:"\\eb2b",play:"\\eb2c",run:"\\eb2c",plug:"\\eb2d","preserve-case":"\\eb2e",preview:"\\eb2f",project:"\\eb30",pulse:"\\eb31",question:"\\eb32",quote:"\\eb33","radio-tower":"\\eb34",reactions:"\\eb35",references:"\\eb36",refresh:"\\eb37",regex:"\\eb38","remote-explorer":"\\eb39",remote:"\\eb3a",remove:"\\eb3b","replace-all":"\\eb3c",replace:"\\eb3d","repo-clone":"\\eb3e","repo-force-push":"\\eb3f","repo-pull":"\\eb40","repo-push":"\\eb41",report:"\\eb42","request-changes":"\\eb43",rocket:"\\eb44","root-folder-opened":"\\eb45","root-folder":"\\eb46",rss:"\\eb47",ruby:"\\eb48","save-all":"\\eb49","save-as":"\\eb4a",save:"\\eb4b","screen-full":"\\eb4c","screen-normal":"\\eb4d","search-stop":"\\eb4e",server:"\\eb50","settings-gear":"\\eb51",settings:"\\eb52",shield:"\\eb53",smiley:"\\eb54","sort-precedence":"\\eb55","split-horizontal":"\\eb56","split-vertical":"\\eb57",squirrel:"\\eb58","star-full":"\\eb59","star-half":"\\eb5a","symbol-class":"\\eb5b","symbol-color":"\\eb5c","symbol-constant":"\\eb5d","symbol-enum-member":"\\eb5e","symbol-field":"\\eb5f","symbol-file":"\\eb60","symbol-interface":"\\eb61","symbol-keyword":"\\eb62","symbol-misc":"\\eb63","symbol-operator":"\\eb64","symbol-property":"\\eb65",wrench:"\\eb65","wrench-subaction":"\\eb65","symbol-snippet":"\\eb66",tasklist:"\\eb67",telescope:"\\eb68","text-size":"\\eb69","three-bars":"\\eb6a",thumbsdown:"\\eb6b",thumbsup:"\\eb6c",tools:"\\eb6d","triangle-down":"\\eb6e","triangle-left":"\\eb6f","triangle-right":"\\eb70","triangle-up":"\\eb71",twitter:"\\eb72",unfold:"\\eb73",unlock:"\\eb74",unmute:"\\eb75",unverified:"\\eb76",verified:"\\eb77",versions:"\\eb78","vm-active":"\\eb79","vm-outline":"\\eb7a","vm-running":"\\eb7b",watch:"\\eb7c",whitespace:"\\eb7d","whole-word":"\\eb7e",window:"\\eb7f","word-wrap":"\\eb80","zoom-in":"\\eb81","zoom-out":"\\eb82","list-filter":"\\eb83","list-flat":"\\eb84","list-selection":"\\eb85",selection:"\\eb85","list-tree":"\\eb86","debug-breakpoint-function-unverified":"\\eb87","debug-breakpoint-function":"\\eb88","debug-breakpoint-function-disabled":"\\eb88","debug-stackframe-active":"\\eb89","circle-small-filled":"\\eb8a","debug-stackframe-dot":"\\eb8a","terminal-decoration-mark":"\\eb8a","debug-stackframe":"\\eb8b","debug-stackframe-focused":"\\eb8b","debug-breakpoint-unsupported":"\\eb8c","symbol-string":"\\eb8d","debug-reverse-continue":"\\eb8e","debug-step-back":"\\eb8f","debug-restart-frame":"\\eb90","debug-alt":"\\eb91","call-incoming":"\\eb92","call-outgoing":"\\eb93",menu:"\\eb94","expand-all":"\\eb95",feedback:"\\eb96","git-pull-request-reviewer":"\\eb96","group-by-ref-type":"\\eb97","ungroup-by-ref-type":"\\eb98",account:"\\eb99","git-pull-request-assignee":"\\eb99","bell-dot":"\\eb9a","debug-console":"\\eb9b",library:"\\eb9c",output:"\\eb9d","run-all":"\\eb9e","sync-ignored":"\\eb9f",pinned:"\\eba0","github-inverted":"\\eba1","server-process":"\\eba2","server-environment":"\\eba3",pass:"\\eba4","issue-closed":"\\eba4","stop-circle":"\\eba5","play-circle":"\\eba6",record:"\\eba7","debug-alt-small":"\\eba8","vm-connect":"\\eba9",cloud:"\\ebaa",merge:"\\ebab",export:"\\ebac","graph-left":"\\ebad",magnet:"\\ebae",notebook:"\\ebaf",redo:"\\ebb0","check-all":"\\ebb1","pinned-dirty":"\\ebb2","pass-filled":"\\ebb3","circle-large-filled":"\\ebb4","circle-large":"\\ebb5","circle-large-outline":"\\ebb5",combine:"\\ebb6",gather:"\\ebb6",table:"\\ebb7","variable-group":"\\ebb8","type-hierarchy":"\\ebb9","type-hierarchy-sub":"\\ebba","type-hierarchy-super":"\\ebbb","git-pull-request-create":"\\ebbc","run-above":"\\ebbd","run-below":"\\ebbe","notebook-template":"\\ebbf","debug-rerun":"\\ebc0","workspace-trusted":"\\ebc1","workspace-untrusted":"\\ebc2","workspace-unknown":"\\ebc3","terminal-cmd":"\\ebc4","terminal-debian":"\\ebc5","terminal-linux":"\\ebc6","terminal-powershell":"\\ebc7","terminal-tmux":"\\ebc8","terminal-ubuntu":"\\ebc9","terminal-bash":"\\ebca","arrow-swap":"\\ebcb",copy:"\\ebcc","person-add":"\\ebcd","filter-filled":"\\ebce",wand:"\\ebcf","debug-line-by-line":"\\ebd0",inspect:"\\ebd1",layers:"\\ebd2","layers-dot":"\\ebd3","layers-active":"\\ebd4",compass:"\\ebd5","compass-dot":"\\ebd6","compass-active":"\\ebd7",azure:"\\ebd8","issue-draft":"\\ebd9","git-pull-request-closed":"\\ebda","git-pull-request-draft":"\\ebdb","debug-all":"\\ebdc","debug-coverage":"\\ebdd","run-errors":"\\ebde","folder-library":"\\ebdf","debug-continue-small":"\\ebe0","beaker-stop":"\\ebe1","graph-line":"\\ebe2","graph-scatter":"\\ebe3","pie-chart":"\\ebe4",bracket:"\\eb0f","bracket-dot":"\\ebe5","bracket-error":"\\ebe6","lock-small":"\\ebe7","azure-devops":"\\ebe8","verified-filled":"\\ebe9",newline:"\\ebea",layout:"\\ebeb","layout-activitybar-left":"\\ebec","layout-activitybar-right":"\\ebed","layout-panel-left":"\\ebee","layout-panel-center":"\\ebef","layout-panel-justify":"\\ebf0","layout-panel-right":"\\ebf1","layout-panel":"\\ebf2","layout-sidebar-left":"\\ebf3","layout-sidebar-right":"\\ebf4","layout-statusbar":"\\ebf5","layout-menubar":"\\ebf6","layout-centered":"\\ebf7",target:"\\ebf8",indent:"\\ebf9","record-small":"\\ebfa","error-small":"\\ebfb","terminal-decoration-error":"\\ebfb","arrow-circle-down":"\\ebfc","arrow-circle-left":"\\ebfd","arrow-circle-right":"\\ebfe","arrow-circle-up":"\\ebff","layout-sidebar-right-off":"\\ec00","layout-panel-off":"\\ec01","layout-sidebar-left-off":"\\ec02",blank:"\\ec03","heart-filled":"\\ec04",map:"\\ec05","map-horizontal":"\\ec05","fold-horizontal":"\\ec05","map-filled":"\\ec06","map-horizontal-filled":"\\ec06","fold-horizontal-filled":"\\ec06","circle-small":"\\ec07","bell-slash":"\\ec08","bell-slash-dot":"\\ec09","comment-unresolved":"\\ec0a","git-pull-request-go-to-changes":"\\ec0b","git-pull-request-new-changes":"\\ec0c","search-fuzzy":"\\ec0d","comment-draft":"\\ec0e",send:"\\ec0f",sparkle:"\\ec10",insert:"\\ec11",mic:"\\ec12","thumbsdown-filled":"\\ec13","thumbsup-filled":"\\ec14",coffee:"\\ec15",snake:"\\ec16",game:"\\ec17",vr:"\\ec18",chip:"\\ec19",piano:"\\ec1a",music:"\\ec1b","mic-filled":"\\ec1c","repo-fetch":"\\ec1d",copilot:"\\ec1e","lightbulb-sparkle":"\\ec1f",robot:"\\ec20","sparkle-filled":"\\ec21","diff-single":"\\ec22","diff-multiple":"\\ec23","surround-with":"\\ec24",share:"\\ec25","git-stash":"\\ec26","git-stash-apply":"\\ec27","git-stash-pop":"\\ec28",vscode:"\\ec29","vscode-insiders":"\\ec2a","code-oss":"\\ec2b","run-coverage":"\\ec2c","run-all-coverage":"\\ec2d",coverage:"\\ec2e","github-project":"\\ec2f","map-vertical":"\\ec30","fold-vertical":"\\ec30","map-vertical-filled":"\\ec31","fold-vertical-filled":"\\ec31","go-to-search":"\\ec32",percentage:"\\ec33","sort-percentage":"\\ec33",attach:"\\ec34","go-to-editing-session":"\\ec35","edit-session":"\\ec36","code-review":"\\ec37","copilot-warning":"\\ec38",python:"\\ec39","copilot-large":"\\ec3a","copilot-warning-large":"\\ec3b","keyboard-tab":"\\ec3c","copilot-blocked":"\\ec3d","copilot-not-connected":"\\ec3e",flag:"\\ec3f","lightbulb-empty":"\\ec40","symbol-method-arrow":"\\ec41","copilot-unavailable":"\\ec42","repo-pinned":"\\ec43","keyboard-tab-above":"\\ec44","keyboard-tab-below":"\\ec45","git-pull-request-done":"\\ec46",mcp:"\\ec47","extensions-large":"\\ec48","layout-panel-dock":"\\ec49","layout-sidebar-left-dock":"\\ec4a","layout-sidebar-right-dock":"\\ec4b","copilot-in-progress":"\\ec4c","copilot-error":"\\ec4d","copilot-success":"\\ec4e","chat-sparkle":"\\ec4f","search-sparkle":"\\ec50","edit-sparkle":"\\ec51","copilot-snooze":"\\ec52"}),ig=Object.freeze({"commit-horizontal":"\\f101",graph:"\\f102","next-commit":"\\f103","prev-commit-menu":"\\f104","prev-commit":"\\f105","compare-ref-working":"\\f106","branches-view":"\\f107","commit-view":"\\f108","commits-view":"\\f109","compare-view":"\\f10a","contributors-view":"\\f10b","history-view":"\\f10c",history:"\\f10c","remotes-view":"\\f10d","repositories-view":"\\f10e","search-view":"\\f10f","stashes-view":"\\f110",stashes:"\\f110","tags-view":"\\f111","worktrees-view":"\\f112",gitlens:"\\f113","stash-pop":"\\f114","stash-save":"\\f115",unplug:"\\f116","open-revision":"\\f117",switch:"\\f118",expand:"\\f119","list-auto":"\\f11a","pinned-filled":"\\f11c",clock:"\\f11d","provider-azdo":"\\f11e","provider-bitbucket":"\\f11f","provider-gerrit":"\\f120","provider-gitea":"\\f121","provider-github":"\\f122","provider-gitlab":"\\f123","gitlens-inspect":"\\f124","workspaces-view":"\\f125","confirm-checked":"\\f126","confirm-unchecked":"\\f127","cloud-patch":"\\f128","cloud-patch-share":"\\f129",inspect:"\\f12a","repository-filled":"\\f12b","gitlens-filled":"\\f12c","code-suggestion":"\\f12d","provider-jira":"\\f133","play-button":"\\f134","rocket-filled":"\\f135","branches-view-filled":"\\f136","commits-view-filled":"\\f137","contributors-view-filled":"\\f138","remotes-view-filled":"\\f139","repositories-view-filled":"\\f13a","search-view-filled":"\\f13b","stashes-view-filled":"\\f13c","tags-view-filled":"\\f13d","worktrees-view-filled":"\\f13e","launchpad-view":"\\f13f","launchpad-view-filled":"\\f140","merge-target":"\\f141","history-view-filled":"\\f142",repository:"\\f143",worktree:"\\f144","worktree-filled":"\\f145","repository-cloud":"\\f146","provider-linear":"\\f147"});var im=Object.defineProperty,ib=Object.getOwnPropertyDescriptor,iv=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?ib(t,o):t,c=e.length-1;c>=0;c--)(n=e[c])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&im(t,o,a),a};function iy(e,t=""){return eK(Object.entries(e).map(([e,o])=>(function(e,t,o=""){return`:host([icon='${o}${e}'])::before { content: '${t}'; }`})(e,o,t)).join(""))}let iw=class extends lit_element_i{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=void 0}updated(e){e.has("size")&&this.style.setProperty("--code-icon-size",`${this.size}px`),super.update(e)}};iw.styles=eZ`
		:host {
			font: normal normal normal var(--code-icon-size, 16px) / 1 codicon;
			display: inline-block;
			text-decoration: none;
			text-rendering: auto;
			text-align: center;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			user-select: none;
			-webkit-user-select: none;
			-ms-user-select: none;
			color: inherit;
			vertical-align: var(--code-icon-v-align, text-bottom);
			letter-spacing: normal;
		}

		:host([icon^='gl-']) {
			font-family: 'glicons';
		}

		${iy(iu)}
		${iy(ig,"gl-")}

		:host([icon='custom-start-work']) {
			position: relative;
		}
		:host([icon='custom-start-work'])::before {
			content: '\\ea68';
		}
		:host([icon='custom-start-work'])::after {
			content: '\\ea60';
			position: absolute;
			right: -0.2em;
			bottom: -0.2em;
			font-size: 0.6em;
			line-height: normal;
		}

		:host([icon='gl-pinned-filled']):before {
			/* TODO: see relative positioning needed in every use-case */
			position: relative;
			left: 1px;
		}

		@keyframes codicon-spin {
			100% {
				transform: rotate(360deg);
			}
		}

		:host([modifier='spin']) {
			/* Use steps to throttle FPS to reduce CPU usage */
			animation: codicon-spin 1.5s steps(30) infinite;
		}
		:host([icon='loading'][modifier='spin']) {
			/* Use steps to throttle FPS to reduce CPU usage */
			animation: codicon-spin 1.5s steps(30) infinite;

			/* custom speed & easing for loading icon */
			animation-duration: 1s !important;
			animation-timing-function: cubic-bezier(0.53, 0.21, 0.29, 0.67) !important;
		}

		:host([flip='inline']) {
			transform: rotateY(180deg);
		}

		:host([flip='block']) {
			transform: rotateX(180deg);
		}

		:host([rotate='45']) {
			transform: rotateZ(45deg);
		}
	`,iv([tM({reflect:!0})],iw.prototype,"icon",2),iv([tM({reflect:!0})],iw.prototype,"modifier",2),iv([tM({type:Number})],iw.prototype,"size",2),iv([tM({reflect:!0})],iw.prototype,"flip",2),iv([tM({reflect:!0})],iw.prototype,"rotate",2),iw=iv([tT("code-icon")],iw);let i_=eZ`
	/*
	:host {
		display: inline-block;
	}
    */

	.indicator {
		box-sizing: border-box;
		display: inline-block;
		border-radius: calc(var(--gl-indicator-size, 0.8rem) * 2);
		width: var(--gl-indicator-size, 0.8rem);
		aspect-ratio: 1;
		background-color: var(--gl-indicator-color);
		vertical-align: text-bottom;
	}
`,ik=eZ`
	.indicator--pulse {
		animation: 1.5s ease 0s infinite normal none running pulse;
	}

	@keyframes pulse {
		0% {
			box-shadow: 0 0 0 0 var(--gl-indicator-pulse-color);
		}
		70% {
			box-shadow: 0 0 0 var(--gl-indicator-size, 0.8rem) transparent;
		}
		100% {
			box-shadow: 0 0 0 0 transparent;
		}
	}
`;var ix=Object.defineProperty,i$=Object.getOwnPropertyDescriptor,iC=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?i$(t,o):t,c=e.length-1;c>=0;c--)(n=e[c])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&ix(t,o,a),a};let iS=class extends lit_element_i{constructor(){super(...arguments),this.pulse=!1}render(){return t_`<slot class="indicator${this.pulse?" indicator--pulse":""}"></slot>`}};iS.styles=[i_,ik],iC([tM({type:Boolean})],iS.prototype,"pulse",2),iS=iC([tT("gl-indicator")],iS);var iA=Object.defineProperty,iE=Object.defineProperties,iP=Object.getOwnPropertyDescriptor,iI=Object.getOwnPropertyDescriptors,iR=Object.getOwnPropertySymbols,iT=Object.prototype.hasOwnProperty,iz=Object.prototype.propertyIsEnumerable,iM=e=>{throw TypeError(e)},iO=(e,t,o)=>t in e?iA(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,iL=(e,t)=>{for(var o in t||(t={}))iT.call(t,o)&&iO(e,o,t[o]);if(iR)for(var o of iR(t))iz.call(t,o)&&iO(e,o,t[o]);return e},iD=(e,t)=>iE(e,iI(t)),iN=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?iP(t,o):t,c=e.length-1;c>=0;c--)(n=e[c])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&iA(t,o,a),a},iB=(e,t,o)=>t.has(e)||iM("Cannot "+o),iF=new Map,ij=new WeakMap;function iU(e,t){return"rtl"===t.toLowerCase()?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function iH(e,t){iF.set(e,null!=t?t:{keyframes:[],options:{duration:0}})}function iq(e,t,o){let r=ij.get(e);if(null==r?void 0:r[t])return iU(r[t],o.dir);let n=iF.get(t);return n?iU(n,o.dir):{keyframes:[],options:{duration:0}}}let iV=e=>(...t)=>({_$litDirective$:e,values:t});let directive_i=class directive_i{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};let unsafe_html_e=class unsafe_html_e extends directive_i{constructor(e){if(super(e),this.it=tx,2!==e.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===tx||null==e)return this._t=void 0,this.it=e;if(e===tk)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};unsafe_html_e.directiveName="unsafeHTML",unsafe_html_e.resultType=1;let iW=iV(unsafe_html_e);function iG(e){return e?.includes(`
`)?iW(e.replace(/\n\n/g,"<hr>").replace(/\n/g,"<br>")):e}var iK=eZ`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,iZ=eZ`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;let iY=new Set,iX=new Map,iQ="ltr",iJ="en",i0="undefined"!=typeof MutationObserver&&"undefined"!=typeof document&&void 0!==document.documentElement;if(i0){let e=new MutationObserver(i2);iQ=document.documentElement.dir||"ltr",iJ=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function i1(...e){e.map(e=>{let t=e.$code.toLowerCase();iX.has(t)?iX.set(t,Object.assign(Object.assign({},iX.get(t)),e)):iX.set(t,e),a||(a=e)}),i2()}function i2(){i0&&(iQ=document.documentElement.dir||"ltr",iJ=document.documentElement.lang||navigator.language),[...iY.keys()].map(e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()})}let LocalizeController=class LocalizeController{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){iY.add(this.host)}hostDisconnected(){iY.delete(this.host)}dir(){return`${this.host.dir||iQ}`.toLowerCase()}lang(){return`${this.host.lang||iJ}`.toLowerCase()}getTranslationData(e){var t,o;let r=new Intl.Locale(e.replace(/_/g,"-")),n=null==r?void 0:r.language.toLowerCase(),a=null!=(o=null==(t=null==r?void 0:r.region)?void 0:t.toLowerCase())?o:"",c=iX.get(`${n}-${a}`),h=iX.get(n);return{locale:r,language:n,region:a,primary:c,secondary:h}}exists(e,t){var o;let{primary:r,secondary:n}=this.getTranslationData(null!=(o=t.lang)?o:this.lang());return t=Object.assign({includeFallback:!1},t),!!r&&!!r[e]||!!n&&!!n[e]||!!t.includeFallback&&!!a&&!!a[e]}term(e,...t){let o,{primary:r,secondary:n}=this.getTranslationData(this.lang());if(r&&r[e])o=r[e];else if(n&&n[e])o=n[e];else{if(!a||!a[e])return String(e);o=a[e]}return"function"==typeof o?o(...t):o}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return isNaN(e=Number(e))?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(e,t)}};var i5={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};i1(i5);var i3=class extends LocalizeController{};i1(i5);var i6=eZ`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,i9=class extends lit_element_i{constructor(){let e;super(),(e=b).has(this)?iM("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(this):e.set(this,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){let o=new CustomEvent(e,iL({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(o),o}static define(e,t=this,o={}){let r=customElements.get(e);if(!r){try{customElements.define(e,t,o)}catch(r){customElements.define(e,class extends t{},o)}return}let n=" (unknown version)",a=n;if("version"in t&&t.version&&(n=" v"+t.version),"version"in r&&r.version&&(a=" v"+r.version),n&&a&&n===a)return}attributeChangedCallback(e,t,o){let r,n;if(iB(this,r=b,"read from private field"),n?!n.call(this):!r.get(this)){let e,t;this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&null!=this[t]&&this.initialReflectedProperties.set(t,this[t])}),iB(this,e=b,"write to private field"),t?t.call(this,!0):e.set(this,!0)}super.attributeChangedCallback(e,t,o)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,o)=>{e.has(o)&&null==this[o]&&(this[o]=t)})}};b=new WeakMap,i9.version="2.20.1",i9.dependencies={},iN([tM()],i9.prototype,"dir",2),iN([tM()],i9.prototype,"lang",2);let i7=Math.min,i8=Math.max,i4=Math.round,oe=Math.floor,oi=e=>({x:e,y:e}),oo={left:"right",right:"left",bottom:"top",top:"bottom"},os={start:"end",end:"start"};function or(e,t){return"function"==typeof e?e(t):e}function on(e){return e.split("-")[0]}function oa(e){return e.split("-")[1]}function ol(e){return"x"===e?"y":"x"}function oc(e){return"y"===e?"height":"width"}let oh=new Set(["top","bottom"]);function od(e){return oh.has(on(e))?"y":"x"}function op(e){return e.replace(/start|end/g,e=>os[e])}let ou=["left","right"],og=["right","left"],of=["top","bottom"],om=["bottom","top"];function ob(e){return e.replace(/left|right|bottom|top/g,e=>oo[e])}function ov(e){return"number"!=typeof e?{top:0,right:0,bottom:0,left:0,...e}:{top:e,right:e,bottom:e,left:e}}function oy(e){let{x:t,y:o,width:r,height:n}=e;return{width:r,height:n,top:o,left:t,right:t+r,bottom:o+n,x:t,y:o}}function ow(e,t,o){let r,{reference:n,floating:a}=e,c=od(t),h=ol(od(t)),d=oc(h),p=on(t),u="y"===c,g=n.x+n.width/2-a.width/2,f=n.y+n.height/2-a.height/2,m=n[d]/2-a[d]/2;switch(p){case"top":r={x:g,y:n.y-a.height};break;case"bottom":r={x:g,y:n.y+n.height};break;case"right":r={x:n.x+n.width,y:f};break;case"left":r={x:n.x-a.width,y:f};break;default:r={x:n.x,y:n.y}}switch(oa(t)){case"start":r[h]-=m*(o&&u?-1:1);break;case"end":r[h]+=m*(o&&u?-1:1)}return r}let o_=async(e,t,o)=>{let{placement:r="bottom",strategy:n="absolute",middleware:a=[],platform:c}=o,h=a.filter(Boolean),d=await (null==c.isRTL?void 0:c.isRTL(t)),p=await c.getElementRects({reference:e,floating:t,strategy:n}),{x:u,y:g}=ow(p,r,d),f=r,m={},b=0;for(let o=0;o<h.length;o++){let{name:a,fn:v}=h[o],{x:y,y:w,data:_,reset:k}=await v({x:u,y:g,initialPlacement:r,placement:f,strategy:n,middlewareData:m,rects:p,platform:c,elements:{reference:e,floating:t}});u=null!=y?y:u,g=null!=w?w:g,m={...m,[a]:{...m[a],..._}},k&&b<=50&&(b++,"object"==typeof k&&(k.placement&&(f=k.placement),k.rects&&(p=!0===k.rects?await c.getElementRects({reference:e,floating:t,strategy:n}):k.rects),{x:u,y:g}=ow(p,f,d)),o=-1)}return{x:u,y:g,placement:f,strategy:n,middlewareData:m}};async function ok(e,t){var o;void 0===t&&(t={});let{x:r,y:n,platform:a,rects:c,elements:h,strategy:d}=e,{boundary:p="clippingAncestors",rootBoundary:u="viewport",elementContext:g="floating",altBoundary:f=!1,padding:m=0}=or(t,e),b=ov(m),v=h[f?"floating"===g?"reference":"floating":g],y=oy(await a.getClippingRect({element:null==(o=await (null==a.isElement?void 0:a.isElement(v)))||o?v:v.contextElement||await (null==a.getDocumentElement?void 0:a.getDocumentElement(h.floating)),boundary:p,rootBoundary:u,strategy:d})),w="floating"===g?{x:r,y:n,width:c.floating.width,height:c.floating.height}:c.reference,_=await (null==a.getOffsetParent?void 0:a.getOffsetParent(h.floating)),k=await (null==a.isElement?void 0:a.isElement(_))&&await (null==a.getScale?void 0:a.getScale(_))||{x:1,y:1},x=oy(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:h,rect:w,offsetParent:_,strategy:d}):w);return{top:(y.top-x.top+b.top)/k.y,bottom:(x.bottom-y.bottom+b.bottom)/k.y,left:(y.left-x.left+b.left)/k.x,right:(x.right-y.right+b.right)/k.x}}let ox=new Set(["left","top"]);async function o$(e,t){let{placement:o,platform:r,elements:n}=e,a=await (null==r.isRTL?void 0:r.isRTL(n.floating)),c=on(o),h=oa(o),d="y"===od(o),p=ox.has(c)?-1:1,u=a&&d?-1:1,g=or(t,e),{mainAxis:f,crossAxis:m,alignmentAxis:b}="number"==typeof g?{mainAxis:g,crossAxis:0,alignmentAxis:null}:{mainAxis:g.mainAxis||0,crossAxis:g.crossAxis||0,alignmentAxis:g.alignmentAxis};return h&&"number"==typeof b&&(m="end"===h?-1*b:b),d?{x:m*u,y:f*p}:{x:f*p,y:m*u}}function oC(){return"undefined"!=typeof window}function oS(e){return oP(e)?(e.nodeName||"").toLowerCase():"#document"}function oA(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function oE(e){var t;return null==(t=(oP(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function oP(e){return!!oC()&&(e instanceof Node||e instanceof oA(e).Node)}function oI(e){return!!oC()&&(e instanceof Element||e instanceof oA(e).Element)}function oR(e){return!!oC()&&(e instanceof HTMLElement||e instanceof oA(e).HTMLElement)}function oT(e){return!!oC()&&"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof oA(e).ShadowRoot)}let oz=new Set(["inline","contents"]);function oM(e){let{overflow:t,overflowX:o,overflowY:r,display:n}=oV(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+o)&&!oz.has(n)}let oO=new Set(["table","td","th"]),oL=[":popover-open",":modal"];function oD(e){return oL.some(t=>{try{return e.matches(t)}catch{return!1}})}let oN=["transform","translate","scale","rotate","perspective"],oB=["transform","translate","scale","rotate","perspective","filter"],oF=["paint","layout","strict","content"];function oj(e){let t=oU(),o=oI(e)?oV(e):e;return oN.some(e=>!!o[e]&&"none"!==o[e])||!!o.containerType&&"normal"!==o.containerType||!t&&!!o.backdropFilter&&"none"!==o.backdropFilter||!t&&!!o.filter&&"none"!==o.filter||oB.some(e=>(o.willChange||"").includes(e))||oF.some(e=>(o.contain||"").includes(e))}function oU(){return"undefined"!=typeof CSS&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}let oH=new Set(["html","body","#document"]);function oq(e){return oH.has(oS(e))}function oV(e){return oA(e).getComputedStyle(e)}function oW(e){return oI(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function oG(e){if("html"===oS(e))return e;let t=e.assignedSlot||e.parentNode||oT(e)&&e.host||oE(e);return oT(t)?t.host:t}function oK(e,t,o){var r;void 0===t&&(t=[]),void 0===o&&(o=!0);let n=function e(t){let o=oG(t);return oq(o)?t.ownerDocument?t.ownerDocument.body:t.body:oR(o)&&oM(o)?o:e(o)}(e),a=n===(null==(r=e.ownerDocument)?void 0:r.body),c=oA(n);if(a){let e=oZ(c);return t.concat(c,c.visualViewport||[],oM(n)?n:[],e&&o?oK(e):[])}return t.concat(n,oK(n,[],o))}function oZ(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function oY(e){let t=oV(e),o=parseFloat(t.width)||0,r=parseFloat(t.height)||0,n=oR(e),a=n?e.offsetWidth:o,c=n?e.offsetHeight:r,h=i4(o)!==a||i4(r)!==c;return h&&(o=a,r=c),{width:o,height:r,$:h}}function oX(e){return oI(e)?e:e.contextElement}function oQ(e){let t=oX(e);if(!oR(t))return oi(1);let o=t.getBoundingClientRect(),{width:r,height:n,$:a}=oY(t),c=(a?i4(o.width):o.width)/r,h=(a?i4(o.height):o.height)/n;return c&&Number.isFinite(c)||(c=1),h&&Number.isFinite(h)||(h=1),{x:c,y:h}}let oJ=oi(0);function o0(e){let t=oA(e);return oU()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:oJ}function o1(e,t,o,r){var n;void 0===t&&(t=!1),void 0===o&&(o=!1);let a=e.getBoundingClientRect(),c=oX(e),h=oi(1);t&&(r?oI(r)&&(h=oQ(r)):h=oQ(e));let d=(void 0===(n=o)&&(n=!1),r&&(!n||r===oA(c))&&n)?o0(c):oi(0),p=(a.left+d.x)/h.x,u=(a.top+d.y)/h.y,g=a.width/h.x,f=a.height/h.y;if(c){let e=oA(c),t=r&&oI(r)?oA(r):r,o=e,n=oZ(o);for(;n&&r&&t!==o;){let e=oQ(n),t=n.getBoundingClientRect(),r=oV(n),a=t.left+(n.clientLeft+parseFloat(r.paddingLeft))*e.x,c=t.top+(n.clientTop+parseFloat(r.paddingTop))*e.y;p*=e.x,u*=e.y,g*=e.x,f*=e.y,p+=a,u+=c,n=oZ(o=oA(n))}}return oy({width:g,height:f,x:p,y:u})}function o2(e,t){let o=oW(e).scrollLeft;return t?t.left+o:o1(oE(e)).left+o}function o5(e,t){let o=e.getBoundingClientRect();return{x:o.left+t.scrollLeft-o2(e,o),y:o.top+t.scrollTop}}let o3=new Set(["absolute","fixed"]);function o6(e,t,o){let r;if("viewport"===t)r=function(e,t){let o=oA(e),r=oE(e),n=o.visualViewport,a=r.clientWidth,c=r.clientHeight,h=0,d=0;if(n){a=n.width,c=n.height;let e=oU();(!e||e&&"fixed"===t)&&(h=n.offsetLeft,d=n.offsetTop)}let p=o2(r);if(p<=0){let e=r.ownerDocument,t=e.body,o=getComputedStyle(t),n="CSS1Compat"===e.compatMode&&parseFloat(o.marginLeft)+parseFloat(o.marginRight)||0,c=Math.abs(r.clientWidth-t.clientWidth-n);c<=25&&(a-=c)}else p<=25&&(a+=p);return{width:a,height:c,x:h,y:d}}(e,o);else if("document"===t)r=function(e){let t=oE(e),o=oW(e),r=e.ownerDocument.body,n=i8(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),a=i8(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),c=-o.scrollLeft+o2(e),h=-o.scrollTop;return"rtl"===oV(r).direction&&(c+=i8(t.clientWidth,r.clientWidth)-n),{width:n,height:a,x:c,y:h}}(oE(e));else if(oI(t))r=function(e,t){let o=o1(e,!0,"fixed"===t),r=o.top+e.clientTop,n=o.left+e.clientLeft,a=oR(e)?oQ(e):oi(1),c=e.clientWidth*a.x,h=e.clientHeight*a.y;return{width:c,height:h,x:n*a.x,y:r*a.y}}(t,o);else{let o=o0(e);r={x:t.x-o.x,y:t.y-o.y,width:t.width,height:t.height}}return oy(r)}function o9(e){return"static"===oV(e).position}function o7(e,t){if(!oR(e)||"fixed"===oV(e).position)return null;if(t)return t(e);let o=e.offsetParent;return oE(e)===o&&(o=o.ownerDocument.body),o}function o8(e,t){var o;let r=oA(e);if(oD(e))return r;if(!oR(e)){let t=oG(e);for(;t&&!oq(t);){if(oI(t)&&!o9(t))return t;t=oG(t)}return r}let n=o7(e,t);for(;n&&(o=n,oO.has(oS(o)))&&o9(n);)n=o7(n,t);return n&&oq(n)&&o9(n)&&!oj(n)?r:n||function(e){let t=oG(e);for(;oR(t)&&!oq(t);){if(oj(t))return t;if(oD(t))break;t=oG(t)}return null}(e)||r}let o4=async function(e){let t=this.getOffsetParent||o8,o=this.getDimensions,r=await o(e.floating);return{reference:function(e,t,o){let r=oR(t),n=oE(t),a="fixed"===o,c=o1(e,!0,a,t),h={scrollLeft:0,scrollTop:0},d=oi(0);if(r||!r&&!a)if(("body"!==oS(t)||oM(n))&&(h=oW(t)),r){let e=o1(t,!0,a,t);d.x=e.x+t.clientLeft,d.y=e.y+t.clientTop}else n&&(d.x=o2(n));a&&!r&&n&&(d.x=o2(n));let p=!n||r||a?oi(0):o5(n,h);return{x:c.left+h.scrollLeft-d.x-p.x,y:c.top+h.scrollTop-d.y-p.y,width:c.width,height:c.height}}(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},se={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:o,offsetParent:r,strategy:n}=e,a="fixed"===n,c=oE(r),h=!!t&&oD(t.floating);if(r===c||h&&a)return o;let d={scrollLeft:0,scrollTop:0},p=oi(1),u=oi(0),g=oR(r);if((g||!g&&!a)&&(("body"!==oS(r)||oM(c))&&(d=oW(r)),oR(r))){let e=o1(r);p=oQ(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=!c||g||a?oi(0):o5(c,d);return{width:o.width*p.x,height:o.height*p.y,x:o.x*p.x-d.scrollLeft*p.x+u.x+f.x,y:o.y*p.y-d.scrollTop*p.y+u.y+f.y}},getDocumentElement:oE,getClippingRect:function(e){let{element:t,boundary:o,rootBoundary:r,strategy:n}=e,a=[..."clippingAncestors"===o?oD(t)?[]:function(e,t){let o=t.get(e);if(o)return o;let r=oK(e,[],!1).filter(e=>oI(e)&&"body"!==oS(e)),n=null,a="fixed"===oV(e).position,c=a?oG(e):e;for(;oI(c)&&!oq(c);){let t=oV(c),o=oj(c);o||"fixed"!==t.position||(n=null),(a?!o&&!n:!o&&"static"===t.position&&!!n&&o3.has(n.position)||oM(c)&&!o&&function e(t,o){let r=oG(t);return!(r===o||!oI(r)||oq(r))&&("fixed"===oV(r).position||e(r,o))}(e,c))?r=r.filter(e=>e!==c):n=t,c=oG(c)}return t.set(e,r),r}(t,this._c):[].concat(o),r],c=a[0],h=a.reduce((e,o)=>{let r=o6(t,o,n);return e.top=i8(r.top,e.top),e.right=i7(r.right,e.right),e.bottom=i7(r.bottom,e.bottom),e.left=i8(r.left,e.left),e},o6(t,c,n));return{width:h.right-h.left,height:h.bottom-h.top,x:h.left,y:h.top}},getOffsetParent:o8,getElementRects:o4,getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){let{width:t,height:o}=oY(e);return{width:t,height:o}},getScale:oQ,isElement:oI,isRTL:function(e){return"rtl"===oV(e).direction}};function si(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}let so=function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){var o,r;let n,a,{placement:c,rects:h,platform:d,elements:p}=t,{apply:u=()=>{},...g}=or(e,t),f=await ok(t,g),m=on(c),b=oa(c),v="y"===od(c),{width:y,height:w}=h.floating;"top"===m||"bottom"===m?(n=m,a=b===(await (null==d.isRTL?void 0:d.isRTL(p.floating))?"start":"end")?"left":"right"):(a=m,n="end"===b?"top":"bottom");let _=w-f.top-f.bottom,k=y-f.left-f.right,x=i7(w-f[n],_),C=i7(y-f[a],k),S=!t.middlewareData.shift,A=x,E=C;if(null!=(o=t.middlewareData.shift)&&o.enabled.x&&(E=k),null!=(r=t.middlewareData.shift)&&r.enabled.y&&(A=_),S&&!b){let e=i8(f.left,0),t=i8(f.right,0),o=i8(f.top,0),r=i8(f.bottom,0);v?E=y-2*(0!==e||0!==t?e+t:i8(f.left,f.right)):A=w-2*(0!==o||0!==r?o+r:i8(f.top,f.bottom))}await u({...t,availableWidth:E,availableHeight:A});let P=await d.getDimensions(p.floating);return y!==P.width||w!==P.height?{reset:{rects:!0}}:{}}}},ss=iV(class extends directive_i{constructor(e){if(super(e),1!==e.type||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){for(let o in this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),t)t[o]&&!this.nt?.has(o)&&this.st.add(o);return this.render(t)}let o=e.element.classList;for(let e of this.st)e in t||(o.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(o.add(e),this.st.add(e)):(o.remove(e),this.st.delete(e)))}return tk}});function sr(e){var t=e;for(let e=t;e;e=sn(e))if(e instanceof Element&&"none"===getComputedStyle(e).display)return null;for(let e=sn(t);e;e=sn(e)){if(!(e instanceof Element))continue;let t=getComputedStyle(e);if("contents"!==t.display&&("static"!==t.position||oj(t)||"BODY"===e.tagName))return e}return null}function sn(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}var sa=class extends i9{constructor(){super(...arguments),this.localize=new i3(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){let e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),o=this.placement.includes("top")||this.placement.includes("bottom"),r=0,n=0,a=0,c=0,h=0,d=0,p=0,u=0;o?e.top<t.top?(r=e.left,n=e.bottom,a=e.right,c=e.bottom,h=t.left,d=t.top,p=t.right,u=t.top):(r=t.left,n=t.bottom,a=t.right,c=t.bottom,h=e.left,d=e.top,p=e.right,u=e.top):e.left<t.left?(r=e.right,n=e.top,a=t.left,c=t.top,h=e.right,d=e.bottom,p=t.left,u=t.bottom):(r=t.right,n=t.top,a=e.left,c=e.top,h=t.right,d=t.bottom,p=e.left,u=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${r}px`),this.style.setProperty("--hover-bridge-top-left-y",`${n}px`),this.style.setProperty("--hover-bridge-top-right-x",`${a}px`),this.style.setProperty("--hover-bridge-top-right-y",`${c}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${h}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${d}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${p}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){let e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else{var e;this.anchor instanceof Element||null!==(e=this.anchor)&&"object"==typeof e&&"getBoundingClientRect"in e&&(!("contextElement"in e)||e.contextElement instanceof Element)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]')}this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){this.anchorEl&&this.active&&(this.cleanup=function(e,t,o,r){let n;void 0===r&&(r={});let{ancestorScroll:a=!0,ancestorResize:c=!0,elementResize:h="function"==typeof ResizeObserver,layoutShift:d="function"==typeof IntersectionObserver,animationFrame:p=!1}=r,u=oX(e),g=a||c?[...u?oK(u):[],...oK(t)]:[];g.forEach(e=>{a&&e.addEventListener("scroll",o,{passive:!0}),c&&e.addEventListener("resize",o)});let f=u&&d?function(e,t){let o,r=null,n=oE(e);function a(){var e;clearTimeout(o),null==(e=r)||e.disconnect(),r=null}return!function c(h,d){void 0===h&&(h=!1),void 0===d&&(d=1),a();let p=e.getBoundingClientRect(),{left:u,top:g,width:f,height:m}=p;if(h||t(),!f||!m)return;let b=oe(g),v=oe(n.clientWidth-(u+f)),y={rootMargin:-b+"px "+-v+"px "+-oe(n.clientHeight-(g+m))+"px "+-oe(u)+"px",threshold:i8(0,i7(1,d))||1},w=!0;function _(t){let r=t[0].intersectionRatio;if(r!==d){if(!w)return c();r?c(!1,r):o=setTimeout(()=>{c(!1,1e-7)},1e3)}1!==r||si(p,e.getBoundingClientRect())||c(),w=!1}try{r=new IntersectionObserver(_,{...y,root:n.ownerDocument})}catch{r=new IntersectionObserver(_,y)}r.observe(e)}(!0),a}(u,o):null,m=-1,b=null;h&&(b=new ResizeObserver(e=>{let[r]=e;r&&r.target===u&&b&&(b.unobserve(t),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var e;null==(e=b)||e.observe(t)})),o()}),u&&!p&&b.observe(u),b.observe(t));let v=p?o1(e):null;return p&&function t(){let r=o1(e);v&&!si(v,r)&&o(),v=r,n=requestAnimationFrame(t)}(),o(),()=>{var e;g.forEach(e=>{a&&e.removeEventListener("scroll",o),c&&e.removeEventListener("resize",o)}),null==f||f(),null==(e=b)||e.disconnect(),b=null,p&&cancelAnimationFrame(n)}}(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){var e,t,o;let r;if(!this.active||!this.anchorEl)return;let n=[{name:"offset",options:e={mainAxis:this.distance,crossAxis:this.skidding},async fn(t){var o,r;let{x:n,y:a,placement:c,middlewareData:h}=t,d=await o$(t,e);return c===(null==(o=h.offset)?void 0:o.placement)&&null!=(r=h.arrow)&&r.alignmentOffset?{}:{x:n+d.x,y:a+d.y,data:{...d,placement:c}}}}];this.sync?n.push(so({apply:({rects:e})=>{let t="width"===this.sync||"both"===this.sync,o="height"===this.sync||"both"===this.sync;this.popup.style.width=t?`${e.reference.width}px`:"",this.popup.style.height=o?`${e.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&n.push({name:"flip",options:t={boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding},async fn(e){var o,r,n,a,c;let{placement:h,middlewareData:d,rects:p,initialPlacement:u,platform:g,elements:f}=e,{mainAxis:m=!0,crossAxis:b=!0,fallbackPlacements:v,fallbackStrategy:y="bestFit",fallbackAxisSideDirection:w="none",flipAlignment:_=!0,...k}=or(t,e);if(null!=(o=d.arrow)&&o.alignmentOffset)return{};let x=on(h),C=od(u),S=on(u)===u,A=await (null==g.isRTL?void 0:g.isRTL(f.floating)),E=v||(S||!_?[ob(u)]:function(e){let t=ob(e);return[op(e),t,op(t)]}(u)),P="none"!==w;!v&&P&&E.push(...function(e,t,o,r){let n=oa(e),a=function(e,t,o){switch(e){case"top":case"bottom":if(o)return t?og:ou;return t?ou:og;case"left":case"right":return t?of:om;default:return[]}}(on(e),"start"===o,r);return n&&(a=a.map(e=>e+"-"+n),t&&(a=a.concat(a.map(op)))),a}(u,_,w,A));let I=[u,...E],R=await ok(e,k),T=[],M=(null==(r=d.flip)?void 0:r.overflows)||[];if(m&&T.push(R[x]),b){let e=function(e,t,o){void 0===o&&(o=!1);let r=oa(e),n=ol(od(e)),a=oc(n),c="x"===n?r===(o?"end":"start")?"right":"left":"start"===r?"bottom":"top";return t.reference[a]>t.floating[a]&&(c=ob(c)),[c,ob(c)]}(h,p,A);T.push(R[e[0]],R[e[1]])}if(M=[...M,{placement:h,overflows:T}],!T.every(e=>e<=0)){let e=((null==(n=d.flip)?void 0:n.index)||0)+1,t=I[e];if(t&&("alignment"!==b||C===od(t)||M.every(e=>od(e.placement)!==C||e.overflows[0]>0)))return{data:{index:e,overflows:M},reset:{placement:t}};let o=null==(a=M.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:a.placement;if(!o)switch(y){case"bestFit":{let e=null==(c=M.filter(e=>{if(P){let t=od(e.placement);return t===C||"y"===t}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:c[0];e&&(o=e);break}case"initialPlacement":o=u}if(h!==o)return{reset:{placement:o}}}return{}}}),this.shift&&n.push({name:"shift",options:o={boundary:this.shiftBoundary,padding:this.shiftPadding},async fn(e){let{x:t,y:r,placement:n}=e,{mainAxis:a=!0,crossAxis:c=!1,limiter:h={fn:e=>{let{x:t,y:o}=e;return{x:t,y:o}}},...d}=or(o,e),p={x:t,y:r},u=await ok(e,d),g=od(on(n)),f=ol(g),m=p[f],b=p[g];if(a){let e="y"===f?"top":"left",t="y"===f?"bottom":"right",o=m+u[e],r=m-u[t];m=i8(o,i7(m,r))}if(c){let e="y"===g?"top":"left",t="y"===g?"bottom":"right",o=b+u[e],r=b-u[t];b=i8(o,i7(b,r))}let v=h.fn({...e,[f]:m,[g]:b});return{...v,data:{x:v.x-t,y:v.y-r,enabled:{[f]:a,[g]:c}}}}}),this.autoSize?n.push(so({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${t}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${e}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&n.push({name:"arrow",options:r={element:this.arrowEl,padding:this.arrowPadding},async fn(e){let{x:t,y:o,placement:n,rects:a,platform:c,elements:h,middlewareData:d}=e,{element:p,padding:u=0}=or(r,e)||{};if(null==p)return{};let g=ov(u),f={x:t,y:o},m=ol(od(n)),b=oc(m),v=await c.getDimensions(p),y="y"===m,w=y?"clientHeight":"clientWidth",_=a.reference[b]+a.reference[m]-f[m]-a.floating[b],k=f[m]-a.reference[m],x=await (null==c.getOffsetParent?void 0:c.getOffsetParent(p)),C=x?x[w]:0;C&&await (null==c.isElement?void 0:c.isElement(x))||(C=h.floating[w]||a.floating[b]);let S=C/2-v[b]/2-1,A=i7(g[y?"top":"left"],S),E=i7(g[y?"bottom":"right"],S),P=C-v[b]-E,I=C/2-v[b]/2+(_/2-k/2),R=i8(A,i7(I,P)),T=!d.arrow&&null!=oa(n)&&I!==R&&a.reference[b]/2-(I<A?A:E)-v[b]/2<0,M=T?I<A?I-A:I-P:0;return{[m]:f[m]+M,data:{[m]:R,centerOffset:I-R-M,...T&&{alignmentOffset:M}},reset:T}}});let a="absolute"===this.strategy?e=>se.getOffsetParent(e,sr):se.getOffsetParent;((e,t,o)=>{let r=new Map,n={platform:se,...o},a={...n.platform,_c:r};return o_(e,t,{...n,platform:a})})(this.anchorEl,this.popup,{placement:this.placement,middleware:n,strategy:this.strategy,platform:iD(iL({},se),{getOffsetParent:a})}).then(({x:e,y:t,middlewareData:o,placement:r})=>{let n="rtl"===this.localize.dir(),a={top:"bottom",right:"left",bottom:"top",left:"right"}[r.split("-")[0]];if(this.setAttribute("data-current-placement",r),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){let e=o.arrow.x,t=o.arrow.y,r="",c="",h="",d="";if("start"===this.arrowPlacement){let o="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";r="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",c=n?o:"",d=n?"":o}else if("end"===this.arrowPlacement){let o="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";c=n?"":o,d=n?o:"",h="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(d="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":"",r="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":""):(d="number"==typeof e?`${e}px`:"",r="number"==typeof t?`${t}px`:"");Object.assign(this.arrowEl.style,{top:r,right:c,bottom:h,left:d,[a]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return t_`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${ss({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${ss({popup:!0,"popup--active":this.active,"popup--fixed":"fixed"===this.strategy,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?t_`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};function sl(e,t){return new Promise(o=>{e.addEventListener(t,function r(n){n.target===e&&(e.removeEventListener(t,r),o())})})}function sc(e,t,o){return new Promise(r=>{if((null==o?void 0:o.duration)===1/0)throw Error("Promise-based animations must be finite.");let n=e.animate(t,iD(iL({},o),{duration:window.matchMedia("(prefers-reduced-motion: reduce)").matches?0:o.duration}));n.addEventListener("cancel",r,{once:!0}),n.addEventListener("finish",r,{once:!0})})}function sh(e){return(e=e.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?1e3*parseFloat(e):parseFloat(e)}function sd(e){return Promise.all(e.getAnimations().map(e=>new Promise(t=>{e.cancel(),requestAnimationFrame(t)})))}function sp(e,t){let o=iL({waitUntilFirstUpdate:!1},t);return(t,r)=>{let{update:n}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach(t=>{if(e.has(t)){let n=e.get(t),a=this[t];n!==a&&(!o.waitUntilFirstUpdate||this.hasUpdated)&&this[r](n,a)}}),n.call(this,e)}}}sa.styles=[i6,iZ],iN([tD(".popup")],sa.prototype,"popup",2),iN([tD(".popup__arrow")],sa.prototype,"arrowEl",2),iN([tM()],sa.prototype,"anchor",2),iN([tM({type:Boolean,reflect:!0})],sa.prototype,"active",2),iN([tM({reflect:!0})],sa.prototype,"placement",2),iN([tM({reflect:!0})],sa.prototype,"strategy",2),iN([tM({type:Number})],sa.prototype,"distance",2),iN([tM({type:Number})],sa.prototype,"skidding",2),iN([tM({type:Boolean})],sa.prototype,"arrow",2),iN([tM({attribute:"arrow-placement"})],sa.prototype,"arrowPlacement",2),iN([tM({attribute:"arrow-padding",type:Number})],sa.prototype,"arrowPadding",2),iN([tM({type:Boolean})],sa.prototype,"flip",2),iN([tM({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(e=>e.trim()).filter(e=>""!==e),toAttribute:e=>e.join(" ")}})],sa.prototype,"flipFallbackPlacements",2),iN([tM({attribute:"flip-fallback-strategy"})],sa.prototype,"flipFallbackStrategy",2),iN([tM({type:Object})],sa.prototype,"flipBoundary",2),iN([tM({attribute:"flip-padding",type:Number})],sa.prototype,"flipPadding",2),iN([tM({type:Boolean})],sa.prototype,"shift",2),iN([tM({type:Object})],sa.prototype,"shiftBoundary",2),iN([tM({attribute:"shift-padding",type:Number})],sa.prototype,"shiftPadding",2),iN([tM({attribute:"auto-size"})],sa.prototype,"autoSize",2),iN([tM()],sa.prototype,"sync",2),iN([tM({type:Object})],sa.prototype,"autoSizeBoundary",2),iN([tM({attribute:"auto-size-padding",type:Number})],sa.prototype,"autoSizePadding",2),iN([tM({attribute:"hover-bridge",type:Boolean})],sa.prototype,"hoverBridge",2);var su=class extends i9{constructor(){super(),this.localize=new i3(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){let e=sh(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){let e=sh(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var e;super.disconnectedCallback(),null==(e=this.closeWatcher)||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?(null==(e=this.closeWatcher)||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await sd(this.body),this.body.hidden=!1,this.popup.active=!0;let{keyframes:t,options:o}=iq(this,"tooltip.show",{dir:this.localize.dir()});await sc(this.popup.popup,t,o),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),null==(t=this.closeWatcher)||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await sd(this.body);let{keyframes:e,options:o}=iq(this,"tooltip.hide",{dir:this.localize.dir()});await sc(this.popup.popup,e,o),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,sl(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,sl(this,"sl-after-hide")}render(){return t_`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${ss({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};su.styles=[i6,iK],su.dependencies={"sl-popup":sa},iN([tD("slot:not([name])")],su.prototype,"defaultSlot",2),iN([tD(".tooltip__body")],su.prototype,"body",2),iN([tD("sl-popup")],su.prototype,"popup",2),iN([tM()],su.prototype,"content",2),iN([tM()],su.prototype,"placement",2),iN([tM({type:Boolean,reflect:!0})],su.prototype,"disabled",2),iN([tM({type:Number})],su.prototype,"distance",2),iN([tM({type:Boolean,reflect:!0})],su.prototype,"open",2),iN([tM({type:Number})],su.prototype,"skidding",2),iN([tM()],su.prototype,"trigger",2),iN([tM({type:Boolean})],su.prototype,"hoist",2),iN([sp("open",{waitUntilFirstUpdate:!0})],su.prototype,"handleOpenChange",1),iN([sp(["content","distance","hoist","placement","skidding"])],su.prototype,"handleOptionsChange",1),iN([sp("disabled")],su.prototype,"handleDisabledChange",1),iH("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}}),iH("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}}),su.define("sl-tooltip");var sg=Object.defineProperty,sf=Object.getOwnPropertyDescriptor,sm=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?sf(t,o):t,c=e.length-1;c>=0;c--)(n=e[c])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&sg(t,o,a),a};iH("tooltip.show",null),iH("tooltip.hide",null);let sb=class extends lit_element_i{constructor(){super(...arguments),this.placement="bottom",this.disabled=!1}firstUpdated(){this.observer=new MutationObserver(e=>{for(let t of e)if("attributes"===t.type&&"data-current-placement"===t.attributeName){let e=t.target.getAttribute("data-current-placement");e?this.setAttribute("data-current-placement",e):this.removeAttribute("data-current-placement")}});let e=this.shadowRoot?.querySelector("sl-tooltip")?.shadowRoot;e&&this.observer.observe(e,{attributes:!0,attributeFilter:["data-current-placement"],subtree:!0})}disconnectedCallback(){this.observer?.disconnect(),super.disconnectedCallback?.()}render(){return t_`<sl-tooltip
			.placement=${this.placement}
			?disabled=${this.disabled}
			.distance=${this.distance??tx}
			hoist
		>
			<slot></slot>
			<div slot="content">
				<slot name="content">${iG(this.content)}</slot>
			</div>
		</sl-tooltip>`}};sb.styles=eZ`
		sl-tooltip {
			--max-width: var(--gl-tooltip-max-width, 320px);
			--hide-delay: 0ms;
			--show-delay: 500ms;
		}

		sl-tooltip::part(base__popup) {
			pointer-events: none;
		}

		sl-tooltip::part(body) {
			border: 1px solid var(--gl-tooltip-border-color);
			box-shadow: 0 2px 8px var(--gl-tooltip-shadow);
		}

		sl-tooltip::part(base__arrow) {
			border: 1px solid var(--gl-tooltip-border-color);
			z-index: 1;
		}

		:host {
			text-transform: var(--gl-tooltip-text-transform, inherit);
		}

		:host([data-current-placement^='top']) sl-tooltip::part(base__arrow) {
			border-top-width: 0;
			border-left-width: 0;
		}

		:host([data-current-placement^='bottom']) sl-tooltip::part(base__arrow) {
			border-bottom-width: 0;
			border-right-width: 0;
		}

		:host([data-current-placement^='left']) sl-tooltip::part(base__arrow) {
			border-bottom-width: 0;
			border-left-width: 0;
		}

		:host([data-current-placement^='right']) sl-tooltip::part(base__arrow) {
			border-top-width: 0;
			border-right-width: 0;
		}

		[slot='content'] hr {
			border: none;
			border-top: 1px solid var(--color-foreground--25);
		}
	`,sm([tM()],sb.prototype,"content",2),sm([tM({reflect:!0})],sb.prototype,"placement",2),sm([tM({type:Boolean})],sb.prototype,"disabled",2),sm([tM({type:Number})],sb.prototype,"distance",2),sm([tM({type:Boolean})],sb.prototype,"hoist",2),sb=sm([tT("gl-tooltip")],sb);let sv=eZ`
	:host {
		box-sizing: border-box;
		display: inline-block;
		vertical-align: text-bottom;
	}

	.pill {
		box-sizing: border-box;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.2rem 0.5rem;
		border-radius: 0.5rem;
		font-size: 1rem;
		font-weight: 500;
		line-height: normal;
		text-transform: uppercase;
		color: var(--gl-pill-foreground, var(--vscode-foreground));
		background-color: var(--gl-pill-background, var(--vscode-editorWidget-background));
		white-space: nowrap;
	}

	.pill--outlined {
		padding: 0.1rem 0.4rem;
		background-color: transparent;
		border: 1px solid var(--gl-pill-border, var(--vscode-foreground));
	}
`;var sy=Object.defineProperty,sw=Object.getOwnPropertyDescriptor,s_=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?sw(t,o):t,c=e.length-1;c>=0;c--)(n=e[c])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&sy(t,o,a),a};let sk=class extends lit_element_i{constructor(){super(...arguments),this.ahead=0,this.behind=0,this.working=0,this.alwaysShow=!1,this.outlined=!1,this.colorized=!1,this.missingUpstream=!1}render(){return 0===this.ahead&&0===this.behind&&0===this.working?this.alwaysShow?this.missingUpstream?t_`<span part="base" class="pill${this.outlined?" pill--outlined":""}">
					<span class="state${this.colorized?" state--missing":""}"
						><code-icon icon="error"></code-icon></span
				></span>`:t_`<span part="base" class="pill${this.outlined?" pill--outlined":""}">
				<span class="state${this.colorized?" state--ahead":""}"><code-icon icon="check"></code-icon></span>
			</span>`:tx:t_`<span part="base" class="pill${this.outlined?" pill--outlined":""}"
			>${tN(this.behind>0,()=>t_`<span class="state${this.colorized?" state--behind":""}"
						>${this.behind}<code-icon icon="arrow-down"></code-icon
					></span>`)}${tN(this.ahead>0,()=>t_`<span class="state${this.colorized?" state--ahead":""}"
						>${this.ahead}<code-icon icon="arrow-up"></code-icon
					></span>`)}${tN(this.working>0,()=>t_`<span class="state${this.colorized?" state--working":""}"
						>${this.working}<span class="working">&#177;</span></span
					>`)}</span
		>`}};function sx(e,t){return null==t?`command:${e}`:`command:${e}?${encodeURIComponent("string"==typeof t?t:JSON.stringify(t))}`}function s$(e,t,o,r=!1,n){let a={name:"",relativePath:"",children:new Map,descendants:[]},c=e.reduce((e,r)=>{let n=e,a="";for(let e of t(r)){a=o(a,e),n.children??=new Map;let t=n.children.get(e);null==t&&(t={name:e,relativePath:a,parent:n,children:void 0,descendants:void 0},n.children.set(e,t)),n.descendants??=[],n.descendants.push(r),n=t}return n.value=r,e},a);return r&&(c=function e(t,o,r=!0,n){if(null==t.children)return t;let a=[...t.children.values()];for(let t of a)e(t,o,!1,n);if(!r&&null==t.value&&1===a.length){let e=a[0];if((null==e.value||n?.(e.value))&&(t.name=o(t.name,e.name),t.relativePath=e.relativePath,t.children=e.children,t.descendants=e.descendants,t.value=e.value,null!=t.children))for(let e of t.children.values())e.parent=t}return t}(c,o,!0,n)),c}sk.styles=[sv,eZ`
			.pill {
				gap: 0.1rem;
				text-transform: none;
			}

			.state {
				-webkit-font-smoothing: antialiased;
				-moz-osx-font-smoothing: grayscale;
			}

			.state--missing code-icon {
				color: var(--gl-tracking-missing);
			}

			.state--ahead code-icon {
				color: var(--gl-tracking-ahead);
			}

			.state--behind code-icon {
				color: var(--gl-tracking-behind);
			}

			.state--working .working {
				color: var(--gl-tracking-working);
			}

			.state code-icon {
				font-size: inherit !important;
				line-height: inherit !important;
			}

			.working {
				display: inline-block;
				width: 1rem;
				text-align: center;
				vertical-align: text-bottom;
				font-weight: normal;
			}
		`],s_([tM({type:Number})],sk.prototype,"ahead",2),s_([tM({type:Number})],sk.prototype,"behind",2),s_([tM({type:Number})],sk.prototype,"working",2),s_([tM({type:Boolean,attribute:"always-show"})],sk.prototype,"alwaysShow",2),s_([tM({type:Boolean})],sk.prototype,"outlined",2),s_([tM({type:Boolean})],sk.prototype,"colorized",2),s_([tM({type:Boolean})],sk.prototype,"missingUpstream",2),sk=s_([tT("gl-tracking-pill")],sk);let sC=eZ`
	clip: rect(0 0 0 0);
	clip-path: inset(50%);
	width: 1px;
	height: 1px;
	overflow: hidden;
	position: absolute;
	white-space: nowrap;
`;eZ`
	.sr-only,
	.sr-only-focusable:not(:active):not(:focus-visible):not(:focus-within) {
		${sC}
	}
`;let sS=eZ`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`,sA=eZ`
	outline: 1px solid var(--color-focus-border);
	outline-offset: 2px;
`;eZ`
	:focus-visible {
		${sS}
	}
`;let sE=eZ`
	:host {
		box-sizing: border-box;
	}
	:host *,
	:host *::before,
	:host *::after {
		box-sizing: inherit;
	}
	[hidden] {
		display: none !important;
	}
`;eZ`
	* {
		box-sizing: border-box;
	}
`,eZ`
	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		${sS}
	}
	a:hover {
		text-decoration: underline;
	}
`;let sP=eZ`
	::-webkit-scrollbar {
		width: 10px;
		height: 10px;
	}
	::-webkit-scrollbar-corner {
		background-color: transparent;
	}

	::-webkit-scrollbar-thumb {
		background-color: transparent;
		border-color: inherit;
		border-right-style: inset;
		border-right-width: calc(100vw + 100vh);
		border-radius: unset !important;
	}
	::-webkit-scrollbar-thumb:hover {
		border-color: var(--vscode-scrollbarSlider-hoverBackground);
	}
	::-webkit-scrollbar-thumb:active {
		border-color: var(--vscode-scrollbarSlider-activeBackground);
	}

	.scrollable {
		border-color: transparent;
		transition: border-color 1s linear;
	}

	:host(:hover) .scrollable,
	:host(:focus-within) .scrollable {
		border-color: var(--vscode-scrollbarSlider-background);
		transition: none;
	}

	:host-context(.preload) .scrollable {
		transition: none;
	}
`;eZ`
	.inline-code {
		background: var(--vscode-textCodeBlock-background);
		border-radius: 3px;
		padding: 0px 4px 2px 4px;
		font-family: var(--vscode-editor-font-family);
	}
`;var sI=Object.defineProperty,sR=Object.getOwnPropertyDescriptor,sT=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?sR(t,o):t,c=e.length-1;c>=0;c--)(n=e[c])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&sI(t,o,a),a};let sz=class extends lit_element_i{constructor(){super(...arguments),this.mode="infinite",this.active=!1,this.position="bottom"}firstUpdated(){this.setAttribute("role","progressbar")}render(){return t_`<div class="progress-bar"></div>`}};sz.styles=eZ`
		* {
			box-sizing: border-box;
		}

		:host {
			position: absolute;
			left: 0;
			z-index: 5;
			height: 2px;
			width: 100%;
			overflow: hidden;
		}

		:host([position='bottom']) {
			bottom: 0;
		}

		:host([position='top']) {
			top: 0;
		}

		.progress-bar {
			background-color: var(--vscode-progressBar-background);
			display: none;
			position: absolute;
			left: 0;
			width: 2%;
			height: 2px;
		}

		:host([active]:not([active='false'])) .progress-bar {
			display: inherit;
		}

		:host([mode='discrete']) .progress-bar {
			left: 0;
			transition: width 0.1s linear;
		}

		:host([mode='discrete done']) .progress-bar {
			width: 100%;
		}

		:host([mode='infinite']) .progress-bar {
			animation-name: progress;
			animation-duration: 4s;
			animation-iteration-count: infinite;
			animation-timing-function: steps(100);
			transform: translateZ(0);
		}

		@keyframes progress {
			0% {
				transform: translateX(0) scaleX(1);
			}

			50% {
				transform: translateX(2500%) scaleX(3);
			}

			to {
				transform: translateX(4900%) scaleX(1);
			}
		}
	`,sT([tM({reflect:!0})],sz.prototype,"mode",2),sT([tM({type:Boolean})],sz.prototype,"active",2),sT([tM()],sz.prototype,"position",2),sz=sT([tT("progress-indicator")],sz);var sM=Object.defineProperty,sO=Object.getOwnPropertyDescriptor,sL=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?sO(t,o):t,c=e.length-1;c>=0;c--)(n=e[c])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&sM(t,o,a),a};let sD=class extends lit_element_i{constructor(){super(...arguments),this.collapsable=!1,this.expanded=!1,this.loading=!1}renderTitle(){return this.collapsable?t_`<button
			type="button"
			class="label"
			aria-controls="content"
			aria-expanded=${this.expanded}
			@click="${this.toggleExpanded}"
		>
			<code-icon class="icon" icon=${this.expanded?"chevron-down":"chevron-right"}></code-icon
			><span class="title"><slot name="title">Section</slot></span>
			<span class="subtitle"><slot name="subtitle"></slot></span>
		</button>`:t_`<div class="label">
				<span class="title"><slot name="title">Section</slot></span>
				<span class="subtitle"><slot name="subtitle"></slot></span>
			</div>`}render(){return t_`
			<header class="header">
				${this.renderTitle()}
				<slot name="actions"></slot>
				<progress-indicator ?active="${this.loading}"></progress-indicator>
			</header>
			<div id="content" role="region" part="content" class="content scrollable">
				<slot></slot>
			</div>
		`}toggleExpanded(){this.expanded=!this.expanded,this.dispatchEvent(new CustomEvent("expanded-change",{detail:{expanded:this.expanded},bubbles:!0,composed:!0}))}};sD.styles=[sP,eZ`
			:host {
				display: flex;
				flex-direction: column;
				background-color: var(--vscode-sideBar-background);
				min-height: 23px;
			}

			* {
				box-sizing: border-box;
			}

			.header {
				flex: none;
				display: flex;
				background-color: var(--vscode-sideBarSectionHeader-background);
				color: var(--vscode-sideBarSectionHeader-foreground);
				border-top: 1px solid var(--vscode-sideBarSectionHeader-border);
				position: relative;
			}

			.header:focus-within {
				outline: 1px solid var(--vscode-focusBorder);
				outline-offset: -1px;
			}

			.label {
				appearance: none;
				display: flex;
				flex-direction: row;
				align-items: center;
				width: 100%;
				padding: 0;
				border: none;
				text-align: left;
				font-family: var(--font-family);
				font-size: 1.1rem;
				line-height: 2.2rem;
				height: 2.2rem;
				background: transparent;
				color: inherit;
				outline: none;
				text-overflow: ellipsis;
				user-select: none;
			}

			:host([collapsable]) .label {
				cursor: pointer;
			}

			.title {
				font-weight: bold;
				text-transform: uppercase;
			}

			:host(:not([collapsable])) .title {
				margin-left: 0.8rem;
			}

			.subtitle {
				margin-left: 1rem;
				opacity: 0.6;
			}

			.icon {
				font-weight: normal;
				margin: 0 0.2rem;
			}

			.content {
				flex: 1;
				overflow: auto;
				min-height: 0;
				/*
			scrollbar-gutter: stable;
			box-shadow: #000000 0 0.6rem 0.6rem -0.6rem inset;
			*/
				padding-top: 0.6rem;
			}

			:host([collapsable]:not([expanded])) .content,
			:host([collapsable][expanded='false']) .content {
				display: none;
			}

			slot[name='actions']::slotted(*) {
				flex: none;
				margin-left: auto;
			}
		`],sL([tM({type:Boolean,reflect:!0})],sD.prototype,"collapsable",2),sL([tM({type:Boolean,reflect:!0})],sD.prototype,"expanded",2),sL([tM({type:Boolean,reflect:!0})],sD.prototype,"loading",2),sD=sL([tT("webview-pane")],sD);let sN=navigator?.userAgentData?.platform,sB=navigator.userAgent;"Linux"===sN||sB.includes("Linux");let sF="macOS"===sN||sB.includes("Macintosh");function sj(){return sF?"⌥":"Alt"}"Windows"===sN||sB.includes("Windows");var sU=Object.defineProperty,sH=Object.getOwnPropertyDescriptor,sq=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?sH(t,o):t,c=e.length-1;c>=0;c--)(n=e[c])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&sU(t,o,a),a};let sV=class extends lit_element_i{constructor(){super(...arguments),this.icon="",this.disabled=!1,this.isAltKeyPressed=!1,this.handleLinkKeydown=e=>{this.effectiveHref||" "!==e.key&&"Enter"!==e.key||(e.preventDefault(),e.target.click())}}get effectiveIcon(){return this.isAltKeyPressed&&this.altIcon?this.altIcon:this.icon}get effectiveTooltip(){if(this.label||this.altLabel)return this.altLabel?this.isAltKeyPressed?this.altLabel:`${this.label}
[${sj()}] ${this.altLabel}`:this.label}get effectiveLabel(){if(this.label||this.altLabel)return this.altLabel&&this.isAltKeyPressed?this.altLabel:this.label}get effectiveHref(){return this.isAltKeyPressed&&this.altHref?this.altHref:this.href}connectedCallback(){super.connectedCallback?.(),window.addEventListener("keydown",this),window.addEventListener("keyup",this)}disconnectedCallback(){super.disconnectedCallback?.(),window.removeEventListener("keydown",this),window.removeEventListener("keyup",this)}handleEvent(e){let t="Alt"===e.key||e.altKey;"keydown"===e.type?this.isAltKeyPressed=t:"keyup"===e.type&&t&&(this.isAltKeyPressed=!1)}render(){return t_`
			<gl-tooltip hoist content="${this.effectiveTooltip??tx}">
				<a
					role="${!this.effectiveHref?"button":tx}"
					type="${!this.effectiveHref?"button":tx}"
					aria-label="${this.effectiveLabel??tx}"
					?disabled=${this.disabled}
					href=${this.effectiveHref??tx}
					tabindex="0"
					@keydown=${this.handleLinkKeydown}
				>
					<code-icon icon="${this.effectiveIcon}"></code-icon>
				</a>
			</gl-tooltip>
		`}focus(e){this.defaultFocusEl.focus(e)}};sV.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},sV.styles=eZ`
		:host {
			box-sizing: border-box;
			display: inline-flex;
			justify-content: center;
			align-items: center;
			width: 2rem;
			height: 2rem;
			border-radius: 0.5rem;
			color: var(--vscode-icon-foreground);
			padding: 0.2rem;
			vertical-align: text-bottom;
			text-decoration: none;
			cursor: pointer;
		}

		:host(:focus-within) {
			${sS}
		}

		:host(:hover),
		:host(:focus-within) {
			background-color: var(--vscode-toolbar-hoverBackground);
		}

		:host(:active) {
			background-color: var(--vscode-toolbar-activeBackground);
		}

		:host([disabled]) {
			pointer-events: none;
			opacity: 0.5;
		}

		a {
			color: inherit;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: 100%;
		}
		a:focus {
			outline: none;
		}
	`,sq([tM()],sV.prototype,"href",2),sq([tM({attribute:"alt-href"})],sV.prototype,"altHref",2),sq([tM()],sV.prototype,"label",2),sq([tM({attribute:"alt-label"})],sV.prototype,"altLabel",2),sq([tM()],sV.prototype,"icon",2),sq([tM({attribute:"alt-icon"})],sV.prototype,"altIcon",2),sq([tM({type:Boolean})],sV.prototype,"disabled",2),sq([tD("a")],sV.prototype,"defaultFocusEl",2),sq([tO()],sV.prototype,"isAltKeyPressed",2),sV=sq([tT("action-item")],sV);var sW=Object.defineProperty,sG=Object.getOwnPropertyDescriptor,sK=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?sG(t,o):t,c=e.length-1;c>=0;c--)(n=e[c])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&sW(t,o,a),a};let sZ=class extends lit_element_i{firstUpdated(){this.role="navigation"}disconnectedCallback(){this._slotSubscriptionsDisposer?.(),super.disconnectedCallback?.()}render(){return t_`<slot @slotchange=${this.handleSlotChange}></slot>`}handleSlotChange(e){if(this._slotSubscriptionsDisposer?.(),this.actionNodes.length<1)return;let t=this.handleKeydown.bind(this),o=`${this.actionNodes.length}`,r=this.actionNodes.map((e,r)=>(e.setAttribute("aria-posinset",`${r+1}`),e.setAttribute("aria-setsize",o),e.setAttribute("tabindex",0===r?"0":"-1"),this.actionNodes.length>=2&&e.addEventListener("keydown",t,!1),{dispose:()=>{e?.removeEventListener("keydown",t,!1)}}));this._slotSubscriptionsDisposer=()=>{r?.forEach(({dispose:e})=>e())}}handleKeydown(e){if(!e.target||null==this.actionNodes)return;let t=e.target,o=parseInt(t.getAttribute("aria-posinset")??"0",10);if("ArrowLeft"!==e.key&&"ArrowRight"!==e.key||this.actionNodes.length<2)return;let r=null;if("ArrowLeft"===e.key){let e=1===o?this.actionNodes.length-1:o-2;r=this.actionNodes[e]}else if("ArrowRight"===e.key){let e=o===this.actionNodes.length?0:o;r=this.actionNodes[e]}null!=r&&r!==t&&(e.preventDefault(),e.stopPropagation(),t.setAttribute("tabindex","-1"),r.setAttribute("tabindex","0"),r.focus())}};sZ.styles=eZ`
		:host {
			display: flex;
			align-items: center;
			user-select: none;
		}
	`,sK([(f={flatten:!0},(e,t)=>{let{slot:o,selector:r}=f??{},n="slot"+(o?`[name=${o}]`:":not([name])");return tL(e,t,{get(){let e=this.renderRoot?.querySelector(n),t=e?.assignedElements(f)??[];return void 0===r?t:t.filter(e=>e.matches(r))}})})],sZ.prototype,"actionNodes",2),sZ=sK([tT("action-nav")],sZ);var sY=w(5090);let{I:sX}={M:to,P:ts,A:tr,C:1,L:tA,R:lit_html_M,D:td,V:tE,I:lit_html_R,H:lit_html_k,N:lit_html_I,U:lit_html_L,B:lit_html_H,F:z},sQ=()=>document.createComment(""),sJ=(e,t,o)=>{let r=e._$AA.parentNode,n=void 0===t?e._$AB:t._$AA;if(void 0===o)o=new sX(r.insertBefore(sQ(),n),r.insertBefore(sQ(),n),e,e.options);else{let t=o._$AB.nextSibling,a=o._$AM,c=a!==e;if(c){let t;o._$AQ?.(e),o._$AM=e,void 0!==o._$AP&&(t=e._$AU)!==a._$AU&&o._$AP(t)}if(t!==n||c){let e=o._$AA;for(;e!==t;){let t=e.nextSibling;r.insertBefore(e,n),e=t}}}return o},s0=(e,t,o=e)=>(e._$AI(t,o),e),s1={},s2=e=>{e._$AR(),e._$AA.remove()},s5=(e,t)=>{let o=e._$AN;if(void 0===o)return!1;for(let e of o)e._$AO?.(t,!1),s5(e,t);return!0},s3=e=>{let t,o;do{if(void 0===(t=e._$AM))break;(o=t._$AN).delete(e),e=t}while(0===o?.size)},s6=e=>{for(let t;t=e._$AM;e=t){let o=t._$AN;if(void 0===o)t._$AN=o=new Set;else if(o.has(e))break;o.add(e),s8(t)}};function s9(e){void 0!==this._$AN?(s3(this),this._$AM=e,s6(this)):this._$AM=e}function s7(e,t=!1,o=0){let r=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(t)if(Array.isArray(r))for(let e=o;e<r.length;e++)s5(r[e],!1),s3(r[e]);else null!=r&&(s5(r,!1),s3(r));else s5(this,e)}let s8=e=>{2==e.type&&(e._$AP??=s7,e._$AQ??=s9)};let async_directive_f=class async_directive_f extends directive_i{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,o){super._$AT(e,t,o),s6(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(s5(this,e),s3(this))}setValue(e){if(void 0===this._$Ct.strings)this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};let s4=()=>new ref_h;let ref_h=class ref_h{};let re=new WeakMap,ri=iV(class extends async_directive_f{render(e){return tx}update(e,[t]){let o=t!==this.G;return o&&void 0!==this.G&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),tx}rt(e){if(this.isConnected||(e=void 0),"function"==typeof this.G){let t=this.ht??globalThis,o=re.get(t);void 0===o&&(o=new WeakMap,re.set(t,o)),void 0!==o.get(this.G)&&this.G.call(this.ht,void 0),o.set(this.G,e),void 0!==e&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return"function"==typeof this.G?re.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),ro=new WeakMap;function rs(e,t){return function(o,r,n){let a=ro.get(o.constructor);null==a&&ro.set(o.constructor,a=[]),a.push({method:n.value,keys:Array.isArray(e)?e:[e],afterFirstUpdate:t?.afterFirstUpdate??!1})}}let GlElement=class GlElement extends lit_element_i{emit(e,t,o){let r=new CustomEvent(e,{bubbles:!0,cancelable:!1,composed:!0,...o,detail:t});return this.dispatchEvent(r),r}update(e){let t=ro.get(this.constructor);if(null!=t)for(let{keys:o,method:r,afterFirstUpdate:n}of t){if(n&&!this.hasUpdated)continue;let t=o.filter(t=>e.has(t));t.length&&r.call(this,t)}super.update(e)}};function rr(e,t,o,r){var n,a=arguments.length,c=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,r);else for(var h=e.length-1;h>=0;h--)(n=e[h])&&(c=(a<3?n(c):a>3?n(t,o,c):n(t,o))||c);return a>3&&c&&Object.defineProperty(t,o,c),c}"function"==typeof SuppressedError&&SuppressedError;let rn=(e,t,o)=>{let r=new Map;for(let n=t;n<=o;n++)r.set(e[n],n);return r},ra=iV(class extends directive_i{constructor(e){if(super(e),2!==e.type)throw Error("repeat() can only be used in text expressions")}dt(e,t,o){let r;void 0===o?o=t:void 0!==t&&(r=t);let n=[],a=[],c=0;for(let t of e)n[c]=r?r(t,c):c,a[c]=o(t,c),c++;return{values:a,keys:n}}render(e,t,o){return this.dt(e,t,o).values}update(e,[t,o,r]){let n=e._$AH,{values:a,keys:c}=this.dt(t,o,r);if(!Array.isArray(n))return this.ut=c,a;let h=this.ut??=[],d=[],p,u,g=0,f=n.length-1,m=0,b=a.length-1;for(;g<=f&&m<=b;)if(null===n[g])g++;else if(null===n[f])f--;else if(h[g]===c[m])d[m]=s0(n[g],a[m]),g++,m++;else if(h[f]===c[b])d[b]=s0(n[f],a[b]),f--,b--;else if(h[g]===c[b])d[b]=s0(n[g],a[b]),sJ(e,d[b+1],n[g]),g++,b--;else if(h[f]===c[m])d[m]=s0(n[f],a[m]),sJ(e,n[g],n[f]),f--,m++;else if(void 0===p&&(p=rn(c,m,b),u=rn(h,g,f)),p.has(h[g]))if(p.has(h[f])){let t=u.get(c[m]),o=void 0!==t?n[t]:null;if(null===o){let t=sJ(e,n[g]);s0(t,a[m]),d[m]=t}else d[m]=s0(o,a[m]),sJ(e,n[g],o),n[t]=null;m++}else s2(n[f]),f--;else s2(n[g]),g++;for(;m<=b;){let t=sJ(e,d[b+1]);s0(t,a[m]),d[m++]=t}for(;g<=f;){let e=n[g++];null!==e&&s2(e)}return this.ut=c,((e,t=s1)=>e._$AH=t)(e,d),tk}});let RangeChangedEvent=class RangeChangedEvent extends Event{constructor(e){super(RangeChangedEvent.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}};RangeChangedEvent.eventName="rangeChanged";let VisibilityChangedEvent=class VisibilityChangedEvent extends Event{constructor(e){super(VisibilityChangedEvent.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}};VisibilityChangedEvent.eventName="visibilityChanged";let UnpinnedEvent=class UnpinnedEvent extends Event{constructor(){super(UnpinnedEvent.eventName,{bubbles:!1})}};UnpinnedEvent.eventName="unpinned";let ScrollerShim=class ScrollerShim{constructor(e){this._element=null;let t=e??window;this._node=t,e&&(this._element=e)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}};let ScrollerController=class ScrollerController extends ScrollerShim{constructor(e,t){super(t),this._clients=new Set,this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1,this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this);let o=this._node;this._originalScrollTo=o.scrollTo,this._originalScrollBy=o.scrollBy,this._originalScroll=o.scroll,this._attach(e)}get _destination(){return this.__destination}get scrolling(){return null!==this._destination}scrollTo(e,t){this._scrollTo("number"==typeof e&&"number"==typeof t?{left:e,top:t}:e)}scrollBy(e,t){let o="number"==typeof e&&"number"==typeof t?{left:e,top:t}:e;void 0!==o.top&&(o.top+=this.scrollTop),void 0!==o.left&&(o.left+=this.scrollLeft),this._scrollTo(o)}_nativeScrollTo(e){this._originalScrollTo.bind(this._element||window)(e)}_scrollTo(e,t=null,o=null){null!==this._end&&this._end(),"smooth"===e.behavior?(this._setDestination(e),this._retarget=t,this._end=o):this._resetScrollState(),this._nativeScrollTo(e)}_setDestination(e){let{top:t,left:o}=e;return t=void 0===t?void 0:Math.max(0,Math.min(t,this.maxScrollTop)),o=void 0===o?void 0:Math.max(0,Math.min(o,this.maxScrollLeft)),(null===this._destination||o!==this._destination.left||t!==this._destination.top)&&(this.__destination={top:t,left:o,behavior:"smooth"},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(e){this._destination&&this._setDestination(e)&&this._nativeScrollTo(this._destination)}managedScrollTo(e,t,o){return this._scrollTo(e,t,o),this._updateManagedScrollTo}correctScrollError(e){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(e),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(null!==this._destination){let{scrollTop:e,scrollLeft:t}=this,{top:o,left:r}=this._destination;o=Math.min(o||0,this.maxScrollTop);let n=Math.abs((r=Math.min(r||0,this.maxScrollLeft))-t);1>Math.abs(o-e)&&n<1&&(this._end&&this._end(),this._resetScrollState())}}detach(e){return this._clients.delete(e),0===this._clients.size&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener("scroll",this._checkForArrival)),null}_attach(e){this._clients.add(e),1===this._clients.size&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener("scroll",this._checkForArrival))}};let rl="undefined"!=typeof window?window.ResizeObserver:void 0,rc=Symbol("virtualizerRef"),rh="virtualizer-sizer";let Virtualizer=class Virtualizer{constructor(e){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,this._layoutInitialized=null,this._connected=!1,!e)throw Error("Virtualizer constructor requires a configuration object");if(e.hostElement)this._init(e);else throw Error('Virtualizer configuration requires the "hostElement" property')}set items(e){Array.isArray(e)&&e!==this._items&&(this._itemsChanged=!0,this._items=e,this._schedule(this._updateLayout))}_init(e){this._isScroller=!!e.scroller,this._initHostElement(e);let t=e.layout||{};this._layoutInitialized=this._initLayout(t)}_initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this)),this._hostElementRO=new rl(()=>this._hostElementSizeChanged()),this._childrenRO=new rl(this._childrenSizeChanged.bind(this))}_initHostElement(e){let t=this._hostElement=e.hostElement;this._applyVirtualizerStyles(),t[rc]=this}connected(){this._initObservers();let e=this._isScroller;this._clippingAncestors=function(e,t=!1){let o=!1;return(function(e,t=!1){let o=[],r=t?e:rp(e);for(;null!==r;)o.push(r),r=rp(r);return o})(e,t).filter(e=>{if(o)return!1;let t=getComputedStyle(e);return o="fixed"===t.position,"visible"!==t.overflow})}(this._hostElement,e),this._scrollerController=new ScrollerController(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen(),this._connected=!0}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener("scroll",this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(e=>{e.addEventListener("scroll",this,this._scrollEventListenerOptions),this._scrollEventListeners.push(e),this._hostElementRO.observe(e)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(e=>this._childrenRO.observe(e)),this._scrollEventListeners.forEach(e=>e.addEventListener("scroll",this,this._scrollEventListenerOptions))}disconnected(){this._scrollEventListeners.forEach(e=>e.removeEventListener("scroll",this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],this._scrollerController?.detach(this),this._scrollerController=null,this._mutationObserver?.disconnect(),this._mutationObserver=null,this._hostElementRO?.disconnect(),this._hostElementRO=null,this._childrenRO?.disconnect(),this._childrenRO=null,this._rejectLayoutCompletePromise("disconnected"),this._connected=!1}_applyVirtualizerStyles(){let e=this._hostElement.style;e.display=e.display||"block",e.position=e.position||"relative",e.contain=e.contain||"size layout",this._isScroller&&(e.overflow=e.overflow||"auto",e.minHeight=e.minHeight||"150px")}_getSizer(){let e=this._hostElement;if(!this._sizer){let t=e.querySelector(`[${rh}]`);t||((t=document.createElement("div")).setAttribute(rh,""),e.appendChild(t)),Object.assign(t.style,{position:"absolute",margin:"-2px 0 0 0",padding:0,visibility:"hidden",fontSize:"2px"}),t.textContent="&nbsp;",t.setAttribute(rh,""),this._sizer=t}return this._sizer}async updateLayoutConfig(e){await this._layoutInitialized;let t=e.type||c;if("function"==typeof t&&this._layout instanceof t){let t={...e};return delete t.type,this._layout.config=t,!0}return!1}async _initLayout(e){let t,o;if("function"==typeof e.type){o=e.type;let r={...e};delete r.type,t=r}else t=e;void 0===o&&(c=o=(await Promise.resolve().then(w.bind(w,5090))).FlowLayout),this._layout=new o(e=>this._handleLayoutMessage(e),t),this._layout.measureChildren&&"function"==typeof this._layout.updateItemSizes&&("function"==typeof this._layout.measureChildren&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener("load",this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){null===this._benchmarkStart&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(null!==this._benchmarkStart){let e=window.performance.now(),t=e-this._benchmarkStart,o=performance.getEntriesByName("uv-virtualizing","measure").filter(t=>t.startTime>=this._benchmarkStart&&t.startTime<e).reduce((e,t)=>e+t.duration,0);return this._benchmarkStart=null,{timeElapsed:t,virtualizationTime:o}}return null}_measureChildren(){let e={},t=this._children,o=this._measureChildOverride||this._measureChild;for(let r=0;r<t.length;r++){let n=t[r],a=this._first+r;(this._itemsChanged||this._toBeMeasured.has(n))&&(e[a]=o.call(this,n,this._items[a]))}this._childMeasurements=e,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(e){let{width:t,height:o}=e.getBoundingClientRect();return Object.assign({width:t,height:o},function(e){let t=window.getComputedStyle(e);return{marginTop:rd(t.marginTop),marginRight:rd(t.marginRight),marginBottom:rd(t.marginBottom),marginLeft:rd(t.marginLeft)}}(e))}async _schedule(e){this._scheduled.has(e)||(this._scheduled.add(e),await Promise.resolve(),this._scheduled.delete(e),e.call(this))}async _updateDOM(e){this._scrollSize=e.scrollSize,this._adjustRange(e.range),this._childrenPos=e.childPositions,this._scrollError=e.scrollError||null;let{_rangeChanged:t,_itemsChanged:o}=this;this._visibilityChanged&&(this._notifyVisibility(),this._visibilityChanged=!1),(t||o)&&(this._notifyRange(),this._rangeChanged=!1),this._finishDOMUpdate()}_finishDOMUpdate(){this._connected&&(this._children.forEach(e=>this._childrenRO.observe(e)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_updateLayout(){this._layout&&this._connected&&(this._layout.items=this._items,this._updateView(),null!==this._childMeasurements&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_handleScrollEvent(){if(this._benchmarkStart&&"mark"in window.performance){try{window.performance.measure("uv-virtualizing","uv-start","uv-end")}catch{}window.performance.mark("uv-start")}!1===this._scrollerController.correctingScrollError&&this._layout?.unpin(),this._schedule(this._updateLayout)}handleEvent(e){"scroll"===e.type&&(e.currentTarget===window||this._clippingAncestors.includes(e.currentTarget))&&this._handleScrollEvent()}_handleLayoutMessage(e){"stateChanged"===e.type?this._updateDOM(e):"visibilityChanged"===e.type?(this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._notifyVisibility()):"unpinned"===e.type&&this._hostElement.dispatchEvent(new UnpinnedEvent)}get _children(){let e=[],t=this._hostElement.firstElementChild;for(;t;)t.hasAttribute(rh)||e.push(t),t=t.nextElementSibling;return e}_updateView(){let e=this._hostElement,t=this._scrollerController?.element,o=this._layout;if(e&&t&&o){let r,n,a,c,h=e.getBoundingClientRect();r=0,n=0,a=window.innerHeight,c=window.innerWidth;let d=this._clippingAncestors.map(e=>e.getBoundingClientRect());for(let e of(d.unshift(h),d))r=Math.max(r,e.top),n=Math.max(n,e.left),a=Math.min(a,e.bottom),c=Math.min(c,e.right);let p=t.getBoundingClientRect(),u={left:h.left-p.left,top:h.top-p.top},g={width:t.scrollWidth,height:t.scrollHeight},f=r-h.top+e.scrollTop,m=n-h.left+e.scrollLeft;o.viewportSize={width:Math.max(0,c-n),height:Math.max(0,a-r)},o.viewportScroll={top:f,left:m},o.totalScrollSize=g,o.offsetWithinScroller=u}}_sizeHostElement(e){let t=e&&null!==e.width?Math.min(82e5,e.width):0,o=e&&null!==e.height?Math.min(82e5,e.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${t}px, ${o}px)`;else{let e=this._hostElement.style;e.minWidth=t?`${t}px`:"100%",e.minHeight=o?`${o}px`:"100%"}}_positionChildren(e){e&&e.forEach(({top:e,left:t,width:o,height:r,xOffset:n,yOffset:a},c)=>{let h=this._children[c-this._first];h&&(h.style.position="absolute",h.style.boxSizing="border-box",h.style.transform=`translate(${t}px, ${e}px)`,void 0!==o&&(h.style.width=o+"px"),void 0!==r&&(h.style.height=r+"px"),h.style.left=void 0===n?null:n+"px",h.style.top=void 0===a?null:a+"px")})}async _adjustRange(e){let{_first:t,_last:o,_firstVisible:r,_lastVisible:n}=this;this._first=e.first,this._last=e.last,this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==t||this._last!==o,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==r||this._lastVisible!==n}_correctScrollError(){if(this._scrollError){let{scrollTop:e,scrollLeft:t}=this._scrollerController,{top:o,left:r}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:e-o,left:t-r})}}element(e){return e===1/0&&(e=this._items.length-1),this._items?.[e]===void 0?void 0:{scrollIntoView:(t={})=>this._scrollElementIntoView({...t,index:e})}}_scrollElementIntoView(e){if(e.index>=this._first&&e.index<=this._last)this._children[e.index-this._first].scrollIntoView(e);else if(e.index=Math.min(e.index,this._items.length-1),"smooth"===e.behavior){let t=this._layout.getScrollIntoViewCoordinates(e),{behavior:o}=e;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(t,{behavior:o}),()=>this._layout.getScrollIntoViewCoordinates(e),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=e}else this._layout.pin=e}_checkScrollIntoViewTarget(e){let{index:t}=this._scrollIntoViewTarget||{};t&&e?.has(t)&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new RangeChangedEvent({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new VisibilityChangedEvent({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||(this._layoutCompletePromise=new Promise((e,t)=>{this._layoutCompleteResolver=e,this._layoutCompleteRejecter=t})),this._layoutCompletePromise}_rejectLayoutCompletePromise(e){null!==this._layoutCompleteRejecter&&this._layoutCompleteRejecter(e),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&null===this._pendingLayoutComplete&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){null!==this._layoutCompleteResolver&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(e){if(this._layout?.measureChildren){for(let t of e)this._toBeMeasured.set(t.target,t.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}};function rd(e){let t=e?parseFloat(e):NaN;return Number.isNaN(t)?0:t}function rp(e){if(null!==e.assignedSlot)return e.assignedSlot;if(null!==e.parentElement)return e.parentElement;let t=e.parentNode;return t&&t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&t.host||null}let ru=e=>e,rg=(e,t)=>t_`${t}: ${JSON.stringify(e,null,2)}`;let VirtualizeDirective=class VirtualizeDirective extends async_directive_f{constructor(e){if(super(e),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(e,t)=>rg(e,t+this._first),this._keyFunction=(e,t)=>ru(e,t+this._first),this._items=[],2!==e.type)throw Error("The virtualize directive can only be used in child expressions")}render(e){e&&this._setFunctions(e);let t=[];if(this._first>=0&&this._last>=this._first)for(let e=this._first;e<=this._last;e++)t.push(this._items[e]);return ra(t,this._keyFunction,this._renderItem)}update(e,[t]){this._setFunctions(t);let o=this._items!==t.items;return this._items=t.items||[],this._virtualizer?this._updateVirtualizerConfig(e,t):this._initialize(e,t),o?tk:this.render()}async _updateVirtualizerConfig(e,t){if(!await this._virtualizer.updateLayoutConfig(t.layout||{})){let o=e.parentNode;this._makeVirtualizer(o,t)}this._virtualizer.items=this._items}_setFunctions(e){let{renderItem:t,keyFunction:o}=e;t&&(this._renderItem=(e,o)=>t(e,o+this._first)),o&&(this._keyFunction=(e,t)=>o(e,t+this._first))}_makeVirtualizer(e,t){this._virtualizer&&this._virtualizer.disconnected();let{layout:o,scroller:r,items:n}=t;this._virtualizer=new Virtualizer({hostElement:e,layout:o,scroller:r}),this._virtualizer.items=n,this._virtualizer.connected()}_initialize(e,t){let o=e.parentNode;o&&1===o.nodeType&&(o.addEventListener("rangeChanged",e=>{this._first=e.first,this._last=e.last,this.setValue(this.render())}),this._makeVirtualizer(o,t))}disconnected(){this._virtualizer?.disconnected()}reconnected(){this._virtualizer?.connected()}};let rf=iV(VirtualizeDirective);let LitVirtualizer=class LitVirtualizer extends lit_element_i{constructor(){super(...arguments),this.items=[],this.renderItem=rg,this.keyFunction=ru,this.layout={},this.scroller=!1}createRenderRoot(){return this}render(){let{items:e,renderItem:t,keyFunction:o,layout:r,scroller:n}=this;return t_`${rf({items:e,renderItem:t,keyFunction:o,layout:r,scroller:n})}`}element(e){return this[rc]?.element(e)}get layoutComplete(){return this[rc]?.layoutComplete}scrollToIndex(e,t="start"){this.element(e)?.scrollIntoView({block:t})}};rr([tM({attribute:!1})],LitVirtualizer.prototype,"items",void 0),rr([tM()],LitVirtualizer.prototype,"renderItem",void 0),rr([tM()],LitVirtualizer.prototype,"keyFunction",void 0),rr([tM({attribute:!1})],LitVirtualizer.prototype,"layout",void 0),rr([tM({reflect:!0,type:Boolean})],LitVirtualizer.prototype,"scroller",void 0),customElements.define("lit-virtualizer",LitVirtualizer);let rm={".":"Unchanged","!":"Ignored","?":"Untracked",A:"Added",D:"Deleted",M:"Modified",R:"Renamed",C:"Copied",AA:"Conflict",AU:"Conflict",UA:"Conflict",DD:"Conflict",DU:"Conflict",UD:"Conflict",UU:"Conflict",T:"Modified",U:"Updated but Unmerged"};var rb=Object.defineProperty,rv=Object.getOwnPropertyDescriptor,ry=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?rv(t,o):t,c=e.length-1;c>=0;c--)(n=e[c])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&rb(t,o,a),a};let rw=class extends lit_element_i{get statusName(){return this.status?rm[this.status]??"Unknown":""}updated(e){super.updated(e),e.has("status")&&(this.statusName?this.setAttribute("title",this.statusName):this.removeAttribute("title"))}renderIgnored(){return t_`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#969696"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM10 4l-6.01 6.01 1.06 1.061 6.01-6.01L10 4z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderUntracked(){return t_`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#6C6C6C"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm-3.942-3.942l7.5-7.5.884.884-.664.664c.95.655 1.65 1.524 2.222 2.394-1.15 1.75-2.824 3.5-6 3.5-.696 0-1.32-.084-1.882-.234l-1.176 1.176-.884-.884zm5.188-3.42l1.629-1.629c.634.393 1.147.913 1.594 1.491C10.99 8.767 9.692 9.75 7.5 9.75c-.287 0-.56-.017-.817-.05l.455-.454a1.5 1.5 0 0 0 1.608-1.608zM7.362 6.254L5.754 7.862a1.5 1.5 0 0 1 1.608-1.608zm.955-.955A6.595 6.595 0 0 0 7.5 5.25c-2.192 0-3.49.982-4.469 2.25.447.578.96 1.098 1.594 1.491l-.903.903C2.772 9.239 2.072 8.369 1.5 7.5 2.65 5.75 4.324 4 7.5 4c.696 0 1.32.084 1.882.234L8.317 5.299z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderAdded(){return t_`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#388A34"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm.75-6.75h3v-1.5h-3v-3h-1.5v3h-3v1.5h3v3h1.5v-3z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderDeleted(){return t_`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#9E121D"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm3.75-6.75v-1.5h-7.5v1.5h7.5z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderModified(){return t_`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#1B80B2"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm3.75-9.5V7h-3v2.5h-1.5V7h-3V5.5h3v-3h1.5v3h3zm0 5V12h-7.5v-1.5h7.5z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderRenamed(){return t_`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#C63"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM9.25 4.5v1.25h1.25l1 1v2.5l-1 1H9.25v1.25H10v1.25H7V11.5h.75v-1.25H4l-1-1v-2.5l1-1h3.75V4.5H7V3.25h3V4.5h-.75zm-5 2.5h3.5v2h-3.5V7zm5 0v2h1V7h-1z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderCopied(){return t_`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#692C77"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM6.964 3.75L5.893 4.813v.53h1.071v-.53h3.215v4.25h-.536v1.062h.536l1.071-1.063v-4.25L10.179 3.75H6.964zM3.75 6.938l1.071-1.063h3.215l1.071 1.063v4.25L8.036 12.25H4.82L3.75 11.187v-4.25zm1.071 0v4.25h3.215v-4.25H4.82z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderConflict(){return t_`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#7F4E7E"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm-4.03-4.53L6.44 7.5 3.47 4.53l1.06-1.06L7.5 6.44l2.97-2.97 1.06 1.06L8.56 7.5l2.97 2.97-1.06 1.06L7.5 8.56l-2.97 2.97-1.06-1.06z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderUnknown(){return t_`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#6C6C6C"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM9.19 2.822c-.439-.215-.97-.322-1.596-.322-1.25 0-2.282.478-3.094 1.435l1.05.798c.275-.331.579-.574.91-.728.331-.154.66-.231.987-.231.415 0 .76.093 1.036.28.275.182.413.448.413.798 0 .275-.082.509-.245.7-.159.187-.36.364-.602.532a9.506 9.506 0 0 0-.728.56 2.66 2.66 0 0 0-.602.763c-.159.299-.238.679-.238 1.141v.483h1.498v-.413c0-.364.086-.663.259-.896a2.76 2.76 0 0 1 .637-.616c.252-.177.504-.362.756-.553.257-.196.471-.436.644-.721.173-.285.259-.651.259-1.099 0-.387-.114-.749-.343-1.085-.229-.34-.562-.616-1.001-.826zm-1.169 7.917a1.024 1.024 0 0 0-.763-.315c-.294 0-.544.105-.749.315-.2.205-.301.453-.301.742 0 .294.1.546.301.756.205.205.455.308.749.308.303 0 .558-.103.763-.308.205-.21.308-.462.308-.756 0-.29-.103-.537-.308-.742z"
					clip-rule="evenodd"
				/>
			</svg>
		`}render(){switch(this.status){case"!":return this.renderIgnored();case"?":return this.renderUntracked();case"A":return this.renderAdded();case"D":return this.renderDeleted();case"M":case"T":case"U":return this.renderModified();case"R":return this.renderRenamed();case"C":return this.renderCopied();case"AA":case"AU":case"UA":case"DD":case"DU":case"UD":case"UU":return this.renderConflict()}return this.renderUnknown()}};rw.styles=[eZ`
			:host-context(.vscode-high-contrast:not(.vscode-high-contrast-light)),
			:host-context(.vscode-dark) {
				--gl-git-status-ignored: #969696;
				--gl-git-status-untracked: #6c6c6c;
				--gl-git-status-added: #388a34;
				--gl-git-status-deleted: #9e121d;
				--gl-git-status-modified: #1b80b2;
				--gl-git-status-renamed: #c63;
				--gl-git-status-copied: #692c77;
				--gl-git-status-conflict: #7f4e7e;
				--gl-git-status-unknown: #6c6c6c;
			}

			:host-context(.vscode-high-contrast-light),
			:host-context(.vscode-light) {
				--gl-git-status-ignored: #969696;
				--gl-git-status-untracked: #6c6c6c;
				--gl-git-status-added: #388a34;
				--gl-git-status-deleted: #9e121d;
				--gl-git-status-modified: #1b80b2;
				--gl-git-status-renamed: #c63;
				--gl-git-status-copied: #692c77;
				--gl-git-status-conflict: #7f4e7e;
				--gl-git-status-unknown: #6c6c6c;
			}

			:host {
				display: inline-block;
				width: 16px;
				aspect-ratio: 1 / 1;
			}

			svg {
				display: inline-block;
				vertical-align: text-bottom;
			}
		`],ry([tM()],rw.prototype,"status",2),ry([tO()],rw.prototype,"statusName",1),rw=ry([tT("gl-git-status")],rw),eZ`
		:host {
			display: block;
			height: 100%;
		}
	`;let r_=[sE,eZ`
		:host {
			--tree-connector-spacing: 0.6rem;
			--tree-connector-size: var(--gitlens-tree-indent, 1.6rem);
			box-sizing: border-box;
			padding-left: var(--gitlens-gutter-width);
			padding-right: 0.5rem;
			padding-top: 0.1rem;
			padding-bottom: 0.1rem;
			line-height: 2.2rem;
			height: 2.2rem;

			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			font-size: var(--vscode-font-size);
			color: var(--gitlens-tree-foreground, var(--vscode-foreground));

			cursor: pointer;
			/* Reduced containment to allow tooltips to escape */
			contain: layout;
		}

		:host([aria-hidden='true']) {
			display: none;
		}

		:host(:hover) {
			color: var(--vscode-list-hoverForeground);
			background-color: var(--vscode-list-hoverBackground);
		}

		:host([aria-selected='true']) {
			color: var(--vscode-list-inactiveSelectionForeground);
			background-color: var(--vscode-list-inactiveSelectionBackground);
		}

		/* Focused state - when the item is the active descendant in the tree */
		:host([focused]) {
			outline: 1px solid var(--vscode-list-focusOutline);
			outline-offset: -0.1rem;
		}

		:host([aria-selected='true'][focused]) {
			color: var(--vscode-list-activeSelectionForeground);
			background-color: var(--vscode-list-activeSelectionBackground);
		}

		/* Inactive focus state - when the item would be focused but container doesn't have focus */
		/* In VS Code, inactive focus shows the selection background without the outline */
		:host([focused-inactive]) {
			color: var(--vscode-list-inactiveSelectionForeground);
			background-color: var(--vscode-list-inactiveSelectionBackground);
		}

		/* TODO: these should be :has(.input:focus) instead of :focus-within */
		:host(:focus-within) {
			outline: 1px solid var(--vscode-list-focusOutline);
			outline-offset: -0.1rem;
		}

		:host([aria-selected='true']:focus-within) {
			color: var(--vscode-list-activeSelectionForeground);
			background-color: var(--vscode-list-activeSelectionBackground);
		}

		.item {
			appearance: none;
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			gap: 0.6rem;
			width: 100%;
			padding: 0;
			font-family: inherit;
			font-size: inherit;
			text-decoration: none;
			color: inherit;
			background: none;
			border: none;
			outline: none;
			cursor: pointer;
			min-width: 0;
		}
		.icon {
			display: inline-block;
			width: 1.6rem;
			text-align: center;
			height: 2.2rem;
			line-height: 2.2rem;
			pointer-events: none;
			vertical-align: text-bottom;
		}

		slot[name='icon']::slotted(*) {
			width: 1.6rem;
			aspect-ratio: 1;
			vertical-align: text-bottom;
		}

		.node {
			display: inline-block;
			width: var(--tree-connector-size);
			text-align: center;
			flex: none;
			height: 2.2rem;
			line-height: 2.2rem;
			pointer-events: none;
			vertical-align: text-bottom;
		}

		.node:last-of-type {
			margin-right: 0.3rem;
		}

		.node--connector {
			position: relative;
		}

		.node--connector::before {
			content: '';
			position: absolute;
			height: 2.2rem;
			border-left: 1px solid transparent;
			top: 50%;
			transform: translate(-1px, -50%);
			left: 0.8rem;
			width: 0.1rem;
			transition: border-color 0.1s linear;
			opacity: 0.4;
		}

		@media (prefers-reduced-motion: reduce) {
			.node--connector::before {
				transition: none;
			}
		}

		:host-context([guides='always']) .node--connector::before,
		:host-context([guides='onHover']:focus-within) .node--connector::before,
		:host-context([guides='onHover'][focused]) .node--connector::before,
		:host-context([guides='onHover'][focused-inactive]) .node--connector::before,
		:host-context([guides='onHover']:hover) .node--connector::before {
			border-color: var(--vscode-tree-indentGuidesStroke);
		}

		.branch {
			display: inline-block;
			margin-right: 0.6rem;
			height: 2.2rem;
			line-height: 2.2rem;
			vertical-align: text-bottom;
		}

		.text {
			line-height: 1.8rem;
			overflow: hidden;
			white-space: nowrap;
			text-align: left;
			text-overflow: ellipsis;
			flex: 1;
		}

		.main {
			display: inline;
		}

		.description {
			display: inline;
			opacity: 0.7;
			font-size: 0.9em;
			margin-left: 0.3rem;
			pointer-events: none;
		}

		.actions {
			flex: none;
			user-select: none;
			color: var(--vscode-icon-foreground);
		}

		:host(:focus-within) .actions,
		:host([focused]) .actions {
			color: var(--vscode-list-activeSelectionIconForeground);
		}

		:host([focused-inactive]) .actions {
			color: var(--vscode-list-inactiveSelectionIconForeground, var(--vscode-icon-foreground));
		}

		:host(:not(:hover):not(:focus-within):not([focused]):not([focused-inactive])) .actions {
			display: none;
		}

		.checkbox {
			position: relative;
			display: inline-flex;
			width: 1.6rem;
			aspect-ratio: 1 / 1;
			text-align: center;
			color: var(--vscode-checkbox-foreground);
			background: var(--vscode-checkbox-background);
			border: 1px solid var(--vscode-checkbox-border);
			border-radius: 0.3rem;
			margin-right: 0.6rem;
		}

		.checkbox:has(:checked) {
			color: var(--vscode-inputOption-activeForeground);
			border-color: var(--vscode-inputOption-activeBorder);
			background-color: var(--vscode-inputOption-activeBackground);
		}

		.checkbox:has(:disabled) {
			opacity: 0.4;
		}

		.checkbox__input {
			position: absolute;
			top: 0;
			left: 0;
			appearance: none;
			width: 1.4rem;
			aspect-ratio: 1 / 1;
			margin: 0;
			cursor: pointer;
			border-radius: 0.3rem;
		}

		.checkbox__input:disabled {
			cursor: default;
		}

		.checkbox__check {
			width: 1.6rem;
			aspect-ratio: 1 / 1;
			opacity: 0;
			transition: opacity 0.1s linear;
			color: var(--vscode-checkbox-foreground);
			pointer-events: none;
		}

		.checkbox__input:checked + .checkbox__check {
			opacity: 1;
		}

		slot[name='decorations'] {
			display: inline-block;
			margin-left: 0.4rem;
		}

		/* High Contrast Mode Support */
		@media (forced-colors: active) {
			:host {
				forced-color-adjust: none;
			}

			:host([focused]) {
				outline: 2px solid CanvasText;
				outline-offset: -2px;
			}

			:host([aria-selected='true']) {
				background-color: Highlight;
				color: HighlightText;
			}

			:host([aria-selected='true'][focused]) {
				outline: 2px solid CanvasText;
				outline-offset: -2px;
			}

			.checkbox {
				border: 1px solid CanvasText;
			}

			.checkbox:has(:checked) {
				background-color: Highlight;
				border-color: CanvasText;
			}

			.node--connector::before {
				border-color: CanvasText;
				opacity: 1;
			}
		}
	`];var rk=Object.defineProperty,rx=Object.getOwnPropertyDescriptor,r$=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?rx(t,o):t,c=e.length-1;c>=0;c--)(n=e[c])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&rk(t,o,a),a};let rC=class extends GlElement{constructor(){super(...arguments),this.branch=!1,this.expanded=!0,this.path="",this.level=0,this.size=1,this.position=1,this.checkable=!1,this.checked=!1,this.disableCheck=!1,this.showIcon=!0,this.tabIndex=-1,this.selected=!1,this.focused=!1,this.focusedInactive=!1,this.onComponentClick=e=>{this.selectCore({dblClick:!1,altKey:e.altKey})}}get isHidden(){return!1===this.parentExpanded||!this.branch&&!this.expanded}connectedCallback(){super.connectedCallback?.(),this.addEventListener("click",this.onComponentClick)}disconnectedCallback(){super.disconnectedCallback?.(),this.removeEventListener("click",this.onComponentClick)}updateAttrs(e,t=!1){(e.has("expanded")||e.has("branch")||t)&&(this.branch?this.setAttribute("aria-expanded",this.expanded.toString()):this.removeAttribute("aria-expanded")),(e.has("parentExpanded")||t)&&this.setAttribute("aria-hidden",this.isHidden.toString()),(e.has("selected")||t)&&this.setAttribute("aria-selected",this.selected.toString()),(e.has("size")||t)&&this.setAttribute("aria-setsize",this.size.toString()),(e.has("position")||t)&&this.setAttribute("aria-posinset",this.position.toString()),(e.has("level")||t)&&this.setAttribute("aria-level",this.level.toString())}firstUpdated(){this.role="treeitem"}updated(e){this.updateAttrs(e)}renderBranching(){let e=this.level-1;if(e<1&&!this.branch)return tx;let t=[];if(e>0)for(let o=0;o<e;o++)t.push(t_`<span class="node node--connector"><code-icon name="blank"></code-icon></span>`);return this.branch&&t.push(t_`<code-icon class="branch" icon="${this.expanded?"chevron-down":"chevron-right"}"></code-icon>`),t}renderCheckbox(){return this.checkable?t_`<span class="checkbox"
			><input
				class="checkbox__input"
				id="checkbox"
				type="checkbox"
				.checked=${this.checked}
				?disabled=${this.disableCheck}
				@change=${this.onCheckboxChange}
				@click=${this.onCheckboxClick} /><code-icon icon="check" size="14" class="checkbox__check"></code-icon
		></span>`:tx}renderActions(){return t_`<action-nav class="actions"><slot name="actions"></slot></action-nav>`}renderDecorations(){return t_`<slot name="decorations" class="decorations"></slot>`}render(){return t_`
			${this.renderBranching()}${this.renderCheckbox()}
			<button
				id="button"
				class="item"
				type="button"
				tabindex=${this.tabIndex}
				@click=${this.onButtonClick}
				@dblclick=${this.onButtonDblClick}
			>
				${tN(this.showIcon,()=>t_`<slot name="icon" class="icon"></slot>`)}
				<span class="text">
					<slot class="main"></slot>
					<slot name="description" class="description"></slot>
				</span>
			</button>
			${this.renderActions()}${this.renderDecorations()}
		`}selectCore(e,t=!1){this.emit("gl-tree-item-select"),this.selected=!0,t||window.requestAnimationFrame(()=>{this.emit("gl-tree-item-selected",{node:this,dblClick:e?.dblClick??!1,altKey:e?.altKey??!1,ctrlKey:e?.ctrlKey??!1,metaKey:e?.metaKey??!1})})}select(){this.selectCore(void 0,!0)}deselect(){this.selected=!1}focus(){this.buttonEl.focus()}onButtonClick(e){e.stopPropagation(),this.selectCore({dblClick:!1,altKey:e.altKey})}onButtonDblClick(e){e.stopPropagation(),this.selectCore({dblClick:!0,altKey:e.altKey,ctrlKey:e.ctrlKey,metaKey:e.metaKey})}onCheckboxClick(e){e.stopPropagation()}onCheckboxChange(e){e.preventDefault(),e.stopPropagation(),this.checked=e.target.checked,this.emit("gl-tree-item-checked",{node:this,checked:this.checked})}};rC.styles=r_,r$([tM({type:Boolean})],rC.prototype,"branch",2),r$([tM({type:Boolean})],rC.prototype,"expanded",2),r$([tM({type:String})],rC.prototype,"path",2),r$([tM({type:String,attribute:"parent-path"})],rC.prototype,"parentPath",2),r$([tM({type:Boolean,attribute:"parent-expanded"})],rC.prototype,"parentExpanded",2),r$([tM({type:Number})],rC.prototype,"level",2),r$([tM({type:Number})],rC.prototype,"size",2),r$([tM({type:Number})],rC.prototype,"position",2),r$([tM({type:Boolean})],rC.prototype,"checkable",2),r$([tM({type:Boolean})],rC.prototype,"checked",2),r$([tM({type:Boolean})],rC.prototype,"disableCheck",2),r$([tM({type:Boolean})],rC.prototype,"showIcon",2),r$([tM({type:Number})],rC.prototype,"tabIndex",2),r$([tO()],rC.prototype,"selected",2),r$([tM({type:Boolean,reflect:!0})],rC.prototype,"focused",2),r$([tM({type:Boolean,reflect:!0,attribute:"focused-inactive"})],rC.prototype,"focusedInactive",2),r$([tD("#button")],rC.prototype,"buttonEl",2),rC=r$([tT("gl-tree-item")],rC);var rS=Object.defineProperty,rA=Object.getOwnPropertyDescriptor,rE=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?rA(t,o):t,c=e.length-1;c>=0;c--)(n=e[c])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&rS(t,o,a),a};let rP=class extends GlElement{constructor(){super(...arguments),this.treeItems=void 0,this.ariaLabel="Tree",this._focusedItemIndex=-1,this.virtualizerRef=s4(),this.scrollableRef=s4(),this._containerHasFocus=!1,this._actionButtonHasFocus=!1,this._scrolling=!1,this._typeAheadBuffer="",this._typeAheadTimeout=800,this._nodeMap=new Map,this._pathToIndexMap=new Map,this.handleContainerFocus=()=>{this._containerHasFocus=!0,this._focusedItemPath||(this._lastSelectedPath?(this._focusedItemPath=this._lastSelectedPath,this._focusedItemIndex=this.getItemIndex(this._lastSelectedPath)):this.treeItems?.length&&(this._focusedItemPath=this.treeItems[0].path,this._focusedItemIndex=0),this.requestUpdate())},this.handleContainerBlur=()=>{this._containerHasFocus=!1},this.handleFocusIn=e=>{let t=e.target;("ACTION-ITEM"===t.tagName?t:t.closest("action-item"))&&(this._actionButtonHasFocus=!0)},this.handleFocusOut=e=>{let t=e.target,o=e.relatedTarget,r="ACTION-ITEM"===t.tagName?t:t.closest("action-item"),n=o?.tagName==="ACTION-ITEM"?o:o?.closest("action-item");r&&!n&&(this._actionButtonHasFocus=!1)},this.handleKeydown=e=>{if("Tab"===e.key&&e.composedPath().find(e=>"ACTION-ITEM"===e.tagName))if(e.shiftKey){e.preventDefault();let t=this.scrollableRef.value;t&&t.focus()}else{e.preventDefault();let t=document.activeElement;setTimeout(()=>{t&&"function"==typeof t.blur&&t.blur()},0)}},this.handleContainerKeydown=e=>{if(!this.treeItems?.length||this._actionButtonHasFocus)return;if("Tab"===e.key&&!e.shiftKey){if(this._focusedItemPath){let t=this.virtualizerRef.value;if(t){let o=Array.from(t.querySelectorAll("gl-tree-item")).find(e=>e.id===`tree-item-${this._focusedItemPath}`);if(o){let t=o.querySelector("action-item");t&&(e.preventDefault(),e.stopPropagation(),t.focus())}}}return}let t=this.getCurrentFocusedIndex(),o=t,r=!1;switch(e.key){case"Enter":case" ":e.preventDefault(),e.stopPropagation(),this.handleItemActivation(this.treeItems[t]);return;case"ArrowDown":o=Math.min(t+1,this.treeItems.length-1),r=!0;break;case"ArrowUp":o=Math.max(t-1,0),r=!0;break;case"Home":o=0,r=!0;break;case"End":o=this.treeItems.length-1,r=!0;break;case"ArrowLeft":case"ArrowRight":if(this.handleBranchToggle(e,this.treeItems[t]))return;if("ArrowRight"===e.key)o=Math.min(t+1,this.treeItems.length-1);else{let e=this.treeItems[t];if(e.parentPath){let r=this.getItemIndex(e.parentPath);o=-1!==r?r:Math.max(t-1,0)}else o=Math.max(t-1,0)}r=!0;break;default:if(this.isPrintableCharacter(e.key)){e.preventDefault(),e.stopPropagation(),this.handleTypeAhead(e.key);return}}r&&(e.preventDefault(),e.stopPropagation(),this.focusItemAtIndex(o))}}connectedCallback(){super.connectedCallback?.(),this.addEventListener("keydown",this.handleKeydown,{capture:!0}),this.addEventListener("focusin",this.handleFocusIn,{capture:!0}),this.addEventListener("focusout",this.handleFocusOut,{capture:!0})}disconnectedCallback(){super.disconnectedCallback?.(),this.removeEventListener("keydown",this.handleKeydown,{capture:!0}),this.removeEventListener("focusin",this.handleFocusIn,{capture:!0}),this.removeEventListener("focusout",this.handleFocusOut,{capture:!0}),this._typeAheadTimer&&(clearTimeout(this._typeAheadTimer),this._typeAheadTimer=void 0),this._typeAheadBuffer=""}set model(e){let t;if(this._model!==e){if(this._model=e,null!=this._model){let e=this._model.length;t=this._model.reduce((t,o,r)=>(t.push(...rI(o,e,r+1,void 0,this._nodeMap)),t),[])}this.treeItems=t,this.buildPathToIndexMap(),this.treeItems?.length&&!this._focusedItemPath&&(this._focusedItemPath=this.treeItems[0].path,this._focusedItemIndex=0)}}get model(){return this._model}renderIcon(e){return null==e?tx:"string"==typeof e?t_`<code-icon slot="icon" icon=${e}></code-icon>`:"status"!==e.type?tx:t_`<gl-git-status slot="icon" .status=${e.name}></gl-git-status>`}renderActions(e){let t=e.actions;return null==t||0===t.length?tx:t.map(t=>t_`<action-item
				slot="actions"
				.icon=${t.icon}
				.label=${t.label}
				@click=${o=>this.onTreeItemActionClicked(o,e,t,!1)}
				@dblclick=${o=>this.onTreeItemActionClicked(o,e,t,!0)}
			></action-item>`)}renderDecorations(e){let t=e.decorations;return null==t||0===t.length?tx:t.map(e=>"icon"===e.type?t_`<code-icon
					slot="decorations"
					title="${e.label}"
					aria-label="${e.label}"
					.icon=${e.icon}
				></code-icon>`:"text"===e.type?t_`<span slot="decorations">${e.label}</span>`:void 0)}renderTreeItem(e){let t=this._lastSelectedPath===e.path,o=this._focusedItemPath===e.path,r=`tree-item-${e.path}`;return t_`<gl-tree-item
			id=${r}
			.branch=${e.branch}
			.expanded=${e.expanded}
			.path=${e.path}
			.parentPath=${e.parentPath}
			.parentExpanded=${e.parentExpanded}
			.level=${e.level}
			.size=${e.size}
			.position=${e.position}
			.checkable=${e.checkable}
			.checked=${e.checked??!1}
			.disableCheck=${e.disableCheck??!1}
			.showIcon=${null!=e.icon}
			.selected=${t}
			.focused=${o&&this._containerHasFocus&&!this._actionButtonHasFocus}
			.focusedInactive=${o&&(!this._containerHasFocus||this._actionButtonHasFocus)}
			.tabIndex=${-1}
			@gl-tree-item-select=${()=>this.onBeforeTreeItemSelected(e)}
			@gl-tree-item-selected=${t=>this.onTreeItemSelected(t,e)}
			@gl-tree-item-checked=${t=>this.onTreeItemChecked(t,e)}
		>
			${this.renderIcon(e.icon)}
			${e.label}${tN(null!=e.description,()=>t_`<span slot="description">${e.description}</span>`)}
			${this.renderActions(e)} ${this.renderDecorations(e)}
		</gl-tree-item>`}render(){if(!this.treeItems?.length)return tx;let e=this._focusedItemPath?`tree-item-${this._focusedItemPath}`:void 0;return t_`
			<div
				${ri(this.scrollableRef)}
				class="scrollable"
				tabindex="0"
				role="tree"
				aria-label=${this.ariaLabel}
				aria-multiselectable="false"
				aria-activedescendant=${e||tx}
				@keydown=${this.handleContainerKeydown}
				@focus=${this.handleContainerFocus}
				@blur=${this.handleContainerBlur}
			>
				<lit-virtualizer
					${ri(this.virtualizerRef)}
					.items=${this.treeItems}
					.keyFunction=${e=>e.path}
					.layout=${(0,sY.flow)({direction:"vertical"})}
					.renderItem=${e=>this.renderTreeItem(e)}
					.scroller=${!!this.scrollableRef.value}
				></lit-virtualizer>
			</div>
		`}findTreeNode(e){return this._nodeMap.get(e)}getItemIndex(e){return this._pathToIndexMap.get(e)??-1}rebuildFlattenedTree(){if(!this._model)return;let e=this._model.length,t=this._model.reduce((t,o,r)=>(t.push(...rI(o,e,r+1)),t),[]);this.treeItems=t,this.buildPathToIndexMap()}onBeforeTreeItemSelected(e){if(this._lastSelectedPath!==e.path&&(this._lastSelectedPath=e.path),this._focusedItemPath!==e.path&&(this._focusedItemPath=e.path,this._focusedItemIndex=this.getItemIndex(e.path)),e.branch){let t=this.findTreeNode(e.path);t&&(t.expanded=!t.expanded,this.rebuildFlattenedTree())}this.requestUpdate()}onTreeItemSelected(e,t){e.stopPropagation(),this.emit("gl-tree-generated-item-selected",{...e.detail,node:t,context:t.context})}onTreeItemChecked(e,t){e.stopPropagation(),this.emit("gl-tree-generated-item-checked",{...e.detail,node:t,context:t.context})}onTreeItemActionClicked(e,t,o,r=!1){e.stopPropagation(),this.emit("gl-tree-generated-item-action-clicked",{node:t,context:t.context,action:o,dblClick:r,altKey:e.altKey,ctrlKey:e.ctrlKey,metaKey:e.metaKey})}getCurrentFocusedIndex(){if(!this.treeItems?.length)return -1;if(this._focusedItemPath){let e=this.getItemIndex(this._focusedItemPath);if(-1!==e)return e}if(this._focusedItemIndex>=0&&this._focusedItemIndex<this.treeItems.length)return this._focusedItemIndex;if(this._lastSelectedPath){let e=this.getItemIndex(this._lastSelectedPath);if(-1!==e)return e}return 0}handleItemActivation(e){e&&(this.onBeforeTreeItemSelected(e),this.onTreeItemSelected(new CustomEvent("gl-tree-item-selected",{detail:{node:null,dblClick:!1,altKey:!1,ctrlKey:!1,metaKey:!1}}),e))}handleBranchToggle(e,t){if(!t?.branch)return!1;let o="ArrowRight"===e.key,r="ArrowLeft"===e.key;if(o&&t.expanded||r&&!t.expanded)return!1;e.preventDefault(),e.stopPropagation();let n=this.findTreeNode(t.path);return!!n&&(n.expanded=!n.expanded,this.rebuildFlattenedTree(),this.requestUpdate(),this.onTreeItemSelected(new CustomEvent("gl-tree-item-selected",{detail:{node:null,dblClick:!1,altKey:!1,ctrlKey:!1,metaKey:!1}}),t),!0)}focusItemAtIndex(e){let t=this.treeItems?.[e];t&&(this._focusedItemPath=t.path,this._focusedItemIndex=e,this._lastSelectedPath!==t.path&&(this._lastSelectedPath=t.path),this.requestUpdate(),this.scrollToItem(e))}scrollToItem(e){this._scrolling||(this._scrolling=!0,this.updateComplete.then(()=>{let t=this.virtualizerRef.value,o=this.scrollableRef.value;if(!t||!o){this._scrolling=!1;return}let r=()=>{o&&document.activeElement!==o&&o.focus(),this._scrolling=!1},n=0===e,a=e===(this.treeItems?.length??0)-1;n||a?requestAnimationFrame(()=>{n?o.scrollTop=0:o.scrollTop=o.scrollHeight,requestAnimationFrame(r)}):requestAnimationFrame(()=>{let o=t.scrollToIndex(e,"nearest");o&&"function"==typeof o.then?o.then(r):requestAnimationFrame(r)})}))}handleTypeAhead(e){this._typeAheadTimer&&clearTimeout(this._typeAheadTimer);let t=!this._typeAheadBuffer;this._typeAheadBuffer+=e.toLowerCase();let o=this.treeItems?.[this._focusedItemIndex],r=o?.label?.toLowerCase().startsWith(this._typeAheadBuffer),n=!1;if(t?n=!0:r||(n=!0),n){let e=this.findNextMatchingItem(this._typeAheadBuffer);-1!==e&&this.focusItemAtIndex(e)}this._typeAheadTimer=window.setTimeout(()=>{this._typeAheadBuffer="",this._typeAheadTimer=void 0},this._typeAheadTimeout)}buildPathToIndexMap(){if(this._pathToIndexMap.clear(),!this.treeItems)return;let e=0;for(let t of this.treeItems)this._pathToIndexMap.set(t.path,e++)}findNextMatchingItem(e){if(!this.treeItems?.length||!e)return -1;let t=e.toLowerCase(),o=this._focusedItemIndex,r=this.treeItems.length;for(let e=1;e<r;e++){let n=(o+e)%r;if(this.treeItems[n].label?.toLowerCase().startsWith(t))return n}return -1}isPrintableCharacter(e){return 1===e.length&&/^[a-zA-Z0-9\s\-_.]$/.test(e)}};function rI(e,t=1,o=1,r,n){n&&n.set(e.path,e);let a=[{...e,size:t,position:o,parentPath:r}],c=!1!==e.expanded;if(null!=e.children&&e.children.length>0&&c){let t=e.children.length;for(let o=0;o<t;o++)a.push(...rI(e.children[o],t,o+1,e.path,n))}return a}rP.styles=[sP,eZ`
			:host {
				display: flex;
				flex-direction: column;
				height: 100%;
				width: 100%;
				overflow: hidden;
			}

			.scrollable {
				flex: 1;
				width: 100%;
				min-height: 0;
				overflow-y: auto;
				overflow-x: visible; /* Allow horizontal overflow for tooltips */
				outline: none;
			}

			.scrollable:focus-within {
				outline: none;
			}

			lit-virtualizer {
				display: block;
				width: 100%;
				height: 100%;
				/* Use layout containment instead of strict to avoid rendering issues */
				/* Removed paint containment to allow tooltips to escape */
				contain: layout;
			}

			gl-tree-item {
				width: 100%;
			}
		`],rE([tO()],rP.prototype,"treeItems",2),rE([tM({reflect:!0})],rP.prototype,"guides",2),rE([tM({type:String,attribute:"aria-label"})],rP.prototype,"ariaLabel",2),rE([tO()],rP.prototype,"_containerHasFocus",2),rE([tO()],rP.prototype,"_actionButtonHasFocus",2),rE([tM({type:Array,attribute:!1})],rP.prototype,"model",1),rP=rE([tT("gl-tree-generator")],rP);var rR=Object.defineProperty,rT=Object.getOwnPropertyDescriptor,rz=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?rT(t,o):t,c=e.length-1;c>=0;c--)(n=e[c])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&rR(t,o,a),a};let GlDetailsBase=class GlDetailsBase extends lit_element_i{constructor(){super(...arguments),this.tab="commit",this.isUncommitted=!1,this.emptyText="No Files"}get fileLayout(){return this.preferences?.files?.layout??"auto"}get isCompact(){return this.preferences?.files?.compact??!0}get indentGuides(){return this.preferences?.indentGuides??"none"}get filesChangedPaneLabel(){let e=this.files?.length??0,t=e>0?W("file",e):"Files";return`${t} changed`}renderChangedFiles(e,t){let o=this.files?.length??0,r=this.isTree(o),n="tree",a="list-tree",c="View as Tree";switch(this.fileLayout){case"auto":n="list",a="gl-list-auto",c="View as List";break;case"list":n="tree",a="list-flat",c="View as Tree";break;case"tree":n="auto",a="list-tree",c="View as Auto"}let h=this.createTreeModel(e,this.files??[],r,this.isCompact);return t_`
			<webview-pane collapsable expanded flexible>
				<span slot="title">${this.filesChangedPaneLabel}</span>
				<span slot="subtitle" data-region="stats">${t}</span>
				<action-nav slot="actions">
					<action-item
						data-action="files-layout"
						data-files-layout="${n}"
						label="${c}"
						icon="${a}"
					></action-item>
				</action-nav>
				${this.renderChangedFilesActions()}${this.renderTreeFileModel(h)}
			</webview-pane>
		`}renderChangedFilesActions(){}onShareWipChanges(e,t,o){if(!o)return;let r=new CustomEvent("share-wip",{detail:{checked:t}});this.dispatchEvent(r)}createRenderRoot(){return this}isTree(e){return"auto"===this.fileLayout?e>(this.preferences?.files?.threshold??5):"tree"===this.fileLayout}createTreeModel(e,t,o=!1,r=!0){if(!this.isUncommitted)return this.createFileTreeModel(e,t,o,r);let n=[],a=[],c=[];for(let e of t)e.staged?a.push(e):c.push(e);return 0===a.length&&0===c.length?n.push(...this.createFileTreeModel(e,t,o,r)):(a.length&&n.push({label:"Staged Changes",path:"",level:1,branch:!0,checkable:!1,expanded:!0,checked:!1,context:["staged"],children:this.createFileTreeModel(e,a,o,r,{level:2}),actions:this.getStagedActions()}),c.length&&n.push({label:"Unstaged Changes",path:"",level:1,branch:!0,checkable:!1,expanded:!0,checked:!1,context:["unstaged"],children:this.createFileTreeModel(e,c,o,r,{level:2}),actions:this.getUnstagedActions()})),n}sortChildren(e){return e.sort((e,t)=>e.branch&&!t.branch?-1:!e.branch&&t.branch?1:e.label<t.label?-1:+(e.label>t.label)),e}createFileTreeModel(e,t,o=!1,r=!0,n={level:1}){if(void 0===n.level&&(n.level=1),!t.length)return[{label:"No changes",path:"",level:n.level,branch:!1,checkable:!1,expanded:!0,checked:!1}];let a=[];if(o){let e=s$(t,e=>e.path.split("/"),(...e)=>e.join("/"),r);if(null!=e.children)for(let t of e.children.values()){let e=this.walkFileTree(t,{level:n.level});a.push(e)}}else for(let e of t){let t=this.fileToTreeModel(e,{level:n.level,branch:!1},!0);a.push(t)}return this.sortChildren(a),a}walkFileTree(e,t={level:1}){let o;if(void 0===t.level&&(t.level=1),o=null==e.value?this.folderToTreeModel(e.name,t):this.fileToTreeModel(e.value,t),null!=e.children){let r=[];for(let o of e.children.values()){let e=this.walkFileTree(o,{...t,level:t.level+1});r.push(e)}r.length>0&&(this.sortChildren(r),o.branch=!0,o.children=r)}return o}getStagedActions(e){return"wip"===this.tab?[{icon:"gl-cloud-patch-share",label:"Share Staged Changes",action:"staged-create-patch"}]:[]}getUnstagedActions(e){return"wip"===this.tab?[{icon:"gl-cloud-patch-share",label:"Share Unstaged Changes",action:"unstaged-create-patch"}]:[]}getFileActions(e,t){return[]}fileToTreeModel(e,t,o=!1,r="/"){let n=e.path.lastIndexOf(r),a=-1!==n?e.path.substring(n+1):e.path,c=o&&-1!==n?e.path.substring(0,n):"";return{branch:!1,expanded:!0,path:e.path,level:1,checkable:!1,checked:!1,icon:{type:"status",name:e.status},label:a,description:`${!0===o?c:""}${"R"===e.status?` \u2190 ${e.originalPath}`:""}`,context:[e],actions:this.getFileActions(e,t),...t}}folderToTreeModel(e,t){return{branch:!1,expanded:!0,path:e,level:1,checkable:!1,checked:!1,icon:"folder",label:e,...t}}renderTreeFileModel(e){return t_`<gl-tree-generator
			.model=${e}
			.guides=${this.indentGuides}
			@gl-tree-generated-item-action-clicked=${this.onTreeItemActionClicked}
			@gl-tree-generated-item-checked=${this.onTreeItemChecked}
			@gl-tree-generated-item-selected=${this.onTreeItemSelected}
		></gl-tree-generator>`}onTreeItemActionClicked(e){if(e.detail.context&&e.detail.action)switch(e.detail.action.action){case"staged-create-patch":this.onCreatePatch(e);break;case"unstaged-create-patch":this.onCreatePatch(e,!0);break;case"file-open":this.onOpenFile(e);break;case"file-unstage":this.onUnstageFile(e);break;case"file-stage":this.onStageFile(e);break;case"file-compare-working":this.onCompareWorking(e);break;case"file-open-on-remote":this.onOpenFileOnRemote(e);break;case"file-more-actions":this.onMoreActions(e)}}onTreeItemSelected(e){e.detail.context&&this.onComparePrevious(e)}onCreatePatch(e,t=!1){let o=new CustomEvent("create-patch",{detail:{checked:!!t||"staged"}});this.dispatchEvent(o)}onOpenFile(e){if(!e.detail.context)return;let[t]=e.detail.context,o=new CustomEvent("file-open",{detail:this.getEventDetail(t,{preview:!e.detail.dblClick,viewColumn:e.detail.altKey?-2:void 0})});this.dispatchEvent(o)}onOpenFileOnRemote(e){if(!e.detail.context)return;let[t]=e.detail.context,o=new CustomEvent("file-open-on-remote",{detail:this.getEventDetail(t,{preview:!e.detail.dblClick,viewColumn:e.detail.altKey?-2:void 0})});this.dispatchEvent(o)}onCompareWorking(e){if(!e.detail.context)return;let[t]=e.detail.context,o=new CustomEvent("file-compare-working",{detail:this.getEventDetail(t,{preview:!e.detail.dblClick,viewColumn:e.detail.altKey?-2:void 0})});this.dispatchEvent(o)}onComparePrevious(e){if(!e.detail.context)return;let[t]=e.detail.context,o=new CustomEvent("file-compare-previous",{detail:this.getEventDetail(t,{preview:!e.detail.dblClick,viewColumn:e.detail.altKey?-2:void 0})});this.dispatchEvent(o)}onMoreActions(e){if(!e.detail.context)return;let[t]=e.detail.context,o=new CustomEvent("file-more-actions",{detail:this.getEventDetail(t)});this.dispatchEvent(o)}onStageFile(e){if(!e.detail.context)return;let[t]=e.detail.context,o=new CustomEvent("file-stage",{detail:this.getEventDetail(t,{preview:!e.detail.dblClick,viewColumn:e.detail.altKey?-2:void 0})});this.dispatchEvent(o)}onUnstageFile(e){if(!e.detail.context)return;let[t]=e.detail.context,o=new CustomEvent("file-unstage",{detail:this.getEventDetail(t,{preview:!e.detail.dblClick,viewColumn:e.detail.altKey?-2:void 0})});this.dispatchEvent(o)}getEventDetail(e,t){return{path:e.path,repoPath:e.repoPath,status:e.status,staged:e.staged,showOptions:t}}};rz([tM({type:Array})],GlDetailsBase.prototype,"files",2),rz([tM({type:Boolean})],GlDetailsBase.prototype,"isUncommitted",2),rz([tM({type:Object})],GlDetailsBase.prototype,"preferences",2),rz([tM({type:Object})],GlDetailsBase.prototype,"orgSettings",2),rz([tM({attribute:"empty-text"})],GlDetailsBase.prototype,"emptyText",2);var rM=Object.defineProperty,rO=Object.getOwnPropertyDescriptor,rL=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?rO(t,o):t,c=e.length-1;c>=0;c--)(n=e[c])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&rM(t,o,a),a};let rD=class extends lit_element_i{constructor(){super(...arguments),this.disabled=!1,this.full=!1,this.tooltipPlacement="bottom",this.truncate=!1}connectedCallback(){super.connectedCallback?.(),this.setAttribute("role",this.href?"link":"button"),this.disabled&&this.setAttribute("aria-disabled",this.disabled.toString())}willUpdate(e){if(e.has("href")&&this.setAttribute("role",this.href?"link":"button"),e.has("disabled")){let t=e.get("disabled");t?this.setAttribute("aria-disabled",t.toString()):this.removeAttribute("aria-disabled")}super.willUpdate(e)}render(){return this.tooltip?t_`<gl-tooltip .content=${this.tooltip} placement=${this.tooltipPlacement??tx}
				>${this.renderControl()}</gl-tooltip
			>`:this.querySelectorAll('[slot="tooltip"]').length>0?t_`<gl-tooltip placement=${this.tooltipPlacement??tx}>
				${this.renderControl()}
				<slot name="tooltip" slot="content"></slot>
			</gl-tooltip>`:this.renderControl()}renderControl(){return null!=this.href?t_`<a
				class="control"
				tabindex="${(!1===this.disabled?void 0:-1)??tx}"
				href=${this.href}
				@keypress=${e=>this.onLinkKeypress(e)}
				><slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot
			></a>`:t_`<button
			class="control"
			role=${this.role??tx}
			aria-checked=${this.ariaChecked??tx}
			?disabled=${this.disabled}
		>
			<slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot>
		</button>`}onLinkKeypress(e){" "===e.key&&this.control.click()}focus(e){this.control.focus(e)}blur(){this.control.blur()}click(){this.control.click()}};rD.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},rD.styles=[sE,eZ`
			:host {
				--button-foreground: var(--color-button-foreground);
				--button-background: var(--color-button-background);
				--button-hover-background: var(--vscode-button-hoverBackground);
				--button-padding: 0.4rem;
				--button-gap: 0.6rem;
				--button-compact-padding: 0.4rem;
				--button-input-padding: 0.1rem;
				--button-tight-padding: 0.4rem 0.8rem;
				--button-line-height: 1.35;
				--button-border: var(--vscode-button-border, transparent);

				display: inline-block;
				border: none;
				font-family: inherit;
				font-size: inherit;
				line-height: var(--button-line-height);
				text-align: center;
				text-decoration: none;
				user-select: none;
				background: var(--button-background);
				color: var(--button-foreground);
				cursor: pointer;
				border: 1px solid var(--button-border);
				border-radius: var(--gk-action-radius, 0.3rem);
				-webkit-font-smoothing: auto;
			}

			.control {
				box-sizing: border-box;
				display: inline-flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				gap: var(--button-gap);
				padding: var(--button-padding);
				line-height: var(--button-line-height);
				font-family: inherit;
				font-size: inherit;

				color: inherit;
				text-decoration: none;

				width: max-content;
				max-width: 100%;
				height: 100%;
				cursor: pointer;
			}

			/* When truncate is enabled, allow the control to shrink */
			:host([truncate]) .control {
				min-width: 0;
			}

			button.control {
				appearance: none;
				background: transparent;
				border: none;
			}

			.control:focus {
				outline: none;
			}

			.label {
				display: inline-flex;
				align-items: center;
				max-width: 100%;
			}

			/* Text truncation option - enabled via truncate attribute */
			:host([truncate]) .label {
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				display: block; /* Change from flex to block for ellipsis to work */
			}

			:host(:hover) {
				background: var(--button-hover-background);
			}

			:host(:focus-within) {
				${sA}
			}

			:host([appearance='input']),
			:host([role='checkbox']:focus-within),
			:host([aria-checked]:focus-within) {
				outline-offset: -1px;
			}

			:host([full]),
			:host([full]) .control {
				width: 100%;
			}

			:host([appearance='secondary']) {
				--button-background: var(--vscode-button-secondaryBackground);
				--button-foreground: var(--vscode-button-secondaryForeground);
				--button-hover-background: var(--vscode-button-secondaryHoverBackground);
			}

			:host([appearance='input']),
			:host([appearance='toolbar']) {
				--button-background: transparent;
				--button-foreground: var(--vscode-foreground);
				--button-hover-background: var(--vscode-toolbar-hoverBackground);
				--button-border: transparent;
			}

			:host([appearance='alert']) {
				--button-background: transparent;
				--button-border: var(--color-alert-infoBorder);
				--button-foreground: var(--color-button-foreground);
				--button-hover-background: var(--color-alert-infoBorder);
				--button-line-height: 1.64;
				width: max-content;
			}

			:host-context(.vscode-light):host([appearance='alert']:not(:hover)),
			:host-context(.vscode-high-contrast-light):host([appearance='alert']:not(:hover)) {
				--button-foreground: var(--color-foreground);
			}

			:host([appearance='input']) .control {
				padding: var(--button-input-padding);
				--button-line-height: 1.1;
				height: 1.8rem;
				gap: 0.2rem;
			}

			:host([appearance='input'][href]) > a,
			:host([appearance='toolbar'][href]) > a {
				display: flex;
				align-items: center;
			}

			:host([appearance='alert'][href]) > a {
				display: block;
				width: max-content;
			}

			:host([density='compact']) .control {
				padding: var(--button-compact-padding);
			}

			:host([density='tight']) .control {
				padding: var(--button-tight-padding);
			}

			:host([density='tight']) .control ::slotted(code-icon) {
				--code-icon-size: 11px;
				--code-icon-v-align: unset;
			}

			:host([aria-checked]:hover:not([disabled]):not([aria-checked='true'])) {
				background-color: var(--vscode-inputOption-hoverBackground);
			}

			:host([disabled]) {
				opacity: 0.4;
				cursor: not-allowed;
				pointer-events: none;
			}

			:host([disabled][aria-checked='true']) {
				opacity: 0.8;
			}

			:host([aria-checked='true']) {
				background-color: var(--vscode-inputOption-activeBackground);
				color: var(--vscode-inputOption-activeForeground);
				border-color: var(--vscode-inputOption-activeBorder);
			}

			gl-tooltip {
				height: 100%;
				width: 100%;
				display: inline-flex;
				align-items: center;
				justify-content: center;
			}
		`],rL([tD(".control")],rD.prototype,"control",2),rL([tM({reflect:!0})],rD.prototype,"appearance",2),rL([tM({type:Boolean,reflect:!0})],rD.prototype,"disabled",2),rL([tM({reflect:!0})],rD.prototype,"density",2),rL([tM({type:Boolean,reflect:!0})],rD.prototype,"full",2),rL([tM()],rD.prototype,"href",2),rL([tM()],rD.prototype,"tooltip",2),rL([tM()],rD.prototype,"tooltipPlacement",2),rL([tM({type:Boolean,reflect:!0})],rD.prototype,"truncate",2),rD=rL([tT("gl-button")],rD);let rN=eZ`
	a {
		border: 0;
		color: var(--link-foreground);
		font-weight: 400;
		outline: none;
		text-decoration: var(--link-decoration-default, none);
	}

	a:focus-visible {
		outline: 1px solid var(--color-focus-border);
		border-radius: 0.2rem;
	}

	a:hover {
		color: var(--link-foreground-active);
		text-decoration: underline;
	}
`,rB=eZ`
	hr {
		border: none;
		border-top: 1px solid var(--color-foreground--25);
	}
`;sa.define("sl-popup");var rF=Object.defineProperty,rj=Object.getOwnPropertyDescriptor,rU=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?rj(t,o):t,c=e.length-1;c>=0;c--)(n=e[c])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&rF(t,o,a),a};let rH=class extends GlElement{constructor(){super(),this.placement="bottom",this.disabled=!1,this.distance=8,this.open=!1,this.arrow=!0,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleTriggerBlur=e=>{this.open&&this.hasTrigger("focus")&&(e.relatedTarget&&this.contains(e.relatedTarget)||this.hide())},this.handleTriggerClick=e=>{if(this.hasTrigger("click"))if(this.open&&"hover"!==this._triggeredBy){if(this._skipHideOnClick){this._skipHideOnClick=!1;return}if(e.composedPath().includes(this.body))return;this.hide()}else this.show("click")},this._skipHideOnClick=!1,this.handleTriggerMouseDown=()=>{this.hasTrigger("click")&&this.hasTrigger("focus")&&!this.matches(":focus-within")?this._skipHideOnClick=!0:this._skipHideOnClick=!1},this.handleTriggerFocus=()=>{this.hasTrigger("focus")&&(this.open&&"hover"!==this._triggeredBy&&!this.hasPopupFocus()?this.hide():this.show("focus"))},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handlePopupBlur=e=>{let t=e.composedPath();t.includes(this)||t.includes(this.body)||this.hide()},this.handleWebviewBlur=()=>{this.hide()},this.handleWebviewMouseDown=e=>{let t=e.composedPath();t.includes(this)||t.includes(this.body)||this.hide()},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);let e=eu(getComputedStyle(this).getPropertyValue("--show-delay"));this.hoverTimeout=setTimeout(()=>this.show("hover"),e)}},this.handleMouseOut=e=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);let t=e.composedPath();if(t[t.length-2]===this||this.hasPopupFocus()||"hover"!==this._triggeredBy)return;let o=eu(getComputedStyle(this).getPropertyValue("--hide-delay"));this.hoverTimeout=setTimeout(()=>this.hide(),o)}},this.addEventListener("blur",this.handleTriggerBlur,!0),this.addEventListener("focus",this.handleTriggerFocus,!0),this.addEventListener("click",this.handleTriggerClick),this.addEventListener("mousedown",this.handleTriggerMouseDown),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}static closeOthers(e){for(let t of rH.openPopovers)t===e||t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINS||t.hide()}get currentPlacement(){return this.popup?.getAttribute("data-current-placement")??this.placement}disconnectedCallback(){this.closeWatcher?.destroy(),document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleWebviewMouseDown),rH.openPopovers.delete(this),super.disconnectedCallback?.()}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}render(){return t_`<sl-popup
			part="base"
			exportparts="
				popup:base__popup,
				arrow:base__arrow
			"
			class="popover"
			.anchor=${this.anchor}
			placement=${this.placement}
			distance=${this.distance}
			skidding=${this.skidding}
			strategy=${this.hoist?"fixed":"absolute"}
			auto-size="horizontal"
			auto-size-padding="3"
			flip-padding="3"
			flip
			shift
			?arrow=${this.arrow}
			hover-bridge
		>
			<div slot="anchor" aria-describedby="popover">
				<slot name="anchor"></slot>
			</div>

			<div
				part="body"
				id="popover"
				class="popover__body scrollable ${"menu"===this.appearance?"is-menu":""}"
				role="tooltip"
				aria-live=${this.open?"polite":"off"}
			>
				<slot name="content"></slot>
			</div>
		</sl-popup>`}async show(e){if((null==this._triggeredBy||"hover"!==e)&&(this._triggeredBy=e),!this.open)return rH.closeOthers(this),this.open=!0,rH.openPopovers.add(this),eg(this,"gl-popover-after-show")}async hide(){if(this._triggeredBy=void 0,this.open)return this.open=!1,rH.openPopovers.delete(this),eg(this,"gl-popover-after-hide")}hasPopupFocus(){return this.matches(':has([slot="content"]:focus-within)')}hasTrigger(e){return this.trigger.split(" ").includes(e)}handleOpenChange(){this.open?this.disabled||(this.emit("gl-popover-show"),"CloseWatcher"in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>void this.hide()):document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("focusin",this.handlePopupBlur),window.addEventListener("webview-blur",this.handleWebviewBlur,!1),(this.hasTrigger("click")||this.hasTrigger("focus"))&&document.addEventListener("mousedown",this.handleWebviewMouseDown),this.body.hidden=!1,this.popup.active=!0,this.popup.reposition(),this.emit("gl-popover-after-show")):(document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),document.removeEventListener("mousedown",this.handleWebviewMouseDown),this.emit("gl-popover-hide"),this.closeWatcher?.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),this.popup.active=!1,this.body.hidden=!0,this.emit("gl-popover-after-hide"))}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}};rH.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},rH.openPopovers=new Set,rH.styles=[sP,eZ`
			:host {
				--hide-delay: 0ms;
				--show-delay: 500ms;

				display: contents;
			}

			.popover {
				--arrow-size: var(--sl-tooltip-arrow-size);
				--arrow-color: var(--sl-tooltip-background-color);
			}

			.popover::part(popup) {
				z-index: var(--sl-z-index-tooltip);
			}

			.popover::part(arrow) {
				border: 1px solid var(--gl-tooltip-border-color);
				z-index: 1;
			}

			.popover[placement^='top']::part(popup) {
				transform-origin: bottom;
			}

			.popover[placement^='bottom']::part(popup) {
				transform-origin: top;
			}

			.popover[placement^='left']::part(popup) {
				transform-origin: right;
			}

			.popover[placement^='right']::part(popup) {
				transform-origin: left;
			}

			.popover[data-current-placement^='top']::part(arrow) {
				border-top-width: 0;
				border-left-width: 0;
				clip-path: polygon(0 50%, 100% 0, 100% 100%, 0 100%);
			}

			.popover[data-current-placement^='bottom']::part(arrow) {
				border-bottom-width: 0;
				border-right-width: 0;
				clip-path: polygon(0 0, 100% 0, 100% 50%, 0 100%);
			}

			.popover[data-current-placement^='left']::part(arrow) {
				border-bottom-width: 0;
				border-left-width: 0;
				clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 100%, 0 30%);
			}

			.popover[data-current-placement^='right']::part(arrow) {
				border-top-width: 0;
				border-right-width: 0;
				clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 70%, 30% 0);
			}

			.popover__body {
				display: block;
				width: fit-content;
				border: 1px solid var(--gl-tooltip-border-color);
				border-radius: var(--sl-tooltip-border-radius);
				box-shadow: 0 2px 8px var(--gl-tooltip-shadow);
				background-color: var(--sl-tooltip-background-color);
				font-family: var(--sl-tooltip-font-family);
				font-size: var(--sl-tooltip-font-size);
				font-weight: var(--sl-tooltip-font-weight);
				line-height: var(--sl-tooltip-line-height);
				text-align: start;
				white-space: normal;
				color: var(--sl-tooltip-color);
				padding: var(--sl-tooltip-padding);
				user-select: none;
				-webkit-user-select: none;
				max-width: min(var(--auto-size-available-width), var(--max-width, 70vw));
				/* max-height: var(--auto-size-available-height);
			overflow: auto; */
				pointer-events: all;
			}

			.popover[data-current-placement^='top'] .popover__body,
			.popover[data-current-placement^='bottom'] .popover__body {
				width: max-content;
			}

			:host([appearance='menu']) {
				--sl-tooltip-padding: 0 var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
				--sl-tooltip-font-size: var(--vscode-font-size);
				--sl-tooltip-background-color: var(--vscode-menu-background);
				--arrow-color: var(--vscode-menu-background);
			}

			/* .popover::part(hover-bridge) {
			background: tomato;
			opacity: 1;
			z-index: 10000000000;
		} */
		`],rU([tD("#popover")],rH.prototype,"body",2),rU([tD("sl-popup")],rH.prototype,"popup",2),rU([tM({reflect:!0})],rH.prototype,"placement",2),rU([tM({type:Object})],rH.prototype,"anchor",2),rU([tM({reflect:!0,type:Boolean})],rH.prototype,"disabled",2),rU([tM({type:Number})],rH.prototype,"distance",2),rU([tM({reflect:!0,type:Boolean})],rH.prototype,"open",2),rU([tM({reflect:!0,type:Boolean})],rH.prototype,"arrow",2),rU([tM({type:Number})],rH.prototype,"skidding",2),rU([tM()],rH.prototype,"trigger",2),rU([tM({type:Boolean})],rH.prototype,"hoist",2),rU([tM({reflect:!0})],rH.prototype,"appearance",2),rU([rs("open",{afterFirstUpdate:!0})],rH.prototype,"handleOpenChange",1),rU([rs(["distance","hoist","placement","skidding"])],rH.prototype,"handleOptionsChange",1),rU([rs("disabled")],rH.prototype,"handleDisabledChange",1),rH=rU([tT("gl-popover")],rH);var rq=Object.defineProperty,rV=Object.getOwnPropertyDescriptor,rW=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?rV(t,o):t,c=e.length-1;c>=0;c--)(n=e[c])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&rq(t,o,a),a};let rG=class extends lit_element_i{constructor(){super(...arguments),this.overlay="tooltip",this.icon="",this.disabled=!1}render(){return this.label?"popover"===this.overlay?t_`<gl-popover hoist
				>${this.renderContent()}
				<div slot="content">${iG(this.label)}</div></gl-popover
			>`:t_`<gl-tooltip hoist content="${this.label}">${this.renderContent()}</gl-tooltip>`:this.renderContent()}renderContent(){return t_`
			<a
				class="chip"
				part="base"
				role="${!this.href?"button":tx}"
				type="${!this.href?"button":tx}"
				?disabled=${this.disabled}
				href=${this.href??tx}
				slot=${"popover"===this.overlay?"anchor":tx}
			>
				<code-icon part="icon" icon="${this.icon}"></code-icon><slot></slot>
			</a>
		`}focus(e){this.defaultFocusEl.focus(e)}};function rK(e="autolink",t="merged"){let o,r;switch(e){case"issue":r="closed"===t?"merged":"opened",o="closed"===t?"pass":"issues";break;case"pr":switch(r=t,t){case"merged":o="git-merge";break;case"closed":o="git-pull-request-closed";break;default:o="git-pull-request"}break;default:r="opened",o="link"}return{icon:o,modifier:r}}rG.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},rG.styles=[rN,rB,eZ`
			:host {
				display: inline-flex;
				justify-content: center;
				align-items: center;
				vertical-align: text-bottom;
				border-radius: 0.5rem;
			}

			* {
				box-sizing: border-box;
			}

			:host(:focus-within) {
				${sS}
			}

			:host(:hover) {
				background-color: var(--vscode-toolbar-hoverBackground);
			}

			:host(:active) {
				background-color: var(--vscode-toolbar-activeBackground);
			}

			:host([disabled]) {
				pointer-events: none;
				opacity: 0.5;
			}

			.chip {
				display: inline-flex;
				justify-content: center;
				align-items: center;
				gap: 0.2rem;
				vertical-align: middle;
				color: inherit;
				min-width: 2rem;
				height: 2rem;
				color: inherit;
				padding: 0.2rem;
				text-decoration: none;
				cursor: pointer;
			}
			.chip:hover {
				text-decoration: none;
			}
			.chip:focus {
				outline: none;
			}

			a:not(.chip) {
				text-decoration: underline;
			}

			::slotted(*) {
				padding-inline-end: 0.2rem;
				vertical-align: middle;
				text-transform: capitalize;
			}
		`],rW([tM()],rG.prototype,"href",2),rW([tM()],rG.prototype,"label",2),rW([tM()],rG.prototype,"overlay",2),rW([tM()],rG.prototype,"icon",2),rW([tM({type:Boolean})],rG.prototype,"disabled",2),rW([tD("a")],rG.prototype,"defaultFocusEl",2),rG=rW([tT("gl-action-chip")],rG);let rZ=()=>({toAttribute:e=>e.getTime(),fromAttribute:(e,t)=>new Date(parseInt(e,10))});var rY=Object.defineProperty,rX=Object.getOwnPropertyDescriptor,rQ=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?rX(t,o):t,c=e.length-1;c>=0;c--)(n=e[c])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&rY(t,o,a),a};let rJ=class extends lit_element_i{constructor(){super(...arguments),this.dateStyle="relative",this.date=new Date,this.tooltip=""}get absoluteDate(){return function(t,o,r,n=!0){o=o??void 0;let a=`${(void 0)??""}:${o}`,c=j.get(a);if(null==c){let t=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};let t=B.exec(e);if(t?.groups!=null){let{dateStyle:e,timeStyle:o}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:o||void 0}}let o={localeMatcher:"best fit"};for(let{groups:t}of e.matchAll(N))if(null!=t){for(let[e,r]of Object.entries(t))if(null!=r)switch(e){case"year":o.year=4===r.length?"numeric":"2-digit";break;case"month":switch(r.length){case 4:o.month="long";break;case 3:o.month="short";break;case 2:o.month="2-digit";break;case 1:o.month="numeric"}break;case"day":"DD"===r?o.day="2-digit":o.day="numeric";break;case"weekday":switch(r.length){case 4:o.weekday="long";break;case 3:o.weekday="short";break;case 2:o.weekday="narrow"}break;case"hour":o.hour=2===r.length?"2-digit":"numeric",o.hour12="hh"===r||"h"===r;break;case"minute":o.minute=2===r.length?"2-digit":"numeric";break;case"second":o.second=2===r.length?"2-digit":"numeric";break;case"fractionalSecond":o.fractionalSecondDigits=3;break;case"dayPeriod":o.dayPeriod="narrow",o.hour12=!0,o.hourCycle="h12";break;case"timeZoneName":o.timeZoneName=2===r.length?"long":"short"}}return o}(o);c=new Intl.DateTimeFormat(null==r?e:"system"===r?void 0:[r],t),n&&j.set(a,c)}if(null==o||B.test(o))return c.format(t);let h=c.formatToParts(t);return o.replace(N,(o,a,c,d,p,u,g,f,m,b,v,y,w,_,k)=>{if(null!=a)return a.substring(1,a.length-1);for(let[o,a]of Object.entries(k)){if(null==a)continue;let c=h.find(e=>e.type===o);if("Do"===a&&c?.type==="day"){var x=Number(c.value);let e=x%100;return`${x}${H[(e-20)%10]??H[e]??H[0]}`}if("a"===a&&c?.type==="dayPeriod"){let o=(function(t){let o=`${(void 0)??""}:time:${t}`,a=j.get(o);if(null==a){let c;c=null==r?e:"system"===r?void 0:[r],a=new Intl.DateTimeFormat(c,{localeMatcher:"best fit",timeStyle:t}),n&&j.set(o,a)}return a})("short").formatToParts(t).find(e=>"dayPeriod"===e.type);return` ${(o??c)?.value??""}`}return c?.value??""}return""})}(this.date,this.format??"MMMM Do, YYYY h:mma")}get dateLabel(){return"relative"===this.dateStyle?function(o,r){let n=("number"==typeof o?o:o.getTime())-new Date().getTime();for(let[o,r,a,c]of F)if(Math.abs(n)>=r||1e3===r)return null==t&&(t=new Intl.RelativeTimeFormat(e,{localeMatcher:"best fit",numeric:"auto",style:"long"})),t.format(Math.round(n/a),o);return""}(this.date):this.absoluteDate}render(){return t_`<gl-tooltip content="${this.tooltip} ${this.absoluteDate}"
			><time part="base" datetime="${this.date.toISOString()}">${this.dateLabel}</time></gl-tooltip
		>`}};rQ([tM()],rJ.prototype,"format",2),rQ([tM({attribute:"date-style"})],rJ.prototype,"dateStyle",2),rQ([tM({converter:rZ(),reflect:!0})],rJ.prototype,"date",2),rQ([tM()],rJ.prototype,"tooltip",2),rJ=rQ([tT("formatted-date")],rJ);var r0=Object.defineProperty,r1=Object.getOwnPropertyDescriptor,r2=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?r1(t,o):t,c=e.length-1;c>=0;c--)(n=e[c])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&r0(t,o,a),a};let r5=class extends GlElement{constructor(){super(...arguments),this.url="",this.name="",this.status="merged",this.type="autolink",this.identifier="",this.details=!1}renderDate(){return this.date?t_`<formatted-date
			.date=${new Date(this.date)}
			.format=${this.dateFormat}
			.dateStyle=${this.dateStyle}
		></formatted-date>`:tx}render(){let{icon:e,modifier:t}=rK(this.type,this.status);return this.compact?t_`
				<span class="icon icon--${t}"><code-icon icon=${e}></code-icon></span>
				<p class="title">${this.identifier}</p>
			`:t_`
			<span class="icon icon--${t}"><code-icon icon=${e}></code-icon></span>
			<p class="title">
				<a href="${this.url}">${this.name}</a>
			</p>
			<p class="date">${this.identifier} ${this.status?this.status:tx} ${this.renderDate()}</p>
			${tN(!0===this.details,()=>t_`
					<p class="details">
						<gl-button appearance="toolbar" tooltip="Open Details" @click=${()=>this.onDetailsClicked()}
							><code-icon icon="eye"></code-icon
						></gl-button>
					</p>
				`)}
		`}onDetailsClicked(){this.emit("gl-issue-pull-request-details")}};r5.styles=eZ`
		:host {
			display: grid;
			gap: 0.25rem 0.6rem;
			justify-content: start;
			font-size: 1.3rem;
			grid-template-columns: min-content 1fr min-content;
		}

		:host([compact]) {
			grid-template-columns: min-content 1fr;
		}

		a {
			color: var(--color-link-foreground);
			text-decoration: none;
		}

		.icon {
			grid-column: 1;
			grid-row: 1 / 3;
			text-align: center;
			padding-top: 0.1rem;
		}

		.icon--opened {
			color: var(--vscode-gitlens-openPullRequestIconColor);
		}
		.icon--closed {
			color: var(--vscode-gitlens-closedPullRequestIconColor);
		}
		.icon--merged {
			color: var(--vscode-gitlens-mergedPullRequestIconColor);
		}

		.title {
			grid-column: 2;
			grid-row: 1;
			margin: 0;
		}

		.date {
			grid-column: 2;
			grid-row: 2;
			margin: 0;
		}

		.details {
			grid-column: 3;
			grid-row: 1 / 3;
			margin: 0;
		}
	`,r2([tM()],r5.prototype,"url",2),r2([tM()],r5.prototype,"name",2),r2([tM()],r5.prototype,"date",2),r2([tM()],r5.prototype,"dateFormat",2),r2([tM()],r5.prototype,"dateStyle",2),r2([tM()],r5.prototype,"status",2),r2([tM()],r5.prototype,"type",2),r2([tM()],r5.prototype,"identifier",2),r2([tM({type:Boolean,reflect:!0})],r5.prototype,"compact",2),r2([tM({type:Boolean})],r5.prototype,"details",2),r5=r2([tT("issue-pull-request")],r5);var r3=Object.defineProperty,r6=Object.getOwnPropertyDescriptor,r9=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?r6(t,o):t,c=e.length-1;c>=0;c--)(n=e[c])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&r3(t,o,a),a};let r7=class extends lit_element_i{constructor(){super(...arguments),this.url="",this.name="",this.status="merged",this.type="autolink",this.identifier="",this.details=!1}render(){let{icon:e,modifier:t}=rK(this.type,this.status);return t_`<gl-popover hoist>
			<gl-action-chip exportparts="icon" slot="anchor" icon=${e} class="chip--${t}"
				><span part="label">${this.identifier}</span></gl-action-chip
			>
			<div slot="content">
				<issue-pull-request
					type=${this.type}
					name=${this.name}
					url="${this.url}"
					identifier=${this.identifier}
					status=${this.status}
					.date=${this.date}
					.dateFormat=${this.dateFormat}
					.dateStyle=${this.dateStyle}
					?details=${this.details}
				></issue-pull-request>
			</div>
		</gl-popover>`}};r7.styles=eZ`
		:host {
			display: contents;
		}

		.chip--opened::part(icon) {
			color: var(--vscode-gitlens-openPullRequestIconColor);
		}
		.chip--closed::part(icon) {
			color: var(--vscode-gitlens-closedPullRequestIconColor);
		}
		.chip--merged::part(icon) {
			color: var(--vscode-gitlens-mergedPullRequestIconColor);
		}
	`,r9([tM()],r7.prototype,"url",2),r9([tM()],r7.prototype,"name",2),r9([tM()],r7.prototype,"date",2),r9([tM()],r7.prototype,"dateFormat",2),r9([tM()],r7.prototype,"dateStyle",2),r9([tM()],r7.prototype,"status",2),r9([tM()],r7.prototype,"type",2),r9([tM()],r7.prototype,"identifier",2),r9([tM({type:Boolean})],r7.prototype,"details",2),r7=r9([tT("gl-autolink-chip")],r7);var r8=Object.defineProperty,r4=Object.getOwnPropertyDescriptor,ne=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?r4(t,o):t,c=e.length-1;c>=0;c--)(n=e[c])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&r8(t,o,a),a};let ni=class extends lit_element_i{constructor(){super(...arguments),this.name="",this.avatarUrl="https://www.gravatar.com/avatar/?s=64&d=robohash",this.showAvatar=!1}renderAvatar(){return this.showAvatar&&this.avatarUrl?.length?t_`<img class="thumb" src="${this.avatarUrl}" alt="${this.name}" />`:t_`<code-icon icon="person" size="18"></code-icon>`}render(){return t_`
			<gl-tooltip>
				${tN(null!=this.url,()=>t_`<a class="author" href="${this.url}"
							><span class="avatar">${this.renderAvatar()}</span><span class="name">${this.name}</span></a
						>`,()=>t_`<span class="author"
							><span class="avatar">${this.renderAvatar()}</span
							><span class="name">${this.name}</span></span
						>`)}
				<div class="author-hover" slot="content">
					${this.avatarUrl?.length?t_`<img class="thumb" src="${this.avatarUrl}" alt="${this.name}" />`:tx}
					<span>${this.name}</span>
				</div>
			</gl-tooltip>
		`}};ni.styles=eZ`
		:host {
			display: contents;
		}

		* {
			box-sizing: border-box;
		}

		.author {
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: 0 0.6rem;
		}

		a {
			color: var(--color-link-foreground);
			text-decoration: none;
		}

		.author-hover {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 0.6rem;
			margin: 0.6rem 0.2rem 0.2rem 0.2rem;
		}

		.author-hover img {
			max-width: 64px;
		}

		.avatar {
			width: 1.8rem;
		}

		.thumb {
			width: 100%;
			height: auto;
			vertical-align: middle;
			border-radius: 0.4rem;
		}

		.name {
			flex: 1;
			font-size: 1.3rem;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
	`,ne([tM()],ni.prototype,"name",2),ne([tM()],ni.prototype,"url",2),ne([tM()],ni.prototype,"avatarUrl",2),ne([tM({type:Boolean,attribute:"show-avatar",reflect:!0})],ni.prototype,"showAvatar",2),ni=ne([tT("gl-commit-author")],ni);var no=Object.defineProperty,ns=Object.getOwnPropertyDescriptor,nr=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?ns(t,o):t,c=e.length-1;c>=0;c--)(n=e[c])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&no(t,o,a),a};let nn=class extends lit_element_i{constructor(){super(...arguments),this.dateFormat="MMMM Do, YYYY h:mma",this.dateStyle="relative",this.committer=!1}get absoluteDate(){return this.dateElement.absoluteDate}get dateLabel(){return this.dateElement.dateLabel}render(){return t_`<code-icon icon="git-commit"></code-icon>
			<formatted-date
				.date=${this.date}
				.format=${this.dateFormat}
				.dateStyle=${this.dateStyle}
				.tooltip=${this.actionLabel??tx}
			></formatted-date>`}};nn.styles=eZ`
		:host {
			display: inline-flex;
			align-items: center;
			gap: 0.2rem;
			vertical-align: middle;
			font-size: inherit;
		}

		formatted-date::part(base) {
			white-space: nowrap;
		}
	`,nr([tM({converter:rZ(),reflect:!0})],nn.prototype,"date",2),nr([tM()],nn.prototype,"dateFormat",2),nr([tM()],nn.prototype,"dateStyle",2),nr([tM({type:Boolean})],nn.prototype,"committer",2),nr([tM()],nn.prototype,"actionLabel",2),nr([tD("formatted-date")],nn.prototype,"dateElement",2),nn=nr([tT("gl-commit-date")],nn);var na=Object.defineProperty,nl=Object.getOwnPropertyDescriptor,nc=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?nl(t,o):t,c=e.length-1;c>=0;c--)(n=e[c])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&na(t,o,a),a};let nh=Object.freeze([["added",["+","add"]],["modified",["~","edit"]],["removed",["-","trash"]]]),nd=class extends lit_element_i{constructor(){super(...arguments),this.added=0,this.modified=0,this.removed=0}render(){return nh.map(([e,t])=>this.renderStat(e,t))}renderStat(e,t){let o=this[e];return null==o?tx:t_`<span class="stat ${e}" aria-label="${o} ${e}"
			><span class="label">${this.renderSymbol(t)}${o}</span></span
		>`}renderSymbol([e,t]){return"icons"===this.symbol?t_`<code-icon class="icon" icon="${t}"></code-icon>`:t_`<span>${e}</span>`}};nd.styles=eZ`
		:host {
			display: inline-flex;
			flex-direction: row;
			align-items: center;
			gap: 1rem;
			white-space: nowrap;
			font-size: 1rem;
		}

		:host([symbol='icons']) {
			gap: 0.8rem;
		}

		.stat {
			display: inline-flex;
			flex-direction: row;
			align-items: center;
		}

		.added {
			color: var(--vscode-gitDecoration-addedResourceForeground);
		}
		.modified {
			color: var(--vscode-gitDecoration-modifiedResourceForeground);
		}
		.removed {
			color: var(--vscode-gitDecoration-deletedResourceForeground);
		}

		.label {
			flex-basis: 100%;
			text-align: center;
			align-content: center;
			user-select: none;
		}

		.icon {
			--code-icon-size: 0.94017em;
			margin-inline-end: 0.2rem;
		}
	`,nc([tM({type:Number})],nd.prototype,"added",2),nc([tM({type:Number})],nd.prototype,"modified",2),nc([tM({type:Number})],nd.prototype,"removed",2),nc([tM()],nd.prototype,"symbol",2),nd=nc([tT("commit-stats")],nd);let private_async_helpers_s=class private_async_helpers_s{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}};let private_async_helpers_i=class private_async_helpers_i{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(e=>this.Z=e)}resume(){this.Z?.(),this.Y=this.Z=void 0}};let np=e=>null!==e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then;let until_c=class until_c extends async_directive_f{constructor(){super(...arguments),this._$Cwt=0x3fffffff,this._$Cbt=[],this._$CK=new private_async_helpers_s(this),this._$CX=new private_async_helpers_i}render(...e){return e.find(e=>!np(e))??tk}update(e,t){let o=this._$Cbt,r=o.length;this._$Cbt=t;let n=this._$CK,a=this._$CX;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$Cwt);e++){let c=t[e];if(!np(c))return this._$Cwt=e,c;e<r&&c===o[e]||(this._$Cwt=0x3fffffff,r=0,Promise.resolve(c).then(async e=>{for(;a.get();)await a.get();let t=n.deref();if(void 0!==t){let o=t._$Cbt.indexOf(c);o>-1&&o<t._$Cwt&&(t._$Cwt=o,t.setValue(e))}}))}return tk}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};let nu=iV(until_c);function ng(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var nf=ng(),nm={exec:()=>null};function nb(e,t=""){let o="string"==typeof e?e:e.source,r={replace:(e,t)=>{let n="string"==typeof t?t:t.source;return n=n.replace(nv.caret,"$1"),o=o.replace(e,n),r},getRegex:()=>new RegExp(o,t)};return r}var nv={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,"i")},ny=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,nw=/(?:[*+-]|\d{1,9}[.)])/,n_=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,nk=nb(n_).replace(/bull/g,nw).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),nx=nb(n_).replace(/bull/g,nw).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),n$=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,nC=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,nS=nb(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",nC).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),nA=nb(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,nw).getRegex(),nE="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",nP=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,nI=nb("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",nP).replace("tag",nE).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),nR=nb(n$).replace("hr",ny).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",nE).getRegex(),nT={blockquote:nb(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",nR).getRegex(),code:/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,def:nS,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,hr:ny,html:nI,lheading:nk,list:nA,newline:/^(?:[ \t]*(?:\n|$))+/,paragraph:nR,table:nm,text:/^[^\n]+/},nz=nb("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",ny).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",nE).getRegex(),nM={...nT,lheading:nx,table:nz,paragraph:nb(n$).replace("hr",ny).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",nz).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",nE).getRegex()},nO={...nT,html:nb(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",nP).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:nm,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:nb(n$).replace("hr",ny).replace("heading",` *#{1,6} *[^
]`).replace("lheading",nk).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},nL=/^( {2,}|\\)\n(?!\s*$)/,nD=/[\p{P}\p{S}]/u,nN=/[\s\p{P}\p{S}]/u,nB=/[^\s\p{P}\p{S}]/u,nF=nb(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,nN).getRegex(),nj=/(?!~)[\p{P}\p{S}]/u,nU=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,nH=nb(nU,"u").replace(/punct/g,nD).getRegex(),nq=nb(nU,"u").replace(/punct/g,nj).getRegex(),nV="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",nW=nb(nV,"gu").replace(/notPunctSpace/g,nB).replace(/punctSpace/g,nN).replace(/punct/g,nD).getRegex(),nG=nb(nV,"gu").replace(/notPunctSpace/g,/(?:[^\s\p{P}\p{S}]|~)/u).replace(/punctSpace/g,/(?!~)[\s\p{P}\p{S}]/u).replace(/punct/g,nj).getRegex(),nK=nb("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,nB).replace(/punctSpace/g,nN).replace(/punct/g,nD).getRegex(),nZ=nb(/\\(punct)/,"gu").replace(/punct/g,nD).getRegex(),nY=nb(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),nX=nb(nP).replace("(?:--\x3e|$)","--\x3e").getRegex(),nQ=nb("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",nX).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),nJ=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`[^`]*`|[^\[\]\\`])*?/,n0=nb(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",nJ).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),n1=nb(/^!?\[(label)\]\[(ref)\]/).replace("label",nJ).replace("ref",nC).getRegex(),n2=nb(/^!?\[(ref)\](?:\[\])?/).replace("ref",nC).getRegex(),n5=nb("reflink|nolink(?!\\()","g").replace("reflink",n1).replace("nolink",n2).getRegex(),n3={_backpedal:nm,anyPunctuation:nZ,autolink:nY,blockSkip:/\[[^\[\]]*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)|`[^`]*?`|<(?! )[^<>]*?>/g,br:nL,code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,del:nm,emStrongLDelim:nH,emStrongRDelimAst:nW,emStrongRDelimUnd:nK,escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,link:n0,nolink:n2,punctuation:nF,reflink:n1,reflinkSearch:n5,tag:nQ,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,url:nm},n6={...n3,link:nb(/^!?\[(label)\]\((.*?)\)/).replace("label",nJ).getRegex(),reflink:nb(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",nJ).getRegex()},n9={...n3,emStrongRDelimAst:nG,emStrongLDelim:nq,url:nb(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},n7={...n9,br:nb(nL).replace("{2,}","*").getRegex(),text:nb(n9.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},n8={normal:nT,gfm:nM,pedantic:nO},n4={normal:n3,gfm:n9,breaks:n7,pedantic:n6},ae={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ai=e=>ae[e];function ao(e,t){if(t){if(nv.escapeTest.test(e))return e.replace(nv.escapeReplace,ai)}else if(nv.escapeTestNoEncode.test(e))return e.replace(nv.escapeReplaceNoEncode,ai);return e}function as(e){try{e=encodeURI(e).replace(nv.percentDecode,"%")}catch{return null}return e}function ar(e,t){let o=e.replace(nv.findPipe,(e,t,o)=>{let r=!1,n=t;for(;--n>=0&&"\\"===o[n];)r=!r;return r?"|":" |"}).split(nv.splitPipe),r=0;if(o[0].trim()||o.shift(),o.length>0&&!o.at(-1)?.trim()&&o.pop(),t)if(o.length>t)o.splice(t);else for(;o.length<t;)o.push("");for(;r<o.length;r++)o[r]=o[r].trim().replace(nv.slashPipe,"|");return o}function an(e,t,o){let r=e.length;if(0===r)return"";let n=0;for(;n<r;){let a=e.charAt(r-n-1);if(a!==t||o)if(a!==t&&o)n++;else break;else n++}return e.slice(0,r-n)}function aa(e,t,o,r,n){let a=t.href,c=t.title||null,h=e[1].replace(n.other.outputLinkReplace,"$1");r.state.inLink=!0;let d={type:"!"===e[0].charAt(0)?"image":"link",raw:o,href:a,title:c,text:h,tokens:r.inlineTokens(h)};return r.state.inLink=!1,d}var al=class{options;rules;lexer;constructor(e){this.options=e||nf}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?e:an(e,`
`)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],o=function(e,t,o){let r=e.match(o.other.indentCodeCompensation);if(null===r)return t;let n=r[1];return t.split(`
`).map(e=>{let t=e.match(o.other.beginningSpace);if(null===t)return e;let[r]=t;return r.length>=n.length?e.slice(n.length):e}).join(`
`)}(e,t[3]||"",this.rules);return{type:"code",raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:o}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let t=an(e,"#");(this.options.pedantic||!t||this.rules.other.endingSpaceChar.test(t))&&(e=t.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:an(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=an(t[0],`
`).split(`
`),o="",r="",n=[];for(;e.length>0;){let t=!1,a=[],c;for(c=0;c<e.length;c++)if(this.rules.other.blockquoteStart.test(e[c]))a.push(e[c]),t=!0;else if(t)break;else a.push(e[c]);e=e.slice(c);let h=a.join(`
`),d=h.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");o=o?`${o}
${h}`:h,r=r?`${r}
${d}`:d;let p=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(d,n,!0),this.lexer.state.top=p,0===e.length)break;let u=n.at(-1);if(u?.type==="code")break;if(u?.type==="blockquote"){let t=u.raw+`
`+e.join(`
`),a=this.blockquote(t);n[n.length-1]=a,o=o.substring(0,o.length-u.raw.length)+a.raw,r=r.substring(0,r.length-u.text.length)+a.text;break}if(u?.type==="list"){let t=u.raw+`
`+e.join(`
`),a=this.list(t);n[n.length-1]=a,o=o.substring(0,o.length-u.raw.length)+a.raw,r=r.substring(0,r.length-u.raw.length)+a.raw,e=t.substring(n.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:o,tokens:n,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let o=t[1].trim(),r=o.length>1,n={type:"list",raw:"",ordered:r,start:r?+o.slice(0,-1):"",loose:!1,items:[]};o=r?`\\d{1,9}\\${o.slice(-1)}`:`\\${o}`,this.options.pedantic&&(o=r?o:"[*+-]");let a=this.rules.other.listItemRegex(o),c=!1;for(;e;){let o=!1,r="",h="";if(!(t=a.exec(e))||this.rules.block.hr.test(e))break;r=t[0],e=e.substring(r.length);let d=t[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,e=>" ".repeat(3*e.length)),p=e.split(`
`,1)[0],u=!d.trim(),g=0;if(this.options.pedantic?(g=2,h=d.trimStart()):u?g=t[1].length+1:(g=(g=t[2].search(this.rules.other.nonSpaceChar))>4?1:g,h=d.slice(g),g+=t[1].length),u&&this.rules.other.blankLine.test(p)&&(r+=p+`
`,e=e.substring(p.length+1),o=!0),!o){let t=this.rules.other.nextBulletRegex(g),o=this.rules.other.hrRegex(g),n=this.rules.other.fencesBeginRegex(g),a=this.rules.other.headingBeginRegex(g),c=this.rules.other.htmlBeginRegex(g);for(;e;){let f=e.split(`
`,1)[0],m;if(p=f,m=this.options.pedantic?p=p.replace(this.rules.other.listReplaceNesting,"  "):p.replace(this.rules.other.tabCharGlobal,"    "),n.test(p)||a.test(p)||c.test(p)||t.test(p)||o.test(p))break;if(m.search(this.rules.other.nonSpaceChar)>=g||!p.trim())h+=`
`+m.slice(g);else{if(u||d.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||n.test(d)||a.test(d)||o.test(d))break;h+=`
`+p}u||p.trim()||(u=!0),r+=f+`
`,e=e.substring(f.length+1),d=m.slice(g)}}n.loose||(c?n.loose=!0:this.rules.other.doubleBlankLine.test(r)&&(c=!0));let f=null,m;this.options.gfm&&(f=this.rules.other.listIsTask.exec(h))&&(m="[ ] "!==f[0],h=h.replace(this.rules.other.listReplaceTask,"")),n.items.push({type:"list_item",raw:r,task:!!f,checked:m,loose:!1,text:h,tokens:[]}),n.raw+=r}let h=n.items.at(-1);if(!h)return;h.raw=h.raw.trimEnd(),h.text=h.text.trimEnd(),n.raw=n.raw.trimEnd();for(let e=0;e<n.items.length;e++)if(this.lexer.state.top=!1,n.items[e].tokens=this.lexer.blockTokens(n.items[e].text,[]),!n.loose){let t=n.items[e].tokens.filter(e=>"space"===e.type);n.loose=t.length>0&&t.some(e=>this.rules.other.anyLine.test(e.raw))}if(n.loose)for(let e=0;e<n.items.length;e++)n.items[e].loose=!0;return n}}html(e){let t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:"pre"===t[1]||"script"===t[1]||"style"===t[1],text:t[0]}}def(e){let t=this.rules.block.def.exec(e);if(t){let e=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),o=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:e,raw:t[0],href:o,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let o=ar(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),n=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],a={type:"table",raw:t[0],header:[],align:[],rows:[]};if(o.length===r.length){for(let e of r)this.rules.other.tableAlignRight.test(e)?a.align.push("right"):this.rules.other.tableAlignCenter.test(e)?a.align.push("center"):this.rules.other.tableAlignLeft.test(e)?a.align.push("left"):a.align.push(null);for(let e=0;e<o.length;e++)a.header.push({text:o[e],tokens:this.lexer.inline(o[e]),header:!0,align:a.align[e]});for(let e of n)a.rows.push(ar(e,a.header.length).map((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:a.align[t]})));return a}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let e=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;let t=an(e.slice(0,-1),"\\");if((e.length-t.length)%2==0)return}else{let e=function(e,t){if(-1===e.indexOf(")"))return -1;let o=0;for(let r=0;r<e.length;r++)if("\\"===e[r])r++;else if("("===e[r])o++;else if(e[r]===t[1]&&--o<0)return r;return o>0?-2:-1}(t[2],"()");if(-2===e)return;if(e>-1){let o=(0===t[0].indexOf("!")?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,o).trim(),t[3]=""}}let o=t[2],r="";if(this.options.pedantic){let e=this.rules.other.pedanticHrefTitle.exec(o);e&&(o=e[1],r=e[3])}else r=t[3]?t[3].slice(1,-1):"";return o=o.trim(),this.rules.other.startAngleBracket.test(o)&&(o=this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?o.slice(1):o.slice(1,-1)),aa(t,{href:o&&o.replace(this.rules.inline.anyPunctuation,"$1"),title:r&&r.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(e,t){let o;if((o=this.rules.inline.reflink.exec(e))||(o=this.rules.inline.nolink.exec(e))){let e=t[(o[2]||o[1]).replace(this.rules.other.multipleSpaceGlobal," ").toLowerCase()];if(!e){let e=o[0].charAt(0);return{type:"text",raw:e,text:e}}return aa(o,e,o[0],this.lexer,this.rules)}}emStrong(e,t,o=""){let r=this.rules.inline.emStrongLDelim.exec(e);if(!(!r||r[3]&&o.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[2])||!o||this.rules.inline.punctuation.exec(o))){let o=[...r[0]].length-1,n,a,c=o,h=0,d="*"===r[0][0]?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(d.lastIndex=0,t=t.slice(-1*e.length+o);null!=(r=d.exec(t));){if(!(n=r[1]||r[2]||r[3]||r[4]||r[5]||r[6]))continue;if(a=[...n].length,r[3]||r[4]){c+=a;continue}if((r[5]||r[6])&&o%3&&!((o+a)%3)){h+=a;continue}if((c-=a)>0)continue;a=Math.min(a,a+c+h);let t=[...r[0]][0].length,d=e.slice(0,o+r.index+t+a);if(Math.min(o,a)%2){let e=d.slice(1,-1);return{type:"em",raw:d,text:e,tokens:this.lexer.inlineTokens(e)}}let p=d.slice(2,-2);return{type:"strong",raw:d,text:p,tokens:this.lexer.inlineTokens(p)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal," "),o=this.rules.other.nonSpaceChar.test(e),r=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return o&&r&&(e=e.substring(1,e.length-1)),{type:"codespan",raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){let t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,o;return o="@"===t[2]?"mailto:"+(e=t[1]):e=t[1],{type:"link",raw:t[0],text:e,href:o,tokens:[{type:"text",raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,o;if("@"===t[2])o="mailto:"+(e=t[0]);else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??"";while(r!==t[0])e=t[0],o="www."===t[1]?"http://"+t[0]:t[0]}return{type:"link",raw:t[0],text:e,href:o,tokens:[{type:"text",raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:e}}}},ac=class l{tokens;options;state;tokenizer;inlineQueue;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||nf,this.options.tokenizer=this.options.tokenizer||new al,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:nv,block:n8.normal,inline:n4.normal};this.options.pedantic?(t.block=n8.pedantic,t.inline=n4.pedantic):this.options.gfm&&(t.block=n8.gfm,this.options.breaks?t.inline=n4.breaks:t.inline=n4.gfm),this.tokenizer.rules=t}static get rules(){return{block:n8,inline:n4}}static lex(e,t){return new l(t).lex(e)}static lexInline(e,t){return new l(t).inlineTokens(e)}lex(e){e=e.replace(nv.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],o=!1){for(this.options.pedantic&&(e=e.replace(nv.tabCharGlobal,"    ").replace(nv.spaceLine,""));e;){let r;if(this.options.extensions?.block?.some(o=>!!(r=o.call({lexer:this},e,t))&&(e=e.substring(r.raw.length),t.push(r),!0)))continue;if(r=this.tokenizer.space(e)){e=e.substring(r.raw.length);let o=t.at(-1);1===r.raw.length&&void 0!==o?o.raw+=`
`:t.push(r);continue}if(r=this.tokenizer.code(e)){e=e.substring(r.raw.length);let o=t.at(-1);o?.type==="paragraph"||o?.type==="text"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+r.raw,o.text+=`
`+r.text,this.inlineQueue.at(-1).src=o.text):t.push(r);continue}if((r=this.tokenizer.fences(e))||(r=this.tokenizer.heading(e))||(r=this.tokenizer.hr(e))||(r=this.tokenizer.blockquote(e))||(r=this.tokenizer.list(e))||(r=this.tokenizer.html(e))){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.def(e)){e=e.substring(r.raw.length);let o=t.at(-1);o?.type==="paragraph"||o?.type==="text"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+r.raw,o.text+=`
`+r.raw,this.inlineQueue.at(-1).src=o.text):this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title},t.push(r));continue}if((r=this.tokenizer.table(e))||(r=this.tokenizer.lheading(e))){e=e.substring(r.raw.length),t.push(r);continue}let n=e;if(this.options.extensions?.startBlock){let t=1/0,o=e.slice(1),r;this.options.extensions.startBlock.forEach(e=>{"number"==typeof(r=e.call({lexer:this},o))&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(n=e.substring(0,t+1))}if(this.state.top&&(r=this.tokenizer.paragraph(n))){let a=t.at(-1);o&&a?.type==="paragraph"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+r.raw,a.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):t.push(r),o=n.length!==e.length,e=e.substring(r.raw.length);continue}if(r=this.tokenizer.text(e)){e=e.substring(r.raw.length);let o=t.at(-1);o?.type==="text"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+r.raw,o.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=o.text):t.push(r);continue}if(e){let t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent)break;throw Error(t)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let o=e,r=null;if(this.tokens.links){let e=Object.keys(this.tokens.links);if(e.length>0)for(;null!=(r=this.tokenizer.rules.inline.reflinkSearch.exec(o));)e.includes(r[0].slice(r[0].lastIndexOf("[")+1,-1))&&(o=o.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(r=this.tokenizer.rules.inline.anyPunctuation.exec(o));)o=o.slice(0,r.index)+"++"+o.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;null!=(r=this.tokenizer.rules.inline.blockSkip.exec(o));)o=o.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);o=this.options.hooks?.emStrongMask?.call({lexer:this},o)??o;let n=!1,a="";for(;e;){let r;if(n||(a=""),n=!1,this.options.extensions?.inline?.some(o=>!!(r=o.call({lexer:this},e,t))&&(e=e.substring(r.raw.length),t.push(r),!0)))continue;if((r=this.tokenizer.escape(e))||(r=this.tokenizer.tag(e))||(r=this.tokenizer.link(e))){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length);let o=t.at(-1);"text"===r.type&&o?.type==="text"?(o.raw+=r.raw,o.text+=r.text):t.push(r);continue}if((r=this.tokenizer.emStrong(e,o,a))||(r=this.tokenizer.codespan(e))||(r=this.tokenizer.br(e))||(r=this.tokenizer.del(e))||(r=this.tokenizer.autolink(e))||!this.state.inLink&&(r=this.tokenizer.url(e))){e=e.substring(r.raw.length),t.push(r);continue}let c=e;if(this.options.extensions?.startInline){let t=1/0,o=e.slice(1),r;this.options.extensions.startInline.forEach(e=>{"number"==typeof(r=e.call({lexer:this},o))&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(c=e.substring(0,t+1))}if(r=this.tokenizer.inlineText(c)){e=e.substring(r.raw.length),"_"!==r.raw.slice(-1)&&(a=r.raw.slice(-1)),n=!0;let o=t.at(-1);o?.type==="text"?(o.raw+=r.raw,o.text+=r.text):t.push(r);continue}if(e){let t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent)break;throw Error(t)}}return t}},ah=class{options;parser;constructor(e){this.options=e||nf}space(e){return""}code({text:e,lang:t,escaped:o}){let r=(t||"").match(nv.notSpaceStart)?.[0],n=e.replace(nv.endingNewline,"")+`
`;return r?'<pre><code class="language-'+ao(r)+'">'+(o?n:ao(n,!0))+`</code></pre>
`:"<pre><code>"+(o?n:ao(n,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return""}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,o=e.start,r="";for(let t=0;t<e.items.length;t++){let o=e.items[t];r+=this.listitem(o)}let n=t?"ol":"ul";return"<"+n+(t&&1!==o?' start="'+o+'"':"")+`>
`+r+"</"+n+`>
`}listitem(e){let t="";if(e.task){let o=this.checkbox({checked:!!e.checked});e.loose?e.tokens[0]?.type==="paragraph"?(e.tokens[0].text=o+" "+e.tokens[0].text,e.tokens[0].tokens&&e.tokens[0].tokens.length>0&&"text"===e.tokens[0].tokens[0].type&&(e.tokens[0].tokens[0].text=o+" "+ao(e.tokens[0].tokens[0].text),e.tokens[0].tokens[0].escaped=!0)):e.tokens.unshift({type:"text",raw:o+" ",text:o+" ",escaped:!0}):t+=o+" "}return t+=this.parser.parse(e.tokens,!!e.loose),`<li>${t}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t="",o="";for(let t=0;t<e.header.length;t++)o+=this.tablecell(e.header[t]);t+=this.tablerow({text:o});let r="";for(let t=0;t<e.rows.length;t++){let n=e.rows[t];o="";for(let e=0;e<n.length;e++)o+=this.tablecell(n[e]);r+=this.tablerow({text:o})}return r&&(r=`<tbody>${r}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+r+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),o=e.header?"th":"td";return(e.align?`<${o} align="${e.align}">`:`<${o}>`)+t+`</${o}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${ao(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:o}){let r=this.parser.parseInline(o),n=as(e);if(null===n)return r;let a='<a href="'+(e=n)+'"';return t&&(a+=' title="'+ao(t)+'"'),a+=">"+r+"</a>"}image({href:e,title:t,text:o,tokens:r}){r&&(o=this.parser.parseInline(r,this.parser.textRenderer));let n=as(e);if(null===n)return ao(o);e=n;let a=`<img src="${e}" alt="${o}"`;return t&&(a+=` title="${ao(t)}"`),a+=">"}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:ao(e.text)}},ad=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}},ap=class l{options;renderer;textRenderer;constructor(e){this.options=e||nf,this.options.renderer=this.options.renderer||new ah,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new ad}static parse(e,t){return new l(t).parse(e)}static parseInline(e,t){return new l(t).parseInline(e)}parse(e,t=!0){let o="";for(let r=0;r<e.length;r++){let n=e[r];if(this.options.extensions?.renderers?.[n.type]){let e=this.options.extensions.renderers[n.type].call({parser:this},n);if(!1!==e||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(n.type)){o+=e||"";continue}}switch(n.type){case"space":o+=this.renderer.space(n);continue;case"hr":o+=this.renderer.hr(n);continue;case"heading":o+=this.renderer.heading(n);continue;case"code":o+=this.renderer.code(n);continue;case"table":o+=this.renderer.table(n);continue;case"blockquote":o+=this.renderer.blockquote(n);continue;case"list":o+=this.renderer.list(n);continue;case"html":o+=this.renderer.html(n);continue;case"def":o+=this.renderer.def(n);continue;case"paragraph":o+=this.renderer.paragraph(n);continue;case"text":{let a=n,c=this.renderer.text(a);for(;r+1<e.length&&"text"===e[r+1].type;)a=e[++r],c+=`
`+this.renderer.text(a);t?o+=this.renderer.paragraph({type:"paragraph",raw:c,text:c,tokens:[{type:"text",raw:c,text:c,escaped:!0}]}):o+=c;continue}default:{let e='Token with "'+n.type+'" type was not found.';if(this.options.silent)return"";throw Error(e)}}}return o}parseInline(e,t=this.renderer){let o="";for(let r=0;r<e.length;r++){let n=e[r];if(this.options.extensions?.renderers?.[n.type]){let e=this.options.extensions.renderers[n.type].call({parser:this},n);if(!1!==e||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(n.type)){o+=e||"";continue}}switch(n.type){case"escape":case"text":o+=t.text(n);break;case"html":o+=t.html(n);break;case"link":o+=t.link(n);break;case"image":o+=t.image(n);break;case"strong":o+=t.strong(n);break;case"em":o+=t.em(n);break;case"codespan":o+=t.codespan(n);break;case"br":o+=t.br(n);break;case"del":o+=t.del(n);break;default:{let e='Token with "'+n.type+'" type was not found.';if(this.options.silent)return"";throw Error(e)}}}return o}},au=class{options;block;constructor(e){this.options=e||nf}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(){return this.block?ac.lex:ac.lexInline}provideParser(){return this.block?ap.parse:ap.parseInline}},ag=new class{defaults=ng();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=ap;Renderer=ah;TextRenderer=ad;Lexer=ac;Tokenizer=al;Hooks=au;constructor(...e){this.use(...e)}walkTokens(e,t){let o=[];for(let r of e)switch(o=o.concat(t.call(this,r)),r.type){case"table":for(let e of r.header)o=o.concat(this.walkTokens(e.tokens,t));for(let e of r.rows)for(let r of e)o=o.concat(this.walkTokens(r.tokens,t));break;case"list":o=o.concat(this.walkTokens(r.items,t));break;default:{let e=r;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(r=>{let n=e[r].flat(1/0);o=o.concat(this.walkTokens(n,t))}):e.tokens&&(o=o.concat(this.walkTokens(e.tokens,t)))}}return o}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let o={...e};if(o.async=this.defaults.async||o.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error("extension name required");if("renderer"in e){let o=t.renderers[e.name];o?t.renderers[e.name]=function(...t){let r=e.renderer.apply(this,t);return!1===r&&(r=o.apply(this,t)),r}:t.renderers[e.name]=e.renderer}if("tokenizer"in e){if(!e.level||"block"!==e.level&&"inline"!==e.level)throw Error("extension level must be 'block' or 'inline'");let o=t[e.level];o?o.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&("block"===e.level?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:"inline"===e.level&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}"childTokens"in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),o.extensions=t),e.renderer){let t=this.defaults.renderer||new ah(this.defaults);for(let o in e.renderer){if(!(o in t))throw Error(`renderer '${o}' does not exist`);if(["options","parser"].includes(o))continue;let r=e.renderer[o],n=t[o];t[o]=(...e)=>{let o=r.apply(t,e);return!1===o&&(o=n.apply(t,e)),o||""}}o.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new al(this.defaults);for(let o in e.tokenizer){if(!(o in t))throw Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;let r=e.tokenizer[o],n=t[o];t[o]=(...e)=>{let o=r.apply(t,e);return!1===o&&(o=n.apply(t,e)),o}}o.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new au;for(let o in e.hooks){if(!(o in t))throw Error(`hook '${o}' does not exist`);if(["options","block"].includes(o))continue;let r=e.hooks[o],n=t[o];au.passThroughHooks.has(o)?t[o]=e=>{if(this.defaults.async&&au.passThroughHooksRespectAsync.has(o))return Promise.resolve(r.call(t,e)).then(e=>n.call(t,e));let a=r.call(t,e);return n.call(t,a)}:t[o]=(...e)=>{let o=r.apply(t,e);return!1===o&&(o=n.apply(t,e)),o}}o.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,r=e.walkTokens;o.walkTokens=function(e){let o=[];return o.push(r.call(this,e)),t&&(o=o.concat(t.call(this,e))),o}}this.defaults={...this.defaults,...o}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return ac.lex(e,t??this.defaults)}parser(e,t){return ap.parse(e,t??this.defaults)}parseMarkdown(e){return(t,o)=>{let r={...o},n={...this.defaults,...r},a=this.onError(!!n.silent,!!n.async);if(!0===this.defaults.async&&!1===r.async)return a(Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof t>"u"||null===t)return a(Error("marked(): input parameter is undefined or null"));if("string"!=typeof t)return a(Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));n.hooks&&(n.hooks.options=n,n.hooks.block=e);let c=n.hooks?n.hooks.provideLexer():e?ac.lex:ac.lexInline,h=n.hooks?n.hooks.provideParser():e?ap.parse:ap.parseInline;if(n.async)return Promise.resolve(n.hooks?n.hooks.preprocess(t):t).then(e=>c(e,n)).then(e=>n.hooks?n.hooks.processAllTokens(e):e).then(e=>n.walkTokens?Promise.all(this.walkTokens(e,n.walkTokens)).then(()=>e):e).then(e=>h(e,n)).then(e=>n.hooks?n.hooks.postprocess(e):e).catch(a);try{n.hooks&&(t=n.hooks.preprocess(t));let e=c(t,n);n.hooks&&(e=n.hooks.processAllTokens(e)),n.walkTokens&&this.walkTokens(e,n.walkTokens);let o=h(e,n);return n.hooks&&(o=n.hooks.postprocess(o)),o}catch(e){return a(e)}}}onError(e,t){return o=>{if(o.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let e="<p>An error occurred:</p><pre>"+ao(o.message+"",!0)+"</pre>";return t?Promise.resolve(e):e}if(t)return Promise.reject(o);throw o}}};function af(e,t){return ag.parse(e,t)}af.options=af.setOptions=function(e){return ag.setOptions(e),af.defaults=ag.defaults,nf=af.defaults,af},af.getDefaults=ng,af.defaults=nf,af.use=function(...e){return ag.use(...e),af.defaults=ag.defaults,nf=af.defaults,af},af.walkTokens=function(e,t){return ag.walkTokens(e,t)},af.parseInline=ag.parseInline,af.Parser=ap,af.parser=ap.parse,af.Renderer=ah,af.TextRenderer=ad,af.Lexer=ac,af.lexer=ac.lex,af.Tokenizer=al,af.Hooks=au,af.parse=af,af.options,af.setOptions,af.use,af.walkTokens,af.parseInline,ap.parse,ac.lex;var am=Object.defineProperty,ab=Object.getOwnPropertyDescriptor,av=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?ab(t,o):t,c=e.length-1;c>=0;c--)(n=e[c])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&am(t,o,a),a};let ay=class extends lit_element_i{constructor(){super(...arguments),this.markdown="",this.density="compact"}render(){return t_`${this.markdown?nu(this.renderMarkdown(this.markdown),"Loading..."):""}`}async renderMarkdown(e){af.setOptions({gfm:!0}),af.use({renderer:{image:function({href:e,title:t,text:o}){let r=[],n=[];return e&&({href:e,dimensions:r}=function(e){let t=[],o=e.split("|").map(e=>e.trim());e=o[0];let r=o[1];if(r){let e=/height=(\d+)/.exec(r),o=/width=(\d+)/.exec(r),n=e?e[1]:"",a=o?o[1]:"",c=isFinite(parseInt(a)),h=isFinite(parseInt(n));c&&t.push(`width="${a}"`),h&&t.push(`height="${n}"`)}return{href:e,dimensions:t}}(e),n.push(`src="${aS(e)}"`)),o&&n.push(`alt="${aS(o)}"`),t&&n.push(`title="${aS(t)}"`),r.length&&(n=n.concat(r)),`<img ${n.join(" ")}>`},paragraph:function({tokens:e}){let t=this.parser.parseInline(e);return`<p>${t}</p>`},link:function({href:e,title:t,tokens:o}){if("string"!=typeof e)return"";let r=this.parser.parseInline(o);return e===r&&(r=aA(r)),t="string"==typeof t?aS(aA(t)):"",e=aA(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),`<a href="${e}" title="${t||e}" draggable="false">${r}</a>`},code:function({text:e,lang:t}){return e=e.replace(/</g,"&lt;"),`<pre class="language-${t}"><code>${e}</code></pre>`},codespan:function({text:e}){return e=e.replace(/</g,"&lt;"),`<code>${e}</code>`}}});let t=await af.parse(e.replace(a$,e=>`\\${e}`));return iW(t=function(e){let t,o=[],r=0,n=0;for(;null!==(t=aC.exec(e));){r<(n=t.index||0)&&o.push(e.substring(r,n)),r=(t.index||0)+t[0].length;let[,a,c]=t;o.push(a?`$(${c})`:function(e){let[,t,o]=ak.exec(e.id)??[void 0,"error",void 0];return t.startsWith("gitlens-")&&(t=`gl-${t.substring(8)}`),`<code-icon icon="${t}"${o?` modifier="${o}"`:""}></code-icon>`}({id:c}))}return r<e.length&&o.push(e.substring(r)),o.join("")}(t))}};ay.styles=[rB,eZ`
			:host {
				--markdown-compact-block-spacing: 8px;
				--markdown-list-spacing: 20px;
			}

			a,
			a code {
				text-decoration: none;
				color: var(--vscode-textLink-foreground);
			}

			a:hover,
			a:hover code {
				color: var(--vscode-textLink-activeForeground);
			}

			a:hover:not(.disabled) {
				cursor: pointer;
			}

			p,
			.code,
			ul,
			h1,
			h2,
			h3,
			h4,
			h5,
			h6 {
				margin-inline: 0;
			}

			:where(:host([density='compact'])) p,
			:where(:host([density='compact'])) .code,
			:where(:host([density='compact'])) ul,
			:where(:host([density='compact'])) h1,
			:where(:host([density='compact'])) h2,
			:where(:host([density='compact'])) h3,
			:where(:host([density='compact'])) h4,
			:where(:host([density='compact'])) h5,
			:where(:host([density='compact'])) h6 {
				margin-block: var(--markdown-compact-block-spacing);
			}

			h1,
			h2,
			h3,
			h4,
			h5,
			h6 {
				line-height: 1.1;
			}

			code {
				background: var(--vscode-textCodeBlock-background);
				border-radius: 3px;
				padding: 0px 4px 2px 4px;
				font-family: var(--vscode-editor-font-family);
			}

			code code-icon {
				color: inherit;
				font-size: inherit;
				vertical-align: middle;
			}

			p:first-child,
			.code:first-child,
			ul:first-child {
				margin-top: 0;
			}

			p:last-child,
			.code:last-child,
			ul:last-child {
				margin-bottom: 0;
			}

			/* MarkupContent Layout */
			ul {
				padding-left: var(--markdown-list-spacing);
			}
			ol {
				padding-left: var(--markdown-list-spacing);
			}

			li > p {
				margin-bottom: 0;
			}

			li > ul {
				margin-top: 0;
			}
		`],av([tM({type:String})],ay.prototype,"markdown",2),av([tM({type:String,reflect:!0})],ay.prototype,"density",2),ay=av([tT("gl-markdown")],ay);let aw="[A-Za-z0-9-]+",a_="~[A-Za-z]+",ak=RegExp(`^(${aw})(${a_})?$`),ax=RegExp(`\\$\\(${aw}(?:${a_})?\\)`,"g"),a$=RegExp(`\\\\${ax.source}`,"g"),aC=RegExp(`(\\\\)?\\$\\((${aw}(?:${a_})?)\\)`,"g");function aS(e){return e.replace(/"/g,"&quot;")}function aA(e){return e?e.replace(/\\([\\`*_{}[\]()#+\-.!~])/g,"$1"):e}var aE=Object.defineProperty,aP=Object.getOwnPropertyDescriptor;let aI=class extends lit_element_i{render(){return t_`<slot></slot>`}};aI.styles=eZ`
		:host {
			display: flex;
			box-sizing: border-box;
			flex-direction: column;
		}

		::slotted(webview-pane) {
			flex: none;
		}

		:host([flexible]) ::slotted(webview-pane[flexible][expanded]) {
			flex: 1;
		}
	`,aI=((e,t,o,r)=>{for(var n,a=r>1?void 0:r?aP(t,o):t,c=e.length-1;c>=0;c--)(n=e[c])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&aE(t,o,a),a})([tT("webview-pane-group")],aI);var aR=Object.defineProperty,aT=Object.getOwnPropertyDescriptor,az=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?aT(t,o):t,c=e.length-1;c>=0;c--)(n=e[c])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&aR(t,o,a),a};let aM=class extends GlDetailsBase{constructor(){super(...arguments),this.tab="commit",this.explainBusy=!1}get isStash(){return this.state?.commit?.stashNumber!=null}get shortSha(){return this.state?.commit?.shortSha??""}get navigation(){if(this.state?.navigationStack==null)return{back:!1,forward:!1};let e={back:!0,forward:!0};return this.state.navigationStack.count<=1?(e.back=!1,e.forward=!1):0===this.state.navigationStack.position?(e.back=!0,e.forward=!1):this.state.navigationStack.position===this.state.navigationStack.count-1&&(e.back=!1,e.forward=!0),e}updated(e){e.has("explain")&&(this.explainBusy=!1,this.querySelector('[data-region="commit-explanation"]')?.scrollIntoView())}renderEmptyContent(){return t_`
			<div class="section section--empty" id="empty">
				<p>Rich details for commits and stashes are shown as you navigate:</p>

				<ul class="bulleted">
					<li>lines in the text editor</li>
					<li>
						commits in the <a href="command:gitlens.showGraph">Commit Graph</a>,
						<a href="command:gitlens.showTimelineView">Visual File History</a>, or
						<a href="command:gitlens.showCommitsView">Commits view</a>
					</li>
					<li>stashes in the <a href="command:gitlens.showStashesView">Stashes view</a></li>
				</ul>

				<p>Alternatively, show your work-in-progress, or search for or choose a commit</p>

				<p class="button-container">
					<span class="button-group button-group--single">
						<gl-button full data-action="wip">Overview</gl-button>
					</span>
				</p>
				<p class="button-container">
					<span class="button-group button-group--single">
						<gl-button full data-action="pick-commit">Choose Commit...</gl-button>
						<gl-button density="compact" data-action="search-commit" tooltip="Search for Commit"
							><code-icon icon="search"></code-icon
						></gl-button>
					</span>
				</p>
			</div>
		`}renderExplainChanges(){if(this.state?.orgSettings.ai!==!1)return t_`
			<gl-action-chip
				label=${this.isUncommitted?"Explain Working Changes":`Explain Changes in this ${this.isStash?"Stash":"Commit"}`}
				icon="sparkle"
				data-action="explain-commit"
				aria-busy="${this.explainBusy?"true":tx}"
				?disabled="${!!this.explainBusy||tx}"
				@click=${this.onExplainChanges}
				@keydown=${this.onExplainChanges}
				><span>explain</span></gl-action-chip
			>
		`}renderCommitMessage(){let e=this.state?.commit;if(null==e)return;let t=e.message,o=t.indexOf(tF);return t_`
			<div class="section section--message">
				<div class="message-block-row">
					${tN(!this.isStash,()=>t_`
							<gl-commit-author
								name="${e.author.name}"
								url="${e.author.email?`mailto:${e.author.email}`:void 0}"
								.avatarUrl="${e.author.avatar??""}"
								.showAvatar="${this.preferences?.avatars??!0}"
							></gl-commit-author>
						`)}
					${this.renderExplainChanges()}
				</div>
				<div>
					<div class="message-block">
						${tN(-1===o,()=>t_`<p class="message-block__text scrollable" data-region="message">
									<strong>${iW(t)}</strong>
								</p>`,()=>t_`<p class="message-block__text scrollable" data-region="message">
									<strong>${iW(t.substring(0,o))}</strong><br /><span
										>${iW(t.substring(o+3))}</span
									>
								</p>`)}
					</div>
					<div class="message-block-row message-block-row--actions">
						${this.renderAutoLinksChips()}
						${tN(!this.isStash,()=>t_`
								<gl-commit-date
									date=${e.author.date}
									.dateFormat="${this.preferences?.dateFormat}"
									.dateStyle="${this.preferences?.dateStyle}"
									.actionLabel="${e.sha===ls?"Modified":"Committed"}"
								></gl-commit-date>
							`)}
					</div>
				</div>
			</div>
		`}get autolinkState(){if(!this.state?.autolinksEnabled||this.isUncommitted)return;let e=new Map,t=new Map;if(this.state?.commit?.autolinks!=null)for(let o of this.state.commit.autolinks)e.set(o.id,{type:"autolink",value:o}),t.set(o.url,o.id);if(this.state?.autolinkedIssues!=null)for(let o of this.state.autolinkedIssues){if(null!=o.url){let r=t.get(o.url);null!=r&&e.delete(r)}e.set(o.id,{type:"issue",value:o})}if(this.state?.pullRequest!=null){if(null!=this.state.pullRequest.url){let o=t.get(this.state.pullRequest.url);null!=o&&e.delete(o)}e.set(this.state.pullRequest.id,{type:"pr",value:this.state.pullRequest})}let o=[],r=[],n=[];for(let t of e.values())switch(t.type){case"autolink":o.push(t.value);break;case"issue":r.push(t.value);break;case"pr":n.push(t.value)}return{autolinks:o,issues:r,prs:n,size:e.size}}renderLearnAboutAutolinks(e=!1){let t=e?tx:t_`<span class="mq-hide-sm">Learn about autolinks</span>`,o=sx("gitlens.showSettingsPage!autolinks",{showOptions:{preserveFocus:!0}}),r=this.state?.hasIntegrationsConnected??!1,n="Configure autolinks to linkify external references, like Jira or Zendesk tickets, in commit messages.";return r||(n=`<a href="${o}">Configure autolinks</a> to linkify external references, like Jira or Zendesk tickets, in commit messages.

<a href="${sx("gitlens.plus.cloudIntegrations.connect",{source:{source:"inspect",detail:{action:"connect"}}})}">Connect an Integration</a> &mdash;`,this.state?.hasAccount||(n+=" sign up and"),n+=" to get access to automatic rich autolinks for services like Jira, GitHub, and more."),t_`<gl-action-chip
			href=${o}
			data-action="autolink-settings"
			icon="info"
			.label=${n}
			overlay=${r?"tooltip":"popover"}
			>${t}</gl-action-chip
		>`}renderAutoLinksChips(){let e=this.autolinkState;if(null==e)return this.renderLearnAboutAutolinks();let{autolinks:t,issues:o,prs:r,size:n}=e;return 0===n?this.renderLearnAboutAutolinks():t_`<div class="message-block-group">
			${this.renderLearnAboutAutolinks(!0)}
			${tN(t.length,()=>t.map(e=>{let t=e.description??e.title;return void 0===t&&(t=`Custom Autolink ${e.prefix}${e.id}`),t_`<gl-autolink-chip
						type="autolink"
						name="${t}"
						url="${e.url}"
						identifier="${e.prefix}${e.id}"
					></gl-autolink-chip>`}))}
			${tN(r.length,()=>r.map(e=>t_`<gl-autolink-chip
							type="pr"
							name="${e.title}"
							url="${e.url}"
							identifier="#${e.id}"
							status="${e.state}"
							.date=${e.updatedDate}
							.dateFormat="${this.state.preferences.dateFormat}"
							.dateStyle="${this.state.preferences.dateStyle}"
						></gl-autolink-chip>`))}
			${tN(o.length,()=>o.map(e=>t_`<gl-autolink-chip
							type="issue"
							name="${e.title}"
							url="${e.url}"
							identifier="${e.id}"
							status="${e.state}"
							.date=${e.closed?e.closedDate:e.createdDate}
							.dateFormat="${this.state.preferences.dateFormat}"
							.dateStyle="${this.state.preferences.dateStyle}"
						></gl-autolink-chip>`))}
		</div>`}render(){return this.state?.commit==null?this.renderEmptyContent():t_`
			${this.renderCommitMessage()}
			<webview-pane-group flexible>
				${this.renderChangedFiles(this.isStash?"stash":"commit",this.renderCommitStats(this.state.commit.stats))}
			</webview-pane-group>
		`}onExplainChanges(e){if(!0===this.explainBusy||e instanceof KeyboardEvent&&"Enter"!==e.key){e.preventDefault(),e.stopPropagation();return}this.explainBusy=!0}renderCommitStats(e){if(e?.files==null)return;if("number"==typeof e.files)return t_`<commit-stats added="?" modified="${e.files}" removed="?"></commit-stats>`;let{added:t,deleted:o,changed:r}=e.files;return t_`<commit-stats added="${t}" modified="${r}" removed="${o}"></commit-stats>`}getFileActions(e,t){let o=[{icon:"go-to-file",label:"Open file",action:"file-open"}];return this.isUncommitted||(o.push({icon:"git-compare",label:"Open Changes with Working File",action:"file-compare-working"}),this.isStash||o.push({icon:"globe",label:"Open on remote",action:"file-open-on-remote"}),o.push({icon:"ellipsis",label:"Show more actions",action:"file-more-actions"})),o}};az([tM({type:Object})],aM.prototype,"state",2),az([tO()],aM.prototype,"isStash",1),az([tO()],aM.prototype,"shortSha",1),az([tO()],aM.prototype,"explainBusy",2),az([tM({type:Object})],aM.prototype,"explain",2),aM=az([tT("gl-commit-details")],aM);var aO=Object.defineProperty,aL=Object.getOwnPropertyDescriptor,aD=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?aL(t,o):t,c=e.length-1;c>=0;c--)(n=e[c])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&aO(t,o,a),a};let aN=class extends lit_element_i{constructor(){super(...arguments),this.editor=!1,this.layout="shift",this.grouping="gap"}render(){return t_`<div class="group"><slot></slot></div>`}};aN.styles=[sE,eZ`
			:host {
				--button-group-gap: 0.4rem;
				--button-max-width: 30rem;
				--button-group-max-width: 30rem;
				display: block;
				max-width: var(--button-max-width, 30rem);
				margin-inline: auto;
				text-align: left;
				transition: max-width 0.2s ease-out;
			}

			:host([grouping='gap-wide']) {
				--button-group-gap: 1rem;
			}

			:host([grouping='split']) {
				--button-group-gap: 0.1rem;
			}

			@media (min-width: 640px) {
				:host([layout='shift']) {
					--button-max-width: 100%;
				}
			}

			:host([layout='full']) {
				--button-max-width: 100%;
				--button-group-max-width: 100%;
			}

			.group {
				display: inline-flex;
				gap: var(--button-group-gap, 0.4rem);
				width: 100%;
				max-width: var(--button-group-max-width, 30rem);
			}

			:host([grouping='split']) ::slotted(*:not(:first-child)) {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
			}
			:host([grouping='split']) ::slotted(*:not(:last-child)) {
				border-top-right-radius: 0;
				border-bottom-right-radius: 0;
			}
		`],aD([tM({type:Boolean})],aN.prototype,"editor",2),aD([tM({reflect:!0})],aN.prototype,"layout",2),aD([tM({reflect:!0})],aN.prototype,"grouping",2),aN=aD([tT("button-container")],aN);let aB=eZ`
	.button-container {
		margin: 1rem auto 0;
		text-align: left;
		max-width: 30rem;
		transition: max-width 0.2s ease-out;
	}

	@media (min-width: 640px) {
		.button-container {
			max-width: 100%;
		}
	}

	.button-group {
		display: inline-flex;
		gap: 0.1rem;
	}
	.button-group--single {
		width: 100%;
		max-width: 30rem;
	}

	.button-group > *:not(:first-child),
	.button-group > *:not(:first-child) gl-button {
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
	}

	.button-group > *:not(:last-child),
	.button-group > *:not(:last-child) gl-button {
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
	}
`;var aF=Object.defineProperty,aj=Object.getOwnPropertyDescriptor,aU=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?aj(t,o):t,c=e.length-1;c>=0;c--)(n=e[c])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&aF(t,o,a),a};let aH=class extends lit_element_i{constructor(){super(...arguments),this.lines=1}render(){let e=`--skeleton-lines: ${this.lines};`;return t_`<div class="skeleton" style=${e}></div>`}};aH.styles=eZ`
		:host {
			--skeleton-line-height: 1.2;
			--skeleton-lines: 1;
		}

		.skeleton {
			position: relative;
			display: block;
			overflow: hidden;
			border-radius: 0.25em;
			width: 100%;
			height: calc(1em * var(--skeleton-line-height, 1.2) * var(--skeleton-lines, 1));
			background-color: var(--color-background--lighten-15);
		}

		.skeleton::before {
			content: '';
			position: absolute;
			display: block;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			background-image: linear-gradient(
				to right,
				transparent 0%,
				var(--color-background--lighten-15) 20%,
				var(--color-background--lighten-30) 60%,
				transparent 100%
			);
			transform: translateX(-100%);
			animation: skeleton-loader 2s ease-in-out infinite;
		}

		@keyframes skeleton-loader {
			100% {
				transform: translateX(100%);
			}
		}
	`,aU([tM({type:Number})],aH.prototype,"lines",2),aH=aU([tT("skeleton-loader")],aH);let GlTreeBase=class GlTreeBase extends GlElement{renderLoading(){return t_`
			<div class="section section--skeleton">
				<skeleton-loader></skeleton-loader>
			</div>
			<div class="section section--skeleton">
				<skeleton-loader></skeleton-loader>
			</div>
			<div class="section section--skeleton">
				<skeleton-loader></skeleton-loader>
			</div>
		`}renderLayoutAction(e){if(!e)return tx;let t="tree",o="list-tree",r="View as Tree";switch(e){case"auto":t="list",o="gl-list-auto",r="View as List";break;case"list":t="tree",o="list-flat",r="View as Tree";break;case"tree":t="auto",o="list-tree",r="View as Auto"}return t_`<action-item data-switch-value="${t}" label="${r}" icon="${o}"></action-item>`}renderTreeView(e,t="none"){return t_`<gl-tree-generator
			.model=${e}
			.guides=${t}
			@gl-tree-generated-item-action-clicked=${this.onTreeItemActionClicked}
			@gl-tree-generated-item-checked=${this.onTreeItemChecked}
			@gl-tree-generated-item-selected=${this.onTreeItemSelected}
		></gl-tree-generator>`}renderFiles(e,t=!1,o=!1,r=2){let n=[];if(t){let t=s$(e,e=>e.path.split("/"),(...e)=>e.join("/"),o);if(null!=t.children)for(let e of t.children.values()){let t=this.walkFileTree(e,{level:r});n.push(t)}}else for(let t of e){let e=this.fileToTreeModel(t,{level:r,branch:!1},!0);n.push(e)}return n}walkFileTree(e,t={level:1}){let o;if(void 0===t.level&&(t.level=1),o=null==e.value?this.folderToTreeModel(e.name,t):this.fileToTreeModel(e.value,t),null!=e.children){let r=[];for(let o of e.children.values()){let e=this.walkFileTree(o,{...t,level:t.level+1});r.push(e)}r.length>0&&(o.branch=!0,o.children=r)}return o}folderToTreeModel(e,t){return{branch:!1,expanded:!0,path:e,level:1,checkable:!1,checked:!1,icon:"folder",label:e,...t}}getRepoActions(e,t,o){return[]}emptyTreeModel(e,t){return{branch:!1,expanded:!0,path:"",level:1,checkable:!0,checked:!0,icon:void 0,label:e,...t}}repoToTreeModel(e,t,o,r){return{branch:!1,expanded:!0,path:t,level:1,checkable:!0,checked:!0,icon:"gl-repository",label:e,description:r,context:[t],actions:this.getRepoActions(e,t,o),...o}}getFileActions(e,t){return[]}fileToTreeModel(e,t,o=!1,r="/"){let n=e.path.lastIndexOf(r),a=-1!==n?e.path.substring(n+1):e.path,c=o&&-1!==n?e.path.substring(0,n):"";return{branch:!1,expanded:!0,path:e.path,level:1,checkable:!1,checked:!1,icon:"file",label:a,description:!0===o?c:void 0,context:[e],actions:this.getFileActions(e,t),decorations:[{type:"text",label:e.status}],...t}}};var aq=Object.defineProperty,aV=Object.getOwnPropertyDescriptor,aW=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?aV(t,o):t,c=e.length-1;c>=0;c--)(n=e[c])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&aq(t,o,a),a};let aG=class extends GlTreeBase{constructor(){super(),this.review=!1,this.generateBusy=!1,this.creationBusy=!1,this.onDebounceTitleInput=_(this.onTitleInput,500),this.onDebounceDescriptionInput=_(this.onDescriptionInput,500),eH(eD,eB,eF,ej,eU)}get create(){return this.state.create}get createChanges(){return Object.values(this.create.changes)}get createEntries(){return Object.entries(this.create.changes)}get hasWipChanges(){return this.createChanges.some(e=>e?.type==="wip")}get selectedChanges(){return 1===this.createChanges.length?this.createEntries:this.createEntries.filter(([,e])=>!1!==e.checked)}get canSubmit(){return null!=this.create.title&&this.create.title.length>0&&this.selectedChanges.length>0}get fileLayout(){return this.state?.preferences?.files?.layout??"auto"}get isCompact(){return this.state?.preferences?.files?.compact??!0}get filesModified(){return function(e,t){if(null==e)return 0;let o=0;for(let r of e)o+=t(r);return o}(this.createChanges,e=>e.files?.length??0)}get draftVisibility(){return this.state?.create?.visibility??"public"}updated(e){e.has("state")&&(this.creationBusy=!1),e.has("generate")&&(this.generateBusy=!1,this.generateAiButton.scrollIntoView())}firstUpdated(){window.requestAnimationFrame(()=>{this.titleInput.focus()})}renderUserSelection(e){let t=e.pendingRole,o=new Map([["admin","admin"],["editor","can edit"],["viewer","can view"],["remove","un-invite"]]),r=o.get(t);return t_`
			<div class="user-selection">
				<div class="user-selection__avatar">
					<gk-avatar .src=${e.avatarUrl}></gk-avatar>
				</div>
				<div class="user-selection__info">
					<div class="user-selection__name">
						${e.member.name??e.member.username??"Unknown"}
					</div>
				</div>
				<div class="user-selection__actions">
					<gk-popover>
						<gk-button slot="trigger">${r} <code-icon icon="chevron-down"></code-icon></gk-button>
						<gk-menu>
							${function*(e,t){if(void 0!==e){let o=0;for(let r of e)yield t(r,o++)}}(o,([o,r])=>t_`<gk-menu-item
										@click=${t=>this.onChangeSelectionRole(t,e,o)}
									>
										<code-icon
											icon="check"
											class="user-selection__check ${t===o?"is-active":""}"
										></code-icon>
										${r}
									</gk-menu-item>`)}
						</gk-menu>
					</gk-popover>
				</div>
			</div>
		`}renderUserSelectionList(){if(this.state?.create?.userSelections!=null&&this.state?.create?.userSelections.length!==0)return t_`
			<div class="message-input">
				<div class="user-selection-container scrollable">
					${ra(this.state.create.userSelections,e=>e.member.id,e=>this.renderUserSelection(e))}
				</div>
			</div>
		`}renderForm(){let e;switch(this.draftVisibility){case"private":e="organization";break;case"invite_only":e="lock";break;default:e="globe"}let t=this.review?"Code Suggestion":"Cloud Patch",o=this.review?"Code Suggestions":"Cloud Patches";return t_`
			<div class="section section--action">
				${tN(this.state?.create?.creationError!=null,()=>t_` <div class="alert alert--error">
							<code-icon icon="error"></code-icon>
							<p class="alert__content">${this.state.create.creationError}</p>
						</div>`)}
				${tN(!1===this.review,()=>t_`
						<div class="message-input message-input--group">
							<div class="message-input__select">
								<span class="message-input__select-icon"
									><code-icon icon=${e}></code-icon
								></span>
								<select
									id="visibility"
									class="message-input__control"
									@change=${this.onVisibilityChange}
								>
									<option value="public" ?selected=${"public"===this.draftVisibility}>
										Anyone with the link
									</option>
									<option value="private" ?selected=${"private"===this.draftVisibility}>
										Members of my Org with the link
									</option>
									<option value="invite_only" ?selected=${"invite_only"===this.draftVisibility}>
										Collaborators only
									</option>
								</select>
								<span class="message-input__select-caret"
									><code-icon icon="chevron-down"></code-icon
								></span>
							</div>
							<gl-button appearance="secondary" @click=${this.onInviteUsers}
								><code-icon icon="person-add" slot="prefix"></code-icon> Invite</gl-button
							>
						</div>
						${this.renderUserSelectionList()}
					`)}
				<div class="message-input message-input--with-menu">
					<input
						id="title"
						type="text"
						class="message-input__control"
						placeholder="Title (required)"
						maxlength="100"
						.value=${this.create.title??""}
						?disabled=${this.generateBusy}
						@input=${e=>this.onDebounceTitleInput(e)}
					/>
					${tN(this.state?.orgSettings.ai===!0&&this.state?.preferences.aiEnabled===!0,()=>t_`<div class="message-input__menu">
								<gl-button
									id="generate-ai"
									appearance="toolbar"
									density="compact"
									tooltip="Generate Title and Description..."
									@click=${e=>this.onGenerateTitleClick(e)}
									?disabled=${this.generateBusy}
									><code-icon
										icon=${this.generateBusy?"loading":"sparkle"}
										modifier="${this.generateBusy?"spin":""}"
									></code-icon
								></gl-button>
							</div>`)}
				</div>

				${tN(this.generate?.error!=null,()=>t_`
						<div class="alert alert--error">
							<code-icon icon="error"></code-icon>
							<p class="alert__content">${this.generate.error.message??"Error retrieving content"}</p>
						</div>
					`)}
				<div class="message-input">
					<textarea
						id="desc"
						class="message-input__control"
						placeholder="Description (optional)"
						maxlength="10000"
						.value=${this.create.description??""}
						?disabled=${this.generateBusy}
						@input=${e=>this.onDebounceDescriptionInput(e)}
					></textarea>
				</div>
				<p class="button-container">
					<span class="button-group button-group--single">
						<gl-button ?disabled=${this.creationBusy} full @click=${e=>this.onCreateAll(e)}
							>Create ${t}</gl-button
						>
					</span>
				</p>
				${tN(!0===this.review,()=>t_`
						<p class="button-container">
							<span class="button-group button-group--single">
								<gl-button appearance="secondary" full @click=${()=>this.onCancel()}
									>Cancel</gl-button
								>
							</span>
						</p>
					`)}
				${tN(this.state?.orgSettings.byob===!1,()=>t_`<p class="h-deemphasize">
							<code-icon icon="lock"></code-icon>
							<a
								href="${D.cloudPatches}"
								title="Learn more about ${o}"
								aria-label="Learn more about ${o}"
								>${o}</a
							>
							are
							<a
								href="https://help.gitkraken.com/gitlens/security"
								title="Learn more about GitKraken security"
								aria-label="Learn more about GitKraken security"
								>securely stored</a
							>
							by GitKraken.
						</p>`,()=>t_`<p class="h-deemphasize">
							<code-icon icon="info"></code-icon>
							Your
							<a
								href="${D.cloudPatches}"
								title="Learn more about ${o}"
								aria-label="Learn more about ${o}"
								>${t}</a
							>
							will be securely stored in your organization's self-hosted storage
						</p>`)}
			</div>
		`}render(){return t_`
			<div class="pane-groups">
				<div class="pane-groups__group">${this.renderChangedFiles()}</div>
				<div class="pane-groups__group-fixed pane-groups__group--bottom">${this.renderForm()}</div>
			</div>
		`}renderChangedFiles(){return t_`
			<webview-pane class="h-no-border" expanded>
				<span slot="title">${this.review?"Changes to Suggest":"Changes to Include"}</span>
				<action-nav slot="actions">${this.renderLayoutAction(this.fileLayout)}</action-nav>

				${tN(null!=this.validityMessage,()=>t_`<div class="section">
							<div class="alert alert--error">
								<code-icon icon="error"></code-icon>
								<p class="alert__content">${this.validityMessage}</p>
							</div>
						</div>`)}
				<div class="change-list" data-region="files">
					${tN(null==this.create.changes,()=>this.renderLoading(),()=>this.renderTreeViewWithModel())}
				</div>
			</webview-pane>
		`}onTreeItemChecked(e){if(null==e.detail.context||e.detail.context.length<1)return;let[t,o]=e.detail.context,r=e.detail.checked;"unstaged"===o&&(r=!!e.detail.checked||"staged");let n=this.getChangeForRepo(t);null!=n&&n.checked!==r&&(n.checked=r,this.requestUpdate("state"),this.emit("gl-patch-create-repo-checked",{repoUri:t,checked:r}))}onTreeItemSelected(e){if(!e.detail.context)return;let[t]=e.detail.context;this.emit("gl-patch-file-compare-previous",{...t})}renderTreeViewWithModel(){if(null==this.createChanges||0===this.createChanges.length)return this.renderTreeView([{label:"No changes",path:"",level:1,branch:!1,checkable:!1,expanded:!0,checked:!1}]);let e=[],t=this.createChanges.length>1,o=this.isTree(this.filesModified??0),r=this.isCompact;if(t)for(let t of this.createChanges){let n=this.getTreeForChange(t,!0,o,r);null!=n&&e.push(...n)}else{let t=this.createChanges[0],n=this.getTreeForChange(t,!1,o,r);null!=n&&e.push(...n)}return this.renderTreeView(e,this.state?.preferences?.indentGuides)}getTreeForChange(e,t=!1,o=!1,r=!0){if(null==e.files||0===e.files.length)return;let n=[];if("wip"===e.type){let a=[],c=[];for(let t of e.files)t.staged?a.push(t):c.push(t);0===a.length||0===c.length?n.push(...this.renderFiles(e.files,o,r,t?2:1)):(c.length&&n.push({label:"Unstaged Changes",path:"",level:t?2:1,branch:!0,checkable:!0,expanded:!0,checked:!0===e.checked,context:[e.repository.uri,"unstaged"],children:this.renderFiles(c,o,r,t?3:2)}),a.length&&n.push({label:"Staged Changes",path:"",level:t?2:1,branch:!0,checkable:!0,expanded:!0,checked:!1!==e.checked,disableCheck:!0,children:this.renderFiles(a,o,r,t?3:2)}))}else n.push(...this.renderFiles(e.files,o,r));if(!t)return n;let a=this.repoToTreeModel(e.repository.name,e.repository.uri,{branch:!0,checkable:!0,checked:!1!==e.checked});return a.children=n,[a]}isTree(e){return"auto"===this.fileLayout?e>(this.state?.preferences?.files?.threshold??5):"tree"===this.fileLayout}createPatch(){if(!this.canSubmit){0===this.titleInput.value.length?(this.titleInput.setCustomValidity("Title is required"),this.titleInput.reportValidity(),this.titleInput.focus()):this.titleInput.setCustomValidity(""),null==this.selectedChanges||0===this.selectedChanges.length?this.validityMessage="Check at least one change":this.validityMessage=void 0;return}this.validityMessage=void 0,this.titleInput.setCustomValidity("");let e=this.selectedChanges.reduce((e,[t,o])=>(e[t]=o,e),{}),t={title:this.create.title??"",description:this.create.description,changesets:e,visibility:this.create.visibility,userSelections:this.create.userSelections};this.emit("gl-patch-create-patch",t)}onCreateAll(e){this.createPatch(),this.state?.create&&(this.creationBusy=!0)}onSelectCreateOption(e){}getChangeForRepo(e){return this.create.changes[e]}onTitleInput(e){this.create.title=this.titleInput.value,this.fireMetadataUpdate()}onDescriptionInput(e){this.create.description=this.descInput.value,this.fireMetadataUpdate()}onInviteUsers(e){this.emit("gl-patch-create-invite-users")}onChangeSelectionRole(e,t,o){this.emit("gl-patch-create-update-selection",{selection:t,role:o});let r=e.target?.closest("gk-popover");r?.hidePopover()}onVisibilityChange(e){this.create.visibility=e.target.value,this.fireMetadataUpdate()}onGenerateTitleClick(e){this.generateBusy=!0,this.emit("gl-patch-generate-title",{title:this.create.title,description:this.create.description,visibility:this.create.visibility})}fireMetadataUpdate(){this.emit("gl-patch-create-update-metadata",{title:this.create.title,description:this.create.description,visibility:this.create.visibility})}createRenderRoot(){return this}onTreeItemActionClicked(e){if(e.detail.context&&e.detail.action)switch(e.detail.action.action){case"show-patch-in-graph":this.onShowInGraph(e);break;case"file-open":this.onOpenFile(e);break;case"file-stage":this.onStageFile(e);break;case"file-unstage":this.onUnstageFile(e)}}onOpenFile(e){if(!e.detail.context)return;let[t]=e.detail.context;this.emit("gl-patch-file-open",{...t,showOptions:{preview:!e.detail.dblClick,viewColumn:e.detail.altKey?-2:void 0}})}onStageFile(e){if(!e.detail.context)return;let[t]=e.detail.context;this.emit("gl-patch-file-stage",{...t,showOptions:{preview:!e.detail.dblClick,viewColumn:e.detail.altKey?-2:void 0}})}onUnstageFile(e){if(!e.detail.context)return;let[t]=e.detail.context;this.emit("gl-patch-file-unstage",{...t,showOptions:{preview:!e.detail.dblClick,viewColumn:e.detail.altKey?-2:void 0}})}onShowInGraph(e){}onCancel(){this.emit("gl-patch-create-cancelled")}getFileActions(e,t){let o={icon:"go-to-file",label:"Open file",action:"file-open"};return this.review?[o]:!0===e.staged?[o,{icon:"remove",label:"Unstage changes",action:"file-unstage"}]:[o,{icon:"plus",label:"Stage changes",action:"file-stage"}]}getRepoActions(e,t,o){return[{icon:"gl-graph",label:"Open in Commit Graph",action:"show-patch-in-graph"}]}};aW([tM({type:Object})],aG.prototype,"state",2),aW([tM({type:Boolean})],aG.prototype,"review",2),aW([tM({type:Object})],aG.prototype,"generate",2),aW([tO()],aG.prototype,"generateBusy",2),aW([tO()],aG.prototype,"creationBusy",2),aW([tD("#title")],aG.prototype,"titleInput",2),aW([tD("#desc")],aG.prototype,"descInput",2),aW([tD("#generate-ai")],aG.prototype,"generateAiButton",2),aW([tO()],aG.prototype,"validityMessage",2),aG=aW([tT("gl-patch-create")],aG);var aK=Object.defineProperty,aZ=Object.getOwnPropertyDescriptor,aY=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?aZ(t,o):t,c=e.length-1;c>=0;c--)(n=e[c])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&aK(t,o,a),a};let aX=class extends GlElement{get patchCreateState(){return{preferences:this.preferences,orgSettings:this.orgSettings,create:this.createState}}render(){return t_`<gl-patch-create
			.state=${this.patchCreateState}
			.generate=${this.generate}
			review
			@gl-patch-file-compare-working=${e=>{}}
			@gl-patch-create-update-metadata=${e=>{}}
		></gl-patch-create>`}};aX.styles=[aB,eZ`
			:host {
				flex: 1;
			}

			*,
			*::before,
			*::after {
				box-sizing: border-box;
			}

			a {
				color: var(--vscode-textLink-foreground);
				text-decoration: none;
			}
			a:hover {
				text-decoration: underline;
			}

			gl-patch-create {
				height: 100%;
				display: block;
			}

			.pane-groups {
				display: flex;
				flex-direction: column;
				height: 100%;
			}
			.pane-groups__group {
				min-height: 0;
				flex: 1 1 auto;
				display: flex;
				flex-direction: column;
				overflow: hidden;
			}
			.pane-groups__group webview-pane {
				flex: none;
			}
			.pane-groups__group webview-pane[expanded] {
				min-height: 0;
				flex: 1;
			}

			.pane-groups__group-fixed {
				flex: none;
			}
			.pane-groups__group-fixed webview-pane::part(content) {
				overflow: visible;
			}

			.section {
				padding: 0 var(--gitlens-scrollbar-gutter-width) 1.5rem var(--gitlens-gutter-width);
			}
			.section > :first-child {
				margin-top: 0;
			}
			.section > :last-child {
				margin-bottom: 0;
			}

			.section--action {
				border-top: 1px solid var(--vscode-sideBarSectionHeader-border);
				padding-top: 1.5rem;
				padding-bottom: 1.5rem;
			}
			.section--action > :first-child {
				padding-top: 0;
			}

			/* TODO: these form styles should be moved to a common location */
			.message-input {
				padding-top: 0.8rem;
			}

			.message-input__control {
				flex: 1;
				border: 1px solid var(--vscode-input-border);
				background: var(--vscode-input-background);
				padding: 0.5rem;
				font-size: 1.3rem;
				line-height: 1.4;
				width: 100%;
				border-radius: 0.2rem;
				color: var(--vscode-input-foreground);
				font-family: inherit;
			}

			.message-input__control::placeholder {
				color: var(--vscode-input-placeholderForeground);
			}

			.message-input__control:invalid {
				border-color: var(--vscode-inputValidation-errorBorder);
				background-color: var(--vscode-inputValidation-errorBackground);
			}

			.message-input__control:focus {
				outline: 1px solid var(--vscode-focusBorder);
				outline-offset: -1px;
			}

			.message-input__control:disabled {
				opacity: 0.4;
				cursor: not-allowed;
				pointer-events: none;
			}

			.message-input__control--text {
				overflow: hidden;
				white-space: nowrap;
				opacity: 0.7;
			}

			.message-input__action {
				flex: none;
			}

			.message-input__select {
				flex: 1;
				position: relative;
				display: flex;
				align-items: stretch;
			}
			.message-input__select-icon {
				position: absolute;
				left: 0;
				top: 0;
				display: flex;
				width: 2.4rem;
				height: 100%;
				align-items: center;
				justify-content: center;
				pointer-events: none;
				color: var(--vscode-foreground);
			}
			.message-input__select-caret {
				position: absolute;
				right: 0;
				top: 0;
				display: flex;
				width: 2.4rem;
				height: 100%;
				align-items: center;
				justify-content: center;
				pointer-events: none;
				color: var(--vscode-foreground);
			}

			.message-input__select .message-input__control {
				box-sizing: border-box;
				appearance: none;
				padding-left: 2.4rem;
				padding-right: 2.4rem;
			}

			.message-input__menu {
				position: absolute;
				top: 0.8rem;
				right: 0;
			}

			.section--action > :first-child .message-input__menu {
				top: 0;
			}

			.message-input--group {
				display: flex;
				flex-direction: row;
				align-items: stretch;
				gap: 0.6rem;
			}

			.message-input--with-menu {
				position: relative;
			}

			textarea.message-input__control {
				resize: vertical;
				min-height: 4rem;
				max-height: 40rem;
			}

			.user-selection-container {
				max-height: (2.4rem * 4);
				overflow: auto;
			}

			.user-selection {
				--gk-avatar-size: 2rem;
				display: flex;
				flex-direction: row;
				align-items: center;
				gap: 0.4rem;
				height: 2.4rem;
			}
			.user-selection__avatar {
				flex: none;
			}

			.user-selection__info {
				flex: 1;
				min-width: 0;
				white-space: nowrap;
			}

			.user-selection__name {
				overflow: hidden;
				text-overflow: ellipsis;
			}

			.user-selection__actions {
				flex: none;
				color: var(--gk-button-ghost-color);
			}
			.user-selection__actions gk-button::part(base) {
				padding-right: 0;
				padding-block: 0.4rem;
			}

			.user-selection__actions gk-button code-icon {
				pointer-events: none;
			}

			.user-selection__check:not(.is-active) {
				opacity: 0;
			}

			.alert {
				display: flex;
				flex-direction: row;
				align-items: center;
				padding: 0.8rem 1.2rem;
				line-height: 1.2;
				background-color: var(--color-alert-errorBackground);
				border-left: 0.3rem solid var(--color-alert-errorBorder);
				color: var(--color-alert-foreground);
			}

			.alert code-icon {
				margin-right: 0.4rem;
				vertical-align: baseline;
			}

			.alert__content {
				font-size: 1.2rem;
				line-height: 1.2;
				text-align: left;
				margin: 0;
			}
		`],aY([tM({type:Object})],aX.prototype,"orgSettings",2),aY([tM({type:Object})],aX.prototype,"preferences",2),aY([tM({type:Object})],aX.prototype,"generate",2),aY([tM({type:Object})],aX.prototype,"createState",2),aX=aY([tT("gl-inspect-patch")],aX);var aQ=Object.defineProperty,aJ=Object.getOwnPropertyDescriptor,a0=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?aJ(t,o):t,c=e.length-1;c>=0;c--)(n=e[c])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&aQ(t,o,a),a};let a1=class extends GlDetailsBase{constructor(){super(),this.tab="wip",this.experimentalComposerEnabled=!1,this.patchCreateMetadata={title:void 0,description:void 0},eH(eD)}get inReview(){return this.draftState?.inReview??!1}get isUnpublished(){let e=this.wip?.branch;return e?.upstream==null||!0===e.upstream.missing}get draftsEnabled(){return this.orgSettings?.drafts===!0}get filesCount(){return this.files?.length??0}get branchState(){let e=this.wip?.branch;if(null!=e)return{ahead:e.tracking?.ahead??0,behind:e.tracking?.behind??0}}get patchCreateState(){let e=this.wip,t=e.repo.uri,o={type:"wip",repository:{name:e.repo.name,path:e.repo.path,uri:e.repo.uri},revision:{to:"0000000000000000000000000000000000000000",from:"HEAD"},files:e.changes?.files??[],checked:!0};return{...this.patchCreateMetadata,changes:{[t]:o},creationError:void 0,visibility:"public",userSelections:void 0}}get codeSuggestions(){return this.wip?.codeSuggestions??[]}updated(e){super.updated(e),e.has("generate")&&(this.patchCreateMetadata={title:this.generate?.title??this.patchCreateMetadata.title,description:this.generate?.description??this.patchCreateMetadata.description})}get filesChangedPaneLabel(){return"Working Changes"}renderChangedFilesActions(){if(this.files?.length)return t_`<div class="section section--actions">
			<button-container>
				<gl-button
					full
					.href=${sx("gitlens.composeCommits",{repoPath:this.wip?.repo.path,source:"inspect"})}
					><code-icon icon="wand" slot="prefix"></code-icon>Compose Commits...<span slot="tooltip"
						><strong>Compose Commits</strong> (Preview)<br /><i
							>Automatically or interactively organize changes into meaningful commits</i
						></span
					></gl-button
				>
				<gl-button appearance="secondary" href="command:workbench.view.scm" tooltip="Commit via SCM"
					><code-icon rotate="45" icon="arrow-up"></code-icon
				></gl-button>
			</button-container>
		</div>`}renderSecondaryAction(e=!0){var t,r;if(!this.draftsEnabled||this.inReview)return;let n="Share as Cloud Patch",a="create-patch",c=this.wip?.pullRequest;return null!=c&&"opened"===c.state&&(t=c.provider.domain,r="github.com",null!=t&&0===function(e,t){null==o&&(o=new Intl.Collator(void 0,{sensitivity:"accent"}));let r=o.compare(e,t);return 0===r?0:r>0?1:-1}(t,r))?(this.inReview?(n="Close Suggestion for PR",a="end-patch-review"):(n="Suggest Changes for PR",a="start-patch-review"),(this.wip?.changes?.files.length??0)===0)?t_`
					<gl-button
						?full=${!e}
						appearance="secondary"
						data-action="${a}"
						@click=${()=>this.onToggleReviewMode(!this.inReview)}
						.tooltip=${e?n:void 0}
					>
						<code-icon icon="gl-code-suggestion" .slot=${!e?"prefix":tx}></code-icon
						>${!e?n:tx}
					</gl-button>
				`:t_`
				<gl-button
					?full=${!e}
					appearance="secondary"
					data-action="${a}"
					.tooltip=${e?n:void 0}
					@click=${()=>this.onToggleReviewMode(!this.inReview)}
				>
					<code-icon icon="gl-code-suggestion" .slot=${!e?"prefix":tx}></code-icon
					>${!e?n:tx}
				</gl-button>
				<gl-button
					appearance="secondary"
					density="compact"
					data-action="create-patch"
					tooltip="Share as Cloud Patch"
					@click=${()=>this.onDataActionClick("create-patch")}
				>
					<code-icon icon="gl-cloud-patch-share"></code-icon>
				</gl-button>
			`:(this.wip?.changes?.files.length??0)!==0?t_`
			<gl-button
				?full=${!e}
				appearance="secondary"
				data-action="${a}"
				.tooltip=${e?n:void 0}
				@click=${()=>this.onDataActionClick(a)}
			>
				<code-icon icon="gl-cloud-patch-share" .slot=${!e?"prefix":tx}></code-icon
				>${!e?n:tx}
			</gl-button>
		`:void 0}renderPrimaryAction(){if(this.isUnpublished)return t_`
				<gl-button full data-action="publish-branch" @click=${()=>this.onDataActionClick("publish-branch")}>
					<code-icon icon="cloud-upload" slot="prefix"></code-icon>Publish Branch<span slot="tooltip"
						>Publish (push) <strong>${this.wip?.branch?.name}</strong> to
						${this.wip?.branch?.upstream?.name??"a remote"}</span
					>
				</gl-button>
			`;if(null==this.branchState)return;let{ahead:e,behind:t}=this.branchState;if(0===e&&0===t)return;let o=t>0?"Pull":e>0?"Push":"Fetch";return t_`
			<gl-button
				full
				data-action="${o.toLowerCase()}"
				@click=${()=>this.onDataActionClick(o.toLowerCase())}
			>
				<code-icon icon="${t>0?"repo-pull":e>0?"repo-push":"repo-fetch"}" slot="prefix"></code-icon> ${o}
				<gl-tracking-pill .ahead=${e} .behind=${t} slot="suffix"></gl-tracking-pill>
				<span slot="tooltip">${t>0?"Pull from":e>0?"Push to":"Fetch from"} <strong>${this.wip?.branch?.upstream?.name}</strong></span>
			</gl-button>
		`}renderActions(){let e=this.renderPrimaryAction(),t=this.renderSecondaryAction(null!=e);return null==e&&null==t?tx:t_`<div class="section section--actions">
			<button-container>${e}${t}</button-container>
		</div>`}renderSuggestedChanges(){return 0===this.codeSuggestions.length?tx:t_`
			<gl-tree>
				<gl-tree-item branch .expanded=${!0} .level=${0}>
					<code-icon slot="icon" icon="gl-code-suggestion"></code-icon>
					Code Suggestions
				</gl-tree-item>
				${ra(this.codeSuggestions,e=>e.id,e=>t_`
						<gl-tree-item
							.expanded=${!0}
							.level=${1}
							@gl-tree-item-selected=${()=>this.onShowCodeSuggestion(e.id)}
						>
							<gk-avatar
								class="author-icon"
								src="${e.author.avatarUri}"
								title="${e.author.name} (author)"
							></gk-avatar>
							${e.title}
							<span slot="description"
								><formatted-date .date=${new Date(e.updatedAt)}></formatted-date
							></span>
						</gl-tree-item>
					`)}
			</gl-tree>
		`}renderPullRequest(){return this.wip?.pullRequest==null?tx:t_`
			<webview-pane
				collapsable
				flexible
				?expanded=${this.preferences?.pullRequestExpanded??!0}
				data-region="pullrequest-pane"
			>
				<span slot="title">Pull Request #${this.wip?.pullRequest?.id}</span>
				<action-nav slot="actions">
					<action-item
						label="Open Pull Request Changes"
						icon="diff-multiple"
						@click=${()=>this.onDataActionClick("open-pr-changes")}
					></action-item>
					<action-item
						label="Compare Pull Request"
						icon="compare-changes"
						@click=${()=>this.onDataActionClick("open-pr-compare")}
					></action-item>
					<action-item
						label="Open Pull Request on Remote"
						icon="globe"
						@click=${()=>this.onDataActionClick("open-pr-remote")}
					></action-item>
				</action-nav>
				<div class="section">
					<issue-pull-request
						type="pr"
						name="${this.wip.pullRequest.title}"
						url="${this.wip.pullRequest.url}"
						identifier="#${this.wip.pullRequest.id}"
						status="${this.wip.pullRequest.state}"
						.date=${this.wip.pullRequest.updatedDate}
						.dateFormat="${this.preferences?.dateFormat}"
						.dateStyle="${this.preferences?.dateStyle}"
						details
					></issue-pull-request>
				</div>
				${this.renderSuggestedChanges()}
			</webview-pane>
		`}renderIncomingOutgoing(){return null==this.branchState||0===this.branchState.ahead&&0===this.branchState.behind?tx:t_`
			<webview-pane collapsable>
				<span slot="title">Incoming / Outgoing</span>
				<gl-tree>
					<gl-tree-item branch .expanded=${!1}>
						<code-icon slot="icon" icon="arrow-circle-down"></code-icon>
						Incoming Changes
						<span slot="decorations">${this.branchState.behind??0}</span>
					</gl-tree-item>
					<gl-tree-item branch .expanded=${!1}>
						<code-icon slot="icon" icon="arrow-circle-up"></code-icon>
						Outgoing Changes
						<span slot="decorations">${this.branchState.ahead??0}</span>
					</gl-tree-item>
				</gl-tree>
			</webview-pane>
		`}renderPatchCreation(){return this.inReview?t_`<gl-inspect-patch
			.orgSettings=${this.orgSettings}
			.preferences=${this.preferences}
			.generate=${this.generate}
			.createState=${this.patchCreateState}
			@gl-patch-create-patch=${e=>{this.dispatchEvent(new CustomEvent("gl-inspect-create-suggestions",{detail:e.detail}))}}
		></gl-inspect-patch>`:tx}render(){return null==this.wip?tx:t_`
			${this.renderActions()}
			<webview-pane-group flexible>
				${this.renderPullRequest()}
				${tN(!1===this.inReview,()=>this.renderChangedFiles("wip"))}${this.renderPatchCreation()}
			</webview-pane-group>
		`}getFileActions(e,t){let o={icon:"go-to-file",label:"Open file",action:"file-open"};return!0===e.staged?[o,{icon:"remove",label:"Unstage changes",action:"file-unstage"}]:[o,{icon:"plus",label:"Stage changes",action:"file-stage"}]}onDataActionClick(e){this.dispatchEvent(new CustomEvent("data-action",{detail:{name:e}}))}onToggleReviewMode(e){this.dispatchEvent(new CustomEvent("draft-state-changed",{detail:{inReview:e}}))}onShowCodeSuggestion(e){this.dispatchEvent(new CustomEvent("gl-show-code-suggestion",{detail:{id:e}}))}};a1.styles=[eZ`
			:host {
				--gk-avatar-size: 1.6rem;
			}
		`],a0([tM({type:Object})],a1.prototype,"wip",2),a0([tM({type:Object})],a1.prototype,"draftState",2),a0([tM({type:Object})],a1.prototype,"generate",2),a0([tM({type:Boolean})],a1.prototype,"experimentalComposerEnabled",2),a0([tO()],a1.prototype,"inReview",1),a0([tO()],a1.prototype,"patchCreateMetadata",2),a1=a0([tT("gl-wip-details")],a1);let a2=eZ`
	.commit-action {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		height: 21px;
		border-radius: 0.25em;
		color: inherit;
		padding: 0.2rem;
		vertical-align: text-bottom;
		text-decoration: none;
		gap: 0.2rem;
	}

	.commit-action > * {
		pointer-events: none;
	}

	.commit-action:focus {
		outline: 1px solid var(--vscode-focusBorder);
		outline-offset: -1px;
	}

	.commit-action:hover {
		color: var(--vscode-foreground);
		text-decoration: none;
	}

	:host-context(.vscode-dark) .commit-action:hover,
	:host-context(.vscode-high-contrast:not(.vscode-high-contrast-light)) .commit-action:hover {
		background-color: var(--color-background--lighten-15);
	}
	:host-context(.vscode-light) .commit-action:hover,
	:host-context(.vscode-high-contrast-light) .commit-action:hover {
		background-color: var(--color-background--darken-15);
	}

	:host-context(.vscode-dark) .commit-action.is-active,
	:host-context(.vscode-high-contrast:not(.vscode-high-contrast-light)) .commit-action.is-active {
		background-color: var(--color-background--lighten-10);
	}
	:host-context(.vscode-light) .commit-action.is-active,
	:host-context(.vscode-high-contrast-light) .commit-action.is-active {
		background-color: var(--color-background--darken-10);
	}

	.commit-action.is-disabled {
		opacity: 0.5;
		pointer-events: none;
	}

	.commit-action.is-hidden {
		display: none;
	}

	.commit-action--emphasis-low:not(:hover, :focus, :active) {
		opacity: 0.5;
	}

	.pr--opened {
		color: var(--vscode-gitlens-openPullRequestIconColor);
	}
	.pr--closed {
		color: var(--vscode-gitlens-closedPullRequestIconColor);
	}
	.pr--merged {
		color: var(--vscode-gitlens-mergedPullRequestIconColor);
	}
`;var a5=Object.defineProperty,a3=Object.getOwnPropertyDescriptor,a6=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?a3(t,o):t,c=e.length-1;c>=0;c--)(n=e[c])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&a5(t,o,a),a};let a9=class extends lit_element_i{constructor(){super(...arguments),this.pinned=!1,this.uncommitted=!1,this.shortSha=""}get navigationState(){if(null==this.navigation)return{back:!1,forward:!1};let e={back:!0,forward:!0};return this.navigation.count<=1?(e.back=!1,e.forward=!1):0===this.navigation.position?(e.back=!0,e.forward=!1):this.navigation.position===this.navigation.count-1&&(e.back=!1,e.forward=!0),e}handleAction(e){let t=e.target,o=t.dataset.action;if(null!=o)if("commit-actions"===o){let o=e instanceof MouseEvent&&e.altKey;this.fireEvent("commit-actions",{action:t.dataset.actionType,alt:o})}else this.fireEvent(o)}fireEvent(e,t){this.dispatchEvent(new CustomEvent(`gl-${e}`,{detail:t}))}render(){let e=this.pinned?t_`Unpin this Commit<br />Restores Automatic Following`:t_`Pin this Commit<br />Suspends Automatic Following`,t="Forward",o="Back";return this.navigation?.hint&&(this.pinned?o+=` - ${this.navigation.hint}`:t+=` - ${this.navigation.hint}`),t_`
			<div class="group">
				${tN(!this.uncommitted,()=>t_`
						<gl-tooltip hoist>
							<a
								class="commit-action"
								href="#"
								data-action="commit-actions"
								data-action-type="sha"
								@click=${this.handleAction}
							>
								<code-icon
									icon="${null!=this.stashNumber?"gl-stashes-view":"git-commit"}"
								></code-icon>
								<span class="sha" data-region="shortsha"
									>${null!=this.stashNumber?`#${this.stashNumber}`:this.shortSha}</span
								>
							</a>
							<span slot="content"
								>Copy ${null!=this.stashNumber?"Stash Name":"SHA"}<br />[${sj()}]
								Copy Message</span
							>
						</gl-tooltip>
					`)}
			</div>
			<div class="group">
				<gl-tooltip hoist
					><a
						class="commit-action${this.pinned?" is-active":""}"
						href="#"
						data-action="pin"
						@click=${this.handleAction}
						><code-icon
							icon="${this.pinned?"gl-pinned-filled":"pin"}"
							data-region="commit-pin"
						></code-icon></a
					><span slot="content">${e}</span></gl-tooltip
				>
				<gl-tooltip hoist content="${o}"
					><a
						class="commit-action${this.navigationState.back?"":" is-disabled"}"
						aria-disabled="${this.navigationState.back?"false":"true"}"
						href="#"
						data-action="back"
						@click=${this.handleAction}
						><code-icon icon="arrow-left" data-region="commit-back"></code-icon></a
				></gl-tooltip>
				${tN(this.navigationState.forward,()=>t_`
						<gl-tooltip hoist content="${t}"
							><a class="commit-action" href="#" data-action="forward" @click=${this.handleAction}
								><code-icon icon="arrow-right" data-region="commit-forward"></code-icon></a
						></gl-tooltip>
					`)}
				<!-- TODO: add a spacer -->
				${tN(this.uncommitted,()=>t_`
						<gl-tooltip hoist content="Open SCM view"
							><a
								class="commit-action"
								href="#"
								data-action="commit-actions"
								data-action-type="scm"
								@click=${this.handleAction}
								><code-icon icon="source-control"></code-icon></a
						></gl-tooltip>
					`)}
				<gl-tooltip hoist content="Open in Commit Graph"
					><a
						class="commit-action"
						href="#"
						data-action="commit-actions"
						data-action-type="graph"
						@click=${this.handleAction}
						><code-icon icon="gl-graph"></code-icon></a
				></gl-tooltip>
				${tN(!this.uncommitted,()=>t_`
						<gl-tooltip hoist content="Show Commit Actions"
							><a
								class="commit-action"
								href="#"
								data-action="commit-actions"
								data-action-type="more"
								@click=${this.handleAction}
								><code-icon icon="kebab-vertical"></code-icon></a
						></gl-tooltip>
					`)}
			</div>
		`}};a9.styles=[a2,eZ`
			*,
			*::before,
			*::after {
				box-sizing: border-box;
			}

			:host {
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				align-items: center;
				justify-content: space-between;
				gap: 0.2rem;
			}

			:host([pinned]) {
				background-color: var(--color-alert-warningBackground);
				box-shadow: 0 0 0 0.1rem var(--color-alert-warningBorder);
				color: var(--color-alert-warningForeground);
				border-radius: 0.3rem;
			}

			:host([pinned]) .commit-action:hover,
			:host([pinned]) .commit-action.is-active {
				background-color: var(--color-alert-warningHoverBackground);
			}

			.group {
				display: flex;
				flex: none;
				flex-direction: row;
				max-width: 100%;
			}

			.sha {
				margin: 0 0.5rem 0 0.25rem;
			}
		`],a6([tM({type:Boolean,reflect:!0})],a9.prototype,"pinned",2),a6([tM({type:Boolean})],a9.prototype,"uncommitted",2),a6([tM({type:Object})],a9.prototype,"navigation",2),a6([tM()],a9.prototype,"shortSha",2),a6([tM()],a9.prototype,"stashNumber",2),a9=a6([tT("gl-inspect-nav")],a9);var a7=Object.defineProperty,a8=Object.getOwnPropertyDescriptor,a4=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?a8(t,o):t,c=e.length-1;c>=0;c--)(n=e[c])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&a7(t,o,a),a};let le=class extends lit_element_i{render(){if(null==this.wip)return tx;let e=this.wip.changes,t=this.wip.branch;if(null==e||null==t)return tx;let o="git-pull-request";if(this.wip.pullRequest?.state)switch(this.wip.pullRequest?.state){case"merged":o="git-merge";break;case"closed":o="git-pull-request-closed"}return t_`
			<div class="group">
				${tN(null!=this.wip.pullRequest,()=>t_`<gl-popover hoist>
							<a href="#" class="commit-action" slot="anchor"
								><code-icon icon=${o} class="pr pr--${this.wip.pullRequest.state}"></code-icon
								><span>#${this.wip.pullRequest.id}</span></a
							>
							<div slot="content">
								<issue-pull-request
									type="pr"
									name="${this.wip.pullRequest.title}"
									url="${this.wip.pullRequest.url}"
									identifier="#${this.wip.pullRequest.id}"
									status="${this.wip.pullRequest.state}"
									.date=${this.wip.pullRequest.updatedDate}
									.dateFormat="${this.preferences?.dateFormat}"
									.dateStyle="${this.preferences?.dateStyle}"
									details
								></issue-pull-request>
							</div>
						</gl-popover>`)}
				<gl-tooltip hoist class="tooltip--overflowed">
					<a
						href="#"
						class="commit-action commit-action--overflowed"
						@click=${e=>this.handleAction(e,"switch")}
					>
						${tN(null==this.wip.pullRequest,()=>t_`<code-icon icon="git-branch"></code-icon>`)}<span class="branch">${t.name}</span><code-icon icon="chevron-down" size="10"></code-icon
					></a>
					<div slot="content">
						Switch to Another Branch...
						<hr />
						<code-icon icon="git-branch"></code-icon><span class="md-code">${this.wip.branch?.name}</span>
					</div>
				</gl-tooltip>
			</div>
			<div class="group">
				<gl-tooltip hoist content="Fetch">
					<a href="#" class="commit-action" @click=${e=>this.handleAction(e,"fetch")}
						><code-icon icon="repo-fetch"></code-icon></a
				></gl-tooltip>
			</div>
		`}handleAction(e,t){let o=e instanceof MouseEvent&&e.altKey;this.dispatchEvent(new CustomEvent("gl-branch-action",{detail:{action:t,alt:o}}))}};le.styles=[a2,eZ`
			*,
			*::before,
			*::after {
				box-sizing: border-box;
			}

			:host {
				display: flex;
				flex-direction: row;
				/* flex-wrap: wrap; */
				align-items: center;
				justify-content: space-between;
				gap: 0.2rem;
			}

			.tooltip--overflowed {
				min-width: 0;
			}

			.commit-action--overflowed {
				width: 100%;
			}

			.branch {
				min-width: 0;
				max-width: fit-content;
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
			}

			.group {
				display: flex;
				flex: none;
				flex-direction: row;
				min-width: 0;
				max-width: 100%;
			}

			.group:first-child {
				min-width: 0;
				flex: 0 1 auto;
			}

			hr {
				border: none;
				border-top: 1px solid var(--color-foreground--25);
			}

			.md-code {
				background: var(--vscode-textCodeBlock-background);
				border-radius: 3px;
				padding: 0px 4px 2px 4px;
				font-family: var(--vscode-editor-font-family);
			}
		`],a4([tM({type:Object})],le.prototype,"wip",2),a4([tM({type:Object})],le.prototype,"preferences",2),le=a4([tT("gl-status-nav")],le);var lt=Object.defineProperty,li=Object.getOwnPropertyDescriptor,lo=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?li(t,o):t,c=e.length-1;c>=0;c--)(n=e[c])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&lt(t,o,a),a};let ls="0000000000000000000000000000000000000000",lr=class extends lit_element_i{constructor(){super(),this.draftState={inReview:!1},this._disposables=[],this.indentPreference=16,eH(eN)}get isUncommitted(){return this.state?.commit?.sha===ls}get hasCommit(){return this.state?.commit!=null}get isStash(){return this.state?.commit?.stashNumber!=null}get wipStatus(){let e=this.state?.wip;if(null==e)return;let t=e.branch;if(null==t)return;let o=e.changes,r=o?.files.length??0,n=t.tracking?.ahead??0,a=t.tracking?.behind??0;return{branch:e.repositoryCount>1?`${e.repo.name}:${t.name}`:t.name,upstream:t.upstream?.name,ahead:n,behind:a,working:e.changes?.files.length??0,status:a>0&&n>0?"both":a>0?"behind":n>0?"ahead":r>0?"working":void 0}}get navigation(){if(this.state?.navigationStack==null)return{back:!1,forward:!1};let e={back:!0,forward:!0};return this.state.navigationStack.count<=1?(e.back=!1,e.forward=!1):0===this.state.navigationStack.position?(e.back=!0,e.forward=!1):this.state.navigationStack.position===this.state.navigationStack.count-1&&(e.back=!1,e.forward=!0),e}updateDocumentProperties(){let e=this.state?.preferences?.indent;e!==this.indentPreference&&(this.indentPreference=e??16,document.documentElement.style.setProperty("--gitlens-tree-indent",`${this.indentPreference}px`))}updated(e){e.has("state")&&(this.updateDocumentProperties(),this.state?.inReview!=null&&this.state.inReview!==this.draftState.inReview&&(this.draftState.inReview=this.state.inReview))}connectedCallback(){super.connectedCallback?.(),this._hostIpc=new eS("commit-details"),this._disposables=[this._hostIpc.onReceiveMessage(e=>this.onMessageReceived(e)),this._hostIpc,m.on("gl-inspect-nav","gl-commit-actions",e=>this.onCommitActions(e)),m.on("gl-status-nav","gl-branch-action",e=>this.onBranchAction(e.detail.action)),m.on('[data-action="pick-commit"]',"click",e=>this.onPickCommit(e)),m.on('[data-action="wip"]',"click",e=>this.onSwitchMode(e,"wip")),m.on('[data-action="details"]',"click",e=>this.onSwitchMode(e,"commit")),m.on('[data-action="search-commit"]',"click",e=>this.onSearchCommit(e)),m.on('[data-action="files-layout"]',"click",e=>this.onToggleFilesLayout(e)),m.on("gl-inspect-nav","gl-pin",()=>this.onTogglePin()),m.on("gl-inspect-nav","gl-back",()=>this.onNavigate("back")),m.on("gl-inspect-nav","gl-forward",()=>this.onNavigate("forward")),m.on('[data-action="create-patch"]',"click",e=>this.onCreatePatchFromWip(!0)),m.on('[data-region="pullrequest-pane"]',"expanded-change",e=>this.onExpandedChange(e.detail,"pullrequest")),m.on('[data-action="explain-commit"]',"click",e=>this.onExplainCommit(e)),m.on('[data-action="switch-ai"]',"click",e=>this.onSwitchAiModel(e)),m.on("gl-wip-details","create-patch",e=>this.onCreatePatchFromWip(e.detail.checked)),m.on("gl-commit-details","file-open-on-remote",e=>this.onOpenFileOnRemote(e.detail)),m.on("gl-commit-details,gl-wip-details","file-open",e=>this.onOpenFile(e.detail)),m.on("gl-commit-details","file-compare-working",e=>this.onCompareFileWithWorking(e.detail)),m.on("gl-commit-details,gl-wip-details","file-compare-previous",e=>this.onCompareFileWithPrevious(e.detail)),m.on("gl-commit-details","file-more-actions",e=>this.onFileMoreActions(e.detail)),m.on("gl-wip-details","file-stage",e=>this.onStageFile(e.detail)),m.on("gl-wip-details","file-unstage",e=>this.onUnstageFile(e.detail)),m.on("gl-wip-details","data-action",e=>this.onBranchAction(e.detail.name)),m.on("gl-wip-details","gl-inspect-create-suggestions",e=>this.onSuggestChanges(e.detail)),m.on("gl-wip-details","gl-patch-generate-title",e=>this.onCreateGenerateTitle(e.detail)),m.on("gl-wip-details","gl-show-code-suggestion",e=>this.onShowCodeSuggestion(e.detail)),m.on("gl-wip-details","gl-patch-file-compare-previous",e=>this.onCompareFileWithPrevious(e.detail)),m.on("gl-wip-details","gl-patch-file-open",e=>this.onOpenFile(e.detail)),m.on("gl-wip-details","gl-patch-file-stage",e=>this.onStageFile(e.detail)),m.on("gl-wip-details","gl-patch-file-unstage",e=>this.onUnstageFile(e.detail)),m.on("gl-wip-details","gl-patch-create-cancelled",()=>this.onDraftStateChanged(!1)),m.on("gl-status-nav,issue-pull-request","gl-issue-pull-request-details",()=>this.onBranchAction("open-pr-details"))]}onSuggestChanges(e){this._hostIpc.sendCommand(tj,e)}onShowCodeSuggestion(e){this._hostIpc.sendCommand(t3,e)}onMessageReceived(e){switch(!0){case il.is(e):e.params.state,this.state=e.params.state,this.dispatchEvent(new CustomEvent("state-changed",{detail:this.state}));break;case ic.is(e):this.state={...this.state,wip:e.params.wip,inReview:e.params.inReview},this.dispatchEvent(new CustomEvent("state-changed",{detail:this.state}));break;case id.is(e):this.onDraftStateChanged(e.params.inReview,!0);break;case ih.is(e):this.state={...this.state,hasAccount:e.params.hasAccount},this.dispatchEvent(new CustomEvent("state-changed",{detail:this.state}));break;case ip.is(e):this.state={...this.state,hasIntegrationsConnected:e.params.hasIntegrationsConnected},this.dispatchEvent(new CustomEvent("state-changed",{detail:this.state}))}}disconnectedCallback(){this._disposables.forEach(e=>e.dispose()),this._disposables=[],super.disconnectedCallback?.()}renderTopInspect(){return this.state?.commit==null?tx:t_`<gl-inspect-nav
			?uncommitted=${this.isUncommitted}
			?pinned=${this.state?.pinned}
			.navigation=${this.state?.navigationStack}
			.shortSha=${this.state?.commit.shortSha??""}
			.stashNumber=${this.state?.commit.stashNumber}
		></gl-inspect-nav>`}renderTopWip(){return this.state?.wip==null?tx:t_`<gl-status-nav .wip=${this.state.wip} .preferences=${this.state.preferences}></gl-status-nav>`}renderRepoStatusContent(e){let t=this.wipStatus?.status;return t_`
			<code-icon icon="gl-repository-filled"></code-icon>
			${tN(this.wipStatus?.status!=null,()=>t_`<gl-tracking-pill
						class="inspect-header__tab-tracking"
						.ahead=${this.wipStatus.ahead}
						.behind=${this.wipStatus.behind}
						.working=${this.wipStatus.working}
						outlined
					></gl-tracking-pill>`)}
			${tN(null!=t,()=>t_`<gl-indicator
						class="inspect-header__tab-indicator inspect-header__tab-indicator--${t}"
					></gl-indicator>`)}
		`}renderWipTooltipContent(){return null==this.wipStatus?"Overview":t_`
			Overview of &nbsp;<code-icon icon="git-branch" size="12"></code-icon
			><span class="md-code">${this.wipStatus.branch}</span>
			${tN("both"===this.wipStatus.status,()=>t_`<hr />
						<span class="md-code">${this.wipStatus.branch}</span> is
						${W("commit",this.wipStatus.behind)} behind and
						${W("commit",this.wipStatus.ahead)} ahead of
						<span class="md-code">${this.wipStatus.upstream??"origin"}</span>`)}
			${tN("behind"===this.wipStatus.status,()=>t_`<hr />
						<span class="md-code">${this.wipStatus.branch}</span> is
						${W("commit",this.wipStatus.behind)} behind
						<span class="md-code">${this.wipStatus.upstream??"origin"}</span>`)}
			${tN("ahead"===this.wipStatus.status,()=>t_`<hr />
						<span class="md-code">${this.wipStatus.branch}</span> is
						${W("commit",this.wipStatus.ahead)} ahead of
						<span class="md-code"> ${this.wipStatus.upstream??"origin"}</span>`)}
			${tN(this.wipStatus.working>0,()=>t_`<hr />
						${W("working change",this.wipStatus.working)}`)}
		`}renderTopSection(){let e=this.state?.mode==="wip";return t_`
			<div class="inspect-header">
				<nav class="inspect-header__tabs">
					<gl-tooltip hoist>
						<button class="inspect-header__tab${!e?" is-active":""}" data-action="details">
							<code-icon icon="gl-inspect"></code-icon>
						</button>
						<span slot="content"
							>${this.state?.commit!=null?!this.isStash?t_`Inspect Commit
											<span class="md-code"
												><code-icon icon="git-commit"></code-icon> ${this.state.commit.shortSha}</span
											>`:t_`Inspect Stash
											<span class="md-code"
												><code-icon icon="gl-stashes-view"></code-icon> #${this.state.commit.stashNumber}</span
											>`:"Inspect"}${this.state?.pinned?t_`(pinned)
										<hr />
										Automatic following is suspended while pinned`:""}</span
						>
					</gl-tooltip>
					<gl-tooltip hoist>
						<button class="inspect-header__tab${e?" is-active":""}" data-action="wip">
							${this.renderRepoStatusContent(e)}
						</button>
						<span slot="content">${this.renderWipTooltipContent()}</span>
					</gl-tooltip>
				</nav>
				<div class="inspect-header__content">
					${tN(this.state?.mode!=="wip",()=>this.renderTopInspect(),()=>this.renderTopWip())}
				</div>
			</div>
		`}render(){let e=this.state?.wip;return t_`
			<div class="commit-detail-panel scrollable">
				${this.renderTopSection()}
				<main id="main" tabindex="-1">
					${tN(this.state?.mode==="commit",()=>t_`<gl-commit-details
								.state=${this.state}
								.files=${this.state?.commit?.files}
								.explain=${this.explain}
								.preferences=${this.state?.preferences}
								.orgSettings=${this.state?.orgSettings}
								.isUncommitted=${this.isUncommitted}
							></gl-commit-details>`,()=>t_`<gl-wip-details
								.experimentalComposerEnabled=${this.state?.experimentalComposerEnabled}
								.wip=${e}
								.files=${e?.changes?.files}
								.preferences=${this.state?.preferences}
								.orgSettings=${this.state?.orgSettings}
								.generate=${this.generate}
								.isUncommitted=${!0}
								.emptyText=${"No working changes"}
								.draftState=${this.draftState}
								@draft-state-changed=${e=>this.onDraftStateChanged(e.detail.inReview)}
							></gl-wip-details>`)}
				</main>
			</div>
		`}createRenderRoot(){return this}onDraftStateChanged(e,t=!1){e!==this.draftState.inReview&&(this.draftState={...this.draftState,inReview:e},this.requestUpdate("draftState"),t||this._hostIpc.sendCommand(t5,{inReview:e}))}onBranchAction(e){switch(e){case"pull":this._hostIpc.sendCommand(t8,void 0);break;case"push":this._hostIpc.sendCommand(t7,void 0);break;case"fetch":this._hostIpc.sendCommand(t6,void 0);break;case"publish-branch":this._hostIpc.sendCommand(t9,void 0);break;case"switch":this._hostIpc.sendCommand(t4,void 0);break;case"open-pr-changes":this._hostIpc.sendCommand(ie,void 0);break;case"open-pr-compare":this._hostIpc.sendCommand(ii,void 0);break;case"open-pr-remote":this._hostIpc.sendCommand(io,void 0);break;case"open-pr-details":this._hostIpc.sendCommand(is,void 0)}}onCreatePatchFromWip(e=!0){this.state?.wip?.changes!=null&&this._hostIpc.sendCommand(t2,{changes:this.state.wip.changes,checked:e})}onCommandClickedCore(e){let t=e?.startsWith("command:")?e.slice(8):e;null!=t&&this._hostIpc.sendCommand(C,{command:t})}onSwitchAiModel(e){this.onCommandClickedCore("gitlens.ai.switchProvider")}async onExplainCommit(e){try{let e=await this._hostIpc.sendRequest(ir,void 0);e.error?this.explain={error:{message:e.error.message??"Error retrieving content"}}:this.explain=e}catch(e){this.explain={error:{message:"Error retrieving content"}}}}async onCreateGenerateTitle(e){try{let e=await this._hostIpc.sendRequest(ia,void 0);e.error?this.generate={error:{message:e.error.message??"Error retrieving content"}}:e.title||e.description?this.generate={title:e.title,description:e.description}:this.generate=void 0}catch(e){this.generate={error:{message:"Error retrieving content"}}}this.requestUpdate("generate")}onToggleFilesLayout(e){let t=e.target?.dataset.filesLayout??void 0;if(t===this.state?.preferences?.files?.layout)return;let o={...this.state.preferences?.files,layout:t??"auto"};this.state={...this.state,preferences:{...this.state.preferences,files:o}},this._hostIpc.sendCommand(t1,{files:o})}onExpandedChange(e,t){let o;"pullrequest"===t&&(o={pullRequestExpanded:e.expanded}),null!=o&&(this.state={...this.state,preferences:{...this.state.preferences,...o}},this._hostIpc.sendCommand(t1,o))}onNavigate(e){this._hostIpc.sendCommand(t0,{direction:e})}onTogglePin(){this._hostIpc.sendCommand(tJ,{pin:!this.state.pinned})}onPickCommit(e){this._hostIpc.sendCommand(tY,void 0)}onSearchCommit(e){this._hostIpc.sendCommand(tX,void 0)}onSwitchMode(e,t){this.state={...this.state,mode:t},this._hostIpc.sendCommand(tQ,{mode:t,repoPath:this.state.commit?.repoPath})}onOpenFileOnRemote(e){this._hostIpc.sendCommand(tV,e)}onOpenFile(e){this._hostIpc.sendCommand(tq,e)}onCompareFileWithWorking(e){this._hostIpc.sendCommand(tW,e)}onCompareFileWithPrevious(e){this._hostIpc.sendCommand(tG,e)}onFileMoreActions(e){this._hostIpc.sendCommand(tH,e)}onStageFile(e){this._hostIpc.sendCommand(tK,e)}onUnstageFile(e){this._hostIpc.sendCommand(tZ,e)}onCommitActions(e){this.state?.commit!==void 0&&this._hostIpc.sendCommand(tU,{action:e.detail.action,alt:e.detail.alt})}};lo([tM({type:Object})],lr.prototype,"state",2),lo([tM({type:Object})],lr.prototype,"explain",2),lo([tM({type:Object})],lr.prototype,"generate",2),lo([tO()],lr.prototype,"draftState",2),lo([tO()],lr.prototype,"isUncommitted",1),lo([tO()],lr.prototype,"isStash",1),lr=lo([tT("gl-commit-details-app")],lr);let CommitDetailsApp=class CommitDetailsApp extends App{constructor(){super("CommitDetailsApp")}onInitialize(){let e=document.getElementById("app");e.state=this.state,m.on(e,"state-changed",e=>{this.state=e.detail,this.setState(this.state)})}};new CommitDetailsApp;export{CommitDetailsApp};