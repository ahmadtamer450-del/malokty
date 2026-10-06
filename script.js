var PW="3112006";
var MSG=[
"كل سنة وأنتي طيبة يا ملوكتي. وأجمل وأغلى حاجة حصلت في حياتي كلها. النهارده مش مجرد يوم عادي، النهارده اليوم اللي الدنيا نورت فيه بجد لما جيتي فيها، واليوم اللي اتولدت فيه فرحتي وراحتي.",
"لو قعدت من هنا للسنة الجاية أقولك قد إيه وجودك مغيرني ومحلي دنيتي، الكلام مش هيكفي خالص. أنتي مش بس حبيبتي، أنتِ السكن والأمان والملجأ اللي بجري عليه وأهرب فيه من كل دوشة وتعب. الضحكة اللي بتطلع من قلبي بجد، والروح اللي ما أقدرش أعيش من غيرها.",
"ضحكتك لوحدها قادرة تنسيني أي زعل، ونظرة عينيكي بتديني طمأنينة وراحة ما لقتهمش في أي مكان تاني. كل لحظة وأنا جنبك بحس إن ربنا عوضني بيكي عن أي حاجة وحشة شفتها، وإن الحياة جنبك ليها طعم وشكل تاني خالص.",
"في سنتك الجديدة بتمنالك من كل قلبي إن ربنا يفرح قلبك الأبيض ويحققلك كل خطوة وكل حلم بتتمنيه، وتكون سنة مليانة راحة بال ونجاح وبساطة شبهك. وبوعدك إني هفضل دايمًا في ضهرك وسندك في الحلوة والمرة، وهفضل أحبك كل يوم أكتر من اللي قبله، وهعمل كل اللي في وسعي عشان تفضلي بتضحكي ومرتاحة ومبسوطة.",
"كل سنة وأنتي معايا ومحليّة عمري، وكل سنة وأنتي ملكة قلبي الأولى والأخيرة. بحبك أوي يا لولييي ♥♥♥"];
var MEM=[["media/p1.jpg","أول صورة لينا سوا"],["media/p2.jpg","يوم المتحف وكان أحلى يوم عيشته في عمري"],["media/p3.jpg","أول خروجة وأول صورة صورتهالك لوحدك في حياتنا، ومش آخر صورة"],["media/p4.jpg","أنا والقمر بتاعي يناااس"],["media/p5.jpg","أجمل وأحن قلب في الدنيا وأجمل حاجة في حياتي"]];
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
$("env").onclick=function(){$("lt").classList.add("on")};
$("cl").onclick=function(){$("lt").classList.remove("on")};
$("lt").onclick=function(e){if(e.target==this)this.classList.remove("on")};
document.onkeydown=function(e){if(e.key=="Escape")$("lt").classList.remove("on")};
var T0=new Date(2026,4,6).getTime();
function tick(){var s=Math.max(0,Math.floor((Date.now()-T0)/1000));$("d").textContent=Math.floor(s/86400);$("h").textContent=Math.floor(s%86400/3600);$("m").textContent=Math.floor(s%3600/60);$("s").textContent=s%60}
tick();setInterval(tick,1000);
for(var k=0;k<14;k++){var h=document.createElement("span");h.className="h";h.textContent=k%3?"♥":"💜";h.style.cssText="left:"+Math.random()*96+"%;font-size:"+(14+Math.random()*16)+"px;animation-duration:"+(9+Math.random()*9)+"s;animation-delay:-"+Math.random()*12+"s;color:#B07BD0";document.body.appendChild(h)}
