import cluster from 'cluster';
import os from 'os';

const numCPUs = os.cpus().length;

if (cluster.isMaster) {
	for(let i = 0; i < numCPUs; i++) {
		cluster.fork();
	}

	cluster.on('exit', (worker, code, signal) => {
		console.log(`Info: worker ${worker.process.pid} died!`);
		console.log('Info: started a new worker');
		cluster.fork();
	});
} else {
  require('./server');
}
