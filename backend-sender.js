// Public part of VAPID key, generation of that covered in README
// All subscription tokens associated with that key, so if you change it - you may lose old subscribers
// You MUST need generate your own VAPID keys!
// Newer share your PRIVATE_VAPID_KEY. It should be stored in a safe storage
const VAPID_PUBLIC_KEY = "BF-abOKwdT3zPB_w1EOxyXqgiET5q1i8d-IeYBQrxFyAMmOEZ6k9q_huGGMNf-C4Q2sNlEXmdK_DnENpiBclAaY";
const VAPID_PRIVATE_KEY = "3XpkOxMsX06BijvEWX-tsxWnU8tWn1Yjg6_ncnLKklw";


// npm install web-push
const webpush = require('web-push');

webpush.setVapidDetails(
    'https://andreinwald.github.io/webpush-ios-example/',
    VAPID_PUBLIC_KEY,
    VAPID_PRIVATE_KEY
);

// CHANGE TO YOUR TOKEN FOR TEST
const pushSubscription = 
{
    "endpoint": "https://fcm.googleapis.com/fcm/send/dEovUD0l-TE:APA91bHtoJ6b1jYF9zHpXudjCF5iyjnoekKCFNFmvdj3CRz67PzfxVNHHj4n6D7_YL_4mwhnXnMEpUP1mWg93j6QfDxNVu-QtQuP17PV52jZpGdlsbf1c3wY8M3mZBLx6Gv0DxCgPQiZ",
    "expirationTime": null,
    "keys": {
        "p256dh": "BIma_DUvAzeNJOkldcHUfbxGWVOzbX8jHHcDKtodHyZRKcn9WbIXHAeHtGDlz1gJP09e27KeFi_t2QLRbE_Fd0g",
        "auth": "F1me1K8_Lq1BYuWkkcr1HQ"
    }
}
;

let pushData = JSON.stringify({
    "title": "Push title",
    "body": "Additional text with some description",
    "icon": "/images/push_icon.jpg",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg/1920px-Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg",
    "data": {
        "url": "https://andreinwald.github.io/webpush-ios-example/?page=success",
        "message_id": "your_internal_unique_message_id_for_tracking"
    }
});
webpush.sendNotification(pushSubscription, pushData);
pushSubscription1 = {"endpoint":"https://web.push.apple.com/QFWq07JGB5gmywk9LKYt2vsR9DZp3Bc902nFw_u7cTqkwMVjodV5zXkdcrFuhN2wDHcWz-VNbL2YSE-Bm0jgauVhbY8wi02hmgQONO8ckwdRqyx45DQacmR6P49MFdUZj1zFF9tg9-9OLVuQiUt5FLEYFVBCWocq0ReM1oU4eCY","keys":{"p256dh":"BB1yosvt1WtqiGaplVy5LQKSHfxeZV6A0Ep4Gccz3DqraVMfvzqO22dybqjOU0fis-B3bWvuLvcHSbVALFhuNrQ","auth":"MXqeoJdpmJen0Y50Fqw9oA"}};
webpush.sendNotification(pushSubscription1, pushData);
