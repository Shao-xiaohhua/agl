var agl=angular.module('aa',[]);
agl.controller('bb',['$scope',function($scope){
$scope.hahaha=123123;
    $scope.shuzu=[
        {name:1},
        {name:2},
        {name:3},
        {name:4},
        {name:5}
    ]
    $scope.shuju=[
    {name:'aa',tianqi:1},
        {name:'bb',tianqi:2},
            {name:'cc',tianqi:3},
                {name:'dd',tianqi:4},
    ]
        $scope.shuju2=[
    {name:'aaaaa',tianqi:1},
        {name:'bbbb',tianqi:2},
            {name:'cccc',tianqi:3},
                {name:'dddd',tianqi:4},
                    {name:'eeee',tianqi:5},
        {name:'ffff',tianqi:6},
            {name:'jjjjc',tianqi:7},
                {name:'hhhh',tianqi:8},
                    {name:'iiiiiiaa',tianqi:9}
    ]
}]);
agl.directive('lianxi',function(){
    return{
        restrict:'AE',
        templateUrl:'../tou.html',
        replace:true,
        link:function($scope,iElm,iAttrs){
          iElm.find('h2').on('click',function(){
              $(this).css({color:'blue'})
          })
            iElm.find('tr').on('click',function(){
                $(this).toggle(500);
            })
        }
    }
});
agl.directive('hahaha',function(){
    return{
        restrict:'AE',
        template:'<li><input type="text" ng-model="a.name"></li>',
        replace:true,

    }
})


agl.directive('lunbo',function(){
	return{
		restrict:'AE',
		templateUrl:'../bobo.html',
		replace:true,
		scope:{
		xxx:'=',
		time:'='
		},
		link:function(aa,bb,cc){
		    var index=1;
		    var tt=parseInt(aa.time);
		    var lunbo=function(){
		    var dd=bb.find('.xiao');
		    dd.removeClass('act');
		    dd.eq(index).addClass('act');
		    index+=1;
		    if(index===dd.length){
		    index=0;
		    }
		    console.log(index)
		    }
            setInterval(lunbo,tt);
		}
	}
})
