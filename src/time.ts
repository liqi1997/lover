// 获取当前日期对象
interface DateObj {
    year: number;
    month: number;
    day: number;
}

export function getCurrentDate(): DateObj {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    return {
        year,
        month,
        day
    }
}