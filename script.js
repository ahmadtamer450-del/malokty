var PW="3112006";
var MSG=[
"كل سنة وأنتي طيبة يا ملوكتي. وأجمل وأغلى حاجة حصلت في حياتي كلها. النهارده مش مجرد يوم عادي، النهارده اليوم اللي الدنيا نورت فيه بجد لما جيتي فيها، واليوم اللي اتولدت فيه فرحتي وراحتي.",
"لو قعدت من هنا للسنة الجاية أقولك قد إيه وجودك مغيرني ومحلي دنيتي، الكلام مش هيكفي خالص. أنتي مش بس حبيبتي، أنتِ السكن والأمان والملجأ اللي بجري عليه وأهرب فيه من كل دوشة وتعب. الضحكة اللي بتطلع من قلبي بجد، والروح اللي ما أقدرش أعيش من غيرها.",
"ضحكتك لوحدها قادرة تنسيني أي زعل، ونظرة عينيكي بتديني طمأنينة وراحة ما لقتهمش في أي مكان تاني. كل لحظة وأنا جنبك بحس إن ربنا عوضني بيكي عن أي حاجة وحشة شفتها، وإن الحياة جنبك ليها طعم وشكل تاني خالص.",
"في سنتك الجديدة بتمنالك من كل قلبي إن ربنا يفرح قلبك الأبيض ويحققلك كل خطوة وكل حلم بتتمنيه، وتكون سنة مليانة راحة بال ونجاح وبساطة شبهك. وبوعدك إني هفضل دايمًا في ضهرك وسندك في الحلوة والمرة، وهفضل أحبك كل يوم أكتر من اللي قبله، وهعمل كل اللي في وسعي عشان تفضلي بتضحكي ومرتاحة ومبسوطة.",
"كل سنة وأنتي معايا ومحليّة عمري، وكل سنة وأنتي ملكة قلبي الأولى والأخيرة. بحبك أوي يا لولييي ♥♥♥"];
var MEM=[["p1.jpg","أول صورة لينا سوا"],["p2.jpg","يوم المتحف وكان أحلى يوم عيشته في عمري"],["p3.jpg","أول خروجة وأول صورة صورتهالك لوحدك في حياتنا، ومش آخر صورة"],["p4.jpg","أنا والقمر بتاعي يناااس"],["p5.jpg","أجمل وأحن قلب في الدنيا وأجمل حاجة في حياتي"]];
var $=function(i){return document.getElementById(i)},au=$("au"),i=0;
function show(id){document.querySelectorAll(".screen").forEach(function(e){e.classList.remove("on")});$(id).classList.add("on");window.scrollTo(0,0)}
function norm(v){return v.replace(/[٠-٩]/g,function(c){return c.charCodeAt(0)-1632}).trim()}
function page(){$("mt").textContent=MSG[i];var last=i==MSG.length-1;$("sg").textContent=last?"أحمد ♥":"";$("dt").textContent=MSG.map(function(_,k){return k==i?"●":"○"}).join(" ");$("nx").textContent=last?"كمّلي":"التالي"}
function unlock(){if(norm($("pw").value)!==PW){$("err").textContent="كلمة السر مش صح، جربي تاني ♥";return}
 $("player").classList.add("on");au.play().catch(function(){});i=0;page();show("s-msg")}
