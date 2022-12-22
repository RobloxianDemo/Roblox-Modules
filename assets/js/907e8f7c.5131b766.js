"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[25],{16480:e=>{e.exports=JSON.parse('{"functions":[{"name":"Any","desc":"Returns the value of the first promise resolved.","params":[{"name":"Promises","desc":"","lua_type":"{ Promise<T> }"}],"returns":[{"desc":"Promise that resolves with first result","lua_type":"Promise<T>"}],"function_type":"static","source":{"line":36,"path":"src/PromiseUtilities/init.lua"}},{"name":"All","desc":"Executes all promises. If any fails, the result will be rejected. However,\\n\\tit yields until every promise is complete.\\n\\n:::warning\\nPassing in a spare array (i.e. {nil, promise}) will result in undefined behavior here.\\n:::","params":[{"name":"Promises","desc":"","lua_type":"{ Promise<T> }"}],"returns":[{"desc":"","lua_type":"Promise<T>"}],"function_type":"static","source":{"line":66,"path":"src/PromiseUtilities/init.lua"}},{"name":"Invert","desc":"Inverts the result of a promise,\\n\\tturning a resolved promise into a rejected one, and a rejected one into a resolved one.","params":[{"name":"CurrentPromise","desc":"","lua_type":"Promise<T>"}],"returns":[{"desc":"","lua_type":"Promise<T>"}],"function_type":"static","source":{"line":108,"path":"src/PromiseUtilities/init.lua"}},{"name":"FromSignal","desc":"Creates a promise from a signal.","params":[{"name":"Signal","desc":"","lua_type":"Signal<T>"}],"returns":[{"desc":"","lua_type":"Promise<T>"}],"function_type":"static","source":{"line":137,"path":"src/PromiseUtilities/init.lua"}},{"name":"Timeout","desc":"Creates a new promise from the given promise that will reject after the given `TimeoutTime`.","params":[{"name":"TimeoutTime","desc":"In seconds.","lua_type":"number"},{"name":"FromPromise","desc":"","lua_type":"Promise<T>"}],"returns":[{"desc":"","lua_type":"Promise<T>"}],"function_type":"static","source":{"line":162,"path":"src/PromiseUtilities/init.lua"}}],"properties":[],"types":[],"name":"PromiseUtilities","desc":"Utility methods for promise","source":{"line":24,"path":"src/PromiseUtilities/init.lua"}}')}}]);