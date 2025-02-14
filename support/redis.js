import { Queue } from "bullmq";

const connection = {
    host: 'paybank-redis',
    port: 6379
}

const queueName =  'twoFactorQueue'
const queue = new Queue(queueName, {connection})

export const getJob = async () => {
   const jobs = await queue.getJobs() // busca todos so jobs do redis
   return jobs[0].data.code // pega somente o primeiro job
}

export const cleanJobs = async () => {
    await queue.obliterate()
}