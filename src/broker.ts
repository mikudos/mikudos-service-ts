const BROKER_ADDRESSES = process.env.BROKER_ADDRESSES
    ? String(process.env.BROKER_ADDRESSES).split(',')
    : null;
import { Kafka, KafkaConfig } from 'kafkajs';
import { Application } from 'mikudos-node-app';

const run = async (consumer: any, topic: string) => {
    await consumer.subscribe({
        topic,
        fromBeginning: true,
    });

    await consumer.run({
        eachMessage: async ({ topic, partition, message }: any) => {
            console.log({
                partition,
                topic,
                key: message.key.toString(),
                offset: message.offset,
                value: message.value.toString(),
            });
        },
    });
};

export = function (app: Application) {
    if (BROKER_ADDRESSES)
        app.set('kafka', { ...app.get('kafka'), brokers: BROKER_ADDRESSES });
    const kfConfig: KafkaConfig = {
        clientId: app.get('kafka').clientId,
        brokers: app.get('kafka').brokers,
    };
    const kafka = new Kafka(kfConfig);
    const producer = kafka.producer();
    const ProducerConnectPromise = producer.connect();
    const consumer = kafka.consumer({
        groupId: app.get('kafka').consumer_group,
    });
    const ConsumerConnectPromise = consumer.connect();
    ProducerConnectPromise.then(() => {
        app.context.broker = producer;
    });
    ConsumerConnectPromise.then(() => {
        app.context.consumer = consumer;
        run(consumer, app.get('kafka').topic);
    });
};
