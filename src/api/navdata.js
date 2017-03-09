var navdata = [{
	id: "1",
	name: "首页",
	urls: "/",
	src: "home"
}, {
	id: "2",
	name: "学生",
	src: "user",
	children: [{
		id: "21",
		name: "认证学生",
		urls: "/student",
		src: "user"
	}, {
		id: "22",
		name: "未认证学生",
		urls: "/student",
		src: "user"
	}]
}, {
	id: "3",
	name: "活动管理",
	src: "setting",
	children: [{
		id: "31",
		name: "活动列表",
		urls: "/activity",
		src: "setting"
	}, {
		id: "32",
		name: "类别二",
		urls: "#",
		src: "setting"
	}, {
		id: "33",
		name: "类别三",
		urls: "#",
		src: "setting"
	}]
}, {
	id: "4",
	name: "文章",
	src: "setting",
	children: [{
		id: "41",
		name: "列表",
		urls: "#",
		src: "setting"
	},{
		id: "42",
		name: "类别",
		urls: "#",
		src: "setting"
	}]
}, {
	id: "5",
	name: "会员管理",
	src: "setting",
	children: [{
		id: "51",
		name: "用户",
		urls: "#",
		src: "setting"
	}]
}, {
	id: "6",
	name: "设置",
	src: "setting",
	children: [{
		id: "61",
		name: "基本设置",
		urls: "#",
		src: "setting"
	},{
		id: "62",
		name: "用户设置",
		urls: "#",
		src: "setting"
	}]
}];
module.exports = navdata;