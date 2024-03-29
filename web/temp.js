!(function(t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], e)
    : e((t.mapv = t.mapv || {}));
})(this, function(t) {
  "use strict";
  function m(t) {
    t && t.clearRect && t.clearRect(0, 0, t.canvas.width, t.canvas.height);
  }
  function n() {
    this._subscribers = {};
  }
  (n.prototype.on = function(t, e) {
    var n = this._subscribers[t];
    n || ((n = []), (this._subscribers[t] = n)), n.push({ callback: e });
  }),
    (n.prototype.off = function(t, e) {
      var n = this._subscribers[t];
      if (n)
        for (var i = 0; i < n.length; i++)
          n[i].callback == e && (n.splice(i, 1), i--);
    }),
    (n.prototype._trigger = function(t, e, n) {
      if ("*" == t) throw new Error("Cannot trigger event *");
      var i = [];
      t in this._subscribers && (i = i.concat(this._subscribers[t])),
        "*" in this._subscribers && (i = i.concat(this._subscribers["*"]));
      for (var o = 0, a = i.length; o < a; o++) {
        var r = i[o];
        r.callback && r.callback(t, e, n || null);
      }
    });
  var r = {
    municipalities: [
      { n: "北京", g: "116.395645,39.929986|12" },
      { n: "上海", g: "121.487899,31.249162|12" },
      { n: "天津", g: "117.210813,39.14393|12" },
      { n: "重庆", g: "106.530635,29.544606|12" }
    ],
    provinces: [
      {
        n: "安徽",
        g: "117.216005,31.859252|8",
        cities: [
          { n: "合肥", g: "117.282699,31.866942|12" },
          { n: "安庆", g: "117.058739,30.537898|13" },
          { n: "蚌埠", g: "117.35708,32.929499|13" },
          { n: "亳州", g: "115.787928,33.871211|13" },
          { n: "巢湖", g: "117.88049,31.608733|13" },
          { n: "池州", g: "117.494477,30.660019|14" },
          { n: "滁州", g: "118.32457,32.317351|13" },
          { n: "阜阳", g: "115.820932,32.901211|13" },
          { n: "淮北", g: "116.791447,33.960023|13" },
          { n: "淮南", g: "117.018639,32.642812|13" },
          { n: "黄山", g: "118.29357,29.734435|13" },
          { n: "六安", g: "116.505253,31.755558|13" },
          { n: "马鞍山", g: "118.515882,31.688528|13" },
          { n: "宿州", g: "116.988692,33.636772|13" },
          { n: "铜陵", g: "117.819429,30.94093|14" },
          { n: "芜湖", g: "118.384108,31.36602|12" },
          { n: "宣城", g: "118.752096,30.951642|13" }
        ]
      },
      {
        n: "福建",
        g: "117.984943,26.050118|8",
        cities: [
          { n: "福州", g: "119.330221,26.047125|12" },
          { n: "龙岩", g: "117.017997,25.078685|13" },
          { n: "南平", g: "118.181883,26.643626|13" },
          { n: "宁德", g: "119.542082,26.656527|14" },
          { n: "莆田", g: "119.077731,25.44845|13" },
          { n: "泉州", g: "118.600362,24.901652|12" },
          { n: "三明", g: "117.642194,26.270835|14" },
          { n: "厦门", g: "118.103886,24.489231|12" },
          { n: "漳州", g: "117.676205,24.517065|12" }
        ]
      },
      {
        n: "甘肃",
        g: "102.457625,38.103267|6",
        cities: [
          { n: "兰州", g: "103.823305,36.064226|12" },
          { n: "白银", g: "104.171241,36.546682|13" },
          { n: "定西", g: "104.626638,35.586056|13" },
          { n: "甘南州", g: "102.917442,34.992211|14" },
          { n: "嘉峪关", g: "98.281635,39.802397|13" },
          { n: "金昌", g: "102.208126,38.516072|13" },
          { n: "酒泉", g: "98.508415,39.741474|13" },
          { n: "临夏州", g: "103.215249,35.598514|13" },
          { n: "陇南", g: "104.934573,33.39448|14" },
          { n: "平凉", g: "106.688911,35.55011|13" },
          { n: "庆阳", g: "107.644227,35.726801|13" },
          { n: "天水", g: "105.736932,34.584319|13" },
          { n: "武威", g: "102.640147,37.933172|13" },
          { n: "张掖", g: "100.459892,38.93932|13" }
        ]
      },
      {
        n: "广东",
        g: "113.394818,23.408004|8",
        cities: [
          { n: "广州", g: "113.30765,23.120049|12" },
          { n: "潮州", g: "116.630076,23.661812|13" },
          { n: "东莞", g: "113.763434,23.043024|12" },
          { n: "佛山", g: "113.134026,23.035095|13" },
          { n: "河源", g: "114.713721,23.757251|12" },
          { n: "惠州", g: "114.410658,23.11354|12" },
          { n: "江门", g: "113.078125,22.575117|13" },
          { n: "揭阳", g: "116.379501,23.547999|13" },
          { n: "茂名", g: "110.931245,21.668226|13" },
          { n: "梅州", g: "116.126403,24.304571|13" },
          { n: "清远", g: "113.040773,23.698469|13" },
          { n: "汕头", g: "116.72865,23.383908|13" },
          { n: "汕尾", g: "115.372924,22.778731|14" },
          { n: "韶关", g: "113.594461,24.80296|13" },
          { n: "深圳", g: "114.025974,22.546054|12" },
          { n: "阳江", g: "111.97701,21.871517|14" },
          { n: "云浮", g: "112.050946,22.937976|13" },
          { n: "湛江", g: "110.365067,21.257463|13" },
          { n: "肇庆", g: "112.479653,23.078663|13" },
          { n: "中山", g: "113.42206,22.545178|12" },
          { n: "珠海", g: "113.562447,22.256915|13" }
        ]
      },
      {
        n: "广西",
        g: "108.924274,23.552255|7",
        cities: [
          { n: "南宁", g: "108.297234,22.806493|12" },
          { n: "百色", g: "106.631821,23.901512|13" },
          { n: "北海", g: "109.122628,21.472718|13" },
          { n: "崇左", g: "107.357322,22.415455|14" },
          { n: "防城港", g: "108.351791,21.617398|15" },
          { n: "桂林", g: "110.26092,25.262901|12" },
          { n: "贵港", g: "109.613708,23.103373|13" },
          { n: "河池", g: "108.069948,24.699521|14" },
          { n: "贺州", g: "111.552594,24.411054|14" },
          { n: "来宾", g: "109.231817,23.741166|14" },
          { n: "柳州", g: "109.422402,24.329053|12" },
          { n: "钦州", g: "108.638798,21.97335|13" },
          { n: "梧州", g: "111.305472,23.485395|13" },
          { n: "玉林", g: "110.151676,22.643974|14" }
        ]
      },
      {
        n: "贵州",
        g: "106.734996,26.902826|8",
        cities: [
          { n: "贵阳", g: "106.709177,26.629907|12" },
          { n: "安顺", g: "105.92827,26.228595|13" },
          { n: "毕节地区", g: "105.300492,27.302612|14" },
          { n: "六盘水", g: "104.852087,26.591866|13" },
          { n: "铜仁地区", g: "109.196161,27.726271|14" },
          { n: "遵义", g: "106.93126,27.699961|13" },
          { n: "黔西南州", g: "104.900558,25.095148|11" },
          { n: "黔东南州", g: "107.985353,26.583992|11" },
          { n: "黔南州", g: "107.523205,26.264536|11" }
        ]
      },
      {
        n: "海南",
        g: "109.733755,19.180501|9",
        cities: [
          { n: "海口", g: "110.330802,20.022071|13" },
          { n: "白沙", g: "109.358586,19.216056|12" },
          { n: "保亭", g: "109.656113,18.597592|12" },
          { n: "昌江", g: "109.0113,19.222483|12" },
          { n: "儋州", g: "109.413973,19.571153|13" },
          { n: "澄迈", g: "109.996736,19.693135|13" },
          { n: "东方", g: "108.85101,18.998161|13" },
          { n: "定安", g: "110.32009,19.490991|13" },
          { n: "琼海", g: "110.414359,19.21483|13" },
          { n: "琼中", g: "109.861849,19.039771|12" },
          { n: "乐东", g: "109.062698,18.658614|12" },
          { n: "临高", g: "109.724101,19.805922|13" },
          { n: "陵水", g: "109.948661,18.575985|12" },
          { n: "三亚", g: "109.522771,18.257776|12" },
          { n: "屯昌", g: "110.063364,19.347749|13" },
          { n: "万宁", g: "110.292505,18.839886|13" },
          { n: "文昌", g: "110.780909,19.750947|13" },
          { n: "五指山", g: "109.51775,18.831306|13" }
        ]
      },
      {
        n: "河北",
        g: "115.661434,38.61384|7",
        cities: [
          { n: "石家庄", g: "114.522082,38.048958|12" },
          { n: "保定", g: "115.49481,38.886565|13" },
          { n: "沧州", g: "116.863806,38.297615|13" },
          { n: "承德", g: "117.933822,40.992521|14" },
          { n: "邯郸", g: "114.482694,36.609308|13" },
          { n: "衡水", g: "115.686229,37.746929|13" },
          { n: "廊坊", g: "116.703602,39.518611|13" },
          { n: "秦皇岛", g: "119.604368,39.945462|12" },
          { n: "唐山", g: "118.183451,39.650531|13" },
          { n: "邢台", g: "114.520487,37.069531|13" },
          { n: "张家口", g: "114.893782,40.811188|13" }
        ]
      },
      {
        n: "河南",
        g: "113.486804,34.157184|7",
        cities: [
          { n: "郑州", g: "113.649644,34.75661|12" },
          { n: "安阳", g: "114.351807,36.110267|12" },
          { n: "鹤壁", g: "114.29777,35.755426|13" },
          { n: "焦作", g: "113.211836,35.234608|13" },
          { n: "开封", g: "114.351642,34.801854|13" },
          { n: "洛阳", g: "112.447525,34.657368|12" },
          { n: "漯河", g: "114.046061,33.576279|13" },
          { n: "南阳", g: "112.542842,33.01142|13" },
          { n: "平顶山", g: "113.300849,33.745301|13" },
          { n: "濮阳", g: "115.026627,35.753298|12" },
          { n: "三门峡", g: "111.181262,34.78332|13" },
          { n: "商丘", g: "115.641886,34.438589|13" },
          { n: "新乡", g: "113.91269,35.307258|13" },
          { n: "信阳", g: "114.085491,32.128582|13" },
          { n: "许昌", g: "113.835312,34.02674|13" },
          { n: "周口", g: "114.654102,33.623741|13" },
          { n: "驻马店", g: "114.049154,32.983158|13" }
        ]
      },
      {
        n: "黑龙江",
        g: "128.047414,47.356592|6",
        cities: [
          { n: "哈尔滨", g: "126.657717,45.773225|12" },
          { n: "大庆", g: "125.02184,46.596709|12" },
          { n: "大兴安岭地区", g: "124.196104,51.991789|10" },
          { n: "鹤岗", g: "130.292472,47.338666|13" },
          { n: "黑河", g: "127.50083,50.25069|14" },
          { n: "鸡西", g: "130.941767,45.32154|13" },
          { n: "佳木斯", g: "130.284735,46.81378|12" },
          { n: "牡丹江", g: "129.608035,44.588521|13" },
          { n: "七台河", g: "131.019048,45.775005|14" },
          { n: "齐齐哈尔", g: "123.987289,47.3477|13" },
          { n: "双鸭山", g: "131.171402,46.655102|13" },
          { n: "绥化", g: "126.989095,46.646064|13" },
          { n: "伊春", g: "128.910766,47.734685|14" }
        ]
      },
      {
        n: "湖北",
        g: "112.410562,31.209316|8",
        cities: [
          { n: "武汉", g: "114.3162,30.581084|12" },
          { n: "鄂州", g: "114.895594,30.384439|14" },
          { n: "恩施", g: "109.517433,30.308978|14" },
          { n: "黄冈", g: "114.906618,30.446109|14" },
          { n: "黄石", g: "115.050683,30.216127|13" },
          { n: "荆门", g: "112.21733,31.042611|13" },
          { n: "荆州", g: "112.241866,30.332591|12" },
          { n: "潜江", g: "112.768768,30.343116|13" },
          { n: "神农架林区", g: "110.487231,31.595768|13" },
          { n: "十堰", g: "110.801229,32.636994|13" },
          { n: "随州", g: "113.379358,31.717858|13" },
          { n: "天门", g: "113.12623,30.649047|13" },
          { n: "仙桃", g: "113.387448,30.293966|13" },
          { n: "咸宁", g: "114.300061,29.880657|13" },
          { n: "襄阳", g: "112.176326,32.094934|12" },
          { n: "孝感", g: "113.935734,30.927955|13" },
          { n: "宜昌", g: "111.310981,30.732758|13" }
        ]
      },
      {
        n: "湖南",
        g: "111.720664,27.695864|7",
        cities: [
          { n: "长沙", g: "112.979353,28.213478|12" },
          { n: "常德", g: "111.653718,29.012149|12" },
          { n: "郴州", g: "113.037704,25.782264|13" },
          { n: "衡阳", g: "112.583819,26.898164|13" },
          { n: "怀化", g: "109.986959,27.557483|13" },
          { n: "娄底", g: "111.996396,27.741073|13" },
          { n: "邵阳", g: "111.461525,27.236811|13" },
          { n: "湘潭", g: "112.935556,27.835095|13" },
          { n: "湘西州", g: "109.745746,28.317951|14" },
          { n: "益阳", g: "112.366547,28.588088|13" },
          { n: "永州", g: "111.614648,26.435972|13" },
          { n: "岳阳", g: "113.146196,29.378007|13" },
          { n: "张家界", g: "110.48162,29.124889|13" },
          { n: "株洲", g: "113.131695,27.827433|13" }
        ]
      },
      {
        n: "江苏",
        g: "119.368489,33.013797|8",
        cities: [
          { n: "南京", g: "118.778074,32.057236|12" },
          { n: "常州", g: "119.981861,31.771397|12" },
          { n: "淮安", g: "119.030186,33.606513|12" },
          { n: "连云港", g: "119.173872,34.601549|12" },
          { n: "南通", g: "120.873801,32.014665|12" },
          { n: "苏州", g: "120.619907,31.317987|12" },
          { n: "宿迁", g: "118.296893,33.95205|13" },
          { n: "泰州", g: "119.919606,32.476053|13" },
          { n: "无锡", g: "120.305456,31.570037|12" },
          { n: "徐州", g: "117.188107,34.271553|12" },
          { n: "盐城", g: "120.148872,33.379862|12" },
          { n: "扬州", g: "119.427778,32.408505|13" },
          { n: "镇江", g: "119.455835,32.204409|13" }
        ]
      },
      {
        n: "江西",
        g: "115.676082,27.757258|7",
        cities: [
          { n: "南昌", g: "115.893528,28.689578|12" },
          { n: "抚州", g: "116.360919,27.954545|13" },
          { n: "赣州", g: "114.935909,25.845296|13" },
          { n: "吉安", g: "114.992039,27.113848|13" },
          { n: "景德镇", g: "117.186523,29.303563|12" },
          { n: "九江", g: "115.999848,29.71964|13" },
          { n: "萍乡", g: "113.859917,27.639544|13" },
          { n: "上饶", g: "117.955464,28.457623|13" },
          { n: "新余", g: "114.947117,27.822322|13" },
          { n: "宜春", g: "114.400039,27.81113|13" },
          { n: "鹰潭", g: "117.03545,28.24131|13" }
        ]
      },
      {
        n: "吉林",
        g: "126.262876,43.678846|7",
        cities: [
          { n: "长春", g: "125.313642,43.898338|12" },
          { n: "白城", g: "122.840777,45.621086|13" },
          { n: "白山", g: "126.435798,41.945859|13" },
          { n: "吉林", g: "126.564544,43.871988|12" },
          { n: "辽源", g: "125.133686,42.923303|13" },
          { n: "四平", g: "124.391382,43.175525|12" },
          { n: "松原", g: "124.832995,45.136049|13" },
          { n: "通化", g: "125.94265,41.736397|13" },
          { n: "延边", g: "129.485902,42.896414|13" }
        ]
      },
      {
        n: "辽宁",
        g: "122.753592,41.6216|8",
        cities: [
          { n: "沈阳", g: "123.432791,41.808645|12" },
          { n: "鞍山", g: "123.007763,41.118744|13" },
          { n: "本溪", g: "123.778062,41.325838|12" },
          { n: "朝阳", g: "120.446163,41.571828|13" },
          { n: "大连", g: "121.593478,38.94871|12" },
          { n: "丹东", g: "124.338543,40.129023|12" },
          { n: "抚顺", g: "123.92982,41.877304|12" },
          { n: "阜新", g: "121.660822,42.01925|14" },
          { n: "葫芦岛", g: "120.860758,40.74303|13" },
          { n: "锦州", g: "121.147749,41.130879|13" },
          { n: "辽阳", g: "123.172451,41.273339|14" },
          { n: "盘锦", g: "122.073228,41.141248|13" },
          { n: "铁岭", g: "123.85485,42.299757|13" },
          { n: "营口", g: "122.233391,40.668651|13" }
        ]
      },
      {
        n: "内蒙古",
        g: "114.415868,43.468238|5",
        cities: [
          { n: "呼和浩特", g: "111.660351,40.828319|12" },
          { n: "阿拉善盟", g: "105.695683,38.843075|14" },
          { n: "包头", g: "109.846239,40.647119|12" },
          { n: "巴彦淖尔", g: "107.423807,40.76918|12" },
          { n: "赤峰", g: "118.930761,42.297112|12" },
          { n: "鄂尔多斯", g: "109.993706,39.81649|12" },
          { n: "呼伦贝尔", g: "119.760822,49.201636|12" },
          { n: "通辽", g: "122.260363,43.633756|12" },
          { n: "乌海", g: "106.831999,39.683177|13" },
          { n: "乌兰察布", g: "113.112846,41.022363|12" },
          { n: "锡林郭勒盟", g: "116.02734,43.939705|11" },
          { n: "兴安盟", g: "122.048167,46.083757|11" }
        ]
      },
      {
        n: "宁夏",
        g: "106.155481,37.321323|8",
        cities: [
          { n: "银川", g: "106.206479,38.502621|12" },
          { n: "固原", g: "106.285268,36.021523|13" },
          { n: "石嘴山", g: "106.379337,39.020223|13" },
          { n: "吴忠", g: "106.208254,37.993561|14" },
          { n: "中卫", g: "105.196754,37.521124|14" }
        ]
      },
      {
        n: "青海",
        g: "96.202544,35.499761|7",
        cities: [
          { n: "西宁", g: "101.767921,36.640739|12" },
          { n: "果洛州", g: "100.223723,34.480485|11" },
          { n: "海东地区", g: "102.085207,36.51761|11" },
          { n: "海北州", g: "100.879802,36.960654|11" },
          { n: "海南州", g: "100.624066,36.284364|11" },
          { n: "海西州", g: "97.342625,37.373799|11" },
          { n: "黄南州", g: "102.0076,35.522852|11" },
          { n: "玉树州", g: "97.013316,33.00624|14" }
        ]
      },
      {
        n: "山东",
        g: "118.527663,36.09929|8",
        cities: [
          { n: "济南", g: "117.024967,36.682785|12" },
          { n: "滨州", g: "117.968292,37.405314|12" },
          { n: "东营", g: "118.583926,37.487121|12" },
          { n: "德州", g: "116.328161,37.460826|12" },
          { n: "菏泽", g: "115.46336,35.26244|13" },
          { n: "济宁", g: "116.600798,35.402122|13" },
          { n: "莱芜", g: "117.684667,36.233654|13" },
          { n: "聊城", g: "115.986869,36.455829|12" },
          { n: "临沂", g: "118.340768,35.072409|12" },
          { n: "青岛", g: "120.384428,36.105215|12" },
          { n: "日照", g: "119.50718,35.420225|12" },
          { n: "泰安", g: "117.089415,36.188078|13" },
          { n: "威海", g: "122.093958,37.528787|13" },
          { n: "潍坊", g: "119.142634,36.716115|12" },
          { n: "烟台", g: "121.309555,37.536562|12" },
          { n: "枣庄", g: "117.279305,34.807883|13" },
          { n: "淄博", g: "118.059134,36.804685|12" }
        ]
      },
      {
        n: "山西",
        g: "112.515496,37.866566|7",
        cities: [
          { n: "太原", g: "112.550864,37.890277|12" },
          { n: "长治", g: "113.120292,36.201664|12" },
          { n: "大同", g: "113.290509,40.113744|12" },
          { n: "晋城", g: "112.867333,35.499834|13" },
          { n: "晋中", g: "112.738514,37.693362|13" },
          { n: "临汾", g: "111.538788,36.099745|13" },
          { n: "吕梁", g: "111.143157,37.527316|14" },
          { n: "朔州", g: "112.479928,39.337672|13" },
          { n: "忻州", g: "112.727939,38.461031|12" },
          { n: "阳泉", g: "113.569238,37.869529|13" },
          { n: "运城", g: "111.006854,35.038859|13" }
        ]
      },
      {
        n: "陕西",
        g: "109.503789,35.860026|7",
        cities: [
          { n: "西安", g: "108.953098,34.2778|12" },
          { n: "安康", g: "109.038045,32.70437|13" },
          { n: "宝鸡", g: "107.170645,34.364081|12" },
          { n: "汉中", g: "107.045478,33.081569|13" },
          { n: "商洛", g: "109.934208,33.873907|13" },
          { n: "铜川", g: "108.968067,34.908368|13" },
          { n: "渭南", g: "109.483933,34.502358|13" },
          { n: "咸阳", g: "108.707509,34.345373|13" },
          { n: "延安", g: "109.50051,36.60332|13" },
          { n: "榆林", g: "109.745926,38.279439|12" }
        ]
      },
      {
        n: "四川",
        g: "102.89916,30.367481|7",
        cities: [
          { n: "成都", g: "104.067923,30.679943|12" },
          { n: "阿坝州", g: "102.228565,31.905763|15" },
          { n: "巴中", g: "106.757916,31.869189|14" },
          { n: "达州", g: "107.494973,31.214199|14" },
          { n: "德阳", g: "104.402398,31.13114|13" },
          { n: "甘孜州", g: "101.969232,30.055144|15" },
          { n: "广安", g: "106.63572,30.463984|13" },
          { n: "广元", g: "105.819687,32.44104|13" },
          { n: "乐山", g: "103.760824,29.600958|13" },
          { n: "凉山州", g: "102.259591,27.892393|14" },
          { n: "泸州", g: "105.44397,28.89593|14" },
          { n: "南充", g: "106.105554,30.800965|13" },
          { n: "眉山", g: "103.84143,30.061115|13" },
          { n: "绵阳", g: "104.705519,31.504701|12" },
          { n: "内江", g: "105.073056,29.599462|13" },
          { n: "攀枝花", g: "101.722423,26.587571|14" },
          { n: "遂宁", g: "105.564888,30.557491|12" },
          { n: "雅安", g: "103.009356,29.999716|13" },
          { n: "宜宾", g: "104.633019,28.769675|13" },
          { n: "资阳", g: "104.63593,30.132191|13" },
          { n: "自贡", g: "104.776071,29.359157|13" }
        ]
      },
      {
        n: "西藏",
        g: "89.137982,31.367315|6",
        cities: [
          { n: "拉萨", g: "91.111891,29.662557|13" },
          { n: "阿里地区", g: "81.107669,30.404557|11" },
          { n: "昌都地区", g: "97.185582,31.140576|15" },
          { n: "林芝地区", g: "94.349985,29.666941|11" },
          { n: "那曲地区", g: "92.067018,31.48068|14" },
          { n: "日喀则地区", g: "88.891486,29.269023|14" },
          { n: "山南地区", g: "91.750644,29.229027|11" }
        ]
      },
      {
        n: "新疆",
        g: "85.614899,42.127001|6",
        cities: [
          { n: "乌鲁木齐", g: "87.564988,43.84038|12" },
          { n: "阿拉尔", g: "81.291737,40.61568|13" },
          { n: "阿克苏地区", g: "80.269846,41.171731|12" },
          { n: "阿勒泰地区", g: "88.137915,47.839744|13" },
          { n: "巴音郭楞", g: "86.121688,41.771362|12" },
          { n: "博尔塔拉州", g: "82.052436,44.913651|11" },
          { n: "昌吉州", g: "87.296038,44.007058|13" },
          { n: "哈密地区", g: "93.528355,42.858596|13" },
          { n: "和田地区", g: "79.930239,37.116774|13" },
          { n: "喀什地区", g: "75.992973,39.470627|12" },
          { n: "克拉玛依", g: "84.88118,45.594331|13" },
          { n: "克孜勒苏州", g: "76.137564,39.750346|11" },
          { n: "石河子", g: "86.041865,44.308259|13" },
          { n: "塔城地区", g: "82.974881,46.758684|12" },
          { n: "图木舒克", g: "79.198155,39.889223|13" },
          { n: "吐鲁番地区", g: "89.181595,42.96047|13" },
          { n: "五家渠", g: "87.565449,44.368899|13" },
          { n: "伊犁州", g: "81.297854,43.922248|11" }
        ]
      },
      {
        n: "云南",
        g: "101.592952,24.864213|7",
        cities: [
          { n: "昆明", g: "102.714601,25.049153|12" },
          { n: "保山", g: "99.177996,25.120489|13" },
          { n: "楚雄州", g: "101.529382,25.066356|13" },
          { n: "大理州", g: "100.223675,25.5969|14" },
          { n: "德宏州", g: "98.589434,24.44124|14" },
          { n: "迪庆州", g: "99.713682,27.831029|14" },
          { n: "红河州", g: "103.384065,23.367718|11" },
          { n: "丽江", g: "100.229628,26.875351|13" },
          { n: "临沧", g: "100.092613,23.887806|14" },
          { n: "怒江州", g: "98.859932,25.860677|14" },
          { n: "普洱", g: "100.980058,22.788778|14" },
          { n: "曲靖", g: "103.782539,25.520758|12" },
          { n: "昭通", g: "103.725021,27.340633|13" },
          { n: "文山", g: "104.089112,23.401781|14" },
          { n: "西双版纳", g: "100.803038,22.009433|13" },
          { n: "玉溪", g: "102.545068,24.370447|13" }
        ]
      },
      {
        n: "浙江",
        g: "119.957202,29.159494|8",
        cities: [
          { n: "杭州", g: "120.219375,30.259244|12" },
          { n: "湖州", g: "120.137243,30.877925|12" },
          { n: "嘉兴", g: "120.760428,30.773992|13" },
          { n: "金华", g: "119.652576,29.102899|12" },
          { n: "丽水", g: "119.929576,28.4563|13" },
          { n: "宁波", g: "121.579006,29.885259|12" },
          { n: "衢州", g: "118.875842,28.95691|12" },
          { n: "绍兴", g: "120.592467,30.002365|13" },
          { n: "台州", g: "121.440613,28.668283|13" },
          { n: "温州", g: "120.690635,28.002838|12" },
          { n: "舟山", g: "122.169872,30.03601|13" }
        ]
      }
    ],
    other: [
      { n: "香港", g: "114.186124,22.293586|11" },
      { n: "澳门", g: "113.557519,22.204118|13" },
      { n: "台湾", g: "120.961454,23.80406|8" }
    ]
  };
  function a(t) {
    var e = t.split("|");
    return (
      (e[0] = e[0].split(",")),
      { lng: parseFloat(e[0][0]), lat: parseFloat(e[0][1]) }
    );
  }
  function s(t, e) {
    if (!(t instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  var i = {
      getProvinceNameByCityName: function(t) {
        for (var e = r.provinces, n = 0; n < e.length; n++)
          for (var i = e[n].n, o = e[n].cities, a = 0; a < o.length; a++)
            if (o[a].n == t) return i;
        return null;
      },
      getCenterByCityName: function(t) {
        t = t.replace("市", "");
        for (var e = 0; e < r.municipalities.length; e++)
          if (r.municipalities[e].n == t) return a(r.municipalities[e].g);
        for (e = 0; e < r.other.length; e++)
          if (r.other[e].n == t) return a(r.other[e].g);
        var n = r.provinces;
        for (e = 0; e < n.length; e++) {
          if (n[e].n == t) return a(n[e].g);
          for (var i = n[e].cities, o = 0; o < i.length; o++)
            if (i[o].n == t) return a(i[o].g);
        }
        return null;
      }
    },
    e = function(t, e, n) {
      return e && o(t.prototype, e), n && o(t, n), t;
    };
  function o(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(t, i.key, i);
    }
  }
  function h(t, e, n) {
    null === t && (t = Function.prototype);
    var i = Object.getOwnPropertyDescriptor(t, e);
    if (void 0 === i) {
      var o = Object.getPrototypeOf(t);
      return null === o ? void 0 : h(o, e, n);
    }
    if ("value" in i) return i.value;
    var a = i.get;
    return void 0 !== a ? a.call(n) : void 0;
  }
  function l(t, e) {
    if ("function" != typeof e && null !== e)
      throw new TypeError(
        "Super expression must either be null or a function, not " + typeof e
      );
    (t.prototype = Object.create(e && e.prototype, {
      constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 }
    })),
      e &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(t, e)
          : (t.__proto__ = e));
  }
  function u(t, e) {
    if (!t)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
  }
  function I(t, e) {
    n.bind(this)(),
      (this._options = e || {}),
      (this._data = []),
      t && this.add(t);
  }
  ((I.prototype = n.prototype).add = function(t, e) {
    if (Array.isArray(t)) {
      for (var n = 0, i = t.length; n < i; n++)
        if (t[n]) {
          if (
            t[n].time &&
            14 == t[n].time.length &&
            "20" == t[n].time.substr(0, 2)
          ) {
            var o = t[n].time;
            t[n].time = new Date(
              o.substr(0, 4) +
                "-" +
                o.substr(4, 2) +
                "-" +
                o.substr(6, 2) +
                " " +
                o.substr(8, 2) +
                ":" +
                o.substr(10, 2) +
                ":" +
                o.substr(12, 2)
            ).getTime();
          }
          this._data.push(t[n]);
        }
    } else {
      if (!(t instanceof Object)) throw new Error("Unknown dataType");
      this._data.push(t);
    }
    this._dataCache = JSON.parse(JSON.stringify(this._data));
  }),
    (I.prototype.reset = function() {
      this._data = JSON.parse(JSON.stringify(this._dataCache));
    }),
    (I.prototype.get = function(t) {
      t = t || {};
      new Date();
      var e = this._data;
      new Date();
      if (t.filter) {
        for (var n = [], i = 0; i < e.length; i++)
          t.filter(e[i]) && n.push(e[i]);
        e = n;
      }
      return (
        t.transferCoordinate &&
          (e = this.transferCoordinate(
            e,
            t.transferCoordinate,
            t.fromColumn,
            t.toColumn
          )),
        e
      );
    }),
    (I.prototype.set = function(t) {
      this._set(t), this._trigger("change");
    }),
    (I.prototype._set = function(t) {
      this.clear(), this.add(t);
    }),
    (I.prototype.clear = function(t) {
      this._data = [];
    }),
    (I.prototype.remove = function(t) {}),
    (I.prototype.update = function(t, e) {
      for (var n = this._data, i = 0; i < n.length; i++)
        if (e) {
          var o = !0;
          for (var a in e) n[i][a] != e[a] && (o = !1);
          o && t && t(n[i]);
        } else t && t(n[i]);
      (this._dataCache = JSON.parse(JSON.stringify(this._data))),
        this._trigger("change");
    }),
    (I.prototype.transferCoordinate = function(t, r, e, n) {
      (n = n || "_coordinates"), (e = e || "coordinates");
      for (var i = 0; i < t.length; i++) {
        var o = t[i].geometry,
          a = o[e];
        switch (o.type) {
          case "Point":
            o[n] = r(a);
            break;
          case "LineString":
            for (var s = [], h = 0; h < a.length; h++) s.push(r(a[h]));
            o[n] = s;
            break;
          case "MultiLineString":
          case "Polygon":
            s = c(a);
            o[n] = s;
            break;
          case "MultiPolygon":
            s = [];
            for (var l = 0; l < a.length; l++) {
              var u = c((u = a[l]));
              s.push(u);
            }
            o[n] = s;
        }
      }
      function c(t) {
        for (var e = [], n = 0; n < t.length; n++) {
          for (var i = t[n], o = [], a = 0; a < i.length; a++) o.push(r(i[a]));
          e.push(o);
        }
        return e;
      }
      return t;
    }),
    (I.prototype.initGeometry = function(e) {
      e
        ? this._data.forEach(function(t) {
            t.geometry = e(t);
          })
        : this._data.forEach(function(t) {
            if (!t.geometry)
              if (t.lng && t.lat)
                t.geometry = { type: "Point", coordinates: [t.lng, t.lat] };
              else if (t.city) {
                var e = i.getCenterByCityName(t.city);
                e &&
                  (t.geometry = { type: "Point", coordinates: [e.lng, e.lat] });
              }
          });
    }),
    (I.prototype.getMax = function(t) {
      var e = this._data;
      if (e && !(e.length <= 0)) {
        for (var n = parseFloat(e[0][t]), i = 1; i < e.length; i++) {
          var o = parseFloat(e[i][t]);
          n < o && (n = o);
        }
        return n;
      }
    }),
    (I.prototype.getSum = function(t) {
      var e = this._data;
      if (e && !(e.length <= 0)) {
        for (var n = 0, i = 0; i < e.length; i++)
          e[i][t] && (n += parseFloat(e[i][t]));
        return n;
      }
    }),
    (I.prototype.getMin = function(t) {
      var e = this._data;
      if (e && !(e.length <= 0)) {
        for (var n = parseFloat(e[0][t]), i = 1; i < e.length; i++) {
          var o = parseFloat(e[i][t]);
          o < n && (n = o);
        }
        return n;
      }
    }),
    (I.prototype.getUnique = function(t) {
      if ((i = this._data) && !(i.length <= 0)) {
        for (var e = {}, n = 1; n < i.length; n++) e[i[n][t]] = !0;
        var i = [];
        for (var o in e) i.push(o);
        return i;
      }
    });
  var x = {
      drawDataSet: function(t, e, n) {
        for (
          var i = e instanceof I ? e.get() : e, o = 0, a = i.length;
          o < a;
          o++
        ) {
          var r = i[o];
          this.draw(t, r, n);
        }
      },
      draw: function(t, e, n) {
        var i = e.geometry.type,
          o = e.geometry._coordinates || e.geometry.coordinates,
          a = e.symbol || n.symbol || "circle";
        switch (i) {
          case "Point":
            var r = e._size || e.size || n._size || n.size || 5;
            "circle" === a
              ? ("Point" === n.bigData && t.moveTo(o[0], o[1]),
                t.arc(o[0], o[1], r, 0, 2 * Math.PI))
              : "rect" === a
              ? t.rect(o[0] - r / 2, o[1] - r / 2, r, r)
              : "honeycomb" === a &&
                (function(t, e, n, i) {
                  for (var o = 0; o < 6; o++) {
                    var a =
                      ((r = { x: e, y: n }),
                      (s = i),
                      void 0,
                      (h = 60 * o + 30),
                      (l = (Math.PI / 180) * h),
                      [r.x + s * Math.cos(l), r.y + s * Math.sin(l)]);
                    t.lineTo(a[0], a[1]);
                  }
                  var r, s, h, l;
                })(t, o[0], o[1], r);
            break;
          case "LineString":
            this.drawLineString(t, o);
            break;
          case "MultiLineString":
            for (var s = 0; s < o.length; s++) {
              var h = o[s];
              this.drawLineString(t, h);
            }
            break;
          case "Polygon":
            this.drawPolygon(t, o);
            break;
          case "MultiPolygon":
            for (s = 0; s < o.length; s++) {
              var l = o[s];
              if ((this.drawPolygon(t, l), n.multiPolygonDraw)) {
                var u = n.multiPolygonDraw();
                if (u) return u;
              }
            }
            break;
          default:
            console.error("type" + i + "is not support now!");
        }
      },
      drawLineString: function(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n][0],
            o = e[n][1];
          0 == n ? t.moveTo(i, o) : t.lineTo(i, o);
        }
      },
      drawPolygon: function(t, e) {
        t.beginPath();
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          t.moveTo(i[0][0], i[0][1]);
          for (var o = 1; o < i.length; o++) t.lineTo(i[o][0], i[o][1]);
          t.lineTo(i[0][0], i[0][1]), t.closePath();
        }
      }
    },
    c = {
      draw: function(t, e, n) {
        var i = e instanceof I ? e.get() : e;
        for (var o in (t.save(), n)) t[o] = n[o];
        if (n.bigData) {
          t.save(), t.beginPath();
          for (var a = 0, r = i.length; a < r; a++) {
            var s = i[a];
            x.draw(t, s, n);
          }
          "Point" == (h = n.bigData) || "Polygon" == h || "MultiPolygon" == h
            ? (t.fill(),
              t.lineDash && t.setLineDash(t.lineDash),
              s.lineDash && t.setLineDash(s.lineDash),
              (s.strokeStyle || n.strokeStyle) && n.lineWidth && t.stroke())
            : ("LineString" != h && "MultiLineString" != h) || t.stroke(),
            t.restore();
        } else
          for (a = 0, r = i.length; a < r; a++) {
            s = i[a];
            t.save(),
              (s.fillStyle || s._fillStyle) &&
                (t.fillStyle = s.fillStyle || s._fillStyle),
              (s.strokeStyle || s._strokeStyle) &&
                (t.strokeStyle = s.strokeStyle || s._strokeStyle),
              t.lineDash && t.setLineDash(t.lineDash),
              s.lineDash && t.setLineDash(s.lineDash);
            var h = s.geometry.type;
            t.beginPath(),
              (n.multiPolygonDraw = function() {
                t.fill(),
                  (s.strokeStyle || n.strokeStyle) && n.lineWidth && t.stroke();
              }),
              x.draw(t, s, n),
              "Point" == h || "Polygon" == h || "MultiPolygon" == h
                ? (t.fill(),
                  (s.strokeStyle || n.strokeStyle) && n.lineWidth && t.stroke())
                : ("LineString" != h && "MultiLineString" != h) ||
                  ((s.lineWidth || s._lineWidth) &&
                    (t.lineWidth = s.lineWidth || s._lineWidth),
                  t.stroke()),
              t.restore();
          }
        t.restore();
      }
    };
  function _(t, e) {
    if ("undefined" != typeof document) {
      var n = document.createElement("canvas");
      t && (n.width = t), e && (n.height = e);
    }
    return n;
  }
  function D(t) {
    (t = t || {}),
      (this.gradient = t.gradient || {
        0.25: "rgba(0, 0, 255, 1)",
        0.55: "rgba(0, 255, 0, 1)",
        0.85: "rgba(255, 255, 0, 1)",
        1: "rgba(255, 0, 0, 1)"
      }),
      (this.maxSize = t.maxSize || 35),
      (this.minSize = t.minSize || 0),
      (this.max = t.max || 100),
      (this.min = t.min || 0),
      this.initPalette();
  }
  (D.prototype.setMax = function(t) {
    this.max = t || 100;
  }),
    (D.prototype.setMin = function(t) {
      this.min = t || 0;
    }),
    (D.prototype.setMaxSize = function(t) {
      this.maxSize = t || 35;
    }),
    (D.prototype.setMinSize = function(t) {
      this.minSize = t || 0;
    }),
    (D.prototype.initPalette = function() {
      var t = this.gradient,
        e = new _(256, 1),
        n = (this.paletteCtx = e.getContext("2d")),
        i = n.createLinearGradient(0, 0, 256, 1);
      for (var o in t) i.addColorStop(parseFloat(o), t[o]);
      (n.fillStyle = i), n.fillRect(0, 0, 256, 1);
    }),
    (D.prototype.getColor = function(t) {
      var e = this.getImageData(t);
      return (
        "rgba(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] / 256 + ")"
      );
    }),
    (D.prototype.getImageData = function(t) {
      var e = this.paletteCtx.getImageData(0, 0, 256, 1).data;
      if (void 0 === t) return e;
      var n = this.max,
        i = this.min;
      n < t && (t = n), t < i && (t = i);
      var o = 4 * Math.floor(((t - i) / (n - i)) * 255);
      return [e[o], e[1 + o], e[2 + o], e[3 + o]];
    }),
    (D.prototype.getSize = function(t) {
      var e = this.max,
        n = this.min,
        i = this.maxSize,
        o = this.minSize;
      return (
        e < t && (t = e),
        t < n && (t = n),
        n < e ? o + ((t - n) / (e - n)) * (i - o) : i
      );
    }),
    (D.prototype.getLegend = function(t) {
      var e = this.gradient,
        n = t.width || 20,
        i = t.height || 180,
        o = new _(n, i),
        a = o.getContext("2d"),
        r = a.createLinearGradient(0, i, 0, 0);
      for (var s in e) r.addColorStop(parseFloat(s), e[s]);
      return (a.fillStyle = r), a.fillRect(0, 0, n, i), o;
    });
  var v = ("undefined" == typeof window ? {} : window).devicePixelRatio || 1;
  function w(t) {
    return t.max || 100;
  }
  function b(t) {
    return t.min || 0;
  }
  function p(a, t, r) {
    var s = w(r),
      e = b(r),
      n = r._size;
    null == n && null == (n = r.size) && (n = 13);
    var i,
      o,
      h,
      l,
      u,
      c = new D({ gradient: r.gradient, max: s, min: e }),
      v =
        ((l = new _(2 * (h = (i = n) + (o = i / 2)), 2 * h)),
        ((u = l.getContext("2d")).shadowBlur = o),
        (u.shadowColor = "black"),
        (u.shadowOffsetX = u.shadowOffsetY = 1e4),
        u.beginPath(),
        u.arc(h - 1e4, h - 1e4, i, 0, 2 * Math.PI, !0),
        u.closePath(),
        u.fill(),
        l),
      p = v.width / 2,
      d = v.height / 2,
      g = t,
      f = {};
    for (var y in (g.forEach(function(t, e) {
      var n = void 0 === t.count ? 1 : t.count,
        i = Math.min(1, n / s).toFixed(2);
      (f[i] = f[i] || []), f[i].push(t);
    }),
    f))
      if (!isNaN(y)) {
        var m = f[y];
        a.beginPath(),
          r.withoutAlpha || (a.globalAlpha = y),
          (a.strokeStyle = c.getColor(y * s)),
          m.forEach(function(t, e) {
            if (t.geometry) {
              var n = t.geometry._coordinates || t.geometry.coordinates,
                i = t.geometry.type;
              if ("Point" === i) {
                var o = void 0 === t.count ? 1 : t.count;
                (a.globalAlpha = o / s), a.drawImage(v, n[0] - p, n[1] - d);
              } else if ("LineString" === i) {
                o = void 0 === t.count ? 1 : t.count;
                (a.globalAlpha = o / s),
                  a.beginPath(),
                  x.draw(a, t, r),
                  a.stroke();
              }
            }
          });
      }
  }
  var d = {
      draw: function(t, e, n) {
        if (!(t.canvas.width <= 0 || t.canvas.height <= 0)) {
          var i = n.strength || 0.3;
          t.strokeStyle = "rgba(0,0,0," + i + ")";
          var o = new _(t.canvas.width, t.canvas.height),
            a = o.getContext("2d");
          a.scale(v, v), (n = n || {});
          var r = e instanceof I ? e.get() : e;
          t.save();
          var s = new D({ gradient: n.gradient });
          if ((p(a, r, n), !n.absolute)) {
            var h = a.getImageData(0, 0, t.canvas.width, t.canvas.height);
            !(function(t, e, n) {
              var i = w(n),
                o = b(n),
                a = i - o,
                r = 0,
                s = 1024;
              (c = n.range || null) &&
                2 === c.length &&
                (r = ((c[0] - o) / a) * 1024),
                c && 2 === c.length && (s = ((c[1] - o) / a) * 1024);
              for (
                var h,
                  l = n.maxOpacity || 0.8,
                  u = n.minOpacity || 0,
                  c = n.range,
                  v = 3,
                  p = t.length;
                v < p;
                v += 4
              )
                (h = 4 * t[v]),
                  t[v] / 256 > l && (t[v] = 256 * l),
                  t[v] / 256 < u && (t[v] = 256 * u),
                  h && r <= h && h <= s
                    ? ((t[v - 3] = e[h]),
                      (t[v - 2] = e[1 + h]),
                      (t[v - 1] = e[2 + h]))
                    : (t[v] = 0);
            })(h.data, s.getImageData(), n),
              t.putImageData(h, 0, 0),
              t.restore();
          }
          o = s = null;
        }
      }
    },
    g = {
      draw: function(t, e, n) {
        t.save();
        var i = e instanceof I ? e.get() : e,
          o = {},
          a = n._size || n.size || 50,
          r = !("enableCluster" in n) || n.enableCluster,
          s = n.offset || { x: 0, y: 0 },
          h = new D({
            min: n.min || 0,
            max: n.max || 100,
            gradient: n.gradient
          });
        if (r) {
          for (var l = 0; l < i.length; l++) {
            v = i[l].geometry._coordinates || i[l].geometry.coordinates;
            o[
              (d =
                Math.floor((v[0] - s.x) / a) +
                "," +
                Math.floor((v[1] - s.y) / a))
            ] || (o[d] = 0),
              (o[d] += ~~(i[l].count || 1));
          }
          for (var u in o)
            (u = u.split(",")),
              t.beginPath(),
              t.rect(u[0] * a + 0.5 + s.x, u[1] * a + 0.5 + s.y, a, a),
              (t.fillStyle = h.getColor(o[u])),
              t.fill(),
              n.strokeStyle && n.lineWidth && t.stroke();
        } else {
          for (var c = 0; c < i.length; c++) {
            var v;
            o[
              (d = (v =
                i[c].geometry._coordinates || i[c].geometry.coordinates).join(
                ","
              ))
            ] = i[c].count || 1;
          }
          for (var p in o)
            (p = p.split(",")),
              t.beginPath(),
              t.rect(p[0] - a / 2, p[1] - a / 2, a, a),
              (t.fillStyle = h.getColor(o[p])),
              t.fill(),
              n.strokeStyle && n.lineWidth && t.stroke();
        }
        if (n.label && !1 !== n.label.show)
          for (var d in ((t.fillStyle = n.label.fillStyle || "white"),
          n.label.font && (t.font = n.label.font),
          n.label.shadowColor && (t.shadowColor = n.label.shadowColor),
          n.label.shadowBlur && (t.shadowBlur = n.label.shadowBlur),
          o)) {
            var g = o[(d = d.split(","))],
              f = t.measureText(g).width;
            r
              ? t.fillText(
                  g,
                  d[0] * a + 0.5 + s.x + a / 2 - f / 2,
                  d[1] * a + 0.5 + s.y + a / 2 + 5
                )
              : t.fillText(g, d[0] - f / 2, +d[1] + 5);
          }
        t.restore();
      }
    };
  var f = {
    draw: function(t, e, n) {
      t.save();
      var i = e instanceof I ? e.get() : e;
      for (var o in n) t[o] = n[o];
      for (
        var a = n.offset || { x: 10, y: 10 },
          r = n._size || n.size || 40,
          s = 2 * (r = r / 2 / Math.sin(Math.PI / 3)) * Math.sin(Math.PI / 3),
          h = 1.5 * r,
          l = {},
          u = 0;
        u < i.length;
        u++
      ) {
        var c = i[u].geometry._coordinates || i[u].geometry.coordinates,
          v = (c[1] - a.y) / h,
          p = Math.round(v),
          d = (c[0] - a.x) / s - (1 & p ? 0.5 : 0),
          g = Math.round(d),
          f = v - p;
        if (1 < 3 * Math.abs(f)) {
          var y = d - g,
            m = g + (d < g ? -1 : 1) / 2,
            x = p + (v < p ? -1 : 1),
            _ = d - m,
            w = v - x;
          _ * _ + w * w < y * y + f * f &&
            ((g = m + (1 & p ? 1 : -1) / 2), (p = x));
        }
        var b = g + "-" + p,
          k = l[b];
        k
          ? k.push(i[u])
          : (((k = l[b] = [i[u]]).i = g),
            (k.j = p),
            (k.x = (g + (1 & p ? 0.5 : 0)) * s),
            (k.y = p * h));
      }
      var L,
        E,
        S,
        C,
        M = new D({ max: n.max || 100, maxSize: r, gradient: n.gradient });
      for (var o in l) {
        var P = l[o];
        t.beginPath();
        for (var z = 0; z < 6; z++) {
          var A =
            ((L = { x: P.x + a.x, y: P.y + a.y }),
            (E = r),
            void 0,
            (S = 60 * z + 30),
            (C = (Math.PI / 180) * S),
            [L.x + E * Math.cos(C), L.y + E * Math.sin(C)]);
          t.lineTo(A[0], A[1]);
        }
        t.closePath();
        var R = 0;
        for (u = 0; u < P.length; u++) R += P[u].count || 1;
        (P.count = R),
          (t.fillStyle = M.getColor(R)),
          t.fill(),
          n.strokeStyle && n.lineWidth && t.stroke();
      }
      if (n.label && !1 !== n.label.show)
        for (var o in ((t.fillStyle = n.label.fillStyle || "white"),
        n.label.font && (t.font = n.label.font),
        n.label.shadowColor && (t.shadowColor = n.label.shadowColor),
        n.label.shadowBlur && (t.shadowBlur = n.label.shadowBlur),
        l)) {
          var O = (P = l[o]).count;
          O = O < 0 ? O.toFixed(2) : ~~O;
          var T = t.measureText(O).width;
          t.fillText(O, P.x + a.x - T / 2, P.y + a.y + 5);
        }
      t.restore();
    }
  };
  function y(t, e, n) {
    var i = t.createShader(n);
    return t.shaderSource(i, e), t.compileShader(i), i;
  }
  function k(t, e, n) {
    var i = y(t, e, t.VERTEX_SHADER),
      o = y(t, n, t.FRAGMENT_SHADER),
      a = t.createProgram();
    return (
      t.attachShader(a, i),
      t.attachShader(a, o),
      t.linkProgram(a),
      t.useProgram(a),
      a
    );
  }
  function E(t) {
    var e = document.createElement("canvas"),
      n = e.getContext("2d");
    return (
      (e.width = 1),
      (e.height = 1),
      (n.fillStyle = t),
      n.fillRect(0, 0, 1, 1),
      n.getImageData(0, 0, 1, 1).data
    );
  }
  var S = [
      "attribute vec4 a_Position;",
      "void main() {",
      "gl_Position = a_Position;",
      "gl_PointSize = 30.0;",
      "}"
    ].join(""),
    C = [
      "precision mediump float;",
      "uniform vec4 u_FragColor;",
      "void main() {",
      "gl_FragColor = u_FragColor;",
      "}"
    ].join("");
  var M = {
      draw: function(t, e, n) {
        if (e) {
          var i = k(t, S, C);
          t.enable(t.BLEND),
            t.blendFunc(t.SRC_ALPHA, t.ONE),
            t.clear(t.COLOR_BUFFER_BIT);
          var o = t.canvas.width / 2,
            a = t.canvas.height / 2,
            r = t.createBuffer();
          t.bindBuffer(t.ARRAY_BUFFER, r);
          var s = t.getAttribLocation(i, "a_Position");
          t.vertexAttribPointer(s, 2, t.FLOAT, !1, 0, 0),
            t.enableVertexAttribArray(s);
          var h = t.getUniformLocation(i, "u_FragColor"),
            l = E(n.strokeStyle || "red");
          t.uniform4f(h, l[0] / 255, l[1] / 255, l[2] / 255, l[3] / 255),
            t.lineWidth(n.lineWidth || 1);
          for (var u = 0, c = e.length; u < c; u++) {
            for (
              var v = e[u].geometry._coordinates, p = [], d = 0;
              d < v.length;
              d++
            ) {
              var g = v[d],
                f = (g[0] - o) / o,
                y = (a - g[1]) / a;
              p.push(f, y);
            }
            var m = new Float32Array(p);
            t.bufferData(t.ARRAY_BUFFER, m, t.STATIC_DRAW),
              t.drawArrays(t.LINE_STRIP, 0, v.length);
          }
        }
      }
    },
    z = [
      "attribute vec4 a_Position;",
      "attribute float a_PointSize;",
      "void main() {",
      "gl_Position = a_Position;",
      "gl_PointSize = a_PointSize;",
      "}"
    ].join(""),
    A = [
      "precision mediump float;",
      "uniform vec4 u_FragColor;",
      "void main() {",
      "gl_FragColor = u_FragColor;",
      "}"
    ].join("");
  var R = {
    draw: function(t, e, n) {
      if (e) {
        var i = k(t, z, A),
          o = t.getAttribLocation(i, "a_Position"),
          a = t.getAttribLocation(i, "a_PointSize"),
          r = t.getUniformLocation(i, "u_FragColor");
        t.clear(t.COLOR_BUFFER_BIT);
        for (
          var s = t.canvas.width / 2,
            h = t.canvas.height / 2,
            l = [],
            u = 0,
            c = 0;
          c < e.length;
          c++
        ) {
          var v = e[c].geometry._coordinates,
            p = (v[0] - s) / s,
            d = (h - v[1]) / h;
          p < -1 || 1 < p || d < -1 || 1 < d || (l.push(p, d), u++);
        }
        var g = new Float32Array(l),
          f = u,
          y = t.createBuffer();
        t.bindBuffer(t.ARRAY_BUFFER, y),
          t.bufferData(t.ARRAY_BUFFER, g, t.STATIC_DRAW),
          t.vertexAttribPointer(o, 2, t.FLOAT, !1, 0, 0),
          t.enableVertexAttribArray(o),
          t.vertexAttrib1f(a, n._size);
        var m = E(n.fillStyle || "red");
        t.uniform4f(r, m[0] / 255, m[1] / 255, m[2] / 255, m[3] / 255),
          t.drawArrays(t.POINTS, 0, f);
      }
    }
  };
  function O(t, e, n) {
    n = n || 2;
    var i,
      o,
      a,
      r,
      s,
      h,
      l,
      u = e && e.length,
      c = u ? e[0] * n : t.length,
      v = T(t, 0, c, n, !0),
      p = [];
    if (!v) return p;
    if (
      (u &&
        (v = (function(t, e, n, i) {
          var o,
            a,
            r,
            s,
            h,
            l = [];
          for (o = 0, a = e.length; o < a; o++)
            (r = e[o] * i),
              (s = o < a - 1 ? e[o + 1] * i : t.length),
              (h = T(t, r, s, i, !1)) === h.next && (h.steiner = !0),
              l.push(V(h));
          for (l.sort(W), o = 0; o < l.length; o++)
            H(l[o], n), (n = F(n, n.next));
          return n;
        })(t, e, v, n)),
      t.length > 80 * n)
    ) {
      (i = a = t[0]), (o = r = t[1]);
      for (var d = n; d < c; d += n)
        (s = t[d]) < i && (i = s),
          (h = t[d + 1]) < o && (o = h),
          a < s && (a = s),
          r < h && (r = h);
      l = Math.max(a - i, r - o);
    }
    return B(v, p, n, i, o, l), p;
  }
  function T(t, e, n, i, o) {
    var a, r;
    if (o === 0 < nt(t, e, n, i))
      for (a = e; a < n; a += i) r = K(a, t[a], t[a + 1], r);
    else for (a = n - i; e <= a; a -= i) r = K(a, t[a], t[a + 1], r);
    return r && Y(r, r.next) && (tt(r), (r = r.next)), r;
  }
  function F(t, e) {
    if (!t) return t;
    e = e || t;
    var n,
      i = t;
    do {
      if (
        ((n = !1), i.steiner || (!Y(i, i.next) && 0 !== G(i.prev, i, i.next)))
      )
        i = i.next;
      else {
        if ((tt(i), (i = e = i.prev) === i.next)) return null;
        n = !0;
      }
    } while (n || i !== e);
    return e;
  }
  function B(t, e, n, i, o, a, r) {
    if (t) {
      !r &&
        a &&
        (function(t, e, n, i) {
          var o = t;
          for (
            ;
            null === o.z && (o.z = q(o.x, o.y, e, n, i)),
              (o.prevZ = o.prev),
              (o.nextZ = o.next),
              (o = o.next),
              o !== t;

          );
          (o.prevZ.nextZ = null),
            (o.prevZ = null),
            (function(t) {
              var e,
                n,
                i,
                o,
                a,
                r,
                s,
                h,
                l = 1;
              do {
                for (n = t, a = t = null, r = 0; n; ) {
                  for (
                    r++, i = n, e = s = 0;
                    e < l && (s++, (i = i.nextZ));
                    e++
                  );
                  for (h = l; 0 < s || (0 < h && i); )
                    0 === s
                      ? ((i = (o = i).nextZ), h--)
                      : 0 !== h && i
                      ? n.z <= i.z
                        ? ((n = (o = n).nextZ), s--)
                        : ((i = (o = i).nextZ), h--)
                      : ((n = (o = n).nextZ), s--),
                      a ? (a.nextZ = o) : (t = o),
                      (o.prevZ = a),
                      (a = o);
                  n = i;
                }
                (a.nextZ = null), (l *= 2);
              } while (1 < r);
            })(o);
        })(t, i, o, a);
      for (var s, h, l = t; t.prev !== t.next; )
        if (((s = t.prev), (h = t.next), a ? Z(t, i, o, a) : U(t)))
          e.push(s.i / n),
            e.push(t.i / n),
            e.push(h.i / n),
            tt(t),
            (t = h.next),
            (l = h.next);
        else if ((t = h) === l) {
          r
            ? 1 === r
              ? B((t = j(t, e, n)), e, n, i, o, a, 2)
              : 2 === r && N(t, e, n, i, o, a)
            : B(F(t), e, n, i, o, a, 1);
          break;
        }
    }
  }
  function U(t) {
    var e = t.prev,
      n = t,
      i = t.next;
    if (0 <= G(e, n, i)) return !1;
    for (var o = t.next.next; o !== t.prev; ) {
      if (
        $(e.x, e.y, n.x, n.y, i.x, i.y, o.x, o.y) &&
        0 <= G(o.prev, o, o.next)
      )
        return !1;
      o = o.next;
    }
    return !0;
  }
  function Z(t, e, n, i) {
    var o = t.prev,
      a = t,
      r = t.next;
    if (0 <= G(o, a, r)) return !1;
    for (
      var s = o.x < a.x ? (o.x < r.x ? o.x : r.x) : a.x < r.x ? a.x : r.x,
        h = o.y < a.y ? (o.y < r.y ? o.y : r.y) : a.y < r.y ? a.y : r.y,
        l = o.x > a.x ? (o.x > r.x ? o.x : r.x) : a.x > r.x ? a.x : r.x,
        u = o.y > a.y ? (o.y > r.y ? o.y : r.y) : a.y > r.y ? a.y : r.y,
        c = q(s, h, e, n, i),
        v = q(l, u, e, n, i),
        p = t.nextZ;
      p && p.z <= v;

    ) {
      if (
        p !== t.prev &&
        p !== t.next &&
        $(o.x, o.y, a.x, a.y, r.x, r.y, p.x, p.y) &&
        0 <= G(p.prev, p, p.next)
      )
        return !1;
      p = p.nextZ;
    }
    for (p = t.prevZ; p && p.z >= c; ) {
      if (
        p !== t.prev &&
        p !== t.next &&
        $(o.x, o.y, a.x, a.y, r.x, r.y, p.x, p.y) &&
        0 <= G(p.prev, p, p.next)
      )
        return !1;
      p = p.prevZ;
    }
    return !0;
  }
  function j(t, e, n) {
    var i = t;
    do {
      var o = i.prev,
        a = i.next.next;
      !Y(o, a) &&
        J(o, i, i.next, a) &&
        Q(o, a) &&
        Q(a, o) &&
        (e.push(o.i / n),
        e.push(i.i / n),
        e.push(a.i / n),
        tt(i),
        tt(i.next),
        (i = t = a)),
        (i = i.next);
    } while (i !== t);
    return i;
  }
  function N(t, e, n, i, o, a) {
    var r,
      s,
      h = t;
    do {
      for (var l = h.next.next; l !== h.prev; ) {
        if (
          h.i !== l.i &&
          ((s = l),
          (r = h).next.i !== s.i &&
            r.prev.i !== s.i &&
            !(function(t, e) {
              var n = t;
              do {
                if (
                  n.i !== t.i &&
                  n.next.i !== t.i &&
                  n.i !== e.i &&
                  n.next.i !== e.i &&
                  J(n, n.next, t, e)
                )
                  return !0;
                n = n.next;
              } while (n !== t);
              return !1;
            })(r, s) &&
            Q(r, s) &&
            Q(s, r) &&
            (function(t, e) {
              var n = t,
                i = !1,
                o = (t.x + e.x) / 2,
                a = (t.y + e.y) / 2;
              for (
                ;
                n.y > a != n.next.y > a &&
                  o < ((n.next.x - n.x) * (a - n.y)) / (n.next.y - n.y) + n.x &&
                  (i = !i),
                  (n = n.next),
                  n !== t;

              );
              return i;
            })(r, s))
        ) {
          var u = X(h, l);
          return (
            (h = F(h, h.next)),
            (u = F(u, u.next)),
            B(h, e, n, i, o, a),
            void B(u, e, n, i, o, a)
          );
        }
        l = l.next;
      }
      h = h.next;
    } while (h !== t);
  }
  function W(t, e) {
    return t.x - e.x;
  }
  function H(t, e) {
    if (
      (e = (function(t, e) {
        var n,
          i = e,
          o = t.x,
          a = t.y,
          r = -1 / 0;
        do {
          if (a <= i.y && a >= i.next.y) {
            var s = i.x + ((a - i.y) * (i.next.x - i.x)) / (i.next.y - i.y);
            if (s <= o && r < s) {
              if ((r = s) === o) {
                if (a === i.y) return i;
                if (a === i.next.y) return i.next;
              }
              n = i.x < i.next.x ? i : i.next;
            }
          }
          i = i.next;
        } while (i !== e);
        if (!n) return null;
        if (o === r) return n.prev;
        var h,
          l = n,
          u = n.x,
          c = n.y,
          v = 1 / 0;
        i = n.next;
        for (; i !== l; )
          o >= i.x &&
            i.x >= u &&
            $(a < c ? o : r, a, u, c, a < c ? r : o, a, i.x, i.y) &&
            ((h = Math.abs(a - i.y) / (o - i.x)) < v ||
              (h === v && i.x > n.x)) &&
            Q(i, t) &&
            ((n = i), (v = h)),
            (i = i.next);
        return n;
      })(t, e))
    ) {
      var n = X(e, t);
      F(n, n.next);
    }
  }
  function q(t, e, n, i, o) {
    return (
      (t =
        1431655765 &
        ((t =
          858993459 &
          ((t =
            252645135 &
            ((t = 16711935 & ((t = (32767 * (t - n)) / o) | (t << 8))) |
              (t << 4))) |
            (t << 2))) |
          (t << 1))) |
      ((e =
        1431655765 &
        ((e =
          858993459 &
          ((e =
            252645135 &
            ((e = 16711935 & ((e = (32767 * (e - i)) / o) | (e << 8))) |
              (e << 4))) |
            (e << 2))) |
          (e << 1))) <<
        1)
    );
  }
  function V(t) {
    for (var e = t, n = t; e.x < n.x && (n = e), (e = e.next) !== t; );
    return n;
  }
  function $(t, e, n, i, o, a, r, s) {
    return (
      0 <= (o - r) * (e - s) - (t - r) * (a - s) &&
      0 <= (t - r) * (i - s) - (n - r) * (e - s) &&
      0 <= (n - r) * (a - s) - (o - r) * (i - s)
    );
  }
  function G(t, e, n) {
    return (e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y);
  }
  function Y(t, e) {
    return t.x === e.x && t.y === e.y;
  }
  function J(t, e, n, i) {
    return (
      !!((Y(t, e) && Y(n, i)) || (Y(t, i) && Y(n, e))) ||
      (0 < G(t, e, n) != 0 < G(t, e, i) && 0 < G(n, i, t) != 0 < G(n, i, e))
    );
  }
  function Q(t, e) {
    return G(t.prev, t, t.next) < 0
      ? 0 <= G(t, e, t.next) && 0 <= G(t, t.prev, e)
      : G(t, e, t.prev) < 0 || G(t, t.next, e) < 0;
  }
  function X(t, e) {
    var n = new et(t.i, t.x, t.y),
      i = new et(e.i, e.x, e.y),
      o = t.next,
      a = e.prev;
    return (
      ((t.next = e).prev = t),
      ((n.next = o).prev = n),
      ((i.next = n).prev = i),
      ((a.next = i).prev = a),
      i
    );
  }
  function K(t, e, n, i) {
    var o = new et(t, e, n);
    return (
      i
        ? ((o.next = i.next), ((o.prev = i).next.prev = o), (i.next = o))
        : ((o.prev = o).next = o),
      o
    );
  }
  function tt(t) {
    (t.next.prev = t.prev),
      (t.prev.next = t.next),
      t.prevZ && (t.prevZ.nextZ = t.nextZ),
      t.nextZ && (t.nextZ.prevZ = t.prevZ);
  }
  function et(t, e, n) {
    (this.i = t),
      (this.x = e),
      (this.y = n),
      (this.prev = null),
      (this.next = null),
      (this.z = null),
      (this.prevZ = null),
      (this.nextZ = null),
      (this.steiner = !1);
  }
  function nt(t, e, n, i) {
    for (var o = 0, a = e, r = n - i; a < n; a += i)
      (o += (t[r] - t[a]) * (t[a + 1] + t[r + 1])), (r = a);
    return o;
  }
  (O.deviation = function(t, e, n, i) {
    var o = e && e.length,
      a = o ? e[0] * n : t.length,
      r = Math.abs(nt(t, 0, a, n));
    if (o)
      for (var s = 0, h = e.length; s < h; s++) {
        var l = e[s] * n,
          u = s < h - 1 ? e[s + 1] * n : t.length;
        r -= Math.abs(nt(t, l, u, n));
      }
    var c = 0;
    for (s = 0; s < i.length; s += 3) {
      var v = i[s] * n,
        p = i[s + 1] * n,
        d = i[s + 2] * n;
      c += Math.abs(
        (t[v] - t[d]) * (t[1 + p] - t[1 + v]) -
          (t[v] - t[p]) * (t[1 + d] - t[1 + v])
      );
    }
    return 0 === r && 0 === c ? 0 : Math.abs((c - r) / r);
  }),
    (O.flatten = function(t) {
      for (
        var e = t[0][0].length,
          n = { vertices: [], holes: [], dimensions: e },
          i = 0,
          o = 0;
        o < t.length;
        o++
      ) {
        for (var a = 0; a < t[o].length; a++)
          for (var r = 0; r < e; r++) n.vertices.push(t[o][a][r]);
        0 < o && ((i += t[o - 1].length), n.holes.push(i));
      }
      return n;
    });
  var it = [
      "attribute vec4 a_Position;",
      "void main() {",
      "gl_Position = a_Position;",
      "gl_PointSize = 30.0;",
      "}"
    ].join(""),
    ot = [
      "precision mediump float;",
      "uniform vec4 u_FragColor;",
      "void main() {",
      "gl_FragColor = u_FragColor;",
      "}"
    ].join("");
  var at = {
      draw: function(t, e, n) {
        if (e) {
          t.clear(t.COLOR_BUFFER_BIT),
            t.viewport(0, 0, t.canvas.width, t.canvas.height);
          var i = k(t, it, ot);
          t.enable(t.BLEND), t.blendFunc(t.SRC_ALPHA, t.ONE);
          var o = t.canvas.width / 2,
            a = t.canvas.height / 2;
          t.bindBuffer(t.ARRAY_BUFFER, t.createBuffer()),
            t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, t.createBuffer());
          var r = t.getAttribLocation(i, "a_Position");
          t.vertexAttribPointer(r, 2, t.FLOAT, !1, 0, 0),
            t.enableVertexAttribArray(r);
          var s = t.getUniformLocation(i, "u_FragColor"),
            h = E(n.fillStyle || "red");
          t.uniform4f(s, h[0] / 255, h[1] / 255, h[2] / 255, h[3] / 255),
            t.lineWidth(n.lineWidth || 1);
          for (var l = [], u = [], c = 0, v = 0, p = e.length; v < p; v++) {
            var d = O.flatten(
                e[v].geometry._coordinates || e[v].geometry.coordinates
              ),
              g = d.vertices;
            c = l.length / 2;
            for (var f = 0; f < g.length; f += 2)
              (g[f] = (g[f] - o) / o), (g[f + 1] = (a - g[f + 1]) / a);
            65536 < (l.length + g.length) / 2 &&
              (t.bufferData(t.ARRAY_BUFFER, new Float32Array(l), t.STATIC_DRAW),
              t.bufferData(
                t.ELEMENT_ARRAY_BUFFER,
                new Uint16Array(u),
                t.STATIC_DRAW
              ),
              t.drawElements(t.TRIANGLES, u.length, t.UNSIGNED_SHORT, 0),
              (l.length = 0),
              (c = u.length = 0));
            for (f = 0; f < g.length; f++) l.push(g[f]);
            var y = O(g, d.holes, d.dimensions);
            for (f = 0; f < y.length; f++) u.push(y[f] + c);
          }
          t.bufferData(t.ARRAY_BUFFER, new Float32Array(l), t.STATIC_DRAW),
            t.bufferData(
              t.ELEMENT_ARRAY_BUFFER,
              new Uint16Array(u),
              t.STATIC_DRAW
            ),
            t.drawElements(t.TRIANGLES, u.length, t.UNSIGNED_SHORT, 0),
            t.bindBuffer(t.ARRAY_BUFFER, null),
            t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, null);
        }
      }
    },
    rt = {
      draw: function(t, e, n) {
        var i = e instanceof I ? e.get() : e;
        0 < i.length &&
          ("LineString" == i[0].geometry.type
            ? M.draw(t, i, n)
            : "Polygon" == i[0].geometry.type ||
              "MultiPolygon" == i[0].geometry.type
            ? at.draw(t, i, n)
            : R.draw(t, i, n));
      }
    };
  function st(t, e, n) {
    if (!t || !e) return null;
    function i(t) {
      return 1 - 2 * t + t * t;
    }
    function o(t) {
      return 2 * t - 2 * t * t;
    }
    function a(t) {
      return t * t;
    }
    var r,
      s,
      h,
      l,
      u,
      c,
      v = [],
      p = ((n = n || 40), 0),
      d = 0;
    if (void 0 !== e) {
      var g = parseFloat(t.lat),
        f = parseFloat(e.lat),
        y = parseFloat(t.lng),
        m = parseFloat(e.lng);
      for (
        y < m &&
          180 < parseFloat(m - y) &&
          y < 0 &&
          ((y = parseFloat(360 + y)), (m = parseFloat(360 + m))),
          c = 0,
          s =
            f == g
              ? ((r = 0), y - m)
              : m == y
              ? ((r = Math.PI / 2), g - f)
              : ((r = Math.atan((f - g) / (m - y))), (f - g) / Math.sin(r)),
          0 == c && (c = r + Math.PI / 5),
          u = (h = s / 2) * Math.cos(c) + y,
          l = h * Math.sin(c) + g,
          p = 0;
        p < n + 1;
        p++
      ) {
        var x = y * i(d) + u * o(d) + m * a(d),
          _ = g * i(d) + l * o(d) + f * a(d),
          w = t.lng,
          b = e.lng;
        v.push([w < 0 && 0 < b ? x - 360 : x, _]), (d += 1 / n);
      }
      return v;
    }
    void 0 !== v && (v = []);
  }
  var ht = {
    getPoints: function(t, e) {
      e = e || {};
      for (var n = [], i = 0; i < t.length - 1; i++) {
        var o = st(t[i], t[i + 1], e.count);
        o && 0 < o.length && (n = n.concat(o));
      }
      return n;
    }
  };
  function lt(t) {
    this.splitList = t || { other: 1 };
  }
  function ut(t) {
    this.splitList = t || [{ start: 0, value: "red" }];
  }
  (lt.prototype.get = function(t) {
    var e = this.splitList,
      n = e.other;
    for (var i in e)
      if (t == i) {
        n = e[i];
        break;
      }
    return n;
  }),
    (lt.prototype.generateByDataSet = function(t, e) {
      var n = e || [
          "rgba(255, 255, 0, 0.8)",
          "rgba(253, 98, 104, 0.8)",
          "rgba(255, 146, 149, 0.8)",
          "rgba(255, 241, 193, 0.8)",
          "rgba(110, 176, 253, 0.8)",
          "rgba(52, 139, 251, 0.8)",
          "rgba(17, 102, 252, 0.8)"
        ],
        i = t.get();
      this.splitList = {};
      for (
        var o = 0, a = 0;
        a < i.length &&
        (void 0 === this.splitList[i[a].count] &&
          ((this.splitList[i[a].count] = n[o]), o++),
        !(n.length - 1 <= o));
        a++
      );
      this.splitList.other = n[n.length - 1];
    }),
    (lt.prototype.getLegend = function(t) {
      var e = this.splitList,
        n = document.createElement("div");
      n.style.cssText =
        "background:#fff; padding: 5px; border: 1px solid #ccc;";
      var i = "";
      for (var o in e)
        i +=
          '<div style="line-height: 19px;" value="' +
          o +
          '"><span style="vertical-align: -2px; display: inline-block; width: 30px;height: 19px;background:' +
          e[o] +
          ';"></span><span style="margin-left: 3px;">' +
          o +
          "<span></div>";
      return (n.innerHTML = i), n;
    }),
    (ut.prototype.get = function(t) {
      for (var e = this.splitList, n = !1, i = 0; i < e.length; i++)
        if (
          (void 0 === e[i].start ||
            (void 0 !== e[i].start && t >= e[i].start)) &&
          (void 0 === e[i].end || (void 0 !== e[i].end && t < e[i].end))
        ) {
          n = e[i].value;
          break;
        }
      return n;
    }),
    (ut.prototype.generateByDataSet = function(t) {
      var e = t.getMin("count"),
        n = t.getMax("count");
      this.generateByMinMax(e, n);
    }),
    (ut.prototype.generateByMinMax = function(t, e) {
      var n = [
          "rgba(255, 255, 0, 0.8)",
          "rgba(253, 98, 104, 0.8)",
          "rgba(255, 146, 149, 0.8)",
          "rgba(255, 241, 193, 0.8)",
          "rgba(110, 176, 253, 0.8)",
          "rgba(52, 139, 251, 0.8)",
          "rgba(17, 102, 252, 0.8)"
        ],
        i = Number((e - t) / 7);
      e = Number(e);
      var o = Number(t);
      this.splitList = [];
      for (var a = 0; o < e; )
        this.splitList.push({ start: o, end: o + i, value: n[a] }),
          a++,
          (o += i);
    }),
    (ut.prototype.getLegend = function(t) {
      this.splitList;
    });
  var ct =
    (e(vt, [
      {
        key: "addLayer",
        value: function(t, e) {
          if ("baidu" == this.type)
            return new mapv.baiduMapLayer(this.map, dataSet, e);
        }
      },
      {
        key: "getMap",
        value: function() {
          return this.map;
        }
      }
    ]),
    vt);
  function vt(t, e, n) {
    if ((s(this, vt), !t || !e)) return console.warn("id 和 type 为必填项"), !1;
    if ("baidu" == e) {
      if (!BMap) return console.warn("请先引入百度地图JS API"), !1;
    } else console.warn("暂不支持你的地图类型");
    this.type = e;
    var i = n && n.center ? n.center : [106.962497, 38.208726],
      o = n && n.zoom ? n.zoom : 5,
      a = (this.map = new BMap.Map(t, { enableMapClick: !1 }));
    a.centerAndZoom(new BMap.Point(i[0], i[1]), o),
      a.enableScrollWheelZoom(!0),
      a.setMapStyle({ style: "light" });
  }
  function pt(t) {
    (this.options = t || {}),
      (this.paneName = this.options.paneName || "mapPane"),
      (this.context = this.options.context || "2d"),
      (this.zIndex = this.options.zIndex || 0),
      (this.mixBlendMode = this.options.mixBlendMode || null),
      (this.enableMassClear = this.options.enableMassClear),
      (this._map = t.map),
      (this._lastDrawTime = null),
      this.show();
  }
  var dt = "undefined" == typeof window ? {} : window,
    gt = dt.BMap || dt.BMapGL;
  gt &&
    (((pt.prototype = new gt.Overlay()).initialize = function(t) {
      this._map = t;
      var e = (this.canvas = document.createElement("canvas"));
      (e.style.cssText =
        "position:absolute;left:0;top:0;z-index:" +
        this.zIndex +
        ";user-select:none;"),
        (e.style.mixBlendMode = this.mixBlendMode),
        this.adjustSize();
      var n = t.getPanes()[this.paneName];
      (n = n || t.getPanes().floatShadow).appendChild(e);
      var i = this;
      return (
        t.addEventListener("resize", function() {
          i.adjustSize(), i._draw();
        }),
        t.addEventListener("update", function() {
          i._draw();
        }),
        this.options.updateImmediate &&
          setTimeout(function() {
            i._draw();
          }, 100),
        this.canvas
      );
    }),
    (pt.prototype.adjustSize = function() {
      var t = this._map.getSize(),
        e = this.canvas,
        n = (this.devicePixelRatio = dt.devicePixelRatio || 1);
      (e.width = t.width * n),
        (e.height = t.height * n),
        "2d" == this.context && e.getContext(this.context).scale(n, n),
        (e.style.width = t.width + "px"),
        (e.style.height = t.height + "px");
    }),
    (pt.prototype.draw = function() {
      var t = this;
      this.options.updateImmediate
        ? t._draw()
        : (clearTimeout(t.timeoutID),
          (t.timeoutID = setTimeout(function() {
            t._draw();
          }, 15)));
    }),
    (pt.prototype._draw = function() {
      var t = this._map,
        e = t.getSize(),
        n = t.getCenter();
      if (n) {
        var i = t.pointToOverlayPixel(n);
        (this.canvas.style.left = i.x - e.width / 2 + "px"),
          (this.canvas.style.top = i.y - e.height / 2 + "px"),
          this.dispatchEvent("draw"),
          this.options.update && this.options.update.call(this);
      }
    }),
    (pt.prototype.getContainer = function() {
      return this.canvas;
    }),
    (pt.prototype.show = function() {
      this.canvas || this._map.addOverlay(this),
        (this.canvas.style.display = "block");
    }),
    (pt.prototype.hide = function() {
      this.canvas.style.display = "none";
    }),
    (pt.prototype.setZIndex = function(t) {
      (this.zIndex = t), (this.canvas.style.zIndex = this.zIndex);
    }),
    (pt.prototype.getZIndex = function() {
      return this.zIndex;
    }));
  var ft,
    yt,
    mt =
      mt ||
      ((ft = []),
      {
        getAll: function() {
          return ft;
        },
        removeAll: function() {
          ft = [];
        },
        add: function(t) {
          ft.push(t);
        },
        remove: function(t) {
          var e = ft.indexOf(t);
          -1 !== e && ft.splice(e, 1);
        },
        update: function(t, e) {
          if (0 === ft.length) return !1;
          var n = 0;
          for (t = void 0 !== t ? t : mt.now(); n < ft.length; )
            ft[n].update(t) || e ? n++ : ft.splice(n, 1);
          return !0;
        }
      });
  "undefined" == typeof window && "undefined" != typeof process
    ? (mt.now = function() {
        var t = process.hrtime();
        return 1e3 * t[0] + t[1] / 1e6;
      })
    : "undefined" != typeof window &&
      void 0 !== window.performance &&
      void 0 !== window.performance.now
    ? (mt.now = window.performance.now.bind(window.performance))
    : void 0 !== Date.now
    ? (mt.now = Date.now)
    : (mt.now = function() {
        return new Date().getTime();
      }),
    (mt.Tween = function(t) {
      var l,
        u = t,
        c = {},
        v = {},
        p = {},
        d = 1e3,
        g = 0,
        f = !1,
        n = !1,
        y = !1,
        m = 0,
        x = null,
        _ = mt.Easing.Linear.None,
        w = mt.Interpolation.Linear,
        b = [],
        k = null,
        L = !1,
        E = null,
        S = null,
        e = null;
      (this.to = function(t, e) {
        return (v = t), void 0 !== e && (d = e), this;
      }),
        (this.start = function(t) {
          for (var e in (mt.add(this),
          (L = !(n = !0)),
          (x = void 0 !== t ? t : mt.now()),
          (x += m),
          v)) {
            if (v[e] instanceof Array) {
              if (0 === v[e].length) continue;
              v[e] = [u[e]].concat(v[e]);
            }
            void 0 !== u[e] &&
              ((c[e] = u[e]),
              c[e] instanceof Array == !1 && (c[e] *= 1),
              (p[e] = c[e] || 0));
          }
          return this;
        }),
        (this.stop = function() {
          return (
            n &&
              (mt.remove(this),
              (n = !1),
              null !== e && e.call(u, u),
              this.stopChainedTweens()),
            this
          );
        }),
        (this.end = function() {
          return this.update(x + d), this;
        }),
        (this.stopChainedTweens = function() {
          for (var t = 0, e = b.length; t < e; t++) b[t].stop();
        }),
        (this.delay = function(t) {
          return (m = t), this;
        }),
        (this.repeat = function(t) {
          return (g = t), this;
        }),
        (this.repeatDelay = function(t) {
          return (l = t), this;
        }),
        (this.yoyo = function(t) {
          return (f = t), this;
        }),
        (this.easing = function(t) {
          return (_ = t), this;
        }),
        (this.interpolation = function(t) {
          return (w = t), this;
        }),
        (this.chain = function() {
          return (b = arguments), this;
        }),
        (this.onStart = function(t) {
          return (k = t), this;
        }),
        (this.onUpdate = function(t) {
          return (E = t), this;
        }),
        (this.onComplete = function(t) {
          return (S = t), this;
        }),
        (this.onStop = function(t) {
          return (e = t), this;
        }),
        (this.update = function(t) {
          var e, n, i;
          if (t < x) return !0;
          for (e in (!1 === L && (null !== k && k.call(u, u), (L = !0)),
          (i = _((n = 1 < (n = (t - x) / d) ? 1 : n))),
          v))
            if (void 0 !== c[e]) {
              var o = c[e] || 0,
                a = v[e];
              a instanceof Array
                ? (u[e] = w(a, i))
                : ("string" == typeof a &&
                    (a =
                      "+" === a.charAt(0) || "-" === a.charAt(0)
                        ? o + parseFloat(a)
                        : parseFloat(a)),
                  "number" == typeof a && (u[e] = o + (a - o) * i));
            }
          if ((null !== E && E.call(u, i), 1 !== n)) return !0;
          if (0 < g) {
            for (e in (isFinite(g) && g--, p)) {
              if (
                ("string" == typeof v[e] && (p[e] = p[e] + parseFloat(v[e])), f)
              ) {
                var r = p[e];
                (p[e] = v[e]), (v[e] = r);
              }
              c[e] = p[e];
            }
            return f && (y = !y), (x = void 0 !== l ? t + l : t + m), !0;
          }
          null !== S && S.call(u, u);
          for (var s = 0, h = b.length; s < h; s++) b[s].start(x + d);
          return !1;
        });
    }),
    (mt.Easing = {
      Linear: {
        None: function(t) {
          return t;
        }
      },
      Quadratic: {
        In: function(t) {
          return t * t;
        },
        Out: function(t) {
          return t * (2 - t);
        },
        InOut: function(t) {
          return (t *= 2) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1);
        }
      },
      Cubic: {
        In: function(t) {
          return t * t * t;
        },
        Out: function(t) {
          return --t * t * t + 1;
        },
        InOut: function(t) {
          return (t *= 2) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2);
        }
      },
      Quartic: {
        In: function(t) {
          return t * t * t * t;
        },
        Out: function(t) {
          return 1 - --t * t * t * t;
        },
        InOut: function(t) {
          return (t *= 2) < 1
            ? 0.5 * t * t * t * t
            : -0.5 * ((t -= 2) * t * t * t - 2);
        }
      },
      Quintic: {
        In: function(t) {
          return t * t * t * t * t;
        },
        Out: function(t) {
          return --t * t * t * t * t + 1;
        },
        InOut: function(t) {
          return (t *= 2) < 1
            ? 0.5 * t * t * t * t * t
            : 0.5 * ((t -= 2) * t * t * t * t + 2);
        }
      },
      Sinusoidal: {
        In: function(t) {
          return 1 - Math.cos((t * Math.PI) / 2);
        },
        Out: function(t) {
          return Math.sin((t * Math.PI) / 2);
        },
        InOut: function(t) {
          return 0.5 * (1 - Math.cos(Math.PI * t));
        }
      },
      Exponential: {
        In: function(t) {
          return 0 === t ? 0 : Math.pow(1024, t - 1);
        },
        Out: function(t) {
          return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
        },
        InOut: function(t) {
          return 0 === t
            ? 0
            : 1 === t
            ? 1
            : (t *= 2) < 1
            ? 0.5 * Math.pow(1024, t - 1)
            : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
        }
      },
      Circular: {
        In: function(t) {
          return 1 - Math.sqrt(1 - t * t);
        },
        Out: function(t) {
          return Math.sqrt(1 - --t * t);
        },
        InOut: function(t) {
          return (t *= 2) < 1
            ? -0.5 * (Math.sqrt(1 - t * t) - 1)
            : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
        }
      },
      Elastic: {
        In: function(t) {
          return 0 === t
            ? 0
            : 1 === t
            ? 1
            : -Math.pow(2, 10 * (t - 1)) * Math.sin(5 * (t - 1.1) * Math.PI);
        },
        Out: function(t) {
          return 0 === t
            ? 0
            : 1 === t
            ? 1
            : Math.pow(2, -10 * t) * Math.sin(5 * (t - 0.1) * Math.PI) + 1;
        },
        InOut: function(t) {
          return 0 === t
            ? 0
            : 1 === t
            ? 1
            : (t *= 2) < 1
            ? -0.5 *
              Math.pow(2, 10 * (t - 1)) *
              Math.sin(5 * (t - 1.1) * Math.PI)
            : 0.5 *
                Math.pow(2, -10 * (t - 1)) *
                Math.sin(5 * (t - 1.1) * Math.PI) +
              1;
        }
      },
      Back: {
        In: function(t) {
          return t * t * (2.70158 * t - 1.70158);
        },
        Out: function(t) {
          return --t * t * (2.70158 * t + 1.70158) + 1;
        },
        InOut: function(t) {
          var e = 2.5949095;
          return (t *= 2) < 1
            ? t * t * ((1 + e) * t - e) * 0.5
            : 0.5 * ((t -= 2) * t * ((1 + e) * t + e) + 2);
        }
      },
      Bounce: {
        In: function(t) {
          return 1 - mt.Easing.Bounce.Out(1 - t);
        },
        Out: function(t) {
          return t < 1 / 2.75
            ? 7.5625 * t * t
            : t < 2 / 2.75
            ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
            : t < 2.5 / 2.75
            ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
            : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
        },
        InOut: function(t) {
          return t < 0.5
            ? 0.5 * mt.Easing.Bounce.In(2 * t)
            : 0.5 * mt.Easing.Bounce.Out(2 * t - 1) + 0.5;
        }
      }
    }),
    (mt.Interpolation = {
      Linear: function(t, e) {
        var n = t.length - 1,
          i = n * e,
          o = Math.floor(i),
          a = mt.Interpolation.Utils.Linear;
        return e < 0
          ? a(t[0], t[1], i)
          : 1 < e
          ? a(t[n], t[n - 1], n - i)
          : a(t[o], t[n < o + 1 ? n : o + 1], i - o);
      },
      Bezier: function(t, e) {
        for (
          var n = 0,
            i = t.length - 1,
            o = Math.pow,
            a = mt.Interpolation.Utils.Bernstein,
            r = 0;
          r <= i;
          r++
        )
          n += o(1 - e, i - r) * o(e, r) * t[r] * a(i, r);
        return n;
      },
      CatmullRom: function(t, e) {
        var n = t.length - 1,
          i = n * e,
          o = Math.floor(i),
          a = mt.Interpolation.Utils.CatmullRom;
        return t[0] === t[n]
          ? (e < 0 && (o = Math.floor((i = n * (1 + e)))),
            a(t[(o - 1 + n) % n], t[o], t[(o + 1) % n], t[(o + 2) % n], i - o))
          : e < 0
          ? t[0] - (a(t[0], t[0], t[1], t[1], -i) - t[0])
          : 1 < e
          ? t[n] - (a(t[n], t[n], t[n - 1], t[n - 1], i - n) - t[n])
          : a(
              t[o ? o - 1 : 0],
              t[o],
              t[n < o + 1 ? n : o + 1],
              t[n < o + 2 ? n : o + 2],
              i - o
            );
      },
      Utils: {
        Linear: function(t, e, n) {
          return (e - t) * n + t;
        },
        Bernstein: function(t, e) {
          var n = mt.Interpolation.Utils.Factorial;
          return n(t) / n(e) / n(t - e);
        },
        Factorial:
          ((yt = [1]),
          function(t) {
            var e = 1;
            if (yt[t]) return yt[t];
            for (var n = t; 1 < n; n--) e *= n;
            return (yt[t] = e);
          }),
        CatmullRom: function(t, e, n, i, o) {
          var a = 0.5 * (n - t),
            r = 0.5 * (i - e),
            s = o * o;
          return (
            (2 * e - 2 * n + a + r) * (o * s) +
            (-3 * e + 3 * n - 2 * a - r) * s +
            a * o +
            e
          );
        }
      }
    });
  var xt = {},
    _t = {
      draw: function(t, e, n) {
        var i =
          "http://huiyan.baidu.com/github/tools/gis-drawing/static/images/direction.png";
        n.arrow && n.arrow.url && (i = n.arrow.url), xt[i] || (xt[i] = null);
        var o = xt[i];
        if (!o) {
          var a = Array.prototype.slice.call(arguments),
            r = new Image();
          return (
            (r.onload = function() {
              (xt[i] = r), _t.draw.apply(null, a);
            }),
            void (r.src = i)
          );
        }
        var s = e instanceof I ? e.get() : e;
        for (var h in (t.save(), n)) t[h] = n[h];
        for (
          var l, u, c, v, p, d, g, f = [], y = null, m = 0, x = s.length;
          m < x;
          m++
        ) {
          var _ = s[m];
          t.save(),
            (_.fillStyle || _._fillStyle) &&
              (t.fillStyle = _.fillStyle || _._fillStyle),
            (_.strokeStyle || _._strokeStyle) &&
              (t.strokeStyle = _.strokeStyle || _._strokeStyle);
          var w = _.geometry.type;
          if ((t.beginPath(), "LineString" === w))
            for (
              var b = _.geometry._coordinates || _.geometry.coordinates,
                k = void 0 !== n.arrow.interval ? n.arrow.interval : 1,
                L = 0;
              L < b.length;
              L += k
            )
              if (b[L] && b[L + 1]) {
                var E = b[L];
                if (
                  y &&
                  ((d = E),
                  (g = y),
                  Math.sqrt(
                    Math.pow(d[0] - g[0], 2) + Math.pow(d[1] - g[1], 2)
                  ) < 30)
                )
                  continue;
                t.save();
                var S =
                  ((l = b[L]),
                  (u = b[L + 1]),
                  (p = void 0),
                  (c = u[0] - l[0]),
                  (v = u[1] - l[1]),
                  (p = (360 * Math.atan(v / c)) / (2 * Math.PI)),
                  u[0] < l[0] && (p += 180),
                  p);
                t.translate(E[0], E[1]),
                  t.rotate((S * Math.PI) / 180),
                  t.drawImage(
                    o,
                    -o.width / 2 / 2,
                    -o.height / 2 / 2,
                    o.width / 2,
                    o.height / 2
                  ),
                  t.restore(),
                  f.push(E),
                  (y = E);
              }
          t.restore();
        }
        t.restore();
      }
    };
  var wt = function(t, e, n) {
      var i = e instanceof I ? e.get() : e;
      t.save(),
        (t.fillStyle = n.fillStyle || "rgba(0, 0, 0, 0.5)"),
        t.fillRect(0, 0, t.canvas.width, t.canvas.height),
        (n.multiPolygonDraw = function() {
          t.save(), t.clip(), m(t), t.restore();
        });
      for (var o = 0, a = i.length; o < a; o++)
        t.beginPath(),
          x.drawDataSet(t, [i[o]], n),
          t.save(),
          t.clip(),
          m(t),
          t.restore();
      t.restore();
    },
    bt = function(t, e, n) {
      t.save();
      for (
        var i, o, a = e instanceof I ? e.get() : e, r = 0;
        r < a.length;
        r++
      ) {
        (h = a[r]).properties &&
          h.properties.cluster &&
          (void 0 === i && (i = h.properties.point_count),
          void 0 === o && (o = h.properties.point_count),
          (i = Math.max(i, h.properties.point_count)),
          (o = Math.min(o, h.properties.point_count)));
      }
      var s = new D({
        min: o,
        max: i,
        minSize: n.minSize || 8,
        maxSize: n.maxSize || 30,
        gradient: n.gradient
      });
      for (r = 0; r < a.length; r++) {
        var h = a[r],
          l = a[r].geometry._coordinates || a[r].geometry.coordinates;
        if ((t.beginPath(), h.properties && h.properties.cluster)) {
          if (
            (t.arc(
              l[0],
              l[1],
              s.getSize(h.properties.point_count),
              0,
              2 * Math.PI
            ),
            (t.fillStyle = s.getColor(h.properties.point_count)),
            t.fill(),
            n.label && !1 !== n.label.show)
          ) {
            (t.fillStyle = n.label.fillStyle || "white"),
              n.label.font && (t.font = n.label.font),
              n.label.shadowColor && (t.shadowColor = n.label.shadowColor),
              n.label.shadowBlur && (t.shadowBlur = n.label.shadowBlur);
            var u = h.properties.point_count,
              c = t.measureText(u).width;
            t.fillText(u, l[0] + 0.5 - c / 2, l[1] + 0.5 + 3);
          }
        } else
          t.arc(l[0], l[1], n.size || 5, 0, 2 * Math.PI),
            (t.fillStyle = n.fillStyle || "red"),
            t.fill();
      }
      t.restore();
    },
    kt = function(t, e, n) {
      var i = e instanceof I ? e.get() : e;
      for (var o in (t.save(), n)) t[o] = n[o];
      var a = [],
        r = n._size || n.size;
      r ? (t.font = "bold " + r + "px Arial") : (r = 12);
      var s = n.textKey || "text";
      if (
        (n.textAlign || (t.textAlign = "center"),
        n.textBaseline || (t.textBaseline = "middle"),
        n.avoid)
      )
        for (var h = 0, l = i.length; h < l; h++) {
          var u = i[h].offset || n.offset || { x: 0, y: 0 },
            c =
              (m = i[h].geometry._coordinates || i[h].geometry.coordinates)[0] +
              u.x,
            v = m[1] + u.y,
            p = i[h][s],
            d = t.measureText(p).width,
            g = c - d / 2,
            f = v - r / 2,
            y = { sw: { x: g, y: f + r }, ne: { x: g + d, y: f } };
          Lt(a, y) ||
            (a.push(y), (g += d / 2), (f += r / 2), t.fillText(p, g, f));
        }
      else
        for (h = 0, l = i.length; h < l; h++) {
          var m;
          (u = i[h].offset || n.offset || { x: 0, y: 0 }),
            (c =
              (m = i[h].geometry._coordinates || i[h].geometry.coordinates)[0] +
              u.x),
            (v = m[1] + u.y),
            (p = i[h][s]);
          t.fillText(p, c, v);
        }
      t.restore();
    };
  function Lt(t, e) {
    for (var n = 0; n < t.length; n++) if (Et(t[n], e)) return !0;
    return !1;
  }
  function Et(t, e) {
    var n = Math.min(t.ne.x, e.ne.x),
      i = Math.min(t.sw.y, e.sw.y),
      o = Math.max(t.sw.x, e.sw.x),
      a = Math.max(t.ne.y, e.ne.y);
    return o < n && a < i;
  }
  var St = function(t, e, n) {
    var i = e instanceof I ? e.get() : e;
    (t.fillStyle = "white"),
      (t.textAlign = "center"),
      (t.textBaseline = "middle");
    for (var o = n.offset || { x: 0, y: 0 }, a = 0, r = i.length; a < r; a++)
      if (i[a].geometry) {
        var s = i[a].deg || n.deg,
          h = i[a].icon || n.icon,
          l = i[a].geometry._coordinates || i[a].geometry.coordinates,
          u = l[0],
          c = l[1];
        s &&
          (t.save(),
          t.translate(u, c),
          t.rotate((s * Math.PI) / 180),
          t.translate(-u, -c));
        var v = n._width || n.width || h.width,
          p = n._height || n.height || h.height;
        (u = u - v / 2 + o.x),
          (c = c - p / 2 + o.y),
          n.sx && n.sy && n.swidth && n.sheight && n.width && n.height
            ? t.drawImage(h, n.sx, n.sy, n.swidth, n.sheight, u, c, v, p)
            : n.width && n.height
            ? t.drawImage(h, u, c, v, p)
            : t.drawImage(h, u, c),
          s && t.restore();
      }
  };
  function Ct(t, e, n, i, o, a) {
    if (!(o - i <= n)) {
      var r = (i + o) >> 1;
      !(function t(e, n, i, o, a, r) {
        for (; o < a; ) {
          if (600 < a - o) {
            var s = a - o + 1,
              h = i - o + 1,
              l = Math.log(s),
              u = 0.5 * Math.exp((2 * l) / 3),
              c =
                0.5 *
                Math.sqrt((l * u * (s - u)) / s) *
                (h - s / 2 < 0 ? -1 : 1),
              v = Math.max(o, Math.floor(i - (h * u) / s + c)),
              p = Math.min(a, Math.floor(i + ((s - h) * u) / s + c));
            t(e, n, i, v, p, r);
          }
          var d = n[2 * i + r],
            g = o,
            f = a;
          for (Mt(e, n, o, i), n[2 * a + r] > d && Mt(e, n, o, a); g < f; ) {
            for (Mt(e, n, g, f), g++, f--; n[2 * g + r] < d; ) g++;
            for (; n[2 * f + r] > d; ) f--;
          }
          n[2 * o + r] === d ? Mt(e, n, o, f) : Mt(e, n, ++f, a),
            f <= i && (o = f + 1),
            i <= f && (a = f - 1);
        }
      })(t, e, r, i, o, a % 2),
        Ct(t, e, n, i, r - 1, a + 1),
        Ct(t, e, n, 1 + r, o, a + 1);
    }
  }
  function Mt(t, e, n, i) {
    Pt(t, n, i), Pt(e, 2 * n, 2 * i), Pt(e, 2 * n + 1, 2 * i + 1);
  }
  function Pt(t, e, n) {
    var i = t[e];
    (t[e] = t[n]), (t[n] = i);
  }
  function zt(t, e, n, i) {
    var o = t - n,
      a = e - i;
    return o * o + a * a;
  }
  function At(t) {
    return t[0];
  }
  function Rt(t) {
    return t[1];
  }
  function Ot(t, e, n, i, o) {
    void 0 === e && (e = At),
      void 0 === n && (n = Rt),
      void 0 === i && (i = 64),
      void 0 === o && (o = Float64Array),
      (this.nodeSize = i);
    for (
      var a = (this.points = t).length < 65536 ? Uint16Array : Uint32Array,
        r = (this.ids = new a(t.length)),
        s = (this.coords = new o(2 * t.length)),
        h = 0;
      h < t.length;
      h++
    )
      (s[2 * (r[h] = h)] = e(t[h])), (s[2 * h + 1] = n(t[h]));
    Ct(r, s, i, 0, r.length - 1, 0);
  }
  Ot.prototype.range = function(t, e, n, i) {
    return (function(t, e, n, i, o, a, r) {
      for (var s, h, l = [0, t.length - 1, 0], u = []; l.length; ) {
        var c = l.pop(),
          v = l.pop(),
          p = l.pop();
        if (v - p <= r)
          for (var d = p; d <= v; d++)
            (s = e[2 * d]),
              (h = e[2 * d + 1]),
              n <= s && s <= o && i <= h && h <= a && u.push(t[d]);
        else {
          var g = Math.floor((p + v) / 2);
          (s = e[2 * g]),
            (h = e[2 * g + 1]),
            n <= s && s <= o && i <= h && h <= a && u.push(t[g]);
          var f = (c + 1) % 2;
          (0 === c ? n <= s : i <= h) && (l.push(p), l.push(g - 1), l.push(f)),
            (0 === c ? s <= o : h <= a) &&
              (l.push(g + 1), l.push(v), l.push(f));
        }
      }
      return u;
    })(this.ids, this.coords, t, e, n, i, this.nodeSize);
  };
  function Tt(t) {
    (this.options = Zt(Object.create(It), t)),
      (this.trees = new Array(this.options.maxZoom + 1));
  }
  var It = {
    minZoom: 0,
    maxZoom: 16,
    radius: 40,
    extent: 512,
    nodeSize: 64,
    log: !(Ot.prototype.within = function(t, e, n) {
      return (function(t, e, n, i, o, a) {
        for (var r = [0, t.length - 1, 0], s = [], h = o * o; r.length; ) {
          var l = r.pop(),
            u = r.pop(),
            c = r.pop();
          if (u - c <= a)
            for (var v = c; v <= u; v++)
              zt(e[2 * v], e[2 * v + 1], n, i) <= h && s.push(t[v]);
          else {
            var p = Math.floor((c + u) / 2),
              d = e[2 * p],
              g = e[2 * p + 1];
            zt(d, g, n, i) <= h && s.push(t[p]);
            var f = (l + 1) % 2;
            (0 === l ? n - o <= d : i - o <= g) &&
              (r.push(c), r.push(p - 1), r.push(f)),
              (0 === l ? d <= n + o : g <= i + o) &&
                (r.push(p + 1), r.push(u), r.push(f));
          }
        }
        return s;
      })(this.ids, this.coords, t, e, n, this.nodeSize);
    }),
    reduce: null,
    map: function(t) {
      return t;
    }
  };
  function Dt(t) {
    return {
      type: "Feature",
      id: t.id,
      properties: Ft(t),
      geometry: {
        type: "Point",
        coordinates: [
          360 * (t.x - 0.5),
          ((e = t.y),
          (n = ((180 - 360 * e) * Math.PI) / 180),
          (360 * Math.atan(Math.exp(n))) / Math.PI - 90)
        ]
      }
    };
    var e, n;
  }
  function Ft(t) {
    var e = t.numPoints,
      n =
        1e4 <= e
          ? Math.round(e / 1e3) + "k"
          : 1e3 <= e
          ? Math.round(e / 100) / 10 + "k"
          : e;
    return Zt(Zt({}, t.properties), {
      cluster: !0,
      cluster_id: t.id,
      point_count: e,
      point_count_abbreviated: n
    });
  }
  function Bt(t) {
    return t / 360 + 0.5;
  }
  function Ut(t) {
    var e = Math.sin((t * Math.PI) / 180),
      n = 0.5 - (0.25 * Math.log((1 + e) / (1 - e))) / Math.PI;
    return n < 0 ? 0 : 1 < n ? 1 : n;
  }
  function Zt(t, e) {
    for (var n in e) t[n] = e[n];
    return t;
  }
  function jt(t) {
    return t.x;
  }
  function Nt(t) {
    return t.y;
  }
  (Tt.prototype.load = function(t) {
    var e = this.options,
      n = (e.log, e.minZoom),
      i = e.maxZoom,
      o = e.nodeSize;
    t.length;
    this.points = t;
    for (var a, r, s, h, l, u = [], c = 0; c < t.length; c++)
      t[c].geometry &&
        u.push(
          ((a = t[c]),
          (r = c),
          void 0,
          (s = a.geometry.coordinates),
          (h = s[0]),
          (l = s[1]),
          { x: Bt(h), y: Ut(l), zoom: 1 / 0, index: r, parentId: -1 })
        );
    this.trees[i + 1] = new Ot(u, jt, Nt, o, Float32Array);
    for (var v = i; n <= v; v--) {
      Date.now();
      (u = this._cluster(u, v)),
        (this.trees[v] = new Ot(u, jt, Nt, o, Float32Array));
    }
    return this;
  }),
    (Tt.prototype.getClusters = function(t, e) {
      var n = ((((t[0] + 180) % 360) + 360) % 360) - 180,
        i = Math.max(-90, Math.min(90, t[1])),
        o = 180 === t[2] ? 180 : ((((t[2] + 180) % 360) + 360) % 360) - 180,
        a = Math.max(-90, Math.min(90, t[3]));
      if (360 <= t[2] - t[0]) (n = -180), (o = 180);
      else if (o < n) {
        var r = this.getClusters([n, i, 180, a], e),
          s = this.getClusters([-180, i, o, a], e);
        return r.concat(s);
      }
      for (
        var h = this.trees[this._limitZoom(e)],
          l = [],
          u = 0,
          c = h.range(Bt(n), Ut(a), Bt(o), Ut(i));
        u < c.length;
        u += 1
      ) {
        var v = c[u],
          p = h.points[v];
        l.push(p.numPoints ? Dt(p) : this.points[p.index]);
      }
      return l;
    }),
    (Tt.prototype.getChildren = function(t) {
      var e = t >> 5,
        n = t % 32,
        i = "No cluster with the specified id.",
        o = this.trees[n];
      if (!o) throw new Error(i);
      var a = o.points[e];
      if (!a) throw new Error(i);
      for (
        var r =
            this.options.radius / (this.options.extent * Math.pow(2, n - 1)),
          s = [],
          h = 0,
          l = o.within(a.x, a.y, r);
        h < l.length;
        h += 1
      ) {
        var u = l[h],
          c = o.points[u];
        c.parentId === t && s.push(c.numPoints ? Dt(c) : this.points[c.index]);
      }
      if (0 === s.length) throw new Error(i);
      return s;
    }),
    (Tt.prototype.getLeaves = function(t, e, n) {
      (e = e || 10), (n = n || 0);
      var i = [];
      return this._appendLeaves(i, t, e, n, 0), i;
    }),
    (Tt.prototype.getTile = function(t, e, n) {
      var i = this.trees[this._limitZoom(t)],
        o = Math.pow(2, t),
        a = this.options,
        r = a.extent,
        s = a.radius / r,
        h = (n - s) / o,
        l = (n + 1 + s) / o,
        u = { features: [] };
      return (
        this._addTileFeatures(
          i.range((e - s) / o, h, (e + 1 + s) / o, l),
          i.points,
          e,
          n,
          o,
          u
        ),
        0 === e &&
          this._addTileFeatures(
            i.range(1 - s / o, h, 1, l),
            i.points,
            o,
            n,
            o,
            u
          ),
        e === o - 1 &&
          this._addTileFeatures(i.range(0, h, s / o, l), i.points, -1, n, o, u),
        u.features.length ? u : null
      );
    }),
    (Tt.prototype.getClusterExpansionZoom = function(t) {
      for (var e = (t % 32) - 1; e <= this.options.maxZoom; ) {
        var n = this.getChildren(t);
        if ((e++, 1 !== n.length)) break;
        t = n[0].properties.cluster_id;
      }
      return e;
    }),
    (Tt.prototype._appendLeaves = function(t, e, n, i, o) {
      for (var a = 0, r = this.getChildren(e); a < r.length; a += 1) {
        var s = r[a],
          h = s.properties;
        if (
          (h && h.cluster
            ? o + h.point_count <= i
              ? (o += h.point_count)
              : (o = this._appendLeaves(t, h.cluster_id, n, i, o))
            : o < i
            ? o++
            : t.push(s),
          t.length === n)
        )
          break;
      }
      return o;
    }),
    (Tt.prototype._addTileFeatures = function(t, e, n, i, o, a) {
      for (var r = 0, s = t; r < s.length; r += 1) {
        var h = e[s[r]],
          l = {
            type: 1,
            geometry: [
              [
                Math.round(this.options.extent * (h.x * o - n)),
                Math.round(this.options.extent * (h.y * o - i))
              ]
            ],
            tags: h.numPoints ? Ft(h) : this.points[h.index].properties
          },
          u = h.numPoints ? h.id : this.points[h.index].id;
        void 0 !== u && (l.id = u), a.features.push(l);
      }
    }),
    (Tt.prototype._limitZoom = function(t) {
      return Math.max(
        this.options.minZoom,
        Math.min(t, this.options.maxZoom + 1)
      );
    }),
    (Tt.prototype._cluster = function(t, e) {
      for (
        var n = [],
          i = this.options,
          o = i.radius,
          a = i.extent,
          r = i.reduce,
          s = o / (a * Math.pow(2, e)),
          h = 0;
        h < t.length;
        h++
      ) {
        var l = t[h];
        if (!(l.zoom <= e)) {
          l.zoom = e;
          for (
            var u = this.trees[e + 1],
              c = u.within(l.x, l.y, s),
              v = l.numPoints || 1,
              p = l.x * v,
              d = l.y * v,
              g = r && 1 < v ? this._map(l, !0) : null,
              f = (h << 5) + (e + 1),
              y = 0,
              m = c;
            y < m.length;
            y += 1
          ) {
            var x = m[y],
              _ = u.points[x];
            if (!(_.zoom <= e)) {
              _.zoom = e;
              var w = _.numPoints || 1;
              (p += _.x * w),
                (d += _.y * w),
                (v += w),
                (_.parentId = f),
                r && r((g = g || this._map(l, !0)), this._map(_));
            }
          }
          1 === v
            ? n.push(l)
            : ((l.parentId = f),
              n.push({
                x: p / v,
                y: d / v,
                zoom: 1 / 0,
                id: f,
                parentId: -1,
                numPoints: v,
                properties: g
              }));
        }
      }
      return n;
    }),
    (Tt.prototype._map = function(t, e) {
      if (t.numPoints) return e ? Zt({}, t.properties) : t.properties;
      var n = this.points[t.index].properties,
        i = this.options.map(n);
      return e && i === n ? Zt({}, i) : i;
    }),
    "undefined" != typeof window &&
      requestAnimationFrame(function t(e) {
        requestAnimationFrame(t);
        mt.update(e);
      });
  var Wt =
    (e(Ht, [
      {
        key: "getDefaultContextConfig",
        value: function() {
          return {
            globalAlpha: 1,
            globalCompositeOperation: "source-over",
            imageSmoothingEnabled: !0,
            strokeStyle: "#000000",
            fillStyle: "#000000",
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowBlur: 0,
            shadowColor: "rgba(0, 0, 0, 0)",
            lineWidth: 1,
            lineCap: "butt",
            lineJoin: "miter",
            miterLimit: 10,
            lineDashOffset: 0,
            font: "10px sans-serif",
            textAlign: "start",
            textBaseline: "alphabetic"
          };
        }
      },
      {
        key: "initDataRange",
        value: function() {
          var t = this;
          if (
            ((t.intensity = new D({
              maxSize: t.options.maxSize,
              minSize: t.options.minSize,
              gradient: t.options.gradient,
              max: t.options.max || this.dataSet.getMax("count")
            })),
            (t.category = new lt(t.options.splitList)),
            (t.choropleth = new ut(t.options.splitList)),
            void 0 === t.options.splitList &&
              t.category.generateByDataSet(this.dataSet, t.options.color),
            void 0 === t.options.splitList)
          ) {
            var e = t.options.min || this.dataSet.getMin("count"),
              n = t.options.max || this.dataSet.getMax("count");
            t.choropleth.generateByMinMax(e, n);
          }
        }
      },
      {
        key: "getLegend",
        value: function(t) {
          return (
            this.options.draw,
            "intensity" == this.options.draw || "heatmap" == this.options.draw
              ? this.intensity.getLegend(t)
              : "category" == this.options.draw
              ? this.category.getLegend(t)
              : void 0
          );
        }
      },
      {
        key: "processData",
        value: function(t) {
          var e = this,
            n = e.options.draw;
          if (
            "bubble" == n ||
            "intensity" == n ||
            "category" == n ||
            "choropleth" == n ||
            "simple" == n
          )
            for (var i = 0; i < t.length; i++) {
              var o = t[i];
              "bubble" == e.options.draw
                ? (t[i]._size = e.intensity.getSize(o.count))
                : (t[i]._size = void 0);
              var a = "_fillStyle";
              ("LineString" !== t[i].geometry.type &&
                "stroke" !== e.options.styleType) ||
                (a = "_strokeStyle"),
                "intensity" == e.options.draw
                  ? (t[i][a] = e.intensity.getColor(o.count))
                  : "category" == e.options.draw
                  ? (t[i][a] = e.category.get(o.count))
                  : "choropleth" == e.options.draw &&
                    (t[i][a] = e.choropleth.get(o.count));
            }
        }
      },
      {
        key: "isEnabledTime",
        value: function() {
          var t = this.options.animation;
          return t && !(!1 === t.enabled);
        }
      },
      {
        key: "argCheck",
        value: function(t) {
          "heatmap" == t.draw &&
            t.strokeStyle &&
            console.warn(
              "[heatmap] options.strokeStyle is discard, pleause use options.strength [eg: options.strength = 0.1]"
            );
        }
      },
      {
        key: "drawContext",
        value: function(t, e, n, i) {
          var o = this;
          switch (o.options.draw) {
            case "heatmap":
              d.draw(t, e, o.options);
              break;
            case "grid":
            case "cluster":
            case "honeycomb":
              (o.options.offset = { x: i.x, y: i.y }),
                "grid" === o.options.draw
                  ? g.draw(t, e, o.options)
                  : "cluster" === o.options.draw
                  ? bt(t, e, o.options)
                  : f.draw(t, e, o.options);
              break;
            case "text":
              kt(t, e, o.options);
              break;
            case "icon":
              St(t, e, o.options);
              break;
            case "clip":
              wt(t, e, o.options);
              break;
            default:
              "webgl" == o.options.context
                ? rt.draw(
                    o.canvasLayer.canvas.getContext("webgl"),
                    e,
                    o.options
                  )
                : c.draw(t, e, o.options);
          }
          o.options.arrow &&
            !1 !== o.options.arrow.show &&
            _t.draw(t, e, o.options);
        }
      },
      {
        key: "isPointInPath",
        value: function(t, e) {
          var n;
          (t = this.canvasLayer.canvas.getContext(this.context)),
            (n =
              "cluster" === this.options.draw
                ? this.clusterDataSet.get()
                : this.dataSet.get());
          for (var i = 0; i < n.length; i++) {
            t.beginPath();
            var o = this.options,
              a = e.x * this.canvasLayer.devicePixelRatio,
              r = e.y * this.canvasLayer.devicePixelRatio;
            if (
              ((o.multiPolygonDraw = function() {
                if (t.isPointInPath(a, r)) return n[i];
              }),
              x.draw(t, n[i], o),
              -1 < (n[i].geometry && n[i].geometry.type).indexOf("LineString"))
            ) {
              if (t.isPointInStroke && t.isPointInStroke(a, r)) return n[i];
            } else if (t.isPointInPath(a, r)) return n[i];
          }
        }
      },
      {
        key: "clickEvent",
        value: function(t, e) {
          if (this.options.methods) {
            var n = this.isPointInPath(this.getContext(), t);
            n
              ? this.options.methods.click(n, e)
              : this.options.methods.click(null, e);
          }
        }
      },
      {
        key: "mousemoveEvent",
        value: function(t, e) {
          if (this.options.methods) {
            var n = this.isPointInPath(this.getContext(), t);
            n
              ? this.options.methods.mousemove(n, e)
              : this.options.methods.mousemove(null, e);
          }
        }
      },
      {
        key: "tapEvent",
        value: function(t, e) {
          if (this.options.methods) {
            var n = this.isPointInPath(this.getContext(), t);
            n
              ? this.options.methods.tap(n, e)
              : this.options.methods.tap(null, e);
          }
        }
      },
      {
        key: "update",
        value: function(t, e) {
          var n = t.options,
            i = this.options;
          for (var o in n) i[o] = n[o];
          this.init(i), !1 !== e && this.draw();
        }
      },
      {
        key: "setOptions",
        value: function(t) {
          this.dataSet.reset(), this.init(t), this.draw();
        }
      },
      {
        key: "set",
        value: function(t) {
          var e = this.getContext(),
            n = this.getDefaultContextConfig();
          for (var i in n) e[i] = n[i];
          this.init(t.options), this.draw();
        }
      },
      {
        key: "destroy",
        value: function() {
          this.unbindEvent(), this.hide();
        }
      },
      {
        key: "initAnimator",
        value: function() {
          var t = this,
            e = t.options.animation;
          if ("time" == t.options.draw || t.isEnabledTime()) {
            e.stepsRange ||
              (e.stepsRange = {
                start: this.dataSet.getMin("time") || 0,
                end: this.dataSet.getMax("time") || 0
              }),
              (this.steps = { step: e.stepsRange.start }),
              (t.animator = new mt.Tween(this.steps)
                .onUpdate(function() {
                  t._canvasUpdate(this.step);
                })
                .repeat(1 / 0)),
              this.addAnimatorEvent();
            var n = 1e3 * e.duration || 5e3;
            t.animator.to({ step: e.stepsRange.end }, n), t.animator.start();
          } else t.animator && t.animator.stop();
        }
      },
      { key: "addAnimatorEvent", value: function() {} },
      {
        key: "animatorMovestartEvent",
        value: function() {
          var t = this.options.animation;
          this.isEnabledTime() &&
            this.animator &&
            ((this.steps.step = t.stepsRange.start), this.animator.stop());
        }
      },
      {
        key: "animatorMoveendEvent",
        value: function() {
          this.isEnabledTime() && this.animator && this.animator.start();
        }
      }
    ]),
    Ht);
  function Ht(t, e, n) {
    s(this, Ht),
      e instanceof I || (e = new I(e)),
      (this.dataSet = e),
      (this.map = t),
      "cluster" !== n.draw ||
        this.supercluster ||
        ((this.supercluster = new Tt({
          maxZoom: n.maxZoom || 19,
          radius: n.clusterRadius || 100
        })),
        this.supercluster.load(e.get()),
        (this.clusterDataSet = new I()));
  }
  var qt = "undefined" == typeof window ? {} : window,
    Vt = qt.BMap || qt.BMapGL,
    $t =
      (l(Gt, Wt),
      e(Gt, [
        {
          key: "draw",
          value: function() {
            this.canvasLayer.draw();
          }
        },
        {
          key: "init",
          value: function(t) {
            var e = this;
            (e.options = t),
              this.initDataRange(t),
              (this.context = e.options.context || "2d"),
              e.options.zIndex &&
                this.canvasLayer &&
                this.canvasLayer.setZIndex(e.options.zIndex),
              e.options.max && this.intensity.setMax(e.options.max),
              e.options.min && this.intensity.setMin(e.options.min),
              this.initAnimator();
          }
        },
        {
          key: "transferToMercator",
          value: function() {
            var n,
              i = this.map,
              t = i.getMapType();
            if (
              ((n = t.getProjection
                ? t.getProjection()
                : {
                    lngLatToPoint: function(t) {
                      var e = i.lnglatToMercator(t.lng, t.lat);
                      return { x: e[0], y: e[1] };
                    }
                  }),
              "bd09mc" !== this.options.coordType)
            ) {
              var e = this.dataSet.get();
              (e = this.dataSet.transferCoordinate(
                e,
                function(t) {
                  var e = n.lngLatToPoint({ lng: t[0], lat: t[1] });
                  return [e.x, e.y];
                },
                "coordinates",
                "coordinates_mercator"
              )),
                this.dataSet._set(e);
            }
          }
        },
        {
          key: "_canvasUpdate",
          value: function() {
            var t = this.ctx;
            if (t) {
              var e,
                n,
                i,
                o = this.map;
              o.getMapType().getProjection
                ? (n = (e = o.getMapType().getProjection()).lngLatToPoint(
                    o.getCenter()
                  ))
                : ((n = { x: o.getCenter().lng, y: o.getCenter().lat }),
                  (e = {
                    lngLatToPoint: function(t) {
                      var e = o.lnglatToMercator(t.lng, t.lat);
                      return { x: e[0], y: e[1] };
                    }
                  })),
                (i = e.getZoomUnits
                  ? e.getZoomUnits(o.getZoom())
                  : Math.pow(2, 18 - o.getZoom()));
              var a = new Vt.Pixel(
                n.x - (o.getSize().width / 2) * i,
                n.y + (o.getSize().height / 2) * i
              );
              m(t);
              var r = {
                fromColumn:
                  "bd09mc" == this.options.coordType
                    ? "coordinates"
                    : "coordinates_mercator",
                transferCoordinate: function(t) {
                  if (t) return [(t[0] - a.x) / i, (a.y - t[1]) / i];
                }
              };
              (this.data = this.dataSet.get(r)),
                this.processData(this.data),
                this.drawAnimation();
            }
          }
        },
        {
          key: "drawAnimation",
          value: function() {
            var t = this.ctx,
              e = this.data;
            if (e) {
              t.save(),
                (t.globalCompositeOperation = "destination-out"),
                (t.fillStyle = "rgba(0, 0, 0, .1)"),
                t.fillRect(0, 0, t.canvas.width, t.canvas.height),
                t.restore(),
                t.save(),
                this.options.shadowColor &&
                  (t.shadowColor = this.options.shadowColor),
                this.options.shadowBlur &&
                  (t.shadowBlur = this.options.shadowBlur),
                this.options.globalAlpha &&
                  (t.globalAlpha = this.options.globalAlpha),
                this.options.globalCompositeOperation &&
                  (t.globalCompositeOperation = this.options.globalCompositeOperation);
              for (var n = this.options, i = 0; i < e.length; i++)
                if ("Point" === e[i].geometry.type) {
                  t.beginPath();
                  var o = e[i].size || this.options.size,
                    a = e[i].minSize || this.options.minSize || 0;
                  void 0 === e[i]._size && (e[i]._size = a),
                    t.arc(
                      e[i].geometry._coordinates[0],
                      e[i].geometry._coordinates[1],
                      e[i]._size,
                      0,
                      2 * Math.PI,
                      !0
                    ),
                    t.closePath(),
                    e[i]._size++,
                    e[i]._size > o && (e[i]._size = a),
                    (t.lineWidth = 1),
                    (t.strokeStyle =
                      e[i].strokeStyle ||
                      e[i]._strokeStyle ||
                      n.strokeStyle ||
                      "yellow"),
                    t.stroke(),
                    (l = e[i].fillStyle || e[i]._fillStyle || n.fillStyle) &&
                      ((t.fillStyle = l), t.fill());
                } else if ("LineString" === e[i].geometry.type) {
                  t.beginPath();
                  var r = e[i].size || this.options.size || 5;
                  (a = e[i].minSize || this.options.minSize || 0),
                    void 0 === e[i]._index && (e[i]._index = 0);
                  var s = e[i]._index;
                  t.arc(
                    e[i].geometry._coordinates[s][0],
                    e[i].geometry._coordinates[s][1],
                    r,
                    0,
                    2 * Math.PI,
                    !0
                  ),
                    t.closePath(),
                    e[i]._index++,
                    e[i]._index >= e[i].geometry._coordinates.length &&
                      (e[i]._index = 0);
                  var h = e[i].strokeStyle || n.strokeStyle,
                    l = e[i].fillStyle || n.fillStyle || "yellow";
                  (t.fillStyle = l),
                    t.fill(),
                    h &&
                      n.lineWidth &&
                      ((t.lineWidth = n.lineWidth || 1),
                      (t.strokeStyle = h),
                      t.stroke());
                }
              t.restore();
            }
          }
        },
        {
          key: "animate",
          value: function() {
            this.drawAnimation();
            var t = this.options.animateTime || 100;
            this.timeout = setTimeout(this.animate.bind(this), t);
          }
        },
        {
          key: "start",
          value: function() {
            this.stop(), this.animate();
          }
        },
        {
          key: "stop",
          value: function() {
            clearTimeout(this.timeout);
          }
        },
        { key: "unbindEvent", value: function() {} },
        {
          key: "hide",
          value: function() {
            this.canvasLayer.hide(), this.stop();
          }
        },
        {
          key: "show",
          value: function() {
            this.start();
          }
        },
        {
          key: "clearData",
          value: function() {
            this.dataSet && this.dataSet.clear(),
              this.update({ options: null });
          }
        },
        {
          key: "destroy",
          value: function() {
            this.stop(),
              this.unbindEvent(),
              this.clearData(),
              this.map.removeOverlay(this.canvasLayer),
              (this.canvasLayer = null);
          }
        }
      ]),
      Gt);
  function Gt(t, e, n) {
    s(this, Gt);
    var i = u(
      this,
      (Gt.__proto__ || Object.getPrototypeOf(Gt)).call(this, t, e, n)
    );
    (i.map = t), (i.options = n || {}), (i.dataSet = e);
    var o = new pt({
      map: t,
      zIndex: i.options.zIndex,
      update: i._canvasUpdate.bind(i)
    });
    i.init(i.options), (i.canvasLayer = o), i.transferToMercator();
    var a = i;
    return (
      e.on("change", function() {
        a.transferToMercator(), o.draw();
      }),
      (i.ctx = o.canvas.getContext("2d")),
      i.start(),
      i
    );
  }
  var Yt = "undefined" == typeof window ? {} : window,
    Jt = Yt.BMap || Yt.BMapGL,
    Qt =
      (l(Xt, Wt),
      e(Xt, [
        {
          key: "clickEvent",
          value: function(t) {
            var e = t.pixel;
            h(
              Xt.prototype.__proto__ || Object.getPrototypeOf(Xt.prototype),
              "clickEvent",
              this
            ).call(this, e, t);
          }
        },
        {
          key: "mousemoveEvent",
          value: function(t) {
            var e = t.pixel;
            h(
              Xt.prototype.__proto__ || Object.getPrototypeOf(Xt.prototype),
              "mousemoveEvent",
              this
            ).call(this, e, t);
          }
        },
        {
          key: "tapEvent",
          value: function(t) {
            var e = t.pixel;
            h(
              Xt.prototype.__proto__ || Object.getPrototypeOf(Xt.prototype),
              "tapEvent",
              this
            ).call(this, e, t);
          }
        },
        {
          key: "bindEvent",
          value: function() {
            this.unbindEvent();
            var t = this.map,
              e = 0,
              n = this;
            this.options.methods &&
              (this.options.methods.click &&
                (t.setDefaultCursor("default"),
                t.addEventListener("click", this.clickEvent)),
              this.options.methods.mousemove &&
                t.addEventListener("mousemove", this.mousemoveEvent),
              "ontouchend" in window.document &&
                this.options.methods.tap &&
                (t.addEventListener("touchstart", function(t) {
                  e = new Date();
                }),
                t.addEventListener("touchend", function(t) {
                  new Date() - e < 300 && n.tapEvent(t);
                })));
          }
        },
        {
          key: "unbindEvent",
          value: function() {
            var t = this.map;
            this.options.methods &&
              (this.options.methods.click &&
                t.removeEventListener("click", this.clickEvent),
              this.options.methods.mousemove &&
                t.removeEventListener("mousemove", this.mousemoveEvent));
          }
        },
        {
          key: "transferToMercator",
          value: function(t) {
            t = t || this.dataSet;
            var n,
              i = this.map,
              e = i.getMapType();
            if (
              ((n = e.getProjection
                ? e.getProjection()
                : {
                    lngLatToPoint: function(t) {
                      var e = i.lnglatToMercator(t.lng, t.lat);
                      return { x: e[0], y: e[1] };
                    }
                  }),
              "bd09mc" !== this.options.coordType)
            ) {
              var o = t.get();
              (o = t.transferCoordinate(
                o,
                function(t) {
                  if (t[0] < -180 || 180 < t[0] || t[1] < -90 || 90 < t[1])
                    return t;
                  var e = n.lngLatToPoint({ lng: t[0], lat: t[1] });
                  return [e.x, e.y];
                },
                "coordinates",
                "coordinates_mercator"
              )),
                t._set(o);
            }
          }
        },
        {
          key: "getContext",
          value: function() {
            return this.canvasLayer.canvas.getContext(this.context);
          }
        },
        {
          key: "_canvasUpdate",
          value: function(n) {
            if (this.canvasLayer) {
              var t,
                e,
                i,
                o = this,
                a = o.options.animation,
                r = this.canvasLayer._map;
              r.getMapType().getProjection
                ? (e = (t = r.getMapType().getProjection()).lngLatToPoint(
                    r.getCenter()
                  ))
                : ((e = { x: r.getCenter().lng, y: r.getCenter().lat }),
                  (t = {
                    lngLatToPoint: function(t) {
                      var e = r.lnglatToMercator(t.lng, t.lat);
                      return { x: e[0], y: e[1] };
                    }
                  })),
                (i = t.getZoomUnits
                  ? t.getZoomUnits(r.getZoom())
                  : Math.pow(2, 18 - r.getZoom()));
              var s = new Jt.Pixel(
                  e.x - (r.getSize().width / 2) * i,
                  e.y + (r.getSize().height / 2) * i
                ),
                h = this.getContext();
              if (o.isEnabledTime()) {
                if (void 0 === n) return void m(h);
                "2d" == this.context &&
                  (h.save(),
                  (h.globalCompositeOperation = "destination-out"),
                  (h.fillStyle = "rgba(0, 0, 0, .1)"),
                  h.fillRect(0, 0, h.canvas.width, h.canvas.height),
                  h.restore());
              } else m(h);
              if ("2d" == this.context)
                for (var l in o.options) h[l] = o.options[l];
              else h.clear(h.COLOR_BUFFER_BIT);
              if (
                !(
                  (o.options.minZoom && r.getZoom() < o.options.minZoom) ||
                  (o.options.maxZoom && r.getZoom() > o.options.maxZoom)
                )
              ) {
                var u = 1;
                "2d" != this.context && (u = this.canvasLayer.devicePixelRatio);
                var c,
                  v = {
                    fromColumn:
                      "bd09mc" == o.options.coordType
                        ? "coordinates"
                        : "coordinates_mercator",
                    transferCoordinate: function(t) {
                      return [((t[0] - s.x) / i) * u, ((s.y - t[1]) / i) * u];
                    }
                  };
                if (
                  (void 0 !== n &&
                    (v.filter = function(t) {
                      var e = a.trails || 10;
                      return !!(n && t.time > n - e && t.time < n);
                    }),
                  "cluster" === o.options.draw)
                ) {
                  var p = this.map.getBounds(),
                    d = p.getNorthEast(),
                    g = p.getSouthWest(),
                    f = this.supercluster.getClusters(
                      [g.lng, g.lat, d.lng, d.lat],
                      this.getZoom()
                    );
                  this.clusterDataSet.set(f),
                    this.transferToMercator(this.clusterDataSet),
                    (c = this.clusterDataSet.get(v));
                } else c = o.dataSet.get(v);
                this.processData(c);
                var y = r.pointToPixel(new Jt.Point(0, 0));
                "m" == o.options.unit
                  ? (o.options.size && (o.options._size = o.options.size / i),
                    o.options.width && (o.options._width = o.options.width / i),
                    o.options.height &&
                      (o.options._height = o.options.height / i))
                  : ((o.options._size = o.options.size),
                    (o.options._height = o.options.height),
                    (o.options._width = o.options.width)),
                  this.drawContext(h, c, o.options, y),
                  o.options.updateCallback && o.options.updateCallback(n);
              }
            }
          }
        },
        {
          key: "init",
          value: function(t) {
            var e = this;
            (e.options = t),
              this.initDataRange(t),
              (this.context = e.options.context || "2d"),
              e.options.zIndex &&
                this.canvasLayer &&
                this.canvasLayer.setZIndex(e.options.zIndex),
              e.options.max && this.intensity.setMax(e.options.max),
              e.options.min && this.intensity.setMin(e.options.min),
              this.initAnimator(),
              this.bindEvent();
          }
        },
        {
          key: "getZoom",
          value: function() {
            return this.map.getZoom();
          }
        },
        {
          key: "addAnimatorEvent",
          value: function() {
            this.map.addEventListener(
              "movestart",
              this.animatorMovestartEvent.bind(this)
            ),
              this.map.addEventListener(
                "moveend",
                this.animatorMoveendEvent.bind(this)
              );
          }
        },
        {
          key: "show",
          value: function() {
            this.map.addOverlay(this.canvasLayer);
          }
        },
        {
          key: "hide",
          value: function() {
            this.map.removeOverlay(this.canvasLayer);
          }
        },
        {
          key: "draw",
          value: function() {
            this.canvasLayer && this.canvasLayer.draw();
          }
        },
        {
          key: "clearData",
          value: function() {
            this.dataSet && this.dataSet.clear(),
              this.update({ options: null });
          }
        },
        {
          key: "destroy",
          value: function() {
            this.unbindEvent(),
              this.clearData(),
              this.map.removeOverlay(this.canvasLayer),
              (this.canvasLayer = null);
          }
        }
      ]),
      Xt);
  function Xt(t, e, n) {
    s(this, Xt);
    var i = u(
        this,
        (Xt.__proto__ || Object.getPrototypeOf(Xt)).call(this, t, e, n)
      ),
      o = i;
    (n = n || {}),
      (i.clickEvent = i.clickEvent.bind(i)),
      (i.mousemoveEvent = i.mousemoveEvent.bind(i)),
      (i.tapEvent = i.tapEvent.bind(i)),
      o.init(n),
      o.argCheck(n),
      o.transferToMercator();
    var a = (i.canvasLayer = new pt({
      map: t,
      context: i.context,
      updateImmediate: n.updateImmediate,
      paneName: n.paneName,
      mixBlendMode: n.mixBlendMode,
      enableMassClear: n.enableMassClear,
      zIndex: n.zIndex,
      update: function() {
        o._canvasUpdate();
      }
    }));
    return (
      e.on("change", function() {
        o.transferToMercator(), a.draw();
      }),
      i
    );
  }
  function Kt(t) {
    (this.isAdded_ = !1),
      (this.isAnimated_ = !1),
      (this.paneName_ = Kt.DEFAULT_PANE_NAME_),
      (this.updateHandler_ = null),
      (this.resizeHandler_ = null),
      (this.topLeft_ = null),
      (this.centerListener_ = null),
      (this.resizeListener_ = null),
      (this.needsResize_ = !0),
      (this.requestAnimationFrameId_ = null);
    var e = document.createElement("canvas");
    function n(t, e) {
      return function() {
        e.apply(t);
      };
    }
    (e.style.position = "absolute"),
      (e.style.top = 0),
      (e.style.left = 0),
      (e.style.pointerEvents = "none"),
      (this.canvas = e),
      (this.canvasCssWidth_ = 300),
      (this.canvasCssHeight_ = 150),
      (this.resolutionScale_ = 1),
      (this.repositionFunction_ = n(this, this.repositionCanvas_)),
      (this.resizeFunction_ = n(this, this.resize_)),
      (this.requestUpdateFunction_ = n(this, this.update_)),
      t && this.setOptions(t);
  }
  var te = "undefined" == typeof window ? {} : window;
  te.google &&
    te.google.maps &&
    ((Kt.prototype = new google.maps.OverlayView()),
    (Kt.DEFAULT_PANE_NAME_ = "overlayLayer"),
    (Kt.CSS_TRANSFORM_ = (function() {
      for (
        var t = document.createElement("div"),
          e = [
            "transform",
            "WebkitTransform",
            "MozTransform",
            "OTransform",
            "msTransform"
          ],
          n = 0;
        n < e.length;
        n++
      ) {
        var i = e[n];
        if (void 0 !== t.style[i]) return i;
      }
      return e[0];
    })()),
    (Kt.prototype.requestAnimFrame_ =
      te.requestAnimationFrame ||
      te.webkitRequestAnimationFrame ||
      te.mozRequestAnimationFrame ||
      te.oRequestAnimationFrame ||
      te.msRequestAnimationFrame ||
      function(t) {
        return te.setTimeout(t, 1e3 / 60);
      }),
    (Kt.prototype.cancelAnimFrame_ =
      te.cancelAnimationFrame ||
      te.webkitCancelAnimationFrame ||
      te.mozCancelAnimationFrame ||
      te.oCancelAnimationFrame ||
      te.msCancelAnimationFrame ||
      function(t) {}),
    (Kt.prototype.setOptions = function(t) {
      void 0 !== t.animate && this.setAnimate(t.animate),
        void 0 !== t.paneName && this.setPaneName(t.paneName),
        void 0 !== t.updateHandler && this.setUpdateHandler(t.updateHandler),
        void 0 !== t.resizeHandler && this.setResizeHandler(t.resizeHandler),
        void 0 !== t.resolutionScale &&
          this.setResolutionScale(t.resolutionScale),
        void 0 !== t.map && this.setMap(t.map);
    }),
    (Kt.prototype.setAnimate = function(t) {
      (this.isAnimated_ = !!t), this.isAnimated_ && this.scheduleUpdate();
    }),
    (Kt.prototype.isAnimated = function() {
      return this.isAnimated_;
    }),
    (Kt.prototype.setPaneName = function(t) {
      (this.paneName_ = t), this.setPane_();
    }),
    (Kt.prototype.getPaneName = function() {
      return this.paneName_;
    }),
    (Kt.prototype.setPane_ = function() {
      if (this.isAdded_) {
        var t = this.getPanes();
        if (!t[this.paneName_])
          throw new Error(
            '"' + this.paneName_ + '" is not a valid MapPane name.'
          );
        t[this.paneName_].appendChild(this.canvas);
      }
    }),
    (Kt.prototype.setResizeHandler = function(t) {
      this.resizeHandler_ = t;
    }),
    (Kt.prototype.setResolutionScale = function(t) {
      "number" == typeof t && ((this.resolutionScale_ = t), this.resize_());
    }),
    (Kt.prototype.setUpdateHandler = function(t) {
      this.updateHandler_ = t;
    }),
    (Kt.prototype.onAdd = function() {
      this.isAdded_ ||
        ((this.isAdded_ = !0),
        this.setPane_(),
        (this.resizeListener_ = google.maps.event.addListener(
          this.getMap(),
          "resize",
          this.resizeFunction_
        )),
        (this.centerListener_ = google.maps.event.addListener(
          this.getMap(),
          "center_changed",
          this.repositionFunction_
        )),
        this.resize_(),
        this.repositionCanvas_());
    }),
    (Kt.prototype.onRemove = function() {
      this.isAdded_ &&
        ((this.isAdded_ = !1),
        (this.topLeft_ = null),
        this.canvas.parentElement.removeChild(this.canvas),
        this.centerListener_ &&
          (google.maps.event.removeListener(this.centerListener_),
          (this.centerListener_ = null)),
        this.resizeListener_ &&
          (google.maps.event.removeListener(this.resizeListener_),
          (this.resizeListener_ = null)),
        this.requestAnimationFrameId_ &&
          (this.cancelAnimFrame_.call(te, this.requestAnimationFrameId_),
          (this.requestAnimationFrameId_ = null)));
    }),
    (Kt.prototype.resize_ = function() {
      if (this.isAdded_) {
        var t = this.getMap(),
          e = t.getDiv().offsetWidth,
          n = t.getDiv().offsetHeight,
          i = e * this.resolutionScale_,
          o = n * this.resolutionScale_,
          a = this.canvas.width,
          r = this.canvas.height;
        (a === i && r === o) ||
          ((this.canvas.width = i),
          (this.canvas.height = o),
          (this.needsResize_ = !0),
          this.scheduleUpdate()),
          (this.canvasCssWidth_ === e && this.canvasCssHeight_ === n) ||
            ((this.canvasCssWidth_ = e),
            (this.canvasCssHeight_ = n),
            (this.canvas.style.width = e + "px"),
            (this.canvas.style.height = n + "px"));
      }
    }),
    (Kt.prototype.draw = function() {
      this.repositionCanvas_();
    }),
    (Kt.prototype.repositionCanvas_ = function() {
      var t = this.getMap(),
        e = t
          .getBounds()
          .getNorthEast()
          .lat(),
        n = t.getCenter(),
        i = Math.pow(2, t.getZoom()),
        o = n.lng() - (180 * this.canvasCssWidth_) / (256 * i);
      this.topLeft_ = new google.maps.LatLng(e, o);
      var a = this.getProjection().fromLatLngToDivPixel(n),
        r = -Math.round(this.canvasCssWidth_ / 2 - a.x),
        s = -Math.round(this.canvasCssHeight_ / 2 - a.y);
      (this.canvas.style[Kt.CSS_TRANSFORM_] =
        "translate(" + r + "px," + s + "px)"),
        this.scheduleUpdate();
    }),
    (Kt.prototype.update_ = function() {
      (this.requestAnimationFrameId_ = null),
        this.isAdded_ &&
          (this.isAnimated_ && this.scheduleUpdate(),
          this.needsResize_ &&
            this.resizeHandler_ &&
            ((this.needsResize_ = !1), this.resizeHandler_()),
          this.updateHandler_ && this.updateHandler_());
    }),
    (Kt.prototype.getTopLeft = function() {
      return this.topLeft_;
    }),
    (Kt.prototype.scheduleUpdate = function() {
      this.isAdded_ &&
        !this.requestAnimationFrameId_ &&
        (this.requestAnimationFrameId_ = this.requestAnimFrame_.call(
          te,
          this.requestUpdateFunction_
        ));
    }));
  var ee =
    (l(ne, Wt),
    e(ne, [
      {
        key: "clickEvent",
        value: function(t) {
          var e = t.pixel;
          h(
            ne.prototype.__proto__ || Object.getPrototypeOf(ne.prototype),
            "clickEvent",
            this
          ).call(this, e, t);
        }
      },
      {
        key: "mousemoveEvent",
        value: function(t) {
          var e = t.pixel;
          h(
            ne.prototype.__proto__ || Object.getPrototypeOf(ne.prototype),
            "mousemoveEvent",
            this
          ).call(this, e, t);
        }
      },
      {
        key: "bindEvent",
        value: function() {
          var t = this.map;
          this.options.methods &&
            (this.options.methods.click &&
              (t.setDefaultCursor("default"),
              t.addListener("click", this.clickEvent)),
            this.options.methods.mousemove &&
              t.addListener("mousemove", this.mousemoveEvent));
        }
      },
      {
        key: "unbindEvent",
        value: function() {
          var t = this.map;
          this.options.methods &&
            (this.options.methods.click &&
              t.removeListener("click", this.clickEvent),
            this.options.methods.mousemove &&
              t.removeListener("mousemove", this.mousemoveEvent));
        }
      },
      {
        key: "getContext",
        value: function() {
          return this.canvasLayer.canvas.getContext(this.context);
        }
      },
      {
        key: "_canvasUpdate",
        value: function(n) {
          if (this.canvasLayer) {
            var t = this,
              i = t.options.animation,
              e = this.getContext();
            if (t.isEnabledTime()) {
              if (void 0 === n) return void m(e);
              "2d" == this.context &&
                (e.save(),
                (e.globalCompositeOperation = "destination-out"),
                (e.fillStyle = "rgba(0, 0, 0, .1)"),
                e.fillRect(0, 0, e.canvas.width, e.canvas.height),
                e.restore());
            } else m(e);
            if ("2d" == this.context)
              for (var o in t.options) e[o] = t.options[o];
            else e.clear(e.COLOR_BUFFER_BIT);
            if (
              !(
                (t.options.minZoom && r.getZoom() < t.options.minZoom) ||
                (t.options.maxZoom && r.getZoom() > t.options.maxZoom)
              )
            ) {
              var a = 1;
              "2d" != this.context && (a = this.canvasLayer.devicePixelRatio);
              var r = this.map,
                s = r.getProjection(),
                h =
                  ((a = Math.pow(2, r.zoom) * resolutionScale),
                  s.fromLatLngToPoint(this.canvasLayer.getTopLeft())),
                l = {
                  transferCoordinate: function(t) {
                    var e = new google.maps.LatLng(t[1], t[0]),
                      n = s.fromLatLngToPoint(e),
                      i = { x: (n.x - h.x) * a, y: (n.y - h.y) * a };
                    return [i.x, i.y];
                  }
                };
              void 0 !== n &&
                (l.filter = function(t) {
                  var e = i.trails || 10;
                  return !!(n && t.time > n - e && t.time < n);
                });
              var u = t.dataSet.get(l);
              this.processData(u);
              var c = new google.maps.LatLng(0, 0),
                v = s.fromLatLngToPoint(c),
                p = { x: (v.x - h.x) * a, y: (v.y - h.y) * a };
              "m" == t.options.unit && t.options.size
                ? (t.options._size = t.options.size / zoomUnit)
                : (t.options._size = t.options.size),
                this.drawContext(e, new I(u), t.options, p),
                t.options.updateCallback && t.options.updateCallback(n);
            }
          }
        }
      },
      {
        key: "init",
        value: function(t) {
          (this.options = t),
            this.initDataRange(t),
            (this.context = this.options.context || "2d"),
            this.options.zIndex &&
              this.canvasLayer &&
              this.canvasLayer.setZIndex(this.options.zIndex),
            this.initAnimator();
        }
      },
      {
        key: "addAnimatorEvent",
        value: function() {
          this.map.addListener(
            "movestart",
            this.animatorMovestartEvent.bind(this)
          ),
            this.map.addListener(
              "moveend",
              this.animatorMoveendEvent.bind(this)
            );
        }
      },
      {
        key: "show",
        value: function() {
          this.map.addOverlay(this.canvasLayer);
        }
      },
      {
        key: "hide",
        value: function() {
          this.map.removeOverlay(this.canvasLayer);
        }
      },
      {
        key: "draw",
        value: function() {
          self.canvasLayer.draw();
        }
      }
    ]),
    ne);
  function ne(t, e, n) {
    s(this, ne);
    var i = u(
        this,
        (ne.__proto__ || Object.getPrototypeOf(ne)).call(this, t, e, n)
      ),
      o = i;
    (n = n || {}), o.init(n), o.argCheck(n);
    var a = {
      map: t,
      animate: !1,
      updateHandler: function() {
        o._canvasUpdate();
      },
      resolutionScale: resolutionScale
    };
    i.canvasLayer = new Kt(a);
    return (
      (i.clickEvent = i.clickEvent.bind(i)),
      (i.mousemoveEvent = i.mousemoveEvent.bind(i)),
      i.bindEvent(),
      i
    );
  }
  var ie,
    oe,
    ae = void 0;
  if ("undefined" != typeof maptalks) {
    (oe = maptalks.Layer),
      l(he, oe),
      e(he, [
        {
          key: "_initBaseLayer",
          value: function(t) {
            var e = (this.baseLayer = new Wt(null, this.dataSet, t));
            this.init(t), e.argCheck(t);
          }
        },
        {
          key: "clickEvent",
          value: function(t) {
            if (this.baseLayer) {
              var e = t.containerPoint;
              this.baseLayer.clickEvent(e, t.domEvent);
            }
          }
        },
        {
          key: "mousemoveEvent",
          value: function(t) {
            if (this.baseLayer) {
              var e = t.containerPoint;
              this.baseLayer.mousemoveEvent(e, t.domEvent);
            }
          }
        },
        {
          key: "getEvents",
          value: function() {
            return { click: this.clickEvent, mousemove: this.mousemoveEvent };
          }
        },
        {
          key: "init",
          value: function(t) {
            var e = this.baseLayer;
            (e.options = t),
              e.initDataRange(t),
              (e.context = e.options.context || "2d"),
              e.initAnimator();
          }
        },
        {
          key: "addAnimatorEvent",
          value: function() {
            this.map.addListener(
              "movestart",
              this.animatorMovestartEvent.bind(this)
            ),
              this.map.addListener(
                "moveend",
                this.animatorMoveendEvent.bind(this)
              );
          }
        }
      ]),
      (ae = he);
    var re =
      ((ie = maptalks.renderer.CanvasRenderer),
      l(se, ie),
      e(se, [
        {
          key: "needToRedraw",
          value: function() {
            return (
              !!this.layer.baseLayer.isEnabledTime() ||
              h(
                se.prototype.__proto__ || Object.getPrototypeOf(se.prototype),
                "needToRedraw",
                this
              ).call(this)
            );
          }
        },
        {
          key: "draw",
          value: function() {
            var t = this.layer.baseLayer;
            (this.canvas && t.isEnabledTime() && !this._shouldClear) ||
              (this.prepareCanvas(), (this._shouldClear = !1)),
              this._update(this.gl || this.context, this._mapvFrameTime),
              delete this._mapvFrameTime,
              this.completeRender();
          }
        },
        {
          key: "drawOnInteracting",
          value: function() {
            this.draw(), (this._shouldClear = !1);
          }
        },
        {
          key: "onSkipDrawOnInteracting",
          value: function() {
            this._shouldClear = !0;
          }
        },
        {
          key: "_canvasUpdate",
          value: function(t) {
            this.setToRedraw(), (this._mapvFrameTime = t);
          }
        },
        {
          key: "_update",
          value: function(t, n) {
            if (this.canvas) {
              var e = this.layer.baseLayer,
                i = e.options.animation,
                o = this.getMap();
              if (e.isEnabledTime()) {
                if (void 0 === n) return void m(t);
                "2d" == e.context &&
                  (t.save(),
                  (t.globalCompositeOperation = "destination-out"),
                  (t.fillStyle = "rgba(0, 0, 0, .1)"),
                  t.fillRect(0, 0, t.canvas.width, t.canvas.height),
                  t.restore());
              } else m(t);
              if ("2d" == e.context)
                for (var a in e.options) t[a] = e.options[a];
              else t.clear(t.COLOR_BUFFER_BIT);
              var r = 1;
              "2d" === e.context &&
                "heatmap" !== e.options.draw &&
                (r = e.canvasLayer.devicePixelRatio);
              var s = new maptalks.Coordinate(0, 0),
                h = {
                  fromColumn:
                    "bd09mc" === e.options.coordType
                      ? "coordinates_mercator"
                      : "coordinates",
                  transferCoordinate: function(t) {
                    return (
                      (s.x = t[0]),
                      (s.y = t[1]),
                      o
                        .coordToContainerPoint(s)
                        ._multi(r)
                        .toArray()
                    );
                  }
                };
              void 0 !== n &&
                (h.filter = function(t) {
                  var e = i.trails || 10;
                  return !!(n && t.time > n - e && t.time < n);
                });
              var l = e.dataSet.get(h);
              e.processData(l),
                "m" == e.options.unit
                  ? (e.options.size &&
                      (e.options._size = e.options.size / zoomUnit),
                    e.options.width &&
                      (e.options._width = e.options.width / zoomUnit),
                    e.options.height &&
                      (e.options._height = e.options.height / zoomUnit))
                  : ((e.options._size = e.options.size),
                    (e.options._height = e.options.height),
                    (e.options._width = e.options.width));
              var u = new maptalks.Point(0, 0),
                c = o._pointToContainerPoint(u)._multi(r);
              e.drawContext(t, l, e.options, c),
                e.options.updateCallback && e.options.updateCallback(n);
            }
          }
        },
        {
          key: "createCanvas",
          value: function() {
            if (!this.canvas) {
              var t = this.getMap(),
                e = t.getSize(),
                n = maptalks.Browser.retina ? 2 : 1,
                i = n * e.width,
                o = n * e.height;
              (this.canvas = maptalks.Canvas.createCanvas(i, o, t.CanvasClass)),
                "2d" === this.layer.baseLayer.context
                  ? ((this.context = this.canvas.getContext("2d")),
                    this.layer.options.globalCompositeOperation &&
                      (this.context.globalCompositeOperation = this.layer.options.globalCompositeOperation))
                  : (this.gl = this.canvas.getContext("webgl", {
                      alpha: !0,
                      preserveDrawingBuffer: !0,
                      antialias: !1
                    })),
                this.onCanvasCreate(),
                this._bindToMapv(),
                this.layer.fire("canvascreate", {
                  context: this.context,
                  gl: this.gl
                });
            }
          }
        },
        {
          key: "_bindToMapv",
          value: function() {
            var t = this.layer.baseLayer;
            (this.devicePixelRatio = maptalks.Browser.retina ? 2 : 1),
              (t.canvasLayer = this),
              (t._canvasUpdate = this._canvasUpdate.bind(this)),
              (t.getContext = function() {
                var t = self.getRenderer();
                return t.gl || t.context;
              });
          }
        }
      ]),
      se);
    ae.registerRenderer("canvas", re);
  }
  function se() {
    return (
      s(this, se),
      u(
        this,
        (se.__proto__ || Object.getPrototypeOf(se)).apply(this, arguments)
      )
    );
  }
  function he(t, e, n) {
    s(this, he);
    var i = u(
      this,
      (he.__proto__ || Object.getPrototypeOf(he)).call(this, t, n)
    );
    return (i.options_ = n), (i.dataSet = e), i._initBaseLayer(n), i;
  }
  var le = ae,
    ue =
      (l(ce, Wt),
      e(ce, [
        {
          key: "init",
          value: function(t) {
            if (!t) throw new Error("not map object");
            (this.map = t),
              (this.context = this.options.context || "2d"),
              this.getCanvasLayer();
          }
        },
        {
          key: "_canvasUpdate",
          value: function(t) {
            this.render(this.canvasLayer.canvas, t);
          }
        },
        {
          key: "render",
          value: function(t, n) {
            if (t) {
              var i = this.map,
                e = t.getContext(this.context),
                o = this.options.animation;
              if (this.isEnabledTime()) {
                if (void 0 === n) return m(e), this;
                "2d" === this.context &&
                  (e.save(),
                  (e.globalCompositeOperation = "destination-out"),
                  (e.fillStyle = "rgba(0, 0, 0, .1)"),
                  e.fillRect(0, 0, e.canvas.width, e.canvas.height),
                  e.restore());
              } else m(e);
              if ("2d" === this.context)
                for (var a in this.options) e[a] = this.options[a];
              else e.clear(e.COLOR_BUFFER_BIT);
              var r = {
                transferCoordinate: function(t) {
                  var e = i.lngLatToContainer(new AMap.LngLat(t[0], t[1]));
                  return [e.x, e.y];
                }
              };
              void 0 !== n &&
                (r.filter = function(t) {
                  var e = o.trails || 10;
                  return !!(n && t.time > n - e && t.time < n);
                });
              var s = this.dataSet.get(r);
              return (
                this.processData(s),
                "m" === this.options.unit
                  ? (this.options.size &&
                      (this.options._size = this.options.size / zoomUnit),
                    this.options.width &&
                      (this.options._width = this.options.width / zoomUnit),
                    this.options.height &&
                      (this.options._height = this.options.height / zoomUnit))
                  : ((this.options._size = this.options.size),
                    (this.options._height = this.options.height),
                    (this.options._width = this.options.width)),
                this.drawContext(e, new I(s), this.options, { x: 0, y: 0 }),
                this.options.updateCallback && this.options.updateCallback(n),
                this
              );
            }
          }
        },
        {
          key: "getCanvasLayer",
          value: function() {
            if (!this.canvasLayer.canvas && !this.layer_) {
              var t = this.canvasFunction(),
                e = this.map.getBounds();
              (this.layer_ = new AMap.CanvasLayer({
                canvas: t,
                bounds: this.options.bounds || e,
                zooms: this.options.zooms || [0, 22]
              })),
                this.layer_.setMap(this.map),
                this.map.on("mapmove", this.canvasFunction, this),
                this.map.on("zoomchange", this.canvasFunction, this);
            }
          }
        },
        {
          key: "canvasFunction",
          value: function() {
            var t = [this.map.getSize().width, this.map.getSize().height],
              e = t[0],
              n = t[1];
            if (this.canvasLayer.canvas) {
              (this.canvasLayer.canvas.width = e),
                (this.canvasLayer.canvas.height = n);
              var i = this.map.getBounds();
              this.layer_ && this.layer_.setBounds(this.options.bounds || i);
            } else
              this.canvasLayer.canvas = (function(t, e, n) {
                if ("undefined" == typeof document) return new n(t, e);
                var i = document.createElement("canvas");
                return (i.width = t), (i.height = e), i;
              })(e, n);
            return (
              this.render(this.canvasLayer.canvas), this.canvasLayer.canvas
            );
          }
        },
        {
          key: "removeLayer",
          value: function() {
            this.map &&
              (this.unEvents(),
              this.map.removeLayer(this.layer_),
              delete this.map,
              delete this.layer_,
              delete this.canvasLayer.canvas);
          }
        },
        {
          key: "getContext",
          value: function() {
            return this.canvasLayer.canvas.getContext(this.context);
          }
        },
        {
          key: "clickEvent",
          value: function(t) {
            var e = t.pixel;
            h(
              ce.prototype.__proto__ || Object.getPrototypeOf(ce.prototype),
              "clickEvent",
              this
            ).call(this, e, t);
          }
        },
        {
          key: "mousemoveEvent",
          value: function(t) {
            var e = t.pixel;
            h(
              ce.prototype.__proto__ || Object.getPrototypeOf(ce.prototype),
              "mousemoveEvent",
              this
            ).call(this, e, t);
          }
        },
        {
          key: "addAnimatorEvent",
          value: function() {
            this.map.on("movestart", this.animatorMovestartEvent, this),
              this.map.on("moveend", this.animatorMoveendEvent, this);
          }
        },
        {
          key: "onEvents",
          value: function() {
            var t = this.map;
            this.unEvents(),
              this.options.methods &&
                (this.options.methods.click &&
                  t.on("click", this.clickEvent, this),
                this.options.methods.mousemove &&
                  t.on("mousemove", this.mousemoveEvent, this));
          }
        },
        {
          key: "unEvents",
          value: function() {
            var t = this.map;
            this.options.methods &&
              (this.options.methods.click &&
                t.off("click", this.clickEvent, this),
              this.options.methods.mousemove &&
                t.off("mousemove", this.mousemoveEvent, this));
          }
        }
      ]),
      ce);
  function ce() {
    var t =
        0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
      e = arguments[1],
      n = arguments[2];
    s(this, ce);
    var i = u(
      this,
      (ce.__proto__ || Object.getPrototypeOf(ce)).call(this, t, e, n)
    );
    return (
      (i.options = n),
      (i.canvasLayer = {
        canvas: null,
        devicePixelRatio: window.devicePixelRatio
      }),
      (i.layer_ = null),
      i.initDataRange(n),
      i.initAnimator(),
      i.onEvents(),
      t.on(
        "complete",
        function() {
          this.init(t, n), this.argCheck(n);
        },
        i
      ),
      i
    );
  }
  var ve =
    (l(pe, Wt),
    e(pe, [
      {
        key: "init",
        value: function(t, e) {
          if (!(t && t instanceof ol.Map)) throw new Error("not map object");
          (this.$Map = t),
            (this.context = this.options.context || "2d"),
            this.getCanvasLayer(),
            this.initDataRange(e),
            this.initAnimator(),
            this.onEvents();
        }
      },
      {
        key: "_canvasUpdate",
        value: function(t) {
          this.render(this.canvasLayer.canvas, t);
        }
      },
      {
        key: "render",
        value: function(t, n) {
          var e = this.$Map,
            i = t.getContext(this.context),
            o = this.options.animation,
            a = this.options.hasOwnProperty("projection")
              ? this.options.projection
              : "EPSG:4326";
          if (this.isEnabledTime()) {
            if (void 0 === n) return m(i), this;
            "2d" === this.context &&
              (i.save(),
              (i.globalCompositeOperation = "destination-out"),
              (i.fillStyle = "rgba(0, 0, 0, .1)"),
              i.fillRect(0, 0, i.canvas.width, i.canvas.height),
              i.restore());
          } else m(i);
          if ("2d" === this.context)
            for (var r in this.options) i[r] = this.options[r];
          else i.clear(i.COLOR_BUFFER_BIT);
          var s = {
            transferCoordinate: function(t) {
              return e.getPixelFromCoordinate(
                ol.proj.transform(t, a, "EPSG:4326")
              );
            }
          };
          void 0 !== n &&
            (s.filter = function(t) {
              var e = o.trails || 10;
              return !!(n && t.time > n - e && t.time < n);
            });
          var h = this.dataSet.get(s);
          return (
            this.processData(h),
            "m" === this.options.unit
              ? (this.options.size &&
                  (this.options._size = this.options.size / zoomUnit),
                this.options.width &&
                  (this.options._width = this.options.width / zoomUnit),
                this.options.height &&
                  (this.options._height = this.options.height / zoomUnit))
              : ((this.options._size = this.options.size),
                (this.options._height = this.options.height),
                (this.options._width = this.options.width)),
            this.drawContext(i, new I(h), this.options, { x: 0, y: 0 }),
            this.options.updateCallback && this.options.updateCallback(n),
            this
          );
        }
      },
      {
        key: "getCanvasLayer",
        value: function() {
          if (!this.canvasLayer.canvas && !this.layer_) {
            var t = this.getMapExtent();
            (this.layer_ = new ol.layer.Image({
              layerName: this.options.layerName,
              minResolution: this.options.minResolution,
              maxResolution: this.options.maxResolution,
              zIndex: this.options.zIndex,
              extent: t,
              source: new ol.source.ImageCanvas({
                canvasFunction: this.canvasFunction.bind(this),
                projection: this.options.hasOwnProperty("projection")
                  ? this.options.projection
                  : "EPSG:4326",
                ratio: this.options.hasOwnProperty("ratio")
                  ? this.options.ratio
                  : 1
              })
            })),
              this.$Map.addLayer(this.layer_),
              this.$Map.un("precompose", this.reRender, this),
              this.$Map.on("precompose", this.reRender, this);
          }
        }
      },
      {
        key: "reRender",
        value: function() {
          if (this.layer_) {
            var t = this.getMapExtent();
            this.layer_.setExtent(t);
          }
        }
      },
      {
        key: "canvasFunction",
        value: function(t, e, n, i) {
          return (
            this.canvasLayer.canvas
              ? ((this.canvasLayer.canvas.width = i[0]),
                (this.canvasLayer.canvas.height = i[1]))
              : (this.canvasLayer.canvas = (function(t, e) {
                  if ("undefined" != typeof document) {
                    var n = document.createElement("canvas");
                    return (n.width = t), (n.height = e), n;
                  }
                })(i[0], i[1])),
            this.render(this.canvasLayer.canvas),
            this.canvasLayer.canvas
          );
        }
      },
      {
        key: "getMapExtent",
        value: function() {
          var t = this.$Map.getSize();
          return this.$Map.getView().calculateExtent(t);
        }
      },
      {
        key: "addTo",
        value: function(t) {
          this.init(t, this.options);
        }
      },
      {
        key: "removeLayer",
        value: function() {
          this.$Map &&
            (this.unEvents(),
            this.$Map.un("precompose", this.reRender, this),
            this.$Map.removeLayer(this.layer_),
            delete this.$Map,
            delete this.layer_,
            delete this.canvasLayer.canvas);
        }
      },
      {
        key: "getContext",
        value: function() {
          return this.canvasLayer.canvas.getContext(this.context);
        }
      },
      {
        key: "clickEvent",
        value: function(t) {
          var e = t.pixel;
          h(
            pe.prototype.__proto__ || Object.getPrototypeOf(pe.prototype),
            "clickEvent",
            this
          ).call(this, { x: e[0], y: e[1] }, t);
        }
      },
      {
        key: "mousemoveEvent",
        value: function(t) {
          var e = t.pixel;
          h(
            pe.prototype.__proto__ || Object.getPrototypeOf(pe.prototype),
            "mousemoveEvent",
            this
          ).call(this, { x: e[0], y: e[1] }, t);
        }
      },
      {
        key: "addAnimatorEvent",
        value: function() {
          this.$Map.on("movestart", this.animatorMovestartEvent, this),
            this.$Map.on("moveend", this.animatorMoveendEvent, this);
        }
      },
      {
        key: "onEvents",
        value: function() {
          var t = this.$Map;
          this.unEvents(),
            this.options.methods &&
              (this.options.methods.click &&
                t.on("click", this.clickEvent, this),
              this.options.methods.mousemove &&
                t.on("pointermove", this.mousemoveEvent, this));
        }
      },
      {
        key: "unEvents",
        value: function() {
          var t = this.$Map;
          this.options.methods &&
            (this.options.methods.click && t.un("click", this.clickEvent, this),
            this.options.methods.pointermove &&
              t.un("pointermove", this.mousemoveEvent, this));
        }
      },
      {
        key: "setDefaultCursor",
        value: function(t, e) {
          if (this.$Map) {
            var n = this.$Map.getTargetElement();
            e
              ? n.style.cursor !== t &&
                ((this.previousCursor_ = n.style.cursor), (n.style.cursor = t))
              : void 0 !== this.previousCursor_ &&
                ((n.style.cursor = this.previousCursor_),
                (this.previousCursor_ = void 0));
          }
        }
      }
    ]),
    pe);
  function pe() {
    var t =
        0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
      e = arguments[1],
      n = arguments[2];
    s(this, pe);
    var i = u(
      this,
      (pe.__proto__ || Object.getPrototypeOf(pe)).call(this, t, e, n)
    );
    return (
      (i.options = n),
      (i.canvasLayer = {
        canvas: null,
        devicePixelRatio: window.devicePixelRatio
      }),
      (i.layer_ = null),
      (i.previousCursor_ = void 0),
      i.init(t, n),
      i.argCheck(n),
      i
    );
  }
  var de,
    ge =
      (l(fe, Wt),
      e(fe, [
        {
          key: "clickEvent",
          value: function(t) {
            var e = this.map.containerPointToLayerPoint([0, 0]),
              n = (this.devicePixelRatio = this.canvasLayer.devicePixelRatio =
                window.devicePixelRatio),
              i = t.layerPoint;
            h(
              fe.prototype.__proto__ || Object.getPrototypeOf(fe.prototype),
              "clickEvent",
              this
            ).call(this, L.point((i.x - e.x) / n, (i.y - e.y) / n), t);
          }
        },
        {
          key: "mousemoveEvent",
          value: function(t) {
            var e = t.layerPoint;
            h(
              fe.prototype.__proto__ || Object.getPrototypeOf(fe.prototype),
              "mousemoveEvent",
              this
            ).call(this, e, t);
          }
        },
        {
          key: "bindEvent",
          value: function() {
            var t = this.map;
            this.options.methods &&
              (this.options.methods.click && t.on("click", this.clickEvent),
              this.options.methods.mousemove &&
                t.on("mousemove", this.mousemoveEvent)),
              this.map.on("movestart", this._moveStartEvent),
              this.map.on("moveend", this._moveEndEvent),
              this.map.on("zoomstart", this._zoomStartEvent);
          }
        },
        {
          key: "destroy",
          value: function() {
            this.unbindEvent(),
              this.clearData(),
              this.animator && this.animator.stop(),
              (this.animator = null),
              (this.canvasLayer = null);
          }
        },
        {
          key: "unbindEvent",
          value: function() {
            var t = this.map;
            this.options.methods &&
              (this.options.methods.click && t.off("click", this.clickEvent),
              this.options.methods.mousemove &&
                t.off("mousemove", this.mousemoveEvent)),
              this.map.off("movestart", this._moveStartEvent),
              this.map.off("moveend", this._moveEndEvent),
              this.map.off("zoomstart", this._zoomStartEvent);
          }
        },
        {
          key: "getContext",
          value: function() {
            return this.canvasLayer.getCanvas().getContext(this.context);
          }
        },
        {
          key: "addData",
          value: function(t, e) {
            var n = t;
            t && t.get && (n = t.get()),
              this.dataSet.add(n),
              this.update({ options: e });
          }
        },
        {
          key: "update",
          value: function(t) {
            var e = t || {},
              n = e.data;
            n && n.get && (n = n.get()),
              null != n && this.dataSet.set(n),
              h(
                fe.prototype.__proto__ || Object.getPrototypeOf(fe.prototype),
                "update",
                this
              ).call(this, { options: e.options });
          }
        },
        {
          key: "getData",
          value: function() {
            return this.dataSet;
          }
        },
        {
          key: "removeData",
          value: function(e) {
            if (this.dataSet) {
              var t = this.dataSet.get({
                filter: function(t) {
                  return null == e || "function" != typeof e || !e(t);
                }
              });
              this.dataSet.set(t), this.update({ options: null });
            }
          }
        },
        {
          key: "clearData",
          value: function() {
            this.dataSet && this.dataSet.clear(),
              this.update({ options: null });
          }
        },
        {
          key: "_canvasUpdate",
          value: function(n) {
            if (this.canvasLayer) {
              var i = this,
                o = i.options.animation,
                t = this.getContext(),
                a = this.map;
              if (i.isEnabledTime()) {
                if (void 0 === n) return void this.clear(t);
                "2d" === this.context &&
                  (t.save(),
                  (t.globalCompositeOperation = "destination-out"),
                  (t.fillStyle = "rgba(0, 0, 0, .1)"),
                  t.fillRect(0, 0, t.canvas.width, t.canvas.height),
                  t.restore());
              } else this.clear(t);
              if ("2d" === this.context)
                for (var e in i.options) t[e] = i.options[e];
              else t.clear(t.COLOR_BUFFER_BIT);
              if (
                !(
                  (i.options.minZoom && a.getZoom() < i.options.minZoom) ||
                  (i.options.maxZoom && a.getZoom() > i.options.maxZoom)
                )
              ) {
                var r = a.getBounds(),
                  s = r.getEast() - r.getWest(),
                  h = r.getNorth() - r.getSouth(),
                  l = a.getSize(),
                  u = s / l.x,
                  c = h / l.y,
                  v = this.canvasLayer.getTopLeft(),
                  p = a.latLngToContainerPoint(v),
                  d = {
                    transferCoordinate: function(t) {
                      var e,
                        n = {
                          x:
                            (e =
                              "2d" === i.context
                                ? a.latLngToContainerPoint(L.latLng(t[1], t[0]))
                                : {
                                    x: (t[0] - v.lng) / u,
                                    y: (v.lat - t[1]) / c
                                  }).x - p.x,
                          y: e.y - p.y
                        };
                      return [n.x, n.y];
                    }
                  };
                void 0 !== n &&
                  (d.filter = function(t) {
                    var e = o.trails || 10;
                    return n && t.time > n - e && t.time < n;
                  });
                var g = i.dataSet.get(d);
                this.processData(g), (i.options._size = i.options.size);
                var f = a.latLngToContainerPoint(L.latLng(0, 0)),
                  y = { x: f.x - p.x, y: f.y - p.y };
                this.drawContext(t, g, i.options, y),
                  i.options.updateCallback && i.options.updateCallback(n);
              }
            }
          }
        },
        {
          key: "init",
          value: function(t) {
            (this.options = t),
              this.initDataRange(t),
              (this.context = this.options.context || "2d"),
              this.options.zIndex &&
                this.canvasLayer &&
                this.canvasLayer.setZIndex(this.options.zIndex),
              this.initAnimator();
          }
        },
        { key: "addAnimatorEvent", value: function() {} },
        {
          key: "moveStartEvent",
          value: function() {
            var t = this.options.animation;
            this.isEnabledTime() &&
              this.animator &&
              ((this.steps.step = t.stepsRange.start), this._hide());
          }
        },
        {
          key: "moveEndEvent",
          value: function() {
            this.canvasLayer.draw(), this._show();
          }
        },
        {
          key: "zoomStartEvent",
          value: function() {
            this._hide();
          }
        },
        {
          key: "clear",
          value: function(t) {
            t &&
              t.clearRect &&
              t.clearRect(0, 0, t.canvas.width, t.canvas.height);
          }
        },
        {
          key: "_hide",
          value: function() {
            this.canvasLayer.canvas.style.display = "none";
          }
        },
        {
          key: "_show",
          value: function() {
            this.canvasLayer.canvas.style.display = "block";
          }
        },
        {
          key: "draw",
          value: function() {
            this.canvasLayer.draw();
          }
        }
      ]),
      fe);
  function fe(t, e, n, i) {
    s(this, fe);
    var o = u(
      this,
      (fe.__proto__ || Object.getPrototypeOf(fe)).call(this, t, n, i)
    );
    if (!Wt) return u(o);
    var a = o;
    return (
      (i = i || {}),
      a.init(i),
      a.argCheck(i),
      (o.canvasLayer = e),
      (o.clickEvent = o.clickEvent.bind(o)),
      (o.mousemoveEvent = o.mousemoveEvent.bind(o)),
      (o._moveStartEvent = o.moveStartEvent.bind(o)),
      (o._moveEndEvent = o.moveEndEvent.bind(o)),
      (o._zoomStartEvent = o.zoomStartEvent.bind(o)),
      o.bindEvent(),
      o
    );
  }
  if ("undefined" != typeof L) {
    var ye = L.Layer.extend({
      options: { attributionPrefix: null, attribution: "" },
      initialize: function(t, e, n) {
        (n = n || {}),
          (this.dataSet = t || {}),
          (this.mapVOptions = e || {}),
          (this.render = this.render.bind(this)),
          L.Util.setOptions(this, n),
          this.options.attributionPrefix &&
            (this.options.attribution =
              this.options.attributionPrefix + this.options.attribution),
          (this.canvas = this._createCanvas()),
          L.stamp(this);
      },
      onAdd: function(t) {
        this._map = t;
        var e = this.getPane(),
          n = (this.container = L.DomUtil.create(
            "div",
            "leaflet-layer leaflet-zoom-animated",
            e
          ));
        n.appendChild(this.canvas);
        var i = t.getSize();
        (n.style.width = i.x + "px"),
          (n.style.height = i.y + "px"),
          (this.renderer = new ge(t, this, this.dataSet, this.mapVOptions)),
          this.draw(),
          this.fire("loaded");
      },
      onRemove: function() {
        L.DomUtil.remove(this.container), this.renderer.destroy();
      },
      addData: function(t, e) {
        this.renderer.addData(t, e);
      },
      update: function(t) {
        this.renderer.update(t);
      },
      getData: function() {
        return (
          this.renderer && (this.dataSet = this.renderer.getData()),
          this.dataSet
        );
      },
      removeData: function(t) {
        this.renderer && this.renderer.removeData(t);
      },
      clearData: function() {
        this.renderer.clearData();
      },
      draw: function() {
        return this._reset();
      },
      setZIndex: function(t) {
        this.canvas.style.zIndex = t;
      },
      render: function() {
        this.renderer._canvasUpdate();
      },
      getCanvas: function() {
        return this.canvas;
      },
      getContainer: function() {
        return this.container;
      },
      getTopLeft: function() {
        var t,
          e = this._map;
        e && (t = e.getBounds().getNorthWest());
        return t;
      },
      _createCanvas: function() {
        var t = document.createElement("canvas");
        (t.style.position = "absolute"),
          (t.style.top = "0px"),
          (t.style.left = "0px"),
          (t.style.pointerEvents = "none"),
          (t.style.zIndex = this.options.zIndex || 600);
        var e = "undefined" == typeof window ? {} : window,
          n = (this.devicePixelRatio = e.devicePixelRatio);
        return (
          (this.mapVOptions.context && "2d" !== this.mapVOptions.context) ||
            t.getContext("2d").scale(n, n),
          t
        );
      },
      _resize: function() {
        var t = this.canvas;
        if (t) {
          var e = this._map,
            n = e.getSize();
          (t.width = n.x),
            (t.height = n.y),
            (t.style.width = n.x + "px"),
            (t.style.height = n.y + "px");
          var i = e.getBounds(),
            o = e.latLngToLayerPoint(i.getNorthWest());
          L.DomUtil.setPosition(t, o);
        }
      },
      _reset: function() {
        this._resize(), this._render();
      },
      redraw: function() {
        this._resize(), this._render();
      },
      _render: function() {
        this.render();
      }
    });
    de = function(t, e, n) {
      return new ye(t, e, n);
    };
  }
  var me,
    xe = de,
    _e =
      (l(we, Wt),
      e(we, [
        {
          key: "initDevicePixelRatio",
          value: function() {
            this.devicePixelRatio = window.devicePixelRatio || 1;
          }
        },
        {
          key: "clickEvent",
          value: function(t) {
            var e = t.point;
            h(
              we.prototype.__proto__ || Object.getPrototypeOf(we.prototype),
              "clickEvent",
              this
            ).call(this, e, t);
          }
        },
        {
          key: "mousemoveEvent",
          value: function(t) {
            var e = t.point;
            h(
              we.prototype.__proto__ || Object.getPrototypeOf(we.prototype),
              "mousemoveEvent",
              this
            ).call(this, e, t);
          }
        },
        { key: "addAnimatorEvent", value: function() {} },
        {
          key: "animatorMovestartEvent",
          value: function() {
            var t = this.options.animation;
            this.isEnabledTime() &&
              this.animator &&
              (this.steps.step = t.stepsRange.start);
          }
        },
        {
          key: "animatorMoveendEvent",
          value: function() {
            this.isEnabledTime() && this.animator;
          }
        },
        {
          key: "bindEvent",
          value: function() {
            this.map,
              this.options.methods &&
                (this.options.methods.click, this.options.methods.mousemove);
          }
        },
        {
          key: "unbindEvent",
          value: function() {
            var t = this.map;
            this.options.methods &&
              (this.options.methods.click && t.off("click", this.clickEvent),
              this.options.methods.mousemove &&
                t.off("mousemove", this.mousemoveEvent));
          }
        },
        {
          key: "getContext",
          value: function() {
            return this.canvasLayer.canvas.getContext(this.context);
          }
        },
        {
          key: "init",
          value: function(t) {
            (this.options = t),
              this.initDataRange(t),
              (this.context = this.options.context || "2d"),
              this.options.zIndex &&
                this.canvasLayer &&
                this.canvasLayer.setZIndex(this.options.zIndex),
              this.initAnimator();
          }
        },
        {
          key: "_canvasUpdate",
          value: function(n) {
            this.map;
            var i = this.scene;
            if (this.canvasLayer && !this.stopAniamation) {
              var o = this.options.animation,
                t = this.getContext();
              if (this.isEnabledTime()) {
                if (void 0 === n) return void this.clear(t);
                "2d" === this.context &&
                  (t.save(),
                  (t.globalCompositeOperation = "destination-out"),
                  (t.fillStyle = "rgba(0, 0, 0, .1)"),
                  t.fillRect(0, 0, t.canvas.width, t.canvas.height),
                  t.restore());
              } else this.clear(t);
              if ("2d" === this.context)
                for (var e in this.options) t[e] = this.options[e];
              else t.clear(t.COLOR_BUFFER_BIT);
              var a = {
                transferCoordinate: function(t) {
                  var e = Cesium.Cartesian3.fromDegrees(t[0], t[1]),
                    n = Cesium.SceneTransforms.wgs84ToWindowCoordinates(i, e);
                  return null == n ? [-1, -1] : [n.x, n.y];
                }
              };
              void 0 !== n &&
                (a.filter = function(t) {
                  var e = o.trails || 10;
                  return !!(n && t.time > n - e && t.time < n);
                });
              var r = this.dataSet.get(a);
              this.processData(r),
                "m" == this.options.unit && this.options.size,
                (this.options._size = this.options.size);
              var s = Cesium.SceneTransforms.wgs84ToWindowCoordinates(
                i,
                Cesium.Cartesian3.fromDegrees(0, 0)
              );
              this.drawContext(t, new I(r), this.options, s),
                this.options.updateCallback && this.options.updateCallback(n);
            }
          }
        },
        {
          key: "updateData",
          value: function(t, e) {
            var n = t;
            n && n.get && (n = n.get()),
              null != n && this.dataSet.set(n),
              h(
                we.prototype.__proto__ || Object.getPrototypeOf(we.prototype),
                "update",
                this
              ).call(this, { options: e });
          }
        },
        {
          key: "addData",
          value: function(t, e) {
            var n = t;
            t && t.get && (n = t.get()),
              this.dataSet.add(n),
              this.update({ options: e });
          }
        },
        {
          key: "getData",
          value: function() {
            return this.dataSet;
          }
        },
        {
          key: "removeData",
          value: function(e) {
            if (this.dataSet) {
              var t = this.dataSet.get({
                filter: function(t) {
                  return null == e || "function" != typeof e || !e(t);
                }
              });
              this.dataSet.set(t), this.update({ options: null });
            }
          }
        },
        {
          key: "clearData",
          value: function() {
            this.dataSet && this.dataSet.clear(),
              this.update({ options: null });
          }
        },
        {
          key: "draw",
          value: function() {
            this.canvasLayer.draw();
          }
        },
        {
          key: "clear",
          value: function(t) {
            t &&
              t.clearRect &&
              t.clearRect(0, 0, t.canvas.width, t.canvas.height);
          }
        }
      ]),
      we);
  function we(t, e, n, i) {
    s(this, we);
    var o = u(
      this,
      (we.__proto__ || Object.getPrototypeOf(we)).call(this, t, e, n)
    );
    return Wt
      ? ((o.map = t),
        (o.scene = t.scene),
        (o.dataSet = e),
        (n = n || {}),
        o.init(n),
        o.argCheck(n),
        o.initDevicePixelRatio(),
        (o.canvasLayer = i),
        (o.stopAniamation = !1),
        (o.animation = n.animation),
        (o.clickEvent = o.clickEvent.bind(o)),
        (o.mousemoveEvent = o.mousemoveEvent.bind(o)),
        o.bindEvent(),
        o)
      : u(o);
  }
  if ("undefined" != typeof Cesium) {
    var be = 0,
      ke =
        (e(Le, [
          {
            key: "initDevicePixelRatio",
            value: function() {
              this.devicePixelRatio = window.devicePixelRatio || 1;
            }
          },
          {
            key: "addInnerContainer",
            value: function() {
              this.container.appendChild(this.canvas);
            }
          },
          {
            key: "bindEvent",
            value: function() {
              var e = this;
              (this.innerMoveStart = this.moveStartEvent.bind(this)),
                (this.innerMoveEnd = this.moveEndEvent.bind(this)),
                this.scene.camera.moveStart.addEventListener(
                  this.innerMoveStart,
                  this
                ),
                this.scene.camera.moveEnd.addEventListener(
                  this.innerMoveEnd,
                  this
                );
              var t = new Cesium.ScreenSpaceEventHandler(this.scene.canvas);
              t.setInputAction(function(t) {
                e.innerMoveEnd();
              }, Cesium.ScreenSpaceEventType.LEFT_UP),
                t.setInputAction(function(t) {
                  e.innerMoveEnd();
                }, Cesium.ScreenSpaceEventType.MIDDLE_UP),
                (this.handler = t);
            }
          },
          {
            key: "unbindEvent",
            value: function() {
              this.scene.camera.moveStart.removeEventListener(
                this.innerMoveStart,
                this
              ),
                this.scene.camera.moveEnd.removeEventListener(
                  this.innerMoveEnd,
                  this
                ),
                this.scene.postRender.removeEventListener(this._reset, this),
                this.handler && (this.handler.destroy(), (this.handler = null));
            }
          },
          {
            key: "moveStartEvent",
            value: function() {
              this.mapvBaseLayer &&
                (this.mapvBaseLayer.animatorMovestartEvent(),
                this.scene.postRender.addEventListener(this._reset, this));
            }
          },
          {
            key: "moveEndEvent",
            value: function() {
              this.mapvBaseLayer &&
                (this.scene.postRender.removeEventListener(this._reset, this),
                this.mapvBaseLayer.animatorMoveendEvent(),
                this._reset());
            }
          },
          {
            key: "zoomStartEvent",
            value: function() {
              this._unvisiable();
            }
          },
          {
            key: "zoomEndEvent",
            value: function() {
              this._unvisiable();
            }
          },
          {
            key: "addData",
            value: function(t, e) {
              null != this.mapvBaseLayer && this.mapvBaseLayer.addData(t, e);
            }
          },
          {
            key: "updateData",
            value: function(t, e) {
              null != this.mapvBaseLayer && this.mapvBaseLayer.updateData(t, e);
            }
          },
          {
            key: "getData",
            value: function() {
              return (
                this.mapvBaseLayer &&
                  (this.dataSet = this.mapvBaseLayer.getData()),
                this.dataSet
              );
            }
          },
          {
            key: "removeData",
            value: function(t) {
              null != this.mapvBaseLayer &&
                this.mapvBaseLayer &&
                this.mapvBaseLayer.removeData(t);
            }
          },
          {
            key: "removeAllData",
            value: function() {
              null != this.mapvBaseLayer && this.mapvBaseLayer.clearData();
            }
          },
          {
            key: "_visiable",
            value: function() {
              return (this.canvas.style.display = "block"), this;
            }
          },
          {
            key: "_unvisiable",
            value: function() {
              return (this.canvas.style.display = "none"), this;
            }
          },
          {
            key: "_createCanvas",
            value: function() {
              var t = document.createElement("canvas");
              (t.id = this.mapVOptions.layerid || "mapv" + be++),
                (t.style.position = "absolute"),
                (t.style.top = "0px"),
                (t.style.left = "0px"),
                (t.style.pointerEvents = "none"),
                (t.style.zIndex = this.mapVOptions.zIndex || 0),
                (t.width = parseInt(this.map.canvas.width)),
                (t.height = parseInt(this.map.canvas.height)),
                (t.style.width = this.map.canvas.style.width),
                (t.style.height = this.map.canvas.style.height);
              var e = this.devicePixelRatio;
              return (
                "2d" == this.mapVOptions.context &&
                  t.getContext(this.mapVOptions.context).scale(e, e),
                t
              );
            }
          },
          {
            key: "_reset",
            value: function() {
              this.resizeCanvas(),
                this.fixPosition(),
                this.onResize(),
                this.render();
            }
          },
          {
            key: "draw",
            value: function() {
              this._reset();
            }
          },
          {
            key: "show",
            value: function() {
              this._visiable();
            }
          },
          {
            key: "hide",
            value: function() {
              this._unvisiable();
            }
          },
          {
            key: "destroy",
            value: function() {
              this.remove();
            }
          },
          {
            key: "remove",
            value: function() {
              null != this.mapvBaseLayer &&
                (this.removeAllData(),
                this.mapvBaseLayer.clear(this.mapvBaseLayer.getContext()),
                (this.mapvBaseLayer = void 0),
                this.canvas.parentElement.removeChild(this.canvas));
            }
          },
          {
            key: "update",
            value: function(t) {
              null != t && this.updateData(t.data, t.options);
            }
          },
          {
            key: "resizeCanvas",
            value: function() {
              if (null != this.canvas && null != this.canvas) {
                var t = this.canvas;
                (t.style.position = "absolute"),
                  (t.style.top = "0px"),
                  (t.style.left = "0px"),
                  (t.width = parseInt(this.map.canvas.width)),
                  (t.height = parseInt(this.map.canvas.height)),
                  (t.style.width = this.map.canvas.style.width),
                  (t.style.height = this.map.canvas.style.height);
              }
            }
          },
          { key: "fixPosition", value: function() {} },
          { key: "onResize", value: function() {} },
          {
            key: "render",
            value: function() {
              null != this.mapvBaseLayer && this.mapvBaseLayer._canvasUpdate();
            }
          }
        ]),
        Le);
    me = function(t, e, n, i) {
      return new ke(t, e, n, i);
    };
  }
  function Le(t, e, n, i) {
    if (
      (s(this, Le),
      (this.map = t),
      (this.scene = t.scene),
      (this.mapvBaseLayer = new _e(t, e, n, this)),
      (this.mapVOptions = n),
      this.initDevicePixelRatio(),
      (this.canvas = this._createCanvas()),
      (this.render = this.render.bind(this)),
      i)
    )
      this.container = i;
    else {
      var o = t.container.querySelector(".cesium-viewer-cesiumWidgetContainer");
      this.container = o || t.container;
    }
    this.addInnerContainer(), this.bindEvent(), this._reset();
  }
  var Ee = me,
    Se = {
      getDataSet: function(t) {
        var e = [],
          n = t.features;
        if (n)
          for (var i = 0; i < n.length; i++) {
            var o = n[i],
              a = o.geometry,
              r = o.properties,
              s = {};
            for (var h in r) s[h] = r[h];
            (s.geometry = a), e.push(s);
          }
        return new I(e);
      }
    },
    Ce = {
      CSVToArray: function(t, e) {
        e = e || ",";
        for (
          var n = new RegExp(
              "(\\" +
                e +
                '|\\r?\\n|\\r|^)(?:"([^"]*(?:""[^"]*)*)"|([^"\\' +
                e +
                "\\r\\n]*))",
              "gi"
            ),
            i = [[]],
            o = null;
          (o = n.exec(t));

        ) {
          var a,
            r = o[1];
          r.length && r !== e && i.push([]),
            (a = o[2] ? o[2].replace(new RegExp('""', "g"), '"') : o[3]),
            i[i.length - 1].push(a);
        }
        return i;
      },
      getDataSet: function(t, e) {
        for (
          var n = this.CSVToArray(t, e || ","), i = [], o = n[0], a = 1;
          a < n.length - 1;
          a++
        ) {
          for (var r = n[a], s = {}, h = 0; h < r.length; h++) {
            var l = r[h];
            "geometry" == o[h] && (l = JSON.parse(l)), (s[o[h]] = l);
          }
          i.push(s);
        }
        return new I(i);
      }
    };
  (t.version = "2.0.55"),
    (t.canvasClear = m),
    (t.canvasResolutionScale = function(t) {
      var e = window.devicePixelRatio || 1;
      (t.canvas.width = t.canvas.width * e),
        (t.canvas.height = t.canvas.height * e),
        (t.canvas.style.width = t.canvas.width / e + "px"),
        (t.canvas.style.height = t.canvas.height / e + "px"),
        t.scale(e, e);
    }),
    (t.canvasDrawSimple = c),
    (t.canvasDrawHeatmap = d),
    (t.canvasDrawGrid = g),
    (t.canvasDrawHoneycomb = f),
    (t.webglDrawSimple = rt),
    (t.webglDrawPoint = R),
    (t.webglDrawLine = M),
    (t.webglDrawPolygon = at),
    (t.utilCityCenter = i),
    (t.utilCurve = ht),
    (t.utilForceEdgeBundling = function() {
      var d = {},
        y = [],
        l = [],
        m = [],
        x = 0.1,
        u = 0.1,
        e = 2,
        c = 6,
        v = 70,
        p = 0.6666667,
        g = 0.6,
        h = 1e-8;
      function f(t) {
        return {
          x: d[t.target].x - d[t.source].x,
          y: d[t.target].y - d[t.source].y
        };
      }
      function _(t) {
        return Math.sqrt(
          Math.pow(d[t.source].x - d[t.target].x, 2) +
            Math.pow(d[t.source].y - d[t.target].y, 2)
        );
      }
      function w(t) {
        for (var e = 0, n = 1; n < m[t].length; n++) {
          e += b(m[t][n], m[t][n - 1]);
        }
        return e;
      }
      function b(t, e) {
        return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
      }
      function r(t, e) {
        var n = Math.sqrt(
            (e.target.x - e.source.x) * (e.target.x - e.source.x) +
              (e.target.y - e.source.y) * (e.target.y - e.source.y)
          ),
          i =
            ((e.source.y - t.y) * (e.source.y - e.target.y) -
              (e.source.x - t.x) * (e.target.x - e.source.x)) /
            (n * n);
        return {
          x: e.source.x + i * (e.target.x - e.source.x),
          y: e.source.y + i * (e.target.y - e.source.y)
        };
      }
      function k(t, e) {
        for (var n, i = { x: 0, y: 0 }, o = l[t], a = 0; a < o.length; a++) {
          var r = { x: m[o[a]][e].x - m[t][e].x, y: m[o[a]][e].y - m[t][e].y };
          if (Math.abs(r.x) > h || Math.abs(r.y) > h) {
            var s =
              1 /
              Math.pow(
                ((n = { source: m[o[a]][e], target: m[t][e] }),
                Math.sqrt(
                  Math.pow(n.source.x - n.target.x, 2) +
                    Math.pow(n.source.y - n.target.y, 2)
                )),
                1
              );
            (i.x += r.x * s), (i.y += r.y * s);
          }
        }
        return i;
      }
      function L(t, e, n) {
        for (
          var i,
            o,
            a,
            r,
            s,
            h,
            l,
            u,
            c = x / (_(y[t]) * (e + 1)),
            v = [{ x: 0, y: 0 }],
            p = 1;
          p < e + 1;
          p++
        ) {
          var d = { x: 0, y: 0 },
            g =
              ((o = p),
              (a = c),
              (u = l = void 0),
              (r = m[(i = t)][o - 1]),
              (s = m[i][o + 1]),
              (h = m[i][o]),
              (l = r.x - h.x + s.x - h.x),
              (u = r.y - h.y + s.y - h.y),
              { x: (l *= a), y: (u *= a) }),
            f = k(t, p);
          (d.x = n * (g.x + f.x)), (d.y = n * (g.y + f.y)), v.push(d);
        }
        return v.push({ x: 0, y: 0 }), v;
      }
      function E(t) {
        for (var e = 0; e < y.length; e++)
          if (1 == t)
            m[e].push(d[y[e].source]),
              m[e].push(
                ((u = y[e]),
                {
                  x: (d[u.source].x + d[u.target].x) / 2,
                  y: (d[u.source].y + d[u.target].y) / 2
                })
              ),
              m[e].push(d[y[e].target]);
          else {
            var n = w(e) / (t + 1),
              i = n,
              o = [];
            o.push(d[y[e].source]);
            for (var a = 1; a < m[e].length; a++) {
              for (var r = b(m[e][a], m[e][a - 1]); i < r; ) {
                var s = i / r,
                  h = m[e][a - 1].x,
                  l = m[e][a - 1].y;
                (h += s * (m[e][a].x - m[e][a - 1].x)),
                  (l += s * (m[e][a].y - m[e][a - 1].y)),
                  o.push({ x: h, y: l }),
                  (r -= i),
                  (i = n);
              }
              i -= r;
            }
            o.push(d[y[e].target]), (m[e] = o);
          }
        var u;
      }
      function S(t, e) {
        var n = r(d[e.source], { source: d[t.source], target: d[t.target] }),
          i = r(d[e.target], { source: d[t.source], target: d[t.target] }),
          o = { x: (n.x + i.x) / 2, y: (n.y + i.y) / 2 },
          a = {
            x: (d[t.source].x + d[t.target].x) / 2,
            y: (d[t.source].y + d[t.target].y) / 2
          };
        return Math.max(0, 1 - (2 * b(a, o)) / b(n, i));
      }
      function C(t, e) {
        var n, i, o, a, r, s, h, l, u, c, v, p;
        return (
          (u = t),
          (c = e),
          Math.abs(
            ((v = f(u)), (p = f(c)), (v.x * p.x + v.y * p.y) / (_(u) * _(c)))
          ) *
            ((h = e),
            2 /
              ((l = (_((s = t)) + _(h)) / 2) / Math.min(_(s), _(h)) +
                Math.max(_(s), _(h)) / l)) *
            ((a = e),
            (r = (_((o = t)) + _(a)) / 2) /
              (r +
                b(
                  {
                    x: (d[o.source].x + d[o.target].x) / 2,
                    y: (d[o.source].y + d[o.target].y) / 2
                  },
                  {
                    x: (d[a.source].x + d[a.target].x) / 2,
                    y: (d[a.source].y + d[a.target].y) / 2
                  }
                ))) *
            ((n = t), (i = e), Math.min(S(n, i), S(i, n)))
        );
      }
      function n() {
        var t = u,
          e = v,
          n = 1;
        !(function() {
          for (var t = 0; t < y.length; t++) m[t] = [];
        })(),
          (function() {
            for (var t = 0; t < y.length; t++) l[t] = [];
          })(),
          E(n),
          (function() {
            for (var t = 0; t < y.length - 1; t++)
              for (var e = t + 1; e < y.length; e++)
                t != e &&
                  ((n = y[t]),
                  (i = y[e]),
                  C(n, i) >= g && (l[t].push(e), l[e].push(t)));
            var n, i;
          })();
        for (var i = 0; i < c; i++) {
          for (var o = 0; o < e; o++) {
            for (var a = [], r = 0; r < y.length; r++) a[r] = L(r, n, t);
            for (var s = 0; s < y.length; s++)
              for (var h = 0; h < n + 1; h++)
                (m[s][h].x += a[s][h].x), (m[s][h].y += a[s][h].y);
          }
          (t /= 2), (e *= p), E((n *= 2));
        }
        return m;
      }
      return (
        (n.nodes = function(t) {
          return 0 == arguments.length ? d : ((d = t), n);
        }),
        (n.edges = function(t) {
          return 0 == arguments.length
            ? y
            : ((y = (function(t) {
                for (var e = [], n = 0; n < t.length; n++)
                  d[t[n].source].x != d[t[n].target].x &&
                    d[t[n].source].y != d[t[n].target].y &&
                    e.push(t[n]);
                return e;
              })(t)),
              n);
        }),
        (n.bundling_stiffness = function(t) {
          return 0 == arguments.length ? x : ((x = t), n);
        }),
        (n.step_size = function(t) {
          return 0 == arguments.length ? u : ((u = t), n);
        }),
        (n.cycles = function(t) {
          return 0 == arguments.length ? c : ((c = t), n);
        }),
        (n.iterations = function(t) {
          return 0 == arguments.length ? v : ((v = t), n);
        }),
        (n.iterations_rate = function(t) {
          return 0 == arguments.length ? p : ((p = t), n);
        }),
        (n.subdivision_points_seed = function(t) {
          return 0 == arguments.length ? P : ((P = t), n);
        }),
        (n.subdivision_rate = function(t) {
          return 0 == arguments.length ? e : ((e = t), n);
        }),
        (n.compatbility_threshold = function(t) {
          return 0 == arguments.length ? compatbility_threshold : ((g = t), n);
        }),
        n
      );
    }),
    (t.utilDataRangeIntensity = D),
    (t.utilDataRangeCategory = lt),
    (t.utilDataRangeChoropleth = ut),
    (t.Map = ct),
    (t.baiduMapCanvasLayer = pt),
    (t.baiduMapAnimationLayer = $t),
    (t.baiduMapLayer = Qt),
    (t.googleMapCanvasLayer = Kt),
    (t.googleMapLayer = ee),
    (t.MaptalksLayer = le),
    (t.AMapLayer = ue),
    (t.OpenlayersLayer = ve),
    (t.leafletMapLayer = xe),
    (t.cesiumMapLayer = Ee),
    (t.DataSet = I),
    (t.geojson = Se),
    (t.csv = Ce),
    Object.defineProperty(t, "__esModule", { value: !0 });
});
