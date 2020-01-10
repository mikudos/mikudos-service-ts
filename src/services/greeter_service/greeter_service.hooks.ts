export async function hook1(ctx: any, next: Function) {
    // TransactionManager.commitTransaction
    console.log('GreeterService service hook');
    await next();
}

export async function hook2(ctx: any, next: Function) {
    // TransactionManager.beginTransaction(hook, skipPath)
    console.log('SayHello method hook');
    await next();
}

export async function hook3(ctx: any, next: Function) {
    console.log('this is hook3');
    await next();
}

export async function hook4(ctx: any, next: Function) {
    console.log('this is hook4');
    await next();
}
