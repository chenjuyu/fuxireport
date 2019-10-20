var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20190312_syb_scopedata*/global.__wcc_version__='v0.5vv_20190312_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'tipqty']])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'idx'])
Z([3,'item'])
Z([[7],[3,'items']])
Z(z[0])
Z([3,'__l'])
Z([3,'__e'])
Z([[6],[[7],[3,'item']],[3,'checked']])
Z([[4],[[5],[[4],[[5],[[5],[1,'^change']],[[4],[[5],[[4],[[5],[1,'radioChange']]]]]]]]])
Z([[6],[[7],[3,'item']],[3,'name']])
Z([[6],[[7],[3,'item']],[3,'Quantity']])
Z([[6],[[7],[3,'item']],[3,'value']])
Z([[2,'+'],[1,'1-'],[[7],[3,'idx']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([[4],[[5],[[5],[1,'mask data-v-27fa1cd9']],[[2,'?:'],[[2,'!'],[[7],[3,'value']]],[1,''],[1,'mask-show']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'tapMask']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'popData']])
Z(z[3])
Z(z[0])
Z([[4],[[5],[[5],[1,'itemChild data-v-27fa1cd9']],[[2,'?:'],[[2,'=='],[[7],[3,'direction']],[1,'row']],[1,'solid-right'],[1,'solid-bottom']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'tapItem']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'popData']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([[6],[[7],[3,'item']],[3,'icon']])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'i'])
Z([3,'items'])
Z([[7],[3,'gridGroup']])
Z(z[0])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'items']])
Z(z[4])
Z([3,'__e'])
Z([[4],[[5],[[5],[[5],[1,'uni-grid-item']],[[2,'?:'],[[2,'=='],[[7],[3,'index']],[[7],[3,'columnNum']]],[1,'uni-grid-item-last'],[1,'']]],[[2,'+'],[1,'uni-grid-item-'],[[7],[3,'type']]]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'onClick']],[[4],[[5],[[5],[[5],[[7],[3,'i']]],[[7],[3,'index']]],[1,'$0']]]],[[4],[[5],[[4],[[5],[[5],[[4],[[5],[[5],[[5],[1,'gridGroup']],[1,'']],[[7],[3,'i']]]]],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'']],[[7],[3,'index']]],[1,'url']]]]]]]]]]]]]]])
Z([3,'uni-grid-item-hover'])
Z([1,20])
Z([1,70])
Z([[2,'+'],[[2,'+'],[1,'visibility:'],[[2,'?:'],[[6],[[7],[3,'item']],[3,'seize']],[1,'hidden'],[1,'inherit']]],[1,';']])
Z([[2,'!'],[[6],[[7],[3,'item']],[3,'seize']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'m-input-view'])
Z([[2,'&&'],[[2,'&&'],[[7],[3,'clearable_']],[[2,'!'],[[7],[3,'displayable_']]]],[[6],[[7],[3,'value']],[3,'length']]])
Z([3,'__l'])
Z([3,'__e'])
Z([3,'#666666'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[1,'clear']]]]]]]]])
Z([3,'20'])
Z([3,'clear'])
Z([3,'1'])
Z([[7],[3,'displayable_']])
Z(z[2])
Z(z[3])
Z([[2,'?:'],[[7],[3,'showPassword']],[1,'#666666'],[1,'#cccccc']])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[1,'display']]]]]]]]])
Z(z[6])
Z([3,'eye'])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[4],[[5],[[5],[1,'w-picker-cnt']],[[2,'?:'],[[7],[3,'showPicker']],[1,'show'],[1,'']]]])
Z([[2,'=='],[[7],[3,'mode']],[1,'linkage']])
Z([[2,'=='],[[7],[3,'mode']],[1,'half']])
Z([[2,'=='],[[7],[3,'mode']],[1,'date']])
Z([[2,'=='],[[7],[3,'mode']],[1,'yearMonth']])
Z([[2,'=='],[[7],[3,'mode']],[1,'dateTime']])
Z([[2,'=='],[[7],[3,'mode']],[1,'range']])
Z([[2,'=='],[[7],[3,'mode']],[1,'time']])
Z([[2,'=='],[[7],[3,'mode']],[1,'region']])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'bindChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'itemHeight']])
Z([[7],[3,'pickVal']])
Z([[2,'!'],[[7],[3,'hideArea']]])
Z([[2,'=='],[[7],[3,'mode']],[1,'selector']])
Z([[2,'=='],[[7],[3,'mode']],[1,'limit']])
Z([[2,'=='],[[7],[3,'mode']],[1,'limitHour']])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'text']])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'uni-navbar'])
Z([[4],[[5],[[5],[[5],[[5],[1,'uni-navbar__content']],[[2,'?:'],[[7],[3,'fixed']],[1,'uni-navbar--fixed'],[1,'']]],[[2,'?:'],[[7],[3,'border']],[1,'uni-navbar--shadow'],[1,'']]],[[2,'?:'],[[7],[3,'border']],[1,'uni-navbar--border'],[1,'']]]])
Z([[2,'+'],[[2,'+'],[1,'background-color:'],[[7],[3,'backgroundColor']]],[1,';']])
Z([[7],[3,'statusBar']])
Z([3,'__l'])
Z([3,'1'])
Z([3,'uni-navbar__header uni-navbar__content_view'])
Z([[2,'+'],[[2,'+'],[1,'color:'],[[7],[3,'color']]],[1,';']])
Z([3,'__e'])
Z([3,'uni-navbar__header-btns uni-navbar__content_view'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'onClickLeft']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[6],[[7],[3,'leftIcon']],[3,'length']])
Z(z[4])
Z([[7],[3,'color']])
Z([3,'24'])
Z([[7],[3,'leftIcon']])
Z([3,'2'])
Z([[6],[[7],[3,'leftText']],[3,'length']])
Z([3,'left'])
Z([3,'uni-navbar__header-container uni-navbar__content_view'])
Z([[6],[[7],[3,'title']],[3,'length']])
Z(z[8])
Z([[4],[[5],[[5],[1,'uni-navbar__header-btns uni-navbar__content_view']],[[2,'?:'],[[6],[[7],[3,'title']],[3,'length']],[1,'uni-navbar__header-btns-right'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'onClickRight']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[6],[[7],[3,'rightIcon']],[3,'length']])
Z(z[4])
Z(z[13])
Z(z[14])
Z([[7],[3,'rightIcon']])
Z([3,'3'])
Z([[2,'&&'],[[6],[[7],[3,'rightText']],[3,'length']],[[2,'!'],[[6],[[7],[3,'rightIcon']],[3,'length']]]])
Z([3,'right'])
Z([[7],[3,'fixed']])
Z(z[3])
Z(z[4])
Z([3,'4'])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'width:100%;'])
Z([3,'#108ee9'])
Z([3,'__l'])
Z([3,'__e'])
Z(z[3])
Z([3,'#FFF'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^clickLeft']],[[4],[[5],[[4],[[5],[1,'leftclick']]]]]]]],[[4],[[5],[[5],[1,'^clickRight']],[[4],[[5],[[4],[[5],[1,'rightclick']]]]]]]]])
Z([3,'back'])
Z([3,'返回'])
Z([3,'更多'])
Z([3,'false'])
Z(z[10])
Z([3,'货品详情'])
Z([3,'1'])
Z(z[2])
Z(z[3])
Z([3,'vue-ref'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^change']],[[4],[[5],[[4],[[5],[1,'ChangeType']]]]]]]]])
Z([3,'radio3'])
Z([[7],[3,'sartTime']])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([3,'input-group'])
Z([3,'__l'])
Z([3,'__e'])
Z([3,'m-input'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'username']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'请输入账号'])
Z([3,'text'])
Z([[7],[3,'username']])
Z([3,'1'])
Z(z[2])
Z(z[3])
Z(z[3])
Z([3,'send'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^confirm']],[[4],[[5],[[4],[[5],[1,'bindLogin']]]]]]]],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'password']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'请输入密码'])
Z([3,'password'])
Z([[7],[3,'password']])
Z([3,'2'])
Z([[7],[3,'hasProvider']])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([[7],[3,'hasLogin']])
Z([[2,'!'],[[7],[3,'hasLogin']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'email']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'请输入邮箱'])
Z([3,'text'])
Z([[7],[3,'email']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'input-group'])
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'account']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'请输入账号'])
Z([3,'text'])
Z([[7],[3,'account']])
Z([3,'1'])
Z(z[1])
Z(z[2])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'password']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'请输入密码'])
Z([3,'password'])
Z([[7],[3,'password']])
Z([3,'2'])
Z(z[1])
Z(z[2])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'email']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'请输入邮箱'])
Z(z[5])
Z([[7],[3,'email']])
Z([3,'3'])
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'warp'])
Z([3,'#108ee9'])
Z([3,'__l'])
Z([3,'__e'])
Z([[7],[3,'current0']])
Z([[4],[[5],[[4],[[5],[[5],[1,'^clickItem']],[[4],[[5],[[4],[[5],[1,'onClickItem0']]]]]]]]])
Z([3,'button'])
Z([[7],[3,'items0']])
Z([3,'1'])
Z(z[1])
Z(z[2])
Z(z[3])
Z([[7],[3,'current']])
Z([[4],[[5],[[4],[[5],[[5],[1,'^clickItem']],[[4],[[5],[[4],[[5],[1,'onClickItem']]]]]]]]])
Z(z[6])
Z([[7],[3,'items']])
Z([3,'2'])
Z([3,'content'])
Z(z[3])
Z(z[3])
Z(z[3])
Z([3,'scroll-Y'])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'scrolltoupper']],[[4],[[5],[[4],[[5],[[5],[1,'upper']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'scrolltolower']],[[4],[[5],[[4],[[5],[[5],[1,'lower']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'scroll']],[[4],[[5],[[4],[[5],[[5],[1,'scroll']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'scrollTop']])
Z([3,'true'])
Z([[2,'+'],[[2,'+'],[1,'height:'],[[2,'+'],[[7],[3,'height']],[1,'px']]],[1,';']])
Z([3,'index'])
Z([3,'ls'])
Z([[7],[3,'datalist']])
Z(z[26])
Z(z[3])
Z(z[3])
Z([3,'scrollitem'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'longpress']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'longpress']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'datalist']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'sitemclick']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'datalist']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([3,'hoverclass'])
Z([[2,'||'],[[2,'||'],[[2,'=='],[[7],[3,'current']],[1,1]],[[2,'=='],[[7],[3,'current']],[1,2]]],[[2,'=='],[[7],[3,'current']],[1,3]]])
Z([[2,'=='],[[7],[3,'current']],[1,5]])
Z(z[2])
Z([[7],[3,'loggingtype']])
Z([3,'3'])
Z(z[2])
Z(z[3])
Z(z[3])
Z([3,'vue-ref'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^tapPopup']],[[4],[[5],[[4],[[5],[1,'Popup']]]]]]]],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[1,'inputPopup']]]]]]]]])
Z([3,'vpop'])
Z([3,'bottom-end'])
Z([[7],[3,'chosemenu']])
Z([[7],[3,'showflag']])
Z([3,'4'])
Z([[7],[3,'x']])
Z([[7],[3,'y']])
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'warp'])
Z([3,'header'])
Z([3,'#108ee9'])
Z([3,'__l'])
Z([3,'__e'])
Z([[7],[3,'current0']])
Z([[4],[[5],[[4],[[5],[[5],[1,'^clickItem']],[[4],[[5],[[4],[[5],[1,'onClickItem0']]]]]]]]])
Z([3,'button'])
Z([[7],[3,'items0']])
Z([3,'1'])
Z(z[2])
Z(z[3])
Z(z[4])
Z([[7],[3,'current']])
Z([[4],[[5],[[4],[[5],[[5],[1,'^clickItem']],[[4],[[5],[[4],[[5],[1,'onClickItem']]]]]]]]])
Z(z[7])
Z([[7],[3,'items']])
Z([3,'2'])
Z([3,'index'])
Z([3,'ls'])
Z([[7],[3,'datalist']])
Z(z[18])
Z(z[4])
Z(z[4])
Z([3,'scrollitem'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'longpress']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'longpress']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'datalist']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'sitemclick']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'datalist']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([3,'hoverclass'])
Z([[2,'!='],[[7],[3,'current']],[1,5]])
Z([[2,'=='],[[7],[3,'current']],[1,5]])
Z([[2,'||'],[[2,'||'],[[2,'=='],[[7],[3,'current']],[1,1]],[[2,'=='],[[7],[3,'current']],[1,2]]],[[2,'=='],[[7],[3,'current']],[1,3]]])
Z(z[28])
Z(z[3])
Z(z[4])
Z(z[4])
Z([3,'vue-ref'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^tapPopup']],[[4],[[5],[[4],[[5],[1,'Popup']]]]]]]],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[1,'inputPopup']]]]]]]]])
Z([3,'vpop'])
Z([3,'bottom-end'])
Z([[7],[3,'chosemenu']])
Z([[7],[3,'showflag']])
Z([3,'3'])
Z([[7],[3,'x']])
Z([[7],[3,'y']])
Z(z[3])
Z(z[4])
Z(z[4])
Z(z[34])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^tapPopup']],[[4],[[5],[[4],[[5],[1,'Popup2']]]]]]]],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[1,'inputPopup']]]]]]]]])
Z([3,'vsort'])
Z([3,'bottom-start'])
Z([[7],[3,'sortmenu']])
Z([[7],[3,'vsortshow']])
Z([3,'4'])
Z([[7],[3,'x2']])
Z(z[42])
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'4'])
Z([[7],[3,'options']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([1,true])
Z([[7],[3,'loadingType']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z([3,'vue-ref'])
Z([1,true])
Z([[4],[[5],[[4],[[5],[[5],[1,'^confirm']],[[4],[[5],[[4],[[5],[1,'onConfirm']]]]]]]]])
Z([3,'BeginDate'])
Z([[4],[[5],[[5],[[5],[1,2]],[1,1]],[1,3]]])
Z([1,false])
Z([3,'2099'])
Z([3,'date'])
Z([3,'1930'])
Z([3,'#108ee9'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
function gz$gwx_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx_27)return __WXML_GLOBAL__.ops_cached.$gwx_27
__WXML_GLOBAL__.ops_cached.$gwx_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'btn-row'])
Z([[2,'!'],[[7],[3,'hasLogin']]])
Z([[7],[3,'hasLogin']])
})(__WXML_GLOBAL__.ops_cached.$gwx_27);return __WXML_GLOBAL__.ops_cached.$gwx_27
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/axb-checkbox/axb-checkbox-item.wxml','./components/axb-checkbox/axb-checkbox.wxml','./components/chunLei-popups/chunLei-popups.wxml','./components/gird.wxml','./components/m-icon/m-icon.wxml','./components/m-input.wxml','./components/uni-segmented-control/uni-segmented-control.wxml','./components/w-picker/w-picker.wxml','./node-modules/@dcloudio/uni-ui/lib/uni-badge/uni-badge.wxml','./node-modules/@dcloudio/uni-ui/lib/uni-icons/uni-icons.wxml','./node-modules/@dcloudio/uni-ui/lib/uni-list/uni-list.wxml','./node-modules/@dcloudio/uni-ui/lib/uni-load-more/uni-load-more.wxml','./node-modules/@dcloudio/uni-ui/lib/uni-nav-bar/uni-nav-bar.wxml','./node-modules/@dcloudio/uni-ui/lib/uni-status-bar/uni-status-bar.wxml','./pages/goodsdetail/goodsdetail.wxml','./pages/login/ip.wxml','./pages/login/login.wxml','./pages/main/main.wxml','./pages/pwd/pwd.wxml','./pages/reg/reg.wxml','./pages/reportmenu/pos05.wxml','./pages/reportmenu/posreport.wxml','./pages/reportmenu/posreportdetail.wxml','./pages/reportmenu/purchasemenu.wxml','./pages/select/select.wxml','./pages/select/selectdate.wxml','./pages/user/user.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_v()
_(r,oB)
if(_oz(z,0,e,s,gg)){oB.wxVkey=1
}
oB.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var oD=_v()
_(r,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_mz(z,'filter-radio-item',['bind:__l',4,'bind:change',1,'checked',2,'data-event-opts',3,'name',4,'tipqty',5,'value',6,'vueId',7],[],hG,cF,gg)
_(oH,oJ)
return oH
}
oD.wxXCkey=4
_2z(z,2,fE,e,s,gg,oD,'item','idx','idx')
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var aL=_mz(z,'view',['bindtap',0,'class',1,'data-event-opts',1],[],e,s,gg)
var tM=_v()
_(aL,tM)
var eN=function(oP,bO,xQ,gg){
var fS=_mz(z,'view',['catchtap',7,'class',1,'data-event-opts',2],[],oP,bO,gg)
var cT=_v()
_(fS,cT)
if(_oz(z,10,oP,bO,gg)){cT.wxVkey=1
}
cT.wxXCkey=1
_(xQ,fS)
return xQ
}
tM.wxXCkey=2
_2z(z,5,eN,e,s,gg,tM,'item','index','index')
_(r,aL)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var oV=_v()
_(r,oV)
var cW=function(lY,oX,aZ,gg){
var e2=_v()
_(aZ,e2)
var b3=function(x5,o4,o6,gg){
var c8=_mz(z,'view',['bindtap',8,'class',1,'data-event-opts',2,'hoverClass',3,'hoverStartTime',4,'hoverStayTime',5,'style',6],[],x5,o4,gg)
var h9=_v()
_(c8,h9)
if(_oz(z,15,x5,o4,gg)){h9.wxVkey=1
}
h9.wxXCkey=1
_(o6,c8)
return o6
}
e2.wxXCkey=2
_2z(z,6,b3,lY,oX,gg,e2,'item','index','index')
return aZ
}
oV.wxXCkey=2
_2z(z,2,cW,e,s,gg,oV,'items','i','i')
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var oBB=_n('view')
_rz(z,oBB,'class',0,e,s,gg)
var lCB=_v()
_(oBB,lCB)
if(_oz(z,1,e,s,gg)){lCB.wxVkey=1
var tEB=_mz(z,'m-icon',['bind:__l',2,'bind:click',1,'color',2,'data-event-opts',3,'size',4,'type',5,'vueId',6],[],e,s,gg)
_(lCB,tEB)
}
var aDB=_v()
_(oBB,aDB)
if(_oz(z,9,e,s,gg)){aDB.wxVkey=1
var eFB=_mz(z,'m-icon',['bind:__l',10,'bind:click',1,'color',2,'data-event-opts',3,'size',4,'type',5,'vueId',6],[],e,s,gg)
_(aDB,eFB)
}
lCB.wxXCkey=1
lCB.wxXCkey=3
aDB.wxXCkey=1
aDB.wxXCkey=3
_(r,oBB)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var xIB=_n('view')
_rz(z,xIB,'class',0,e,s,gg)
var oJB=_v()
_(xIB,oJB)
if(_oz(z,1,e,s,gg)){oJB.wxVkey=1
}
var fKB=_v()
_(xIB,fKB)
if(_oz(z,2,e,s,gg)){fKB.wxVkey=1
}
var cLB=_v()
_(xIB,cLB)
if(_oz(z,3,e,s,gg)){cLB.wxVkey=1
}
var hMB=_v()
_(xIB,hMB)
if(_oz(z,4,e,s,gg)){hMB.wxVkey=1
}
var oNB=_v()
_(xIB,oNB)
if(_oz(z,5,e,s,gg)){oNB.wxVkey=1
}
var cOB=_v()
_(xIB,cOB)
if(_oz(z,6,e,s,gg)){cOB.wxVkey=1
}
var oPB=_v()
_(xIB,oPB)
if(_oz(z,7,e,s,gg)){oPB.wxVkey=1
}
var lQB=_v()
_(xIB,lQB)
if(_oz(z,8,e,s,gg)){lQB.wxVkey=1
var bUB=_mz(z,'picker-view',['bindchange',9,'data-event-opts',1,'indicatorStyle',2,'value',3],[],e,s,gg)
var oVB=_v()
_(bUB,oVB)
if(_oz(z,13,e,s,gg)){oVB.wxVkey=1
}
oVB.wxXCkey=1
_(lQB,bUB)
}
var aRB=_v()
_(xIB,aRB)
if(_oz(z,14,e,s,gg)){aRB.wxVkey=1
}
var tSB=_v()
_(xIB,tSB)
if(_oz(z,15,e,s,gg)){tSB.wxVkey=1
}
var eTB=_v()
_(xIB,eTB)
if(_oz(z,16,e,s,gg)){eTB.wxVkey=1
}
oJB.wxXCkey=1
fKB.wxXCkey=1
cLB.wxXCkey=1
hMB.wxXCkey=1
oNB.wxXCkey=1
cOB.wxXCkey=1
oPB.wxXCkey=1
lQB.wxXCkey=1
aRB.wxXCkey=1
tSB.wxXCkey=1
eTB.wxXCkey=1
_(r,xIB)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var oXB=_v()
_(r,oXB)
if(_oz(z,0,e,s,gg)){oXB.wxVkey=1
}
oXB.wxXCkey=1
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var h1B=_n('slot')
_(r,h1B)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var o4B=_n('view')
_rz(z,o4B,'class',0,e,s,gg)
var a6B=_mz(z,'view',['class',1,'style',1],[],e,s,gg)
var t7B=_v()
_(a6B,t7B)
if(_oz(z,3,e,s,gg)){t7B.wxVkey=1
var e8B=_mz(z,'uni-status-bar',['bind:__l',4,'vueId',1],[],e,s,gg)
_(t7B,e8B)
}
var b9B=_mz(z,'view',['class',6,'style',1],[],e,s,gg)
var o0B=_mz(z,'view',['bindtap',8,'class',1,'data-event-opts',2],[],e,s,gg)
var xAC=_v()
_(o0B,xAC)
if(_oz(z,11,e,s,gg)){xAC.wxVkey=1
var fCC=_mz(z,'uni-icons',['bind:__l',12,'color',1,'size',2,'type',3,'vueId',4],[],e,s,gg)
_(xAC,fCC)
}
var oBC=_v()
_(o0B,oBC)
if(_oz(z,17,e,s,gg)){oBC.wxVkey=1
}
var cDC=_n('slot')
_rz(z,cDC,'name',18,e,s,gg)
_(o0B,cDC)
xAC.wxXCkey=1
xAC.wxXCkey=3
oBC.wxXCkey=1
_(b9B,o0B)
var hEC=_n('view')
_rz(z,hEC,'class',19,e,s,gg)
var oFC=_v()
_(hEC,oFC)
if(_oz(z,20,e,s,gg)){oFC.wxVkey=1
}
var cGC=_n('slot')
_(hEC,cGC)
oFC.wxXCkey=1
_(b9B,hEC)
var oHC=_mz(z,'view',['bindtap',21,'class',1,'data-event-opts',2],[],e,s,gg)
var lIC=_v()
_(oHC,lIC)
if(_oz(z,24,e,s,gg)){lIC.wxVkey=1
var tKC=_mz(z,'uni-icons',['bind:__l',25,'color',1,'size',2,'type',3,'vueId',4],[],e,s,gg)
_(lIC,tKC)
}
var aJC=_v()
_(oHC,aJC)
if(_oz(z,30,e,s,gg)){aJC.wxVkey=1
}
var eLC=_n('slot')
_rz(z,eLC,'name',31,e,s,gg)
_(oHC,eLC)
lIC.wxXCkey=1
lIC.wxXCkey=3
aJC.wxXCkey=1
_(b9B,oHC)
_(a6B,b9B)
t7B.wxXCkey=1
t7B.wxXCkey=3
_(o4B,a6B)
var l5B=_v()
_(o4B,l5B)
if(_oz(z,32,e,s,gg)){l5B.wxVkey=1
var bMC=_v()
_(l5B,bMC)
if(_oz(z,33,e,s,gg)){bMC.wxVkey=1
var oNC=_mz(z,'uni-status-bar',['bind:__l',34,'vueId',1],[],e,s,gg)
_(bMC,oNC)
}
bMC.wxXCkey=1
bMC.wxXCkey=3
}
l5B.wxXCkey=1
l5B.wxXCkey=3
_(r,o4B)
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var oPC=_n('slot')
_(r,oPC)
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
var cRC=_n('view')
_rz(z,cRC,'style',0,e,s,gg)
var hSC=_mz(z,'uni-nav-bar',['backgroundColor',1,'bind:__l',1,'bind:clickLeft',2,'bind:clickRight',3,'color',4,'data-event-opts',5,'leftIcon',6,'leftText',7,'rightText',8,'shadow',9,'statusBar',10,'title',11,'vueId',12],[],e,s,gg)
_(cRC,hSC)
var oTC=_mz(z,'axb-check-box',['bind:__l',14,'bind:change',1,'class',2,'data-event-opts',3,'data-ref',4,'list',5,'vueId',6],[],e,s,gg)
_(cRC,oTC)
_(r,cRC)
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
var lWC=_n('view')
_rz(z,lWC,'class',0,e,s,gg)
var tYC=_n('view')
_rz(z,tYC,'class',1,e,s,gg)
var eZC=_mz(z,'m-input',['clearable',-1,'focus',-1,'bind:__l',2,'bind:input',1,'class',2,'data-event-opts',3,'placeholder',4,'type',5,'value',6,'vueId',7],[],e,s,gg)
_(tYC,eZC)
var b1C=_mz(z,'m-input',['displayable',-1,'bind:__l',10,'bind:confirm',1,'bind:input',2,'confirmType',3,'data-event-opts',4,'placeholder',5,'type',6,'value',7,'vueId',8],[],e,s,gg)
_(tYC,b1C)
_(lWC,tYC)
var aXC=_v()
_(lWC,aXC)
if(_oz(z,19,e,s,gg)){aXC.wxVkey=1
}
aXC.wxXCkey=1
_(r,lWC)
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
var x3C=_n('view')
_rz(z,x3C,'class',0,e,s,gg)
var o4C=_v()
_(x3C,o4C)
if(_oz(z,1,e,s,gg)){o4C.wxVkey=1
}
var f5C=_v()
_(x3C,f5C)
if(_oz(z,2,e,s,gg)){f5C.wxVkey=1
}
o4C.wxXCkey=1
f5C.wxXCkey=1
_(r,x3C)
return r
}
e_[x[17]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
var h7C=_mz(z,'m-input',['clearable',-1,'focus',-1,'bind:__l',0,'bind:input',1,'data-event-opts',1,'placeholder',2,'type',3,'value',4,'vueId',5],[],e,s,gg)
_(r,h7C)
return r
}
e_[x[18]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
var c9C=_n('view')
_rz(z,c9C,'class',0,e,s,gg)
var o0C=_mz(z,'m-input',['clearable',-1,'focus',-1,'bind:__l',1,'bind:input',1,'data-event-opts',2,'placeholder',3,'type',4,'value',5,'vueId',6],[],e,s,gg)
_(c9C,o0C)
var lAD=_mz(z,'m-input',['displayable',-1,'bind:__l',8,'bind:input',1,'data-event-opts',2,'placeholder',3,'type',4,'value',5,'vueId',6],[],e,s,gg)
_(c9C,lAD)
var aBD=_mz(z,'m-input',['clearable',-1,'bind:__l',15,'bind:input',1,'data-event-opts',2,'placeholder',3,'type',4,'value',5,'vueId',6],[],e,s,gg)
_(c9C,aBD)
_(r,c9C)
return r
}
e_[x[19]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
var eDD=_n('view')
_rz(z,eDD,'class',0,e,s,gg)
var bED=_mz(z,'uni-segmented-control',['activeColor',1,'bind:__l',1,'bind:clickItem',2,'current',3,'data-event-opts',4,'styleType',5,'values',6,'vueId',7],[],e,s,gg)
_(eDD,bED)
var oFD=_mz(z,'uni-segmented-control',['activeColor',9,'bind:__l',1,'bind:clickItem',2,'current',3,'data-event-opts',4,'styleType',5,'values',6,'vueId',7],[],e,s,gg)
_(eDD,oFD)
var xGD=_n('view')
_rz(z,xGD,'class',17,e,s,gg)
var oHD=_mz(z,'scroll-view',['catchscroll',18,'catchscrolltolower',1,'catchscrolltoupper',2,'class',3,'data-event-opts',4,'scrollTop',5,'scrollY',6,'style',7],[],e,s,gg)
var fID=_v()
_(oHD,fID)
var cJD=function(oLD,hKD,cMD,gg){
var lOD=_mz(z,'view',['bindlongpress',30,'bindtap',1,'class',2,'data-event-opts',3,'hoverClass',4],[],oLD,hKD,gg)
var aPD=_v()
_(lOD,aPD)
if(_oz(z,35,oLD,hKD,gg)){aPD.wxVkey=1
}
var tQD=_v()
_(lOD,tQD)
if(_oz(z,36,oLD,hKD,gg)){tQD.wxVkey=1
}
aPD.wxXCkey=1
tQD.wxXCkey=1
_(cMD,lOD)
return cMD
}
fID.wxXCkey=2
_2z(z,28,cJD,e,s,gg,fID,'ls','index','index')
_(xGD,oHD)
var eRD=_mz(z,'uni-load-more',['bind:__l',37,'status',1,'vueId',2],[],e,s,gg)
_(xGD,eRD)
_(eDD,xGD)
var bSD=_mz(z,'popups',['bind:__l',40,'bind:input',1,'bind:tapPopup',2,'class',3,'data-event-opts',4,'data-ref',5,'placement',6,'popData',7,'value',8,'vueId',9,'x',10,'y',11],[],e,s,gg)
_(eDD,bSD)
_(r,eDD)
return r
}
e_[x[20]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
var xUD=_n('view')
_rz(z,xUD,'class',0,e,s,gg)
var oVD=_n('view')
_rz(z,oVD,'class',1,e,s,gg)
var fWD=_mz(z,'uni-segmented-control',['activeColor',2,'bind:__l',1,'bind:clickItem',2,'current',3,'data-event-opts',4,'styleType',5,'values',6,'vueId',7],[],e,s,gg)
_(oVD,fWD)
var cXD=_mz(z,'uni-segmented-control',['activeColor',10,'bind:__l',1,'bind:clickItem',2,'current',3,'data-event-opts',4,'styleType',5,'values',6,'vueId',7],[],e,s,gg)
_(oVD,cXD)
_(xUD,oVD)
var hYD=_v()
_(xUD,hYD)
var oZD=function(o2D,c1D,l3D,gg){
var t5D=_mz(z,'view',['bindlongpress',22,'bindtap',1,'class',2,'data-event-opts',3,'hoverClass',4],[],o2D,c1D,gg)
var e6D=_v()
_(t5D,e6D)
if(_oz(z,27,o2D,c1D,gg)){e6D.wxVkey=1
}
var b7D=_v()
_(t5D,b7D)
if(_oz(z,28,o2D,c1D,gg)){b7D.wxVkey=1
}
var o8D=_v()
_(t5D,o8D)
if(_oz(z,29,o2D,c1D,gg)){o8D.wxVkey=1
}
var x9D=_v()
_(t5D,x9D)
if(_oz(z,30,o2D,c1D,gg)){x9D.wxVkey=1
}
e6D.wxXCkey=1
b7D.wxXCkey=1
o8D.wxXCkey=1
x9D.wxXCkey=1
_(l3D,t5D)
return l3D
}
hYD.wxXCkey=2
_2z(z,20,oZD,e,s,gg,hYD,'ls','index','index')
var o0D=_mz(z,'popups',['bind:__l',31,'bind:input',1,'bind:tapPopup',2,'class',3,'data-event-opts',4,'data-ref',5,'placement',6,'popData',7,'value',8,'vueId',9,'x',10,'y',11],[],e,s,gg)
_(xUD,o0D)
var fAE=_mz(z,'popups',['bind:__l',43,'bind:input',1,'bind:tapPopup',2,'class',3,'data-event-opts',4,'data-ref',5,'placement',6,'popData',7,'value',8,'vueId',9,'x',10,'y',11],[],e,s,gg)
_(xUD,fAE)
_(r,xUD)
return r
}
e_[x[21]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
return r
}
e_[x[22]]={f:m22,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
var oDE=_mz(z,'uni-grid',['bind:__l',0,'columnNum',1,'options',1,'vueId',2],[],e,s,gg)
_(r,oDE)
return r
}
e_[x[23]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[24]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
var oFE=_mz(z,'uni-load-more',['bind:__l',0,'showIcon',1,'status',1,'vueId',2],[],e,s,gg)
_(r,oFE)
return r
}
e_[x[24]]={f:m24,j:[],i:[],ti:[],ic:[]}
d_[x[25]]={}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
var aHE=_mz(z,'w-picker',['bind:__l',0,'bind:confirm',1,'class',1,'current',2,'data-event-opts',3,'data-ref',4,'defaultVal',5,'disabledAfter',6,'endYear',7,'mode',8,'startYear',9,'themeColor',10,'vueId',11],[],e,s,gg)
_(r,aHE)
return r
}
e_[x[25]]={f:m25,j:[],i:[],ti:[],ic:[]}
d_[x[26]]={}
var m26=function(e,s,r,gg){
var z=gz$gwx_27()
var eJE=_n('view')
_rz(z,eJE,'class',0,e,s,gg)
var bKE=_v()
_(eJE,bKE)
if(_oz(z,1,e,s,gg)){bKE.wxVkey=1
}
var oLE=_v()
_(eJE,oLE)
if(_oz(z,2,e,s,gg)){oLE.wxVkey=1
}
bKE.wxXCkey=1
oLE.wxXCkey=1
_(r,eJE)
return r
}
e_[x[26]]={f:m26,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/login/login","pages/reportmenu/pos05","pages/reportmenu/posreport","pages/select/selectdate","pages/goodsdetail/goodsdetail","pages/reportmenu/purchasemenu","pages/reportmenu/posreportdetail","pages/select/select","pages/login/ip","pages/main/main","pages/reg/reg","pages/pwd/pwd","pages/user/user"],"window":{"navigationBarTextStyle":"white","navigationBarBackgroundColor":"#108ee9","backgroundColor":"#108ee9"},"tabBar":{"color":"#7a7e83","selectedColor":"#0faeff","backgroundColor":"#ffffff","list":[{"pagePath":"pages/main/main","text":"采购报表","iconPath":"static/img/purchase.png","selectedIconPath":"static/img/purchaseHL.png"},{"pagePath":"pages/main/main","text":"批发报表","iconPath":"static/img/sales.png","selectedIconPath":"static/img/salesHL.png"},{"pagePath":"pages/user/user","text":"库存报表","iconPath":"static/img/stock.png","selectedIconPath":"static/img/stockHL.png"},{"pagePath":"pages/user/user","text":"零售报表","iconPath":"static/img/pos.png","selectedIconPath":"static/img/posHL.png"}]},"networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":300000,"downloadFile":3600000},"nvueCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"数据报表","compilerVersion":"2.3.3","usingComponents":{}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/axb-checkbox/axb-checkbox-item.json']={"usingComponents":{"uni-badge":"/node-modules/@dcloudio/uni-ui/lib/uni-badge/uni-badge"},"component":true};
__wxAppCode__['components/axb-checkbox/axb-checkbox-item.wxml']=$gwx('./components/axb-checkbox/axb-checkbox-item.wxml');

__wxAppCode__['components/axb-checkbox/axb-checkbox.json']={"usingComponents":{"filter-radio-item":"/components/axb-checkbox/axb-checkbox-item"},"component":true};
__wxAppCode__['components/axb-checkbox/axb-checkbox.wxml']=$gwx('./components/axb-checkbox/axb-checkbox.wxml');

__wxAppCode__['components/chunLei-popups/chunLei-popups.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/chunLei-popups/chunLei-popups.wxml']=$gwx('./components/chunLei-popups/chunLei-popups.wxml');

__wxAppCode__['components/gird.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/gird.wxml']=$gwx('./components/gird.wxml');

__wxAppCode__['components/m-icon/m-icon.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/m-icon/m-icon.wxml']=$gwx('./components/m-icon/m-icon.wxml');

__wxAppCode__['components/m-input.json']={"usingComponents":{"m-icon":"/components/m-icon/m-icon"},"component":true};
__wxAppCode__['components/m-input.wxml']=$gwx('./components/m-input.wxml');

__wxAppCode__['components/uni-segmented-control/uni-segmented-control.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-segmented-control/uni-segmented-control.wxml']=$gwx('./components/uni-segmented-control/uni-segmented-control.wxml');

__wxAppCode__['components/w-picker/w-picker.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/w-picker/w-picker.wxml']=$gwx('./components/w-picker/w-picker.wxml');

__wxAppCode__['node-modules/@dcloudio/uni-ui/lib/uni-badge/uni-badge.json']={"usingComponents":{},"component":true};
__wxAppCode__['node-modules/@dcloudio/uni-ui/lib/uni-badge/uni-badge.wxml']=$gwx('./node-modules/@dcloudio/uni-ui/lib/uni-badge/uni-badge.wxml');

__wxAppCode__['node-modules/@dcloudio/uni-ui/lib/uni-icons/uni-icons.json']={"usingComponents":{},"component":true};
__wxAppCode__['node-modules/@dcloudio/uni-ui/lib/uni-icons/uni-icons.wxml']=$gwx('./node-modules/@dcloudio/uni-ui/lib/uni-icons/uni-icons.wxml');

__wxAppCode__['node-modules/@dcloudio/uni-ui/lib/uni-list/uni-list.json']={"usingComponents":{},"component":true};
__wxAppCode__['node-modules/@dcloudio/uni-ui/lib/uni-list/uni-list.wxml']=$gwx('./node-modules/@dcloudio/uni-ui/lib/uni-list/uni-list.wxml');

__wxAppCode__['node-modules/@dcloudio/uni-ui/lib/uni-load-more/uni-load-more.json']={"usingComponents":{},"component":true};
__wxAppCode__['node-modules/@dcloudio/uni-ui/lib/uni-load-more/uni-load-more.wxml']=$gwx('./node-modules/@dcloudio/uni-ui/lib/uni-load-more/uni-load-more.wxml');

__wxAppCode__['node-modules/@dcloudio/uni-ui/lib/uni-nav-bar/uni-nav-bar.json']={"usingComponents":{"uni-status-bar":"/node-modules/@dcloudio/uni-ui/lib/uni-status-bar/uni-status-bar","uni-icons":"/node-modules/@dcloudio/uni-ui/lib/uni-icons/uni-icons"},"component":true};
__wxAppCode__['node-modules/@dcloudio/uni-ui/lib/uni-nav-bar/uni-nav-bar.wxml']=$gwx('./node-modules/@dcloudio/uni-ui/lib/uni-nav-bar/uni-nav-bar.wxml');

__wxAppCode__['node-modules/@dcloudio/uni-ui/lib/uni-status-bar/uni-status-bar.json']={"usingComponents":{},"component":true};
__wxAppCode__['node-modules/@dcloudio/uni-ui/lib/uni-status-bar/uni-status-bar.wxml']=$gwx('./node-modules/@dcloudio/uni-ui/lib/uni-status-bar/uni-status-bar.wxml');

__wxAppCode__['pages/goodsdetail/goodsdetail.json']={"navigationStyle":"custom","bounce":"none","titleNView":false,"usingComponents":{"uni-nav-bar":"/node-modules/@dcloudio/uni-ui/lib/uni-nav-bar/uni-nav-bar","axb-check-box":"/components/axb-checkbox/axb-checkbox"}};
__wxAppCode__['pages/goodsdetail/goodsdetail.wxml']=$gwx('./pages/goodsdetail/goodsdetail.wxml');

__wxAppCode__['pages/login/ip.json']={"navigationBarTitleText":"设置服务器地址","usingComponents":{}};
__wxAppCode__['pages/login/ip.wxml']=$gwx('./pages/login/ip.wxml');

__wxAppCode__['pages/login/login.json']={"navigationBarTitleText":"登录","softinputMode":"adjustPan","usingComponents":{"m-input":"/components/m-input"}};
__wxAppCode__['pages/login/login.wxml']=$gwx('./pages/login/login.wxml');

__wxAppCode__['pages/main/main.json']={"navigationBarTitleText":"登录模板","usingComponents":{}};
__wxAppCode__['pages/main/main.wxml']=$gwx('./pages/main/main.wxml');

__wxAppCode__['pages/pwd/pwd.json']={"navigationBarTitleText":"找回密码","usingComponents":{"m-input":"/components/m-input"}};
__wxAppCode__['pages/pwd/pwd.wxml']=$gwx('./pages/pwd/pwd.wxml');

__wxAppCode__['pages/reg/reg.json']={"navigationBarTitleText":"注册","usingComponents":{"m-input":"/components/m-input"}};
__wxAppCode__['pages/reg/reg.wxml']=$gwx('./pages/reg/reg.wxml');

__wxAppCode__['pages/reportmenu/pos05.json']={"enablePullDownRefresh":false,"navigationBarTitleText":"零售分析","bounce":"none","titleNView":{"buttons":[{"type":"back","float":"left"},{"float":"right","text":"","fontSrc":"/static/uni.ttf","fontSize":"22px","color":"#FFFFFF"}]},"usingComponents":{"uni-nav-bar":"/node-modules/@dcloudio/uni-ui/lib/uni-nav-bar/uni-nav-bar","uni-load-more":"/node-modules/@dcloudio/uni-ui/lib/uni-load-more/uni-load-more","uni-segmented-control":"/components/uni-segmented-control/uni-segmented-control","popups":"/components/chunLei-popups/chunLei-popups"}};
__wxAppCode__['pages/reportmenu/pos05.wxml']=$gwx('./pages/reportmenu/pos05.wxml');

__wxAppCode__['pages/reportmenu/posreport.json']={"enablePullDownRefresh":false,"navigationBarTitleText":"零售分析","bounce":"none","titleNView":{"buttons":[{"float":"right","text":"","fontSrc":"/static/uni.ttf","fontSize":"22px","color":"#FFFFFF"}]},"usingComponents":{"uni-nav-bar":"/node-modules/@dcloudio/uni-ui/lib/uni-nav-bar/uni-nav-bar","uni-load-more":"/node-modules/@dcloudio/uni-ui/lib/uni-load-more/uni-load-more","uni-segmented-control":"/components/uni-segmented-control/uni-segmented-control","popups":"/components/chunLei-popups/chunLei-popups"}};
__wxAppCode__['pages/reportmenu/posreport.wxml']=$gwx('./pages/reportmenu/posreport.wxml');

__wxAppCode__['pages/reportmenu/posreportdetail.json']={"navigationBarTitleText":"货品分析","usingComponents":{}};
__wxAppCode__['pages/reportmenu/posreportdetail.wxml']=$gwx('./pages/reportmenu/posreportdetail.wxml');

__wxAppCode__['pages/reportmenu/purchasemenu.json']={"navigationBarTitleText":"报表菜单","usingComponents":{"uni-nav-bar":"/node-modules/@dcloudio/uni-ui/lib/uni-nav-bar/uni-nav-bar","uni-grid":"/components/gird"}};
__wxAppCode__['pages/reportmenu/purchasemenu.wxml']=$gwx('./pages/reportmenu/purchasemenu.wxml');

__wxAppCode__['pages/select/select.json']={"navigationBarTitleText":"资料选择","bounce":"none","titleNView":{"buttons":[{"type":"none","text":"✓","float":"right"}]},"usingComponents":{"uni-list":"/node-modules/@dcloudio/uni-ui/lib/uni-list/uni-list","uni-load-more":"/node-modules/@dcloudio/uni-ui/lib/uni-load-more/uni-load-more","uni-nav-bar":"/node-modules/@dcloudio/uni-ui/lib/uni-nav-bar/uni-nav-bar"}};
__wxAppCode__['pages/select/select.wxml']=$gwx('./pages/select/select.wxml');

__wxAppCode__['pages/select/selectdate.json']={"navigationBarTitleText":"查询条件","bounce":"none","titleNView":{"buttons":[{"type":"none","text":"✓","float":"right"}]},"usingComponents":{"w-picker":"/components/w-picker/w-picker"}};
__wxAppCode__['pages/select/selectdate.wxml']=$gwx('./pages/select/selectdate.wxml');

__wxAppCode__['pages/user/user.json']={"navigationBarTitleText":"我的","usingComponents":{}};
__wxAppCode__['pages/user/user.wxml']=$gwx('./pages/user/user.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"5f05":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={onLaunch:function(){console.log(e("App Launch"," at App.vue:4"))},onShow:function(){console.log(e("App Show"," at App.vue:7"))},onHide:function(){console.log(e("App Hide"," at App.vue:10"))}};t.default=n}).call(this,n("0de9")["default"])},6462:function(e,t,n){},"925e":function(e,t,n){"use strict";n.r(t);var o=n("9fc3");for(var u in o)"default"!==u&&function(e){n.d(t,e,function(){return o[e]})}(u);n("f63e");var c,r,f=n("2877"),a=Object(f["a"])(o["default"],c,r,!1,null,null,null);t["default"]=a.exports},"9fc3":function(e,t,n){"use strict";n.r(t);var o=n("5f05"),u=n.n(o);for(var c in o)"default"!==c&&function(e){n.d(t,e,function(){return o[e]})}(c);t["default"]=u.a},ecb7:function(e,t,n){"use strict";(function(e){n("42c6"),n("921b");var t=c(n("66fd")),o=c(n("925e")),u=c(n("cd8c"));function c(e){return e&&e.__esModule?e:{default:e}}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){f(e,t,n[t])})}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.default.config.productionTip=!1,t.default.prototype.$store=u.default,o.default.mpType="app";var a=new t.default(r({store:u.default},o.default));e(a).$mount()}).call(this,n("6e42")["createApp"])},f63e:function(e,t,n){"use strict";var o=n("6462"),u=n.n(o);u.a}},[["ecb7","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function n(n) {
    for (var i, u, c = n[0], l = n[1], d = n[2], s = 0, a = []; s < c.length; s++) {
      u = c[s], t[u] && a.push(t[u][0]), t[u] = 0;
    }

    for (i in l) {
      Object.prototype.hasOwnProperty.call(l, i) && (e[i] = l[i]);
    }

    m && m(n);

    while (a.length) {
      a.shift()();
    }

    return r.push.apply(r, d || []), o();
  }

  function o() {
    for (var e, n = 0; n < r.length; n++) {
      for (var o = r[n], i = !0, u = 1; u < o.length; u++) {
        var c = o[u];
        0 !== t[c] && (i = !1);
      }

      i && (r.splice(n--, 1), e = l(l.s = o[0]));
    }

    return e;
  }

  var i = {},
      u = {
    "common/runtime": 0
  },
      t = {
    "common/runtime": 0
  },
      r = [];

  function c(e) {
    return l.p + "" + e + ".js";
  }

  function l(n) {
    if (i[n]) return i[n].exports;
    var o = i[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(o.exports, o, o.exports, l), o.l = !0, o.exports;
  }

  l.e = function (e) {
    var n = [],
        o = {
      "components/m-input": 1,
      "components/chunLei-popups/chunLei-popups": 1,
      "components/uni-segmented-control/uni-segmented-control": 1,
      "node-modules/@dcloudio/uni-ui/lib/uni-load-more/uni-load-more": 1,
      "node-modules/@dcloudio/uni-ui/lib/uni-nav-bar/uni-nav-bar": 1,
      "components/w-picker/w-picker": 1,
      "components/axb-checkbox/axb-checkbox": 1,
      "components/gird": 1,
      "node-modules/@dcloudio/uni-ui/lib/uni-list/uni-list": 1,
      "components/m-icon/m-icon": 1,
      "node-modules/@dcloudio/uni-ui/lib/uni-icons/uni-icons": 1,
      "node-modules/@dcloudio/uni-ui/lib/uni-status-bar/uni-status-bar": 1,
      "components/axb-checkbox/axb-checkbox-item": 1,
      "node-modules/@dcloudio/uni-ui/lib/uni-badge/uni-badge": 1
    };
    u[e] ? n.push(u[e]) : 0 !== u[e] && o[e] && n.push(u[e] = new Promise(function (n, o) {
      for (var i = ({
        "components/m-input": "components/m-input",
        "components/chunLei-popups/chunLei-popups": "components/chunLei-popups/chunLei-popups",
        "components/uni-segmented-control/uni-segmented-control": "components/uni-segmented-control/uni-segmented-control",
        "node-modules/@dcloudio/uni-ui/lib/uni-load-more/uni-load-more": "node-modules/@dcloudio/uni-ui/lib/uni-load-more/uni-load-more",
        "node-modules/@dcloudio/uni-ui/lib/uni-nav-bar/uni-nav-bar": "node-modules/@dcloudio/uni-ui/lib/uni-nav-bar/uni-nav-bar",
        "components/w-picker/w-picker": "components/w-picker/w-picker",
        "components/axb-checkbox/axb-checkbox": "components/axb-checkbox/axb-checkbox",
        "components/gird": "components/gird",
        "node-modules/@dcloudio/uni-ui/lib/uni-list/uni-list": "node-modules/@dcloudio/uni-ui/lib/uni-list/uni-list",
        "components/m-icon/m-icon": "components/m-icon/m-icon",
        "node-modules/@dcloudio/uni-ui/lib/uni-icons/uni-icons": "node-modules/@dcloudio/uni-ui/lib/uni-icons/uni-icons",
        "node-modules/@dcloudio/uni-ui/lib/uni-status-bar/uni-status-bar": "node-modules/@dcloudio/uni-ui/lib/uni-status-bar/uni-status-bar",
        "components/axb-checkbox/axb-checkbox-item": "components/axb-checkbox/axb-checkbox-item",
        "node-modules/@dcloudio/uni-ui/lib/uni-badge/uni-badge": "node-modules/@dcloudio/uni-ui/lib/uni-badge/uni-badge"
      }[e] || e) + ".wxss", t = l.p + i, r = document.getElementsByTagName("link"), c = 0; c < r.length; c++) {
        var d = r[c],
            s = d.getAttribute("data-href") || d.getAttribute("href");
        if ("stylesheet" === d.rel && (s === i || s === t)) return n();
      }

      var a = document.getElementsByTagName("style");

      for (c = 0; c < a.length; c++) {
        d = a[c], s = d.getAttribute("data-href");
        if (s === i || s === t) return n();
      }

      var m = document.createElement("link");
      m.rel = "stylesheet", m.type = "text/css", m.onload = n, m.onerror = function (n) {
        var i = n && n.target && n.target.src || t,
            r = new Error("Loading CSS chunk " + e + " failed.\n(" + i + ")");
        r.request = i, delete u[e], m.parentNode.removeChild(m), o(r);
      }, m.href = t;
      var p = document.getElementsByTagName("head")[0];
      p.appendChild(m);
    }).then(function () {
      u[e] = 0;
    }));
    var i = t[e];
    if (0 !== i) if (i) n.push(i[2]);else {
      var r = new Promise(function (n, o) {
        i = t[e] = [n, o];
      });
      n.push(i[2] = r);
      var d,
          s = document.createElement("script");
      s.charset = "utf-8", s.timeout = 120, l.nc && s.setAttribute("nonce", l.nc), s.src = c(e), d = function d(n) {
        s.onerror = s.onload = null, clearTimeout(a);
        var o = t[e];

        if (0 !== o) {
          if (o) {
            var i = n && ("load" === n.type ? "missing" : n.type),
                u = n && n.target && n.target.src,
                r = new Error("Loading chunk " + e + " failed.\n(" + i + ": " + u + ")");
            r.type = i, r.request = u, o[1](r);
          }

          t[e] = void 0;
        }
      };
      var a = setTimeout(function () {
        d({
          type: "timeout",
          target: s
        });
      }, 12e4);
      s.onerror = s.onload = d, document.head.appendChild(s);
    }
    return Promise.all(n);
  }, l.m = e, l.c = i, l.d = function (e, n, o) {
    l.o(e, n) || Object.defineProperty(e, n, {
      enumerable: !0,
      get: o
    });
  }, l.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, l.t = function (e, n) {
    if (1 & n && (e = l(e)), 8 & n) return e;
    if (4 & n && "object" === typeof e && e && e.__esModule) return e;
    var o = Object.create(null);
    if (l.r(o), Object.defineProperty(o, "default", {
      enumerable: !0,
      value: e
    }), 2 & n && "string" != typeof e) for (var i in e) {
      l.d(o, i, function (n) {
        return e[n];
      }.bind(null, i));
    }
    return o;
  }, l.n = function (e) {
    var n = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return l.d(n, "a", n), n;
  }, l.o = function (e, n) {
    return Object.prototype.hasOwnProperty.call(e, n);
  }, l.p = "/", l.oe = function (e) {
    throw console.error(e), e;
  };
  var d = global["webpackJsonp"] = global["webpackJsonp"] || [],
      s = d.push.bind(d);
  d.push = n, d = d.slice();

  for (var a = 0; a < d.length; a++) {
    n(d[a]);
  }

  var m = s;
  o();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"0de9":function(e,l,a){"use strict";function t(e){var l=Object.prototype.toString.call(e);return l.substring(8,l.length-1)}function u(){for(var e=arguments.length,l=new Array(e),a=0;a<e;a++)l[a]=arguments[a];var u=l.map(function(e){var l=Object.prototype.toString.call(e);if("[object object]"===l.toLowerCase())try{e="---BEGIN:JSON---"+JSON.stringify(e)+"---END:JSON---"}catch(u){e="[object object]"}else if(null===e)e="---NULL---";else if(void 0===e)e="---UNDEFINED---";else{var a=t(e).toUpperCase();e="NUMBER"===a||"BOOLEAN"===a?"---BEGIN:"+a+"---"+e+"---END:"+a+"---":String(e)}return e}),n="";if(u.length>1){var v=u.pop();n=u.join("---COMMA---"),0===v.indexOf(" at ")?n+=v:n+="---COMMA---"+v}else n=u[0];return n}Object.defineProperty(l,"__esModule",{value:!0}),l.default=u},2877:function(e,l,a){"use strict";function t(e,l,a,t,u,n,v,r){var b,o="function"===typeof e?e.options:e;if(l&&(o.render=l,o.staticRenderFns=a,o._compiled=!0),t&&(o.functional=!0),n&&(o._scopeId="data-v-"+n),v?(b=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),u&&u.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(v)},o._ssrRegister=b):u&&(b=r?function(){u.call(this,this.$root.$options.shadowRoot)}:u),b)if(o.functional){o._injectStyles=b;var i=o.render;o.render=function(e,l){return b.call(l),i(e,l)}}else{var s=o.beforeCreate;o.beforeCreate=s?[].concat(s,b):[b]}return{exports:e,options:o}}a.d(l,"a",function(){return t})},"2f62":function(e,l,a){"use strict";a.r(l),a.d(l,"Store",function(){return p}),a.d(l,"install",function(){return j}),a.d(l,"mapState",function(){return D}),a.d(l,"mapMutations",function(){return E}),a.d(l,"mapGetters",function(){return P}),a.d(l,"mapActions",function(){return T}),a.d(l,"createNamespacedHelpers",function(){return C});
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var t=function(e){var l=Number(e.version.split(".")[0]);if(l>=2)e.mixin({beforeCreate:t});else{var a=e.prototype._init;e.prototype._init=function(e){void 0===e&&(e={}),e.init=e.init?[t].concat(e.init):t,a.call(this,e)}}function t(){var e=this.$options;e.store?this.$store="function"===typeof e.store?e.store():e.store:e.parent&&e.parent.$store&&(this.$store=e.parent.$store)}},u="undefined"!==typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function n(e){u&&(e._devtoolHook=u,u.emit("vuex:init",e),u.on("vuex:travel-to-state",function(l){e.replaceState(l)}),e.subscribe(function(e,l){u.emit("vuex:mutation",e,l)}))}function v(e,l){Object.keys(e).forEach(function(a){return l(e[a],a)})}function r(e){return null!==e&&"object"===typeof e}function b(e){return e&&"function"===typeof e.then}var o=function(e,l){this.runtime=l,this._children=Object.create(null),this._rawModule=e;var a=e.state;this.state=("function"===typeof a?a():a)||{}},i={namespaced:{configurable:!0}};i.namespaced.get=function(){return!!this._rawModule.namespaced},o.prototype.addChild=function(e,l){this._children[e]=l},o.prototype.removeChild=function(e){delete this._children[e]},o.prototype.getChild=function(e){return this._children[e]},o.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},o.prototype.forEachChild=function(e){v(this._children,e)},o.prototype.forEachGetter=function(e){this._rawModule.getters&&v(this._rawModule.getters,e)},o.prototype.forEachAction=function(e){this._rawModule.actions&&v(this._rawModule.actions,e)},o.prototype.forEachMutation=function(e){this._rawModule.mutations&&v(this._rawModule.mutations,e)},Object.defineProperties(o.prototype,i);var s=function(e){this.register([],e,!1)};function c(e,l,a){if(l.update(a),a.modules)for(var t in a.modules){if(!l.getChild(t))return void 0;c(e.concat(t),l.getChild(t),a.modules[t])}}s.prototype.get=function(e){return e.reduce(function(e,l){return e.getChild(l)},this.root)},s.prototype.getNamespace=function(e){var l=this.root;return e.reduce(function(e,a){return l=l.getChild(a),e+(l.namespaced?a+"/":"")},"")},s.prototype.update=function(e){c([],this.root,e)},s.prototype.register=function(e,l,a){var t=this;void 0===a&&(a=!0);var u=new o(l,a);if(0===e.length)this.root=u;else{var n=this.get(e.slice(0,-1));n.addChild(e[e.length-1],u)}l.modules&&v(l.modules,function(l,u){t.register(e.concat(u),l,a)})},s.prototype.unregister=function(e){var l=this.get(e.slice(0,-1)),a=e[e.length-1];l.getChild(a).runtime&&l.removeChild(a)};var f;var p=function(e){var l=this;void 0===e&&(e={}),!f&&"undefined"!==typeof window&&window.Vue&&j(window.Vue);var a=e.plugins;void 0===a&&(a=[]);var t=e.strict;void 0===t&&(t=!1);var u=e.state;void 0===u&&(u={}),"function"===typeof u&&(u=u()||{}),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new s(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new f;var v=this,r=this,b=r.dispatch,o=r.commit;this.dispatch=function(e,l){return b.call(v,e,l)},this.commit=function(e,l,a){return o.call(v,e,l,a)},this.strict=t,_(this,u,[],this._modules.root),g(this,u),a.forEach(function(e){return e(l)}),f.config.devtools&&n(this)},h={state:{configurable:!0}};function d(e,l){return l.indexOf(e)<0&&l.push(e),function(){var a=l.indexOf(e);a>-1&&l.splice(a,1)}}function y(e,l){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var a=e.state;_(e,a,[],e._modules.root,!0),g(e,a,l)}function g(e,l,a){var t=e._vm;e.getters={};var u=e._wrappedGetters,n={};v(u,function(l,a){n[a]=function(){return l(e)},Object.defineProperty(e.getters,a,{get:function(){return e._vm[a]},enumerable:!0})});var r=f.config.silent;f.config.silent=!0,e._vm=new f({data:{$$state:l},computed:n}),f.config.silent=r,e.strict&&x(e),t&&(a&&e._withCommit(function(){t._data.$$state=null}),f.nextTick(function(){return t.$destroy()}))}function _(e,l,a,t,u){var n=!a.length,v=e._modules.getNamespace(a);if(t.namespaced&&(e._modulesNamespaceMap[v]=t),!n&&!u){var r=k(l,a.slice(0,-1)),b=a[a.length-1];e._withCommit(function(){f.set(r,b,t.state)})}var o=t.context=m(e,v,a);t.forEachMutation(function(l,a){var t=v+a;$(e,t,l,o)}),t.forEachAction(function(l,a){var t=l.root?a:v+a,u=l.handler||l;O(e,t,u,o)}),t.forEachGetter(function(l,a){var t=v+a;S(e,t,l,o)}),t.forEachChild(function(t,n){_(e,l,a.concat(n),t,u)})}function m(e,l,a){var t=""===l,u={dispatch:t?e.dispatch:function(a,t,u){var n=A(a,t,u),v=n.payload,r=n.options,b=n.type;return r&&r.root||(b=l+b),e.dispatch(b,v)},commit:t?e.commit:function(a,t,u){var n=A(a,t,u),v=n.payload,r=n.options,b=n.type;r&&r.root||(b=l+b),e.commit(b,v,r)}};return Object.defineProperties(u,{getters:{get:t?function(){return e.getters}:function(){return w(e,l)}},state:{get:function(){return k(e.state,a)}}}),u}function w(e,l){var a={},t=l.length;return Object.keys(e.getters).forEach(function(u){if(u.slice(0,t)===l){var n=u.slice(t);Object.defineProperty(a,n,{get:function(){return e.getters[u]},enumerable:!0})}}),a}function $(e,l,a,t){var u=e._mutations[l]||(e._mutations[l]=[]);u.push(function(l){a.call(e,t.state,l)})}function O(e,l,a,t){var u=e._actions[l]||(e._actions[l]=[]);u.push(function(l,u){var n=a.call(e,{dispatch:t.dispatch,commit:t.commit,getters:t.getters,state:t.state,rootGetters:e.getters,rootState:e.state},l,u);return b(n)||(n=Promise.resolve(n)),e._devtoolHook?n.catch(function(l){throw e._devtoolHook.emit("vuex:error",l),l}):n})}function S(e,l,a,t){e._wrappedGetters[l]||(e._wrappedGetters[l]=function(e){return a(t.state,t.getters,e.state,e.getters)})}function x(e){e._vm.$watch(function(){return this._data.$$state},function(){0},{deep:!0,sync:!0})}function k(e,l){return l.length?l.reduce(function(e,l){return e[l]},e):e}function A(e,l,a){return r(e)&&e.type&&(a=l,l=e,e=e.type),{type:e,payload:l,options:a}}function j(e){f&&e===f||(f=e,t(f))}h.state.get=function(){return this._vm._data.$$state},h.state.set=function(e){0},p.prototype.commit=function(e,l,a){var t=this,u=A(e,l,a),n=u.type,v=u.payload,r=(u.options,{type:n,payload:v}),b=this._mutations[n];b&&(this._withCommit(function(){b.forEach(function(e){e(v)})}),this._subscribers.forEach(function(e){return e(r,t.state)}))},p.prototype.dispatch=function(e,l){var a=this,t=A(e,l),u=t.type,n=t.payload,v={type:u,payload:n},r=this._actions[u];if(r)return this._actionSubscribers.forEach(function(e){return e(v,a.state)}),r.length>1?Promise.all(r.map(function(e){return e(n)})):r[0](n)},p.prototype.subscribe=function(e){return d(e,this._subscribers)},p.prototype.subscribeAction=function(e){return d(e,this._actionSubscribers)},p.prototype.watch=function(e,l,a){var t=this;return this._watcherVM.$watch(function(){return e(t.state,t.getters)},l,a)},p.prototype.replaceState=function(e){var l=this;this._withCommit(function(){l._vm._data.$$state=e})},p.prototype.registerModule=function(e,l,a){void 0===a&&(a={}),"string"===typeof e&&(e=[e]),this._modules.register(e,l),_(this,this.state,e,this._modules.get(e),a.preserveState),g(this,this.state)},p.prototype.unregisterModule=function(e){var l=this;"string"===typeof e&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var a=k(l.state,e.slice(0,-1));f.delete(a,e[e.length-1])}),y(this)},p.prototype.hotUpdate=function(e){this._modules.update(e),y(this,!0)},p.prototype._withCommit=function(e){var l=this._committing;this._committing=!0,e(),this._committing=l},Object.defineProperties(p.prototype,h);var D=M(function(e,l){var a={};return N(l).forEach(function(l){var t=l.key,u=l.val;a[t]=function(){var l=this.$store.state,a=this.$store.getters;if(e){var t=I(this.$store,"mapState",e);if(!t)return;l=t.context.state,a=t.context.getters}return"function"===typeof u?u.call(this,l,a):l[u]},a[t].vuex=!0}),a}),E=M(function(e,l){var a={};return N(l).forEach(function(l){var t=l.key,u=l.val;a[t]=function(){var l=[],a=arguments.length;while(a--)l[a]=arguments[a];var t=this.$store.commit;if(e){var n=I(this.$store,"mapMutations",e);if(!n)return;t=n.context.commit}return"function"===typeof u?u.apply(this,[t].concat(l)):t.apply(this.$store,[u].concat(l))}}),a}),P=M(function(e,l){var a={};return N(l).forEach(function(l){var t=l.key,u=l.val;u=e+u,a[t]=function(){if(!e||I(this.$store,"mapGetters",e))return this.$store.getters[u]},a[t].vuex=!0}),a}),T=M(function(e,l){var a={};return N(l).forEach(function(l){var t=l.key,u=l.val;a[t]=function(){var l=[],a=arguments.length;while(a--)l[a]=arguments[a];var t=this.$store.dispatch;if(e){var n=I(this.$store,"mapActions",e);if(!n)return;t=n.context.dispatch}return"function"===typeof u?u.apply(this,[t].concat(l)):t.apply(this.$store,[u].concat(l))}}),a}),C=function(e){return{mapState:D.bind(null,e),mapGetters:P.bind(null,e),mapMutations:E.bind(null,e),mapActions:T.bind(null,e)}};function N(e){return Array.isArray(e)?e.map(function(e){return{key:e,val:e}}):Object.keys(e).map(function(l){return{key:l,val:e[l]}})}function M(e){return function(l,a){return"string"!==typeof l?(a=l,l=""):"/"!==l.charAt(l.length-1)&&(l+="/"),e(l,a)}}function I(e,l,a){var t=e._modulesNamespaceMap[a];return t}var R={Store:p,install:j,version:"3.0.1",mapState:D,mapMutations:E,mapGetters:P,mapActions:T,createNamespacedHelpers:C};l["default"]=R},"307b":function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=[[[{label:"东城区",value:"110101"},{label:"西城区",value:"110102"},{label:"朝阳区",value:"110105"},{label:"丰台区",value:"110106"},{label:"石景山区",value:"110107"},{label:"海淀区",value:"110108"},{label:"门头沟区",value:"110109"},{label:"房山区",value:"110111"},{label:"通州区",value:"110112"},{label:"顺义区",value:"110113"},{label:"昌平区",value:"110114"},{label:"大兴区",value:"110115"},{label:"怀柔区",value:"110116"},{label:"平谷区",value:"110117"},{label:"密云区",value:"110118"},{label:"延庆区",value:"110119"}]],[[{label:"和平区",value:"120101"},{label:"河东区",value:"120102"},{label:"河西区",value:"120103"},{label:"南开区",value:"120104"},{label:"河北区",value:"120105"},{label:"红桥区",value:"120106"},{label:"东丽区",value:"120110"},{label:"西青区",value:"120111"},{label:"津南区",value:"120112"},{label:"北辰区",value:"120113"},{label:"武清区",value:"120114"},{label:"宝坻区",value:"120115"},{label:"滨海新区",value:"120116"},{label:"宁河区",value:"120117"},{label:"静海区",value:"120118"},{label:"蓟州区",value:"120119"}]],[[{label:"长安区",value:"130102"},{label:"桥西区",value:"130104"},{label:"新华区",value:"130105"},{label:"井陉矿区",value:"130107"},{label:"裕华区",value:"130108"},{label:"藁城区",value:"130109"},{label:"鹿泉区",value:"130110"},{label:"栾城区",value:"130111"},{label:"井陉县",value:"130121"},{label:"正定县",value:"130123"},{label:"行唐县",value:"130125"},{label:"灵寿县",value:"130126"},{label:"高邑县",value:"130127"},{label:"深泽县",value:"130128"},{label:"赞皇县",value:"130129"},{label:"无极县",value:"130130"},{label:"平山县",value:"130131"},{label:"元氏县",value:"130132"},{label:"赵县",value:"130133"},{label:"石家庄高新技术产业开发区",value:"130171"},{label:"石家庄循环化工园区",value:"130172"},{label:"辛集市",value:"130181"},{label:"晋州市",value:"130183"},{label:"新乐市",value:"130184"}],[{label:"路南区",value:"130202"},{label:"路北区",value:"130203"},{label:"古冶区",value:"130204"},{label:"开平区",value:"130205"},{label:"丰南区",value:"130207"},{label:"丰润区",value:"130208"},{label:"曹妃甸区",value:"130209"},{label:"滦县",value:"130223"},{label:"滦南县",value:"130224"},{label:"乐亭县",value:"130225"},{label:"迁西县",value:"130227"},{label:"玉田县",value:"130229"},{label:"唐山市芦台经济技术开发区",value:"130271"},{label:"唐山市汉沽管理区",value:"130272"},{label:"唐山高新技术产业开发区",value:"130273"},{label:"河北唐山海港经济开发区",value:"130274"},{label:"遵化市",value:"130281"},{label:"迁安市",value:"130283"}],[{label:"海港区",value:"130302"},{label:"山海关区",value:"130303"},{label:"北戴河区",value:"130304"},{label:"抚宁区",value:"130306"},{label:"青龙满族自治县",value:"130321"},{label:"昌黎县",value:"130322"},{label:"卢龙县",value:"130324"},{label:"秦皇岛市经济技术开发区",value:"130371"},{label:"北戴河新区",value:"130372"}],[{label:"邯山区",value:"130402"},{label:"丛台区",value:"130403"},{label:"复兴区",value:"130404"},{label:"峰峰矿区",value:"130406"},{label:"肥乡区",value:"130407"},{label:"永年区",value:"130408"},{label:"临漳县",value:"130423"},{label:"成安县",value:"130424"},{label:"大名县",value:"130425"},{label:"涉县",value:"130426"},{label:"磁县",value:"130427"},{label:"邱县",value:"130430"},{label:"鸡泽县",value:"130431"},{label:"广平县",value:"130432"},{label:"馆陶县",value:"130433"},{label:"魏县",value:"130434"},{label:"曲周县",value:"130435"},{label:"邯郸经济技术开发区",value:"130471"},{label:"邯郸冀南新区",value:"130473"},{label:"武安市",value:"130481"}],[{label:"桥东区",value:"130502"},{label:"桥西区",value:"130503"},{label:"邢台县",value:"130521"},{label:"临城县",value:"130522"},{label:"内丘县",value:"130523"},{label:"柏乡县",value:"130524"},{label:"隆尧县",value:"130525"},{label:"任县",value:"130526"},{label:"南和县",value:"130527"},{label:"宁晋县",value:"130528"},{label:"巨鹿县",value:"130529"},{label:"新河县",value:"130530"},{label:"广宗县",value:"130531"},{label:"平乡县",value:"130532"},{label:"威县",value:"130533"},{label:"清河县",value:"130534"},{label:"临西县",value:"130535"},{label:"河北邢台经济开发区",value:"130571"},{label:"南宫市",value:"130581"},{label:"沙河市",value:"130582"}],[{label:"竞秀区",value:"130602"},{label:"莲池区",value:"130606"},{label:"满城区",value:"130607"},{label:"清苑区",value:"130608"},{label:"徐水区",value:"130609"},{label:"涞水县",value:"130623"},{label:"阜平县",value:"130624"},{label:"定兴县",value:"130626"},{label:"唐县",value:"130627"},{label:"高阳县",value:"130628"},{label:"容城县",value:"130629"},{label:"涞源县",value:"130630"},{label:"望都县",value:"130631"},{label:"安新县",value:"130632"},{label:"易县",value:"130633"},{label:"曲阳县",value:"130634"},{label:"蠡县",value:"130635"},{label:"顺平县",value:"130636"},{label:"博野县",value:"130637"},{label:"雄县",value:"130638"},{label:"保定高新技术产业开发区",value:"130671"},{label:"保定白沟新城",value:"130672"},{label:"涿州市",value:"130681"},{label:"定州市",value:"130682"},{label:"安国市",value:"130683"},{label:"高碑店市",value:"130684"}],[{label:"桥东区",value:"130702"},{label:"桥西区",value:"130703"},{label:"宣化区",value:"130705"},{label:"下花园区",value:"130706"},{label:"万全区",value:"130708"},{label:"崇礼区",value:"130709"},{label:"张北县",value:"130722"},{label:"康保县",value:"130723"},{label:"沽源县",value:"130724"},{label:"尚义县",value:"130725"},{label:"蔚县",value:"130726"},{label:"阳原县",value:"130727"},{label:"怀安县",value:"130728"},{label:"怀来县",value:"130730"},{label:"涿鹿县",value:"130731"},{label:"赤城县",value:"130732"},{label:"张家口市高新技术产业开发区",value:"130771"},{label:"张家口市察北管理区",value:"130772"},{label:"张家口市塞北管理区",value:"130773"}],[{label:"双桥区",value:"130802"},{label:"双滦区",value:"130803"},{label:"鹰手营子矿区",value:"130804"},{label:"承德县",value:"130821"},{label:"兴隆县",value:"130822"},{label:"滦平县",value:"130824"},{label:"隆化县",value:"130825"},{label:"丰宁满族自治县",value:"130826"},{label:"宽城满族自治县",value:"130827"},{label:"围场满族蒙古族自治县",value:"130828"},{label:"承德高新技术产业开发区",value:"130871"},{label:"平泉市",value:"130881"}],[{label:"新华区",value:"130902"},{label:"运河区",value:"130903"},{label:"沧县",value:"130921"},{label:"青县",value:"130922"},{label:"东光县",value:"130923"},{label:"海兴县",value:"130924"},{label:"盐山县",value:"130925"},{label:"肃宁县",value:"130926"},{label:"南皮县",value:"130927"},{label:"吴桥县",value:"130928"},{label:"献县",value:"130929"},{label:"孟村回族自治县",value:"130930"},{label:"河北沧州经济开发区",value:"130971"},{label:"沧州高新技术产业开发区",value:"130972"},{label:"沧州渤海新区",value:"130973"},{label:"泊头市",value:"130981"},{label:"任丘市",value:"130982"},{label:"黄骅市",value:"130983"},{label:"河间市",value:"130984"}],[{label:"安次区",value:"131002"},{label:"广阳区",value:"131003"},{label:"固安县",value:"131022"},{label:"永清县",value:"131023"},{label:"香河县",value:"131024"},{label:"大城县",value:"131025"},{label:"文安县",value:"131026"},{label:"大厂回族自治县",value:"131028"},{label:"廊坊经济技术开发区",value:"131071"},{label:"霸州市",value:"131081"},{label:"三河市",value:"131082"}],[{label:"桃城区",value:"131102"},{label:"冀州区",value:"131103"},{label:"枣强县",value:"131121"},{label:"武邑县",value:"131122"},{label:"武强县",value:"131123"},{label:"饶阳县",value:"131124"},{label:"安平县",value:"131125"},{label:"故城县",value:"131126"},{label:"景县",value:"131127"},{label:"阜城县",value:"131128"},{label:"河北衡水经济开发区",value:"131171"},{label:"衡水滨湖新区",value:"131172"},{label:"深州市",value:"131182"}]],[[{label:"小店区",value:"140105"},{label:"迎泽区",value:"140106"},{label:"杏花岭区",value:"140107"},{label:"尖草坪区",value:"140108"},{label:"万柏林区",value:"140109"},{label:"晋源区",value:"140110"},{label:"清徐县",value:"140121"},{label:"阳曲县",value:"140122"},{label:"娄烦县",value:"140123"},{label:"山西转型综合改革示范区",value:"140171"},{label:"古交市",value:"140181"}],[{label:"城区",value:"140202"},{label:"矿区",value:"140203"},{label:"南郊区",value:"140211"},{label:"新荣区",value:"140212"},{label:"阳高县",value:"140221"},{label:"天镇县",value:"140222"},{label:"广灵县",value:"140223"},{label:"灵丘县",value:"140224"},{label:"浑源县",value:"140225"},{label:"左云县",value:"140226"},{label:"大同县",value:"140227"},{label:"山西大同经济开发区",value:"140271"}],[{label:"城区",value:"140302"},{label:"矿区",value:"140303"},{label:"郊区",value:"140311"},{label:"平定县",value:"140321"},{label:"盂县",value:"140322"},{label:"山西阳泉经济开发区",value:"140371"}],[{label:"城区",value:"140402"},{label:"郊区",value:"140411"},{label:"长治县",value:"140421"},{label:"襄垣县",value:"140423"},{label:"屯留县",value:"140424"},{label:"平顺县",value:"140425"},{label:"黎城县",value:"140426"},{label:"壶关县",value:"140427"},{label:"长子县",value:"140428"},{label:"武乡县",value:"140429"},{label:"沁县",value:"140430"},{label:"沁源县",value:"140431"},{label:"山西长治高新技术产业园区",value:"140471"},{label:"潞城市",value:"140481"}],[{label:"城区",value:"140502"},{label:"沁水县",value:"140521"},{label:"阳城县",value:"140522"},{label:"陵川县",value:"140524"},{label:"泽州县",value:"140525"},{label:"高平市",value:"140581"}],[{label:"朔城区",value:"140602"},{label:"平鲁区",value:"140603"},{label:"山阴县",value:"140621"},{label:"应县",value:"140622"},{label:"右玉县",value:"140623"},{label:"怀仁县",value:"140624"},{label:"山西朔州经济开发区",value:"140671"}],[{label:"榆次区",value:"140702"},{label:"榆社县",value:"140721"},{label:"左权县",value:"140722"},{label:"和顺县",value:"140723"},{label:"昔阳县",value:"140724"},{label:"寿阳县",value:"140725"},{label:"太谷县",value:"140726"},{label:"祁县",value:"140727"},{label:"平遥县",value:"140728"},{label:"灵石县",value:"140729"},{label:"介休市",value:"140781"}],[{label:"盐湖区",value:"140802"},{label:"临猗县",value:"140821"},{label:"万荣县",value:"140822"},{label:"闻喜县",value:"140823"},{label:"稷山县",value:"140824"},{label:"新绛县",value:"140825"},{label:"绛县",value:"140826"},{label:"垣曲县",value:"140827"},{label:"夏县",value:"140828"},{label:"平陆县",value:"140829"},{label:"芮城县",value:"140830"},{label:"永济市",value:"140881"},{label:"河津市",value:"140882"}],[{label:"忻府区",value:"140902"},{label:"定襄县",value:"140921"},{label:"五台县",value:"140922"},{label:"代县",value:"140923"},{label:"繁峙县",value:"140924"},{label:"宁武县",value:"140925"},{label:"静乐县",value:"140926"},{label:"神池县",value:"140927"},{label:"五寨县",value:"140928"},{label:"岢岚县",value:"140929"},{label:"河曲县",value:"140930"},{label:"保德县",value:"140931"},{label:"偏关县",value:"140932"},{label:"五台山风景名胜区",value:"140971"},{label:"原平市",value:"140981"}],[{label:"尧都区",value:"141002"},{label:"曲沃县",value:"141021"},{label:"翼城县",value:"141022"},{label:"襄汾县",value:"141023"},{label:"洪洞县",value:"141024"},{label:"古县",value:"141025"},{label:"安泽县",value:"141026"},{label:"浮山县",value:"141027"},{label:"吉县",value:"141028"},{label:"乡宁县",value:"141029"},{label:"大宁县",value:"141030"},{label:"隰县",value:"141031"},{label:"永和县",value:"141032"},{label:"蒲县",value:"141033"},{label:"汾西县",value:"141034"},{label:"侯马市",value:"141081"},{label:"霍州市",value:"141082"}],[{label:"离石区",value:"141102"},{label:"文水县",value:"141121"},{label:"交城县",value:"141122"},{label:"兴县",value:"141123"},{label:"临县",value:"141124"},{label:"柳林县",value:"141125"},{label:"石楼县",value:"141126"},{label:"岚县",value:"141127"},{label:"方山县",value:"141128"},{label:"中阳县",value:"141129"},{label:"交口县",value:"141130"},{label:"孝义市",value:"141181"},{label:"汾阳市",value:"141182"}]],[[{label:"新城区",value:"150102"},{label:"回民区",value:"150103"},{label:"玉泉区",value:"150104"},{label:"赛罕区",value:"150105"},{label:"土默特左旗",value:"150121"},{label:"托克托县",value:"150122"},{label:"和林格尔县",value:"150123"},{label:"清水河县",value:"150124"},{label:"武川县",value:"150125"},{label:"呼和浩特金海工业园区",value:"150171"},{label:"呼和浩特经济技术开发区",value:"150172"}],[{label:"东河区",value:"150202"},{label:"昆都仑区",value:"150203"},{label:"青山区",value:"150204"},{label:"石拐区",value:"150205"},{label:"白云鄂博矿区",value:"150206"},{label:"九原区",value:"150207"},{label:"土默特右旗",value:"150221"},{label:"固阳县",value:"150222"},{label:"达尔罕茂明安联合旗",value:"150223"},{label:"包头稀土高新技术产业开发区",value:"150271"}],[{label:"海勃湾区",value:"150302"},{label:"海南区",value:"150303"},{label:"乌达区",value:"150304"}],[{label:"红山区",value:"150402"},{label:"元宝山区",value:"150403"},{label:"松山区",value:"150404"},{label:"阿鲁科尔沁旗",value:"150421"},{label:"巴林左旗",value:"150422"},{label:"巴林右旗",value:"150423"},{label:"林西县",value:"150424"},{label:"克什克腾旗",value:"150425"},{label:"翁牛特旗",value:"150426"},{label:"喀喇沁旗",value:"150428"},{label:"宁城县",value:"150429"},{label:"敖汉旗",value:"150430"}],[{label:"科尔沁区",value:"150502"},{label:"科尔沁左翼中旗",value:"150521"},{label:"科尔沁左翼后旗",value:"150522"},{label:"开鲁县",value:"150523"},{label:"库伦旗",value:"150524"},{label:"奈曼旗",value:"150525"},{label:"扎鲁特旗",value:"150526"},{label:"通辽经济技术开发区",value:"150571"},{label:"霍林郭勒市",value:"150581"}],[{label:"东胜区",value:"150602"},{label:"康巴什区",value:"150603"},{label:"达拉特旗",value:"150621"},{label:"准格尔旗",value:"150622"},{label:"鄂托克前旗",value:"150623"},{label:"鄂托克旗",value:"150624"},{label:"杭锦旗",value:"150625"},{label:"乌审旗",value:"150626"},{label:"伊金霍洛旗",value:"150627"}],[{label:"海拉尔区",value:"150702"},{label:"扎赉诺尔区",value:"150703"},{label:"阿荣旗",value:"150721"},{label:"莫力达瓦达斡尔族自治旗",value:"150722"},{label:"鄂伦春自治旗",value:"150723"},{label:"鄂温克族自治旗",value:"150724"},{label:"陈巴尔虎旗",value:"150725"},{label:"新巴尔虎左旗",value:"150726"},{label:"新巴尔虎右旗",value:"150727"},{label:"满洲里市",value:"150781"},{label:"牙克石市",value:"150782"},{label:"扎兰屯市",value:"150783"},{label:"额尔古纳市",value:"150784"},{label:"根河市",value:"150785"}],[{label:"临河区",value:"150802"},{label:"五原县",value:"150821"},{label:"磴口县",value:"150822"},{label:"乌拉特前旗",value:"150823"},{label:"乌拉特中旗",value:"150824"},{label:"乌拉特后旗",value:"150825"},{label:"杭锦后旗",value:"150826"}],[{label:"集宁区",value:"150902"},{label:"卓资县",value:"150921"},{label:"化德县",value:"150922"},{label:"商都县",value:"150923"},{label:"兴和县",value:"150924"},{label:"凉城县",value:"150925"},{label:"察哈尔右翼前旗",value:"150926"},{label:"察哈尔右翼中旗",value:"150927"},{label:"察哈尔右翼后旗",value:"150928"},{label:"四子王旗",value:"150929"},{label:"丰镇市",value:"150981"}],[{label:"乌兰浩特市",value:"152201"},{label:"阿尔山市",value:"152202"},{label:"科尔沁右翼前旗",value:"152221"},{label:"科尔沁右翼中旗",value:"152222"},{label:"扎赉特旗",value:"152223"},{label:"突泉县",value:"152224"}],[{label:"二连浩特市",value:"152501"},{label:"锡林浩特市",value:"152502"},{label:"阿巴嘎旗",value:"152522"},{label:"苏尼特左旗",value:"152523"},{label:"苏尼特右旗",value:"152524"},{label:"东乌珠穆沁旗",value:"152525"},{label:"西乌珠穆沁旗",value:"152526"},{label:"太仆寺旗",value:"152527"},{label:"镶黄旗",value:"152528"},{label:"正镶白旗",value:"152529"},{label:"正蓝旗",value:"152530"},{label:"多伦县",value:"152531"},{label:"乌拉盖管委会",value:"152571"}],[{label:"阿拉善左旗",value:"152921"},{label:"阿拉善右旗",value:"152922"},{label:"额济纳旗",value:"152923"},{label:"内蒙古阿拉善经济开发区",value:"152971"}]],[[{label:"和平区",value:"210102"},{label:"沈河区",value:"210103"},{label:"大东区",value:"210104"},{label:"皇姑区",value:"210105"},{label:"铁西区",value:"210106"},{label:"苏家屯区",value:"210111"},{label:"浑南区",value:"210112"},{label:"沈北新区",value:"210113"},{label:"于洪区",value:"210114"},{label:"辽中区",value:"210115"},{label:"康平县",value:"210123"},{label:"法库县",value:"210124"},{label:"新民市",value:"210181"}],[{label:"中山区",value:"210202"},{label:"西岗区",value:"210203"},{label:"沙河口区",value:"210204"},{label:"甘井子区",value:"210211"},{label:"旅顺口区",value:"210212"},{label:"金州区",value:"210213"},{label:"普兰店区",value:"210214"},{label:"长海县",value:"210224"},{label:"瓦房店市",value:"210281"},{label:"庄河市",value:"210283"}],[{label:"铁东区",value:"210302"},{label:"铁西区",value:"210303"},{label:"立山区",value:"210304"},{label:"千山区",value:"210311"},{label:"台安县",value:"210321"},{label:"岫岩满族自治县",value:"210323"},{label:"海城市",value:"210381"}],[{label:"新抚区",value:"210402"},{label:"东洲区",value:"210403"},{label:"望花区",value:"210404"},{label:"顺城区",value:"210411"},{label:"抚顺县",value:"210421"},{label:"新宾满族自治县",value:"210422"},{label:"清原满族自治县",value:"210423"}],[{label:"平山区",value:"210502"},{label:"溪湖区",value:"210503"},{label:"明山区",value:"210504"},{label:"南芬区",value:"210505"},{label:"本溪满族自治县",value:"210521"},{label:"桓仁满族自治县",value:"210522"}],[{label:"元宝区",value:"210602"},{label:"振兴区",value:"210603"},{label:"振安区",value:"210604"},{label:"宽甸满族自治县",value:"210624"},{label:"东港市",value:"210681"},{label:"凤城市",value:"210682"}],[{label:"古塔区",value:"210702"},{label:"凌河区",value:"210703"},{label:"太和区",value:"210711"},{label:"黑山县",value:"210726"},{label:"义县",value:"210727"},{label:"凌海市",value:"210781"},{label:"北镇市",value:"210782"}],[{label:"站前区",value:"210802"},{label:"西市区",value:"210803"},{label:"鲅鱼圈区",value:"210804"},{label:"老边区",value:"210811"},{label:"盖州市",value:"210881"},{label:"大石桥市",value:"210882"}],[{label:"海州区",value:"210902"},{label:"新邱区",value:"210903"},{label:"太平区",value:"210904"},{label:"清河门区",value:"210905"},{label:"细河区",value:"210911"},{label:"阜新蒙古族自治县",value:"210921"},{label:"彰武县",value:"210922"}],[{label:"白塔区",value:"211002"},{label:"文圣区",value:"211003"},{label:"宏伟区",value:"211004"},{label:"弓长岭区",value:"211005"},{label:"太子河区",value:"211011"},{label:"辽阳县",value:"211021"},{label:"灯塔市",value:"211081"}],[{label:"双台子区",value:"211102"},{label:"兴隆台区",value:"211103"},{label:"大洼区",value:"211104"},{label:"盘山县",value:"211122"}],[{label:"银州区",value:"211202"},{label:"清河区",value:"211204"},{label:"铁岭县",value:"211221"},{label:"西丰县",value:"211223"},{label:"昌图县",value:"211224"},{label:"调兵山市",value:"211281"},{label:"开原市",value:"211282"}],[{label:"双塔区",value:"211302"},{label:"龙城区",value:"211303"},{label:"朝阳县",value:"211321"},{label:"建平县",value:"211322"},{label:"喀喇沁左翼蒙古族自治县",value:"211324"},{label:"北票市",value:"211381"},{label:"凌源市",value:"211382"}],[{label:"连山区",value:"211402"},{label:"龙港区",value:"211403"},{label:"南票区",value:"211404"},{label:"绥中县",value:"211421"},{label:"建昌县",value:"211422"},{label:"兴城市",value:"211481"}]],[[{label:"南关区",value:"220102"},{label:"宽城区",value:"220103"},{label:"朝阳区",value:"220104"},{label:"二道区",value:"220105"},{label:"绿园区",value:"220106"},{label:"双阳区",value:"220112"},{label:"九台区",value:"220113"},{label:"农安县",value:"220122"},{label:"长春经济技术开发区",value:"220171"},{label:"长春净月高新技术产业开发区",value:"220172"},{label:"长春高新技术产业开发区",value:"220173"},{label:"长春汽车经济技术开发区",value:"220174"},{label:"榆树市",value:"220182"},{label:"德惠市",value:"220183"}],[{label:"昌邑区",value:"220202"},{label:"龙潭区",value:"220203"},{label:"船营区",value:"220204"},{label:"丰满区",value:"220211"},{label:"永吉县",value:"220221"},{label:"吉林经济开发区",value:"220271"},{label:"吉林高新技术产业开发区",value:"220272"},{label:"吉林中国新加坡食品区",value:"220273"},{label:"蛟河市",value:"220281"},{label:"桦甸市",value:"220282"},{label:"舒兰市",value:"220283"},{label:"磐石市",value:"220284"}],[{label:"铁西区",value:"220302"},{label:"铁东区",value:"220303"},{label:"梨树县",value:"220322"},{label:"伊通满族自治县",value:"220323"},{label:"公主岭市",value:"220381"},{label:"双辽市",value:"220382"}],[{label:"龙山区",value:"220402"},{label:"西安区",value:"220403"},{label:"东丰县",value:"220421"},{label:"东辽县",value:"220422"}],[{label:"东昌区",value:"220502"},{label:"二道江区",value:"220503"},{label:"通化县",value:"220521"},{label:"辉南县",value:"220523"},{label:"柳河县",value:"220524"},{label:"梅河口市",value:"220581"},{label:"集安市",value:"220582"}],[{label:"浑江区",value:"220602"},{label:"江源区",value:"220605"},{label:"抚松县",value:"220621"},{label:"靖宇县",value:"220622"},{label:"长白朝鲜族自治县",value:"220623"},{label:"临江市",value:"220681"}],[{label:"宁江区",value:"220702"},{label:"前郭尔罗斯蒙古族自治县",value:"220721"},{label:"长岭县",value:"220722"},{label:"乾安县",value:"220723"},{label:"吉林松原经济开发区",value:"220771"},{label:"扶余市",value:"220781"}],[{label:"洮北区",value:"220802"},{label:"镇赉县",value:"220821"},{label:"通榆县",value:"220822"},{label:"吉林白城经济开发区",value:"220871"},{label:"洮南市",value:"220881"},{label:"大安市",value:"220882"}],[{label:"延吉市",value:"222401"},{label:"图们市",value:"222402"},{label:"敦化市",value:"222403"},{label:"珲春市",value:"222404"},{label:"龙井市",value:"222405"},{label:"和龙市",value:"222406"},{label:"汪清县",value:"222424"},{label:"安图县",value:"222426"}]],[[{label:"道里区",value:"230102"},{label:"南岗区",value:"230103"},{label:"道外区",value:"230104"},{label:"平房区",value:"230108"},{label:"松北区",value:"230109"},{label:"香坊区",value:"230110"},{label:"呼兰区",value:"230111"},{label:"阿城区",value:"230112"},{label:"双城区",value:"230113"},{label:"依兰县",value:"230123"},{label:"方正县",value:"230124"},{label:"宾县",value:"230125"},{label:"巴彦县",value:"230126"},{label:"木兰县",value:"230127"},{label:"通河县",value:"230128"},{label:"延寿县",value:"230129"},{label:"尚志市",value:"230183"},{label:"五常市",value:"230184"}],[{label:"龙沙区",value:"230202"},{label:"建华区",value:"230203"},{label:"铁锋区",value:"230204"},{label:"昂昂溪区",value:"230205"},{label:"富拉尔基区",value:"230206"},{label:"碾子山区",value:"230207"},{label:"梅里斯达斡尔族区",value:"230208"},{label:"龙江县",value:"230221"},{label:"依安县",value:"230223"},{label:"泰来县",value:"230224"},{label:"甘南县",value:"230225"},{label:"富裕县",value:"230227"},{label:"克山县",value:"230229"},{label:"克东县",value:"230230"},{label:"拜泉县",value:"230231"},{label:"讷河市",value:"230281"}],[{label:"鸡冠区",value:"230302"},{label:"恒山区",value:"230303"},{label:"滴道区",value:"230304"},{label:"梨树区",value:"230305"},{label:"城子河区",value:"230306"},{label:"麻山区",value:"230307"},{label:"鸡东县",value:"230321"},{label:"虎林市",value:"230381"},{label:"密山市",value:"230382"}],[{label:"向阳区",value:"230402"},{label:"工农区",value:"230403"},{label:"南山区",value:"230404"},{label:"兴安区",value:"230405"},{label:"东山区",value:"230406"},{label:"兴山区",value:"230407"},{label:"萝北县",value:"230421"},{label:"绥滨县",value:"230422"}],[{label:"尖山区",value:"230502"},{label:"岭东区",value:"230503"},{label:"四方台区",value:"230505"},{label:"宝山区",value:"230506"},{label:"集贤县",value:"230521"},{label:"友谊县",value:"230522"},{label:"宝清县",value:"230523"},{label:"饶河县",value:"230524"}],[{label:"萨尔图区",value:"230602"},{label:"龙凤区",value:"230603"},{label:"让胡路区",value:"230604"},{label:"红岗区",value:"230605"},{label:"大同区",value:"230606"},{label:"肇州县",value:"230621"},{label:"肇源县",value:"230622"},{label:"林甸县",value:"230623"},{label:"杜尔伯特蒙古族自治县",value:"230624"},{label:"大庆高新技术产业开发区",value:"230671"}],[{label:"伊春区",value:"230702"},{label:"南岔区",value:"230703"},{label:"友好区",value:"230704"},{label:"西林区",value:"230705"},{label:"翠峦区",value:"230706"},{label:"新青区",value:"230707"},{label:"美溪区",value:"230708"},{label:"金山屯区",value:"230709"},{label:"五营区",value:"230710"},{label:"乌马河区",value:"230711"},{label:"汤旺河区",value:"230712"},{label:"带岭区",value:"230713"},{label:"乌伊岭区",value:"230714"},{label:"红星区",value:"230715"},{label:"上甘岭区",value:"230716"},{label:"嘉荫县",value:"230722"},{label:"铁力市",value:"230781"}],[{label:"向阳区",value:"230803"},{label:"前进区",value:"230804"},{label:"东风区",value:"230805"},{label:"郊区",value:"230811"},{label:"桦南县",value:"230822"},{label:"桦川县",value:"230826"},{label:"汤原县",value:"230828"},{label:"同江市",value:"230881"},{label:"富锦市",value:"230882"},{label:"抚远市",value:"230883"}],[{label:"新兴区",value:"230902"},{label:"桃山区",value:"230903"},{label:"茄子河区",value:"230904"},{label:"勃利县",value:"230921"}],[{label:"东安区",value:"231002"},{label:"阳明区",value:"231003"},{label:"爱民区",value:"231004"},{label:"西安区",value:"231005"},{label:"林口县",value:"231025"},{label:"牡丹江经济技术开发区",value:"231071"},{label:"绥芬河市",value:"231081"},{label:"海林市",value:"231083"},{label:"宁安市",value:"231084"},{label:"穆棱市",value:"231085"},{label:"东宁市",value:"231086"}],[{label:"爱辉区",value:"231102"},{label:"嫩江县",value:"231121"},{label:"逊克县",value:"231123"},{label:"孙吴县",value:"231124"},{label:"北安市",value:"231181"},{label:"五大连池市",value:"231182"}],[{label:"北林区",value:"231202"},{label:"望奎县",value:"231221"},{label:"兰西县",value:"231222"},{label:"青冈县",value:"231223"},{label:"庆安县",value:"231224"},{label:"明水县",value:"231225"},{label:"绥棱县",value:"231226"},{label:"安达市",value:"231281"},{label:"肇东市",value:"231282"},{label:"海伦市",value:"231283"}],[{label:"加格达奇区",value:"232701"},{label:"松岭区",value:"232702"},{label:"新林区",value:"232703"},{label:"呼中区",value:"232704"},{label:"呼玛县",value:"232721"},{label:"塔河县",value:"232722"},{label:"漠河县",value:"232723"}]],[[{label:"黄浦区",value:"310101"},{label:"徐汇区",value:"310104"},{label:"长宁区",value:"310105"},{label:"静安区",value:"310106"},{label:"普陀区",value:"310107"},{label:"虹口区",value:"310109"},{label:"杨浦区",value:"310110"},{label:"闵行区",value:"310112"},{label:"宝山区",value:"310113"},{label:"嘉定区",value:"310114"},{label:"浦东新区",value:"310115"},{label:"金山区",value:"310116"},{label:"松江区",value:"310117"},{label:"青浦区",value:"310118"},{label:"奉贤区",value:"310120"},{label:"崇明区",value:"310151"}]],[[{label:"玄武区",value:"320102"},{label:"秦淮区",value:"320104"},{label:"建邺区",value:"320105"},{label:"鼓楼区",value:"320106"},{label:"浦口区",value:"320111"},{label:"栖霞区",value:"320113"},{label:"雨花台区",value:"320114"},{label:"江宁区",value:"320115"},{label:"六合区",value:"320116"},{label:"溧水区",value:"320117"},{label:"高淳区",value:"320118"}],[{label:"锡山区",value:"320205"},{label:"惠山区",value:"320206"},{label:"滨湖区",value:"320211"},{label:"梁溪区",value:"320213"},{label:"新吴区",value:"320214"},{label:"江阴市",value:"320281"},{label:"宜兴市",value:"320282"}],[{label:"鼓楼区",value:"320302"},{label:"云龙区",value:"320303"},{label:"贾汪区",value:"320305"},{label:"泉山区",value:"320311"},{label:"铜山区",value:"320312"},{label:"丰县",value:"320321"},{label:"沛县",value:"320322"},{label:"睢宁县",value:"320324"},{label:"徐州经济技术开发区",value:"320371"},{label:"新沂市",value:"320381"},{label:"邳州市",value:"320382"}],[{label:"天宁区",value:"320402"},{label:"钟楼区",value:"320404"},{label:"新北区",value:"320411"},{label:"武进区",value:"320412"},{label:"金坛区",value:"320413"},{label:"溧阳市",value:"320481"}],[{label:"虎丘区",value:"320505"},{label:"吴中区",value:"320506"},{label:"相城区",value:"320507"},{label:"姑苏区",value:"320508"},{label:"吴江区",value:"320509"},{label:"苏州工业园区",value:"320571"},{label:"常熟市",value:"320581"},{label:"张家港市",value:"320582"},{label:"昆山市",value:"320583"},{label:"太仓市",value:"320585"}],[{label:"崇川区",value:"320602"},{label:"港闸区",value:"320611"},{label:"通州区",value:"320612"},{label:"海安县",value:"320621"},{label:"如东县",value:"320623"},{label:"南通经济技术开发区",value:"320671"},{label:"启东市",value:"320681"},{label:"如皋市",value:"320682"},{label:"海门市",value:"320684"}],[{label:"连云区",value:"320703"},{label:"海州区",value:"320706"},{label:"赣榆区",value:"320707"},{label:"东海县",value:"320722"},{label:"灌云县",value:"320723"},{label:"灌南县",value:"320724"},{label:"连云港经济技术开发区",value:"320771"},{label:"连云港高新技术产业开发区",value:"320772"}],[{label:"淮安区",value:"320803"},{label:"淮阴区",value:"320804"},{label:"清江浦区",value:"320812"},{label:"洪泽区",value:"320813"},{label:"涟水县",value:"320826"},{label:"盱眙县",value:"320830"},{label:"金湖县",value:"320831"},{label:"淮安经济技术开发区",value:"320871"}],[{label:"亭湖区",value:"320902"},{label:"盐都区",value:"320903"},{label:"大丰区",value:"320904"},{label:"响水县",value:"320921"},{label:"滨海县",value:"320922"},{label:"阜宁县",value:"320923"},{label:"射阳县",value:"320924"},{label:"建湖县",value:"320925"},{label:"盐城经济技术开发区",value:"320971"},{label:"东台市",value:"320981"}],[{label:"广陵区",value:"321002"},{label:"邗江区",value:"321003"},{label:"江都区",value:"321012"},{label:"宝应县",value:"321023"},{label:"扬州经济技术开发区",value:"321071"},{label:"仪征市",value:"321081"},{label:"高邮市",value:"321084"}],[{label:"京口区",value:"321102"},{label:"润州区",value:"321111"},{label:"丹徒区",value:"321112"},{label:"镇江新区",value:"321171"},{label:"丹阳市",value:"321181"},{label:"扬中市",value:"321182"},{label:"句容市",value:"321183"}],[{label:"海陵区",value:"321202"},{label:"高港区",value:"321203"},{label:"姜堰区",value:"321204"},{label:"泰州医药高新技术产业开发区",value:"321271"},{label:"兴化市",value:"321281"},{label:"靖江市",value:"321282"},{label:"泰兴市",value:"321283"}],[{label:"宿城区",value:"321302"},{label:"宿豫区",value:"321311"},{label:"沭阳县",value:"321322"},{label:"泗阳县",value:"321323"},{label:"泗洪县",value:"321324"},{label:"宿迁经济技术开发区",value:"321371"}]],[[{label:"上城区",value:"330102"},{label:"下城区",value:"330103"},{label:"江干区",value:"330104"},{label:"拱墅区",value:"330105"},{label:"西湖区",value:"330106"},{label:"滨江区",value:"330108"},{label:"萧山区",value:"330109"},{label:"余杭区",value:"330110"},{label:"富阳区",value:"330111"},{label:"临安区",value:"330112"},{label:"桐庐县",value:"330122"},{label:"淳安县",value:"330127"},{label:"建德市",value:"330182"}],[{label:"海曙区",value:"330203"},{label:"江北区",value:"330205"},{label:"北仑区",value:"330206"},{label:"镇海区",value:"330211"},{label:"鄞州区",value:"330212"},{label:"奉化区",value:"330213"},{label:"象山县",value:"330225"},{label:"宁海县",value:"330226"},{label:"余姚市",value:"330281"},{label:"慈溪市",value:"330282"}],[{label:"鹿城区",value:"330302"},{label:"龙湾区",value:"330303"},{label:"瓯海区",value:"330304"},{label:"洞头区",value:"330305"},{label:"永嘉县",value:"330324"},{label:"平阳县",value:"330326"},{label:"苍南县",value:"330327"},{label:"文成县",value:"330328"},{label:"泰顺县",value:"330329"},{label:"温州经济技术开发区",value:"330371"},{label:"瑞安市",value:"330381"},{label:"乐清市",value:"330382"}],[{label:"南湖区",value:"330402"},{label:"秀洲区",value:"330411"},{label:"嘉善县",value:"330421"},{label:"海盐县",value:"330424"},{label:"海宁市",value:"330481"},{label:"平湖市",value:"330482"},{label:"桐乡市",value:"330483"}],[{label:"吴兴区",value:"330502"},{label:"南浔区",value:"330503"},{label:"德清县",value:"330521"},{label:"长兴县",value:"330522"},{label:"安吉县",value:"330523"}],[{label:"越城区",value:"330602"},{label:"柯桥区",value:"330603"},{label:"上虞区",value:"330604"},{label:"新昌县",value:"330624"},{label:"诸暨市",value:"330681"},{label:"嵊州市",value:"330683"}],[{label:"婺城区",value:"330702"},{label:"金东区",value:"330703"},{label:"武义县",value:"330723"},{label:"浦江县",value:"330726"},{label:"磐安县",value:"330727"},{label:"兰溪市",value:"330781"},{label:"义乌市",value:"330782"},{label:"东阳市",value:"330783"},{label:"永康市",value:"330784"}],[{label:"柯城区",value:"330802"},{label:"衢江区",value:"330803"},{label:"常山县",value:"330822"},{label:"开化县",value:"330824"},{label:"龙游县",value:"330825"},{label:"江山市",value:"330881"}],[{label:"定海区",value:"330902"},{label:"普陀区",value:"330903"},{label:"岱山县",value:"330921"},{label:"嵊泗县",value:"330922"}],[{label:"椒江区",value:"331002"},{label:"黄岩区",value:"331003"},{label:"路桥区",value:"331004"},{label:"三门县",value:"331022"},{label:"天台县",value:"331023"},{label:"仙居县",value:"331024"},{label:"温岭市",value:"331081"},{label:"临海市",value:"331082"},{label:"玉环市",value:"331083"}],[{label:"莲都区",value:"331102"},{label:"青田县",value:"331121"},{label:"缙云县",value:"331122"},{label:"遂昌县",value:"331123"},{label:"松阳县",value:"331124"},{label:"云和县",value:"331125"},{label:"庆元县",value:"331126"},{label:"景宁畲族自治县",value:"331127"},{label:"龙泉市",value:"331181"}]],[[{label:"瑶海区",value:"340102"},{label:"庐阳区",value:"340103"},{label:"蜀山区",value:"340104"},{label:"包河区",value:"340111"},{label:"长丰县",value:"340121"},{label:"肥东县",value:"340122"},{label:"肥西县",value:"340123"},{label:"庐江县",value:"340124"},{label:"合肥高新技术产业开发区",value:"340171"},{label:"合肥经济技术开发区",value:"340172"},{label:"合肥新站高新技术产业开发区",value:"340173"},{label:"巢湖市",value:"340181"}],[{label:"镜湖区",value:"340202"},{label:"弋江区",value:"340203"},{label:"鸠江区",value:"340207"},{label:"三山区",value:"340208"},{label:"芜湖县",value:"340221"},{label:"繁昌县",value:"340222"},{label:"南陵县",value:"340223"},{label:"无为县",value:"340225"},{label:"芜湖经济技术开发区",value:"340271"},{label:"安徽芜湖长江大桥经济开发区",value:"340272"}],[{label:"龙子湖区",value:"340302"},{label:"蚌山区",value:"340303"},{label:"禹会区",value:"340304"},{label:"淮上区",value:"340311"},{label:"怀远县",value:"340321"},{label:"五河县",value:"340322"},{label:"固镇县",value:"340323"},{label:"蚌埠市高新技术开发区",value:"340371"},{label:"蚌埠市经济开发区",value:"340372"}],[{label:"大通区",value:"340402"},{label:"田家庵区",value:"340403"},{label:"谢家集区",value:"340404"},{label:"八公山区",value:"340405"},{label:"潘集区",value:"340406"},{label:"凤台县",value:"340421"},{label:"寿县",value:"340422"}],[{label:"花山区",value:"340503"},{label:"雨山区",value:"340504"},{label:"博望区",value:"340506"},{label:"当涂县",value:"340521"},{label:"含山县",value:"340522"},{label:"和县",value:"340523"}],[{label:"杜集区",value:"340602"},{label:"相山区",value:"340603"},{label:"烈山区",value:"340604"},{label:"濉溪县",value:"340621"}],[{label:"铜官区",value:"340705"},{label:"义安区",value:"340706"},{label:"郊区",value:"340711"},{label:"枞阳县",value:"340722"}],[{label:"迎江区",value:"340802"},{label:"大观区",value:"340803"},{label:"宜秀区",value:"340811"},{label:"怀宁县",value:"340822"},{label:"潜山县",value:"340824"},{label:"太湖县",value:"340825"},{label:"宿松县",value:"340826"},{label:"望江县",value:"340827"},{label:"岳西县",value:"340828"},{label:"安徽安庆经济开发区",value:"340871"},{label:"桐城市",value:"340881"}],[{label:"屯溪区",value:"341002"},{label:"黄山区",value:"341003"},{label:"徽州区",value:"341004"},{label:"歙县",value:"341021"},{label:"休宁县",value:"341022"},{label:"黟县",value:"341023"},{label:"祁门县",value:"341024"}],[{label:"琅琊区",value:"341102"},{label:"南谯区",value:"341103"},{label:"来安县",value:"341122"},{label:"全椒县",value:"341124"},{label:"定远县",value:"341125"},{label:"凤阳县",value:"341126"},{label:"苏滁现代产业园",value:"341171"},{label:"滁州经济技术开发区",value:"341172"},{label:"天长市",value:"341181"},{label:"明光市",value:"341182"}],[{label:"颍州区",value:"341202"},{label:"颍东区",value:"341203"},{label:"颍泉区",value:"341204"},{label:"临泉县",value:"341221"},{label:"太和县",value:"341222"},{label:"阜南县",value:"341225"},{label:"颍上县",value:"341226"},{label:"阜阳合肥现代产业园区",value:"341271"},{label:"阜阳经济技术开发区",value:"341272"},{label:"界首市",value:"341282"}],[{label:"埇桥区",value:"341302"},{label:"砀山县",value:"341321"},{label:"萧县",value:"341322"},{label:"灵璧县",value:"341323"},{label:"泗县",value:"341324"},{label:"宿州马鞍山现代产业园区",value:"341371"},{label:"宿州经济技术开发区",value:"341372"}],[{label:"金安区",value:"341502"},{label:"裕安区",value:"341503"},{label:"叶集区",value:"341504"},{label:"霍邱县",value:"341522"},{label:"舒城县",value:"341523"},{label:"金寨县",value:"341524"},{label:"霍山县",value:"341525"}],[{label:"谯城区",value:"341602"},{label:"涡阳县",value:"341621"},{label:"蒙城县",value:"341622"},{label:"利辛县",value:"341623"}],[{label:"贵池区",value:"341702"},{label:"东至县",value:"341721"},{label:"石台县",value:"341722"},{label:"青阳县",value:"341723"}],[{label:"宣州区",value:"341802"},{label:"郎溪县",value:"341821"},{label:"广德县",value:"341822"},{label:"泾县",value:"341823"},{label:"绩溪县",value:"341824"},{label:"旌德县",value:"341825"},{label:"宣城市经济开发区",value:"341871"},{label:"宁国市",value:"341881"}]],[[{label:"鼓楼区",value:"350102"},{label:"台江区",value:"350103"},{label:"仓山区",value:"350104"},{label:"马尾区",value:"350105"},{label:"晋安区",value:"350111"},{label:"闽侯县",value:"350121"},{label:"连江县",value:"350122"},{label:"罗源县",value:"350123"},{label:"闽清县",value:"350124"},{label:"永泰县",value:"350125"},{label:"平潭县",value:"350128"},{label:"福清市",value:"350181"},{label:"长乐市",value:"350182"}],[{label:"思明区",value:"350203"},{label:"海沧区",value:"350205"},{label:"湖里区",value:"350206"},{label:"集美区",value:"350211"},{label:"同安区",value:"350212"},{label:"翔安区",value:"350213"}],[{label:"城厢区",value:"350302"},{label:"涵江区",value:"350303"},{label:"荔城区",value:"350304"},{label:"秀屿区",value:"350305"},{label:"仙游县",value:"350322"}],[{label:"梅列区",value:"350402"},{label:"三元区",value:"350403"},{label:"明溪县",value:"350421"},{label:"清流县",value:"350423"},{label:"宁化县",value:"350424"},{label:"大田县",value:"350425"},{label:"尤溪县",value:"350426"},{label:"沙县",value:"350427"},{label:"将乐县",value:"350428"},{label:"泰宁县",value:"350429"},{label:"建宁县",value:"350430"},{label:"永安市",value:"350481"}],[{label:"鲤城区",value:"350502"},{label:"丰泽区",value:"350503"},{label:"洛江区",value:"350504"},{label:"泉港区",value:"350505"},{label:"惠安县",value:"350521"},{label:"安溪县",value:"350524"},{label:"永春县",value:"350525"},{label:"德化县",value:"350526"},{label:"金门县",value:"350527"},{label:"石狮市",value:"350581"},{label:"晋江市",value:"350582"},{label:"南安市",value:"350583"}],[{label:"芗城区",value:"350602"},{label:"龙文区",value:"350603"},{label:"云霄县",value:"350622"},{label:"漳浦县",value:"350623"},{label:"诏安县",value:"350624"},{label:"长泰县",value:"350625"},{label:"东山县",value:"350626"},{label:"南靖县",value:"350627"},{label:"平和县",value:"350628"},{label:"华安县",value:"350629"},{label:"龙海市",value:"350681"}],[{label:"延平区",value:"350702"},{label:"建阳区",value:"350703"},{label:"顺昌县",value:"350721"},{label:"浦城县",value:"350722"},{label:"光泽县",value:"350723"},{label:"松溪县",value:"350724"},{label:"政和县",value:"350725"},{label:"邵武市",value:"350781"},{label:"武夷山市",value:"350782"},{label:"建瓯市",value:"350783"}],[{label:"新罗区",value:"350802"},{label:"永定区",value:"350803"},{label:"长汀县",value:"350821"},{label:"上杭县",value:"350823"},{label:"武平县",value:"350824"},{label:"连城县",value:"350825"},{label:"漳平市",value:"350881"}],[{label:"蕉城区",value:"350902"},{label:"霞浦县",value:"350921"},{label:"古田县",value:"350922"},{label:"屏南县",value:"350923"},{label:"寿宁县",value:"350924"},{label:"周宁县",value:"350925"},{label:"柘荣县",value:"350926"},{label:"福安市",value:"350981"},{label:"福鼎市",value:"350982"}]],[[{label:"东湖区",value:"360102"},{label:"西湖区",value:"360103"},{label:"青云谱区",value:"360104"},{label:"湾里区",value:"360105"},{label:"青山湖区",value:"360111"},{label:"新建区",value:"360112"},{label:"南昌县",value:"360121"},{label:"安义县",value:"360123"},{label:"进贤县",value:"360124"}],[{label:"昌江区",value:"360202"},{label:"珠山区",value:"360203"},{label:"浮梁县",value:"360222"},{label:"乐平市",value:"360281"}],[{label:"安源区",value:"360302"},{label:"湘东区",value:"360313"},{label:"莲花县",value:"360321"},{label:"上栗县",value:"360322"},{label:"芦溪县",value:"360323"}],[{label:"濂溪区",value:"360402"},{label:"浔阳区",value:"360403"},{label:"柴桑区",value:"360404"},{label:"武宁县",value:"360423"},{label:"修水县",value:"360424"},{label:"永修县",value:"360425"},{label:"德安县",value:"360426"},{label:"都昌县",value:"360428"},{label:"湖口县",value:"360429"},{label:"彭泽县",value:"360430"},{label:"瑞昌市",value:"360481"},{label:"共青城市",value:"360482"},{label:"庐山市",value:"360483"}],[{label:"渝水区",value:"360502"},{label:"分宜县",value:"360521"}],[{label:"月湖区",value:"360602"},{label:"余江县",value:"360622"},{label:"贵溪市",value:"360681"}],[{label:"章贡区",value:"360702"},{label:"南康区",value:"360703"},{label:"赣县区",value:"360704"},{label:"信丰县",value:"360722"},{label:"大余县",value:"360723"},{label:"上犹县",value:"360724"},{label:"崇义县",value:"360725"},{label:"安远县",value:"360726"},{label:"龙南县",value:"360727"},{label:"定南县",value:"360728"},{label:"全南县",value:"360729"},{label:"宁都县",value:"360730"},{label:"于都县",value:"360731"},{label:"兴国县",value:"360732"},{label:"会昌县",value:"360733"},{label:"寻乌县",value:"360734"},{label:"石城县",value:"360735"},{label:"瑞金市",value:"360781"}],[{label:"吉州区",value:"360802"},{label:"青原区",value:"360803"},{label:"吉安县",value:"360821"},{label:"吉水县",value:"360822"},{label:"峡江县",value:"360823"},{label:"新干县",value:"360824"},{label:"永丰县",value:"360825"},{label:"泰和县",value:"360826"},{label:"遂川县",value:"360827"},{label:"万安县",value:"360828"},{label:"安福县",value:"360829"},{label:"永新县",value:"360830"},{label:"井冈山市",value:"360881"}],[{label:"袁州区",value:"360902"},{label:"奉新县",value:"360921"},{label:"万载县",value:"360922"},{label:"上高县",value:"360923"},{label:"宜丰县",value:"360924"},{label:"靖安县",value:"360925"},{label:"铜鼓县",value:"360926"},{label:"丰城市",value:"360981"},{label:"樟树市",value:"360982"},{label:"高安市",value:"360983"}],[{label:"临川区",value:"361002"},{label:"东乡区",value:"361003"},{label:"南城县",value:"361021"},{label:"黎川县",value:"361022"},{label:"南丰县",value:"361023"},{label:"崇仁县",value:"361024"},{label:"乐安县",value:"361025"},{label:"宜黄县",value:"361026"},{label:"金溪县",value:"361027"},{label:"资溪县",value:"361028"},{label:"广昌县",value:"361030"}],[{label:"信州区",value:"361102"},{label:"广丰区",value:"361103"},{label:"上饶县",value:"361121"},{label:"玉山县",value:"361123"},{label:"铅山县",value:"361124"},{label:"横峰县",value:"361125"},{label:"弋阳县",value:"361126"},{label:"余干县",value:"361127"},{label:"鄱阳县",value:"361128"},{label:"万年县",value:"361129"},{label:"婺源县",value:"361130"},{label:"德兴市",value:"361181"}]],[[{label:"历下区",value:"370102"},{label:"市中区",value:"370103"},{label:"槐荫区",value:"370104"},{label:"天桥区",value:"370105"},{label:"历城区",value:"370112"},{label:"长清区",value:"370113"},{label:"章丘区",value:"370114"},{label:"平阴县",value:"370124"},{label:"济阳县",value:"370125"},{label:"商河县",value:"370126"},{label:"济南高新技术产业开发区",value:"370171"}],[{label:"市南区",value:"370202"},{label:"市北区",value:"370203"},{label:"黄岛区",value:"370211"},{label:"崂山区",value:"370212"},{label:"李沧区",value:"370213"},{label:"城阳区",value:"370214"},{label:"即墨区",value:"370215"},{label:"青岛高新技术产业开发区",value:"370271"},{label:"胶州市",value:"370281"},{label:"平度市",value:"370283"},{label:"莱西市",value:"370285"}],[{label:"淄川区",value:"370302"},{label:"张店区",value:"370303"},{label:"博山区",value:"370304"},{label:"临淄区",value:"370305"},{label:"周村区",value:"370306"},{label:"桓台县",value:"370321"},{label:"高青县",value:"370322"},{label:"沂源县",value:"370323"}],[{label:"市中区",value:"370402"},{label:"薛城区",value:"370403"},{label:"峄城区",value:"370404"},{label:"台儿庄区",value:"370405"},{label:"山亭区",value:"370406"},{label:"滕州市",value:"370481"}],[{label:"东营区",value:"370502"},{label:"河口区",value:"370503"},{label:"垦利区",value:"370505"},{label:"利津县",value:"370522"},{label:"广饶县",value:"370523"},{label:"东营经济技术开发区",value:"370571"},{label:"东营港经济开发区",value:"370572"}],[{label:"芝罘区",value:"370602"},{label:"福山区",value:"370611"},{label:"牟平区",value:"370612"},{label:"莱山区",value:"370613"},{label:"长岛县",value:"370634"},{label:"烟台高新技术产业开发区",value:"370671"},{label:"烟台经济技术开发区",value:"370672"},{label:"龙口市",value:"370681"},{label:"莱阳市",value:"370682"},{label:"莱州市",value:"370683"},{label:"蓬莱市",value:"370684"},{label:"招远市",value:"370685"},{label:"栖霞市",value:"370686"},{label:"海阳市",value:"370687"}],[{label:"潍城区",value:"370702"},{label:"寒亭区",value:"370703"},{label:"坊子区",value:"370704"},{label:"奎文区",value:"370705"},{label:"临朐县",value:"370724"},{label:"昌乐县",value:"370725"},{label:"潍坊滨海经济技术开发区",value:"370772"},{label:"青州市",value:"370781"},{label:"诸城市",value:"370782"},{label:"寿光市",value:"370783"},{label:"安丘市",value:"370784"},{label:"高密市",value:"370785"},{label:"昌邑市",value:"370786"}],[{label:"任城区",value:"370811"},{label:"兖州区",value:"370812"},{label:"微山县",value:"370826"},{label:"鱼台县",value:"370827"},{label:"金乡县",value:"370828"},{label:"嘉祥县",value:"370829"},{label:"汶上县",value:"370830"},{label:"泗水县",value:"370831"},{label:"梁山县",value:"370832"},{label:"济宁高新技术产业开发区",value:"370871"},{label:"曲阜市",value:"370881"},{label:"邹城市",value:"370883"}],[{label:"泰山区",value:"370902"},{label:"岱岳区",value:"370911"},{label:"宁阳县",value:"370921"},{label:"东平县",value:"370923"},{label:"新泰市",value:"370982"},{label:"肥城市",value:"370983"}],[{label:"环翠区",value:"371002"},{label:"文登区",value:"371003"},{label:"威海火炬高技术产业开发区",value:"371071"},{label:"威海经济技术开发区",value:"371072"},{label:"威海临港经济技术开发区",value:"371073"},{label:"荣成市",value:"371082"},{label:"乳山市",value:"371083"}],[{label:"东港区",value:"371102"},{label:"岚山区",value:"371103"},{label:"五莲县",value:"371121"},{label:"莒县",value:"371122"},{label:"日照经济技术开发区",value:"371171"},{label:"日照国际海洋城",value:"371172"}],[{label:"莱城区",value:"371202"},{label:"钢城区",value:"371203"}],[{label:"兰山区",value:"371302"},{label:"罗庄区",value:"371311"},{label:"河东区",value:"371312"},{label:"沂南县",value:"371321"},{label:"郯城县",value:"371322"},{label:"沂水县",value:"371323"},{label:"兰陵县",value:"371324"},{label:"费县",value:"371325"},{label:"平邑县",value:"371326"},{label:"莒南县",value:"371327"},{label:"蒙阴县",value:"371328"},{label:"临沭县",value:"371329"},{label:"临沂高新技术产业开发区",value:"371371"},{label:"临沂经济技术开发区",value:"371372"},{label:"临沂临港经济开发区",value:"371373"}],[{label:"德城区",value:"371402"},{label:"陵城区",value:"371403"},{label:"宁津县",value:"371422"},{label:"庆云县",value:"371423"},{label:"临邑县",value:"371424"},{label:"齐河县",value:"371425"},{label:"平原县",value:"371426"},{label:"夏津县",value:"371427"},{label:"武城县",value:"371428"},{label:"德州经济技术开发区",value:"371471"},{label:"德州运河经济开发区",value:"371472"},{label:"乐陵市",value:"371481"},{label:"禹城市",value:"371482"}],[{label:"东昌府区",value:"371502"},{label:"阳谷县",value:"371521"},{label:"莘县",value:"371522"},{label:"茌平县",value:"371523"},{label:"东阿县",value:"371524"},{label:"冠县",value:"371525"},{label:"高唐县",value:"371526"},{label:"临清市",value:"371581"}],[{label:"滨城区",value:"371602"},{label:"沾化区",value:"371603"},{label:"惠民县",value:"371621"},{label:"阳信县",value:"371622"},{label:"无棣县",value:"371623"},{label:"博兴县",value:"371625"},{label:"邹平县",value:"371626"}],[{label:"牡丹区",value:"371702"},{label:"定陶区",value:"371703"},{label:"曹县",value:"371721"},{label:"单县",value:"371722"},{label:"成武县",value:"371723"},{label:"巨野县",value:"371724"},{label:"郓城县",value:"371725"},{label:"鄄城县",value:"371726"},{label:"东明县",value:"371728"},{label:"菏泽经济技术开发区",value:"371771"},{label:"菏泽高新技术开发区",value:"371772"}]],[[{label:"中原区",value:"410102"},{label:"二七区",value:"410103"},{label:"管城回族区",value:"410104"},{label:"金水区",value:"410105"},{label:"上街区",value:"410106"},{label:"惠济区",value:"410108"},{label:"中牟县",value:"410122"},{label:"郑州经济技术开发区",value:"410171"},{label:"郑州高新技术产业开发区",value:"410172"},{label:"郑州航空港经济综合实验区",value:"410173"},{label:"巩义市",value:"410181"},{label:"荥阳市",value:"410182"},{label:"新密市",value:"410183"},{label:"新郑市",value:"410184"},{label:"登封市",value:"410185"}],[{label:"龙亭区",value:"410202"},{label:"顺河回族区",value:"410203"},{label:"鼓楼区",value:"410204"},{label:"禹王台区",value:"410205"},{label:"祥符区",value:"410212"},{label:"杞县",value:"410221"},{label:"通许县",value:"410222"},{label:"尉氏县",value:"410223"},{label:"兰考县",value:"410225"}],[{label:"老城区",value:"410302"},{label:"西工区",value:"410303"},{label:"瀍河回族区",value:"410304"},{label:"涧西区",value:"410305"},{label:"吉利区",value:"410306"},{label:"洛龙区",value:"410311"},{label:"孟津县",value:"410322"},{label:"新安县",value:"410323"},{label:"栾川县",value:"410324"},{label:"嵩县",value:"410325"},{label:"汝阳县",value:"410326"},{label:"宜阳县",value:"410327"},{label:"洛宁县",value:"410328"},{label:"伊川县",value:"410329"},{label:"洛阳高新技术产业开发区",value:"410371"},{label:"偃师市",value:"410381"}],[{label:"新华区",value:"410402"},{label:"卫东区",value:"410403"},{label:"石龙区",value:"410404"},{label:"湛河区",value:"410411"},{label:"宝丰县",value:"410421"},{label:"叶县",value:"410422"},{label:"鲁山县",value:"410423"},{label:"郏县",value:"410425"},{label:"平顶山高新技术产业开发区",value:"410471"},{label:"平顶山市新城区",value:"410472"},{label:"舞钢市",value:"410481"},{label:"汝州市",value:"410482"}],[{label:"文峰区",value:"410502"},{label:"北关区",value:"410503"},{label:"殷都区",value:"410505"},{label:"龙安区",value:"410506"},{label:"安阳县",value:"410522"},{label:"汤阴县",value:"410523"},{label:"滑县",value:"410526"},{label:"内黄县",value:"410527"},{label:"安阳高新技术产业开发区",value:"410571"},{label:"林州市",value:"410581"}],[{label:"鹤山区",value:"410602"},{label:"山城区",value:"410603"},{label:"淇滨区",value:"410611"},{label:"浚县",value:"410621"},{label:"淇县",value:"410622"},{label:"鹤壁经济技术开发区",value:"410671"}],[{label:"红旗区",value:"410702"},{label:"卫滨区",value:"410703"},{label:"凤泉区",value:"410704"},{label:"牧野区",value:"410711"},{label:"新乡县",value:"410721"},{label:"获嘉县",value:"410724"},{label:"原阳县",value:"410725"},{label:"延津县",value:"410726"},{label:"封丘县",value:"410727"},{label:"长垣县",value:"410728"},{label:"新乡高新技术产业开发区",value:"410771"},{label:"新乡经济技术开发区",value:"410772"},{label:"新乡市平原城乡一体化示范区",value:"410773"},{label:"卫辉市",value:"410781"},{label:"辉县市",value:"410782"}],[{label:"解放区",value:"410802"},{label:"中站区",value:"410803"},{label:"马村区",value:"410804"},{label:"山阳区",value:"410811"},{label:"修武县",value:"410821"},{label:"博爱县",value:"410822"},{label:"武陟县",value:"410823"},{label:"温县",value:"410825"},{label:"焦作城乡一体化示范区",value:"410871"},{label:"沁阳市",value:"410882"},{label:"孟州市",value:"410883"}],[{label:"华龙区",value:"410902"},{label:"清丰县",value:"410922"},{label:"南乐县",value:"410923"},{label:"范县",value:"410926"},{label:"台前县",value:"410927"},{label:"濮阳县",value:"410928"},{label:"河南濮阳工业园区",value:"410971"},{label:"濮阳经济技术开发区",value:"410972"}],[{label:"魏都区",value:"411002"},{label:"建安区",value:"411003"},{label:"鄢陵县",value:"411024"},{label:"襄城县",value:"411025"},{label:"许昌经济技术开发区",value:"411071"},{label:"禹州市",value:"411081"},{label:"长葛市",value:"411082"}],[{label:"源汇区",value:"411102"},{label:"郾城区",value:"411103"},{label:"召陵区",value:"411104"},{label:"舞阳县",value:"411121"},{label:"临颍县",value:"411122"},{label:"漯河经济技术开发区",value:"411171"}],[{label:"湖滨区",value:"411202"},{label:"陕州区",value:"411203"},{label:"渑池县",value:"411221"},{label:"卢氏县",value:"411224"},{label:"河南三门峡经济开发区",value:"411271"},{label:"义马市",value:"411281"},{label:"灵宝市",value:"411282"}],[{label:"宛城区",value:"411302"},{label:"卧龙区",value:"411303"},{label:"南召县",value:"411321"},{label:"方城县",value:"411322"},{label:"西峡县",value:"411323"},{label:"镇平县",value:"411324"},{label:"内乡县",value:"411325"},{label:"淅川县",value:"411326"},{label:"社旗县",value:"411327"},{label:"唐河县",value:"411328"},{label:"新野县",value:"411329"},{label:"桐柏县",value:"411330"},{label:"南阳高新技术产业开发区",value:"411371"},{label:"南阳市城乡一体化示范区",value:"411372"},{label:"邓州市",value:"411381"}],[{label:"梁园区",value:"411402"},{label:"睢阳区",value:"411403"},{label:"民权县",value:"411421"},{label:"睢县",value:"411422"},{label:"宁陵县",value:"411423"},{label:"柘城县",value:"411424"},{label:"虞城县",value:"411425"},{label:"夏邑县",value:"411426"},{label:"豫东综合物流产业聚集区",value:"411471"},{label:"河南商丘经济开发区",value:"411472"},{label:"永城市",value:"411481"}],[{label:"浉河区",value:"411502"},{label:"平桥区",value:"411503"},{label:"罗山县",value:"411521"},{label:"光山县",value:"411522"},{label:"新县",value:"411523"},{label:"商城县",value:"411524"},{label:"固始县",value:"411525"},{label:"潢川县",value:"411526"},{label:"淮滨县",value:"411527"},{label:"息县",value:"411528"},{label:"信阳高新技术产业开发区",value:"411571"}],[{label:"川汇区",value:"411602"},{label:"扶沟县",value:"411621"},{label:"西华县",value:"411622"},{label:"商水县",value:"411623"},{label:"沈丘县",value:"411624"},{label:"郸城县",value:"411625"},{label:"淮阳县",value:"411626"},{label:"太康县",value:"411627"},{label:"鹿邑县",value:"411628"},{label:"河南周口经济开发区",value:"411671"},{label:"项城市",value:"411681"}],[{label:"驿城区",value:"411702"},{label:"西平县",value:"411721"},{label:"上蔡县",value:"411722"},{label:"平舆县",value:"411723"},{label:"正阳县",value:"411724"},{label:"确山县",value:"411725"},{label:"泌阳县",value:"411726"},{label:"汝南县",value:"411727"},{label:"遂平县",value:"411728"},{label:"新蔡县",value:"411729"},{label:"河南驻马店经济开发区",value:"411771"}],[{label:"济源市",value:"419001"}]],[[{label:"江岸区",value:"420102"},{label:"江汉区",value:"420103"},{label:"硚口区",value:"420104"},{label:"汉阳区",value:"420105"},{label:"武昌区",value:"420106"},{label:"青山区",value:"420107"},{label:"洪山区",value:"420111"},{label:"东西湖区",value:"420112"},{label:"汉南区",value:"420113"},{label:"蔡甸区",value:"420114"},{label:"江夏区",value:"420115"},{label:"黄陂区",value:"420116"},{label:"新洲区",value:"420117"}],[{label:"黄石港区",value:"420202"},{label:"西塞山区",value:"420203"},{label:"下陆区",value:"420204"},{label:"铁山区",value:"420205"},{label:"阳新县",value:"420222"},{label:"大冶市",value:"420281"}],[{label:"茅箭区",value:"420302"},{label:"张湾区",value:"420303"},{label:"郧阳区",value:"420304"},{label:"郧西县",value:"420322"},{label:"竹山县",value:"420323"},{label:"竹溪县",value:"420324"},{label:"房县",value:"420325"},{label:"丹江口市",value:"420381"}],[{label:"西陵区",value:"420502"},{label:"伍家岗区",value:"420503"},{label:"点军区",value:"420504"},{label:"猇亭区",value:"420505"},{label:"夷陵区",value:"420506"},{label:"远安县",value:"420525"},{label:"兴山县",value:"420526"},{label:"秭归县",value:"420527"},{label:"长阳土家族自治县",value:"420528"},{label:"五峰土家族自治县",value:"420529"},{label:"宜都市",value:"420581"},{label:"当阳市",value:"420582"},{label:"枝江市",value:"420583"}],[{label:"襄城区",value:"420602"},{label:"樊城区",value:"420606"},{label:"襄州区",value:"420607"},{label:"南漳县",value:"420624"},{label:"谷城县",value:"420625"},{label:"保康县",value:"420626"},{label:"老河口市",value:"420682"},{label:"枣阳市",value:"420683"},{label:"宜城市",value:"420684"}],[{label:"梁子湖区",value:"420702"},{label:"华容区",value:"420703"},{label:"鄂城区",value:"420704"}],[{label:"东宝区",value:"420802"},{label:"掇刀区",value:"420804"},{label:"京山县",value:"420821"},{label:"沙洋县",value:"420822"},{label:"钟祥市",value:"420881"}],[{label:"孝南区",value:"420902"},{label:"孝昌县",value:"420921"},{label:"大悟县",value:"420922"},{label:"云梦县",value:"420923"},{label:"应城市",value:"420981"},{label:"安陆市",value:"420982"},{label:"汉川市",value:"420984"}],[{label:"沙市区",value:"421002"},{label:"荆州区",value:"421003"},{label:"公安县",value:"421022"},{label:"监利县",value:"421023"},{label:"江陵县",value:"421024"},{label:"荆州经济技术开发区",value:"421071"},{label:"石首市",value:"421081"},{label:"洪湖市",value:"421083"},{label:"松滋市",value:"421087"}],[{label:"黄州区",value:"421102"},{label:"团风县",value:"421121"},{label:"红安县",value:"421122"},{label:"罗田县",value:"421123"},{label:"英山县",value:"421124"},{label:"浠水县",value:"421125"},{label:"蕲春县",value:"421126"},{label:"黄梅县",value:"421127"},{label:"龙感湖管理区",value:"421171"},{label:"麻城市",value:"421181"},{label:"武穴市",value:"421182"}],[{label:"咸安区",value:"421202"},{label:"嘉鱼县",value:"421221"},{label:"通城县",value:"421222"},{label:"崇阳县",value:"421223"},{label:"通山县",value:"421224"},{label:"赤壁市",value:"421281"}],[{label:"曾都区",value:"421303"},{label:"随县",value:"421321"},{label:"广水市",value:"421381"}],[{label:"恩施市",value:"422801"},{label:"利川市",value:"422802"},{label:"建始县",value:"422822"},{label:"巴东县",value:"422823"},{label:"宣恩县",value:"422825"},{label:"咸丰县",value:"422826"},{label:"来凤县",value:"422827"},{label:"鹤峰县",value:"422828"}],[{label:"仙桃市",value:"429004"},{label:"潜江市",value:"429005"},{label:"天门市",value:"429006"},{label:"神农架林区",value:"429021"}]],[[{label:"芙蓉区",value:"430102"},{label:"天心区",value:"430103"},{label:"岳麓区",value:"430104"},{label:"开福区",value:"430105"},{label:"雨花区",value:"430111"},{label:"望城区",value:"430112"},{label:"长沙县",value:"430121"},{label:"浏阳市",value:"430181"},{label:"宁乡市",value:"430182"}],[{label:"荷塘区",value:"430202"},{label:"芦淞区",value:"430203"},{label:"石峰区",value:"430204"},{label:"天元区",value:"430211"},{label:"株洲县",value:"430221"},{label:"攸县",value:"430223"},{label:"茶陵县",value:"430224"},{label:"炎陵县",value:"430225"},{label:"云龙示范区",value:"430271"},{label:"醴陵市",value:"430281"}],[{label:"雨湖区",value:"430302"},{label:"岳塘区",value:"430304"},{label:"湘潭县",value:"430321"},{label:"湖南湘潭高新技术产业园区",value:"430371"},{label:"湘潭昭山示范区",value:"430372"},{label:"湘潭九华示范区",value:"430373"},{label:"湘乡市",value:"430381"},{label:"韶山市",value:"430382"}],[{label:"珠晖区",value:"430405"},{label:"雁峰区",value:"430406"},{label:"石鼓区",value:"430407"},{label:"蒸湘区",value:"430408"},{label:"南岳区",value:"430412"},{label:"衡阳县",value:"430421"},{label:"衡南县",value:"430422"},{label:"衡山县",value:"430423"},{label:"衡东县",value:"430424"},{label:"祁东县",value:"430426"},{label:"衡阳综合保税区",value:"430471"},{label:"湖南衡阳高新技术产业园区",value:"430472"},{label:"湖南衡阳松木经济开发区",value:"430473"},{label:"耒阳市",value:"430481"},{label:"常宁市",value:"430482"}],[{label:"双清区",value:"430502"},{label:"大祥区",value:"430503"},{label:"北塔区",value:"430511"},{label:"邵东县",value:"430521"},{label:"新邵县",value:"430522"},{label:"邵阳县",value:"430523"},{label:"隆回县",value:"430524"},{label:"洞口县",value:"430525"},{label:"绥宁县",value:"430527"},{label:"新宁县",value:"430528"},{label:"城步苗族自治县",value:"430529"},{label:"武冈市",value:"430581"}],[{label:"岳阳楼区",value:"430602"},{label:"云溪区",value:"430603"},{label:"君山区",value:"430611"},{label:"岳阳县",value:"430621"},{label:"华容县",value:"430623"},{label:"湘阴县",value:"430624"},{label:"平江县",value:"430626"},{label:"岳阳市屈原管理区",value:"430671"},{label:"汨罗市",value:"430681"},{label:"临湘市",value:"430682"}],[{label:"武陵区",value:"430702"},{label:"鼎城区",value:"430703"},{label:"安乡县",value:"430721"},{label:"汉寿县",value:"430722"},{label:"澧县",value:"430723"},{label:"临澧县",value:"430724"},{label:"桃源县",value:"430725"},{label:"石门县",value:"430726"},{label:"常德市西洞庭管理区",value:"430771"},{label:"津市市",value:"430781"}],[{label:"永定区",value:"430802"},{label:"武陵源区",value:"430811"},{label:"慈利县",value:"430821"},{label:"桑植县",value:"430822"}],[{label:"资阳区",value:"430902"},{label:"赫山区",value:"430903"},{label:"南县",value:"430921"},{label:"桃江县",value:"430922"},{label:"安化县",value:"430923"},{label:"益阳市大通湖管理区",value:"430971"},{label:"湖南益阳高新技术产业园区",value:"430972"},{label:"沅江市",value:"430981"}],[{label:"北湖区",value:"431002"},{label:"苏仙区",value:"431003"},{label:"桂阳县",value:"431021"},{label:"宜章县",value:"431022"},{label:"永兴县",value:"431023"},{label:"嘉禾县",value:"431024"},{label:"临武县",value:"431025"},{label:"汝城县",value:"431026"},{label:"桂东县",value:"431027"},{label:"安仁县",value:"431028"},{label:"资兴市",value:"431081"}],[{label:"零陵区",value:"431102"},{label:"冷水滩区",value:"431103"},{label:"祁阳县",value:"431121"},{label:"东安县",value:"431122"},{label:"双牌县",value:"431123"},{label:"道县",value:"431124"},{label:"江永县",value:"431125"},{label:"宁远县",value:"431126"},{label:"蓝山县",value:"431127"},{label:"新田县",value:"431128"},{label:"江华瑶族自治县",value:"431129"},{label:"永州经济技术开发区",value:"431171"},{label:"永州市金洞管理区",value:"431172"},{label:"永州市回龙圩管理区",value:"431173"}],[{label:"鹤城区",value:"431202"},{label:"中方县",value:"431221"},{label:"沅陵县",value:"431222"},{label:"辰溪县",value:"431223"},{label:"溆浦县",value:"431224"},{label:"会同县",value:"431225"},{label:"麻阳苗族自治县",value:"431226"},{label:"新晃侗族自治县",value:"431227"},{label:"芷江侗族自治县",value:"431228"},{label:"靖州苗族侗族自治县",value:"431229"},{label:"通道侗族自治县",value:"431230"},{label:"怀化市洪江管理区",value:"431271"},{label:"洪江市",value:"431281"}],[{label:"娄星区",value:"431302"},{label:"双峰县",value:"431321"},{label:"新化县",value:"431322"},{label:"冷水江市",value:"431381"},{label:"涟源市",value:"431382"}],[{label:"吉首市",value:"433101"},{label:"泸溪县",value:"433122"},{label:"凤凰县",value:"433123"},{label:"花垣县",value:"433124"},{label:"保靖县",value:"433125"},{label:"古丈县",value:"433126"},{label:"永顺县",value:"433127"},{label:"龙山县",value:"433130"},{label:"湖南吉首经济开发区",value:"433172"},{label:"湖南永顺经济开发区",value:"433173"}]],[[{label:"荔湾区",value:"440103"},{label:"越秀区",value:"440104"},{label:"海珠区",value:"440105"},{label:"天河区",value:"440106"},{label:"白云区",value:"440111"},{label:"黄埔区",value:"440112"},{label:"番禺区",value:"440113"},{label:"花都区",value:"440114"},{label:"南沙区",value:"440115"},{label:"从化区",value:"440117"},{label:"增城区",value:"440118"}],[{label:"武江区",value:"440203"},{label:"浈江区",value:"440204"},{label:"曲江区",value:"440205"},{label:"始兴县",value:"440222"},{label:"仁化县",value:"440224"},{label:"翁源县",value:"440229"},{label:"乳源瑶族自治县",value:"440232"},{label:"新丰县",value:"440233"},{label:"乐昌市",value:"440281"},{label:"南雄市",value:"440282"}],[{label:"罗湖区",value:"440303"},{label:"福田区",value:"440304"},{label:"南山区",value:"440305"},{label:"宝安区",value:"440306"},{label:"龙岗区",value:"440307"},{label:"盐田区",value:"440308"},{label:"龙华区",value:"440309"},{label:"坪山区",value:"440310"}],[{label:"香洲区",value:"440402"},{label:"斗门区",value:"440403"},{label:"金湾区",value:"440404"}],[{label:"龙湖区",value:"440507"},{label:"金平区",value:"440511"},{label:"濠江区",value:"440512"},{label:"潮阳区",value:"440513"},{label:"潮南区",value:"440514"},{label:"澄海区",value:"440515"},{label:"南澳县",value:"440523"}],[{label:"禅城区",value:"440604"},{label:"南海区",value:"440605"},{label:"顺德区",value:"440606"},{label:"三水区",value:"440607"},{label:"高明区",value:"440608"}],[{label:"蓬江区",value:"440703"},{label:"江海区",value:"440704"},{label:"新会区",value:"440705"},{label:"台山市",value:"440781"},{label:"开平市",value:"440783"},{label:"鹤山市",value:"440784"},{label:"恩平市",value:"440785"}],[{label:"赤坎区",value:"440802"},{label:"霞山区",value:"440803"},{label:"坡头区",value:"440804"},{label:"麻章区",value:"440811"},{label:"遂溪县",value:"440823"},{label:"徐闻县",value:"440825"},{label:"廉江市",value:"440881"},{label:"雷州市",value:"440882"},{label:"吴川市",value:"440883"}],[{label:"茂南区",value:"440902"},{label:"电白区",value:"440904"},{label:"高州市",value:"440981"},{label:"化州市",value:"440982"},{label:"信宜市",value:"440983"}],[{label:"端州区",value:"441202"},{label:"鼎湖区",value:"441203"},{label:"高要区",value:"441204"},{label:"广宁县",value:"441223"},{label:"怀集县",value:"441224"},{label:"封开县",value:"441225"},{label:"德庆县",value:"441226"},{label:"四会市",value:"441284"}],[{label:"惠城区",value:"441302"},{label:"惠阳区",value:"441303"},{label:"博罗县",value:"441322"},{label:"惠东县",value:"441323"},{label:"龙门县",value:"441324"}],[{label:"梅江区",value:"441402"},{label:"梅县区",value:"441403"},{label:"大埔县",value:"441422"},{label:"丰顺县",value:"441423"},{label:"五华县",value:"441424"},{label:"平远县",value:"441426"},{label:"蕉岭县",value:"441427"},{label:"兴宁市",value:"441481"}],[{label:"城区",value:"441502"},{label:"海丰县",value:"441521"},{label:"陆河县",value:"441523"},{label:"陆丰市",value:"441581"}],[{label:"源城区",value:"441602"},{label:"紫金县",value:"441621"},{label:"龙川县",value:"441622"},{label:"连平县",value:"441623"},{label:"和平县",value:"441624"},{label:"东源县",value:"441625"}],[{label:"江城区",value:"441702"},{label:"阳东区",value:"441704"},{label:"阳西县",value:"441721"},{label:"阳春市",value:"441781"}],[{label:"清城区",value:"441802"},{label:"清新区",value:"441803"},{label:"佛冈县",value:"441821"},{label:"阳山县",value:"441823"},{label:"连山壮族瑶族自治县",value:"441825"},{label:"连南瑶族自治县",value:"441826"},{label:"英德市",value:"441881"},{label:"连州市",value:"441882"}],[{label:"东莞市",value:"441900"}],[{label:"中山市",value:"442000"}],[{label:"湘桥区",value:"445102"},{label:"潮安区",value:"445103"},{label:"饶平县",value:"445122"}],[{label:"榕城区",value:"445202"},{label:"揭东区",value:"445203"},{label:"揭西县",value:"445222"},{label:"惠来县",value:"445224"},{label:"普宁市",value:"445281"}],[{label:"云城区",value:"445302"},{label:"云安区",value:"445303"},{label:"新兴县",value:"445321"},{label:"郁南县",value:"445322"},{label:"罗定市",value:"445381"}]],[[{label:"兴宁区",value:"450102"},{label:"青秀区",value:"450103"},{label:"江南区",value:"450105"},{label:"西乡塘区",value:"450107"},{label:"良庆区",value:"450108"},{label:"邕宁区",value:"450109"},{label:"武鸣区",value:"450110"},{label:"隆安县",value:"450123"},{label:"马山县",value:"450124"},{label:"上林县",value:"450125"},{label:"宾阳县",value:"450126"},{label:"横县",value:"450127"}],[{label:"城中区",value:"450202"},{label:"鱼峰区",value:"450203"},{label:"柳南区",value:"450204"},{label:"柳北区",value:"450205"},{label:"柳江区",value:"450206"},{label:"柳城县",value:"450222"},{label:"鹿寨县",value:"450223"},{label:"融安县",value:"450224"},{label:"融水苗族自治县",value:"450225"},{label:"三江侗族自治县",value:"450226"}],[{label:"秀峰区",value:"450302"},{label:"叠彩区",value:"450303"},{label:"象山区",value:"450304"},{label:"七星区",value:"450305"},{label:"雁山区",value:"450311"},{label:"临桂区",value:"450312"},{label:"阳朔县",value:"450321"},{label:"灵川县",value:"450323"},{label:"全州县",value:"450324"},{label:"兴安县",value:"450325"},{label:"永福县",value:"450326"},{label:"灌阳县",value:"450327"},{label:"龙胜各族自治县",value:"450328"},{label:"资源县",value:"450329"},{label:"平乐县",value:"450330"},{label:"荔浦县",value:"450331"},{label:"恭城瑶族自治县",value:"450332"}],[{label:"万秀区",value:"450403"},{label:"长洲区",value:"450405"},{label:"龙圩区",value:"450406"},{label:"苍梧县",value:"450421"},{label:"藤县",value:"450422"},{label:"蒙山县",value:"450423"},{label:"岑溪市",value:"450481"}],[{label:"海城区",value:"450502"},{label:"银海区",value:"450503"},{label:"铁山港区",value:"450512"},{label:"合浦县",value:"450521"}],[{label:"港口区",value:"450602"},{label:"防城区",value:"450603"},{label:"上思县",value:"450621"},{label:"东兴市",value:"450681"}],[{label:"钦南区",value:"450702"},{label:"钦北区",value:"450703"},{label:"灵山县",value:"450721"},{label:"浦北县",value:"450722"}],[{label:"港北区",value:"450802"},{label:"港南区",value:"450803"},{label:"覃塘区",value:"450804"},{label:"平南县",value:"450821"},{label:"桂平市",value:"450881"}],[{label:"玉州区",value:"450902"},{label:"福绵区",value:"450903"},{label:"容县",value:"450921"},{label:"陆川县",value:"450922"},{label:"博白县",value:"450923"},{label:"兴业县",value:"450924"},{label:"北流市",value:"450981"}],[{label:"右江区",value:"451002"},{label:"田阳县",value:"451021"},{label:"田东县",value:"451022"},{label:"平果县",value:"451023"},{label:"德保县",value:"451024"},{label:"那坡县",value:"451026"},{label:"凌云县",value:"451027"},{label:"乐业县",value:"451028"},{label:"田林县",value:"451029"},{label:"西林县",value:"451030"},{label:"隆林各族自治县",value:"451031"},{label:"靖西市",value:"451081"}],[{label:"八步区",value:"451102"},{label:"平桂区",value:"451103"},{label:"昭平县",value:"451121"},{label:"钟山县",value:"451122"},{label:"富川瑶族自治县",value:"451123"}],[{label:"金城江区",value:"451202"},{label:"宜州区",value:"451203"},{label:"南丹县",value:"451221"},{label:"天峨县",value:"451222"},{label:"凤山县",value:"451223"},{label:"东兰县",value:"451224"},{label:"罗城仫佬族自治县",value:"451225"},{label:"环江毛南族自治县",value:"451226"},{label:"巴马瑶族自治县",value:"451227"},{label:"都安瑶族自治县",value:"451228"},{label:"大化瑶族自治县",value:"451229"}],[{label:"兴宾区",value:"451302"},{label:"忻城县",value:"451321"},{label:"象州县",value:"451322"},{label:"武宣县",value:"451323"},{label:"金秀瑶族自治县",value:"451324"},{label:"合山市",value:"451381"}],[{label:"江州区",value:"451402"},{label:"扶绥县",value:"451421"},{label:"宁明县",value:"451422"},{label:"龙州县",value:"451423"},{label:"大新县",value:"451424"},{label:"天等县",value:"451425"},{label:"凭祥市",value:"451481"}]],[[{label:"秀英区",value:"460105"},{label:"龙华区",value:"460106"},{label:"琼山区",value:"460107"},{label:"美兰区",value:"460108"}],[{label:"海棠区",value:"460202"},{label:"吉阳区",value:"460203"},{label:"天涯区",value:"460204"},{label:"崖州区",value:"460205"}],[{label:"西沙群岛",value:"460321"},{label:"南沙群岛",value:"460322"},{label:"中沙群岛的岛礁及其海域",value:"460323"}],[{label:"儋州市",value:"460400"}],[{label:"五指山市",value:"469001"},{label:"琼海市",value:"469002"},{label:"文昌市",value:"469005"},{label:"万宁市",value:"469006"},{label:"东方市",value:"469007"},{label:"定安县",value:"469021"},{label:"屯昌县",value:"469022"},{label:"澄迈县",value:"469023"},{label:"临高县",value:"469024"},{label:"白沙黎族自治县",value:"469025"},{label:"昌江黎族自治县",value:"469026"},{label:"乐东黎族自治县",value:"469027"},{label:"陵水黎族自治县",value:"469028"},{label:"保亭黎族苗族自治县",value:"469029"},{label:"琼中黎族苗族自治县",value:"469030"}]],[[{label:"万州区",value:"500101"},{label:"涪陵区",value:"500102"},{label:"渝中区",value:"500103"},{label:"大渡口区",value:"500104"},{label:"江北区",value:"500105"},{label:"沙坪坝区",value:"500106"},{label:"九龙坡区",value:"500107"},{label:"南岸区",value:"500108"},{label:"北碚区",value:"500109"},{label:"綦江区",value:"500110"},{label:"大足区",value:"500111"},{label:"渝北区",value:"500112"},{label:"巴南区",value:"500113"},{label:"黔江区",value:"500114"},{label:"长寿区",value:"500115"},{label:"江津区",value:"500116"},{label:"合川区",value:"500117"},{label:"永川区",value:"500118"},{label:"南川区",value:"500119"},{label:"璧山区",value:"500120"},{label:"铜梁区",value:"500151"},{label:"潼南区",value:"500152"},{label:"荣昌区",value:"500153"},{label:"开州区",value:"500154"},{label:"梁平区",value:"500155"},{label:"武隆区",value:"500156"}],[{label:"城口县",value:"500229"},{label:"丰都县",value:"500230"},{label:"垫江县",value:"500231"},{label:"忠县",value:"500233"},{label:"云阳县",value:"500235"},{label:"奉节县",value:"500236"},{label:"巫山县",value:"500237"},{label:"巫溪县",value:"500238"},{label:"石柱土家族自治县",value:"500240"},{label:"秀山土家族苗族自治县",value:"500241"},{label:"酉阳土家族苗族自治县",value:"500242"},{label:"彭水苗族土家族自治县",value:"500243"}]],[[{label:"锦江区",value:"510104"},{label:"青羊区",value:"510105"},{label:"金牛区",value:"510106"},{label:"武侯区",value:"510107"},{label:"成华区",value:"510108"},{label:"龙泉驿区",value:"510112"},{label:"青白江区",value:"510113"},{label:"新都区",value:"510114"},{label:"温江区",value:"510115"},{label:"双流区",value:"510116"},{label:"郫都区",value:"510117"},{label:"金堂县",value:"510121"},{label:"大邑县",value:"510129"},{label:"蒲江县",value:"510131"},{label:"新津县",value:"510132"},{label:"都江堰市",value:"510181"},{label:"彭州市",value:"510182"},{label:"邛崃市",value:"510183"},{label:"崇州市",value:"510184"},{label:"简阳市",value:"510185"}],[{label:"自流井区",value:"510302"},{label:"贡井区",value:"510303"},{label:"大安区",value:"510304"},{label:"沿滩区",value:"510311"},{label:"荣县",value:"510321"},{label:"富顺县",value:"510322"}],[{label:"东区",value:"510402"},{label:"西区",value:"510403"},{label:"仁和区",value:"510411"},{label:"米易县",value:"510421"},{label:"盐边县",value:"510422"}],[{label:"江阳区",value:"510502"},{label:"纳溪区",value:"510503"},{label:"龙马潭区",value:"510504"},{label:"泸县",value:"510521"},{label:"合江县",value:"510522"},{label:"叙永县",value:"510524"},{label:"古蔺县",value:"510525"}],[{label:"旌阳区",value:"510603"},{label:"罗江区",value:"510604"},{label:"中江县",value:"510623"},{label:"广汉市",value:"510681"},{label:"什邡市",value:"510682"},{label:"绵竹市",value:"510683"}],[{label:"涪城区",value:"510703"},{label:"游仙区",value:"510704"},{label:"安州区",value:"510705"},{label:"三台县",value:"510722"},{label:"盐亭县",value:"510723"},{label:"梓潼县",value:"510725"},{label:"北川羌族自治县",value:"510726"},{label:"平武县",value:"510727"},{label:"江油市",value:"510781"}],[{label:"利州区",value:"510802"},{label:"昭化区",value:"510811"},{label:"朝天区",value:"510812"},{label:"旺苍县",value:"510821"},{label:"青川县",value:"510822"},{label:"剑阁县",value:"510823"},{label:"苍溪县",value:"510824"}],[{label:"船山区",value:"510903"},{label:"安居区",value:"510904"},{label:"蓬溪县",value:"510921"},{label:"射洪县",value:"510922"},{label:"大英县",value:"510923"}],[{label:"市中区",value:"511002"},{label:"东兴区",value:"511011"},{label:"威远县",value:"511024"},{label:"资中县",value:"511025"},{label:"内江经济开发区",value:"511071"},{label:"隆昌市",value:"511083"}],[{label:"市中区",value:"511102"},{label:"沙湾区",value:"511111"},{label:"五通桥区",value:"511112"},{label:"金口河区",value:"511113"},{label:"犍为县",value:"511123"},{label:"井研县",value:"511124"},{label:"夹江县",value:"511126"},{label:"沐川县",value:"511129"},{label:"峨边彝族自治县",value:"511132"},{label:"马边彝族自治县",value:"511133"},{label:"峨眉山市",value:"511181"}],[{label:"顺庆区",value:"511302"},{label:"高坪区",value:"511303"},{label:"嘉陵区",value:"511304"},{label:"南部县",value:"511321"},{label:"营山县",value:"511322"},{label:"蓬安县",value:"511323"},{label:"仪陇县",value:"511324"},{label:"西充县",value:"511325"},{label:"阆中市",value:"511381"}],[{label:"东坡区",value:"511402"},{label:"彭山区",value:"511403"},{label:"仁寿县",value:"511421"},{label:"洪雅县",value:"511423"},{label:"丹棱县",value:"511424"},{label:"青神县",value:"511425"}],[{label:"翠屏区",value:"511502"},{label:"南溪区",value:"511503"},{label:"宜宾县",value:"511521"},{label:"江安县",value:"511523"},{label:"长宁县",value:"511524"},{label:"高县",value:"511525"},{label:"珙县",value:"511526"},{label:"筠连县",value:"511527"},{label:"兴文县",value:"511528"},{label:"屏山县",value:"511529"}],[{label:"广安区",value:"511602"},{label:"前锋区",value:"511603"},{label:"岳池县",value:"511621"},{label:"武胜县",value:"511622"},{label:"邻水县",value:"511623"},{label:"华蓥市",value:"511681"}],[{label:"通川区",value:"511702"},{label:"达川区",value:"511703"},{label:"宣汉县",value:"511722"},{label:"开江县",value:"511723"},{label:"大竹县",value:"511724"},{label:"渠县",value:"511725"},{label:"达州经济开发区",value:"511771"},{label:"万源市",value:"511781"}],[{label:"雨城区",value:"511802"},{label:"名山区",value:"511803"},{label:"荥经县",value:"511822"},{label:"汉源县",value:"511823"},{label:"石棉县",value:"511824"},{label:"天全县",value:"511825"},{label:"芦山县",value:"511826"},{label:"宝兴县",value:"511827"}],[{label:"巴州区",value:"511902"},{label:"恩阳区",value:"511903"},{label:"通江县",value:"511921"},{label:"南江县",value:"511922"},{label:"平昌县",value:"511923"},{label:"巴中经济开发区",value:"511971"}],[{label:"雁江区",value:"512002"},{label:"安岳县",value:"512021"},{label:"乐至县",value:"512022"}],[{label:"马尔康市",value:"513201"},{label:"汶川县",value:"513221"},{label:"理县",value:"513222"},{label:"茂县",value:"513223"},{label:"松潘县",value:"513224"},{label:"九寨沟县",value:"513225"},{label:"金川县",value:"513226"},{label:"小金县",value:"513227"},{label:"黑水县",value:"513228"},{label:"壤塘县",value:"513230"},{label:"阿坝县",value:"513231"},{label:"若尔盖县",value:"513232"},{label:"红原县",value:"513233"}],[{label:"康定市",value:"513301"},{label:"泸定县",value:"513322"},{label:"丹巴县",value:"513323"},{label:"九龙县",value:"513324"},{label:"雅江县",value:"513325"},{label:"道孚县",value:"513326"},{label:"炉霍县",value:"513327"},{label:"甘孜县",value:"513328"},{label:"新龙县",value:"513329"},{label:"德格县",value:"513330"},{label:"白玉县",value:"513331"},{label:"石渠县",value:"513332"},{label:"色达县",value:"513333"},{label:"理塘县",value:"513334"},{label:"巴塘县",value:"513335"},{label:"乡城县",value:"513336"},{label:"稻城县",value:"513337"},{label:"得荣县",value:"513338"}],[{label:"西昌市",value:"513401"},{label:"木里藏族自治县",value:"513422"},{label:"盐源县",value:"513423"},{label:"德昌县",value:"513424"},{label:"会理县",value:"513425"},{label:"会东县",value:"513426"},{label:"宁南县",value:"513427"},{label:"普格县",value:"513428"},{label:"布拖县",value:"513429"},{label:"金阳县",value:"513430"},{label:"昭觉县",value:"513431"},{label:"喜德县",value:"513432"},{label:"冕宁县",value:"513433"},{label:"越西县",value:"513434"},{label:"甘洛县",value:"513435"},{label:"美姑县",value:"513436"},{label:"雷波县",value:"513437"}]],[[{label:"南明区",value:"520102"},{label:"云岩区",value:"520103"},{label:"花溪区",value:"520111"},{label:"乌当区",value:"520112"},{label:"白云区",value:"520113"},{label:"观山湖区",value:"520115"},{label:"开阳县",value:"520121"},{label:"息烽县",value:"520122"},{label:"修文县",value:"520123"},{label:"清镇市",value:"520181"}],[{label:"钟山区",value:"520201"},{label:"六枝特区",value:"520203"},{label:"水城县",value:"520221"},{label:"盘州市",value:"520281"}],[{label:"红花岗区",value:"520302"},{label:"汇川区",value:"520303"},{label:"播州区",value:"520304"},{label:"桐梓县",value:"520322"},{label:"绥阳县",value:"520323"},{label:"正安县",value:"520324"},{label:"道真仡佬族苗族自治县",value:"520325"},{label:"务川仡佬族苗族自治县",value:"520326"},{label:"凤冈县",value:"520327"},{label:"湄潭县",value:"520328"},{label:"余庆县",value:"520329"},{label:"习水县",value:"520330"},{label:"赤水市",value:"520381"},{label:"仁怀市",value:"520382"}],[{label:"西秀区",value:"520402"},{label:"平坝区",value:"520403"},{label:"普定县",value:"520422"},{label:"镇宁布依族苗族自治县",value:"520423"},{label:"关岭布依族苗族自治县",value:"520424"},{label:"紫云苗族布依族自治县",value:"520425"}],[{label:"七星关区",value:"520502"},{label:"大方县",value:"520521"},{label:"黔西县",value:"520522"},{label:"金沙县",value:"520523"},{label:"织金县",value:"520524"},{label:"纳雍县",value:"520525"},{label:"威宁彝族回族苗族自治县",value:"520526"},{label:"赫章县",value:"520527"}],[{label:"碧江区",value:"520602"},{label:"万山区",value:"520603"},{label:"江口县",value:"520621"},{label:"玉屏侗族自治县",value:"520622"},{label:"石阡县",value:"520623"},{label:"思南县",value:"520624"},{label:"印江土家族苗族自治县",value:"520625"},{label:"德江县",value:"520626"},{label:"沿河土家族自治县",value:"520627"},{label:"松桃苗族自治县",value:"520628"}],[{label:"兴义市",value:"522301"},{label:"兴仁县",value:"522322"},{label:"普安县",value:"522323"},{label:"晴隆县",value:"522324"},{label:"贞丰县",value:"522325"},{label:"望谟县",value:"522326"},{label:"册亨县",value:"522327"},{label:"安龙县",value:"522328"}],[{label:"凯里市",value:"522601"},{label:"黄平县",value:"522622"},{label:"施秉县",value:"522623"},{label:"三穗县",value:"522624"},{label:"镇远县",value:"522625"},{label:"岑巩县",value:"522626"},{label:"天柱县",value:"522627"},{label:"锦屏县",value:"522628"},{label:"剑河县",value:"522629"},{label:"台江县",value:"522630"},{label:"黎平县",value:"522631"},{label:"榕江县",value:"522632"},{label:"从江县",value:"522633"},{label:"雷山县",value:"522634"},{label:"麻江县",value:"522635"},{label:"丹寨县",value:"522636"}],[{label:"都匀市",value:"522701"},{label:"福泉市",value:"522702"},{label:"荔波县",value:"522722"},{label:"贵定县",value:"522723"},{label:"瓮安县",value:"522725"},{label:"独山县",value:"522726"},{label:"平塘县",value:"522727"},{label:"罗甸县",value:"522728"},{label:"长顺县",value:"522729"},{label:"龙里县",value:"522730"},{label:"惠水县",value:"522731"},{label:"三都水族自治县",value:"522732"}]],[[{label:"五华区",value:"530102"},{label:"盘龙区",value:"530103"},{label:"官渡区",value:"530111"},{label:"西山区",value:"530112"},{label:"东川区",value:"530113"},{label:"呈贡区",value:"530114"},{label:"晋宁区",value:"530115"},{label:"富民县",value:"530124"},{label:"宜良县",value:"530125"},{label:"石林彝族自治县",value:"530126"},{label:"嵩明县",value:"530127"},{label:"禄劝彝族苗族自治县",value:"530128"},{label:"寻甸回族彝族自治县",value:"530129"},{label:"安宁市",value:"530181"}],[{label:"麒麟区",value:"530302"},{label:"沾益区",value:"530303"},{label:"马龙县",value:"530321"},{label:"陆良县",value:"530322"},{label:"师宗县",value:"530323"},{label:"罗平县",value:"530324"},{label:"富源县",value:"530325"},{label:"会泽县",value:"530326"},{label:"宣威市",value:"530381"}],[{label:"红塔区",value:"530402"},{label:"江川区",value:"530403"},{label:"澄江县",value:"530422"},{label:"通海县",value:"530423"},{label:"华宁县",value:"530424"},{label:"易门县",value:"530425"},{label:"峨山彝族自治县",value:"530426"},{label:"新平彝族傣族自治县",value:"530427"},{label:"元江哈尼族彝族傣族自治县",value:"530428"}],[{label:"隆阳区",value:"530502"},{label:"施甸县",value:"530521"},{label:"龙陵县",value:"530523"},{label:"昌宁县",value:"530524"},{label:"腾冲市",value:"530581"}],[{label:"昭阳区",value:"530602"},{label:"鲁甸县",value:"530621"},{label:"巧家县",value:"530622"},{label:"盐津县",value:"530623"},{label:"大关县",value:"530624"},{label:"永善县",value:"530625"},{label:"绥江县",value:"530626"},{label:"镇雄县",value:"530627"},{label:"彝良县",value:"530628"},{label:"威信县",value:"530629"},{label:"水富县",value:"530630"}],[{label:"古城区",value:"530702"},{label:"玉龙纳西族自治县",value:"530721"},{label:"永胜县",value:"530722"},{label:"华坪县",value:"530723"},{label:"宁蒗彝族自治县",value:"530724"}],[{label:"思茅区",value:"530802"},{label:"宁洱哈尼族彝族自治县",value:"530821"},{label:"墨江哈尼族自治县",value:"530822"},{label:"景东彝族自治县",value:"530823"},{label:"景谷傣族彝族自治县",value:"530824"},{label:"镇沅彝族哈尼族拉祜族自治县",value:"530825"},{label:"江城哈尼族彝族自治县",value:"530826"},{label:"孟连傣族拉祜族佤族自治县",value:"530827"},{label:"澜沧拉祜族自治县",value:"530828"},{label:"西盟佤族自治县",value:"530829"}],[{label:"临翔区",value:"530902"},{label:"凤庆县",value:"530921"},{label:"云县",value:"530922"},{label:"永德县",value:"530923"},{label:"镇康县",value:"530924"},{label:"双江拉祜族佤族布朗族傣族自治县",value:"530925"},{label:"耿马傣族佤族自治县",value:"530926"},{label:"沧源佤族自治县",value:"530927"}],[{label:"楚雄市",value:"532301"},{label:"双柏县",value:"532322"},{label:"牟定县",value:"532323"},{label:"南华县",value:"532324"},{label:"姚安县",value:"532325"},{label:"大姚县",value:"532326"},{label:"永仁县",value:"532327"},{label:"元谋县",value:"532328"},{label:"武定县",value:"532329"},{label:"禄丰县",value:"532331"}],[{label:"个旧市",value:"532501"},{label:"开远市",value:"532502"},{label:"蒙自市",value:"532503"},{label:"弥勒市",value:"532504"},{label:"屏边苗族自治县",value:"532523"},{label:"建水县",value:"532524"},{label:"石屏县",value:"532525"},{label:"泸西县",value:"532527"},{label:"元阳县",value:"532528"},{label:"红河县",value:"532529"},{label:"金平苗族瑶族傣族自治县",value:"532530"},{label:"绿春县",value:"532531"},{label:"河口瑶族自治县",value:"532532"}],[{label:"文山市",value:"532601"},{label:"砚山县",value:"532622"},{label:"西畴县",value:"532623"},{label:"麻栗坡县",value:"532624"},{label:"马关县",value:"532625"},{label:"丘北县",value:"532626"},{label:"广南县",value:"532627"},{label:"富宁县",value:"532628"}],[{label:"景洪市",value:"532801"},{label:"勐海县",value:"532822"},{label:"勐腊县",value:"532823"}],[{label:"大理市",value:"532901"},{label:"漾濞彝族自治县",value:"532922"},{label:"祥云县",value:"532923"},{label:"宾川县",value:"532924"},{label:"弥渡县",value:"532925"},{label:"南涧彝族自治县",value:"532926"},{label:"巍山彝族回族自治县",value:"532927"},{label:"永平县",value:"532928"},{label:"云龙县",value:"532929"},{label:"洱源县",value:"532930"},{label:"剑川县",value:"532931"},{label:"鹤庆县",value:"532932"}],[{label:"瑞丽市",value:"533102"},{label:"芒市",value:"533103"},{label:"梁河县",value:"533122"},{label:"盈江县",value:"533123"},{label:"陇川县",value:"533124"}],[{label:"泸水市",value:"533301"},{label:"福贡县",value:"533323"},{label:"贡山独龙族怒族自治县",value:"533324"},{label:"兰坪白族普米族自治县",value:"533325"}],[{label:"香格里拉市",value:"533401"},{label:"德钦县",value:"533422"},{label:"维西傈僳族自治县",value:"533423"}]],[[{label:"城关区",value:"540102"},{label:"堆龙德庆区",value:"540103"},{label:"林周县",value:"540121"},{label:"当雄县",value:"540122"},{label:"尼木县",value:"540123"},{label:"曲水县",value:"540124"},{label:"达孜县",value:"540126"},{label:"墨竹工卡县",value:"540127"},{label:"格尔木藏青工业园区",value:"540171"},{label:"拉萨经济技术开发区",value:"540172"},{label:"西藏文化旅游创意园区",value:"540173"},{label:"达孜工业园区",value:"540174"}],[{label:"桑珠孜区",value:"540202"},{label:"南木林县",value:"540221"},{label:"江孜县",value:"540222"},{label:"定日县",value:"540223"},{label:"萨迦县",value:"540224"},{label:"拉孜县",value:"540225"},{label:"昂仁县",value:"540226"},{label:"谢通门县",value:"540227"},{label:"白朗县",value:"540228"},{label:"仁布县",value:"540229"},{label:"康马县",value:"540230"},{label:"定结县",value:"540231"},{label:"仲巴县",value:"540232"},{label:"亚东县",value:"540233"},{label:"吉隆县",value:"540234"},{label:"聂拉木县",value:"540235"},{label:"萨嘎县",value:"540236"},{label:"岗巴县",value:"540237"}],[{label:"卡若区",value:"540302"},{label:"江达县",value:"540321"},{label:"贡觉县",value:"540322"},{label:"类乌齐县",value:"540323"},{label:"丁青县",value:"540324"},{label:"察雅县",value:"540325"},{label:"八宿县",value:"540326"},{label:"左贡县",value:"540327"},{label:"芒康县",value:"540328"},{label:"洛隆县",value:"540329"},{label:"边坝县",value:"540330"}],[{label:"巴宜区",value:"540402"},{label:"工布江达县",value:"540421"},{label:"米林县",value:"540422"},{label:"墨脱县",value:"540423"},{label:"波密县",value:"540424"},{label:"察隅县",value:"540425"},{label:"朗县",value:"540426"}],[{label:"乃东区",value:"540502"},{label:"扎囊县",value:"540521"},{label:"贡嘎县",value:"540522"},{label:"桑日县",value:"540523"},{label:"琼结县",value:"540524"},{label:"曲松县",value:"540525"},{label:"措美县",value:"540526"},{label:"洛扎县",value:"540527"},{label:"加查县",value:"540528"},{label:"隆子县",value:"540529"},{label:"错那县",value:"540530"},{label:"浪卡子县",value:"540531"}],[{label:"那曲县",value:"542421"},{label:"嘉黎县",value:"542422"},{label:"比如县",value:"542423"},{label:"聂荣县",value:"542424"},{label:"安多县",value:"542425"},{label:"申扎县",value:"542426"},{label:"索县",value:"542427"},{label:"班戈县",value:"542428"},{label:"巴青县",value:"542429"},{label:"尼玛县",value:"542430"},{label:"双湖县",value:"542431"}],[{label:"普兰县",value:"542521"},{label:"札达县",value:"542522"},{label:"噶尔县",value:"542523"},{label:"日土县",value:"542524"},{label:"革吉县",value:"542525"},{label:"改则县",value:"542526"},{label:"措勤县",value:"542527"}]],[[{label:"新城区",value:"610102"},{label:"碑林区",value:"610103"},{label:"莲湖区",value:"610104"},{label:"灞桥区",value:"610111"},{label:"未央区",value:"610112"},{label:"雁塔区",value:"610113"},{label:"阎良区",value:"610114"},{label:"临潼区",value:"610115"},{label:"长安区",value:"610116"},{label:"高陵区",value:"610117"},{label:"鄠邑区",value:"610118"},{label:"蓝田县",value:"610122"},{label:"周至县",value:"610124"}],[{label:"王益区",value:"610202"},{label:"印台区",value:"610203"},{label:"耀州区",value:"610204"},{label:"宜君县",value:"610222"}],[{label:"渭滨区",value:"610302"},{label:"金台区",value:"610303"},{label:"陈仓区",value:"610304"},{label:"凤翔县",value:"610322"},{label:"岐山县",value:"610323"},{label:"扶风县",value:"610324"},{label:"眉县",value:"610326"},{label:"陇县",value:"610327"},{label:"千阳县",value:"610328"},{label:"麟游县",value:"610329"},{label:"凤县",value:"610330"},{label:"太白县",value:"610331"}],[{label:"秦都区",value:"610402"},{label:"杨陵区",value:"610403"},{label:"渭城区",value:"610404"},{label:"三原县",value:"610422"},{label:"泾阳县",value:"610423"},{label:"乾县",value:"610424"},{label:"礼泉县",value:"610425"},{label:"永寿县",value:"610426"},{label:"彬县",value:"610427"},{label:"长武县",value:"610428"},{label:"旬邑县",value:"610429"},{label:"淳化县",value:"610430"},{label:"武功县",value:"610431"},{label:"兴平市",value:"610481"}],[{label:"临渭区",value:"610502"},{label:"华州区",value:"610503"},{label:"潼关县",value:"610522"},{label:"大荔县",value:"610523"},{label:"合阳县",value:"610524"},{label:"澄城县",value:"610525"},{label:"蒲城县",value:"610526"},{label:"白水县",value:"610527"},{label:"富平县",value:"610528"},{label:"韩城市",value:"610581"},{label:"华阴市",value:"610582"}],[{label:"宝塔区",value:"610602"},{label:"安塞区",value:"610603"},{label:"延长县",value:"610621"},{label:"延川县",value:"610622"},{label:"子长县",value:"610623"},{label:"志丹县",value:"610625"},{label:"吴起县",value:"610626"},{label:"甘泉县",value:"610627"},{label:"富县",value:"610628"},{label:"洛川县",value:"610629"},{label:"宜川县",value:"610630"},{label:"黄龙县",value:"610631"},{label:"黄陵县",value:"610632"}],[{label:"汉台区",value:"610702"},{label:"南郑区",value:"610703"},{label:"城固县",value:"610722"},{label:"洋县",value:"610723"},{label:"西乡县",value:"610724"},{label:"勉县",value:"610725"},{label:"宁强县",value:"610726"},{label:"略阳县",value:"610727"},{label:"镇巴县",value:"610728"},{label:"留坝县",value:"610729"},{label:"佛坪县",value:"610730"}],[{label:"榆阳区",value:"610802"},{label:"横山区",value:"610803"},{label:"府谷县",value:"610822"},{label:"靖边县",value:"610824"},{label:"定边县",value:"610825"},{label:"绥德县",value:"610826"},{label:"米脂县",value:"610827"},{label:"佳县",value:"610828"},{label:"吴堡县",value:"610829"},{label:"清涧县",value:"610830"},{label:"子洲县",value:"610831"},{label:"神木市",value:"610881"}],[{label:"汉滨区",value:"610902"},{label:"汉阴县",value:"610921"},{label:"石泉县",value:"610922"},{label:"宁陕县",value:"610923"},{label:"紫阳县",value:"610924"},{label:"岚皋县",value:"610925"},{label:"平利县",value:"610926"},{label:"镇坪县",value:"610927"},{label:"旬阳县",value:"610928"},{label:"白河县",value:"610929"}],[{label:"商州区",value:"611002"},{label:"洛南县",value:"611021"},{label:"丹凤县",value:"611022"},{label:"商南县",value:"611023"},{label:"山阳县",value:"611024"},{label:"镇安县",value:"611025"},{label:"柞水县",value:"611026"}]],[[{label:"城关区",value:"620102"},{label:"七里河区",value:"620103"},{label:"西固区",value:"620104"},{label:"安宁区",value:"620105"},{label:"红古区",value:"620111"},{label:"永登县",value:"620121"},{label:"皋兰县",value:"620122"},{label:"榆中县",value:"620123"},{label:"兰州新区",value:"620171"}],[{label:"嘉峪关市",value:"620201"}],[{label:"金川区",value:"620302"},{label:"永昌县",value:"620321"}],[{label:"白银区",value:"620402"},{label:"平川区",value:"620403"},{label:"靖远县",value:"620421"},{label:"会宁县",value:"620422"},{label:"景泰县",value:"620423"}],[{label:"秦州区",value:"620502"},{label:"麦积区",value:"620503"},{label:"清水县",value:"620521"},{label:"秦安县",value:"620522"},{label:"甘谷县",value:"620523"},{label:"武山县",value:"620524"},{label:"张家川回族自治县",value:"620525"}],[{label:"凉州区",value:"620602"},{label:"民勤县",value:"620621"},{label:"古浪县",value:"620622"},{label:"天祝藏族自治县",value:"620623"}],[{label:"甘州区",value:"620702"},{label:"肃南裕固族自治县",value:"620721"},{label:"民乐县",value:"620722"},{label:"临泽县",value:"620723"},{label:"高台县",value:"620724"},{label:"山丹县",value:"620725"}],[{label:"崆峒区",value:"620802"},{label:"泾川县",value:"620821"},{label:"灵台县",value:"620822"},{label:"崇信县",value:"620823"},{label:"华亭县",value:"620824"},{label:"庄浪县",value:"620825"},{label:"静宁县",value:"620826"},{label:"平凉工业园区",value:"620871"}],[{label:"肃州区",value:"620902"},{label:"金塔县",value:"620921"},{label:"瓜州县",value:"620922"},{label:"肃北蒙古族自治县",value:"620923"},{label:"阿克塞哈萨克族自治县",value:"620924"},{label:"玉门市",value:"620981"},{label:"敦煌市",value:"620982"}],[{label:"西峰区",value:"621002"},{label:"庆城县",value:"621021"},{label:"环县",value:"621022"},{label:"华池县",value:"621023"},{label:"合水县",value:"621024"},{label:"正宁县",value:"621025"},{label:"宁县",value:"621026"},{label:"镇原县",value:"621027"}],[{label:"安定区",value:"621102"},{label:"通渭县",value:"621121"},{label:"陇西县",value:"621122"},{label:"渭源县",value:"621123"},{label:"临洮县",value:"621124"},{label:"漳县",value:"621125"},{label:"岷县",value:"621126"}],[{label:"武都区",value:"621202"},{label:"成县",value:"621221"},{label:"文县",value:"621222"},{label:"宕昌县",value:"621223"},{label:"康县",value:"621224"},{label:"西和县",value:"621225"},{label:"礼县",value:"621226"},{label:"徽县",value:"621227"},{label:"两当县",value:"621228"}],[{label:"临夏市",value:"622901"},{label:"临夏县",value:"622921"},{label:"康乐县",value:"622922"},{label:"永靖县",value:"622923"},{label:"广河县",value:"622924"},{label:"和政县",value:"622925"},{label:"东乡族自治县",value:"622926"},{label:"积石山保安族东乡族撒拉族自治县",value:"622927"}],[{label:"合作市",value:"623001"},{label:"临潭县",value:"623021"},{label:"卓尼县",value:"623022"},{label:"舟曲县",value:"623023"},{label:"迭部县",value:"623024"},{label:"玛曲县",value:"623025"},{label:"碌曲县",value:"623026"},{label:"夏河县",value:"623027"}]],[[{label:"城东区",value:"630102"},{label:"城中区",value:"630103"},{label:"城西区",value:"630104"},{label:"城北区",value:"630105"},{label:"大通回族土族自治县",value:"630121"},{label:"湟中县",value:"630122"},{label:"湟源县",value:"630123"}],[{label:"乐都区",value:"630202"},{label:"平安区",value:"630203"},{label:"民和回族土族自治县",value:"630222"},{label:"互助土族自治县",value:"630223"},{label:"化隆回族自治县",value:"630224"},{label:"循化撒拉族自治县",value:"630225"}],[{label:"门源回族自治县",value:"632221"},{label:"祁连县",value:"632222"},{label:"海晏县",value:"632223"},{label:"刚察县",value:"632224"}],[{label:"同仁县",value:"632321"},{label:"尖扎县",value:"632322"},{label:"泽库县",value:"632323"},{label:"河南蒙古族自治县",value:"632324"}],[{label:"共和县",value:"632521"},{label:"同德县",value:"632522"},{label:"贵德县",value:"632523"},{label:"兴海县",value:"632524"},{label:"贵南县",value:"632525"}],[{label:"玛沁县",value:"632621"},{label:"班玛县",value:"632622"},{label:"甘德县",value:"632623"},{label:"达日县",value:"632624"},{label:"久治县",value:"632625"},{label:"玛多县",value:"632626"}],[{label:"玉树市",value:"632701"},{label:"杂多县",value:"632722"},{label:"称多县",value:"632723"},{label:"治多县",value:"632724"},{label:"囊谦县",value:"632725"},{label:"曲麻莱县",value:"632726"}],[{label:"格尔木市",value:"632801"},{label:"德令哈市",value:"632802"},{label:"乌兰县",value:"632821"},{label:"都兰县",value:"632822"},{label:"天峻县",value:"632823"},{label:"大柴旦行政委员会",value:"632857"},{label:"冷湖行政委员会",value:"632858"},{label:"茫崖行政委员会",value:"632859"}]],[[{label:"兴庆区",value:"640104"},{label:"西夏区",value:"640105"},{label:"金凤区",value:"640106"},{label:"永宁县",value:"640121"},{label:"贺兰县",value:"640122"},{label:"灵武市",value:"640181"}],[{label:"大武口区",value:"640202"},{label:"惠农区",value:"640205"},{label:"平罗县",value:"640221"}],[{label:"利通区",value:"640302"},{label:"红寺堡区",value:"640303"},{label:"盐池县",value:"640323"},{label:"同心县",value:"640324"},{label:"青铜峡市",value:"640381"}],[{label:"原州区",value:"640402"},{label:"西吉县",value:"640422"},{label:"隆德县",value:"640423"},{label:"泾源县",value:"640424"},{label:"彭阳县",value:"640425"}],[{label:"沙坡头区",value:"640502"},{label:"中宁县",value:"640521"},{label:"海原县",value:"640522"}]],[[{label:"天山区",value:"650102"},{label:"沙依巴克区",value:"650103"},{label:"新市区",value:"650104"},{label:"水磨沟区",value:"650105"},{label:"头屯河区",value:"650106"},{label:"达坂城区",value:"650107"},{label:"米东区",value:"650109"},{label:"乌鲁木齐县",value:"650121"},{label:"乌鲁木齐经济技术开发区",value:"650171"},{label:"乌鲁木齐高新技术产业开发区",value:"650172"}],[{label:"独山子区",value:"650202"},{label:"克拉玛依区",value:"650203"},{label:"白碱滩区",value:"650204"},{label:"乌尔禾区",value:"650205"}],[{label:"高昌区",value:"650402"},{label:"鄯善县",value:"650421"},{label:"托克逊县",value:"650422"}],[{label:"伊州区",value:"650502"},{label:"巴里坤哈萨克自治县",value:"650521"},{label:"伊吾县",value:"650522"}],[{label:"昌吉市",value:"652301"},{label:"阜康市",value:"652302"},{label:"呼图壁县",value:"652323"},{label:"玛纳斯县",value:"652324"},{label:"奇台县",value:"652325"},{label:"吉木萨尔县",value:"652327"},{label:"木垒哈萨克自治县",value:"652328"}],[{label:"博乐市",value:"652701"},{label:"阿拉山口市",value:"652702"},{label:"精河县",value:"652722"},{label:"温泉县",value:"652723"}],[{label:"库尔勒市",value:"652801"},{label:"轮台县",value:"652822"},{label:"尉犁县",value:"652823"},{label:"若羌县",value:"652824"},{label:"且末县",value:"652825"},{label:"焉耆回族自治县",value:"652826"},{label:"和静县",value:"652827"},{label:"和硕县",value:"652828"},{label:"博湖县",value:"652829"},{label:"库尔勒经济技术开发区",value:"652871"}],[{label:"阿克苏市",value:"652901"},{label:"温宿县",value:"652922"},{label:"库车县",value:"652923"},{label:"沙雅县",value:"652924"},{label:"新和县",value:"652925"},{label:"拜城县",value:"652926"},{label:"乌什县",value:"652927"},{label:"阿瓦提县",value:"652928"},{label:"柯坪县",value:"652929"}],[{label:"阿图什市",value:"653001"},{label:"阿克陶县",value:"653022"},{label:"阿合奇县",value:"653023"},{label:"乌恰县",value:"653024"}],[{label:"喀什市",value:"653101"},{label:"疏附县",value:"653121"},{label:"疏勒县",value:"653122"},{label:"英吉沙县",value:"653123"},{label:"泽普县",value:"653124"},{label:"莎车县",value:"653125"},{label:"叶城县",value:"653126"},{label:"麦盖提县",value:"653127"},{label:"岳普湖县",value:"653128"},{label:"伽师县",value:"653129"},{label:"巴楚县",value:"653130"},{label:"塔什库尔干塔吉克自治县",value:"653131"}],[{label:"和田市",value:"653201"},{label:"和田县",value:"653221"},{label:"墨玉县",value:"653222"},{label:"皮山县",value:"653223"},{label:"洛浦县",value:"653224"},{label:"策勒县",value:"653225"},{label:"于田县",value:"653226"},{label:"民丰县",value:"653227"}],[{label:"伊宁市",value:"654002"},{label:"奎屯市",value:"654003"},{label:"霍尔果斯市",value:"654004"},{label:"伊宁县",value:"654021"},{label:"察布查尔锡伯自治县",value:"654022"},{label:"霍城县",value:"654023"},{label:"巩留县",value:"654024"},{label:"新源县",value:"654025"},{label:"昭苏县",value:"654026"},{label:"特克斯县",value:"654027"},{label:"尼勒克县",value:"654028"}],[{label:"塔城市",value:"654201"},{label:"乌苏市",value:"654202"},{label:"额敏县",value:"654221"},{label:"沙湾县",value:"654223"},{label:"托里县",value:"654224"},{label:"裕民县",value:"654225"},{label:"和布克赛尔蒙古自治县",value:"654226"}],[{label:"阿勒泰市",value:"654301"},{label:"布尔津县",value:"654321"},{label:"富蕴县",value:"654322"},{label:"福海县",value:"654323"},{label:"哈巴河县",value:"654324"},{label:"青河县",value:"654325"},{label:"吉木乃县",value:"654326"}],[{label:"石河子市",value:"659001"},{label:"阿拉尔市",value:"659002"},{label:"图木舒克市",value:"659003"},{label:"五家渠市",value:"659004"},{label:"铁门关市",value:"659006"}]],[[{label:"台北",value:"660101"}],[{label:"高雄",value:"660201"}],[{label:"基隆",value:"660301"}],[{label:"台中",value:"660401"}],[{label:"台南",value:"660501"}],[{label:"新竹",value:"660601"}],[{label:"嘉义",value:"660701"}],[{label:"宜兰",value:"660801"}],[{label:"桃园",value:"660901"}],[{label:"苗栗",value:"661001"}],[{label:"彰化",value:"661101"}],[{label:"南投",value:"661201"}],[{label:"云林",value:"661301"}],[{label:"屏东",value:"661401"}],[{label:"台东",value:"661501"}],[{label:"花莲",value:"661601"}],[{label:"澎湖",value:"661701"}]],[[{label:"香港岛",value:"670101"}],[{label:"九龙",value:"670201"}],[{label:"新界",value:"670301"}]],[[{label:"澳门半岛",value:"680101"}],[{label:"氹仔岛",value:"680201"}],[{label:"路环岛",value:"680301"}],[{label:"路氹城",value:"680401"}]]],u=t;l.default=u},"37ab":function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t={pages:{"pages/login/login":{navigationBarTitleText:"登录",softinputMode:"adjustPan"},"pages/reportmenu/pos05":{enablePullDownRefresh:!1,navigationBarTitleText:"零售分析",bounce:"none",titleNView:{buttons:[{type:"back",float:"left"},{float:"right",text:"",fontSrc:"/static/uni.ttf",fontSize:"22px",color:"#FFFFFF"}]}},"pages/reportmenu/posreport":{enablePullDownRefresh:!1,navigationBarTitleText:"零售分析",bounce:"none",titleNView:{buttons:[{float:"right",text:"",fontSrc:"/static/uni.ttf",fontSize:"22px",color:"#FFFFFF"}]}},"pages/select/selectdate":{navigationBarTitleText:"查询条件",bounce:"none",titleNView:{buttons:[{type:"none",text:"✓",float:"right"}]}},"pages/goodsdetail/goodsdetail":{navigationStyle:"custom",bounce:"none",titleNView:!1},"pages/reportmenu/purchasemenu":{navigationBarTitleText:"报表菜单"},"pages/reportmenu/posreportdetail":{navigationBarTitleText:"货品分析"},"pages/select/select":{navigationBarTitleText:"资料选择",bounce:"none",titleNView:{buttons:[{type:"none",text:"✓",float:"right"}]}},"pages/login/ip":{navigationBarTitleText:"设置服务器地址"},"pages/main/main":{navigationBarTitleText:"登录模板"},"pages/reg/reg":{navigationBarTitleText:"注册"},"pages/pwd/pwd":{navigationBarTitleText:"找回密码"},"pages/user/user":{navigationBarTitleText:"我的"}},globalStyle:{navigationBarTextStyle:"white",navigationBarBackgroundColor:"#108ee9",backgroundColor:"#108ee9"}};l.default=t},"3e05":function(e,l,a){"use strict";(function(e){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var a="USERS_KEY",t=function(){var l="";return l=e.getStorageSync(a),l||(l="[]"),JSON.parse(l)},u=function(l){var u=t();u.push({account:l.account,password:l.password}),e.setStorageSync(a,JSON.stringify(u))},n={getUsers:t,addUser:u};l.default=n}).call(this,a("6e42")["default"])},"42c6":function(e,l,a){},"66fd":function(e,l,a){"use strict";a.r(l),function(e){
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var a=Object.freeze({});function t(e){return void 0===e||null===e}function u(e){return void 0!==e&&null!==e}function n(e){return!0===e}function v(e){return!1===e}function r(e){return"string"===typeof e||"number"===typeof e||"symbol"===typeof e||"boolean"===typeof e}function b(e){return null!==e&&"object"===typeof e}var o=Object.prototype.toString;function i(e){return"[object Object]"===o.call(e)}function s(e){return"[object RegExp]"===o.call(e)}function c(e){var l=parseFloat(String(e));return l>=0&&Math.floor(l)===l&&isFinite(e)}function f(e){return u(e)&&"function"===typeof e.then&&"function"===typeof e.catch}function p(e){return null==e?"":Array.isArray(e)||i(e)&&e.toString===o?JSON.stringify(e,null,2):String(e)}function h(e){var l=parseFloat(e);return isNaN(l)?e:l}function d(e,l){for(var a=Object.create(null),t=e.split(","),u=0;u<t.length;u++)a[t[u]]=!0;return l?function(e){return a[e.toLowerCase()]}:function(e){return a[e]}}d("slot,component",!0);var y=d("key,ref,slot,slot-scope,is");function g(e,l){if(e.length){var a=e.indexOf(l);if(a>-1)return e.splice(a,1)}}var _=Object.prototype.hasOwnProperty;function m(e,l){return _.call(e,l)}function w(e){var l=Object.create(null);return function(a){var t=l[a];return t||(l[a]=e(a))}}var $=/-(\w)/g,O=w(function(e){return e.replace($,function(e,l){return l?l.toUpperCase():""})}),S=w(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),x=/\B([A-Z])/g,k=w(function(e){return e.replace(x,"-$1").toLowerCase()});function A(e,l){function a(a){var t=arguments.length;return t?t>1?e.apply(l,arguments):e.call(l,a):e.call(l)}return a._length=e.length,a}function j(e,l){return e.bind(l)}var D=Function.prototype.bind?j:A;function E(e,l){l=l||0;var a=e.length-l,t=new Array(a);while(a--)t[a]=e[a+l];return t}function P(e,l){for(var a in l)e[a]=l[a];return e}function T(e){for(var l={},a=0;a<e.length;a++)e[a]&&P(l,e[a]);return l}function C(e,l,a){}var N=function(e,l,a){return!1},M=function(e){return e};function I(e,l){if(e===l)return!0;var a=b(e),t=b(l);if(!a||!t)return!a&&!t&&String(e)===String(l);try{var u=Array.isArray(e),n=Array.isArray(l);if(u&&n)return e.length===l.length&&e.every(function(e,a){return I(e,l[a])});if(e instanceof Date&&l instanceof Date)return e.getTime()===l.getTime();if(u||n)return!1;var v=Object.keys(e),r=Object.keys(l);return v.length===r.length&&v.every(function(a){return I(e[a],l[a])})}catch(o){return!1}}function R(e,l){for(var a=0;a<e.length;a++)if(I(e[a],l))return a;return-1}function L(e){var l=!1;return function(){l||(l=!0,e.apply(this,arguments))}}var F=["component","directive","filter"],V=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],B={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:N,isReservedAttr:N,isUnknownElement:N,getTagNamespace:C,parsePlatformTagName:M,mustUseProp:N,async:!0,_lifecycleHooks:V},U=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function q(e){var l=(e+"").charCodeAt(0);return 36===l||95===l}function H(e,l,a,t){Object.defineProperty(e,l,{value:a,enumerable:!!t,writable:!0,configurable:!0})}var G=new RegExp("[^"+U.source+".$_\\d]");function z(e){if(!G.test(e)){var l=e.split(".");return function(e){for(var a=0;a<l.length;a++){if(!e)return;e=e[l[a]]}return e}}}var J,Y="__proto__"in{},W="undefined"!==typeof window,K="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,X=K&&WXEnvironment.platform.toLowerCase(),Z=W&&window.navigator.userAgent.toLowerCase(),Q=Z&&/msie|trident/.test(Z),ee=(Z&&Z.indexOf("msie 9.0"),Z&&Z.indexOf("edge/")>0),le=(Z&&Z.indexOf("android"),Z&&/iphone|ipad|ipod|ios/.test(Z)||"ios"===X),ae=(Z&&/chrome\/\d+/.test(Z),Z&&/phantomjs/.test(Z),Z&&Z.match(/firefox\/(\d+)/),{}.watch);if(W)try{var te={};Object.defineProperty(te,"passive",{get:function(){}}),window.addEventListener("test-passive",null,te)}catch(eu){}var ue=function(){return void 0===J&&(J=!W&&!K&&"undefined"!==typeof e&&(e["process"]&&"server"===e["process"].env.VUE_ENV)),J},ne=W&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ve(e){return"function"===typeof e&&/native code/.test(e.toString())}var re,be="undefined"!==typeof Symbol&&ve(Symbol)&&"undefined"!==typeof Reflect&&ve(Reflect.ownKeys);re="undefined"!==typeof Set&&ve(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var oe=C,ie=0,se=function(){this.id=ie++,this.subs=[]};function ce(e){se.SharedObject.targetStack.push(e),se.SharedObject.target=e}function fe(){se.SharedObject.targetStack.pop(),se.SharedObject.target=se.SharedObject.targetStack[se.SharedObject.targetStack.length-1]}se.prototype.addSub=function(e){this.subs.push(e)},se.prototype.removeSub=function(e){g(this.subs,e)},se.prototype.depend=function(){se.SharedObject.target&&se.SharedObject.target.addDep(this)},se.prototype.notify=function(){var e=this.subs.slice();for(var l=0,a=e.length;l<a;l++)e[l].update()},se.SharedObject="undefined"!==typeof SharedObject?SharedObject:{},se.SharedObject.target=null,se.SharedObject.targetStack=[];var pe=function(e,l,a,t,u,n,v,r){this.tag=e,this.data=l,this.children=a,this.text=t,this.elm=u,this.ns=void 0,this.context=n,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=l&&l.key,this.componentOptions=v,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=r,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},he={child:{configurable:!0}};he.child.get=function(){return this.componentInstance},Object.defineProperties(pe.prototype,he);var de=function(e){void 0===e&&(e="");var l=new pe;return l.text=e,l.isComment=!0,l};function ye(e){return new pe(void 0,void 0,void 0,String(e))}function ge(e){var l=new pe(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return l.ns=e.ns,l.isStatic=e.isStatic,l.key=e.key,l.isComment=e.isComment,l.fnContext=e.fnContext,l.fnOptions=e.fnOptions,l.fnScopeId=e.fnScopeId,l.asyncMeta=e.asyncMeta,l.isCloned=!0,l}var _e=Array.prototype,me=Object.create(_e),we=["push","pop","shift","unshift","splice","sort","reverse"];we.forEach(function(e){var l=_e[e];H(me,e,function(){var a=[],t=arguments.length;while(t--)a[t]=arguments[t];var u,n=l.apply(this,a),v=this.__ob__;switch(e){case"push":case"unshift":u=a;break;case"splice":u=a.slice(2);break}return u&&v.observeArray(u),v.dep.notify(),n})});var $e=Object.getOwnPropertyNames(me),Oe=!0;function Se(e){Oe=e}var xe=function(e){this.value=e,this.dep=new se,this.vmCount=0,H(e,"__ob__",this),Array.isArray(e)?(Y?e.push!==e.__proto__.push?Ae(e,me,$e):ke(e,me):Ae(e,me,$e),this.observeArray(e)):this.walk(e)};function ke(e,l){e.__proto__=l}function Ae(e,l,a){for(var t=0,u=a.length;t<u;t++){var n=a[t];H(e,n,l[n])}}function je(e,l){var a;if(b(e)&&!(e instanceof pe))return m(e,"__ob__")&&e.__ob__ instanceof xe?a=e.__ob__:Oe&&!ue()&&(Array.isArray(e)||i(e))&&Object.isExtensible(e)&&!e._isVue&&(a=new xe(e)),l&&a&&a.vmCount++,a}function De(e,l,a,t,u){var n=new se,v=Object.getOwnPropertyDescriptor(e,l);if(!v||!1!==v.configurable){var r=v&&v.get,b=v&&v.set;r&&!b||2!==arguments.length||(a=e[l]);var o=!u&&je(a);Object.defineProperty(e,l,{enumerable:!0,configurable:!0,get:function(){var l=r?r.call(e):a;return se.SharedObject.target&&(n.depend(),o&&(o.dep.depend(),Array.isArray(l)&&Te(l))),l},set:function(l){var t=r?r.call(e):a;l===t||l!==l&&t!==t||r&&!b||(b?b.call(e,l):a=l,o=!u&&je(l),n.notify())}})}}function Ee(e,l,a){if(Array.isArray(e)&&c(l))return e.length=Math.max(e.length,l),e.splice(l,1,a),a;if(l in e&&!(l in Object.prototype))return e[l]=a,a;var t=e.__ob__;return e._isVue||t&&t.vmCount?a:t?(De(t.value,l,a),t.dep.notify(),a):(e[l]=a,a)}function Pe(e,l){if(Array.isArray(e)&&c(l))e.splice(l,1);else{var a=e.__ob__;e._isVue||a&&a.vmCount||m(e,l)&&(delete e[l],a&&a.dep.notify())}}function Te(e){for(var l=void 0,a=0,t=e.length;a<t;a++)l=e[a],l&&l.__ob__&&l.__ob__.dep.depend(),Array.isArray(l)&&Te(l)}xe.prototype.walk=function(e){for(var l=Object.keys(e),a=0;a<l.length;a++)De(e,l[a])},xe.prototype.observeArray=function(e){for(var l=0,a=e.length;l<a;l++)je(e[l])};var Ce=B.optionMergeStrategies;function Ne(e,l){if(!l)return e;for(var a,t,u,n=be?Reflect.ownKeys(l):Object.keys(l),v=0;v<n.length;v++)a=n[v],"__ob__"!==a&&(t=e[a],u=l[a],m(e,a)?t!==u&&i(t)&&i(u)&&Ne(t,u):Ee(e,a,u));return e}function Me(e,l,a){return a?function(){var t="function"===typeof l?l.call(a,a):l,u="function"===typeof e?e.call(a,a):e;return t?Ne(t,u):u}:l?e?function(){return Ne("function"===typeof l?l.call(this,this):l,"function"===typeof e?e.call(this,this):e)}:l:e}function Ie(e,l){var a=l?e?e.concat(l):Array.isArray(l)?l:[l]:e;return a?Re(a):a}function Re(e){for(var l=[],a=0;a<e.length;a++)-1===l.indexOf(e[a])&&l.push(e[a]);return l}function Le(e,l,a,t){var u=Object.create(e||null);return l?P(u,l):u}Ce.data=function(e,l,a){return a?Me(e,l,a):l&&"function"!==typeof l?e:Me(e,l)},V.forEach(function(e){Ce[e]=Ie}),F.forEach(function(e){Ce[e+"s"]=Le}),Ce.watch=function(e,l,a,t){if(e===ae&&(e=void 0),l===ae&&(l=void 0),!l)return Object.create(e||null);if(!e)return l;var u={};for(var n in P(u,e),l){var v=u[n],r=l[n];v&&!Array.isArray(v)&&(v=[v]),u[n]=v?v.concat(r):Array.isArray(r)?r:[r]}return u},Ce.props=Ce.methods=Ce.inject=Ce.computed=function(e,l,a,t){if(!e)return l;var u=Object.create(null);return P(u,e),l&&P(u,l),u},Ce.provide=Me;var Fe=function(e,l){return void 0===l?e:l};function Ve(e,l){var a=e.props;if(a){var t,u,n,v={};if(Array.isArray(a)){t=a.length;while(t--)u=a[t],"string"===typeof u&&(n=O(u),v[n]={type:null})}else if(i(a))for(var r in a)u=a[r],n=O(r),v[n]=i(u)?u:{type:u};else 0;e.props=v}}function Be(e,l){var a=e.inject;if(a){var t=e.inject={};if(Array.isArray(a))for(var u=0;u<a.length;u++)t[a[u]]={from:a[u]};else if(i(a))for(var n in a){var v=a[n];t[n]=i(v)?P({from:n},v):{from:v}}else 0}}function Ue(e){var l=e.directives;if(l)for(var a in l){var t=l[a];"function"===typeof t&&(l[a]={bind:t,update:t})}}function qe(e,l,a){if("function"===typeof l&&(l=l.options),Ve(l,a),Be(l,a),Ue(l),!l._base&&(l.extends&&(e=qe(e,l.extends,a)),l.mixins))for(var t=0,u=l.mixins.length;t<u;t++)e=qe(e,l.mixins[t],a);var n,v={};for(n in e)r(n);for(n in l)m(e,n)||r(n);function r(t){var u=Ce[t]||Fe;v[t]=u(e[t],l[t],a,t)}return v}function He(e,l,a,t){if("string"===typeof a){var u=e[l];if(m(u,a))return u[a];var n=O(a);if(m(u,n))return u[n];var v=S(n);if(m(u,v))return u[v];var r=u[a]||u[n]||u[v];return r}}function Ge(e,l,a,t){var u=l[e],n=!m(a,e),v=a[e],r=We(Boolean,u.type);if(r>-1)if(n&&!m(u,"default"))v=!1;else if(""===v||v===k(e)){var b=We(String,u.type);(b<0||r<b)&&(v=!0)}if(void 0===v){v=ze(t,u,e);var o=Oe;Se(!0),je(v),Se(o)}return v}function ze(e,l,a){if(m(l,"default")){var t=l.default;return e&&e.$options.propsData&&void 0===e.$options.propsData[a]&&void 0!==e._props[a]?e._props[a]:"function"===typeof t&&"Function"!==Je(l.type)?t.call(e):t}}function Je(e){var l=e&&e.toString().match(/^\s*function (\w+)/);return l?l[1]:""}function Ye(e,l){return Je(e)===Je(l)}function We(e,l){if(!Array.isArray(l))return Ye(l,e)?0:-1;for(var a=0,t=l.length;a<t;a++)if(Ye(l[a],e))return a;return-1}function Ke(e,l,a){ce();try{if(l){var t=l;while(t=t.$parent){var u=t.$options.errorCaptured;if(u)for(var n=0;n<u.length;n++)try{var v=!1===u[n].call(t,e,l,a);if(v)return}catch(eu){Ze(eu,t,"errorCaptured hook")}}}Ze(e,l,a)}finally{fe()}}function Xe(e,l,a,t,u){var n;try{n=a?e.apply(l,a):e.call(l),n&&!n._isVue&&f(n)&&!n._handled&&(n.catch(function(e){return Ke(e,t,u+" (Promise/async)")}),n._handled=!0)}catch(eu){Ke(eu,t,u)}return n}function Ze(e,l,a){if(B.errorHandler)try{return B.errorHandler.call(null,e,l,a)}catch(eu){eu!==e&&Qe(eu,null,"config.errorHandler")}Qe(e,l,a)}function Qe(e,l,a){if(!W&&!K||"undefined"===typeof console)throw e;console.error(e)}var el,ll=[],al=!1;function tl(){al=!1;var e=ll.slice(0);ll.length=0;for(var l=0;l<e.length;l++)e[l]()}if("undefined"!==typeof Promise&&ve(Promise)){var ul=Promise.resolve();el=function(){ul.then(tl),le&&setTimeout(C)}}else if(Q||"undefined"===typeof MutationObserver||!ve(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())el="undefined"!==typeof setImmediate&&ve(setImmediate)?function(){setImmediate(tl)}:function(){setTimeout(tl,0)};else{var nl=1,vl=new MutationObserver(tl),rl=document.createTextNode(String(nl));vl.observe(rl,{characterData:!0}),el=function(){nl=(nl+1)%2,rl.data=String(nl)}}function bl(e,l){var a;if(ll.push(function(){if(e)try{e.call(l)}catch(eu){Ke(eu,l,"nextTick")}else a&&a(l)}),al||(al=!0,el()),!e&&"undefined"!==typeof Promise)return new Promise(function(e){a=e})}var ol=new re;function il(e){sl(e,ol),ol.clear()}function sl(e,l){var a,t,u=Array.isArray(e);if(!(!u&&!b(e)||Object.isFrozen(e)||e instanceof pe)){if(e.__ob__){var n=e.__ob__.dep.id;if(l.has(n))return;l.add(n)}if(u){a=e.length;while(a--)sl(e[a],l)}else{t=Object.keys(e),a=t.length;while(a--)sl(e[t[a]],l)}}}var cl=w(function(e){var l="&"===e.charAt(0);e=l?e.slice(1):e;var a="~"===e.charAt(0);e=a?e.slice(1):e;var t="!"===e.charAt(0);return e=t?e.slice(1):e,{name:e,once:a,capture:t,passive:l}});function fl(e,l){function a(){var e=arguments,t=a.fns;if(!Array.isArray(t))return Xe(t,null,arguments,l,"v-on handler");for(var u=t.slice(),n=0;n<u.length;n++)Xe(u[n],null,e,l,"v-on handler")}return a.fns=e,a}function pl(e,l,a,u,v,r){var b,o,i,s;for(b in e)o=e[b],i=l[b],s=cl(b),t(o)||(t(i)?(t(o.fns)&&(o=e[b]=fl(o,r)),n(s.once)&&(o=e[b]=v(s.name,o,s.capture)),a(s.name,o,s.capture,s.passive,s.params)):o!==i&&(i.fns=o,e[b]=i));for(b in l)t(e[b])&&(s=cl(b),u(s.name,l[b],s.capture))}function hl(e,l,a){var n=l.options.props;if(!t(n)){var v={},r=e.attrs,b=e.props;if(u(r)||u(b))for(var o in n){var i=k(o);dl(v,b,o,i,!0)||dl(v,r,o,i,!1)}return v}}function dl(e,l,a,t,n){if(u(l)){if(m(l,a))return e[a]=l[a],n||delete l[a],!0;if(m(l,t))return e[a]=l[t],n||delete l[t],!0}return!1}function yl(e){for(var l=0;l<e.length;l++)if(Array.isArray(e[l]))return Array.prototype.concat.apply([],e);return e}function gl(e){return r(e)?[ye(e)]:Array.isArray(e)?ml(e):void 0}function _l(e){return u(e)&&u(e.text)&&v(e.isComment)}function ml(e,l){var a,v,b,o,i=[];for(a=0;a<e.length;a++)v=e[a],t(v)||"boolean"===typeof v||(b=i.length-1,o=i[b],Array.isArray(v)?v.length>0&&(v=ml(v,(l||"")+"_"+a),_l(v[0])&&_l(o)&&(i[b]=ye(o.text+v[0].text),v.shift()),i.push.apply(i,v)):r(v)?_l(o)?i[b]=ye(o.text+v):""!==v&&i.push(ye(v)):_l(v)&&_l(o)?i[b]=ye(o.text+v.text):(n(e._isVList)&&u(v.tag)&&t(v.key)&&u(l)&&(v.key="__vlist"+l+"_"+a+"__"),i.push(v)));return i}function wl(e){var l=e.$options.provide;l&&(e._provided="function"===typeof l?l.call(e):l)}function $l(e){var l=Ol(e.$options.inject,e);l&&(Se(!1),Object.keys(l).forEach(function(a){De(e,a,l[a])}),Se(!0))}function Ol(e,l){if(e){for(var a=Object.create(null),t=be?Reflect.ownKeys(e):Object.keys(e),u=0;u<t.length;u++){var n=t[u];if("__ob__"!==n){var v=e[n].from,r=l;while(r){if(r._provided&&m(r._provided,v)){a[n]=r._provided[v];break}r=r.$parent}if(!r)if("default"in e[n]){var b=e[n].default;a[n]="function"===typeof b?b.call(l):b}else 0}}return a}}function Sl(e,l){if(!e||!e.length)return{};for(var a={},t=0,u=e.length;t<u;t++){var n=e[t],v=n.data;if(v&&v.attrs&&v.attrs.slot&&delete v.attrs.slot,n.context!==l&&n.fnContext!==l||!v||null==v.slot)n.asyncMeta&&n.asyncMeta.data&&"page"===n.asyncMeta.data.slot?(a["page"]||(a["page"]=[])).push(n):(a.default||(a.default=[])).push(n);else{var r=v.slot,b=a[r]||(a[r]=[]);"template"===n.tag?b.push.apply(b,n.children||[]):b.push(n)}}for(var o in a)a[o].every(xl)&&delete a[o];return a}function xl(e){return e.isComment&&!e.asyncFactory||" "===e.text}function kl(e,l,t){var u,n=Object.keys(l).length>0,v=e?!!e.$stable:!n,r=e&&e.$key;if(e){if(e._normalized)return e._normalized;if(v&&t&&t!==a&&r===t.$key&&!n&&!t.$hasNormal)return t;for(var b in u={},e)e[b]&&"$"!==b[0]&&(u[b]=Al(l,b,e[b]))}else u={};for(var o in l)o in u||(u[o]=jl(l,o));return e&&Object.isExtensible(e)&&(e._normalized=u),H(u,"$stable",v),H(u,"$key",r),H(u,"$hasNormal",n),u}function Al(e,l,a){var t=function(){var e=arguments.length?a.apply(null,arguments):a({});return e=e&&"object"===typeof e&&!Array.isArray(e)?[e]:gl(e),e&&(0===e.length||1===e.length&&e[0].isComment)?void 0:e};return a.proxy&&Object.defineProperty(e,l,{get:t,enumerable:!0,configurable:!0}),t}function jl(e,l){return function(){return e[l]}}function Dl(e,l){var a,t,n,v,r;if(Array.isArray(e)||"string"===typeof e)for(a=new Array(e.length),t=0,n=e.length;t<n;t++)a[t]=l(e[t],t);else if("number"===typeof e)for(a=new Array(e),t=0;t<e;t++)a[t]=l(t+1,t);else if(b(e))if(be&&e[Symbol.iterator]){a=[];var o=e[Symbol.iterator](),i=o.next();while(!i.done)a.push(l(i.value,a.length)),i=o.next()}else for(v=Object.keys(e),a=new Array(v.length),t=0,n=v.length;t<n;t++)r=v[t],a[t]=l(e[r],r,t);return u(a)||(a=[]),a._isVList=!0,a}function El(e,l,a,t){var u,n=this.$scopedSlots[e];n?(a=a||{},t&&(a=P(P({},t),a)),u=n(a)||l):u=this.$slots[e]||l;var v=a&&a.slot;return v?this.$createElement("template",{slot:v},u):u}function Pl(e){return He(this.$options,"filters",e,!0)||M}function Tl(e,l){return Array.isArray(e)?-1===e.indexOf(l):e!==l}function Cl(e,l,a,t,u){var n=B.keyCodes[l]||a;return u&&t&&!B.keyCodes[l]?Tl(u,t):n?Tl(n,e):t?k(t)!==l:void 0}function Nl(e,l,a,t,u){if(a)if(b(a)){var n;Array.isArray(a)&&(a=T(a));var v=function(v){if("class"===v||"style"===v||y(v))n=e;else{var r=e.attrs&&e.attrs.type;n=t||B.mustUseProp(l,r,v)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var b=O(v),o=k(v);if(!(b in n)&&!(o in n)&&(n[v]=a[v],u)){var i=e.on||(e.on={});i["update:"+v]=function(e){a[v]=e}}};for(var r in a)v(r)}else;return e}function Ml(e,l){var a=this._staticTrees||(this._staticTrees=[]),t=a[e];return t&&!l?t:(t=a[e]=this.$options.staticRenderFns[e].call(this._renderProxy,null,this),Rl(t,"__static__"+e,!1),t)}function Il(e,l,a){return Rl(e,"__once__"+l+(a?"_"+a:""),!0),e}function Rl(e,l,a){if(Array.isArray(e))for(var t=0;t<e.length;t++)e[t]&&"string"!==typeof e[t]&&Ll(e[t],l+"_"+t,a);else Ll(e,l,a)}function Ll(e,l,a){e.isStatic=!0,e.key=l,e.isOnce=a}function Fl(e,l){if(l)if(i(l)){var a=e.on=e.on?P({},e.on):{};for(var t in l){var u=a[t],n=l[t];a[t]=u?[].concat(u,n):n}}else;return e}function Vl(e,l,a,t){l=l||{$stable:!a};for(var u=0;u<e.length;u++){var n=e[u];Array.isArray(n)?Vl(n,l,a):n&&(n.proxy&&(n.fn.proxy=!0),l[n.key]=n.fn)}return t&&(l.$key=t),l}function Bl(e,l){for(var a=0;a<l.length;a+=2){var t=l[a];"string"===typeof t&&t&&(e[l[a]]=l[a+1])}return e}function Ul(e,l){return"string"===typeof e?l+e:e}function ql(e){e._o=Il,e._n=h,e._s=p,e._l=Dl,e._t=El,e._q=I,e._i=R,e._m=Ml,e._f=Pl,e._k=Cl,e._b=Nl,e._v=ye,e._e=de,e._u=Vl,e._g=Fl,e._d=Bl,e._p=Ul}function Hl(e,l,t,u,v){var r,b=this,o=v.options;m(u,"_uid")?(r=Object.create(u),r._original=u):(r=u,u=u._original);var i=n(o._compiled),s=!i;this.data=e,this.props=l,this.children=t,this.parent=u,this.listeners=e.on||a,this.injections=Ol(o.inject,u),this.slots=function(){return b.$slots||kl(e.scopedSlots,b.$slots=Sl(t,u)),b.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return kl(e.scopedSlots,this.slots())}}),i&&(this.$options=o,this.$slots=this.slots(),this.$scopedSlots=kl(e.scopedSlots,this.$slots)),o._scopeId?this._c=function(e,l,a,t){var n=ta(r,e,l,a,t,s);return n&&!Array.isArray(n)&&(n.fnScopeId=o._scopeId,n.fnContext=u),n}:this._c=function(e,l,a,t){return ta(r,e,l,a,t,s)}}function Gl(e,l,t,n,v){var r=e.options,b={},o=r.props;if(u(o))for(var i in o)b[i]=Ge(i,o,l||a);else u(t.attrs)&&Jl(b,t.attrs),u(t.props)&&Jl(b,t.props);var s=new Hl(t,b,v,n,e),c=r.render.call(null,s._c,s);if(c instanceof pe)return zl(c,t,s.parent,r,s);if(Array.isArray(c)){for(var f=gl(c)||[],p=new Array(f.length),h=0;h<f.length;h++)p[h]=zl(f[h],t,s.parent,r,s);return p}}function zl(e,l,a,t,u){var n=ge(e);return n.fnContext=a,n.fnOptions=t,l.slot&&((n.data||(n.data={})).slot=l.slot),n}function Jl(e,l){for(var a in l)e[O(a)]=l[a]}ql(Hl.prototype);var Yl={init:function(e,l){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var a=e;Yl.prepatch(a,a)}else{var t=e.componentInstance=Xl(e,$a);t.$mount(l?e.elm:void 0,l)}},prepatch:function(e,l){var a=l.componentOptions,t=l.componentInstance=e.componentInstance;ka(t,a.propsData,a.listeners,l,a.children)},insert:function(e){var l=e.context,a=e.componentInstance;a._isMounted||(a._isMounted=!0,Ea(a,"mounted")),e.data.keepAlive&&(l._isMounted?Ua(a):ja(a,!0))},destroy:function(e){var l=e.componentInstance;l._isDestroyed||(e.data.keepAlive?Da(l,!0):l.$destroy())}},Wl=Object.keys(Yl);function Kl(e,l,a,v,r){if(!t(e)){var o=a.$options._base;if(b(e)&&(e=o.extend(e)),"function"===typeof e){var i;if(t(e.cid)&&(i=e,e=fa(i,o),void 0===e))return ca(i,l,a,v,r);l=l||{},st(e),u(l.model)&&ea(e.options,l);var s=hl(l,e,r);if(n(e.options.functional))return Gl(e,s,l,a,v);var c=l.on;if(l.on=l.nativeOn,n(e.options.abstract)){var f=l.slot;l={},f&&(l.slot=f)}Zl(l);var p=e.options.name||r,h=new pe("vue-component-"+e.cid+(p?"-"+p:""),l,void 0,void 0,void 0,a,{Ctor:e,propsData:s,listeners:c,tag:r,children:v},i);return h}}}function Xl(e,l){var a={_isComponent:!0,_parentVnode:e,parent:l},t=e.data.inlineTemplate;return u(t)&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),new e.componentOptions.Ctor(a)}function Zl(e){for(var l=e.hook||(e.hook={}),a=0;a<Wl.length;a++){var t=Wl[a],u=l[t],n=Yl[t];u===n||u&&u._merged||(l[t]=u?Ql(n,u):n)}}function Ql(e,l){var a=function(a,t){e(a,t),l(a,t)};return a._merged=!0,a}function ea(e,l){var a=e.model&&e.model.prop||"value",t=e.model&&e.model.event||"input";(l.attrs||(l.attrs={}))[a]=l.model.value;var n=l.on||(l.on={}),v=n[t],r=l.model.callback;u(v)?(Array.isArray(v)?-1===v.indexOf(r):v!==r)&&(n[t]=[r].concat(v)):n[t]=r}var la=1,aa=2;function ta(e,l,a,t,u,v){return(Array.isArray(a)||r(a))&&(u=t,t=a,a=void 0),n(v)&&(u=aa),ua(e,l,a,t,u)}function ua(e,l,a,t,n){if(u(a)&&u(a.__ob__))return de();if(u(a)&&u(a.is)&&(l=a.is),!l)return de();var v,r,b;(Array.isArray(t)&&"function"===typeof t[0]&&(a=a||{},a.scopedSlots={default:t[0]},t.length=0),n===aa?t=gl(t):n===la&&(t=yl(t)),"string"===typeof l)?(r=e.$vnode&&e.$vnode.ns||B.getTagNamespace(l),v=B.isReservedTag(l)?new pe(B.parsePlatformTagName(l),a,t,void 0,void 0,e):a&&a.pre||!u(b=He(e.$options,"components",l))?new pe(l,a,t,void 0,void 0,e):Kl(b,a,e,t,l)):v=Kl(l,a,e,t);return Array.isArray(v)?v:u(v)?(u(r)&&na(v,r),u(a)&&va(a),v):de()}function na(e,l,a){if(e.ns=l,"foreignObject"===e.tag&&(l=void 0,a=!0),u(e.children))for(var v=0,r=e.children.length;v<r;v++){var b=e.children[v];u(b.tag)&&(t(b.ns)||n(a)&&"svg"!==b.tag)&&na(b,l,a)}}function va(e){b(e.style)&&il(e.style),b(e.class)&&il(e.class)}function ra(e){e._vnode=null,e._staticTrees=null;var l=e.$options,t=e.$vnode=l._parentVnode,u=t&&t.context;e.$slots=Sl(l._renderChildren,u),e.$scopedSlots=a,e._c=function(l,a,t,u){return ta(e,l,a,t,u,!1)},e.$createElement=function(l,a,t,u){return ta(e,l,a,t,u,!0)};var n=t&&t.data;De(e,"$attrs",n&&n.attrs||a,null,!0),De(e,"$listeners",l._parentListeners||a,null,!0)}var ba,oa=null;function ia(e){ql(e.prototype),e.prototype.$nextTick=function(e){return bl(e,this)},e.prototype._render=function(){var e,l=this,a=l.$options,t=a.render,u=a._parentVnode;u&&(l.$scopedSlots=kl(u.data.scopedSlots,l.$slots,l.$scopedSlots)),l.$vnode=u;try{oa=l,e=t.call(l._renderProxy,l.$createElement)}catch(eu){Ke(eu,l,"render"),e=l._vnode}finally{oa=null}return Array.isArray(e)&&1===e.length&&(e=e[0]),e instanceof pe||(e=de()),e.parent=u,e}}function sa(e,l){return(e.__esModule||be&&"Module"===e[Symbol.toStringTag])&&(e=e.default),b(e)?l.extend(e):e}function ca(e,l,a,t,u){var n=de();return n.asyncFactory=e,n.asyncMeta={data:l,context:a,children:t,tag:u},n}function fa(e,l){if(n(e.error)&&u(e.errorComp))return e.errorComp;if(u(e.resolved))return e.resolved;var a=oa;if(a&&u(e.owners)&&-1===e.owners.indexOf(a)&&e.owners.push(a),n(e.loading)&&u(e.loadingComp))return e.loadingComp;if(a&&!u(e.owners)){var v=e.owners=[a],r=!0,o=null,i=null;a.$on("hook:destroyed",function(){return g(v,a)});var s=function(e){for(var l=0,a=v.length;l<a;l++)v[l].$forceUpdate();e&&(v.length=0,null!==o&&(clearTimeout(o),o=null),null!==i&&(clearTimeout(i),i=null))},c=L(function(a){e.resolved=sa(a,l),r?v.length=0:s(!0)}),p=L(function(l){u(e.errorComp)&&(e.error=!0,s(!0))}),h=e(c,p);return b(h)&&(f(h)?t(e.resolved)&&h.then(c,p):f(h.component)&&(h.component.then(c,p),u(h.error)&&(e.errorComp=sa(h.error,l)),u(h.loading)&&(e.loadingComp=sa(h.loading,l),0===h.delay?e.loading=!0:o=setTimeout(function(){o=null,t(e.resolved)&&t(e.error)&&(e.loading=!0,s(!1))},h.delay||200)),u(h.timeout)&&(i=setTimeout(function(){i=null,t(e.resolved)&&p(null)},h.timeout)))),r=!1,e.loading?e.loadingComp:e.resolved}}function pa(e){return e.isComment&&e.asyncFactory}function ha(e){if(Array.isArray(e))for(var l=0;l<e.length;l++){var a=e[l];if(u(a)&&(u(a.componentOptions)||pa(a)))return a}}function da(e){e._events=Object.create(null),e._hasHookEvent=!1;var l=e.$options._parentListeners;l&&ma(e,l)}function ya(e,l){ba.$on(e,l)}function ga(e,l){ba.$off(e,l)}function _a(e,l){var a=ba;return function t(){var u=l.apply(null,arguments);null!==u&&a.$off(e,t)}}function ma(e,l,a){ba=e,pl(l,a||{},ya,ga,_a,e),ba=void 0}function wa(e){var l=/^hook:/;e.prototype.$on=function(e,a){var t=this;if(Array.isArray(e))for(var u=0,n=e.length;u<n;u++)t.$on(e[u],a);else(t._events[e]||(t._events[e]=[])).push(a),l.test(e)&&(t._hasHookEvent=!0);return t},e.prototype.$once=function(e,l){var a=this;function t(){a.$off(e,t),l.apply(a,arguments)}return t.fn=l,a.$on(e,t),a},e.prototype.$off=function(e,l){var a=this;if(!arguments.length)return a._events=Object.create(null),a;if(Array.isArray(e)){for(var t=0,u=e.length;t<u;t++)a.$off(e[t],l);return a}var n,v=a._events[e];if(!v)return a;if(!l)return a._events[e]=null,a;var r=v.length;while(r--)if(n=v[r],n===l||n.fn===l){v.splice(r,1);break}return a},e.prototype.$emit=function(e){var l=this,a=l._events[e];if(a){a=a.length>1?E(a):a;for(var t=E(arguments,1),u='event handler for "'+e+'"',n=0,v=a.length;n<v;n++)Xe(a[n],l,t,l,u)}return l}}var $a=null;function Oa(e){var l=$a;return $a=e,function(){$a=l}}function Sa(e){var l=e.$options,a=l.parent;if(a&&!l.abstract){while(a.$options.abstract&&a.$parent)a=a.$parent;a.$children.push(e)}e.$parent=a,e.$root=a?a.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function xa(e){e.prototype._update=function(e,l){var a=this,t=a.$el,u=a._vnode,n=Oa(a);a._vnode=e,a.$el=u?a.__patch__(u,e):a.__patch__(a.$el,e,l,!1),n(),t&&(t.__vue__=null),a.$el&&(a.$el.__vue__=a),a.$vnode&&a.$parent&&a.$vnode===a.$parent._vnode&&(a.$parent.$el=a.$el)},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){Ea(e,"beforeDestroy"),e._isBeingDestroyed=!0;var l=e.$parent;!l||l._isBeingDestroyed||e.$options.abstract||g(l.$children,e),e._watcher&&e._watcher.teardown();var a=e._watchers.length;while(a--)e._watchers[a].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),Ea(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}function ka(e,l,t,u,n){var v=u.data.scopedSlots,r=e.$scopedSlots,b=!!(v&&!v.$stable||r!==a&&!r.$stable||v&&e.$scopedSlots.$key!==v.$key),o=!!(n||e.$options._renderChildren||b);if(e.$options._parentVnode=u,e.$vnode=u,e._vnode&&(e._vnode.parent=u),e.$options._renderChildren=n,e.$attrs=u.data.attrs||a,e.$listeners=t||a,l&&e.$options.props){Se(!1);for(var i=e._props,s=e.$options._propKeys||[],c=0;c<s.length;c++){var f=s[c],p=e.$options.props;i[f]=Ge(f,p,l,e)}Se(!0),e.$options.propsData=l}t=t||a;var h=e.$options._parentListeners;e.$options._parentListeners=t,ma(e,t,h),o&&(e.$slots=Sl(n,u.context),e.$forceUpdate())}function Aa(e){while(e&&(e=e.$parent))if(e._inactive)return!0;return!1}function ja(e,l){if(l){if(e._directInactive=!1,Aa(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var a=0;a<e.$children.length;a++)ja(e.$children[a]);Ea(e,"activated")}}function Da(e,l){if((!l||(e._directInactive=!0,!Aa(e)))&&!e._inactive){e._inactive=!0;for(var a=0;a<e.$children.length;a++)Da(e.$children[a]);Ea(e,"deactivated")}}function Ea(e,l){ce();var a=e.$options[l],t=l+" hook";if(a)for(var u=0,n=a.length;u<n;u++)Xe(a[u],e,null,e,t);e._hasHookEvent&&e.$emit("hook:"+l),fe()}var Pa=[],Ta=[],Ca={},Na=!1,Ma=!1,Ia=0;function Ra(){Ia=Pa.length=Ta.length=0,Ca={},Na=Ma=!1}var La=Date.now;if(W&&!Q){var Fa=window.performance;Fa&&"function"===typeof Fa.now&&La()>document.createEvent("Event").timeStamp&&(La=function(){return Fa.now()})}function Va(){var e,l;for(La(),Ma=!0,Pa.sort(function(e,l){return e.id-l.id}),Ia=0;Ia<Pa.length;Ia++)e=Pa[Ia],e.before&&e.before(),l=e.id,Ca[l]=null,e.run();var a=Ta.slice(),t=Pa.slice();Ra(),qa(a),Ba(t),ne&&B.devtools&&ne.emit("flush")}function Ba(e){var l=e.length;while(l--){var a=e[l],t=a.vm;t._watcher===a&&t._isMounted&&!t._isDestroyed&&Ea(t,"updated")}}function Ua(e){e._inactive=!1,Ta.push(e)}function qa(e){for(var l=0;l<e.length;l++)e[l]._inactive=!0,ja(e[l],!0)}function Ha(e){var l=e.id;if(null==Ca[l]){if(Ca[l]=!0,Ma){var a=Pa.length-1;while(a>Ia&&Pa[a].id>e.id)a--;Pa.splice(a+1,0,e)}else Pa.push(e);Na||(Na=!0,bl(Va))}}var Ga=0,za=function(e,l,a,t,u){this.vm=e,u&&(e._watcher=this),e._watchers.push(this),t?(this.deep=!!t.deep,this.user=!!t.user,this.lazy=!!t.lazy,this.sync=!!t.sync,this.before=t.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=a,this.id=++Ga,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new re,this.newDepIds=new re,this.expression="","function"===typeof l?this.getter=l:(this.getter=z(l),this.getter||(this.getter=C)),this.value=this.lazy?void 0:this.get()};za.prototype.get=function(){var e;ce(this);var l=this.vm;try{e=this.getter.call(l,l)}catch(eu){if(!this.user)throw eu;Ke(eu,l,'getter for watcher "'+this.expression+'"')}finally{this.deep&&il(e),fe(),this.cleanupDeps()}return e},za.prototype.addDep=function(e){var l=e.id;this.newDepIds.has(l)||(this.newDepIds.add(l),this.newDeps.push(e),this.depIds.has(l)||e.addSub(this))},za.prototype.cleanupDeps=function(){var e=this.deps.length;while(e--){var l=this.deps[e];this.newDepIds.has(l.id)||l.removeSub(this)}var a=this.depIds;this.depIds=this.newDepIds,this.newDepIds=a,this.newDepIds.clear(),a=this.deps,this.deps=this.newDeps,this.newDeps=a,this.newDeps.length=0},za.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Ha(this)},za.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||b(e)||this.deep){var l=this.value;if(this.value=e,this.user)try{this.cb.call(this.vm,e,l)}catch(eu){Ke(eu,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,e,l)}}},za.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},za.prototype.depend=function(){var e=this.deps.length;while(e--)this.deps[e].depend()},za.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||g(this.vm._watchers,this);var e=this.deps.length;while(e--)this.deps[e].removeSub(this);this.active=!1}};var Ja={enumerable:!0,configurable:!0,get:C,set:C};function Ya(e,l,a){Ja.get=function(){return this[l][a]},Ja.set=function(e){this[l][a]=e},Object.defineProperty(e,a,Ja)}function Wa(e){e._watchers=[];var l=e.$options;l.props&&Ka(e,l.props),l.methods&&ut(e,l.methods),l.data?Xa(e):je(e._data={},!0),l.computed&&et(e,l.computed),l.watch&&l.watch!==ae&&nt(e,l.watch)}function Ka(e,l){var a=e.$options.propsData||{},t=e._props={},u=e.$options._propKeys=[],n=!e.$parent;n||Se(!1);var v=function(n){u.push(n);var v=Ge(n,l,a,e);De(t,n,v),n in e||Ya(e,"_props",n)};for(var r in l)v(r);Se(!0)}function Xa(e){var l=e.$options.data;l=e._data="function"===typeof l?Za(l,e):l||{},i(l)||(l={});var a=Object.keys(l),t=e.$options.props,u=(e.$options.methods,a.length);while(u--){var n=a[u];0,t&&m(t,n)||q(n)||Ya(e,"_data",n)}je(l,!0)}function Za(e,l){ce();try{return e.call(l,l)}catch(eu){return Ke(eu,l,"data()"),{}}finally{fe()}}var Qa={lazy:!0};function et(e,l){var a=e._computedWatchers=Object.create(null),t=ue();for(var u in l){var n=l[u],v="function"===typeof n?n:n.get;0,t||(a[u]=new za(e,v||C,C,Qa)),u in e||lt(e,u,n)}}function lt(e,l,a){var t=!ue();"function"===typeof a?(Ja.get=t?at(l):tt(a),Ja.set=C):(Ja.get=a.get?t&&!1!==a.cache?at(l):tt(a.get):C,Ja.set=a.set||C),Object.defineProperty(e,l,Ja)}function at(e){return function(){var l=this._computedWatchers&&this._computedWatchers[e];if(l)return l.dirty&&l.evaluate(),se.SharedObject.target&&l.depend(),l.value}}function tt(e){return function(){return e.call(this,this)}}function ut(e,l){e.$options.props;for(var a in l)e[a]="function"!==typeof l[a]?C:D(l[a],e)}function nt(e,l){for(var a in l){var t=l[a];if(Array.isArray(t))for(var u=0;u<t.length;u++)vt(e,a,t[u]);else vt(e,a,t)}}function vt(e,l,a,t){return i(a)&&(t=a,a=a.handler),"string"===typeof a&&(a=e[a]),e.$watch(l,a,t)}function rt(e){var l={get:function(){return this._data}},a={get:function(){return this._props}};Object.defineProperty(e.prototype,"$data",l),Object.defineProperty(e.prototype,"$props",a),e.prototype.$set=Ee,e.prototype.$delete=Pe,e.prototype.$watch=function(e,l,a){var t=this;if(i(l))return vt(t,e,l,a);a=a||{},a.user=!0;var u=new za(t,e,l,a);if(a.immediate)try{l.call(t,u.value)}catch(n){Ke(n,t,'callback for immediate watcher "'+u.expression+'"')}return function(){u.teardown()}}}var bt=0;function ot(e){e.prototype._init=function(e){var l=this;l._uid=bt++,l._isVue=!0,e&&e._isComponent?it(l,e):l.$options=qe(st(l.constructor),e||{},l),l._renderProxy=l,l._self=l,Sa(l),da(l),ra(l),Ea(l,"beforeCreate"),"mp-toutiao"!==l.mpHost&&$l(l),Wa(l),"mp-toutiao"!==l.mpHost&&wl(l),"mp-toutiao"!==l.mpHost&&Ea(l,"created"),l.$options.el&&l.$mount(l.$options.el)}}function it(e,l){var a=e.$options=Object.create(e.constructor.options),t=l._parentVnode;a.parent=l.parent,a._parentVnode=t;var u=t.componentOptions;a.propsData=u.propsData,a._parentListeners=u.listeners,a._renderChildren=u.children,a._componentTag=u.tag,l.render&&(a.render=l.render,a.staticRenderFns=l.staticRenderFns)}function st(e){var l=e.options;if(e.super){var a=st(e.super),t=e.superOptions;if(a!==t){e.superOptions=a;var u=ct(e);u&&P(e.extendOptions,u),l=e.options=qe(a,e.extendOptions),l.name&&(l.components[l.name]=e)}}return l}function ct(e){var l,a=e.options,t=e.sealedOptions;for(var u in a)a[u]!==t[u]&&(l||(l={}),l[u]=a[u]);return l}function ft(e){this._init(e)}function pt(e){e.use=function(e){var l=this._installedPlugins||(this._installedPlugins=[]);if(l.indexOf(e)>-1)return this;var a=E(arguments,1);return a.unshift(this),"function"===typeof e.install?e.install.apply(e,a):"function"===typeof e&&e.apply(null,a),l.push(e),this}}function ht(e){e.mixin=function(e){return this.options=qe(this.options,e),this}}function dt(e){e.cid=0;var l=1;e.extend=function(e){e=e||{};var a=this,t=a.cid,u=e._Ctor||(e._Ctor={});if(u[t])return u[t];var n=e.name||a.options.name;var v=function(e){this._init(e)};return v.prototype=Object.create(a.prototype),v.prototype.constructor=v,v.cid=l++,v.options=qe(a.options,e),v["super"]=a,v.options.props&&yt(v),v.options.computed&&gt(v),v.extend=a.extend,v.mixin=a.mixin,v.use=a.use,F.forEach(function(e){v[e]=a[e]}),n&&(v.options.components[n]=v),v.superOptions=a.options,v.extendOptions=e,v.sealedOptions=P({},v.options),u[t]=v,v}}function yt(e){var l=e.options.props;for(var a in l)Ya(e.prototype,"_props",a)}function gt(e){var l=e.options.computed;for(var a in l)lt(e.prototype,a,l[a])}function _t(e){F.forEach(function(l){e[l]=function(e,a){return a?("component"===l&&i(a)&&(a.name=a.name||e,a=this.options._base.extend(a)),"directive"===l&&"function"===typeof a&&(a={bind:a,update:a}),this.options[l+"s"][e]=a,a):this.options[l+"s"][e]}})}function mt(e){return e&&(e.Ctor.options.name||e.tag)}function wt(e,l){return Array.isArray(e)?e.indexOf(l)>-1:"string"===typeof e?e.split(",").indexOf(l)>-1:!!s(e)&&e.test(l)}function $t(e,l){var a=e.cache,t=e.keys,u=e._vnode;for(var n in a){var v=a[n];if(v){var r=mt(v.componentOptions);r&&!l(r)&&Ot(a,n,t,u)}}}function Ot(e,l,a,t){var u=e[l];!u||t&&u.tag===t.tag||u.componentInstance.$destroy(),e[l]=null,g(a,l)}ot(ft),rt(ft),wa(ft),xa(ft),ia(ft);var St=[String,RegExp,Array],xt={name:"keep-alive",abstract:!0,props:{include:St,exclude:St,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)Ot(this.cache,e,this.keys)},mounted:function(){var e=this;this.$watch("include",function(l){$t(e,function(e){return wt(l,e)})}),this.$watch("exclude",function(l){$t(e,function(e){return!wt(l,e)})})},render:function(){var e=this.$slots.default,l=ha(e),a=l&&l.componentOptions;if(a){var t=mt(a),u=this,n=u.include,v=u.exclude;if(n&&(!t||!wt(n,t))||v&&t&&wt(v,t))return l;var r=this,b=r.cache,o=r.keys,i=null==l.key?a.Ctor.cid+(a.tag?"::"+a.tag:""):l.key;b[i]?(l.componentInstance=b[i].componentInstance,g(o,i),o.push(i)):(b[i]=l,o.push(i),this.max&&o.length>parseInt(this.max)&&Ot(b,o[0],o,this._vnode)),l.data.keepAlive=!0}return l||e&&e[0]}},kt={KeepAlive:xt};function At(e){var l={get:function(){return B}};Object.defineProperty(e,"config",l),e.util={warn:oe,extend:P,mergeOptions:qe,defineReactive:De},e.set=Ee,e.delete=Pe,e.nextTick=bl,e.observable=function(e){return je(e),e},e.options=Object.create(null),F.forEach(function(l){e.options[l+"s"]=Object.create(null)}),e.options._base=e,P(e.options.components,kt),pt(e),ht(e),dt(e),_t(e)}At(ft),Object.defineProperty(ft.prototype,"$isServer",{get:ue}),Object.defineProperty(ft.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(ft,"FunctionalRenderContext",{value:Hl}),ft.version="2.6.10";var jt="[object Array]",Dt="[object Object]";function Et(e,l){var a={};return Pt(e,l),Tt(e,l,"",a),a}function Pt(e,l){if(e!==l){var a=Nt(e),t=Nt(l);if(a==Dt&&t==Dt){if(Object.keys(e).length>=Object.keys(l).length)for(var u in l){var n=e[u];void 0===n?e[u]=null:Pt(n,l[u])}}else a==jt&&t==jt&&e.length>=l.length&&l.forEach(function(l,a){Pt(e[a],l)})}}function Tt(e,l,a,t){if(e!==l){var u=Nt(e),n=Nt(l);if(u==Dt)if(n!=Dt||Object.keys(e).length<Object.keys(l).length)Ct(t,a,e);else{var v=function(u){var n=e[u],v=l[u],r=Nt(n),b=Nt(v);if(r!=jt&&r!=Dt)n!=l[u]&&Ct(t,(""==a?"":a+".")+u,n);else if(r==jt)b!=jt?Ct(t,(""==a?"":a+".")+u,n):n.length<v.length?Ct(t,(""==a?"":a+".")+u,n):n.forEach(function(e,l){Tt(e,v[l],(""==a?"":a+".")+u+"["+l+"]",t)});else if(r==Dt)if(b!=Dt||Object.keys(n).length<Object.keys(v).length)Ct(t,(""==a?"":a+".")+u,n);else for(var o in n)Tt(n[o],v[o],(""==a?"":a+".")+u+"."+o,t)};for(var r in e)v(r)}else u==jt?n!=jt?Ct(t,a,e):e.length<l.length?Ct(t,a,e):e.forEach(function(e,u){Tt(e,l[u],a+"["+u+"]",t)}):Ct(t,a,e)}}function Ct(e,l,a){e[l]=a}function Nt(e){return Object.prototype.toString.call(e)}function Mt(e){if(e.__next_tick_callbacks&&e.__next_tick_callbacks.length){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var l=e.$scope;console.log("["+ +new Date+"]["+(l.is||l.route)+"]["+e._uid+"]:flushCallbacks["+e.__next_tick_callbacks.length+"]")}var a=e.__next_tick_callbacks.slice(0);e.__next_tick_callbacks.length=0;for(var t=0;t<a.length;t++)a[t]()}}function It(e){return Pa.find(function(l){return e._watcher===l})}function Rt(e,l){if(!e.__next_tick_pending&&!It(e)){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var a=e.$scope;console.log("["+ +new Date+"]["+(a.is||a.route)+"]["+e._uid+"]:nextVueTick")}return bl(l,e)}if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var t=e.$scope;console.log("["+ +new Date+"]["+(t.is||t.route)+"]["+e._uid+"]:nextMPTick")}var u;if(e.__next_tick_callbacks||(e.__next_tick_callbacks=[]),e.__next_tick_callbacks.push(function(){if(l)try{l.call(e)}catch(eu){Ke(eu,e,"nextTick")}else u&&u(e)}),!l&&"undefined"!==typeof Promise)return new Promise(function(e){u=e})}function Lt(e){var l=Object.create(null),a=[].concat(Object.keys(e._data||{}),Object.keys(e._computedWatchers||{}));return a.reduce(function(l,a){return l[a]=e[a],l},l),Object.assign(l,e.$mp.data||{}),Array.isArray(e.$options.behaviors)&&-1!==e.$options.behaviors.indexOf("uni://form-field")&&(l["name"]=e.name,l["value"]=e.value),JSON.parse(JSON.stringify(l))}var Ft=function(e,l){var a=this;if(null!==l&&("page"===this.mpType||"component"===this.mpType)){var t=this.$scope,u=Object.create(null);try{u=Lt(this)}catch(r){console.error(r)}u.__webviewId__=t.data.__webviewId__;var n=Object.create(null);Object.keys(u).forEach(function(e){n[e]=t.data[e]});var v=Et(u,n);Object.keys(v).length?(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(t.is||t.route)+"]["+this._uid+"]差量更新",JSON.stringify(v)),this.__next_tick_pending=!0,t.setData(v,function(){a.__next_tick_pending=!1,Mt(a)})):Mt(this)}};function Vt(){}function Bt(e,l,a){if(!e.mpType)return e;"app"===e.mpType&&(e.$options.render=Vt),e.$options.render||(e.$options.render=Vt),"mp-toutiao"!==e.mpHost&&Ea(e,"beforeMount");var t=function(){e._update(e._render(),a)};return new za(e,t,C,{before:function(){e._isMounted&&!e._isDestroyed&&Ea(e,"beforeUpdate")}},!0),a=!1,e}function Ut(e,l){return u(e)||u(l)?qt(e,Ht(l)):""}function qt(e,l){return e?l?e+" "+l:e:l||""}function Ht(e){return Array.isArray(e)?Gt(e):b(e)?zt(e):"string"===typeof e?e:""}function Gt(e){for(var l,a="",t=0,n=e.length;t<n;t++)u(l=Ht(e[t]))&&""!==l&&(a&&(a+=" "),a+=l);return a}function zt(e){var l="";for(var a in e)e[a]&&(l&&(l+=" "),l+=a);return l}var Jt=w(function(e){var l={},a=/;(?![^(]*\))/g,t=/:(.+)/;return e.split(a).forEach(function(e){if(e){var a=e.split(t);a.length>1&&(l[a[0].trim()]=a[1].trim())}}),l});function Yt(e){return Array.isArray(e)?T(e):"string"===typeof e?Jt(e):e}var Wt=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Kt(e,l){var a=l.split("."),t=a[0];return 0===t.indexOf("__$n")&&(t=parseInt(t.replace("__$n",""))),1===a.length?e[t]:Kt(e[t],a.slice(1).join("."))}function Xt(e){e.config.errorHandler=function(e){console.error(e)};var l=e.prototype.$emit;e.prototype.$emit=function(e){return this.$scope&&e&&this.$scope["triggerEvent"](e,{__args__:E(arguments,1)}),l.apply(this,arguments)},e.prototype.$nextTick=function(e){return Rt(this,e)},Wt.forEach(function(l){e.prototype[l]=function(e){if(this.$scope)return this.$scope[l](e)}}),e.prototype.__init_provide=wl,e.prototype.__init_injections=$l,e.prototype.__call_hook=function(e,l){var a=this;ce();var t,u=a.$options[e],n=e+" hook";if(u)for(var v=0,r=u.length;v<r;v++)t=Xe(u[v],a,l?[l]:null,a,n);return a._hasHookEvent&&a.$emit("hook:"+e),fe(),t},e.prototype.__set_model=function(e,l,a,t){Array.isArray(t)&&(-1!==t.indexOf("trim")&&(a=a.trim()),-1!==t.indexOf("number")&&(a=this._n(a))),e||(e=this),e[l]=a},e.prototype.__set_sync=function(e,l,a){e||(e=this),e[l]=a},e.prototype.__get_orig=function(e){return i(e)&&e["$orig"]||e},e.prototype.__get_value=function(e,l){return Kt(l||this,e)},e.prototype.__get_class=function(e,l){return Ut(l,e)},e.prototype.__get_style=function(e,l){if(!e&&!l)return"";var a=Yt(e),t=l?P(l,a):a;return Object.keys(t).map(function(e){return k(e)+":"+t[e]}).join(";")},e.prototype.__map=function(e,l){var a,t,u,n,v;if(Array.isArray(e)){for(a=new Array(e.length),t=0,u=e.length;t<u;t++)a[t]=l(e[t],t);return a}if(b(e)){for(n=Object.keys(e),a=Object.create(null),t=0,u=n.length;t<u;t++)v=n[t],a[v]=l(e[v],v,t);return a}return[]}}var Zt=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function Qt(e){var l=e.extend;e.extend=function(e){e=e||{};var a=e.methods;return a&&Object.keys(a).forEach(function(l){-1!==Zt.indexOf(l)&&(e[l]=a[l],delete a[l])}),l.call(this,e)};var a=e.config.optionMergeStrategies,t=a.created;Zt.forEach(function(e){a[e]=t}),e.prototype.__lifecycle_hooks__=Zt}ft.prototype.__patch__=Ft,ft.prototype.$mount=function(e,l){return Bt(this,e,l)},Qt(ft),Xt(ft),l["default"]=ft}.call(this,a("c8ba"))},"6e42":function(e,l,a){"use strict";(function(e){Object.defineProperty(l,"__esModule",{value:!0}),l.createApp=pl,l.createComponent=Sl,l.createPage=Ol,l.default=void 0;var t=u(a("66fd"));function u(e){return e&&e.__esModule?e:{default:e}}function n(e,l){return b(e)||r(e,l)||v()}function v(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function r(e,l){var a=[],t=!0,u=!1,n=void 0;try{for(var v,r=e[Symbol.iterator]();!(t=(v=r.next()).done);t=!0)if(a.push(v.value),l&&a.length===l)break}catch(b){u=!0,n=b}finally{try{t||null==r["return"]||r["return"]()}finally{if(u)throw n}}return a}function b(e){if(Array.isArray(e))return e}function o(e,l,a){return l in e?Object.defineProperty(e,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[l]=a,e}function i(e){return f(e)||c(e)||s()}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function c(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function f(e){if(Array.isArray(e)){for(var l=0,a=new Array(e.length);l<e.length;l++)a[l]=e[l];return a}}var p=Object.prototype.toString,h=Object.prototype.hasOwnProperty;function d(e){return"function"===typeof e}function y(e){return"string"===typeof e}function g(e){return"[object Object]"===p.call(e)}function _(e,l){return h.call(e,l)}function m(){}function w(e){var l=Object.create(null);return function(a){var t=l[a];return t||(l[a]=e(a))}}var $=/-(\w)/g,O=w(function(e){return e.replace($,function(e,l){return l?l.toUpperCase():""})}),S=["invoke","success","fail","complete","returnValue"],x={},k={};function A(e,l){var a=l?e?e.concat(l):Array.isArray(l)?l:[l]:e;return a?j(a):a}function j(e){for(var l=[],a=0;a<e.length;a++)-1===l.indexOf(e[a])&&l.push(e[a]);return l}function D(e,l){var a=e.indexOf(l);-1!==a&&e.splice(a,1)}function E(e,l){Object.keys(l).forEach(function(a){-1!==S.indexOf(a)&&d(l[a])&&(e[a]=A(e[a],l[a]))})}function P(e,l){e&&l&&Object.keys(l).forEach(function(a){-1!==S.indexOf(a)&&d(l[a])&&D(e[a],l[a])})}function T(e,l){"string"===typeof e&&g(l)?E(k[e]||(k[e]={}),l):g(e)&&E(x,e)}function C(e,l){"string"===typeof e?g(l)?P(k[e],l):delete k[e]:g(e)&&P(x,e)}function N(e){return function(l){return e(l)||l}}function M(e){return!!e&&("object"===typeof e||"function"===typeof e)&&"function"===typeof e.then}function I(e,l){for(var a=!1,t=0;t<e.length;t++){var u=e[t];if(a)a=Promise.then(N(u));else{var n=u(l);if(M(n)&&(a=Promise.resolve(n)),!1===n)return{then:function(){}}}}return a||{then:function(e){return e(l)}}}function R(e){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(a){if(Array.isArray(e[a])){var t=l[a];l[a]=function(l){I(e[a],l).then(function(e){return d(t)&&t(e)||e})}}}),l}function L(e,l){var a=[];Array.isArray(x.returnValue)&&a.push.apply(a,i(x.returnValue));var t=k[e];return t&&Array.isArray(t.returnValue)&&a.push.apply(a,i(t.returnValue)),a.forEach(function(e){l=e(l)||l}),l}function F(e){var l=Object.create(null);Object.keys(x).forEach(function(e){"returnValue"!==e&&(l[e]=x[e].slice())});var a=k[e];return a&&Object.keys(a).forEach(function(e){"returnValue"!==e&&(l[e]=(l[e]||[]).concat(a[e]))}),l}function V(e,l,a){for(var t=arguments.length,u=new Array(t>3?t-3:0),n=3;n<t;n++)u[n-3]=arguments[n];var v=F(e);if(v&&Object.keys(v).length){if(Array.isArray(v.invoke)){var r=I(v.invoke,a);return r.then(function(e){return l.apply(void 0,[R(v,e)].concat(u))})}return l.apply(void 0,[R(v,a)].concat(u))}return l.apply(void 0,[a].concat(u))}var B={returnValue:function(e){return M(e)?e.then(function(e){return e[1]}).catch(function(e){return e[0]}):e}},U=/^\$|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,q=/^create|Manager$/,H=/^on/;function G(e){return q.test(e)}function z(e){return U.test(e)}function J(e){return H.test(e)}function Y(e){return e.then(function(e){return[null,e]}).catch(function(e){return[e]})}function W(e){return!(G(e)||z(e)||J(e))}function K(e,l){return W(e)?function(){for(var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length,u=new Array(t>1?t-1:0),n=1;n<t;n++)u[n-1]=arguments[n];return d(a.success)||d(a.fail)||d(a.complete)?L(e,V.apply(void 0,[e,l,a].concat(u))):L(e,Y(new Promise(function(t,n){V.apply(void 0,[e,l,Object.assign({},a,{success:t,fail:n})].concat(u)),Promise.prototype.finally||(Promise.prototype.finally=function(e){var l=this.constructor;return this.then(function(a){return l.resolve(e()).then(function(){return a})},function(a){return l.resolve(e()).then(function(){throw a})})})})))}:l}var X=1e-4,Z=750,Q=!1,ee=0,le=0;function ae(){var e=wx.getSystemInfoSync(),l=e.platform,a=e.pixelRatio,t=e.windowWidth;ee=t,le=a,Q="ios"===l}function te(e,l){if(0===ee&&ae(),e=Number(e),0===e)return 0;var a=e/Z*(l||ee);return a<0&&(a=-a),a=Math.floor(a+X),0===a?1!==le&&Q?.5:1:e<0?-a:a}var ue={promiseInterceptor:B},ne=Object.freeze({upx2px:te,interceptors:ue,addInterceptor:T,removeInterceptor:C}),ve={},re=[],be=[],oe=["success","fail","cancel","complete"];function ie(e,l,a){return function(t){return l(ce(e,t,a))}}function se(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},u=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(g(l)){var n=!0===u?l:{};for(var v in d(a)&&(a=a(l,n)||{}),l)if(_(a,v)){var r=a[v];d(r)&&(r=r(l[v],l,n)),r?y(r)?n[r]=l[v]:g(r)&&(n[r.name?r.name:v]=r.value):console.warn("app-plus ".concat(e,"暂不支持").concat(v))}else-1!==oe.indexOf(v)?n[v]=ie(e,l[v],t):u||(n[v]=l[v]);return n}return d(l)&&(l=ie(e,l,t)),l}function ce(e,l,a){var t=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return d(ve.returnValue)&&(l=ve.returnValue(e,l)),se(e,l,a,{},t)}function fe(e,l){if(_(ve,e)){var a=ve[e];return a?function(l,t){var u=a;d(a)&&(u=a(l)),l=se(e,l,u.args,u.returnValue);var n=[l];"undefined"!==typeof t&&n.push(t);var v=wx[u.name||e].apply(wx,n);return z(e)?ce(e,v,u.returnValue,G(e)):v}:function(){console.error("app-plus 暂不支持".concat(e))}}return l}var pe=Object.create(null),he=["subscribePush","unsubscribePush","onPush","offPush","share"];function de(e){return function(l){var a=l.fail,t=l.complete,u={errMsg:"".concat(e,":fail:暂不支持 ").concat(e," 方法")};d(a)&&a(u),d(t)&&t(u)}}he.forEach(function(e){pe[e]=de(e)});var ye=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return e||(e=new t.default),e};var e}();function ge(e,l,a){return e[l].apply(e,a)}function _e(){return ge(ye(),"$on",Array.prototype.slice.call(arguments))}function me(){return ge(ye(),"$off",Array.prototype.slice.call(arguments))}function we(){return ge(ye(),"$once",Array.prototype.slice.call(arguments))}function $e(){return ge(ye(),"$emit",Array.prototype.slice.call(arguments))}var Oe=Object.freeze({$on:_e,$off:me,$once:we,$emit:$e});function Se(e){e.$processed=!0,e.postMessage=function(l){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:l},e.id)};var l=[];if(e.onMessage=function(e){l.push(e)},e.$consumeMessage=function(e){l.forEach(function(l){return l(e)})},e.__uniapp_mask_id){var a=e.__uniapp_mask,t=plus.webview.getWebviewById(e.__uniapp_mask_id);t=t.parent()||t;var u=e.show,n=e.hide,v=e.close,r=function(){t.setStyle({mask:a})},b=function(){t.setStyle({mask:"none"})};e.show=function(){r();for(var l=arguments.length,a=new Array(l),t=0;t<l;t++)a[t]=arguments[t];return u.apply(e,a)},e.hide=function(){b();for(var l=arguments.length,a=new Array(l),t=0;t<l;t++)a[t]=arguments[t];return n.apply(e,a)},e.close=function(){b(),l=[];for(var a=arguments.length,t=new Array(a),u=0;u<a;u++)t[u]=arguments[u];return v.apply(e,t)}}}function xe(e){var l=plus.webview.getWebviewById(e);return l&&!l.$processed&&Se(l),l}function ke(e){return"undefined"!==typeof weex?weex.requireModule(e):__requireNativePlugin__(e)}var Ae=Object.freeze({requireNativePlugin:ke,getSubNVueById:xe}),je=Page,De=Component,Ee=/:/g,Pe=w(function(e){return O(e.replace(Ee,"-"))});function Te(e){if(wx.canIUse("nextTick")){var l=e.triggerEvent;e.triggerEvent=function(a){for(var t=arguments.length,u=new Array(t>1?t-1:0),n=1;n<t;n++)u[n-1]=arguments[n];return l.apply(e,[Pe(a)].concat(u))}}}function Ce(e,l){var a=l[e];l[e]=a?function(){Te(this);for(var e=arguments.length,l=new Array(e),t=0;t<e;t++)l[t]=arguments[t];return a.apply(this,l)}:function(){Te(this)}}Page=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Ce("onLoad",e),je(e)},Component=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Ce("created",e),De(e)};var Ne=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function Me(e,l){var a=e.$mp[e.mpType];l.forEach(function(l){_(a,l)&&(e[l]=a[l])})}function Ie(e,l){if(!l)return!0;if(t.default.options&&Array.isArray(t.default.options[e]))return!0;if(l=l.default||l,d(l))return!!d(l.extendOptions[e])||!!(l.super&&l.super.options&&Array.isArray(l.super.options[e]));if(d(l[e]))return!0;var a=l.mixins;return Array.isArray(a)?!!a.find(function(l){return Ie(e,l)}):void 0}function Re(e,l,a){l.forEach(function(l){Ie(l,a)&&(e[l]=function(e){return this.$vm&&this.$vm.__call_hook(l,e)})})}function Le(e,l){var a;return l=l.default||l,d(l)?(a=l,l=a.extendOptions):a=e.extend(l),[a,l]}function Fe(e,l){if(Array.isArray(l)&&l.length){var a=Object.create(null);l.forEach(function(e){a[e]=!0}),e.$scopedSlots=e.$slots=a}}function Ve(e,l){e=(e||"").split(",");var a=e.length;1===a?l._$vueId=e[0]:2===a&&(l._$vueId=e[0],l._$vuePid=e[1])}function Be(e,l){var a=e.data||{},t=e.methods||{};if("function"===typeof a)try{a=a.call(l)}catch(u){Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",a)}else try{a=JSON.parse(JSON.stringify(a))}catch(u){}return g(a)||(a={}),Object.keys(t).forEach(function(e){-1!==l.__lifecycle_hooks__.indexOf(e)||_(a,e)||(a[e]=t[e])}),a}var Ue=[String,Number,Boolean,Object,Array,null];function qe(e){return function(l,a){this.$vm&&(this.$vm[e]=l)}}function He(e,l){var a=e["behaviors"],t=e["extends"],u=e["mixins"],n=e["props"];n||(e["props"]=n=[]);var v=[];return Array.isArray(a)&&a.forEach(function(e){v.push(e.replace("uni://","wx".concat("://"))),"uni://form-field"===e&&(Array.isArray(n)?(n.push("name"),n.push("value")):(n["name"]={type:String,default:""},n["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),g(t)&&t.props&&v.push(l({properties:ze(t.props,!0)})),Array.isArray(u)&&u.forEach(function(e){g(e)&&e.props&&v.push(l({properties:ze(e.props,!0)}))}),v}function Ge(e,l,a,t){return Array.isArray(l)&&1===l.length?l[0]:l}function ze(e){var l=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return l||(a.vueId={type:String,value:""},a.vueSlots={type:null,value:[],observer:function(e,l){var a=Object.create(null);e.forEach(function(e){a[e]=!0}),this.setData({$slots:a})}}),Array.isArray(e)?e.forEach(function(e){a[e]={type:null,observer:qe(e)}}):g(e)&&Object.keys(e).forEach(function(l){var t=e[l];if(g(t)){var u=t["default"];d(u)&&(u=u()),t.type=Ge(l,t.type),a[l]={type:-1!==Ue.indexOf(t.type)?t.type:null,value:u,observer:qe(l)}}else{var n=Ge(l,t);a[l]={type:-1!==Ue.indexOf(n)?n:null,observer:qe(l)}}}),a}function Je(e){try{e.mp=JSON.parse(JSON.stringify(e))}catch(l){}return e.stopPropagation=m,e.preventDefault=m,e.target=e.target||{},_(e,"detail")||(e.detail={}),g(e.detail)&&(e.target=Object.assign({},e.target,e.detail)),e}function Ye(e,l){var a=e;return l.forEach(function(l){var t=l[0],u=l[2];if(t||"undefined"!==typeof u){var n=l[1],v=l[3],r=t?e.__get_value(t,a):a;Number.isInteger(r)?a=u:n?Array.isArray(r)?a=r.find(function(l){return e.__get_value(n,l)===u}):g(r)?a=Object.keys(r).find(function(l){return e.__get_value(n,r[l])===u}):console.error("v-for 暂不支持循环数据：",r):a=r[u],v&&(a=e.__get_value(v,a))}}),a}function We(e,l,a){var t={};return Array.isArray(l)&&l.length&&l.forEach(function(l,u){"string"===typeof l?l?"$event"===l?t["$"+u]=a:0===l.indexOf("$event.")?t["$"+u]=e.__get_value(l.replace("$event.",""),a):t["$"+u]=e.__get_value(l):t["$"+u]=e:t["$"+u]=Ye(e,l)}),t}function Ke(e){for(var l={},a=1;a<e.length;a++){var t=e[a];l[t[0]]=t[1]}return l}function Xe(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],u=arguments.length>4?arguments[4]:void 0,n=arguments.length>5?arguments[5]:void 0,v=!1;if(u&&(v=l.currentTarget&&l.currentTarget.dataset&&"wx"===l.currentTarget.dataset.comType,!a.length))return v?[l]:l.detail.__args__||l.detail;var r=We(e,t,l),b=[];return a.forEach(function(e){"$event"===e?"__set_model"!==n||u?u&&!v?b.push(l.detail.__args__[0]):b.push(l):b.push(l.target.value):Array.isArray(e)&&"o"===e[0]?b.push(Ke(e)):"string"===typeof e&&_(r,e)?b.push(r[e]):b.push(e)}),b}var Ze="~",Qe="^";function el(e,l){return e===l||"regionchange"===l&&("begin"===e||"end"===e)}function ll(e){var l=this;e=Je(e);var a=(e.currentTarget||e.target).dataset;if(!a)return console.warn("事件信息不存在");var t=a.eventOpts||a["event-opts"];if(!t)return console.warn("事件信息不存在");var u=e.type,n=[];return t.forEach(function(a){var t=a[0],v=a[1],r=t.charAt(0)===Qe;t=r?t.slice(1):t;var b=t.charAt(0)===Ze;t=b?t.slice(1):t,v&&el(u,t)&&v.forEach(function(a){var t=a[0];if(t){var u=l.$vm;u.$options.generic&&u.$parent&&u.$parent.$parent&&(u=u.$parent.$parent);var v=u[t];if(!d(v))throw new Error(" _vm.".concat(t," is not a function"));if(b){if(v.once)return;v.once=!0}n.push(v.apply(u,Xe(l.$vm,e,a[1],a[2],r,t)))}})}),"input"===u&&1===n.length&&"undefined"!==typeof n[0]?n[0]:void 0}var al=["onShow","onHide","onError","onPageNotFound"];function tl(e,l){var a=l.mocks,u=l.initRefs;e.$options.store&&(t.default.prototype.$store=e.$options.store),t.default.prototype.mpHost="app-plus",t.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=o({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(u(this),Me(this,a)))}});var n={onLaunch:function(l){this.$vm||(this.$vm=e,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",l),this.$vm.__call_hook("onLaunch",l))}};return n.globalData=e.$options.globalData||{},Re(n,al),n}var ul=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function nl(e,l){var a=e.$children,t=a.find(function(e){return e.$scope._$vueId===l});if(t)return t;for(var u=a.length-1;u>=0;u--)if(t=nl(a[u],l),t)return t}function vl(e){return Behavior(e)}function rl(){return!!this.route}function bl(e){this.triggerEvent("__l",e)}function ol(e){var l=e.$scope;Object.defineProperty(e,"$refs",{get:function(){var e={},a=l.selectAllComponents(".vue-ref");a.forEach(function(l){var a=l.dataset.ref;e[a]=l.$vm||l});var t=l.selectAllComponents(".vue-ref-in-for");return t.forEach(function(l){var a=l.dataset.ref;e[a]||(e[a]=[]),e[a].push(l.$vm||l)}),e}})}function il(e){var l,a=e.detail||e.value,t=a.vuePid,u=a.vueOptions;t&&(l=nl(this.$vm,t)),l||(l=this.$vm),u.parent=l}function sl(e){return tl(e,{mocks:ul,initRefs:ol})}var cl=["onUniNViewMessage"];function fl(e){var l=sl(e);return Re(l,cl),l}function pl(e){return App(fl(e)),e}function hl(e){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=l.isPage,u=l.initRelation,v=Le(t.default,e),r=n(v,2),b=r[0],o=r[1],i={options:{multipleSlots:!0,addGlobalClass:!0},data:Be(o,t.default.prototype),behaviors:He(o,vl),properties:ze(o.props,!1,o.__file),lifetimes:{attached:function(){var e=this.properties,l={mpType:a.call(this)?"page":"component",mpInstance:this,propsData:e};Ve(e.vueId,this),u.call(this,{vuePid:this._$vuePid,vueOptions:l}),this.$vm=new b(l),Fe(this.$vm,e.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(e){this.$vm&&this.$vm.__call_hook("onPageShow",e)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(e){this.$vm&&this.$vm.__call_hook("onPageResize",e)}},methods:{__l:il,__e:ll}};return Array.isArray(o.wxsCallMethods)&&o.wxsCallMethods.forEach(function(e){i.methods[e]=function(l){return this.$vm[e](l)}}),a?i:[i,b]}function dl(e){return hl(e,{isPage:rl,initRelation:bl})}function yl(e){var l=dl(e);return l.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},l}var gl=["onShow","onHide","onUnload"];function _l(e,l){l.isPage,l.initRelation;var a=yl(e);return Re(a.methods,gl,e),a.methods.onLoad=function(e){this.$vm.$mp.query=e,this.$vm.__call_hook("onLoad",e)},a}function ml(e){return _l(e,{isPage:rl,initRelation:bl})}gl.push.apply(gl,Ne);var wl=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function $l(e){var l=ml(e);return Re(l.methods,wl),l}function Ol(e){return Component($l(e))}function Sl(e){return Component(yl(e))}re.forEach(function(e){ve[e]=!1}),be.forEach(function(e){var l=ve[e]&&ve[e].name?ve[e].name:e;wx.canIUse(l)||(ve[e]=!1)});var xl={};Object.keys(ne).forEach(function(e){xl[e]=ne[e]}),Object.keys(Oe).forEach(function(e){xl[e]=Oe[e]}),Object.keys(Ae).forEach(function(e){xl[e]=K(e,Ae[e])}),Object.keys(wx).forEach(function(e){(_(wx,e)||_(ve,e))&&(xl[e]=K(e,fe(e,wx[e])))}),"undefined"!==typeof e&&(e.uni=xl,e.UniEmitter=Oe),wx.createApp=pl,wx.createPage=Ol,wx.createComponent=Sl;var kl=xl,Al=kl;l.default=Al}).call(this,a("c8ba"))},8189:function(e){e.exports={_from:"@dcloudio/uni-stat@next",_id:"@dcloudio/uni-stat@2.0.0-23320190923002",_inBundle:!1,_integrity:"sha512-MnftsvgOac3q1FCOBPzivbFn8GNQFo7D2DY325HeEZyFCWgx5GEwHpGYjT1PQU6v7DaDn0ruxa3ObdpUIYbmZw==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@next",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"next",saveSpec:null,fetchSpec:"next"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-23320190923002.tgz",_shasum:"0c400c140ca0b3c05f52d25f11583cf05a0c4e9a",_spec:"@dcloudio/uni-stat@next",_where:"/Users/fxy/Documents/DCloud/HbuilderX-plugins/release/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"fed4c73fb9142a1b277dd79313939cad90693d3e",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-23320190923002"}},"83fa":function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=new Object({isIntNum:function(e){var l=/^\-[1-9][0-9]*$/,a=/^\d+(\.\d+)?$/;return!(!a.test(e)&&!l.test(e))},formatDate:function(e,l){var a=function(e){return e+="",e.replace(/^(\d)$/,"0$1")},t={yyyy:e.getFullYear(),yy:e.getFullYear().toString().substring(2),M:e.getMonth()+1,MM:a(e.getMonth()+1),d:e.getDate(),dd:a(e.getDate()),hh:e.getHours(),mm:e.getMinutes(),ss:e.getSeconds()};return l||(l="yyyy-MM-dd hh:mm:ss"),l.replace(/([a-z])(\1)*/gi,function(e){return t[e]})},AddDays:function(e,l){e.setDate(e.getDate()+l)}}),u=t;l.default=u},"921b":function(e,l,a){"use strict";(function(e){var l=a("8189");function t(e,l){return!l||"object"!==typeof l&&"function"!==typeof l?u(e):l}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function n(e){return n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(e)}function v(e,l){if("function"!==typeof l&&null!==l)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(l&&l.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),l&&r(e,l)}function r(e,l){return r=Object.setPrototypeOf||function(e,l){return e.__proto__=l,e},r(e,l)}function b(e,l){if(!(e instanceof l))throw new TypeError("Cannot call a class as a function")}function o(e,l){for(var a=0;a<l.length;a++){var t=l[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function i(e,l,a){return l&&o(e.prototype,l),a&&o(e,a),e}var s=l.version,c="https://tongji.dcloud.io/uni/stat",f="https://tongji.dcloud.io/uni/stat.gif",p=1800,h=300,d=10,y="__DC_STAT_UUID",g="__DC_UUID_VALUE";function _(){var l="";if("n"===O()){try{l=plus.runtime.getDCloudId()}catch(a){l=""}return l}try{l=e.getStorageSync(y)}catch(a){l=g}if(!l){l=Date.now()+""+Math.floor(1e7*Math.random());try{e.setStorageSync(y,l)}catch(a){e.setStorageSync(y,g)}}return l}var m=function(e){var l=Object.keys(e),a=l.sort(),t={},u="";for(var n in a)t[a[n]]=e[a[n]],u+=a[n]+"="+e[a[n]]+"&";return{sign:"",options:u.substr(0,u.length-1)}},w=function(e){var l="";for(var a in e)l+=a+"="+e[a]+"&";return l.substr(0,l.length-1)},$=function(){return parseInt((new Date).getTime()/1e3)},O=function(){var e={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return e["app-plus"]},S=function(){var l="";return"wx"!==O()&&"qq"!==O()||(l=e.getAccountInfoSync().miniProgram.appId||""),l},x=function(){return"n"===O()?plus.runtime.version:""},k=function(){var e=O(),l="";return"n"===e&&(l=plus.runtime.channel),l},A=function(l){var a=O(),t="";return l||("wx"===a&&(t=e.getLaunchOptionsSync().scene),t)},j="First__Visit__Time",D="Last__Visit__Time",E=function(){var l=e.getStorageSync(j),a=0;return l?a=l:(a=$(),e.setStorageSync(j,a),e.removeStorageSync(D)),a},P=function(){var l=e.getStorageSync(D),a=0;return a=l||"",e.setStorageSync(D,$()),a},T="__page__residence__time",C=0,N=0,M=function(){return C=$(),"n"===O()&&e.setStorageSync(T,$()),C},I=function(){return N=$(),"n"===O()&&(C=e.getStorageSync(T)),N-C},R="Total__Visit__Count",L=function(){var l=e.getStorageSync(R),a=1;return l&&(a=l,a++),e.setStorageSync(R,a),a},F=function(e){var l={};for(var a in e)l[a]=encodeURIComponent(e[a]);return l},V=0,B=0,U=function(){var e=(new Date).getTime();return V=e,B=0,e},q=function(){var e=(new Date).getTime();return B=e,e},H=function(e){var l=0;if(0!==V&&(l=B-V),l=parseInt(l/1e3),l=l<1?1:l,"app"===e){var a=l>h;return{residenceTime:l,overtime:a}}if("page"===e){var t=l>p;return{residenceTime:l,overtime:t}}return{residenceTime:l}},G=function(){var e=getCurrentPages(),l=e[e.length-1],a=l.$vm;return"bd"===O()?a.$mp&&a.$mp.page.is:a.$scope&&a.$scope.route||a.$mp&&a.$mp.page.route},z=function(e){var l=getCurrentPages(),a=l[l.length-1],t=a.$vm,u=e._query,n=u&&"{}"!==JSON.stringify(u)?"?"+JSON.stringify(u):"";return e._query="","bd"===O()?t.$mp&&t.$mp.page.is+n:t.$scope&&t.$scope.route+n||t.$mp&&t.$mp.page.route+n},J=function(e){return!!("page"===e.mpType||e.$mp&&"page"===e.$mp.mpType||"page"===e.$options.mpType)},Y=function(e,l){return e?"string"!==typeof e?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):e.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof l&&"object"!==typeof l?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof l&&l.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===e&&"string"!==typeof l?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},W=a("37ab").default,K=a("ac45").default||a("ac45"),X=e.getSystemInfoSync(),Z=function(){function l(){b(this,l),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:_(),ut:O(),mpn:S(),ak:K.appid,usv:s,v:x(),ch:k(),cn:"",pn:"",ct:"",t:$(),tt:"",p:"android"===X.platform?"a":"i",brand:X.brand||"",md:X.model,sv:X.system.replace(/(Android|iOS)\s/,""),mpsdk:X.SDKVersion||"",mpv:X.version||"",lang:X.language,pr:X.pixelRatio,ww:X.windowWidth,wh:X.windowHeight,sw:X.screenWidth,sh:X.screenHeight}}return i(l,[{key:"_applicationShow",value:function(){if(this.__licationHide){q();var e=H("app");if(e.overtime){var l={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(l)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(e,l){this.__licationHide=!0,q();var a=H();U();var t=z(this);this._sendHideRequest({urlref:t,urlref_ts:a.residenceTime},l)}},{key:"_pageShow",value:function(){var e=z(this),l=G();if(this._navigationBarTitle.config=W&&W.pages[l]&&W.pages[l].titleNView&&W.pages[l].titleNView.titleText||W&&W.pages[l]&&W.pages[l].navigationBarTitleText||"",this.__licationShow)return U(),this.__licationShow=!1,void(this._lastPageRoute=e);q(),this._lastPageRoute=e;var a=H("page");if(a.overtime){var t={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(t)}U()}},{key:"_pageHide",value:function(){if(!this.__licationHide){q();var e=H("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:e.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(e){this._sendEventRequest({key:e},0)}},{key:"_sendReportRequest",value:function(e){this._navigationBarTitle.lt="1";var l=e.query&&"{}"!==JSON.stringify(e.query)?"?"+JSON.stringify(e.query):"";this.statData.lt="1",this.statData.url=e.path+l||"",this.statData.t=$(),this.statData.sc=A(e.scene),this.statData.fvts=E(),this.statData.lvts=P(),this.statData.tvc=L(),"n"===O()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(e){var l=e.url,a=e.urlref,t=e.urlref_ts;this._navigationBarTitle.lt="11";var u={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:l,tt:this.statData.tt,urlref:a,urlref_ts:t,ch:this.statData.ch,usv:this.statData.usv,t:$(),p:this.statData.p};this.request(u)}},{key:"_sendHideRequest",value:function(e,l){var a=e.urlref,t=e.urlref_ts,u={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:a,urlref_ts:t,ch:this.statData.ch,usv:this.statData.usv,t:$(),p:this.statData.p};this.request(u,l)}},{key:"_sendEventRequest",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=e.key,a=void 0===l?"":l,t=e.value,u=void 0===t?"":t,n=this._lastPageRoute,v={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:n,ch:this.statData.ch,e_n:a,e_v:"object"===typeof u?JSON.stringify(u):u.toString(),usv:this.statData.usv,t:$(),p:this.statData.p};this.request(v)}},{key:"getNetworkInfo",value:function(){var l=this;e.getNetworkType({success:function(e){l.statData.net=e.networkType,l.getLocation()}})}},{key:"getProperty",value:function(){var e=this;plus.runtime.getProperty(plus.runtime.appid,function(l){e.statData.v=l.version||"",e.getNetworkInfo()})}},{key:"getLocation",value:function(){var l=this;K.getLocation?e.getLocation({type:"wgs84",geocode:!0,success:function(e){e.address&&(l.statData.cn=e.address.country,l.statData.pn=e.address.province,l.statData.ct=e.address.city),l.statData.lat=e.latitude,l.statData.lng=e.longitude,l.request(l.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(l,a){var t=this,u=$(),n=this._navigationBarTitle;l.ttn=n.page,l.ttpj=n.config,l.ttc=n.report;var v=this._reportingRequestData;if("n"===O()&&(v=e.getStorageSync("__UNI__STAT__DATA")||{}),v[l.lt]||(v[l.lt]=[]),v[l.lt].push(l),"n"===O()&&e.setStorageSync("__UNI__STAT__DATA",v),!(I()<d)||a){var r=this._reportingRequestData;"n"===O()&&(r=e.getStorageSync("__UNI__STAT__DATA")),M();var b=[],o=[],i=[],c=function(e){var l=r[e];l.forEach(function(l){var a=w(l);0===e?b.push(a):3===e?i.push(a):o.push(a)})};for(var f in r)c(f);b.push.apply(b,o.concat(i));var p={usv:s,t:u,requests:JSON.stringify(b)};this._reportingRequestData={},"n"===O()&&e.removeStorageSync("__UNI__STAT__DATA"),"h5"!==l.ut?"n"!==O()||"a"!==this.statData.p?this._sendRequest(p):setTimeout(function(){t._sendRequest(p)},200):this.imageRequest(p)}}},{key:"_sendRequest",value:function(l){var a=this;e.request({url:c,method:"POST",data:l,success:function(){},fail:function(e){++a._retry<3&&setTimeout(function(){a._sendRequest(l)},1e3)}})}},{key:"imageRequest",value:function(e){var l=new Image,a=m(F(e)).options;l.src=f+"?"+a}},{key:"sendEvent",value:function(e,l){Y(e,l)||("title"!==e?this._sendEventRequest({key:e,value:"object"===typeof l?JSON.stringify(l):l},1):this._navigationBarTitle.report=l)}}]),l}(),Q=function(l){function a(){var l;return b(this,a),l=t(this,n(a).call(this)),l.instance=null,"function"===typeof e.addInterceptor&&(l.addInterceptorInit(),l.interceptLogin(),l.interceptShare(!0),l.interceptRequestPayment()),l}return v(a,l),i(a,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new a),this.instance}}]),i(a,[{key:"addInterceptorInit",value:function(){var l=this;e.addInterceptor("setNavigationBarTitle",{invoke:function(e){l._navigationBarTitle.page=e.title}})}},{key:"interceptLogin",value:function(){var l=this;e.addInterceptor("login",{complete:function(){l._login()}})}},{key:"interceptShare",value:function(l){var a=this;l?e.addInterceptor("share",{success:function(){a._share()},fail:function(){a._share()}}):a._share()}},{key:"interceptRequestPayment",value:function(){var l=this;e.addInterceptor("requestPayment",{success:function(){l._payment("pay_success")},fail:function(){l._payment("pay_fail")}})}},{key:"report",value:function(e,l){this.self=l,M(),this.__licationShow=!0,this._sendReportRequest(e,!0)}},{key:"load",value:function(e,l){if(!l.$scope&&!l.$mp){var a=getCurrentPages();l.$scope=a[a.length-1]}this.self=l,this._query=e}},{key:"show",value:function(e){this.self=e,J(e)?this._pageShow(e):this._applicationShow(e)}},{key:"ready",value:function(e){}},{key:"hide",value:function(e){this.self=e,J(e)?this._pageHide(e):this._applicationHide(e,!0)}},{key:"error",value:function(e){this._platform;var l="";l=e.message?e.stack:JSON.stringify(e);var a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:l,usv:this.statData.usv,t:$(),p:this.statData.p};this.request(a)}}]),a}(Z),ee=Q.getInstance(),le=!1,ae={onLaunch:function(e){ee.report(e,this)},onReady:function(){ee.ready(this)},onLoad:function(e){if(ee.load(e,this),this.$scope&&this.$scope.onShareAppMessage){var l=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(e){return ee.interceptShare(!1),l.call(this,e)}}},onShow:function(){le=!1,ee.show(this)},onHide:function(){le=!0,ee.hide(this)},onUnload:function(){le?le=!1:ee.hide(this)},onError:function(e){ee.error(e)}};function te(){var l=a("66fd");(l.default||l).mixin(ae),e.report=function(e,l){ee.sendEvent(e,l)}}te()}).call(this,a("6e42")["default"])},"96cf":function(e,l){!function(l){"use strict";var a,t=Object.prototype,u=t.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},v=n.iterator||"@@iterator",r=n.asyncIterator||"@@asyncIterator",b=n.toStringTag||"@@toStringTag",o="object"===typeof e,i=l.regeneratorRuntime;if(i)o&&(e.exports=i);else{i=l.regeneratorRuntime=o?e.exports:{},i.wrap=m;var s="suspendedStart",c="suspendedYield",f="executing",p="completed",h={},d={};d[v]=function(){return this};var y=Object.getPrototypeOf,g=y&&y(y(T([])));g&&g!==t&&u.call(g,v)&&(d=g);var _=S.prototype=$.prototype=Object.create(d);O.prototype=_.constructor=S,S.constructor=O,S[b]=O.displayName="GeneratorFunction",i.isGeneratorFunction=function(e){var l="function"===typeof e&&e.constructor;return!!l&&(l===O||"GeneratorFunction"===(l.displayName||l.name))},i.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,S):(e.__proto__=S,b in e||(e[b]="GeneratorFunction")),e.prototype=Object.create(_),e},i.awrap=function(e){return{__await:e}},x(k.prototype),k.prototype[r]=function(){return this},i.AsyncIterator=k,i.async=function(e,l,a,t){var u=new k(m(e,l,a,t));return i.isGeneratorFunction(l)?u:u.next().then(function(e){return e.done?e.value:u.next()})},x(_),_[b]="Generator",_[v]=function(){return this},_.toString=function(){return"[object Generator]"},i.keys=function(e){var l=[];for(var a in e)l.push(a);return l.reverse(),function a(){while(l.length){var t=l.pop();if(t in e)return a.value=t,a.done=!1,a}return a.done=!0,a}},i.values=T,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=a,this.done=!1,this.delegate=null,this.method="next",this.arg=a,this.tryEntries.forEach(E),!e)for(var l in this)"t"===l.charAt(0)&&u.call(this,l)&&!isNaN(+l.slice(1))&&(this[l]=a)},stop:function(){this.done=!0;var e=this.tryEntries[0],l=e.completion;if("throw"===l.type)throw l.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var l=this;function t(t,u){return r.type="throw",r.arg=e,l.next=t,u&&(l.method="next",l.arg=a),!!u}for(var n=this.tryEntries.length-1;n>=0;--n){var v=this.tryEntries[n],r=v.completion;if("root"===v.tryLoc)return t("end");if(v.tryLoc<=this.prev){var b=u.call(v,"catchLoc"),o=u.call(v,"finallyLoc");if(b&&o){if(this.prev<v.catchLoc)return t(v.catchLoc,!0);if(this.prev<v.finallyLoc)return t(v.finallyLoc)}else if(b){if(this.prev<v.catchLoc)return t(v.catchLoc,!0)}else{if(!o)throw new Error("try statement without catch or finally");if(this.prev<v.finallyLoc)return t(v.finallyLoc)}}}},abrupt:function(e,l){for(var a=this.tryEntries.length-1;a>=0;--a){var t=this.tryEntries[a];if(t.tryLoc<=this.prev&&u.call(t,"finallyLoc")&&this.prev<t.finallyLoc){var n=t;break}}n&&("break"===e||"continue"===e)&&n.tryLoc<=l&&l<=n.finallyLoc&&(n=null);var v=n?n.completion:{};return v.type=e,v.arg=l,n?(this.method="next",this.next=n.finallyLoc,h):this.complete(v)},complete:function(e,l){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&l&&(this.next=l),h},finish:function(e){for(var l=this.tryEntries.length-1;l>=0;--l){var a=this.tryEntries[l];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),E(a),h}},catch:function(e){for(var l=this.tryEntries.length-1;l>=0;--l){var a=this.tryEntries[l];if(a.tryLoc===e){var t=a.completion;if("throw"===t.type){var u=t.arg;E(a)}return u}}throw new Error("illegal catch attempt")},delegateYield:function(e,l,t){return this.delegate={iterator:T(e),resultName:l,nextLoc:t},"next"===this.method&&(this.arg=a),h}}}function m(e,l,a,t){var u=l&&l.prototype instanceof $?l:$,n=Object.create(u.prototype),v=new P(t||[]);return n._invoke=A(e,a,v),n}function w(e,l,a){try{return{type:"normal",arg:e.call(l,a)}}catch(t){return{type:"throw",arg:t}}}function $(){}function O(){}function S(){}function x(e){["next","throw","return"].forEach(function(l){e[l]=function(e){return this._invoke(l,e)}})}function k(e){function l(a,t,n,v){var r=w(e[a],e,t);if("throw"!==r.type){var b=r.arg,o=b.value;return o&&"object"===typeof o&&u.call(o,"__await")?Promise.resolve(o.__await).then(function(e){l("next",e,n,v)},function(e){l("throw",e,n,v)}):Promise.resolve(o).then(function(e){b.value=e,n(b)},function(e){return l("throw",e,n,v)})}v(r.arg)}var a;function t(e,t){function u(){return new Promise(function(a,u){l(e,t,a,u)})}return a=a?a.then(u,u):u()}this._invoke=t}function A(e,l,a){var t=s;return function(u,n){if(t===f)throw new Error("Generator is already running");if(t===p){if("throw"===u)throw n;return C()}a.method=u,a.arg=n;while(1){var v=a.delegate;if(v){var r=j(v,a);if(r){if(r===h)continue;return r}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(t===s)throw t=p,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);t=f;var b=w(e,l,a);if("normal"===b.type){if(t=a.done?p:c,b.arg===h)continue;return{value:b.arg,done:a.done}}"throw"===b.type&&(t=p,a.method="throw",a.arg=b.arg)}}}function j(e,l){var t=e.iterator[l.method];if(t===a){if(l.delegate=null,"throw"===l.method){if(e.iterator.return&&(l.method="return",l.arg=a,j(e,l),"throw"===l.method))return h;l.method="throw",l.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var u=w(t,e.iterator,l.arg);if("throw"===u.type)return l.method="throw",l.arg=u.arg,l.delegate=null,h;var n=u.arg;return n?n.done?(l[e.resultName]=n.value,l.next=e.nextLoc,"return"!==l.method&&(l.method="next",l.arg=a),l.delegate=null,h):n:(l.method="throw",l.arg=new TypeError("iterator result is not an object"),l.delegate=null,h)}function D(e){var l={tryLoc:e[0]};1 in e&&(l.catchLoc=e[1]),2 in e&&(l.finallyLoc=e[2],l.afterLoc=e[3]),this.tryEntries.push(l)}function E(e){var l=e.completion||{};l.type="normal",delete l.arg,e.completion=l}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(D,this),this.reset(!0)}function T(e){if(e){var l=e[v];if(l)return l.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var t=-1,n=function l(){while(++t<e.length)if(u.call(e,t))return l.value=e[t],l.done=!1,l;return l.value=a,l.done=!0,l};return n.next=n}}return{next:C}}function C(){return{value:a,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},"9b06":function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=function(e){return e<10?"0"+e:e+""},u={date:{init:function(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"date",u=arguments.length>3?arguments[3]:void 0,n=arguments.length>4?arguments[4]:void 0,v=arguments.length>5?arguments[5]:void 0,r=arguments.length>6?arguments[6]:void 0,b=new Date,o=[],i=new Date(e.toString()),s=new Date(l.toString());e>l&&(i=new Date(l.toString()),s=new Date(e.toString()));for(var c=i.getFullYear(),f=(i.getMonth(),s.getFullYear()),p=[],h=[],d=[],y=[],g=[],_=[],m=[],w=[],$=v?1*n[1]:n[1]+1,O=b.getFullYear(),S=b.getMonth()+1,x=b.getDate(),k=new Date(c,$,0).getDate(),A=c;A<=f;A++)p.push(A+"");var j=p[n[0]];switch(a){case"half":case"date":case"yearMonth":if(r&&j==O){for(var D=1;D<=S;D++)h.push(t(D));for(var E=1;E<=x;E++)d.push(t(E))}else{for(var P=1;P<=12;P++)h.push(t(P));for(var T=1;T<=k;T++)d.push(t(T))}break;default:for(var C=1;C<=12;C++)h.push(t(C));for(var N=1;N<=k;N++)d.push(t(N));break}for(var M=0;M<24;M++)y.push(t(M));for(var I=0;I<60;I+=1*u)g.push(t(I));for(var R=0;R<60;R++)_.push(t(R));switch(v&&(w=[p.indexOf(n[0]),h.indexOf(n[1]),d.indexOf(n[2]),y.indexOf(n[3]),-1==g.indexOf(n[4])?0:g.indexOf(n[4]),_.indexOf(n[5])]),a){case"range":return v?(o=[w[0],w[1],w[2],0,w[0],w[1],w[2]],{years:p,months:h,days:d,defaultVal:o}):{years:p,months:h,days:d};case"date":return v?(o=[w[0],w[1],w[2]],{years:p,months:h,days:d,defaultVal:o}):{years:p,months:h,days:d};case"half":return m=[{label:"上午",value:0},{label:"下午",value:1}],v?(o=[w[0],w[1],w[2],w[3]],{years:p,months:h,days:d,areas:m,defaultVal:o}):{years:p,months:h,days:d,areas:m};case"yearMonth":return v?(o=[w[0],w[1]],{years:p,months:h,defaultVal:o}):{years:p,months:h};case"dateTime":return v?(o=w,{years:p,months:h,days:d,hours:y,minutes:g,seconds:_,defaultVal:o}):{years:p,months:h,days:d,hours:y,minutes:g,seconds:_};case"time":return v?(o=[w[3],w[4],w[5]],{hours:y,minutes:g,seconds:_,defaultVal:o}):{hours:y,minutes:g,seconds:_}}},initMonths:function(e,l){var a=new Date,u=a.getFullYear(),n=a.getMonth()+1,v=(a.getDate(),u==e),r=[];if(v&&l)for(var b=1;b<=n;b++)r.push(t(b));else for(var o=1;o<=12;o++)r.push(t(o));return r},initDays:function(e,l,a){var u=new Date,n=u.getFullYear(),v=u.getMonth()+1,r=u.getDate(),b=n==e&&v==l,o=new Date(e,l,0).getDate(),i=[];if(b&&a)for(var s=1;s<=r;s++)i.push(t(s));else for(var c=1;c<=o;c++)i.push(t(c));return i}},limitHour:{init:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:7,l=new Date,a=[],u=[],n=[],v=(new Date).getHours(),r=["周日","周一","周二","周三","周四","周五","周六"],b=0;b<e;b++){var o=void 0,i=void 0,s=void 0,c=void 0;o=l.getFullYear(),i=t(l.getMonth()+1),s=t(l.getDate()),c=r[l.getDay()];var f="";switch(b){case 0:f="今天";break;case 1:f="明天";break;case 2:f="后天";break;default:f=i+"月"+s+"日 "+c;break}a.push({label:f,value:o+"-"+i+"-"+s,today:0==b}),l.setDate(l.getDate()+1)}u=v>12?[{label:"下午",value:1}]:[{label:"上午",value:0},{label:"下午",value:1}];for(var p=v>12?v-12:v;p<=12;p++)n.push({label:t(p),value:t(v>12?p+12:p)});return{date:a,areas:u,hours:n}},initAreas:function(e){var l=[],a=(new Date).getHours();return l=e.today&&a>12?[{label:"下午",value:1}]:[{label:"上午",value:0},{label:"下午",value:1}],l},initHours:function(e,l){var a=[],u=(new Date).getHours();if(e.today)if(1==l.value&&u<=12)for(var n=1;n<=12;n++)a.push({label:t(n),value:t(1==l.value?n+12:n)});else for(var v=u>12?u-12:u;v<=12;v++)a.push({label:t(v),value:t(1==l.value?v+12:v)});else for(var r=1;r<=12;r++)a.push({label:t(r),value:t(1==l.value?r+12:r)});return a}},limit:{init:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:7,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:20,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:30,v=new Date,r=new Date((new Date).getTime()+60*n*1e3),b=[],o=[],i=[],s=r.getHours(),c=Math.floor(r.getMinutes()/u)*u,f=["周日","周一","周二","周三","周四","周五","周六"],p=0;p<e;p++){var h=void 0,d=void 0,y=void 0,g=void 0;h=v.getFullYear(),d=t(v.getMonth()+1),y=t(v.getDate()),g=f[v.getDay()];var _="";switch(p){case 0:_="今天";break;case 1:_="明天";break;case 2:_="后天";break;default:_=d+"月"+y+"日 "+g;break}b.push({label:_,value:h+"-"+d+"-"+y,flag:0==p}),v.setDate(v.getDate()+1)}s<l&&(s=l),s>a&&(s=a);for(var m=1*s;m<=1*a;m++)o.push({label:t(m),value:t(m),flag:m==s});for(var w=c;w<60;w+=1*u)i.push({label:t(w),value:t(w)});return{date:b,hours:o,minutes:i}},initHours:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,a=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],arguments.length>3&&void 0!==arguments[3]?arguments[3]:30),u=arguments.length>4?arguments[4]:void 0,n=[],v=u.split("-"),r=new Date,b=r.getFullYear(),o=r.getMonth()+1,i=r.getDate(),s=new Date((new Date).getTime()+60*a*1e3),c=s.getHours(),f=b==v[0]&&o==v[1]&&i==v[2];if(c>l&&(c=l),f)for(var p=1*c;p<=1*l;p++)n.push({label:t(p),value:t(p),flag:p==c});else for(var h=1*e;h<=1*l;h++)n.push({label:t(h),value:t(h),flag:!1});return n},initMinutes:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0],arguments.length>1&&void 0!==arguments[1]&&arguments[1];var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:30,a=arguments.length>4?arguments[4]:void 0,u=arguments.length>5?arguments[5]:void 0,n=[],v=new Date((new Date).getTime()+60*l*1e3),r=a.split("-"),b=new Date,o=b.getFullYear(),i=b.getMonth()+1,s=b.getDate(),c=v.getHours(),f=Math.floor(v.getMinutes()/e)*e,p=o==r[0]&&i==r[1]&&s==r[2];if(p)if(u==c)for(var h=f;h<60;h+=1*e)n.push({label:t(h),value:t(h)});else for(var d=0;d<60;d+=1*e)n.push({label:t(d),value:t(d)});else for(var y=0;y<60;y+=1*e)n.push({label:t(y),value:t(y)});return n}},range:{init:function(e,l,a,u){new Date;var n=[],v=new Date(e.toString()),r=new Date(l.toString());e>l&&(v=new Date(l.toString()),r=new Date(e.toString()));for(var b=v.getFullYear(),o=(v.getMonth(),r.getFullYear()),i=[],s=[],c=[],f=[],p=[],h=[],d=u?1*a[1]:a[1]+1,y=new Date(b,d,0).getDate(),g=b;g<=o;g++)i.push(g+"");for(var _=1;_<=12;_++)s.push(t(_));for(var m=1;m<=y;m++)c.push(t(m));for(var w=b;w<=o;w++)f.push(w+"");for(var $=1;$<=12;$++)p.push(t($));for(var O=1;O<=y;O++)h.push(t(O));return u?(n=[i.indexOf(a[0]),s.indexOf(a[1]),c.indexOf(a[2]),0,f.indexOf(a[0]),p.indexOf(a[1]),h.indexOf(a[2])],{fyears:i,fmonths:s,fdays:c,tyears:f,tmonths:p,tdays:h,defaultVal:n}):{fyears:i,fmonths:s,fdays:c,tyears:f,tmonths:p,tdays:h}},initDays:function(e,l){for(var a=new Date(e,l,0).getDate(),u=[],n=1;n<=a;n++)u.push(t(n));return u}}},n=u;l.default=n},a34a:function(e,l,a){e.exports=a("bbdd")},ac45:function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t={appid:"__UNI__E9C60E1"};l.default=t},ac4d:function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=[{label:"北京市",value:"11"},{label:"天津市",value:"12"},{label:"河北省",value:"13"},{label:"山西省",value:"14"},{label:"内蒙古自治区",value:"15"},{label:"辽宁省",value:"21"},{label:"吉林省",value:"22"},{label:"黑龙江省",value:"23"},{label:"上海市",value:"31"},{label:"江苏省",value:"32"},{label:"浙江省",value:"33"},{label:"安徽省",value:"34"},{label:"福建省",value:"35"},{label:"江西省",value:"36"},{label:"山东省",value:"37"},{label:"河南省",value:"41"},{label:"湖北省",value:"42"},{label:"湖南省",value:"43"},{label:"广东省",value:"44"},{label:"广西壮族自治区",value:"45"},{label:"海南省",value:"46"},{label:"重庆市",value:"50"},{label:"四川省",value:"51"},{label:"贵州省",value:"52"},{label:"云南省",value:"53"},{label:"西藏自治区",value:"54"},{label:"陕西省",value:"61"},{label:"甘肃省",value:"62"},{label:"青海省",value:"63"},{label:"宁夏回族自治区",value:"64"},{label:"新疆维吾尔自治区",value:"65"},{label:"台湾",value:"66"},{label:"香港",value:"67"},{label:"澳门",value:"68"}],u=t;l.default=u},bbdd:function(e,l,a){var t=function(){return this||"object"===typeof self&&self}()||Function("return this")(),u=t.regeneratorRuntime&&Object.getOwnPropertyNames(t).indexOf("regeneratorRuntime")>=0,n=u&&t.regeneratorRuntime;if(t.regeneratorRuntime=void 0,e.exports=a("96cf"),u)t.regeneratorRuntime=n;else try{delete t.regeneratorRuntime}catch(v){t.regeneratorRuntime=void 0}},c8ba:function(e,l){var a;a=function(){return this}();try{a=a||new Function("return this")()}catch(t){"object"===typeof window&&(a=window)}e.exports=a},cd8c:function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=n(a("66fd")),u=n(a("2f62"));function n(e){return e&&e.__esModule?e:{default:e}}t.default.use(u.default);var v=new u.default.Store({state:{forcedLogin:!1,hasLogin:!1,userName:"",userinfor:{}},mutations:{login:function(e,l){e.userName=l.userName||"新用户",e.hasLogin=!0,e.userinfor=l},logout:function(e){e.userName="",e.hasLogin=!1}}}),r=v;l.default=r},df25:function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=[[{label:"市辖区",value:"1101"}],[{label:"市辖区",value:"1201"}],[{label:"石家庄市",value:"1301"},{label:"唐山市",value:"1302"},{label:"秦皇岛市",value:"1303"},{label:"邯郸市",value:"1304"},{label:"邢台市",value:"1305"},{label:"保定市",value:"1306"},{label:"张家口市",value:"1307"},{label:"承德市",value:"1308"},{label:"沧州市",value:"1309"},{label:"廊坊市",value:"1310"},{label:"衡水市",value:"1311"}],[{label:"太原市",value:"1401"},{label:"大同市",value:"1402"},{label:"阳泉市",value:"1403"},{label:"长治市",value:"1404"},{label:"晋城市",value:"1405"},{label:"朔州市",value:"1406"},{label:"晋中市",value:"1407"},{label:"运城市",value:"1408"},{label:"忻州市",value:"1409"},{label:"临汾市",value:"1410"},{label:"吕梁市",value:"1411"}],[{label:"呼和浩特市",value:"1501"},{label:"包头市",value:"1502"},{label:"乌海市",value:"1503"},{label:"赤峰市",value:"1504"},{label:"通辽市",value:"1505"},{label:"鄂尔多斯市",value:"1506"},{label:"呼伦贝尔市",value:"1507"},{label:"巴彦淖尔市",value:"1508"},{label:"乌兰察布市",value:"1509"},{label:"兴安盟",value:"1522"},{label:"锡林郭勒盟",value:"1525"},{label:"阿拉善盟",value:"1529"}],[{label:"沈阳市",value:"2101"},{label:"大连市",value:"2102"},{label:"鞍山市",value:"2103"},{label:"抚顺市",value:"2104"},{label:"本溪市",value:"2105"},{label:"丹东市",value:"2106"},{label:"锦州市",value:"2107"},{label:"营口市",value:"2108"},{label:"阜新市",value:"2109"},{label:"辽阳市",value:"2110"},{label:"盘锦市",value:"2111"},{label:"铁岭市",value:"2112"},{label:"朝阳市",value:"2113"},{label:"葫芦岛市",value:"2114"}],[{label:"长春市",value:"2201"},{label:"吉林市",value:"2202"},{label:"四平市",value:"2203"},{label:"辽源市",value:"2204"},{label:"通化市",value:"2205"},{label:"白山市",value:"2206"},{label:"松原市",value:"2207"},{label:"白城市",value:"2208"},{label:"延边朝鲜族自治州",value:"2224"}],[{label:"哈尔滨市",value:"2301"},{label:"齐齐哈尔市",value:"2302"},{label:"鸡西市",value:"2303"},{label:"鹤岗市",value:"2304"},{label:"双鸭山市",value:"2305"},{label:"大庆市",value:"2306"},{label:"伊春市",value:"2307"},{label:"佳木斯市",value:"2308"},{label:"七台河市",value:"2309"},{label:"牡丹江市",value:"2310"},{label:"黑河市",value:"2311"},{label:"绥化市",value:"2312"},{label:"大兴安岭地区",value:"2327"}],[{label:"市辖区",value:"3101"}],[{label:"南京市",value:"3201"},{label:"无锡市",value:"3202"},{label:"徐州市",value:"3203"},{label:"常州市",value:"3204"},{label:"苏州市",value:"3205"},{label:"南通市",value:"3206"},{label:"连云港市",value:"3207"},{label:"淮安市",value:"3208"},{label:"盐城市",value:"3209"},{label:"扬州市",value:"3210"},{label:"镇江市",value:"3211"},{label:"泰州市",value:"3212"},{label:"宿迁市",value:"3213"}],[{label:"杭州市",value:"3301"},{label:"宁波市",value:"3302"},{label:"温州市",value:"3303"},{label:"嘉兴市",value:"3304"},{label:"湖州市",value:"3305"},{label:"绍兴市",value:"3306"},{label:"金华市",value:"3307"},{label:"衢州市",value:"3308"},{label:"舟山市",value:"3309"},{label:"台州市",value:"3310"},{label:"丽水市",value:"3311"}],[{label:"合肥市",value:"3401"},{label:"芜湖市",value:"3402"},{label:"蚌埠市",value:"3403"},{label:"淮南市",value:"3404"},{label:"马鞍山市",value:"3405"},{label:"淮北市",value:"3406"},{label:"铜陵市",value:"3407"},{label:"安庆市",value:"3408"},{label:"黄山市",value:"3410"},{label:"滁州市",value:"3411"},{label:"阜阳市",value:"3412"},{label:"宿州市",value:"3413"},{label:"六安市",value:"3415"},{label:"亳州市",value:"3416"},{label:"池州市",value:"3417"},{label:"宣城市",value:"3418"}],[{label:"福州市",value:"3501"},{label:"厦门市",value:"3502"},{label:"莆田市",value:"3503"},{label:"三明市",value:"3504"},{label:"泉州市",value:"3505"},{label:"漳州市",value:"3506"},{label:"南平市",value:"3507"},{label:"龙岩市",value:"3508"},{label:"宁德市",value:"3509"}],[{label:"南昌市",value:"3601"},{label:"景德镇市",value:"3602"},{label:"萍乡市",value:"3603"},{label:"九江市",value:"3604"},{label:"新余市",value:"3605"},{label:"鹰潭市",value:"3606"},{label:"赣州市",value:"3607"},{label:"吉安市",value:"3608"},{label:"宜春市",value:"3609"},{label:"抚州市",value:"3610"},{label:"上饶市",value:"3611"}],[{label:"济南市",value:"3701"},{label:"青岛市",value:"3702"},{label:"淄博市",value:"3703"},{label:"枣庄市",value:"3704"},{label:"东营市",value:"3705"},{label:"烟台市",value:"3706"},{label:"潍坊市",value:"3707"},{label:"济宁市",value:"3708"},{label:"泰安市",value:"3709"},{label:"威海市",value:"3710"},{label:"日照市",value:"3711"},{label:"莱芜市",value:"3712"},{label:"临沂市",value:"3713"},{label:"德州市",value:"3714"},{label:"聊城市",value:"3715"},{label:"滨州市",value:"3716"},{label:"菏泽市",value:"3717"}],[{label:"郑州市",value:"4101"},{label:"开封市",value:"4102"},{label:"洛阳市",value:"4103"},{label:"平顶山市",value:"4104"},{label:"安阳市",value:"4105"},{label:"鹤壁市",value:"4106"},{label:"新乡市",value:"4107"},{label:"焦作市",value:"4108"},{label:"濮阳市",value:"4109"},{label:"许昌市",value:"4110"},{label:"漯河市",value:"4111"},{label:"三门峡市",value:"4112"},{label:"南阳市",value:"4113"},{label:"商丘市",value:"4114"},{label:"信阳市",value:"4115"},{label:"周口市",value:"4116"},{label:"驻马店市",value:"4117"},{label:"省直辖县级行政区划",value:"4190"}],[{label:"武汉市",value:"4201"},{label:"黄石市",value:"4202"},{label:"十堰市",value:"4203"},{label:"宜昌市",value:"4205"},{label:"襄阳市",value:"4206"},{label:"鄂州市",value:"4207"},{label:"荆门市",value:"4208"},{label:"孝感市",value:"4209"},{label:"荆州市",value:"4210"},{label:"黄冈市",value:"4211"},{label:"咸宁市",value:"4212"},{label:"随州市",value:"4213"},{label:"恩施土家族苗族自治州",value:"4228"},{label:"省直辖县级行政区划",value:"4290"}],[{label:"长沙市",value:"4301"},{label:"株洲市",value:"4302"},{label:"湘潭市",value:"4303"},{label:"衡阳市",value:"4304"},{label:"邵阳市",value:"4305"},{label:"岳阳市",value:"4306"},{label:"常德市",value:"4307"},{label:"张家界市",value:"4308"},{label:"益阳市",value:"4309"},{label:"郴州市",value:"4310"},{label:"永州市",value:"4311"},{label:"怀化市",value:"4312"},{label:"娄底市",value:"4313"},{label:"湘西土家族苗族自治州",value:"4331"}],[{label:"广州市",value:"4401"},{label:"韶关市",value:"4402"},{label:"深圳市",value:"4403"},{label:"珠海市",value:"4404"},{label:"汕头市",value:"4405"},{label:"佛山市",value:"4406"},{label:"江门市",value:"4407"},{label:"湛江市",value:"4408"},{label:"茂名市",value:"4409"},{label:"肇庆市",value:"4412"},{label:"惠州市",value:"4413"},{label:"梅州市",value:"4414"},{label:"汕尾市",value:"4415"},{label:"河源市",value:"4416"},{label:"阳江市",value:"4417"},{label:"清远市",value:"4418"},{label:"东莞市",value:"4419"},{label:"中山市",value:"4420"},{label:"潮州市",value:"4451"},{label:"揭阳市",value:"4452"},{label:"云浮市",value:"4453"}],[{label:"南宁市",value:"4501"},{label:"柳州市",value:"4502"},{label:"桂林市",value:"4503"},{label:"梧州市",value:"4504"},{label:"北海市",value:"4505"},{label:"防城港市",value:"4506"},{label:"钦州市",value:"4507"},{label:"贵港市",value:"4508"},{label:"玉林市",value:"4509"},{label:"百色市",value:"4510"},{label:"贺州市",value:"4511"},{label:"河池市",value:"4512"},{label:"来宾市",value:"4513"},{label:"崇左市",value:"4514"}],[{label:"海口市",value:"4601"},{label:"三亚市",value:"4602"},{label:"三沙市",value:"4603"},{label:"儋州市",value:"4604"},{label:"省直辖县级行政区划",value:"4690"}],[{label:"市辖区",value:"5001"},{label:"县",value:"5002"}],[{label:"成都市",value:"5101"},{label:"自贡市",value:"5103"},{label:"攀枝花市",value:"5104"},{label:"泸州市",value:"5105"},{label:"德阳市",value:"5106"},{label:"绵阳市",value:"5107"},{label:"广元市",value:"5108"},{label:"遂宁市",value:"5109"},{label:"内江市",value:"5110"},{label:"乐山市",value:"5111"},{label:"南充市",value:"5113"},{label:"眉山市",value:"5114"},{label:"宜宾市",value:"5115"},{label:"广安市",value:"5116"},{label:"达州市",value:"5117"},{label:"雅安市",value:"5118"},{label:"巴中市",value:"5119"},{label:"资阳市",value:"5120"},{label:"阿坝藏族羌族自治州",value:"5132"},{label:"甘孜藏族自治州",value:"5133"},{label:"凉山彝族自治州",value:"5134"}],[{label:"贵阳市",value:"5201"},{label:"六盘水市",value:"5202"},{label:"遵义市",value:"5203"},{label:"安顺市",value:"5204"},{label:"毕节市",value:"5205"},{label:"铜仁市",value:"5206"},{label:"黔西南布依族苗族自治州",value:"5223"},{label:"黔东南苗族侗族自治州",value:"5226"},{label:"黔南布依族苗族自治州",value:"5227"}],[{label:"昆明市",value:"5301"},{label:"曲靖市",value:"5303"},{label:"玉溪市",value:"5304"},{label:"保山市",value:"5305"},{label:"昭通市",value:"5306"},{label:"丽江市",value:"5307"},{label:"普洱市",value:"5308"},{label:"临沧市",value:"5309"},{label:"楚雄彝族自治州",value:"5323"},{label:"红河哈尼族彝族自治州",value:"5325"},{label:"文山壮族苗族自治州",value:"5326"},{label:"西双版纳傣族自治州",value:"5328"},{label:"大理白族自治州",value:"5329"},{label:"德宏傣族景颇族自治州",value:"5331"},{label:"怒江傈僳族自治州",value:"5333"},{label:"迪庆藏族自治州",value:"5334"}],[{label:"拉萨市",value:"5401"},{label:"日喀则市",value:"5402"},{label:"昌都市",value:"5403"},{label:"林芝市",value:"5404"},{label:"山南市",value:"5405"},{label:"那曲地区",value:"5424"},{label:"阿里地区",value:"5425"}],[{label:"西安市",value:"6101"},{label:"铜川市",value:"6102"},{label:"宝鸡市",value:"6103"},{label:"咸阳市",value:"6104"},{label:"渭南市",value:"6105"},{label:"延安市",value:"6106"},{label:"汉中市",value:"6107"},{label:"榆林市",value:"6108"},{label:"安康市",value:"6109"},{label:"商洛市",value:"6110"}],[{label:"兰州市",value:"6201"},{label:"嘉峪关市",value:"6202"},{label:"金昌市",value:"6203"},{label:"白银市",value:"6204"},{label:"天水市",value:"6205"},{label:"武威市",value:"6206"},{label:"张掖市",value:"6207"},{label:"平凉市",value:"6208"},{label:"酒泉市",value:"6209"},{label:"庆阳市",value:"6210"},{label:"定西市",value:"6211"},{label:"陇南市",value:"6212"},{label:"临夏回族自治州",value:"6229"},{label:"甘南藏族自治州",value:"6230"}],[{label:"西宁市",value:"6301"},{label:"海东市",value:"6302"},{label:"海北藏族自治州",value:"6322"},{label:"黄南藏族自治州",value:"6323"},{label:"海南藏族自治州",value:"6325"},{label:"果洛藏族自治州",value:"6326"},{label:"玉树藏族自治州",value:"6327"},{label:"海西蒙古族藏族自治州",value:"6328"}],[{label:"银川市",value:"6401"},{label:"石嘴山市",value:"6402"},{label:"吴忠市",value:"6403"},{label:"固原市",value:"6404"},{label:"中卫市",value:"6405"}],[{label:"乌鲁木齐市",value:"6501"},{label:"克拉玛依市",value:"6502"},{label:"吐鲁番市",value:"6504"},{label:"哈密市",value:"6505"},{label:"昌吉回族自治州",value:"6523"},{label:"博尔塔拉蒙古自治州",value:"6527"},{label:"巴音郭楞蒙古自治州",value:"6528"},{label:"阿克苏地区",value:"6529"},{label:"克孜勒苏柯尔克孜自治州",value:"6530"},{label:"喀什地区",value:"6531"},{label:"和田地区",value:"6532"},{label:"伊犁哈萨克自治州",value:"6540"},{label:"塔城地区",value:"6542"},{label:"阿勒泰地区",value:"6543"},{label:"自治区直辖县级行政区划",value:"6590"}],[{label:"台北",value:"6601"},{label:"高雄",value:"6602"},{label:"基隆",value:"6603"},{label:"台中",value:"6604"},{label:"台南",value:"6605"},{label:"新竹",value:"6606"},{label:"嘉义",value:"6607"},{label:"宜兰",value:"6608"},{label:"桃园",value:"6609"},{label:"苗栗",value:"6610"},{label:"彰化",value:"6611"},{label:"南投",value:"6612"},{label:"云林",value:"6613"},{label:"屏东",value:"6614"},{label:"台东",value:"6615"},{label:"花莲",value:"6616"},{label:"澎湖",value:"6617"}],[{label:"香港岛",value:"6701"},{label:"九龙",value:"6702"},{label:"新界",value:"6703"}],[{label:"澳门半岛",value:"6801"},{label:"氹仔岛",value:"6802"},{label:"路环岛",value:"6803"},{label:"路氹城",value:"6804"}]],u=t;l.default=u}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'components/axb-checkbox/axb-checkbox-item';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/axb-checkbox/axb-checkbox-item.js';

define('components/axb-checkbox/axb-checkbox-item.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/axb-checkbox/axb-checkbox-item"], {
  "002b": function b(e, t, n) {},
  "0b85": function b85(e, t, n) {
    "use strict";

    (function (e) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;

      var u = function u() {
        return n.e("node-modules/@dcloudio/uni-ui/lib/uni-badge/uni-badge").then(n.bind(null, "8263"));
      },
          o = function o(e, t, n) {
        var u,
            o,
            i,
            r,
            a = function a() {
          var c = new Date().getTime(),
              l = c - o;
          l < t && l >= 0 ? (clearTimeout(u), u = setTimeout(a, t - l)) : (clearTimeout(u), u = null, n || (e.apply(i, r), u || (i = r = null)));
        };

        return function () {
          i = this, r = arguments, o = new Date().getTime();
          var c = n && !u;
          u || (u = setTimeout(a, t)), c && (e.apply(i, r), i = r = null);
        };
      },
          i = e.getSystemInfoSync(),
          r = i.windowWidth,
          a = (i.windowHeight, {
        components: {
          uniBadge: u
        },
        props: {
          name: {
            type: String,
            default: ""
          },
          value: {
            default: null
          },
          checked: {
            type: [Boolean, Number],
            default: !1
          },
          tipqty: {
            type: [String, Number],
            default: ""
          }
        },
        computed: {
          widthDefault: function widthDefault() {
            return (Number(r) - Number(80)) / Number(4);
          },
          activeStyle: function activeStyle() {
            return "background: #108ee9;color: #FFF;border-color: #3c7ef6; ";
          },
          itemStyle: function itemStyle() {
            return "background: #f7f7f7;color: #7d7d7d;";
          }
        },
        data: function data() {
          return {};
        },
        methods: {
          handleChange: o(c, 200, !0)
        }
      });

      function c() {
        this.$emit("change", this.value);
      }

      t.default = a;
    }).call(this, n("6e42")["default"]);
  },
  "112b": function b(e, t, n) {
    "use strict";

    n.r(t);
    var u = n("0b85"),
        o = n.n(u);

    for (var i in u) {
      "default" !== i && function (e) {
        n.d(t, e, function () {
          return u[e];
        });
      }(i);
    }

    t["default"] = o.a;
  },
  "285e": function e(_e, t, n) {
    "use strict";

    var u = function u() {
      var e = this,
          t = e.$createElement;
      e._self._c;
    },
        o = [];

    n.d(t, "a", function () {
      return u;
    }), n.d(t, "b", function () {
      return o;
    });
  },
  "54b2": function b2(e, t, n) {
    "use strict";

    var u = n("002b"),
        o = n.n(u);
    o.a;
  },
  "95de": function de(e, t, n) {
    "use strict";

    n.r(t);
    var u = n("285e"),
        o = n("112b");

    for (var i in o) {
      "default" !== i && function (e) {
        n.d(t, e, function () {
          return o[e];
        });
      }(i);
    }

    n("54b2");
    var r = n("2877"),
        a = Object(r["a"])(o["default"], u["a"], u["b"], !1, null, null, null);
    t["default"] = a.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/axb-checkbox/axb-checkbox-item-create-component', {
  'components/axb-checkbox/axb-checkbox-item-create-component': function componentsAxbCheckboxAxbCheckboxItemCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("95de"));
  }
}, [['components/axb-checkbox/axb-checkbox-item-create-component']]]);
});
require('components/axb-checkbox/axb-checkbox-item.js');
__wxRoute = 'components/axb-checkbox/axb-checkbox';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/axb-checkbox/axb-checkbox.js';

define('components/axb-checkbox/axb-checkbox.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/axb-checkbox/axb-checkbox"], {
  1840: function _(e, t, i) {
    "use strict";

    i.r(t);
    var n = i("6a87"),
        c = i("eca6");

    for (var a in c) {
      "default" !== a && function (e) {
        i.d(t, e, function () {
          return c[e];
        });
      }(a);
    }

    i("dc79");
    var u = i("2877"),
        s = Object(u["a"])(c["default"], n["a"], n["b"], !1, null, null, null);
    t["default"] = s.exports;
  },
  "47ef": function ef(e, t, i) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;

    var n = function n() {
      return i.e("components/axb-checkbox/axb-checkbox-item").then(i.bind(null, "95de"));
    },
        c = {
      props: {
        list: {
          type: Array,
          default: []
        },
        multi: {
          type: Boolean,
          default: !1
        }
      },
      components: {
        filterRadioItem: n
      },
      data: function data() {
        return {
          items: this.list,
          resMulti: []
        };
      },
      created: function created() {},
      computed: {},
      methods: {
        handleChange: function handleChange(e) {
          var t = [];

          if ("all" === e) {
            var i = this.items.find(function (t) {
              return t.value === e;
            });
            this.items.forEach(function (e) {
              var n = {};
              n.name = e.name, n.value = e.value, n.checked = !i.checked, n.Quantity = e.Quantity, t.push(n);
            });
          } else for (var n = 0; n < this.items.length; n++) {
            var c = {};
            c.name = this.items[n].name, c.value = this.items[n].value, c.Quantity = this.items[n].Quantity, this.multi ? this.items[n].value === e ? c.checked = !this.items[n].checked : c.checked = this.items[n].checked : this.items[n].value === e ? c.checked = !this.items[n].checked : c.checked = !1, t.push(c);
          }

          if (this.multi && "all" === t[0].value) {
            var a = t.slice(1),
                u = a.every(function (e) {
              return e.checked;
            });
            t[0].checked = u;
          }

          this.items = t;
        },
        radioChange: function radioChange(e) {
          this.handleChange(e);
          var t = [];
          this.multi && this.items.forEach(function (e) {
            e.checked && t.push(e.value);
          });
          var i = this.items.find(function (t) {
            return t.value === e;
          }),
              n = this.multi ? t : i.checked ? e : null;
          this.$emit("change", n);
        },
        reset: function reset() {
          this.items = this.list;
        },
        setItems: function setItems(e) {
          this.items = e;
        }
      }
    };

    t.default = c;
  },
  "6a87": function a87(e, t, i) {
    "use strict";

    var n = function n() {
      var e = this,
          t = e.$createElement;
      e._self._c;
    },
        c = [];

    i.d(t, "a", function () {
      return n;
    }), i.d(t, "b", function () {
      return c;
    });
  },
  dc79: function dc79(e, t, i) {
    "use strict";

    var n = i("f2e8"),
        c = i.n(n);
    c.a;
  },
  eca6: function eca6(e, t, i) {
    "use strict";

    i.r(t);
    var n = i("47ef"),
        c = i.n(n);

    for (var a in n) {
      "default" !== a && function (e) {
        i.d(t, e, function () {
          return n[e];
        });
      }(a);
    }

    t["default"] = c.a;
  },
  f2e8: function f2e8(e, t, i) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/axb-checkbox/axb-checkbox-create-component', {
  'components/axb-checkbox/axb-checkbox-create-component': function componentsAxbCheckboxAxbCheckboxCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("1840"));
  }
}, [['components/axb-checkbox/axb-checkbox-create-component']]]);
});
require('components/axb-checkbox/axb-checkbox.js');
__wxRoute = 'components/chunLei-popups/chunLei-popups';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/chunLei-popups/chunLei-popups.js';

define('components/chunLei-popups/chunLei-popups.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/chunLei-popups/chunLei-popups"], {
  "36dc": function dc(t, e, n) {
    "use strict";

    var o = function o() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        u = [];

    n.d(e, "a", function () {
      return o;
    }), n.d(e, "b", function () {
      return u;
    });
  },
  6426: function _(t, e, n) {
    "use strict";

    var o = n("f0a3"),
        u = n.n(o);
    u.a;
  },
  "86ae": function ae(t, e, n) {
    "use strict";

    n.r(e);
    var o = n("bbc1"),
        u = n.n(o);

    for (var a in o) {
      "default" !== a && function (t) {
        n.d(e, t, function () {
          return o[t];
        });
      }(a);
    }

    e["default"] = u.a;
  },
  b091: function b091(t, e, n) {
    "use strict";

    n.r(e);
    var o = n("36dc"),
        u = n("86ae");

    for (var a in u) {
      "default" !== a && function (t) {
        n.d(e, t, function () {
          return u[t];
        });
      }(a);
    }

    n("6426");
    var p = n("2877"),
        r = Object(p["a"])(u["default"], o["a"], o["b"], !1, null, "27fa1cd9", null);
    e["default"] = r.exports;
  },
  bbc1: function bbc1(t, e, n) {
    "use strict";

    (function (t) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var o = u(n("a34a"));

      function u(t) {
        return t && t.__esModule ? t : {
          default: t
        };
      }

      function a(t, e, n, o, u, a, p) {
        try {
          var r = t[a](p),
              c = r.value;
        } catch (i) {
          return void n(i);
        }

        r.done ? e(c) : Promise.resolve(c).then(o, u);
      }

      function p(t) {
        return function () {
          var e = this,
              n = arguments;
          return new Promise(function (o, u) {
            var p = t.apply(e, n);

            function r(t) {
              a(p, o, u, r, c, "next", t);
            }

            function c(t) {
              a(p, o, u, r, c, "throw", t);
            }

            r(void 0);
          });
        };
      }

      var r = {
        props: {
          placement: {
            type: String,
            default: "top-start"
          },
          direction: {
            type: String,
            default: "column"
          },
          x: {
            type: Number,
            default: 0
          },
          y: {
            type: Number,
            default: 0
          },
          value: {
            type: Boolean,
            default: !1
          },
          popData: {
            type: Array,
            default: function _default() {
              return [];
            }
          },
          theme: {
            type: String,
            default: "light"
          }
        },
        data: function data() {
          return {
            popupsTop: "0px",
            popupsLeft: "0px"
          };
        },
        mounted: function mounted() {
          this.popupsPosition();
        },
        methods: {
          tapMask: function tapMask() {
            this.$emit("input", !this.value);
          },
          tapItem: function tapItem(t) {
            this.$emit("tapPopup", t), this.$emit("input", !this.value);
          },
          popupsPosition: function () {
            var e = p(o.default.mark(function e() {
              var n,
                  u,
                  a = this;
              return o.default.wrap(function (e) {
                while (1) {
                  switch (e.prev = e.next) {
                    case 0:
                      return n = new Promise(function (e, n) {
                        t.getSystemInfo({
                          success: function success(t) {
                            var n;
                            n = "android" == t.platform ? t.statusBarHeight + 50 : t.statusBarHeight + 45, e(n);
                          }
                        });
                      }), e.next = 3, n;

                    case 3:
                      e.sent, u = t.createSelectorQuery().in(this).select(".popups"), u.fields({
                        size: !0
                      }, function (t) {
                        var e = t.width,
                            n = t.height,
                            o = a.transformRpx(a.y),
                            u = a.transformRpx(a.x);

                        switch (a.placement) {
                          case "top-start":
                            a.popupsTop = "".concat(o + 9, "px"), a.popupsLeft = "".concat(u - 15, "px");
                            break;

                          case "top-end":
                            a.popupsTop = "".concat(o + 9, "px"), a.popupsLeft = "".concat(u + 15 - e, "px");
                            break;

                          case "bottom-start":
                            a.popupsTop = "".concat(o - 18 - n, "px"), a.popupsLeft = "".concat(u - 15, "px");
                            break;

                          case "bottom-end":
                            a.popupsTop = "".concat(o - 9 - n, "px"), a.popupsLeft = "".concat(u + 15 - e, "px");
                            break;
                        }
                      }).exec();

                    case 6:
                    case "end":
                      return e.stop();
                  }
                }
              }, e, this);
            }));

            function n() {
              return e.apply(this, arguments);
            }

            return n;
          }(),
          transformRpx: function transformRpx(e) {
            return e * t.getSystemInfoSync().screenWidth / 375;
          }
        }
      };
      e.default = r;
    }).call(this, n("6e42")["default"]);
  },
  f0a3: function f0a3(t, e, n) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/chunLei-popups/chunLei-popups-create-component', {
  'components/chunLei-popups/chunLei-popups-create-component': function componentsChunLeiPopupsChunLeiPopupsCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("b091"));
  }
}, [['components/chunLei-popups/chunLei-popups-create-component']]]);
});
require('components/chunLei-popups/chunLei-popups.js');
__wxRoute = 'components/gird';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/gird.js';

define('components/gird.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/gird"], {
  "0b01": function b01(t, n, u) {
    "use strict";

    var e = u("8d5a"),
        o = u.n(e);
    o.a;
  },
  3716: function _(t, n, u) {
    "use strict";

    (function (t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var u = {
        name: "uni-grid",
        props: {
          options: Array,
          type: {
            type: String,
            default: "square"
          },
          columnNum: {
            type: [Number, String],
            default: 3
          },
          showOutBorder: {
            type: [Boolean, String],
            default: !0
          },
          showBorder: {
            type: [Boolean, String],
            default: !0
          }
        },
        data: function data() {
          return {};
        },
        created: function created() {
          this.columnNumber = this.gridGroup[0].length;
        },
        computed: {
          gridGroup: function gridGroup() {
            var t = this,
                n = [],
                u = [];

            if (this.options && this.options.forEach(function (e, o) {
              u.push(e), o % t.columnNum === t.columnNum - 1 && (n.push(u), u = []);
            }), u.length > 0) {
              if (this.columnNum > u.length) for (var e = 0, o = u.length; e < this.columnNum - o; e++) {
                u.push({
                  seize: !0
                });
              }
              n.push(u);
            }

            return u = null, n;
          }
        },
        methods: {
          onClick: function onClick(n, u, e) {
            t.navigateTo({
              url: e + "?num=" + u.toString() + "&index=" + n.toString()
            });
          }
        }
      };
      n.default = u;
    }).call(this, u("6e42")["default"]);
  },
  "7caf": function caf(t, n, u) {
    "use strict";

    u.r(n);
    var e = u("8da4"),
        o = u("bcc3");

    for (var r in o) {
      "default" !== r && function (t) {
        u.d(n, t, function () {
          return o[t];
        });
      }(r);
    }

    u("0b01");
    var i = u("2877"),
        a = Object(i["a"])(o["default"], e["a"], e["b"], !1, null, null, null);
    n["default"] = a.exports;
  },
  "8d5a": function d5a(t, n, u) {},
  "8da4": function da4(t, n, u) {
    "use strict";

    var e = function e() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        o = [];

    u.d(n, "a", function () {
      return e;
    }), u.d(n, "b", function () {
      return o;
    });
  },
  bcc3: function bcc3(t, n, u) {
    "use strict";

    u.r(n);
    var e = u("3716"),
        o = u.n(e);

    for (var r in e) {
      "default" !== r && function (t) {
        u.d(n, t, function () {
          return e[t];
        });
      }(r);
    }

    n["default"] = o.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/gird-create-component', {
  'components/gird-create-component': function componentsGirdCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("7caf"));
  }
}, [['components/gird-create-component']]]);
});
require('components/gird.js');
__wxRoute = 'components/m-icon/m-icon';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/m-icon/m-icon.js';

define('components/m-icon/m-icon.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/m-icon/m-icon"], {
  "1ab9": function ab9(t, n, e) {},
  "77ba": function ba(t, n, e) {
    "use strict";

    var u = e("1ab9"),
        c = e.n(u);
    c.a;
  },
  "7b47": function b47(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("d6ac"),
        c = e("9fdb");

    for (var r in c) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return c[t];
        });
      }(r);
    }

    e("77ba");
    var i = e("2877"),
        a = Object(i["a"])(c["default"], u["a"], u["b"], !1, null, null, null);
    n["default"] = a.exports;
  },
  "9fdb": function fdb(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("d5c3"),
        c = e.n(u);

    for (var r in u) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(r);
    }

    n["default"] = c.a;
  },
  d5c3: function d5c3(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var u = {
      props: {
        type: String,
        color: String,
        size: {
          type: [Number, String],
          default: 24
        }
      },
      computed: {
        fontSize: function fontSize() {
          var t = Number(this.size);
          return t = isNaN(t) ? 24 : t, "".concat(t, "px");
        }
      },
      methods: {
        onClick: function onClick() {
          this.$emit("click");
        }
      }
    };
    n.default = u;
  },
  d6ac: function d6ac(t, n, e) {
    "use strict";

    var u = function u() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        c = [];

    e.d(n, "a", function () {
      return u;
    }), e.d(n, "b", function () {
      return c;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/m-icon/m-icon-create-component', {
  'components/m-icon/m-icon-create-component': function componentsMIconMIconCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("7b47"));
  }
}, [['components/m-icon/m-icon-create-component']]]);
});
require('components/m-icon/m-icon.js');
__wxRoute = 'components/m-input';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/m-input.js';

define('components/m-input.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/m-input"], {
  "0c02": function c02(t, n, e) {},
  4426: function _(t, n, e) {
    "use strict";

    var u = function u() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        i = [];

    e.d(n, "a", function () {
      return u;
    }), e.d(n, "b", function () {
      return i;
    });
  },
  "45bd": function bd(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("aa43"),
        i = e.n(u);

    for (var o in u) {
      "default" !== o && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(o);
    }

    n["default"] = i.a;
  },
  6244: function _(t, n, e) {
    "use strict";

    var u = e("0c02"),
        i = e.n(u);
    i.a;
  },
  aa43: function aa43(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;

    var u = function u() {
      return e.e("components/m-icon/m-icon").then(e.bind(null, "7b47"));
    },
        i = {
      components: {
        mIcon: u
      },
      props: {
        type: String,
        value: String,
        placeholder: String,
        clearable: {
          type: [Boolean, String],
          default: !1
        },
        displayable: {
          type: [Boolean, String],
          default: !1
        },
        focus: {
          type: [Boolean, String],
          default: !1
        }
      },
      model: {
        prop: "value",
        event: "input"
      },
      data: function data() {
        return {
          showPassword: !1,
          isFocus: !1
        };
      },
      computed: {
        inputType: function inputType() {
          var t = this.type;
          return "password" === t ? "text" : t;
        },
        clearable_: function clearable_() {
          return "false" !== String(this.clearable);
        },
        displayable_: function displayable_() {
          return "false" !== String(this.displayable);
        },
        focus_: function focus_() {
          return "false" !== String(this.focus);
        }
      },
      methods: {
        clear: function clear() {
          this.$emit("input", "");
        },
        display: function display() {
          this.showPassword = !this.showPassword;
        },
        onFocus: function onFocus() {
          this.isFocus = !0;
        },
        onBlur: function onBlur() {
          var t = this;
          this.$nextTick(function () {
            t.isFocus = !1;
          });
        },
        onInput: function onInput(t) {
          this.$emit("input", t.target.value);
        }
      }
    };

    n.default = i;
  },
  cb80: function cb80(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("4426"),
        i = e("45bd");

    for (var o in i) {
      "default" !== o && function (t) {
        e.d(n, t, function () {
          return i[t];
        });
      }(o);
    }

    e("6244");
    var a = e("2877"),
        r = Object(a["a"])(i["default"], u["a"], u["b"], !1, null, null, null);
    n["default"] = r.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/m-input-create-component', {
  'components/m-input-create-component': function componentsMInputCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("cb80"));
  }
}, [['components/m-input-create-component']]]);
});
require('components/m-input.js');
__wxRoute = 'components/uni-segmented-control/uni-segmented-control';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-segmented-control/uni-segmented-control.js';

define('components/uni-segmented-control/uni-segmented-control.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-segmented-control/uni-segmented-control"], {
  "6ab8": function ab8(t, n, e) {},
  "81bf": function bf(t, n, e) {
    "use strict";

    e.r(n);
    var r = e("d569"),
        u = e("cbe7");

    for (var c in u) {
      "default" !== c && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(c);
    }

    e("b26b");
    var a = e("2877"),
        i = Object(a["a"])(u["default"], r["a"], r["b"], !1, null, null, null);
    n["default"] = i.exports;
  },
  "881a": function a(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var r = {
      name: "UniSegmentedControl",
      props: {
        current: {
          type: Number,
          default: 0
        },
        values: {
          type: Array,
          default: function _default() {
            return [];
          }
        },
        activeColor: {
          type: String,
          default: "#007aff"
        },
        styleType: {
          type: String,
          default: "button"
        }
      },
      data: function data() {
        return {
          currentIndex: 0
        };
      },
      watch: {
        current: function current(t) {
          t !== this.currentIndex && (this.currentIndex = t);
        }
      },
      created: function created() {
        this.currentIndex = this.current;
      },
      methods: {
        _onClick: function _onClick(t) {
          this.currentIndex !== t && (this.currentIndex = t), this.$emit("clickItem", t);
        }
      }
    };
    n.default = r;
  },
  b26b: function b26b(t, n, e) {
    "use strict";

    var r = e("6ab8"),
        u = e.n(r);
    u.a;
  },
  cbe7: function cbe7(t, n, e) {
    "use strict";

    e.r(n);
    var r = e("881a"),
        u = e.n(r);

    for (var c in r) {
      "default" !== c && function (t) {
        e.d(n, t, function () {
          return r[t];
        });
      }(c);
    }

    n["default"] = u.a;
  },
  d569: function d569(t, n, e) {
    "use strict";

    var r = function r() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        u = [];

    e.d(n, "a", function () {
      return r;
    }), e.d(n, "b", function () {
      return u;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-segmented-control/uni-segmented-control-create-component', {
  'components/uni-segmented-control/uni-segmented-control-create-component': function componentsUniSegmentedControlUniSegmentedControlCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("81bf"));
  }
}, [['components/uni-segmented-control/uni-segmented-control-create-component']]]);
});
require('components/uni-segmented-control/uni-segmented-control.js');
__wxRoute = 'components/w-picker/w-picker';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/w-picker/w-picker.js';

define('components/w-picker/w-picker.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/w-picker/w-picker"], {
  "1e4b": function e4b(a, t, e) {
    "use strict";

    e.r(t);
    var r = e("f8ec"),
        l = e("73a2");

    for (var s in l) {
      "default" !== s && function (a) {
        e.d(t, a, function () {
          return l[a];
        });
      }(s);
    }

    e("b842");
    var n = e("2877"),
        d = Object(n["a"])(l["default"], r["a"], r["b"], !1, null, null, null);
    t["default"] = d.exports;
  },
  "73a2": function a2(a, t, e) {
    "use strict";

    e.r(t);
    var r = e("a4aa"),
        l = e.n(r);

    for (var s in r) {
      "default" !== s && function (a) {
        e.d(t, a, function () {
          return r[a];
        });
      }(s);
    }

    t["default"] = l.a;
  },
  "8aee": function aee(a, t, e) {},
  a4aa: function a4aa(a, t, e) {
    "use strict";

    (function (a) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var r = d(e("ac4d")),
          l = d(e("df25")),
          s = d(e("307b")),
          n = d(e("9b06"));

      function d(a) {
        return a && a.__esModule ? a : {
          default: a
        };
      }

      function u(a, t) {
        for (var e = 0; e < t.length; e++) {
          if (a === t[e]) return !0;
        }

        throw new Error("mode无效，请选择有效的mode!");
      }

      var i = {
        data: function data() {
          return {
            result: [],
            data: {},
            checkArr: [],
            checkValue: [],
            pickVal: [],
            showPicker: !1,
            resultStr: "",
            itemHeight: "height: ".concat(a.upx2px(88), "px;")
          };
        },
        computed: {},
        props: {
          mode: {
            type: String,
            validator: function validator(a) {
              var t = ["half", "date", "dateTime", "yearMonth", "time", "region", "selector", "limit", "limitHour", "range", "linkage"];
              return u(a, t);
            },
            default: function _default() {
              return "date";
            }
          },
          themeColor: {
            type: String,
            default: function _default() {
              return "#f5a200";
            }
          },
          startYear: {
            type: [String, Number],
            default: function _default() {
              return "1970";
            }
          },
          endYear: {
            type: [String, Number],
            default: function _default() {
              return new Date().getFullYear() + "";
            }
          },
          defaultVal: {
            type: Array,
            default: function _default() {
              return [0, 0, 0, 0, 0, 0, 0];
            }
          },
          areaCode: {
            type: Array,
            default: function _default() {
              return null;
            }
          },
          hideArea: {
            type: Boolean,
            default: !1
          },
          step: {
            type: [String, Number],
            default: 1
          },
          current: {
            type: Boolean,
            default: !1
          },
          selectList: {
            type: Array,
            default: function _default() {
              return [];
            }
          },
          dayStep: {
            type: [String, Number],
            default: 7
          },
          startHour: {
            type: [String, Number],
            default: 8
          },
          endHour: {
            type: [String, Number],
            default: 20
          },
          minuteStep: {
            type: [String, Number],
            default: 10
          },
          afterStep: {
            type: [String, Number],
            default: 30
          },
          disabledAfter: {
            type: Boolean,
            default: !1
          },
          linkList: {
            type: Array,
            default: function _default() {
              return [];
            }
          },
          value: {
            type: Array,
            default: function _default() {
              return null;
            }
          },
          level: {
            type: [Number, String],
            default: 2
          }
        },
        watch: {
          mode: function mode() {
            this.initData();
          },
          selectList: function selectList() {
            this.initData();
          },
          linkList: function linkList() {
            this.initData();
          }
        },
        methods: {
          getLinkageVal: function getLinkageVal(a, t) {
            var e = [],
                r = a,
                l = this.linkList,
                s = this.level,
                n = 0,
                d = [],
                u = [],
                i = "",
                c = [];

            switch (s) {
              case 2:
                e = [0, 0];
                break;

              case 3:
                e = [0, 0, 0];
                break;
            }

            var h = function a(l, n, h) {
              return n < s && (c.push(l), l.map(function (l, s) {
                (t ? l.value == r[n] : l.label == r[n]) && (e[n] = s, d.push(l.label), u.push(l.value), i += l.label, l.children && a(l.children, n += 1));
              }), {
                data: c,
                dval: e,
                checkArr: d,
                checkValue: u,
                resultStr: i
              });
            };

            return h(l, n);
          },
          getRegionVal: function getRegionVal(a, t) {
            var e = a[0],
                n = a[1],
                d = 0,
                u = 0,
                i = 0,
                c = [],
                h = this;
            if (r.default.map(function (a, r) {
              (t ? a.value == e : a.label == e) && (d = r);
            }), l.default[d].map(function (a, e) {
              (t ? a.value == n : a.label == n) && (u = e);
            }), h.hideArea) c = [d, u];else {
              var o = a[2];
              s.default[d][u].map(function (a, e) {
                (t ? a.value == o : a.label == o) && (i = e);
              }), c = [d, u, i];
            }
            return c;
          },
          useCurrent: function useCurrent() {
            var a = new Date(),
                t = a.getFullYear().toString(),
                e = this.formatNum(a.getMonth() + 1).toString(),
                r = this.formatNum(a.getDate()).toString(),
                l = this.formatNum(a.getHours()).toString(),
                s = this.formatNum(a.getMinutes()).toString(),
                n = this.formatNum(a.getSeconds()).toString();
            return this.current ? [t, e, r, l, (Math.floor(s / this.step) * this.step).toString(), n] : this.defaultVal;
          },
          formatNum: function formatNum(a) {
            return a < 10 ? "0" + a : a + "";
          },
          maskTap: function maskTap() {
            this.showPicker = !1;
          },
          show: function show() {
            this.showPicker = !0;
          },
          hide: function hide() {
            this.showPicker = !1;
          },
          pickerCancel: function pickerCancel() {
            this.$emit("cancel", {
              checkArr: this.checkArr,
              defaultVal: this.pickVal
            }), this.showPicker = !1;
          },
          pickerConfirm: function pickerConfirm(t) {
            switch (this.mode) {
              case "range":
                var e = this.checkArr,
                    r = new Date(e[0], e[1], e[2]),
                    l = new Date(e[3], e[4], e[5]),
                    s = this.pickVal;
                r > l ? (this.checkArr = [e[3], e[4], e[5], e[0], e[1], e[2]], this.pickVal = [s[4], s[5], s[6], 0, s[0], s[1], s[2]], this.$emit("confirm", {
                  checkArr: this.checkArr,
                  from: e[3] + "-" + e[4] + "-" + e[5],
                  to: e[0] + "-" + e[1] + "-" + e[2],
                  defaultVal: this.pickVal,
                  result: this.resultStr
                })) : this.$emit("confirm", {
                  checkArr: this.checkArr,
                  from: e[0] + "-" + e[1] + "-" + e[2],
                  to: e[3] + "-" + e[4] + "-" + e[5],
                  defaultVal: this.pickVal,
                  result: this.resultStr
                });
                break;

              case "limit":
                var n = new Date().getTime(),
                    d = new Date(this.resultStr.replace(/-/g, "/")).getTime();
                if (n > d) return void a.showModal({
                  title: "提示",
                  content: "选择时间必须大于当前时间",
                  confirmColor: this.themeColor
                });
                this.$emit("confirm", {
                  checkArr: this.checkArr,
                  defaultVal: this.pickVal,
                  result: this.resultStr
                });
                break;

              case "region":
              case "linkage":
                this.$emit("confirm", {
                  checkArr: this.checkArr,
                  checkValue: this.checkValue,
                  defaultVal: this.pickVal,
                  result: this.resultStr
                });
                break;

              default:
                this.$emit("confirm", {
                  checkArr: this.checkArr,
                  defaultVal: this.pickVal,
                  result: this.resultStr
                });
                break;
            }

            this.showPicker = !1;
          },
          bindChange: function bindChange(a) {
            var t,
                e,
                r,
                d,
                u,
                i,
                c,
                h,
                o,
                f = this,
                m = a.detail.value,
                y = "",
                g = "",
                k = "",
                b = "",
                v = "",
                p = "",
                A = f.checkArr,
                S = [],
                V = [],
                w = f.mode;

            switch (w) {
              case "limitHour":
                if (d = f.data.date[m[0]], u = f.data.areas[m[1]], f.data.hours[m[2]], d.value != A[0].value) {
                  m[1] = 0, m[2] = 0;
                  var H = n.default.limitHour.initAreas(d);
                  f.data.areas = H;
                  var D = n.default.limitHour.initHours(d, f.data.areas[m[1]]);
                  f.data.hours = D;
                }

                if (u.value != A[1].value) {
                  m[2] = 0;
                  var N = n.default.limitHour.initHours(d, f.data.areas[m[1]]);
                  f.data.hours = N;
                }

                i = f.data.date[m[0]] || f.data.date[f.data.date.length - 1], c = f.data.areas[m[1]] || f.data.areas[f.data.areas.length - 1], h = f.data.hours[m[2]] || f.data.hours[f.data.hours.length - 1], f.checkArr = [i, c, h], f.resultStr = "".concat(i.value + " " + c.label + " " + h.label + "时");
                break;

              case "limit":
                if (d = f.data.date[m[0]], u = f.data.hours[m[1]], d.value != A[0].value) {
                  var M = n.default.limit.initHours(f.startHour, f.endHour, f.minuteStep, f.afterStep, d.value),
                      C = n.default.limit.initMinutes(f.startHour, f.endHour, f.minuteStep, f.afterStep, d.value, u.value);
                  f.data.hours = M, f.data.minutes = C;
                }

                if (u.value != A[1].value) {
                  var L = n.default.limit.initMinutes(f.startHour, f.endHour, f.minuteStep, f.afterStep, d.value, u.value);
                  f.data.minutes = L;
                }

                i = f.data.date[m[0]] || f.data.date[f.data.date.length - 1], h = f.data.hours[m[1]] || f.data.hours[f.data.hours.length - 1], o = f.data.minutes[m[2]] || f.data.minutes[f.data.minutes.length - 1], f.checkArr = [i, h, o], f.resultStr = "".concat(i.value + " " + h.value + ":" + o.value + ":00");
                break;

              case "range":
                var $ = f.data.fyears[m[0]] || f.data.fyears[f.data.fyears.length - 1],
                    T = f.data.fmonths[m[1]] || f.data.fmonths[f.data.fmonths.length - 1],
                    Y = f.data.fdays[m[2]] || f.data.fdays[f.data.fdays.length - 1],
                    P = f.data.tyears[m[4]] || f.data.tyears[f.data.tyears.length - 1],
                    x = f.data.tmonths[m[5]] || f.data.tmonths[f.data.tmonths.length - 1],
                    _ = f.data.tdays[m[6]] || f.data.tdays[f.data.tdays.length - 1];

                $ != A[0] && (S = n.default.range.initDays($, T), f.data.fdays = S), T != A[1] && (S = n.default.range.initDays($, T), f.data.fdays = S), P != A[3] && (S = n.default.range.initDays(P, x), f.data.tdays = S), x != A[4] && (S = n.default.range.initDays(P, x), f.data.tdays = S), f.checkArr = [$, T, Y, P, x, _], f.resultStr = "".concat($ + "-" + T + "-" + Y + "至" + P + "-" + x + "-" + _);
                break;

              case "half":
                y = f.data.years[m[0]] || f.data.years[f.data.years.length - 1], g = f.data.months[m[1]] || f.data.months[f.data.months.length - 1], k = f.data.days[m[2]] || f.data.days[f.data.days.length - 1], r = f.data.areas[m[3]] || f.data.areas[f.data.areas.length - 1], y != A[0] && (S = n.default.date.initDays(y, g, f.disabledAfter), V = n.default.date.initMonths(y, f.disabledAfter), f.data.days = S, f.data.months = V), g != A[1] && (S = n.default.date.initDays(y, g, f.disabledAfter), f.data.days = S), f.checkArr = [y, g, k, r], f.resultStr = "".concat(y + "-" + g + "-" + k + r.label);
                break;

              case "date":
                y = f.data.years[m[0]] || f.data.years[f.data.years.length - 1], g = f.data.months[m[1]] || f.data.months[f.data.months.length - 1], k = f.data.days[m[2]] || f.data.days[f.data.days.length - 1], y != A[0] && (S = n.default.date.initDays(y, g, f.disabledAfter), V = n.default.date.initMonths(y, f.disabledAfter), f.data.days = S, f.data.months = V), g != A[1] && (S = n.default.date.initDays(y, g, f.disabledAfter), f.data.days = S), f.checkArr = [y, g, k], f.resultStr = "".concat(y + "-" + g + "-" + k);
                break;

              case "yearMonth":
                y = f.data.years[m[0]] || f.data.years[f.data.years.length - 1], g = f.data.months[m[1]] || f.data.months[f.data.months.length - 1], y != A[0] && (V = n.default.date.initMonths(y, f.disabledAfter), f.data.months = V), f.checkArr = [y, g], f.resultStr = "".concat(y + "-" + g);
                break;

              case "dateTime":
                y = f.data.years[m[0]] || f.data.years[f.data.years.length - 1], g = f.data.months[m[1]] || f.data.months[f.data.months.length - 1], k = f.data.days[m[2]] || f.data.days[f.data.days.length - 1], b = f.data.hours[m[3]] || f.data.hours[f.data.hours.length - 1], v = f.data.minutes[m[4]] || f.data.minutes[f.data.minutes.length - 1], p = f.data.seconds[m[5]] || f.data.seconds[f.data.seconds.length - 1], y != A[0] && (S = n.default.date.initDays(y, g), f.data.days = S), g != A[1] && (S = n.default.date.initDays(y, g), f.data.days = S), f.checkArr = [y, g, k, b, v, p], f.resultStr = "".concat(y + "-" + g + "-" + k + " " + b + ":" + v + ":" + p);
                break;

              case "time":
                b = f.data.hours[m[0]] || f.data.hours[f.data.hours.length - 1], v = f.data.minutes[m[1]] || f.data.minutes[f.data.minutes.length - 1], p = f.data.seconds[m[2]] || f.data.seconds[f.data.seconds.length - 1], f.checkArr = [b, v, p], f.resultStr = "".concat(b + ":" + v + ":" + p);
                break;

              case "linkage":
                var B,
                    R,
                    j,
                    E = this.linkList;
                B = f.data[0][m[0]] || f.data[0][0], R = f.data[1][m[1]] || f.data[1][0], 3 == this.level ? (j = f.data[2][m[2]] || f.data[2][0], B.label != A[0] && (f.data[1] = E[m[0]].children, f.data[2] = E[m[0]].children[m[1]].children, m[1] = 0, m[2] = 0, R = f.data[1][m[1]] || f.data[1][0], j = f.data[2][m[2]] || f.data[2][0]), R.label != A[1] && (f.data[2] = E[m[0]].children[m[1]].children, m[2] = 0, j = f.data[2][m[2]] || f.data[2][0]), f.checkArr = [B.label, R.label, j.label], f.checkValue = [f.data[0][m[0]] ? f.data[0][m[0]].value : f.data[0][0].value, f.data[1][m[1]] ? f.data[1][m[1]].value : f.data[1][0].value, f.data[2][m[2]] ? f.data[2][m[2]].value : f.data[2][0].value], f.resultStr = B.label + R.label + j.label) : (B.label != A[0] && (f.data[1] = E[m[0]].children, m[1] = 0, R = f.data[1][m[1]] || f.data[1][0]), f.checkArr = [B.label, R.label], f.checkValue = [f.data[0][m[0]] ? f.data[0][m[0]].value : f.data[0][0].value, f.data[1][m[1]] ? f.data[1][m[1]].value : f.data[1][0].value], f.resultStr = B.label + R.label);
                break;

              case "region":
                t = f.data.provinces[m[0]] || f.data.provinces[0], e = f.data.citys[m[1]] || f.data.citys[0], f.hideArea || (r = f.data.areas[m[2]] || f.data.areas[0]), t.label != A[0] && (f.data.citys = l.default[m[0]] || l.default[0], f.hideArea || (f.data.areas = s.default[m[0]][0] || s.default[0][0]), m[1] = 0, m[2] = 0, e = f.data.citys[m[1]] || f.data.citys[0], f.hideArea || (r = f.data.areas[m[2]] || f.data.areas[0])), e.label == A[1] || f.hideArea || (f.data.areas = s.default[m[0]][m[1]] || s.default[0][0], m[2] = 0, r = f.data.areas[m[2]] || f.data.areas[0]), f.hideArea ? (f.checkArr = [t.label, e.label], f.checkValue = [f.data.provinces[m[0]] ? f.data.provinces[m[0]].value : f.data.provinces[0].value, f.data.citys[m[1]] ? f.data.citys[m[1]].value : f.data.citys[0].value], f.resultStr = t.label + e.label) : (f.checkArr = [t.label, e.label, r.label], f.checkValue = [f.data.provinces[m[0]] ? f.data.provinces[m[0]].value : f.data.provinces[0].value, f.data.citys[m[1]] ? f.data.citys[m[1]].value : f.data.citys[0].value, f.data.areas[m[2]] ? f.data.areas[m[2]].value : f.data.areas[0].value], f.resultStr = t.label + e.label + r.label);
                break;

              case "selector":
                f.checkArr = f.data[m[0]] || f.data[f.data.length - 1], f.resultStr = f.data[m[0]] ? f.data[m[0]].label : f.data[f.data.length - 1].label;
                break;
            }

            f.$nextTick(function () {
              f.pickVal = m;
            });
          },
          initData: function initData() {
            var a,
                t,
                e,
                d,
                u,
                i,
                c,
                h,
                o,
                f,
                m,
                y,
                g = this,
                k = {},
                b = g.mode,
                v = [];

            switch (b) {
              case "linkage":
                var p;
                p = g.value ? g.getLinkageVal(g.value, !0) : g.getLinkageVal(g.defaultVal), v = p.dval, k = p.data, g.checkArr = p.checkArr, g.checkValue = p.checkValue, g.resultStr = p.resultStr;
                break;

              case "region":
                v = g.areaCode ? g.getRegionVal(g.areaCode, !0) : g.getRegionVal(g.defaultVal), k = g.hideArea ? {
                  provinces: r.default,
                  citys: l.default[v[0]]
                } : {
                  provinces: r.default,
                  citys: l.default[v[0]],
                  areas: s.default[v[0]][v[1]]
                };
                break;

              case "selector":
                k = g.selectList, v = g.defaultVal;
                break;

              case "limit":
                k = n.default.limit.init(g.dayStep, g.startHour, g.endHour, g.minuteStep, g.afterStep), v = k.defaultVal && g.current ? k.defaultVal : g.defaultVal;
                break;

              case "limitHour":
                k = n.default.limitHour.init(g.dayStep), v = k.defaultVal && g.current ? k.defaultVal : g.defaultVal;
                break;

              case "range":
                k = n.default.range.init(g.startYear, g.endYear, g.useCurrent(), g.current), v = k.defaultVal && g.current ? k.defaultVal : g.defaultVal;
                break;

              default:
                k = n.default.date.init(g.startYear, g.endYear, g.mode, g.step, g.useCurrent(), g.current, g.disabledAfter), v = k.defaultVal && g.current ? k.defaultVal : g.defaultVal;
                break;
            }

            switch (g.data = k, b) {
              case "limitHour":
                f = k.date[v[0]] || k.date[k.date.length - 1], m = k.areas[v[2]] || k.areas[k.areas.length - 1], y = k.hours[v[1]] || k.hours[k.hours.length - 1], g.checkArr = [f, m, y], g.resultStr = "".concat(f.value + " " + m.label + " " + y.label + "时");
                break;

              case "limit":
                f = k.date[v[0]] || k.date[k.date.length - 1], m = k.hours[v[1]] || k.hours[k.hours.length - 1], y = k.minutes[v[2]] || k.minutes[k.minutes.length - 1], g.checkArr = [f, m, y], g.resultStr = "".concat(f.value + " " + m.value + ":" + y.value + ":00");
                break;

              case "range":
                var A = k.fyears[v[0]] || k.fyears[k.fyears.length - 1],
                    S = k.fmonths[v[1]] || k.fmonths[k.fmonths.length - 1],
                    V = k.fdays[v[2]] || k.fdays[k.fdays.length - 1],
                    w = k.tyears[v[4]] || k.tyears[k.tyears.length - 1],
                    H = k.tmonths[v[5]] || k.tmonths[k.tmonths.length - 1],
                    D = k.tdays[v[6]] || k.tdays[k.tdays.length - 1];
                g.checkArr = [A, S, V, w, H, D], g.resultStr = "".concat(A + "-" + S + "-" + V + "至" + w + "-" + H + "-" + D);
                break;

              case "half":
                a = k.years[v[0]] || k.years[k.years.length - 1], t = k.months[v[1]] || k.months[k.months.length - 1], e = k.days[v[2]] || k.days[k.days.length - 1], o = k.areas[v[3]] || k.areas[k.areas.length - 1], g.checkArr = [a, t, e, o], g.resultStr = "".concat(a + "-" + t + "-" + e + " " + o.label);
                break;

              case "date":
                a = k.years[v[0]] || k.years[k.years.length - 1], t = k.months[v[1]] || k.months[k.months.length - 1], e = k.days[v[2]] || k.days[k.days.length - 1], g.checkArr = [a, t, e], g.resultStr = "".concat(a + "-" + t + "-" + e);
                break;

              case "yearMonth":
                a = k.years[v[0]] || k.years[k.years.length - 1], t = k.months[v[1]] || k.months[k.months.length - 1], g.checkArr = [a, t], g.resultStr = "".concat(a + "-" + t);
                break;

              case "dateTime":
                a = k.years[v[0]] || k.years[k.years.length - 1], t = k.months[v[1]] || k.months[k.months.length - 1], e = k.days[v[2]] || k.days[k.days.length - 1], d = k.hours[v[3]] || k.hours[k.hours.length - 1], u = k.minutes[v[4]] || k.minutes[k.minutes.length - 1], i = k.seconds[v[5]] || k.seconds[k.seconds.length - 1], g.resultStr = "".concat(a + "-" + t + "-" + e + " " + d + ":" + u + ":" + i), g.checkArr = [a, t, e, d, u];
                break;

              case "time":
                d = k.hours[v[0]] || k.hours[k.hours.length - 1], u = k.minutes[v[1]] || k.minutes[k.minutes.length - 1], i = k.seconds[v[2]] || k.seconds[k.seconds.length - 1], g.checkArr = [d, u, i], g.resultStr = "".concat(d + ":" + u + ":" + i);
                break;

              case "region":
                c = k.provinces[v[0]], h = k.citys[v[1]], g.hideArea ? (g.checkArr = [c.label, h.label], g.checkValue = [c.value, h.value], g.resultStr = c.label + h.label) : (o = k.areas[v[2]], g.checkArr = [c.label, h.label, o.label], g.checkValue = [c.value, h.value, o.value], g.resultStr = c.label + h.label + o.label);
                break;

              case "selector":
                g.checkArr = k[v[0]] || k[k.length - 1], g.resultStr = k[v[0]].label || k[k.length - 1].label;
                break;
            }

            g.$nextTick(function () {
              g.pickVal = v;
            });
          }
        },
        mounted: function mounted() {
          this.initData();
        }
      };
      t.default = i;
    }).call(this, e("6e42")["default"]);
  },
  b842: function b842(a, t, e) {
    "use strict";

    var r = e("8aee"),
        l = e.n(r);
    l.a;
  },
  f8ec: function f8ec(a, t, e) {
    "use strict";

    var r = function r() {
      var a = this,
          t = a.$createElement;
      a._self._c;
    },
        l = [];

    e.d(t, "a", function () {
      return r;
    }), e.d(t, "b", function () {
      return l;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/w-picker/w-picker-create-component', {
  'components/w-picker/w-picker-create-component': function componentsWPickerWPickerCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("1e4b"));
  }
}, [['components/w-picker/w-picker-create-component']]]);
});
require('components/w-picker/w-picker.js');
__wxRoute = 'node-modules/@dcloudio/uni-ui/lib/uni-badge/uni-badge';__wxRouteBegin = true;__wxAppCurrentFile__ = 'node-modules/@dcloudio/uni-ui/lib/uni-badge/uni-badge.js';

define('node-modules/@dcloudio/uni-ui/lib/uni-badge/uni-badge.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["node-modules/@dcloudio/uni-ui/lib/uni-badge/uni-badge"], {
  "08f8": function f8(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var u = {
      name: "UniBadge",
      props: {
        type: {
          type: String,
          default: "default"
        },
        inverted: {
          type: Boolean,
          default: !1
        },
        text: {
          type: String,
          default: ""
        },
        size: {
          type: String,
          default: "normal"
        }
      },
      methods: {
        onClick: function onClick() {
          this.$emit("click");
        }
      }
    };
    n.default = u;
  },
  7154: function _(t, n, e) {},
  8263: function _(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("f5c9"),
        i = e("c9f4");

    for (var a in i) {
      "default" !== a && function (t) {
        e.d(n, t, function () {
          return i[t];
        });
      }(a);
    }

    e("9cb4");
    var f = e("2877"),
        r = Object(f["a"])(i["default"], u["a"], u["b"], !1, null, null, null);
    n["default"] = r.exports;
  },
  "9cb4": function cb4(t, n, e) {
    "use strict";

    var u = e("7154"),
        i = e.n(u);
    i.a;
  },
  c9f4: function c9f4(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("08f8"),
        i = e.n(u);

    for (var a in u) {
      "default" !== a && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(a);
    }

    n["default"] = i.a;
  },
  f5c9: function f5c9(t, n, e) {
    "use strict";

    var u = function u() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        i = [];

    e.d(n, "a", function () {
      return u;
    }), e.d(n, "b", function () {
      return i;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['node-modules/@dcloudio/uni-ui/lib/uni-badge/uni-badge-create-component', {
  'node-modules/@dcloudio/uni-ui/lib/uni-badge/uni-badge-create-component': function nodeModulesDcloudioUniUiLibUniBadgeUniBadgeCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("8263"));
  }
}, [['node-modules/@dcloudio/uni-ui/lib/uni-badge/uni-badge-create-component']]]);
});
require('node-modules/@dcloudio/uni-ui/lib/uni-badge/uni-badge.js');
__wxRoute = 'node-modules/@dcloudio/uni-ui/lib/uni-icons/uni-icons';__wxRouteBegin = true;__wxAppCurrentFile__ = 'node-modules/@dcloudio/uni-ui/lib/uni-icons/uni-icons.js';

define('node-modules/@dcloudio/uni-ui/lib/uni-icons/uni-icons.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["node-modules/@dcloudio/uni-ui/lib/uni-icons/uni-icons"], {
  1502: function _(n, t, e) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var u = {
      name: "UniIcons",
      props: {
        type: {
          type: String,
          default: ""
        },
        color: {
          type: String,
          default: "#333333"
        },
        size: {
          type: [Number, String],
          default: 16
        }
      },
      methods: {
        _onClick: function _onClick() {
          this.$emit("click");
        }
      }
    };
    t.default = u;
  },
  "1bb7": function bb7(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("4bc8"),
        c = e("c15a");

    for (var i in c) {
      "default" !== i && function (n) {
        e.d(t, n, function () {
          return c[n];
        });
      }(i);
    }

    e("dcf9");
    var o = e("2877"),
        r = Object(o["a"])(c["default"], u["a"], u["b"], !1, null, null, null);
    t["default"] = r.exports;
  },
  "4bc8": function bc8(n, t, e) {
    "use strict";

    var u = function u() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        c = [];

    e.d(t, "a", function () {
      return u;
    }), e.d(t, "b", function () {
      return c;
    });
  },
  c15a: function c15a(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("1502"),
        c = e.n(u);

    for (var i in u) {
      "default" !== i && function (n) {
        e.d(t, n, function () {
          return u[n];
        });
      }(i);
    }

    t["default"] = c.a;
  },
  dcf9: function dcf9(n, t, e) {
    "use strict";

    var u = e("f28c"),
        c = e.n(u);
    c.a;
  },
  f28c: function f28c(n, t, e) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['node-modules/@dcloudio/uni-ui/lib/uni-icons/uni-icons-create-component', {
  'node-modules/@dcloudio/uni-ui/lib/uni-icons/uni-icons-create-component': function nodeModulesDcloudioUniUiLibUniIconsUniIconsCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("1bb7"));
  }
}, [['node-modules/@dcloudio/uni-ui/lib/uni-icons/uni-icons-create-component']]]);
});
require('node-modules/@dcloudio/uni-ui/lib/uni-icons/uni-icons.js');
__wxRoute = 'node-modules/@dcloudio/uni-ui/lib/uni-list/uni-list';__wxRouteBegin = true;__wxAppCurrentFile__ = 'node-modules/@dcloudio/uni-ui/lib/uni-list/uni-list.js';

define('node-modules/@dcloudio/uni-ui/lib/uni-list/uni-list.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["node-modules/@dcloudio/uni-ui/lib/uni-list/uni-list"], {
  "0ccf": function ccf(n, t, u) {
    "use strict";

    u.r(t);
    var e = u("34b0"),
        a = u("f46b");

    for (var i in a) {
      "default" !== i && function (n) {
        u.d(t, n, function () {
          return a[n];
        });
      }(i);
    }

    u("72a9");
    var r = u("2877"),
        c = Object(r["a"])(a["default"], e["a"], e["b"], !1, null, null, null);
    t["default"] = c.exports;
  },
  "34b0": function b0(n, t, u) {
    "use strict";

    var e = function e() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        a = [];

    u.d(t, "a", function () {
      return e;
    }), u.d(t, "b", function () {
      return a;
    });
  },
  "72a9": function a9(n, t, u) {
    "use strict";

    var e = u("aa97"),
        a = u.n(e);
    a.a;
  },
  aa97: function aa97(n, t, u) {},
  d2e7: function d2e7(n, t, u) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var e = {
      name: "UniList"
    };
    t.default = e;
  },
  f46b: function f46b(n, t, u) {
    "use strict";

    u.r(t);
    var e = u("d2e7"),
        a = u.n(e);

    for (var i in e) {
      "default" !== i && function (n) {
        u.d(t, n, function () {
          return e[n];
        });
      }(i);
    }

    t["default"] = a.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['node-modules/@dcloudio/uni-ui/lib/uni-list/uni-list-create-component', {
  'node-modules/@dcloudio/uni-ui/lib/uni-list/uni-list-create-component': function nodeModulesDcloudioUniUiLibUniListUniListCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("0ccf"));
  }
}, [['node-modules/@dcloudio/uni-ui/lib/uni-list/uni-list-create-component']]]);
});
require('node-modules/@dcloudio/uni-ui/lib/uni-list/uni-list.js');
__wxRoute = 'node-modules/@dcloudio/uni-ui/lib/uni-load-more/uni-load-more';__wxRouteBegin = true;__wxAppCurrentFile__ = 'node-modules/@dcloudio/uni-ui/lib/uni-load-more/uni-load-more.js';

define('node-modules/@dcloudio/uni-ui/lib/uni-load-more/uni-load-more.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["node-modules/@dcloudio/uni-ui/lib/uni-load-more/uni-load-more"], {
  1218: function _(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("cab7"),
        u = e("54aa");

    for (var a in u) {
      "default" !== a && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(a);
    }

    e("c3bd");
    var r = e("2877"),
        c = Object(r["a"])(u["default"], o["a"], o["b"], !1, null, null, null);
    n["default"] = c.exports;
  },
  "4e6a": function e6a(t, n, e) {},
  "54aa": function aa(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("6c5e"),
        u = e.n(o);

    for (var a in o) {
      "default" !== a && function (t) {
        e.d(n, t, function () {
          return o[t];
        });
      }(a);
    }

    n["default"] = u.a;
  },
  "6c5e": function c5e(t, n, e) {
    "use strict";

    (function (t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var e = t.getSystemInfoSync().platform,
          o = {
        name: "UniLoadMore",
        props: {
          status: {
            type: String,
            default: "more"
          },
          showIcon: {
            type: Boolean,
            default: !0
          },
          iconType: {
            type: String,
            default: "auto"
          },
          color: {
            type: String,
            default: "#777777"
          },
          contentText: {
            type: Object,
            default: function _default() {
              return {
                contentdown: "上拉显示更多",
                contentrefresh: "正在加载...",
                contentnomore: "没有更多数据了"
              };
            }
          }
        },
        data: function data() {
          return {
            platform: e
          };
        }
      };
      n.default = o;
    }).call(this, e("6e42")["default"]);
  },
  c3bd: function c3bd(t, n, e) {
    "use strict";

    var o = e("4e6a"),
        u = e.n(o);
    u.a;
  },
  cab7: function cab7(t, n, e) {
    "use strict";

    var o = function o() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        u = [];

    e.d(n, "a", function () {
      return o;
    }), e.d(n, "b", function () {
      return u;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['node-modules/@dcloudio/uni-ui/lib/uni-load-more/uni-load-more-create-component', {
  'node-modules/@dcloudio/uni-ui/lib/uni-load-more/uni-load-more-create-component': function nodeModulesDcloudioUniUiLibUniLoadMoreUniLoadMoreCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("1218"));
  }
}, [['node-modules/@dcloudio/uni-ui/lib/uni-load-more/uni-load-more-create-component']]]);
});
require('node-modules/@dcloudio/uni-ui/lib/uni-load-more/uni-load-more.js');
__wxRoute = 'node-modules/@dcloudio/uni-ui/lib/uni-nav-bar/uni-nav-bar';__wxRouteBegin = true;__wxAppCurrentFile__ = 'node-modules/@dcloudio/uni-ui/lib/uni-nav-bar/uni-nav-bar.js';

define('node-modules/@dcloudio/uni-ui/lib/uni-nav-bar/uni-nav-bar.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["node-modules/@dcloudio/uni-ui/lib/uni-nav-bar/uni-nav-bar"], {
  "3fe8": function fe8(t, n, e) {},
  "48c4": function c4(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("93ce"),
        i = e.n(u);

    for (var o in u) {
      "default" !== o && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(o);
    }

    n["default"] = i.a;
  },
  "4d03": function d03(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("e448"),
        i = e("48c4");

    for (var o in i) {
      "default" !== o && function (t) {
        e.d(n, t, function () {
          return i[t];
        });
      }(o);
    }

    e("50ef");
    var r = e("2877"),
        a = Object(r["a"])(i["default"], u["a"], u["b"], !1, null, null, null);
    n["default"] = a.exports;
  },
  "50ef": function ef(t, n, e) {
    "use strict";

    var u = e("3fe8"),
        i = e.n(u);
    i.a;
  },
  "93ce": function ce(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;

    var u = function u() {
      return e.e("node-modules/@dcloudio/uni-ui/lib/uni-status-bar/uni-status-bar").then(e.bind(null, "4c29"));
    },
        i = function i() {
      return e.e("node-modules/@dcloudio/uni-ui/lib/uni-icons/uni-icons").then(e.bind(null, "1bb7"));
    },
        o = {
      name: "UniNavBar",
      components: {
        uniStatusBar: u,
        uniIcons: i
      },
      props: {
        title: {
          type: String,
          default: ""
        },
        leftText: {
          type: String,
          default: ""
        },
        rightText: {
          type: String,
          default: ""
        },
        leftIcon: {
          type: String,
          default: ""
        },
        rightIcon: {
          type: String,
          default: ""
        },
        fixed: {
          type: [Boolean, String],
          default: !1
        },
        color: {
          type: String,
          default: "#000000"
        },
        backgroundColor: {
          type: String,
          default: "#FFFFFF"
        },
        statusBar: {
          type: [Boolean, String],
          default: !1
        },
        shadow: {
          type: [String, Boolean],
          default: !0
        },
        border: {
          type: [String, Boolean],
          default: !0
        }
      },
      methods: {
        onClickLeft: function onClickLeft() {
          this.$emit("click-left");
        },
        onClickRight: function onClickRight() {
          this.$emit("click-right");
        }
      }
    };

    n.default = o;
  },
  e448: function e448(t, n, e) {
    "use strict";

    var u = function u() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        i = [];

    e.d(n, "a", function () {
      return u;
    }), e.d(n, "b", function () {
      return i;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['node-modules/@dcloudio/uni-ui/lib/uni-nav-bar/uni-nav-bar-create-component', {
  'node-modules/@dcloudio/uni-ui/lib/uni-nav-bar/uni-nav-bar-create-component': function nodeModulesDcloudioUniUiLibUniNavBarUniNavBarCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("4d03"));
  }
}, [['node-modules/@dcloudio/uni-ui/lib/uni-nav-bar/uni-nav-bar-create-component']]]);
});
require('node-modules/@dcloudio/uni-ui/lib/uni-nav-bar/uni-nav-bar.js');
__wxRoute = 'node-modules/@dcloudio/uni-ui/lib/uni-status-bar/uni-status-bar';__wxRouteBegin = true;__wxAppCurrentFile__ = 'node-modules/@dcloudio/uni-ui/lib/uni-status-bar/uni-status-bar.js';

define('node-modules/@dcloudio/uni-ui/lib/uni-status-bar/uni-status-bar.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["node-modules/@dcloudio/uni-ui/lib/uni-status-bar/uni-status-bar"], {
  "4c29": function c29(t, n, u) {
    "use strict";

    u.r(n);
    var a = u("6b7f"),
        e = u("a78e");

    for (var r in e) {
      "default" !== r && function (t) {
        u.d(n, t, function () {
          return e[t];
        });
      }(r);
    }

    u("bc25");
    var i = u("2877"),
        c = Object(i["a"])(e["default"], a["a"], a["b"], !1, null, null, null);
    n["default"] = c.exports;
  },
  "6b7f": function b7f(t, n, u) {
    "use strict";

    var a = function a() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        e = [];

    u.d(n, "a", function () {
      return a;
    }), u.d(n, "b", function () {
      return e;
    });
  },
  a78e: function a78e(t, n, u) {
    "use strict";

    u.r(n);
    var a = u("f033"),
        e = u.n(a);

    for (var r in a) {
      "default" !== r && function (t) {
        u.d(n, t, function () {
          return a[t];
        });
      }(r);
    }

    n["default"] = e.a;
  },
  b92c: function b92c(t, n, u) {},
  bc25: function bc25(t, n, u) {
    "use strict";

    var a = u("b92c"),
        e = u.n(a);
    e.a;
  },
  f033: function f033(t, n, u) {
    "use strict";

    (function (t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var u = t.getSystemInfoSync().statusBarHeight + "px",
          a = {
        name: "UniStatusBar",
        data: function data() {
          return {
            statusBarHeight: u
          };
        }
      };
      n.default = a;
    }).call(this, u("6e42")["default"]);
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['node-modules/@dcloudio/uni-ui/lib/uni-status-bar/uni-status-bar-create-component', {
  'node-modules/@dcloudio/uni-ui/lib/uni-status-bar/uni-status-bar-create-component': function nodeModulesDcloudioUniUiLibUniStatusBarUniStatusBarCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("4c29"));
  }
}, [['node-modules/@dcloudio/uni-ui/lib/uni-status-bar/uni-status-bar-create-component']]]);
});
require('node-modules/@dcloudio/uni-ui/lib/uni-status-bar/uni-status-bar.js');

__wxRoute = 'pages/login/login';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/login.js';

define('pages/login/login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"0668":function(n,e,o){"use strict";o.r(e);var t=o("fa36"),i=o.n(t);for(var r in t)"default"!==r&&function(n){o.d(e,n,function(){return t[n]})}(r);e["default"]=i.a},3513:function(n,e,o){"use strict";(function(n){o("42c6"),o("921b");t(o("66fd"));var e=t(o("6a05"));function t(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,o("6e42")["createPage"])},"6a05":function(n,e,o){"use strict";o.r(e);var t=o("977c"),i=o("0668");for(var r in i)"default"!==r&&function(n){o.d(e,n,function(){return i[n]})}(r);o("ece4");var a=o("2877"),s=Object(a["a"])(i["default"],t["a"],t["b"],!1,null,null,null);e["default"]=s.exports},"977c":function(n,e,o){"use strict";var t=function(){var n=this,e=n.$createElement;n._self._c},i=[];o.d(e,"a",function(){return t}),o.d(e,"b",function(){return i})},c86b:function(n,e,o){},ece4:function(n,e,o){"use strict";var t=o("c86b"),i=o.n(t);i.a},fa36:function(n,e,o){"use strict";(function(n,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;r(o("3e05"));var i=o("2f62");function r(n){return n&&n.__esModule?n:{default:n}}function a(n){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{},t=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(o).filter(function(n){return Object.getOwnPropertyDescriptor(o,n).enumerable}))),t.forEach(function(e){s(n,e,o[e])})}return n}function s(n,e,o){return e in n?Object.defineProperty(n,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[e]=o,n}var u=function(){return o.e("components/m-input").then(o.bind(null,"cb80"))},c={components:{mInput:u},data:function(){return{providerList:[],hasProvider:!1,username:"",password:"",positionTop:0,ip:""}},computed:(0,i.mapState)(["forcedLogin"]),onLoad:function(){this.ip=n.getStorageSync("ip")},methods:a({},(0,i.mapMutations)(["login"]),{initProvider:function(){var e=this,o=["weixin","qq","sinaweibo"];n.getProvider({service:"oauth",success:function(n){if(n.provider&&n.provider.length){for(var t=0;t<n.provider.length;t++)~o.indexOf(n.provider[t])&&e.providerList.push({value:n.provider[t],image:"../../static/img/"+n.provider[t]+".png"});e.hasProvider=!0}},fail:function(n){console.error(t("获取服务供应商失败："+JSON.stringify(n)," at pages\\login\\login.vue:90"))}})},initPosition:function(){this.positionTop=n.getSystemInfoSync().windowHeight-100},scan:function(){n.scanCode({scanType:"barCode",success:function(e){console.log(t("条码类型："+e.scanType," at pages\\login\\login.vue:105")),console.log(t("条码内容："+e.result," at pages\\login\\login.vue:106")),n.showToast({position:"center",title:e.result,duration:2e3})}})},bindLogin:function(){var e=this;if(""!=this.username.trim())if(""!=this.password.trim()){var o={username:this.username,password:this.password};console.log(t("data的值"+JSON.stringify(o)," at pages\\login\\login.vue:158")),console.log(t("提交的ip"+JSON.stringify(o)," at pages\\login\\login.vue:159")),n.request({url:this.ip+"/login.do?login",method:"POST",data:o,header:{"Content-Type":"application/x-www-form-urlencoded"},success:function(o){if(console.log(t(JSON.stringify(o)," at pages\\login\\login.vue:168")),o.data.success){n.setStorageSync("token",o.data.obj.token),console.log(t("res.data.obj.token："+o.data.obj.token," at pages\\login\\login.vue:174")),console.log(t("登录信息："+JSON.stringify(o)," at pages\\login\\login.vue:175")),console.log(t("登录信息token:"+n.getStorageSync("token")," at pages\\login\\login.vue:176"));var i=o.data.obj;i.hostName="appreport"+o.data.obj.UserID,e.login(i),n.setStorageSync("hostName","appreport"+o.data.obj.UserID),n.reLaunch({url:"../reportmenu/purchasemenu"})}else n.showToast({icon:"none",title:o.data.msg,duration:2e3})}})}else n.showToast({icon:"none",title:"密码不能为空"});else n.showToast({icon:"none",title:"用户名不能为空"})},oauth:function(e){var o=this;n.login({provider:e,success:function(t){n.getUserInfo({provider:e,success:function(n){o.toMain(n.userInfo.nickName)}})},fail:function(n){console.error(t("授权登录失败："+JSON.stringify(n)," at pages\\login\\login.vue:232"))}})},toMain:function(e){this.login(e),this.forcedLogin?n.reLaunch({url:"../main/main"}):n.navigateBack()}}),onReady:function(){this.initPosition()}};e.default=c}).call(this,o("6e42")["default"],o("0de9")["default"])}},[["3513","common/runtime","common/vendor"]]]);
});
require('pages/login/login.js');
__wxRoute = 'pages/reportmenu/pos05';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/reportmenu/pos05.js';

define('pages/reportmenu/pos05.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/reportmenu/pos05"],{"0244":function(t,e,i){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=s(i("83fa"));function s(t){return t&&t.__esModule?t:{default:t}}var l=function(){return i.e("node-modules/@dcloudio/uni-ui/lib/uni-load-more/uni-load-more").then(i.bind(null,"1218"))},u=function(){return i.e("node-modules/@dcloudio/uni-ui/lib/uni-nav-bar/uni-nav-bar").then(i.bind(null,"4d03"))},a=function(){return i.e("components/uni-segmented-control/uni-segmented-control").then(i.bind(null,"81bf"))},r=function(){return Promise.all([i.e("common/vendor"),i.e("components/chunLei-popups/chunLei-popups")]).then(i.bind(null,"b091"))},c=o.default.formatDate(new Date,"yyyy-MM-dd"),d=t.getSystemInfoSync(),f=d.screenWidth,h=d.screenHeight,p=d.windowWidth,g=d.windowHeight,m=(d.navigationBarHeight,{components:{uniNavBar:u,uniSegmentedControl:a,popups:r,uniLoadMore:l},data:function(){return{items0:["今天","昨天","近7天","近30天","自定义"],current0:0,items:["店铺","品类","品牌","厂商","导购","销售排行"],current:0,BeginDate:c,EndDate:c,condition:"",loggingtype:"more",scrollTop:0,old:{scrollTop:0},height:Number(g)-Number(160),datalist:[],headtitle:[{title:"名次"},{title:"店铺"},{title:"数量"},{title:"金额"}],txtwidht:200,chosemenu:[{title:"店铺类别"},{title:"店铺"}],screenHeight:h,showflag:!1,x:Number(f)-Number(f/5),y:Number(h)-Number(80)}},onLoad:function(e){console.log(n("x宽度:"+this.x," at pages\\reportmenu\\pos05.vue:111")),console.log(n("y高度:"+this.y," at pages\\reportmenu\\pos05.vue:112")),console.log(n("可用宽度:"+p," at pages\\reportmenu\\pos05.vue:113")),console.log(n("可用高度:"+g," at pages\\reportmenu\\pos05.vue:114")),console.log(n("高度:"+this.height," at pages\\reportmenu\\pos05.vue:115")),t.showLoading({title:"正在加载数据",mask:!0});for(var i=1;i<=15;i++){var o={};o.Name="文山"+i,o.Quantity=i,o.Amount=10+i,this.datalist.push(o)}t.hideLoading()},onReady:function(){console.log(n("onReady"," at pages\\reportmenu\\pos05.vue:134"))},onBackPress:function(){console.log(n("onBackPress"," at pages\\reportmenu\\pos05.vue:136"))},onShow:function(){console.log(n("condition:"+this.condition," at pages\\reportmenu\\pos05.vue:140"))},onNavigationBarButtonTap:function(t){0==t.index?this.leftclick():(t.index=1)&&this.rightclick(),console.log(n(t," at pages\\reportmenu\\pos05.vue:147"))},methods:{inputPopup:function(t){this.showflag=t},Popup:function(e){t.showToast({icon:"none",title:JSON.stringify(e),duration:2e3}),this.showflag=!1},sitemclick:function(t){console.log(n(JSON.stringify(t)," at pages\\reportmenu\\pos05.vue:167"))},longpress:function(t){console.log(n("长按的操作:"+JSON.stringify(t)," at pages\\reportmenu\\pos05.vue:169"))},chose:function(){this.showflag=!0},upper:function(t){},lower:function(e){var i=this,o=this.datalist.length;console.log(n("长度:"+o," at pages\\reportmenu\\pos05.vue:180")),o<=50?(this.loggingtype="loading",setTimeout(function(){for(var t=o;t<=o+15;t++){var e={};e.Name="文山"+t,e.Quantity=t,e.Amount=10+t,i.datalist.push(e)}},2e3),t.hideLoading(),this.loggingtype="more"):t.showToast({icon:"none",title:"没有更多数据了",duration:2e3})},scroll:function(t){this.old.scrollTop=t.detail.scrollTop},goTop:function(e){this.scrollTop=this.old.scrollTop,this.$nextTick(function(){this.scrollTop=0}),t.showToast({icon:"none",title:"纵向滚动 scrollTop 值已被修改为 0"})},leftclick:function(){t.navigateBack({delta:1})},rightclick:function(){t.navigateTo({url:"../select/select"})},onClickItem:function(t){if(this.current!==t)if(this.current=t,0==this.current)this.headtitle=[{title:"名次"},{title:"店铺"},{title:"数量"},{title:"金额"}],this.chosemenu=[{title:"店铺类别"},{title:"店铺"}],this.$refs.vpop.popupsPosition();else if(1==this.current){this.headtitle=[{title:"名次"},{title:"品类"},{title:"数量"},{title:"金额"},{title:"占比%"}],this.chosemenu=[{title:"品类"}],this.$refs.vpop.popupsPosition();for(var e=0;e<this.datalist.length;e++)Vue.set(this.datalist[e],"LvStr","100%")}else if(2==this.current)this.headtitle=[{title:"名次"},{title:"品牌"},{title:"数量"},{title:"金额"},{title:"占比%"}],this.chosemenu=[{title:"品牌"}],this.$refs.vpop.popupsPosition();else if(3==this.current)this.headtitle=[{title:"名次"},{title:"厂商"},{title:"数量"},{title:"金额"},{title:"占比%"}],this.chosemenu=[{title:"厂商"}],this.$refs.vpop.popupsPosition();else if(4==this.current)this.headtitle=[{title:"名次"},{title:"导购"},{title:"数量"},{title:"金额"}],this.chosemenu=[{title:"导购"}],this.$refs.vpop.popupsPosition();else if(5==this.current){this.headtitle=[{title:"名次"},{title:"货号"},{title:"数量"},{title:"零售价"},{title:"平均售价"}],this.chosemenu=[{title:"货号"}];for(e=0;e<this.datalist.length;e++)Vue.set(this.datalist[e],"UnitPrice","15500.00");this.$refs.vpop.popupsPosition()}},onClickItem0:function(e){if(this.current0!==e&&(this.current0=e),0==e)this.BeginDate=c,this.EndDate=c;else if(1==e){var i=new Date;o.default.AddDays(i,-1),this.BeginDate=o.default.formatDate(i,"yyyy-MM-dd"),this.EndDate=o.default.formatDate(i,"yyyy-MM-dd")}else if(2==e){var s=new Date;o.default.AddDays(s,-7),this.BeginDate=o.default.formatDate(s,"yyyy-MM-dd"),this.EndDate=o.default.formatDate(new Date,"yyyy-MM-dd")}else if(3==e){s=new Date;o.default.AddDays(s,-30),this.BeginDate=o.default.formatDate(s,"yyyy-MM-dd"),this.EndDate=o.default.formatDate(new Date,"yyyy-MM-dd")}else 4==e&&(console.log(n("index==4:"," at pages\\reportmenu\\pos05.vue:301")),t.navigateTo({url:"../select/select"}))},getData:function(){}}});e.default=m}).call(this,i("6e42")["default"],i("0de9")["default"])},"0295":function(t,e,i){},"21ff":function(t,e,i){"use strict";(function(t){i("42c6"),i("921b");n(i("66fd"));var e=n(i("2e13"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("6e42")["createPage"])},"2e13":function(t,e,i){"use strict";i.r(e);var n=i("dd54"),o=i("2e34");for(var s in o)"default"!==s&&function(t){i.d(e,t,function(){return o[t]})}(s);i("5e9b");var l=i("2877"),u=Object(l["a"])(o["default"],n["a"],n["b"],!1,null,null,null);e["default"]=u.exports},"2e34":function(t,e,i){"use strict";i.r(e);var n=i("0244"),o=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);e["default"]=o.a},"5e9b":function(t,e,i){"use strict";var n=i("0295"),o=i.n(n);o.a},dd54:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},o=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return o})}},[["21ff","common/runtime","common/vendor"]]]);
});
require('pages/reportmenu/pos05.js');
__wxRoute = 'pages/reportmenu/posreport';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/reportmenu/posreport.js';

define('pages/reportmenu/posreport.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/reportmenu/posreport"],{5560:function(t,e,i){"use strict";i.r(e);var o=i("ac10"),n=i("b665");for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);i("9783");var r=i("2877"),a=Object(r["a"])(n["default"],o["a"],o["b"],!1,null,null,null);e["default"]=a.exports},8920:function(t,e,i){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("2f62"),s=r(i("83fa"));function r(t){return t&&t.__esModule?t:{default:t}}var a,l=function(){return i.e("node-modules/@dcloudio/uni-ui/lib/uni-load-more/uni-load-more").then(i.bind(null,"1218"))},u=function(){return i.e("node-modules/@dcloudio/uni-ui/lib/uni-nav-bar/uni-nav-bar").then(i.bind(null,"4d03"))},c=function(){return i.e("components/uni-segmented-control/uni-segmented-control").then(i.bind(null,"81bf"))},h=function(){return Promise.all([i.e("common/vendor"),i.e("components/chunLei-popups/chunLei-popups")]).then(i.bind(null,"b091"))},d=s.default.formatDate(new Date,"yyyy-MM-dd"),p=t.getSystemInfoSync(),g=p.screenWidth,f=p.screenHeight,m=p.windowWidth,v=p.windowHeight,y=(p.navigationBarHeight,[]),D={computed:(0,n.mapState)(["forcedLogin","hasLogin","userName","userinfor"]),components:{uniNavBar:u,uniSegmentedControl:c,popups:h,uniLoadMore:l},data:function(){return{items0:["今天","昨天","近7天","近30天","自定义"],current0:0,items:["店铺","品类","品牌","厂商","导购","销售排行"],current:0,BeginDate:d,EndDate:d,condition:[],strcondition:"",loggingtype:"more",scrollTop:0,old:{scrollTop:0},height:Number(v)-Number(160),datalist:[],currpage:1,totalQty:0,totalAmt:0,isDoRefresh:!0,headtitle:[{title:"名次"},{title:"店铺"},{title:"数量"},{title:"金额"}],txtwidht:150,chosemenu:[{title:"店铺类别"},{title:"店铺"}],sortmenu:[{title:"金额"},{title:"数量"}],screenHeight:f,showflag:!1,vsortshow:!1,descflag:!0,x:Number(g)-Number(g/5),x2:Number(g)/5,y:Number(f)-Number(80)}},onLoad:function(t){a=this,console.log(o("x宽度:"+this.x," at pages\\reportmenu\\posreport.vue:134")),console.log(o("y高度:"+this.y," at pages\\reportmenu\\posreport.vue:135")),console.log(o("可用宽度:"+m," at pages\\reportmenu\\posreport.vue:136")),console.log(o("可用高度:"+v," at pages\\reportmenu\\posreport.vue:137")),console.log(o("高度:"+this.height," at pages\\reportmenu\\posreport.vue:138"))},onReady:function(){console.log(o("onReady"," at pages\\reportmenu\\posreport.vue:141")),console.log(o("state中的userinfor:"+JSON.stringify(this.userinfor)," at pages\\reportmenu\\posreport.vue:142"))},onBackPress:function(){console.log(o("onBackPress"," at pages\\reportmenu\\posreport.vue:144"))},onReachBottom:function(){a.currpage=Number(a.currpage)+Number(1);var e=this.datalist.length;e<=this.totallist.length?(t.showLoading({title:"正在加载...",mask:!0}),setTimeout(function(){if(1==a.currpage)a.getData();else if(a.currpage>1)for(var t=a.pagination(a.currpage,15,a.totallist),e=0;e<t.length;e++)a.datalist.push(t[e])},2e3),t.hideLoading(),this.loggingtype="more"):t.showToast({icon:"none",title:"没有更多数据了",duration:2e3})},onShow:function(){if(console.log(o("condition:"+this.condition," at pages\\reportmenu\\posreport.vue:180")),console.log(o("this.isDoRefresh的值:"+this.isDoRefresh," at pages\\reportmenu\\posreport.vue:181")),this.isDoRefresh){if(a.currpage=1,this.condition.length>0){var t="";if(this.condition.length>1){for(var e=0;e<this.condition.length;e++)t=e==this.condition.length-1?t+"'"+this.condition[e]+"'":t+"'"+this.condition[e]+"',",console.log(o("str1:"+t," at pages\\reportmenu\\posreport.vue:195"));this.strcondition=t}else this.strcondition="'"+this.condition[0]+"'";console.log(o("改变后的this.strcondition:"+this.strcondition," at pages\\reportmenu\\posreport.vue:201"))}a.getData()}},onNavigationBarButtonTap:function(t){this.rightclick()},methods:{widthstyle:function(t){return 1==t?400:0!=t&&1!=t?150:void 0},inputPopup:function(t){this.showflag=t,this.vsortshow=t},Popup:function(e){var i="";"店铺"==e.title?i="getWarehouse":"品类"==e.title?i="getGoodsType":"品牌"==e.title?i="getBrand":"厂商"==e.title?i="getGoodsSupplier":"导购"==e.title?i="getEmployee":"货号"==e.title&&(i="getPosSalesGoods"),t.navigateTo({url:"../select/select?send="+i}),this.showflag=!1},Popup2:function(t){this.vsortshow=!1,"金额"==t.title&&this.descflag?(this.descflag=!1,this.datalist.sort(this.compare("FactAmount"))):"金额"!=t.title||this.descflag?"数量"==t.title&&this.descflag?(this.descflag=!1,this.datalist.sort(this.compare("Quantity"))):"数量"!=t.title||this.descflag||(this.descflag=!0,this.datalist.sort(this.compare("Quantity")).reverse()):(this.descflag=!0,this.datalist.sort(this.compare("FactAmount")).reverse())},compare:function(t){return function(e,i){var o=e[t],n=i[t];return o-n}},sitemclick:function(e){console.log(o(JSON.stringify(e)," at pages\\reportmenu\\posreport.vue:285")),console.log(o("hostName:"+this.userinfor.hostName," at pages\\reportmenu\\posreport.vue:286")),"销售排行"!=this.items[this.current]&&t.navigateTo({url:"posreportdetail?id="+e.keyid})},longpress:function(t){console.log(o("长按的操作:"+JSON.stringify(t)," at pages\\reportmenu\\posreport.vue:296"))},chose:function(t){1==t?this.showflag=!0:2==t&&(this.vsortshow=!0)},leftclick:function(){t.navigateBack({delta:1})},rightclick:function(){},onClickItem:function(t){if(this.current!==t){if(this.current=t,0==this.current)this.headtitle=[{title:"名次"},{title:"店铺"},{title:"数量"},{title:"金额"}],this.chosemenu=[{title:"店铺类别"},{title:"店铺"}],this.$refs.vpop.popupsPosition();else if(1==this.current){this.headtitle=[{title:"名次"},{title:"品类"},{title:"数量"},{title:"金额"},{title:"占比%"}],this.chosemenu=[{title:"品类"}],this.$refs.vpop.popupsPosition();for(var e=0;e<this.datalist.length;e++)Vue.set(this.datalist[e],"LvStr","100%")}else 2==this.current?(this.headtitle=[{title:"名次"},{title:"品牌"},{title:"数量"},{title:"金额"},{title:"占比%"}],this.chosemenu=[{title:"品牌"}],this.$refs.vpop.popupsPosition()):3==this.current?(this.headtitle=[{title:"名次"},{title:"厂商"},{title:"数量"},{title:"金额"},{title:"占比%"}],this.chosemenu=[{title:"厂商"}],this.$refs.vpop.popupsPosition()):4==this.current?(this.headtitle=[{title:"名次"},{title:"导购"},{title:"数量"},{title:"金额"}],this.chosemenu=[{title:"导购"}],this.$refs.vpop.popupsPosition()):5==this.current&&(this.headtitle=[{title:"名次"},{title:"货号"},{title:"数量"},{title:"零售价"},{title:"平均售价"}],this.chosemenu=[{title:"货号"}],this.$refs.vpop.popupsPosition());a.currpage=1,this.strcondition="",a.getData()}},onClickItem0:function(e){if(this.current0!==e&&(this.current0=e),0==e)this.BeginDate=d,this.EndDate=d,a.currpage=1,a.getData();else if(1==e){var i=new Date;s.default.AddDays(i,-1),this.BeginDate=s.default.formatDate(i,"yyyy-MM-dd"),this.EndDate=s.default.formatDate(i,"yyyy-MM-dd"),a.currpage=1,a.getData()}else if(2==e){var n=new Date;s.default.AddDays(n,-7),this.BeginDate=s.default.formatDate(n,"yyyy-MM-dd"),this.EndDate=s.default.formatDate(new Date,"yyyy-MM-dd"),a.currpage=1,a.getData()}else if(3==e){n=new Date;s.default.AddDays(n,-30),this.BeginDate=s.default.formatDate(n,"yyyy-MM-dd"),this.EndDate=s.default.formatDate(new Date,"yyyy-MM-dd"),a.currpage=1,a.getData()}else 4==e&&(console.log(o("index==4:"," at pages\\reportmenu\\posreport.vue:396")),t.navigateTo({url:"../select/selectdate"}))},getData:function(){t.showLoading({title:"正在加载",mask:!0}),a.datalist.splice(0,a.datalist.length),t.request({url:t.getStorageSync("ip")+"/salesTicket.do?report88",data:{hostName:t.getStorageSync("hostName"),BeginDate:this.BeginDate,EndDate:this.EndDate,disType:this.items[this.current],Condition:this.strcondition},method:"POST",header:{"Content-Type":"application/x-www-form-urlencoded",token:t.getStorageSync("token")},success:function(e){if(y=e.data.obj||[],0!=y.length){for(var i=a.pagination(a.currpage,15,y),o=0;o<i.length;o++)a.datalist.push(i[o]);a.total(),t.hideLoading()}else t.showToast({icon:"none",title:"暂无数据返回"})},fail:function(e){t.showToast({icon:"none",title:"网络请求异常"}),t.hideLoading()}}),t.hideLoading()},pagination:function(t,e,i){var o=(t-1)*e;return o+e>=i.length?i.slice(o,i.length):i.slice(o,o+e)},total:function(){for(var t=0,e=0,i=0;i<y.length;i++)t=Number(t)+Number(y[i].Quantity),e=Number(e)+Number(y[i].FactAmount);t&&(a.totalQty=t),e&&(a.totalAmt=parseFloat(e).toFixed(2))}}};e.default=D}).call(this,i("6e42")["default"],i("0de9")["default"])},9783:function(t,e,i){"use strict";var o=i("c9d9"),n=i.n(o);n.a},ac10:function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=(t._self._c,t.__map(t.headtitle,function(e,i){var o=t.widthstyle(i);return{$orig:t.__get_orig(e),m0:o}}));t.$mp.data=Object.assign({},{$root:{l0:i}})},n=[];i.d(e,"a",function(){return o}),i.d(e,"b",function(){return n})},b57c:function(t,e,i){"use strict";(function(t){i("42c6"),i("921b");o(i("66fd"));var e=o(i("5560"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("6e42")["createPage"])},b665:function(t,e,i){"use strict";i.r(e);var o=i("8920"),n=i.n(o);for(var s in o)"default"!==s&&function(t){i.d(e,t,function(){return o[t]})}(s);e["default"]=n.a},c9d9:function(t,e,i){}},[["b57c","common/runtime","common/vendor"]]]);
});
require('pages/reportmenu/posreport.js');
__wxRoute = 'pages/select/selectdate';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/select/selectdate.js';

define('pages/select/selectdate.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/select/selectdate"],{"1a03":function(t,e,n){"use strict";var a=n("ae44"),i=n.n(a);i.a},5322:function(t,e,n){"use strict";n.r(e);var a=n("e0ac"),i=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);e["default"]=i.a},8973:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},ae44:function(t,e,n){},b11a:function(t,e,n){"use strict";n.r(e);var a=n("8973"),i=n("5322");for(var u in i)"default"!==u&&function(t){n.d(e,t,function(){return i[t]})}(u);n("1a03");var c=n("2877"),o=Object(c["a"])(i["default"],a["a"],a["b"],!1,null,null,null);e["default"]=o.exports},b1f5:function(t,e,n){"use strict";(function(t){n("42c6"),n("921b");a(n("66fd"));var e=a(n("b11a"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},e0ac:function(t,e,n){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=function(){return Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(n.bind(null,"1e4b"))},u={components:{wPicker:i},data:function(){var t=this.getDate({format:!0});return{BeginDate:t,EndDate:t,time:"12:01",defaultVal:[0,0,0,0,0,0,0],choseid:1}},computed:{startDate:function(){return this.getDate("start")},endDate:function(){return this.getDate("end")}},onNavigationBarButtonTap:function(t){this.submit()},methods:{bindPickerChange:function(e){console.log(t("picker发送选择改变，携带值为",e.target.value," at pages\\select\\selectdate.vue:72")),this.index=e.target.value},bindDateChange:function(t){this.date=t.target.value},bindTimeChange:function(t){this.time=t.target.value},getDate:function(t){var e=new Date,n=e.getFullYear(),a=e.getMonth()+1,i=e.getDate();return"start"===t?n-=60:"end"===t&&(n+=2),a=a>9?a:"0"+a,i=i>9?i:"0"+i,"".concat(n,"-").concat(a,"-").concat(i)},onConfirm:function(e){this.$refs.BeginDate.hide(),console.log(t(e," at pages\\select\\selectdate.vue:97")),1==this.choseid?this.BeginDate=e.result:2==this.choseid&&(this.EndDate=e.result)},show:function(t){this.choseid=t,this.$refs.BeginDate.show()},submit:function(){var t=getCurrentPages(),e=(t[t.length-1],t[t.length-2]);e.$vm.BeginDate=this.BeginDate,e.$vm.EndDate=this.EndDate,a.navigateBack({delta:1})}}};e.default=u}).call(this,n("0de9")["default"],n("6e42")["default"])}},[["b1f5","common/runtime","common/vendor"]]]);
});
require('pages/select/selectdate.js');
__wxRoute = 'pages/goodsdetail/goodsdetail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/goodsdetail/goodsdetail.js';

define('pages/goodsdetail/goodsdetail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goodsdetail/goodsdetail"],{"02dc":function(e,n,t){"use strict";(function(e,a){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=function(){return t.e("node-modules/@dcloudio/uni-ui/lib/uni-nav-bar/uni-nav-bar").then(t.bind(null,"4d03"))},o=function(){return t.e("components/axb-checkbox/axb-checkbox").then(t.bind(null,"1840"))},c={components:{uniNavBar:u,axbCheckBox:o},data:function(){return{sartTime:[{name:"红色",value:"3day",checked:1,Quantity:1},{name:"蓝色",value:"1week",checked:0,Quantity:1},{name:"黄色",value:"1month",checked:0,Quantity:1},{name:"星月蓝黑色",value:"6month",checked:0,Quantity:1},{name:"星月蓝黑色我的我",value:"1year",checked:0,Quantity:1},{name:"星月蓝黑色我的我q",value:"2year",checked:0,Quantity:1},{name:"星月蓝黑色我",value:"3year",checked:0,Quantity:1},{name:"星月蓝黑色红剑",value:"4year",checked:0,Quantity:1}]}},onLoad:function(){console.log(e(JSON.stringify(this.sartTime)," at pages\\goodsdetail\\goodsdetail.vue:64"))},methods:{ChangeType:function(n){console.log(e("val:"+n," at pages\\goodsdetail\\goodsdetail.vue:68"))},leftclick:function(){a.showToast({title:"左点击aaa",duration:2e3})},rightclick:function(){a.showToast({icon:"none",title:"右点击了子",duration:2e3})}}};n.default=c}).call(this,t("0de9")["default"],t("6e42")["default"])},"28fd":function(e,n,t){"use strict";t.r(n);var a=t("02dc"),u=t.n(a);for(var o in a)"default"!==o&&function(e){t.d(n,e,function(){return a[e]})}(o);n["default"]=u.a},"661c":function(e,n,t){"use strict";t.r(n);var a=t("8136"),u=t("28fd");for(var o in u)"default"!==o&&function(e){t.d(n,e,function(){return u[e]})}(o);var c=t("2877"),i=Object(c["a"])(u["default"],a["a"],a["b"],!1,null,null,null);n["default"]=i.exports},8136:function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement;e._self._c},u=[];t.d(n,"a",function(){return a}),t.d(n,"b",function(){return u})},b424:function(e,n,t){"use strict";(function(e){t("42c6"),t("921b");a(t("66fd"));var n=a(t("661c"));function a(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])}},[["b424","common/runtime","common/vendor"]]]);
});
require('pages/goodsdetail/goodsdetail.js');
__wxRoute = 'pages/reportmenu/purchasemenu';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/reportmenu/purchasemenu.js';

define('pages/reportmenu/purchasemenu.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/reportmenu/purchasemenu"],{"02d6":function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},i=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return i})},"114b":function(n,t,e){"use strict";e.r(t);var u=e("dd4e"),i=e.n(u);for(var o in u)"default"!==o&&function(n){e.d(t,n,function(){return u[n]})}(o);t["default"]=i.a},"1abf":function(n,t,e){"use strict";e.r(t);var u=e("02d6"),i=e("114b");for(var o in i)"default"!==o&&function(n){e.d(t,n,function(){return i[n]})}(o);var r=e("2877"),c=Object(r["a"])(i["default"],u["a"],u["b"],!1,null,null,null);t["default"]=c.exports},cecb:function(n,t,e){"use strict";(function(n){e("42c6"),e("921b");u(e("66fd"));var t=u(e("1abf"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},dd4e:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function(){return e.e("node-modules/@dcloudio/uni-ui/lib/uni-nav-bar/uni-nav-bar").then(e.bind(null,"4d03"))},i=function(){return e.e("components/gird").then(e.bind(null,"7caf"))},o={components:{uniNavBar:u,uniGrid:i},data:function(){return{options:[{text:"零售分析",image:"../../static/img/posHL.png",url:"./posreport"}]}},methods:{leftclick:function(){},rightclick:function(){n.showToast({icon:"none",title:"右点击了子",duration:2e3})},clickgrid:function(t){n.showToast({icon:"none",title:t.detail.index.toString(),duration:2e3})}}};t.default=o}).call(this,e("6e42")["default"])}},[["cecb","common/runtime","common/vendor"]]]);
});
require('pages/reportmenu/purchasemenu.js');
__wxRoute = 'pages/reportmenu/posreportdetail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/reportmenu/posreportdetail.js';

define('pages/reportmenu/posreportdetail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/reportmenu/posreportdetail"],{5217:function(t,e,o){"use strict";var a=o("9c11"),n=o.n(a);n.a},"5b55":function(t,e,o){"use strict";(function(t){o("42c6"),o("921b");a(o("66fd"));var e=a(o("9746"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("6e42")["createPage"])},9746:function(t,e,o){"use strict";o.r(e);var a=o("a829"),n=o("981b");for(var r in n)"default"!==r&&function(t){o.d(e,t,function(){return n[t]})}(r);o("5217");var i=o("2877"),s=Object(i["a"])(n["default"],a["a"],a["b"],!1,null,null,null);e["default"]=s.exports},"981b":function(t,e,o){"use strict";o.r(e);var a=o("ba30"),n=o.n(a);for(var r in a)"default"!==r&&function(t){o.d(e,t,function(){return a[t]})}(r);e["default"]=n.a},"9c11":function(t,e,o){},a829:function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},n=[];o.d(e,"a",function(){return a}),o.d(e,"b",function(){return n})},ba30:function(t,e,o){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,r=o("2f62"),i={computed:(0,r.mapState)(["forcedLogin","hasLogin","userName","userinfor"]),data:function(){return{totallist:[],id:"",totalQty:0,totalAmt:0,currPage:1,items:[]}},onLoad:function(e){n=this,this.id=e.id,console.log(t("onLoad中的currPage:"+n.currPage," at pages\\reportmenu\\posreportdetail.vue:129")),this.getdata()},onBackPress:function(){console.log(t("onBackPress"," at pages\\reportmenu\\posreportdetail.vue:132"));var e=getCurrentPages(),o=(e[e.length-1],e[e.length-2]);o.$vm.isDoRefresh=!1},onReachBottom:function(){console.log(t("进入页面时执行。。"," at pages\\reportmenu\\posreportdetail.vue:139")),n.currPage=Number(n.currPage)+Number(1);var e=this.items.length;e<=this.totallist.length?(a.showLoading({title:"正在加载...",mask:!0}),setTimeout(function(){if(1==n.currPage)n.getData();else if(n.currPage>1)for(var t=n.pagination(n.currPage,15,n.totallist),e=0;e<t.length;e++)n.items.push(t[e])},2e3),a.hideLoading(),this.loggingtype="more"):a.showToast({icon:"none",title:"没有更多数据了",duration:2e3})},methods:{getdata:function(){n.items.splice(0,n.items.length),a.request({url:a.getStorageSync("ip")+"/salesTicket.do?report88Detail",data:{hostName:a.getStorageSync("hostName"),id:this.id},method:"POST",header:{"Content-Type":"application/x-www-form-urlencoded",token:a.getStorageSync("token")},success:function(e){if(console.log(t("detail中res"+JSON.stringify(e)," at pages\\reportmenu\\posreportdetail.vue:183")),n.totallist=e.data.obj||[],console.log(t("detail中totallist:"+JSON.stringify(n.totallist)," at pages\\reportmenu\\posreportdetail.vue:185")),0!=n.totallist.length){console.log(t("当前页数:"+n.currPage," at pages\\reportmenu\\posreportdetail.vue:193"));var o=n.pagination(n.currPage,15,n.totallist);console.log(t("array:"+JSON.stringify(o)," at pages\\reportmenu\\posreportdetail.vue:195"));for(var r=0;r<o.length;r++)n.items.push(o[r]);console.log(t("that.items:"+JSON.stringify(n.items)," at pages\\reportmenu\\posreportdetail.vue:200")),n.total()}else a.showToast({icon:"none",title:"暂无数据返回"})},fail:function(t){a.showToast({icon:"none",title:"网络请求异常"})}})},pagination:function(t,e,o){var a=(t-1)*e;return a+e>=o.length?o.slice(a,o.length):o.slice(a,a+e)},total:function(){for(var t=0,e=0,o=0;o<n.totallist.length;o++)t=Number(t)+Number(n.totallist[o].Quantity),e=Number(e)+Number(n.totallist[o].FactAmount);t&&(n.totalQty=t),e&&(n.totalAmt=parseFloat(e).toFixed(2))}}};e.default=i}).call(this,o("0de9")["default"],o("6e42")["default"])}},[["5b55","common/runtime","common/vendor"]]]);
});
require('pages/reportmenu/posreportdetail.js');
__wxRoute = 'pages/select/select';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/select/select.js';

define('pages/select/select.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/select/select"],{"024f":function(e,t,n){"use strict";n.r(t);var o=n("5661"),s=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);t["default"]=s.a},"0464":function(e,t,n){"use strict";n.r(t);var o=n("1418"),s=n("024f");for(var i in s)"default"!==i&&function(e){n.d(t,e,function(){return s[e]})}(i);n("39e1");var a=n("2877"),l=Object(a["a"])(s["default"],o["a"],o["b"],!1,null,null,null);t["default"]=l.exports},1418:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},s=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return s})},"39e1":function(e,t,n){"use strict";var o=n("862a"),s=n.n(o);s.a},5661:function(e,t,n){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,i=function(){return n.e("node-modules/@dcloudio/uni-ui/lib/uni-nav-bar/uni-nav-bar").then(n.bind(null,"4d03"))},a=function(){return n.e("node-modules/@dcloudio/uni-ui/lib/uni-load-more/uni-load-more").then(n.bind(null,"1218"))},l=function(){return n.e("node-modules/@dcloudio/uni-ui/lib/uni-list/uni-list").then(n.bind(null,"0ccf"))},c={components:{uniList:l,uniLoadMore:a,uniNavBar:i},data:function(){return{keyword:"",title:"资料选择列表",currPage:1,send:"",loadingType:"more",items:[],condition:""}},onNavigationBarButtonTap:function(t){0==t.index?this.submit():(t.index=1)&&this.submit(),console.log(e(t," at pages\\select\\select.vue:52"))},onNavigationBarSearchInputChanged:function(t){console.log(e(t," at pages\\select\\select.vue:56"))},onLoad:function(t){s=this,console.log(e(JSON.stringify(t)," at pages\\select\\select.vue:60")),s.items.splice(0,s.items.length),console.log(e(o.getStorageSync("ip")+"/select.do?"+t.send," at pages\\select\\select.vue:62")),s.send=t.send,s.getdata(t)},onBackPress:function(){console.log(e("onBackPress"," at pages\\select\\select.vue:66"))},onPullDownRefresh:function(){},onReachBottom:function(){var e={};s.currPage=Number(s.currPage)+Number(1),e.condition=s.keyword,e.send=s.send,s.getdata(e)},methods:{leftclick:function(){o.navigateBack({delta:1})},checkboxChange:function(t){var n=this.items,o=t.detail.value;this.condition=o,console.log(e("values:"+o," at pages\\select\\select.vue:92"));for(var s=0,i=n.length;s<i;++s){var a=n[s];console.log(e("values1:"+o," at pages\\select\\select.vue:95")),o.includes(a.id)?this.$set(a,"checked",!0):this.$set(a,"checked",!1)}},input:function(t){var n=this,o={};o.send=s.send,s.items.splice(0,s.items.length),setTimeout(function(){console.log(e("关键字的值:"+n.keyword," at pages\\select\\select.vue:109")),s.currPage=1,o.condition=n.keyword,s.getdata(o)},0)},submit:function(){console.log(e("获取到的内容:"+this.condition," at pages\\select\\select.vue:118"));var t=getCurrentPages(),n=(t[t.length-1],t[t.length-2]);n.$vm.condition=this.condition,n.$vm.isDoRefresh=!0,console.log(e("上一个页面的prevPage值："+n.toString()," at pages\\select\\select.vue:125")),o.navigateBack({delta:1})},getdata:function(t){var n=this;if(console.log(e("getdata方法中的"+JSON.stringify(t)," at pages\\select\\select.vue:131")),void 0!=t&&null!=t){var i=t.hasOwnProperty("condition")?t.condition:"",a=t.hasOwnProperty("Type")?t.Type:"",l=t.hasOwnProperty("customerid")?t.customerid:"";console.log(e(this.currPage," at pages\\select\\select.vue:138")),console.log(e("conditionddd:"+i," at pages\\select\\select.vue:139")),console.log(e("Type:"+a," at pages\\select\\select.vue:140")),console.log(e("customerid:"+l," at pages\\select\\select.vue:141")),o.request({url:o.getStorageSync("ip")+"/select.do?"+t.send,data:{currPage:this.currPage,param:i,Type:a,customerid:l},method:"POST",header:{"Content-Type":"application/x-www-form-urlencoded",token:o.getStorageSync("token")},success:function(i){console.log(e("getdata中的res:"+JSON.stringify(i)," at pages\\select\\select.vue:152"));var a=i.data.obj||[];if(0==a.length)return o.showToast({icon:"none",title:"没有更多数据了"}),void(s.loadingType="noMore");n.loadingType="loading";for(var l=0;l<a.length;l++){var c={};if("getEmployee"==t.send)c.id=a[l].EmployeeID,c.Name=a[l].Name,s.items.push(c);else if("getVip"==t.send)for(l=0;l<a.length;l++)c.id=a[l].VIPID,c.Name=a[l].Name,c.Code=a[l].Code,c.DiscountRate=a[l].DiscountRate,c.PointRate=a[l].PointRate,c.UsablePoint=a[l].UsablePoint,s.items.push(c);else"getPosSalesGoods"===t.send||"getSalesGoods"===t.send?(c.id=a[l].GoodsID,c.Name=a[l].Name,c.Code=a[l].Code,c.RetailSales=a[l].RetailSales,c.UnitPrice=a[l].UnitPrice,c.Discount=a[l].Discount,c.DiscountFlag=a[l].DiscountFlag,c.sizIndex=a[l].sizIndex,s.items.push(c)):"getColorByGoodsCode"===t.send?(c.id=a[l].ColorID,c.Name=a[l].Name,s.items.push(c)):"getSizeByGoodsCode"===t.send?(c.id=a[l].SizeID,c.Name=a[l].Name,c.Code=a[l].SizeCode,c.x=a[l].x,s.items.push(c)):"getCustomer"===t.send?(c.id=a[l].CustomerID,c.Name=a[l].Name,c.DiscountRate=a[l].DiscountRate,c.DistrictID=a[l].DistrictID,c.OrderDiscount=a[l].OrderDiscount,c.AllotDiscount=a[l].AllotDiscount,c.ReplenishDiscount=a[l].ReplenishDiscount,s.items.push(c)):"getWarehouse"===t.send?(c.id=a[l].DepartmentID,c.Name=a[l].Name,c.SettleCustID=a[l].SettleCustID,c.MustExistsGoodsFlag=a[l].MustExistsGoodsFlag,s.items.push(c)):"getBrand"===t.send?(c.id=a[l].BrandID,c.Name=a[l].Name,s.items.push(c)):"getPaymentType"==t.send?(c.id=a[l].PaymentTypeID,c.Name=a[l].Name,s.list.push(c)):"getGoodsType"==t.send?(c.id=a[l].GoodsTypeID,c.Name=a[l].Name,s.items.push(c)):"getGoodsSupplier"==t.send&&(c.id=a[l].SupplierID,c.Name=a[l].Name,c.DiscountRate=a[l].DiscountRate,s.items.push(c))}n.loadingType="more"},fail:function(e){o.showToast({icon:"none",title:"网络请求异常"})}})}}}};t.default=c}).call(this,n("0de9")["default"],n("6e42")["default"])},5994:function(e,t,n){"use strict";(function(e){n("42c6"),n("921b");o(n("66fd"));var t=o(n("0464"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"862a":function(e,t,n){}},[["5994","common/runtime","common/vendor"]]]);
});
require('pages/select/select.js');
__wxRoute = 'pages/login/ip';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/ip.js';

define('pages/login/ip.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/ip"],{3616:function(t,n,e){"use strict";e.r(n);var i=e("905c"),u=e("bd7b");for(var o in u)"default"!==o&&function(t){e.d(n,t,function(){return u[t]})}(o);e("da1d");var a=e("2877"),c=Object(a["a"])(u["default"],i["a"],i["b"],!1,null,null,null);n["default"]=c.exports},4414:function(t,n,e){},"582b":function(t,n,e){"use strict";(function(t,e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={onLoad:function(){this.ip=t.getStorageSync("ip")},data:function(){return{ip:""}},methods:{submit:function(){console.log(e("ip地址为:"+this.ip," at pages\\login\\ip.vue:26")),t.setStorageSync("ip",this.ip),console.log(e("getip地址："+t.getStorageSync("ip")," at pages\\login\\ip.vue:31")),t.redirectTo({url:"login"})}}};n.default=i}).call(this,e("6e42")["default"],e("0de9")["default"])},"905c":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return u})},b03b:function(t,n,e){"use strict";(function(t){e("42c6"),e("921b");i(e("66fd"));var n=i(e("3616"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},bd7b:function(t,n,e){"use strict";e.r(n);var i=e("582b"),u=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);n["default"]=u.a},da1d:function(t,n,e){"use strict";var i=e("4414"),u=e.n(i);u.a}},[["b03b","common/runtime","common/vendor"]]]);
});
require('pages/login/ip.js');
__wxRoute = 'pages/main/main';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/main/main.js';

define('pages/main/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/main/main"],{"0498":function(n,t,e){"use strict";var o=function(){var n=this,t=n.$createElement;n._self._c},a=[];e.d(t,"a",function(){return o}),e.d(t,"b",function(){return a})},3805:function(n,t,e){"use strict";(function(n){e("42c6"),e("921b");o(e("66fd"));var t=o(e("e90a"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},4565:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=e("2f62"),a={computed:(0,o.mapState)(["forcedLogin","hasLogin","userName"]),onLoad:function(){var t=this;this.hasLogin||n.showModal({title:"未登录",content:"您未登录，需要登录后才能继续",showCancel:!this.forcedLogin,success:function(e){e.confirm&&(t.forcedLogin?n.reLaunch({url:"../login/login"}):n.navigateTo({url:"../login/login"}))}})}};t.default=a}).call(this,e("6e42")["default"])},"879d":function(n,t,e){"use strict";e.r(t);var o=e("4565"),a=e.n(o);for(var u in o)"default"!==u&&function(n){e.d(t,n,function(){return o[n]})}(u);t["default"]=a.a},"8a76":function(n,t,e){},df37:function(n,t,e){"use strict";var o=e("8a76"),a=e.n(o);a.a},e90a:function(n,t,e){"use strict";e.r(t);var o=e("0498"),a=e("879d");for(var u in a)"default"!==u&&function(n){e.d(t,n,function(){return a[n]})}(u);e("df37");var i=e("2877"),c=Object(i["a"])(a["default"],o["a"],o["b"],!1,null,null,null);t["default"]=c.exports}},[["3805","common/runtime","common/vendor"]]]);
});
require('pages/main/main.js');
__wxRoute = 'pages/reg/reg';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/reg/reg.js';

define('pages/reg/reg.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/reg/reg"],{"02440":function(t,e,n){"use strict";n.r(e);var o=n("0b44"),a=n.n(o);for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);e["default"]=a.a},"0b44":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n("3e05"));function a(t){return t&&t.__esModule?t:{default:t}}var u=function(){return n.e("components/m-input").then(n.bind(null,"cb80"))},i={components:{mInput:u},data:function(){return{account:"",password:"",email:""}},methods:{register:function(){if(this.account.length<5)t.showToast({icon:"none",title:"账号最短为 5 个字符"});else if(this.password.length<6)t.showToast({icon:"none",title:"密码最短为 6 个字符"});else if(this.email.length<3||!~this.email.indexOf("@"))t.showToast({icon:"none",title:"邮箱地址不合法"});else{var e={account:this.account,password:this.password,email:this.email};o.default.addUser(e),t.showToast({title:"注册成功"}),t.navigateBack({delta:1})}}}};e.default=i}).call(this,n("6e42")["default"])},"218f":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})},b6d7:function(t,e,n){"use strict";n.r(e);var o=n("218f"),a=n("02440");for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);var i=n("2877"),s=Object(i["a"])(a["default"],o["a"],o["b"],!1,null,null,null);e["default"]=s.exports},fdfe:function(t,e,n){"use strict";(function(t){n("42c6"),n("921b");o(n("66fd"));var e=o(n("b6d7"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])}},[["fdfe","common/runtime","common/vendor"]]]);
});
require('pages/reg/reg.js');
__wxRoute = 'pages/pwd/pwd';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/pwd/pwd.js';

define('pages/pwd/pwd.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pwd/pwd"],{"199c":function(n,t,e){"use strict";e.r(t);var u=e("d49d"),o=e("aa61");for(var a in o)"default"!==a&&function(n){e.d(t,n,function(){return o[n]})}(a);var i=e("2877"),c=Object(i["a"])(o["default"],u["a"],u["b"],!1,null,null,null);t["default"]=c.exports},aa61:function(n,t,e){"use strict";e.r(t);var u=e("b86b"),o=e.n(u);for(var a in u)"default"!==a&&function(n){e.d(t,n,function(){return u[n]})}(a);t["default"]=o.a},b86b:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;u(e("3e05"));function u(n){return n&&n.__esModule?n:{default:n}}var o=function(){return e.e("components/m-input").then(e.bind(null,"cb80"))},a={components:{mInput:o},data:function(){return{email:""}},methods:{findPassword:function(){this.email.length<3||!~this.email.indexOf("@")?n.showToast({icon:"none",title:"邮箱地址不合法"}):n.showToast({icon:"none",title:"已发送重置邮件至注册邮箱，请注意查收。",duration:3e3})}}};t.default=a}).call(this,e("6e42")["default"])},d49d:function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},o=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return o})},fbff:function(n,t,e){"use strict";(function(n){e("42c6"),e("921b");u(e("66fd"));var t=u(e("199c"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])}},[["fbff","common/runtime","common/vendor"]]]);
});
require('pages/pwd/pwd.js');
__wxRoute = 'pages/user/user';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/user.js';

define('pages/user/user.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/user"],{"33ca":function(t,n,e){"use strict";e.r(n);var o=e("ed23"),r=e.n(o);for(var u in o)"default"!==u&&function(t){e.d(n,t,function(){return o[t]})}(u);n["default"]=r.a},3422:function(t,n,e){"use strict";(function(t){e("42c6"),e("921b");o(e("66fd"));var n=o(e("509c"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"509c":function(t,n,e){"use strict";e.r(n);var o=e("8685"),r=e("33ca");for(var u in r)"default"!==u&&function(t){e.d(n,t,function(){return r[t]})}(u);var c=e("2877"),i=Object(c["a"])(r["default"],o["a"],o["b"],!1,null,null,null);n["default"]=i.exports},8685:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return r})},ed23:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e("2f62");function r(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},o=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.forEach(function(n){u(t,n,e[n])})}return t}function u(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var c={computed:r({},(0,o.mapState)(["hasLogin","forcedLogin"])),methods:r({},(0,o.mapMutations)(["logout"]),{bindLogin:function(){t.navigateTo({url:"../login/login"})},bindLogout:function(){this.logout(),this.forcedLogin&&t.reLaunch({url:"../login/login"})}})};n.default=c}).call(this,e("6e42")["default"])}},[["3422","common/runtime","common/vendor"]]]);
});
require('pages/user/user.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);

