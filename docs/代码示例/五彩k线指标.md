<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- 展示广告3 -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-6890694312814945"
     data-ad-slot="8321470275"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>

!!! note "身怀六甲"
    输出KSTAR:1日前的收盘价-1日前的开盘价的绝对值/1日前的收盘价>0.04并且收盘价-开盘价的绝对值/收盘价<0.005并且收盘价和开盘价的较大值<1日前的收盘价和1日前的开盘价的较大值并且收盘价和开盘价的较小值>1日前的收盘价和1日前的开盘价的较小值
    ``` tdx
    KSTAR:ABS(REF(CLOSE,1)-REF(OPEN,1))/REF(CLOSE,1)>0.04&&
    ABS(CLOSE-OPEN)/CLOSE<0.005&&
    MAX(CLOSE,OPEN)<MAX(REF(CLOSE,1),REF(OPEN,1))&&
    MIN(CLOSE,OPEN)>MIN(REF(CLOSE,1),REF(OPEN,1));
    ```

!!! note "曙光出现"
    若1日前的收盘价/1日前的开盘价<0.97ANDCLOSE/开盘价>1.03ANDOPEN<1日前的收盘价ANDCLOSE>1日前的收盘价则将最近3周期置为1
    ``` tdx
    BACKSET( 
    REF(CLOSE,1)/REF(OPEN,1)<0.97 AND 
    CLOSE/OPEN>1.03 AND 
    OPEN<REF(CLOSE,1) AND CLOSE>REF(CLOSE,1), 3);
    ```

!!! note "倒转锤头"
    输出KSTAR:开盘价和收盘价的较小值=最低价并且最高价-最低价>3*(开盘价和收盘价的较大值-最低价)并且收盘价<收盘价的5日简单移动平均
    ``` tdx
    KSTAR:MIN(OPEN,CLOSE)=LOW&&
    HIGH-LOW>3*(MAX(OPEN,CLOSE)-LOW)&&
    CLOSE<MA(CLOSE,5);
    ```
!!! note "乌云盖顶"
    若1日前的收盘价/1日前的开盘价>1.03ANDCLOSE/开盘价<0.97ANDOPEN>1日前的收盘价ANDCLOSE<1日前的收盘价则将最近3周期置为1
    ``` tdx
    BACKSET( 
    REF(CLOSE,1)/REF(OPEN,1)>1.03 AND 
    CLOSE/OPEN<0.97 AND 
    OPEN>REF(CLOSE,1) AND CLOSE<REF(CLOSE,1), 3);
    ```