$("go").onclick=unlock;$("pw").onkeydown=function(e){if(e.key=="Enter")unlock()};
$("nx").onclick=function(){if(i<MSG.length-1){i++;page()}else show("s-home")};
$("again").onclick=function(){i=0;page();show("s-msg")};
$("pb").onclick=function(){if(au.paused){au.play();$("pb").textContent="❚❚"}else{au.pause();$("pb").textContent="▶"}};
$("mems").innerHTML=MEM.map(function(m){return '<div class="mem"><img src="'+m[0]+'" alt="'+m[1]+'" loading="lazy"><p>'+m[1]+'</p></div>'}).join("");
var LET=["حبيبتي ونور عيني، ملوكتي..", "مش عارف أبدأ كلامي منين، بس حاسس إن قلبي مليان كلام كتير أوي محتاج يتقال. ساعات بتمر عليا أوقات بقعد فيها مع نفسي وأتأمل حياتي، وبكتشف في كل مرة إن أحسن وأعظم حاجة حصلتلي من يوم ما اتولدت هي وجودك في حياتي.", "يا ملك، إنتي مش مجرد حبيبة، إنتي الأمان اللي كنت طول عمري بدور عليه، السكينة اللي بتنزل على قلبي بعد يوم طويل ومتعب، والضحكة الوحيدة اللي قادرة تمسح أي زعل في ثانية. بجد، لما الدنيا بتضيق بيا أو بحس إني تائه، بمجرد ما بسمع صوتك أو بفتكر ملامحك، بحس إن كل حاجة هتبقى كويسة، وإن طالما إنتي معايا فكل الصعب بيهون.", "عايزك تعرفي إنك مش بس واخدة مكان في قلبي، إنتي بنيتي جوايا بيت كامل ملكك لوحدك، بتفاصيلك، بطيبتك، بحنيتك اللي ملهاش حدود، وبالطريقة اللي بتبصيلي بيها وبتحسسني إني أهم وأغلى إنسان في العالم. كل يوم بيمر وأنا معاكي بتأكد أكتر إن ربنا بيحبني عشان رزقني بيكي؛ بنعمة حقيقية تستاهل أفضل أحمد ربنا عليها طول عمري.", "أنا بوعدك من قلبي إني هفضل دايمًا ضهرك وسندك، الشخص اللي تجري عليه وأنتي مطمنة، اللي يفرح لضحكتك قبل ما أنتي تفرحي، ويشيل عنك أي حزن قبل ما يمس قلبك. وجودك ده عهدي لنفسي إني أحافظ عليه بروحي، وأفضل أشوف اللمعة اللي في عينيكي دي وضحكتك اللي بتنورلي الدنيا كلها.", "بحبك حب أكبر بكتير من أي كلام ممكن يتكتب، بحبك حب حقيقي ملوش نهاية، وبتمنى نفضل مع بعض لآخر العمر، وإيدي في إيدك، وكل خطوة نعديها مع بعض.", "يا أغلى وأحلى ملك في الدنيا.. بحبك من كل قلبي ♥♥🫂"];
$("ltxt").innerHTML=LET.map(function(x){var p=document.createElement("p");p.textContent=x;return p.outerHTML}).join("")+'<div class="sig">أحمد ♥</div>';
$("env").onclick=function(){$("env").classList.add("open");setTimeout(function(){$("lt").classList.add("on")},1000)};function closeL(){$("lt").classList.remove("on");$("env").classList.remove("open")}
$("cl").onclick=closeL;
$("lt").onclick=function(e){if(e.target==this)closeL()};
document.onkeydown=function(e){if(e.key=="Escape")closeL()};
var PH=["بحبك أكتر من إمبارح، وأقل من بكرة.", "ضحكتك دي أحلى حاجة بتحصل في يومي.", "إنتي بيتي وأماني يا ملك.", "كل ما أبص في عينيكي ألاقي الدنيا حلوة.", "وجودك جنبي بيخلي أصعب يوم يعدّي بسهولة.", "ربنا يخليكي ليا، ويجعلني دايمًا سبب في فرحتك.", "مفيش حاجة في الدنيا تعوضني عنك.", "إنتي أجمل صدفة حصلت في حياتي.", "قلبي بيطمن لما أسمع صوتك.", "لو الدنيا كلها زعلت، يكفيني إنك معايا.", "أنا محظوظ إنك ليا.", "بحبك بكل تفاصيلك، حتى اللي إنتي مش شايفاها حلوة.", "إنتي الحاجة الوحيدة اللي مبتعبش منها.", "كل يوم معاكي هدية جديدة.", "ملوكتي، إنتي أحلى بداية لأي يوم.", "حبك علّمني يعني إيه أمان.", "هفضل ضهرك وسندك مهما حصل.", "أنا مبسوط بيكي أوي، ومش هزهق أقولك.", "نفسي أفضل جنبك العمر كله.", "إنتي نور قلبي وسبب ابتسامتي.", "بحبك يا لولي، وده مش كلام، ده إحساس.", "يا رب نفضل سوا في كل خطوة.", "أحلى حاجة في كل أيامي إنك فيها.", "إنتي ملكة قلبي الأولى والأخيرة ♥"];
var bag=[];
function nextPh(){if(!bag.length){bag=PH.slice().sort(function(){return Math.random()-.5})}return bag.pop()}
$("lv").onclick=function(){var p=$("ph");p.style.opacity=0;setTimeout(function(){p.textContent=nextPh();p.style.opacity=1},200)};

