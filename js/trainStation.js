//車站開始結束，以逆行為主（即西部幹線，北方車站為開始，南方車站為結束．
//start:北方車站，end:南方車站，arrival可以為地名，如舊鐵橋，其距離可依距離比例推算到達時間．
var station = {
    start:"鳳山",   
    arrival:"後庄",
    end:"屏東"
}
//順行--北上
var GoN=[
['區間3122','05:17','05:12','05:00'],['區間3128','05:32','05:27','05:15'],['自強108','05:51','05:46','05:36'],['區間3132','06:04','05:59','05:47'],['區間快3052','06:17','06:12','06:03'],
['區間3138','06:27','06:22','06:10'],['自強112','06:43','06:38','06:28'],['區間3140','06:56','06:51','06:39'],['區間快1006','07:14','07:09','07:00'],['區間3142','07:17','07:09','06:53'],
['區間快3054','07:28','07:23','07:13'],['區間3148','07:38','07:33','07:21'],['普悠瑪110','07:47','07:43','07:36'],['自強114','08:01','07:56','07:46'],['區間3152','08:13','08:08','07:56'],
['區間3310','08:20','08:15','08:03'],['區間3158','08:34','08:29','08:17'],['區間快3058','08:42','08:37','08:28'],['自強116','09:01','08:56','08:45'],['區間3162','09:09','09:04','08:52'],
['區間快3062','09:32','09:27','09:18'],['自強192','09:38','09:33','09:24'],['區間3168','09:42','09:33','09:12'],['自強118','09:57','09:52','09:41'],['莒光702','10:05','09:59','09:47'],
['區間3172','10:18','10:13','10:01'],['區間快3064','10:32','10:27','10:18'],['區間3178','10:43','10:38','10:26'],['自強(3000)306','10:55','10:51','10:43'],['自強172','11:01','10:57','10:48'],
['區間3182','11:09','11:03','10:51'],['區間3188','11:31','11:26','11:14'],['自強122','11:56','11:52','11:43'],['區間3192','12:10','12:05','11:53'],['區間3320','12:20','12:15','12:03'],
['自強(3000)372','12:35','12:31','12:24'],['區間3198','12:38','12:30','12:14'],['自強176','12:47','12:43','12:34'],['區間3202','13:08','13:03','12:51'],['區間快3072','13:22','13:17','13:07'],
['自強128','13:29','13:24','13:12'],['莒光554','13:35','13:30','13:20'],['區間3208','13:44','13:39','13:27'],['自強(3000)5140','13:51','13:47','13:40'],['區間3212','14:02','13:57','13:45'],
['莒光704','14:10','14:04','13:51'],['普悠瑪5314','14:16','14:12','14:03'],['自強134','14:29','14:24','14:12'],['區間3218','14:34','14:29','14:17'],['普悠瑪308','14:43','14:39','14:32'],
['區間3222','14:54','14:49','14:38'],['區間快1038','15:02','14:57','14:46'],['區間快3074','15:09','15:04','14:54'],['自強138','15:29','15:24','15:13'],['區間3228','15:32','15:23','15:02'],
['普悠瑪136','15:15','15:13','15:10'],['普悠瑪314','15:43','15:39','15:32'],['區間3232','15:53','15:47','15:35'],['自強142','16:01','15:57','15:48'],['區間3328','16:07','15:59','15:43'],
['區間3238','16:28','16:23','16:11'],['區間快3028','16:43','16:38','16:29'],['自強144','16:49','16:44','16:35'],['區間3242','17:02','16:55','16:39'],['自強(3000)422','16:57','16:53','16:46'],
['自強146','17:16','17:11','17:01'],['區間快3078','17:22','17:17','17:08'],['區間3248','17:29','17:23','17:11'],['區間3250','17:44','17:37','17:21'],['自強(3000)378','17:43','17:39','17:32'],
['區間快3032','17:53','17:48','17:39'],['自強150','18:02','17:57','17:45'],['莒光666','18:08','18:03','17:52'],['區間3252','18:14','18:09','17:57'],['區間3334','18:30','18:25','18:13'],
['區間3258','18:42','18:37','18:25'],['自強152','18:56','18:51','18:39'],['莒光708','19:00','18:55','18:43'],['區間快3082','19:08','19:03','18:52'],['區間3262','19:15','19:10','18:58'],
['自強(3000)386','19:27','19:23','19:15'],['區間3266','19:35','19:29','19:17'],['自強(3000)324','19:47','19:43','19:35'],['區間3268','19:58','19:53','19:41'],['區間快3038','20:17','20:12','20:03'],
['區間3272','20:29','20:24','20:12'],['自強(3000)326','20:47','20:43','20:36'],['自強156','21:00','20:55','20:43'],['區間3278','21:04','20:59','20:47'],['區間3282','21:32','21:27','21:15'],
['區間3288','22:00','21:55','21:43'],['普悠瑪328','22:09','22:04','21:54'],['區間3292','22:20','22:15','22:03'],['區間3294','22:38','22:33','22:21'],['自強(3000)434','22:50','22:46','22:39'],
['區間3348','23:31','23:26','23:14']];
//逆行--南下
var GoS=[
['自強149','00:02','00:05','00:15'],['區間3287','00:16','00:21','00:33'],['自強181','00:27','00:30','00:40'],['普悠瑪333','05:20','05:25','05:37'],['區間3305','06:03','06:08','06:21'],
['區間3111','06:34','06:39','06:51'],['莒光701','06:48','06:53','07:06'],['區間3117','06:57','07:02','07:14'],['區間快3051','07:08','07:14','07:31'],['自強(3000)301','07:16','07:19','07:28'],
['區間3121','07:33','07:38','07:51'],['自強(3000)415','07:54','07:57','08:06'],['區間3127','08:02','08:07','08:19'],['區間快3053','08:09','08:14','08:26'],['區間3131','08:21','08:26','08:38'],
['自強101','08:35','08:39','08:51'],['區間3137','08:55','09:00','09:13'],['莒光501','09:07','09:11','09:23'],['區間快3005','09:12','09:16','09:28'],['區間3311','09:29','09:36','09:53'],
['自強(3000)371','09:36','09:39','09:48'],['區間3141','09:46','09:51','10:03'],['區間3145','10:00','10:05','10:17'],['區間3147','10:11','10:16','10:29'],['自強(3000)377','10:33','10:36','10:45'],
['區間快3057','10:41','10:45','10:56'],['區間3151','10:51','10:56','11:08'],['自強(3000)307','11:05','11:08','11:17'],['自強(3000)5143','11:40','11:40','11:42'],['區間3157','11:27','11:32','11:44'],
['普悠瑪111','11:54','11:54','11:57'],['自強103','11:39','11:45','12:02'],['區間快3061','12:01','12:05','12:16'],['區間3161','12:11','12:16','12:28'],['自強105','12:18','12:22','12:33'],
['區間3167','12:39','12:44','12:56'],['區間3171','13:01','13:08','13:26'],['自強(3000)431','13:11','13:14','13:23'],['區間快3063','13:20','13:24','13:36'],['區間3177','13:28','13:33','13:46'],
['自強113','13:34','13:38','13:50'],['區間3181','13:55','14:00','14:13'],['自強115','14:07','14:11','14:22'],['區間快3067','14:11','14:15','14:26'],['莒光707','14:28','14:33','14:45'],
['區間3187','14:31','14:36','14:50'],['區間3191','14:42','14:47','15:00'],['自強117','15:04','15:08','15:20'],['區間3197','15:12','15:17','15:29'],['普悠瑪5319','15:23','15:26','15:36'],
['區間快3071','15:28','15:32','15:44'],['區間3201','15:45','15:50','16:03'],['自強121','16:03','16:06','16:16'],['普悠瑪317','16:13','16:16','16:24'],['區間3207','16:26','16:31','16:43'],
['區間快3073','16:33','16:37','16:48'],['區間3211','16:48','16:53','17:05'],['自強123','17:03','17:07','17:18'],['普悠瑪127','17:13','17:16','17:26'],['區間3217','17:09','17:16','17:33'],
['莒光713','17:24','17:29','17:42'],['區間3331','17:34','17:39','17:51'],['區間3221','17:49','17:54','18:07'],['自強125','18:03','18:07','18:18'],['區間3227','18:18','18:23','18:35'],
['區間快3023','18:25','18:32','18:51'],['自強(3000)323','18:36','18:39','18:48'],['區間3229','18:46','18:51','19:03'],['自強129','18:55','18:59','19:10'],['區間3231','18:58','19:03','19:16'],
['區間3235','19:05','19:10','19:22'],['區間快3029','19:14','19:18','19:30'],['區間3237','19:30','19:35','19:47'],['區間快3031','19:40','19:44','19:56'],['自強191','19:49','19:53','20:04'],
['區間3241','19:55','20:00','20:13'],['自強135','20:04','20:08','20:19'],['自強(3000)385','20:21','20:24','20:33'],['區間3247','20:24','20:29','20:42'],['區間快3035','20:36','20:40','20:52'],
['區間快3081','20:45','20:49','21:01'],['區間3251','20:56','21:01','21:14'],['自強175','21:10','21:14','21:26'],['區間3257','21:24','21:31','21:48'],['區間快3033','21:30','21:34','21:45'],
['區間3261','21:43','21:50','22:07'],['普悠瑪327','21:49','21:52','22:01'],['自強139','21:59','22:03','22:15'],['區間3267','22:14','22:19','22:31'],['自強143','22:23','22:28','22:40'],
['區間快3087','22:30','22:34','22:46'],['自強141','22:36','22:40','22:52'],['區間3277','22:48','22:53','23:05'],['莒光521','23:05','23:09','23:20'],['區間3271','23:13','23:18','23:30'],
['自強145','23:32','23:36','23:48'],['區間3281','23:41','23:46','23:58']
];
