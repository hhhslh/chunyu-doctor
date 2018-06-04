$(function(){
	// window.onload = function() {       
	  	var mySwiper = new Swiper ('.swiper-container', {
	  		autoplay:2000,
	        loop:true,//在wrapper前后生成若干个slides让slides看起来是衔接的，用于无限循环切换
	        autoplayDisableOnInteraction:false,//用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay
	        pagination:".swiper-pagination",
	        paginationClickable:true,//点击分页器的指示点分页器会控制Swiper切换。

	    })

	    // direction: 'horizontal',
	    // loop: true,
	    
	//     // 如果需要分页器
	    // pagination: '.swiper-pagination',
	    
	//     // 如果需要前进后退按钮
	//     nextButton: '.swiper-button-next',
	//     prevButton: '.swiper-button-prev',
	    
	//     // 如果需要滚动条
	//     // scrollbar: '.swiper-scrollbar',
	//   })        
	// }
	// $.ajax{
	// 	url:"https://m.chunyuyisheng.com?is_json=1",
	// 	type:"get",
	// 	dataType: "json",
	// 	data:{

	// 	},
	// 	success:function(res){

	// 	},
	// 	error:function(res){

	// 	}
	// }
	
	var res={
		"show_download_bar":true,
    	"app":"0",
        "hot_problems":[
	        {
	            "ask":"腰肌劳损怎么办，吃什么药（男，25岁）",
	            "answer":"您好，一般建议局部热敷，按摩治疗，口服舒筋活血的药物，我们常用活血止痛胶囊，效果不错",
	            "title":"腰肌劳损怎么办，吃什么药？",
	            "id":"C_Y1BWkIahZRwCP33fR2hA",
	            "doctor":{
	                "hospital":"辽宁中医药大学附属第四医院",
	                "name":"李圣"
	            }
	        },
	        {
	            "ask":"你好，肩周炎怎么治，吃什么药（男，31）",
	            "answer":"是你自己吗？主要是锻炼",
	            "title":"肩周炎怎么治，吃什么药？",
	            "id":"m5Tzcp3IyTbhyHY2Q2faVA",
	            "doctor":{
	                "hospital":"湖南航天医院（航天七二二医院）",
	                "name":"刘宗敬"
	            }
	        },
	        {
	            "ask":"医生 您好 月经提前 是什么原因（女，26岁）",
	            "answer":"你好很高兴为你解答题目",
	            "title":"医生，月经提前，是什么原因？",
	            "id":"vIV8c72kXvq_KPdVq7UtaQ",
	            "doctor":{
	                "hospital":"灵寿县中西医结合医院",
	                "name":"付佳"
	            }
	        }
    	],
    	"popular_diseases":[
	        {
	            "id":237446,
	            "name":"感冒"
	        },
	        {
	            "id":264890,
	            "name":"过敏"
	        },
	        {
	            "id":243779,
	            "name":"湿疹"
	        },
	        {
	            "id":246581,
	            "name":"痤疮"
	        },
	        {
	            "id":273362,
	            "name":"阴道炎"
	        },
	        {
	            "id":273218,
	            "name":"痔疮"
	        },
	        {
	            "id":222110,
	            "name":"包皮"
	        },
	        {
	            "id":273242,
	            "name":"糖尿病"
	        },
	        {
	            "id":229808,
	            "name":"宫颈糜烂"
	        },
	        {
	            "id":273383,
	            "name":"高血压"
	        },
	        {
	            "id":273296,
	            "name":"肺炎"
	        },
	        {
	            "id":271667,
	            "name":"鼻炎"
	        },
	        {
	            "id":229727,
	            "name":"宫外孕"
	        },
	        {
	            "id":216869,
	            "name":"乙肝"
	        },
	        {
	            "id":273341,
	            "name":"艾滋病"
	        },
	        {
	            "id":268796,
	            "name":"颈椎病"
	        },
	        {
	            "id":273236,
	            "name":"盆腔炎"
	        },
	        {
	            "id":233339,
	            "name":"尖锐湿疣"
	        }
		],
	    "health_news":[
	        {
	            "favor_num":1,
	            "img":"https://media2.chunyuyisheng.com/@/media/images/2017/11/22/d1a6/613e94d1359f_w180_h150_.jpg?imageView2/1/w/120/h/116",
	            "title":"雾霾不只伤肺，也许还会伤害你的“骨头”！",
	            "date_str":"半小时前",
	            "image":"https://media2.chunyuyisheng.com/@/media/images/2017/11/22/d1a6/613e94d1359f_w180_h150_.jpg?imageView2/1/w/120/h/116",
	            "news_id":114111,
	            "channel_id":21,
	            "view_times":409,
	            "type":"news",
	            "id":114111,
	            "digest":"美国哥伦比亚大学美尔曼公共卫生学院（Mailman School of Public Health）研究发现，空气中PM2.5颗粒的浓度升高的时候，因骨折而入院寻求治疗的患者人数也比较高，并且低收入社区当中，医院收治的骨折患者的数量也大大增加",
	            "channel_name":"生活"
	        },
	        {
	            "favor_num":2,
	            "img":"https://media2.chunyuyisheng.com/@/media/images/2017/11/21/560a/6e5ac10e49ab_w180_h150_.jpg?imageView2/1/w/120/h/116",
	            "title":"钱不是省出来的，红岭理财月月加薪！",
	            "date_str":"7小时前",
	            "image":"https://media2.chunyuyisheng.com/@/media/images/2017/11/21/560a/6e5ac10e49ab_w180_h150_.jpg?imageView2/1/w/120/h/116",
	            "news_id":113945,
	            "channel_id":21,
	            "view_times":3230,
	            "type":"news",
	            "id":113945,
	            "digest":"钱不是省出来的，红岭理财月月加薪！",
	            "channel_name":"生活"
	        },
	        {
	            "description":"",
	            "title":"备孕期间遭遇“排卵期ED”，该咋办？",
	            "url":"https://media2.chunyuyisheng.com/@/media/video/99ce33d1vodtransgzp1252638726/c485b3b49031868223496158398/v.f20.mp4",
	            "type":"video_segment",
	            "image":"https://media2.chunyuyisheng.com/@/media/images/2017/11/07/254a/bf8a5d883182_w729_h684_.png",
	            "lecture_status":"已结束",
	            "play_count":0,
	            "seconds":"01:41",
	            "room_id":428,
	            "duration":"01:41",
	            "lecture_id":467,
	            "date_str":"11月7日",
	            "id":2696,
	            "channel_name":"有请大医生"
	        }
	    ],

    }
		

    var str="";
    for(var i=0;i<res.hot_problems.length;i++){
    	str+='<div class="ask-list"><span class="wen">问</span><span class="question">'+res.hot_problems[i].title+'</span><p>'+res.hot_problems[i].ask+'</p></div>'
    };
    $(".ask-list-sss").html(str);

    var diseaseStr="";
    for(var j=0;j<res.popular_diseases.length;j++){
    	diseaseStr+='<li><a href="./lan-nochange.html?id='+res.popular_diseases[j].id+'">'+res.popular_diseases[j].name+'</a></li>'
    }
    $(".disease-list ul").html(diseaseStr)

    var healthStr="";
    for(var k=0;k<res.health_news.length;k++){
    	healthStr+='<div class="health-list"><img src="'+res.health_news[k].image+'"><div class="content"><span>'+res.health_news[k].title+'</span><p>'+res.health_news[k].channel_name+'</p><p class="time">'+res.health_news[k].date_str+'</p></div></div>'
    }
    $(".health-list-sss").html(healthStr)
})