function shuf(a){return a.slice().sort(function(){return Math.random()-.5})}
var QS,qi,sc,locked;
function buildQ(){var d=Math.max(0,Math.floor((Date.now()-T0)/864e5));
return [
{q:"فاكرة أول يوم لينا سوا كان إمتى؟",o:["٦ مايو ٢٠٢٦","٥ يونيو ٢٠٢٦","٦ أبريل ٢٠٢٦","١٦ مايو ٢٠٢٦"],a:"٦ مايو ٢٠٢٦"},
{q:"أول خروجة لينا سوا كانت فين؟",o:["المتحف","الكورنيش","السينما","مطعم"],a:"المتحف"},
{q:"كام يوم عدّى من أول يوم لينا لحد النهارده؟",o:[""+d,""+(d+8),""+(d+21),""+(d+40)],a:""+d},
{q:"الصورة دي كانت من أنهي يوم؟",img:MEM[1][0],o:["يوم المتحف","يوم الجامعة","يوم الكورنيش","يوم العيد"],a:"يوم المتحف"},
{q:"إيه اللي بيمسح أي زعل عندي في ثانية؟",o:["ضحكتك","الأكل","النوم","الموبايل"],a:"ضحكتك"},
{q:"أنا بحبك أد إيه؟",o:["شوية","كتير","أكتر من أي كلام ممكن يتكتب","مش هقولك"],a:"أكتر من أي كلام ممكن يتكتب"},
{q:"وعدتك إني هفضل دايمًا إيه؟",o:["ضهرك وسندك","بعيد عنك","ساكت","مشغول"],a:"ضهرك وسندك"},
{q:"مين أجمل وأحن قلب في الدنيا؟",o:["ملك","ملوكتي","لولي","كلهم نفس الشخص ♥"],a:null,r:"إجابة صح مهما اخترتي ♥"},
{q:"إنتي بالنسبالي إيه؟",o:["ملكة قلبي الأولى والأخيرة","صاحبة","زميلة","جارة"],a:"ملكة قلبي الأولى والأخيرة"}
,{q:"الصورة دي كانت…",img:MEM[0][0],o:["أول صورة لينا سوا","يوم المتحف","صورة التخرج","صورة السفر"],a:"أول صورة لينا سوا"},
{q:"الصورة دي كانت…",img:MEM[2][0],o:["أول صورة صورتهالك لوحدك","أول صورة لينا سوا","صورة السنة اللي فاتت","صورة العيد"],a:"أول صورة صورتهالك لوحدك"},
{q:"إيه الأسماء اللي بناديكي بيها؟",o:["ملوكتي","لولي","القمر بتاعي","كل اللي فوق ♥"],a:null,r:"كلهم صح، وكلهم بحبهم ♥"},
{q:"أنا شايفك إيه في حياتي؟",o:["السكن والأمان","الضحك والهزار","الأكل والنوم","الشغل والدراسة"],a:"السكن والأمان"},
{q:"إيه اللي بيديني طمأنينة وراحة ما لقيتهاش في أي مكان تاني؟",o:["نظرة عينيكي","النوم","السفر","الموسيقى"],a:"نظرة عينيكي"},
{q:"لما الدنيا بتضيق بيا، بحس إن كل حاجة هتبقى كويسة لما…",o:["أسمع صوتك","أنام","أمشي في الشارع","أسكت"],a:"أسمع صوتك"},
{q:"إنتي بنيتي جوايا إيه؟",o:["بيت كامل ملكك لوحدك","قلعة","شقة","أوضة"],a:"بيت كامل ملكك لوحدك"},
{q:"هفضل أحبك إزاي؟",o:["كل يوم أكتر من اللي قبله","شوية شوية","زي ما أنا","على حسب المزاج"],a:"كل يوم أكتر من اللي قبله"},
{q:"حبي ليكي ليه نهاية؟",o:["لأ، ملوش نهاية","أيوه","مش عارف","ممكن"],a:"لأ، ملوش نهاية"},
{q:"أمنيتي إننا نفضل سوا لحد إمتى؟",o:["لآخر العمر","سنة","الصيف","لحد ما نزهق"],a:"لآخر العمر"},
{q:"إيه اللي بتمناه لسنتك الجديدة؟",o:["راحة بال ونجاح وبساطة","سفر وشغل كتير","مذاكرة وتعب","أي حاجة"],a:"راحة بال ونجاح وبساطة"},
{q:"ربنا عوضني بيكي عن إيه؟",o:["أي حاجة وحشة شفتها","الفلوس","الشغل","الأكل"],a:"أي حاجة وحشة شفتها"},
{q:"اسمي إيه؟",o:["أحمد","محمد","محمود","مصطفى"],a:"أحمد"},
{q:"واسمك إيه يا قمر؟",o:["ملك","ملاك","منة","مريم"],a:"ملك"},
{q:"كتبتلك في أول رسالة: كل سنة وإنتي…",o:["طيبة","بخير","سعيدة","جميلة"],a:"طيبة"},
{q:"أحسن وأعظم حاجة حصلتلي من يوم ما اتولدت هي…",o:["وجودك في حياتي","شغلي","فلوسي","موبايلي"],a:"وجودك في حياتي"},
{q:"إيه اللي كنت طول عمري بدور عليه؟",o:["الأمان","الشهرة","الفلوس","الشغل"],a:"الأمان"},
{q:"ربنا بيحبني عشان رزقني…",o:["بيكي","بعربية","بشغل","بفلوس"],a:"بيكي"},
{q:"هفرح لضحكتك قبل ما…",o:["إنتي تفرحي","أنام","آكل","أخرج"],a:"إنتي تفرحي"},
{q:"الصورة دي كان مكتوب تحتها…",img:MEM[3][0],o:["أنا والقمر بتاعي","يوم المتحف","أول صورة لينا","صورة العيد"],a:"أنا والقمر بتاعي"},
{q:"مين اللي في الصورة دي؟",img:MEM[4][0],o:["أجمل وأحن قلب في الدنيا","ملك","ملوكتي","كل اللي فوق ♥"],a:null,r:"كلهم صح، ودي أحلى حاجة في حياتي ♥"}]}
function startQ(){QS=shuf(buildQ());qi=0;sc=0;show("s-quiz");showQ()}
function showQ(){locked=false;var q=QS[qi],im=$("qi");$("qp").textContent="سؤال "+(qi+1)+" من "+QS.length;$("qq").textContent=q.q;
if(q.img){im.src=q.img;im.hidden=false}else{im.hidden=true}
$("qf").textContent="";$("qn").hidden=true;$("qo").innerHTML="";
shuf(q.o).forEach(function(t){var b=document.createElement("button");b.className="opt";b.textContent=t;b.onclick=function(){pick(b,t)};$("qo").appendChild(b)})}
function pick(b,t){if(locked)return;locked=true;var q=QS[qi];
if(q.a===null||t===q.a){sc++;b.classList.add("ok");$("qf").textContent=q.r||"برافو ♥"}
else{b.classList.add("no");[].forEach.call($("qo").children,function(x){if(x.textContent===q.a)x.classList.add("ok")});$("qf").textContent="الإجابة الصح: "+q.a+" ♥"}
$("qn").textContent=qi==QS.length-1?"النتيجة":"التالي";$("qn").hidden=false}
$("qn").onclick=function(){if(qi<QS.length-1){qi++;showQ()}else{result()}};
function result(){$("qp").textContent="";$("qi").hidden=true;$("qo").innerHTML="";$("qn").hidden=true;$("qf").textContent="";
$("qq").textContent=sc+" من "+QS.length+" — "+(sc==QS.length?"إنتي عارفاني أكتر من نفسي ♥":sc>=QS.length-3?"حلو أوي يا ملك، ولسه فيه كتير نعرفه عن بعض ♥":"مفيش مشكلة، لسه قدامنا عمر نحفظ فيه كل حاجة ♥");
var b=document.createElement("button");b.textContent="العبي تاني";b.onclick=startQ;$("qo").appendChild(b)}
$("qz").onclick=startQ;$("qx").onclick=function(){show("s-home")};

