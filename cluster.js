let cluster = require('cluster')
 if(cluster.isMaster){
 	let cpucount = require('os').cpus().length;

 	for (let i=0 ; i < cpucount ; i++) cluster.fork()
 	cluster.on('exit', () =>{
 		cluster.fork();
 	});	
 }
 else require('./app')