function mimg(i){return i<5?'<img alt="" src="'+MEM[i][0]+'">':'<div class="hf">♥</div>'}
var mlock,mfirst,mdone,mmoves;
function startM(){mdone=0;mmoves=0;mlock=false;mfirst=null;$("mw").textContent="";$("mg").innerHTML="";
shuf([0,1,2,3,4,5,0,1,2,3,4,5]).forEach(function(id){var b=document.createElement("button");b.className="mc";b.setAttribute("aria-label","كارت");b.dataset.id=id;
b.innerHTML='<div class="mi"><div class="mb">♥</div><div class="mf">'+mimg(id)+'</div></div>';b.onclick=function(){flipM(b)};$("mg").appendChild(b)});show("s-mem")}
function flipM(b){if(mlock||b.classList.contains("on"))return;b.classList.add("on");if(!mfirst){mfirst=b;return}
mmoves++;var a=mfirst;mfirst=null;
if(a.dataset.id===b.dataset.id){a.classList.add("done");b.classList.add("done");mdone++;if(mdone==6)$("mw").textContent="لقيتي كل الذكريات في "+mmoves+" محاولة ♥"}
else{mlock=true;setTimeout(function(){a.classList.remove("on");b.classList.remove("on");mlock=false},800)}}
$("mz").onclick=startM;$("mr").onclick=startM;$("mx").onclick=function(){show("s-home")};
var T0=new Date(2026,4,6).getTime();
function tick(){var s=Math.max(0,Math.floor((Date.now()-T0)/1000));$("d").textContent=Math.floor(s/86400);$("h").textContent=Math.floor(s%86400/3600);$("m").textContent=Math.floor(s%3600/60);$("s").textContent=s%60}
tick();setInterval(tick,1000);
for(var k=0;k<14;k++){var h=document.createElement("span");h.className="h";h.textContent=k%3?"♥":"💜";h.style.cssText="left:"+Math.random()*96+"%;font-size:"+(14+Math.random()*16)+"px;animation-duration:"+(9+Math.random()*9)+"s;animation-delay:-"+Math.random()*12+"s;color:#B07BD0";document.body.appendChild(h)}
