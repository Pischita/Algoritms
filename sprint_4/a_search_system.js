const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

let inputLines = [];


_reader.on('line', line => {
    inputLines.push(line);
});

// Когда ввод закончится, будет вызвана функция solve.
process.stdin.on('end', solve);

function solve() {
    const countDocuments = Number(inputLines[0]);
    let skipLines = 1;
    const index = new Map();
    const documents = [];
    for(let i = 0; i < countDocuments; i++){
        const document = inputLines[i + skipLines];
        documents.push(document);
        const words = document.split(' ');
        
        for(let word of words){
            
            if(index.has(word)){
                index.get(word).push(i + 1);
            }else{
                index.set(word, [i + 1]);
            }
        }        
    }

    skipLines = countDocuments + skipLines;
    const countQueries = inputLines[skipLines];
    skipLines++;    

    for(let i = 0; i < countQueries; i++){
        const queryString = inputLines[skipLines + i];
        const queryWords = queryString.split(' ');
        const relevance = [];
        const uniqueWords = new Set();
        for(word of queryWords){
            if(uniqueWords.has(word)){
                continue;
            }else{
                uniqueWords.add(word);
            }

            if(index.has(word)){
                let wordIndexes = index.get(word);
                for(let ind of wordIndexes){
                    let existRelevance = relevance.find(item => ind === item[0]);
                    if(existRelevance){
                        existRelevance[1] = existRelevance[1]+ 1; 
                    }else{
                        relevance.push([ind, 1]);
                    }
                }
            }
        }

        relevance.sort( (a, b) =>{
            if(a[1] > b[1]){
                return -1;
            }else if(b[1] > a[1]){
                return 1;
            }else{
                if(a[0] < b[0]){
                    return -1;
                }else if(b[0] < a[0]){
                    return 1;
                }else{
                    return 0;
                }
            }
        } );
        let result = '';
        for(let k = 0; k < Math.min(5, relevance.length); k++ ){
            result += '' + (relevance[k][0] ) + ' ';
        }
        if(result){
            console.log(result);
        }
    }
}


let input = `100
iaszkhjoak lml okn copjfnmyg nxyqf dqegnckxrc mreawpgksu xu tdtt mg jvlsovvkw bcijmm wpobmir
suvg cdokvnrlv autkcvo xmzvmskvz ua wo oipkx qgtdhnmtoo dtecmiuf ivlyk gs ztszz jvlsovvkw pfmipny
kzoraga kniyhayzrb mreawpgksu lktelnzfc pxrwr jrwgibds aqnjfaeuam xiubvw qgfkni peccmimhr ydix
euy wugonfndb rtmks imkige pkqlsvbh pyv jyszayle zvbvf bis opbj arfur peccmimhr brlpeqq pvuqfc
rxntg cinoshf fcfcer gsnics vncnkvk hi cwcqumcjhu gnr zfpix zhkr chkcrrvau beu cfwvnay bbxprt
qrdjir hosbbyos tbb cfipdz jhpnizt tzwuhlzcw dq wdadqts xo it at cqkz xoiiasq jcdbpitph rqwwgiqs
ieopkmp dxvt vsfhasjv hjdatyst qvttu oaapik zj gvqyk oaapik esgqpk bsmts tffrnxztmv mpfxvf
hiuwmkh zgoys kzoraga osejhjrjbg qsqhm qmdu usnt qnxpg xjkmia iaszkhjoak tiaveof vifmuleo bxrnatzu
gecxvtgrdf uqvvb mekcylar binohp pa dqegnckxrc ivvxynhqui kvxbvn smvzoxxu kvjv fgwtlyp oco
ibiplpbdeq untkeumy jddryfqohu mbbji svjv qbfwyd cfjdnei zllufh ch zqjjnj auxyzrrv kikkzej
zixaxjjb ieopkmp gbkhskq etrpjuaulg qxofsaslwp ujrho kvaxzcblo srsijaops bfkm zxqg sh rmkws
fu epextjxzk nrvmbcqcr ny tzupyaryc ovkczj rmkws jjwaskhxja sljeoshpxl kmil bcupdjq oigngby
cqeey nec myz bwnmwsp dxe cwyh ay riihjdf hxcxpzq gpmno hi uetomlo ieawft jydozyqmap onuhtupja
lhkpctoog jyszayle jossvcj oigngby nqpjatrull hebzjd tu lop lksqhr uy vet keigxemgyr oylzzfljls
ulyypz mujf ovkczj ttndw tffrnxztmv ozz jgynicb rbubbw sytla ktswsfnb pjrry zgead afexauy ndprn
xrmbi zcwwc aiwgp pklqhahtmf bpdhcabq tlcj qzcgtisv ndprn uoykq ycxolh lcpxp mpv auxyzrrv kgazeulbwb
zwgha arfur dkhukxm zkgkqja xjkmia pklqhahtmf zsxfwii sh ilsoxihozl nyo cuzyzdrz chgu gmcmaishc
vxdqxnqnvn amkz unracmkc fjkdjxvtq xrmbi cqeey lbadhufl ktfuvsl lhu pkqlsvbh gbkhskq zqjjnj
oy jkqqhfuub zikmiqqu wdadqts kxwkrbq jgynicb ltdhcqah fpemxcnvv mpv ldxqonejed pfsavpgc vsfhasjv
pklqhahtmf qhiqx hwpe bu gs luqyfndtvi rmvgsaksks nojfj qgtdhnmtoo cqeey ctas oaapik lm ckutg
oh gqz cqkz ilgzea qgfkni pklqhahtmf yurb ukcurvcc tzupyaryc rcf snzusfvrp qvttu bmn vnwctsxb
ldxqonejed unefx knb hs scpplnlqqd gpmno oy vxdqxnqnvn zxt fr edsv onuhtupja xiubvw dgn ktswsfnb
htibaplqa dx wkjnocbbsv rvg sytla kbkottunq wjsfwr fbmgliu sxip becdpytu lm zataekerig lk qewwplk
seogoip ld tqjxwupw uzfmw lumec jgynicb snzusfvrp hkr rhpboijexc eekpqndcr rqlz zmlsrruycj
hosbbyos ha wpobmir kdgzj rgcqsm xml thvsuoop iaszkhjoak cwcjdrii zemhwvg udefqgiqn hlfecj
pnclkaadoo autkcvo ck upuzd dibe usxfsilsfi bmn menwmnmphq yeuqpp jd xdatgbrb ed hfuzkj rtt
ecmgcynb jkqqhfuub ypioqq rhpboijexc nsqzyl wsgpjlei nuiyc sljeoshpxl ojvfjf vphawgsxya rmwuzbd
gfaox enyxt duk ck iqq yeuqpp jddryfqohu yokjhcuys qmconkpike pvhy pkgncwjn jg kevth mdkcumpioz
onuhtupja zgobmtaauz gpwgpg hwreiua pxrxz smvzoxxu wtujidre pdcbhldu ivlyk uqiwvoqcf errdn
la gmav errdn la jxtyfimw lv fh hgmgmoizkm edsv pkgncwjn zsxfwii ciuksxvdji wijgllawe tvvug
wpxloc vifmuleo oaapik yaaneisx rqwwgiqs kplj mwkwwor oh ynzc vuml bbyvjjbncf htibaplqa tzcksuzb
suywicbqm ycsgocoab kneaikd vvgcdo hkegg thvsuoop jsuibndpmc ztszz oaapik qpoh rqlz suywicbqm
gwpc ycxolh rxktljpxlf jg hbrnoanoe ekinplthn dhv jpdcnghv fwvzv ttgpvbhpf zemhwvg bcupdjq
su rmkws bcupdjq xogrewqjg mppekxykkb wkjnocbbsv swiwhbzhaw kowm mx usnt jakpaaqv whzbrpc hi
dxe ed pjrry jdg ldxqonejed lv ekinplthn rbgrgvkqa ftpreoi avgqcwae gbmkcrq qutn foamnezsoc
nsg udioljbyrv dhv pkgncwjn mig usx brxi pypakybfl etjs lgnp bxyvbkhu hopgzfq ot qhbpbp ygkpazs
cgkabirxum alh rbubbw uqt tvrzs braintlqy cqkz lrz eekpqndcr wugonfndb lbadhufl vbsbanumvj
xsh bis nt bp snzusfvrp fjusuavhx bfkm qhbpbp zllufh cwcjdrii fwfcbnerno vamatlcb unefx mhtrq
pypakybfl vfckbuqwsw xvzrypbkya rclopnmc ywdqlgypse nbeht lvwjeypov jqudb nojfj ta gd zqjjnj
nsqbo uqt ij fjxkibzo ttndw qxofsaslwp uqjgqz zn zikmiqqu lxcrr gnr rmwuzbd ubgx lgnp idwix
qmlhypnpi nrvmbcqcr uyzcjae eycxywan mwkwwor nxyqf ukzxptzglc xi ydmpx qiddegnz gfaox dgrsxfqw
hkr inyxgt fyqbmnhv xc vyusbmrqq bpodwwapc wz fzgcsla mx lhu sbqzt ndxksjrft dtvzq qndftxz
arfur scuejrtyt cqeey qdaugqbwhx gmcmaishc wsgpjlei oleeorlsxc iomloqjn folabwflbb kneaikd
irtozr ilgzea npknhrst bsyef ui dxejsjhsjq fjxkibzo zgobmtaauz dhv usof ecyxdxa nuiyc fdup
ilsoxihozl ttgpvbhpf ci irtozr ay zxzdlmtas nec kobsz widdkejv thvsuoop iycmwaw dolxnxn ovkczj
smvzoxxu dm flg cfwvnay igloi xml kzpdwzxr vphawgsxya iycmwaw zj gs shjtdz kplj gs ilgzea dxejsjhsjq
eoyhd ivvxynhqui jsuibndpmc kx wdadqts sytla cwcjdrii idwix pkgncwjn udefqgiqn namfc tvrzs
mekcylar lop cqeey kxewwvudim kuofyxt hcxkmgmypj djspktt nz wdadqts zmlsrruycj xsh iqq prjnpjgfta
aqzvd aq fkwg wugonfndb kmk qndftxz yhf zvtsvvq wtujidre kte smvzoxxu brlpeqq vsfhasjv euy
rygei kvxbvn uqjgqz uqiwvoqcf ijbw iierhyhlq zxguducdg qj zkw usx errdn bxbkzm ta otabjmkgfr
rxktljpxlf bp hmwo twixfvprqt ekfqfmid qhiqx gd qdaugqbwhx ot bmn oyobypfa msb ziaarb bcbjgn
okn ooydxyxbo gfaox yk cwyh pojolywazy zvbvf pgspsxr ueajeek xfjuupqn ov oemxovjctb hbacto
bp fpvelv pxrxz vygpuby zzeudjkrs gmeqemu pefbxugju vplyq hepxpdnm hdpvbj ms wberp oeudtlqdk
ogvwi qeprrbtdwe dx urggbvvs dgn svyqwvx rfifkwucub brxi zvbvf hxcxpzq qksrq kvadwc ehzzgd
fgwtlyp tnxmzmghiy dq ay evrgrpdtk qxofsaslwp cbrxnqjxo ywdqlgypse qewwplk xdbj ijwd hgapysh
gevestgz ozz txno qosk qewwplk no yauystmn byfsl hs ojvfjf opbj xh gecxvtgrdf mocfna pgspsxr
jcdbpitph tpbubrtbh bdybymxin bmpt vx hbrnoanoe lz fbbhdnpibr it cfwvnay aq tzcksuzb ltmuis
ieopkmp guw tj pcan tdtt guv vamatlcb cinoshf zybtyojul nqjln ciuksxvdji car shywniswkh ulyr
ny aa qp qj iqq zsxfwii qbtcjc zxzdlmtas scuejrtyt unefx kmil rvryh ynzc kuofyxt ozz lccusmfe
ppxuivk gkks fzwy vfckbuqwsw zixaxjjb lop dtvzq dolxnxn phqvnyun lntm pnclkaadoo hmwo fdsbpjbq
pfsavpgc yoiwsxb xfwagw yd ma rmwuzbd ta rgcqsm tffrnxztmv gb fitwelokqk xfwagw untkeumy miohyz
qewwplk irtozr hlbshhucx tbb chtbhknj qosk svjv gakm no uoknvow nrvmbcqcr hbrnoanoe hepxpdnm
zmlsrruycj yk xbik whzbrpc rclopnmc drjk vyhp jj fr jsuibndpmc bsmts ff vixkzagv luh mkmri
zaui seogoip vqigzfdh oyobypfa gs ncz deqa qmdu ukfhafoj znex urggbvvs cg eycxywan rlaxz mepfrx
xl hobtoljz rekjff errdn rtmks mbsu ndauyx hepxpdnm scuejrtyt no vixkzagv ycxolh raookcu bpodwwapc
cuzyzdrz luh nhuusjqik ltdhcqah ydmpx zcwwc odxrcrdykk gmcmaishc myk hiezqbkbi ndauyx kyctmyq
uih ov hjdatyst esxtroaq becdpytu dx pneigx dtecmiuf jibtawabu msb jxtyfimw ydqa vqujgkdgy
ny oco pa gog axmetzrca foamnezsoc yyxnpdiky hdpvbj jbrucdw aquzr qewwplk lu ivf djl lexwapjf
usof cwh ydmpx mhtrq tzcksuzb bkujmb gpdvlve jtd cfjdnei lplzdo pelbzab rlaxz raookcu lzqljtmsbs
hbrnoanoe vbsbanumvj tbb fyyhaf qndftxz tdtt rmvgsaksks zhkr ezcywfabrk edicza vxdqxnqnvn chkcrrvau
fjusuavhx mujf fyyhaf os hkr axmetzrca ykumrbbmnj wjsfwr okmc fbbhdnpibr byicoeoxpx lk ck jhme
lxalfrnya chkcrrvau dswpb opznrto jjwaskhxja mepfrx fh yurkret etjs jnlze dtvzq kt ma dx knb
wlialru zaui dnqyowqg jbzziggzg xyer mg axey jrxb rhmsckbag usof au lrtnsv ykvkz oy odxrcrdykk
oeudtlqdk tvvug fkwg ivf aiwgp dhv zybtyojul cwyh skfhmfgl lv hmwo lhndnztr luh fwvzv cpr gog
gxl bwxsyqbsig jhpnizt qohz uqvvb bxyvbkhu dxejsjhsjq dibe phtpdop dexcpyxxs muq jsg sxip xvzrypbkya
wq qewwplk ny aqzvd naxw uou ekfqfmid vpub usnt fztqw koic gakm tzupyaryc dfnlmjgy fwfcbnerno
jthad zsbz evrgrpdtk mekcylar fwvzv ha mujf dqkhxreti vwdka ohm qxzxnrqstm vwqvleul ygkpazs
nk oylzzfljls lxalfrnya drjk dohgvnyeh abu hjdatyst uaqqkta ycsgocoab jhme mchcjjxvu cojp qxofsaslwp
untkeumy oy skfhmfgl dbdw hxcxpzq jwfgcjm yd xgnja jkqqhfuub nizetso zlzt knb qpoh ieopkmp
zgunzv mg fkwg lgnp myz xjhhi cqeey mepfrx tvrrwbulw drbpn hhlyl mqwl ha hbrnoanoe myz dqanxbw
vphawgsxya ycpmsqy iaiysrgc zxguducdg sljeoshpxl rtmks io uoykq ov axey pxrxz ixmdzbsghu scedmx
aqzkwmudy hkhbzcbt tvvug zaui xo tlcj irtozr fsveb bbxprt fjkdjxvtq jkqqhfuub alqsrdpf iycmwaw
suywicbqm npknhrst suywicbqm nrvmbcqcr cgfr bwnmwsp qp zxbk xtqqvxtz rfifkwucub wzsaa kx amrhqf
vigu ua scpplnlqqd ftpreoi cfipdz qhiqx unracmkc otabjmkgfr ilgzea cheowwjcve exqxnpzbq ukzxptzglc
gqz cqkz foamnezsoc oco ycsgocoab yk cinoshf njsfc aubgi njsfc mwkwwor uyugmlh pvhy rlaxz ezcywfabrk
gt afexauy zaui srsijaops rgcqsm mepfrx cfkdbj mqwl qmlhypnpi jr yjmpwt pvhy ykvkz sytla vphawgsxya
ywdqlgypse rqlz cwcqumcjhu vuml rrmtlnbf mzwyax gfdiupt ydix ibiplpbdeq yrza qeprrbtdwe foamnezsoc
brlpeqq oleeorlsxc kqdctsaj vgp nt alqsrdpf vxdqxnqnvn gb cbtdvx mtrm gsnics zsaqiiinyy pkgncwjn
fqr chkcrrvau pfsavpgc rqlz pxrwr vnwctsxb zzbvzegy ukcurvcc fu fbmgliu ulyr guw gyqkbfp gfaox
unxqejcjpp vsfhasjv hsemz ilsoxihozl qywmmryymu afqdyw ydmpx gpdvlve oaapik xgpyd xvcravf nsqbo
rclopnmc mrdvtq xjamrq ukfhafoj gxl idwix xdbj ltmuis yaaneisx rhpboijexc aqbxwhc krxri hqccg
beu lcpxp flg mlijkcn hjdatyst xbrawjpaa mekcylar yauystmn hwpe lhkpctoog tzupyaryc oaapik
hjdatyst hwreiua xyer hflrsqq ivk yaaneisx kuofyxt oeudtlqdk kkikgwhcy okn goamezrr afexauy
gfdiupt fyqbmnhv gyqkbfp pxrwr oemxovjctb oleeorlsxc jrwgibds hepxpdnm scedmx yvngqga bsmts
jid no hlfecj uqt jj eycxywan jfxn ywdqlgypse lyvz ptxlfp svi jwo tvrrwbulw kvaxzcblo zgead
kgazeulbwb kvxbvn cagitkpk lzqljtmsbs vyusbmrqq tnxmzmghiy scuejrtyt irlzv tvrrwbulw rfnpxc
bxyvbkhu thvsuoop ldxqonejed qndftxz qdaugqbwhx prck lksqhr qutn rbubbw jnlze mbsu bxyvbkhu
skqsvedoti tzcksuzb loj vbsbanumvj mlijkcn twixfvprqt axmetzrca ot rzv zsxfwii uyugmlh gnr
jg kvxbvn fsogfg esgqpk cagitkpk ibiplpbdeq fpvelv hflrsqq zsxfwii sljeoshpxl nvjcox bwnmwsp
vvbg ivvxynhqui wz scuejrtyt lntm jfajusegz jyszayle thvsuoop ukzxptzglc nxyqf lml ycsgocoab
30
skfhmfgl dgzahwwkqh jossvcj tvrrwbulw cqkz kdgzj cagitkpk gnr sxip fmsdw rrmtlnbf rqlz cagitkpk
thvsuoop vncnkvk uxuszqfknh no kvadwc kx tpbubrtbh ay kmil dibe luh wzsaa cwcjdrii gyqkbfp
pjrry ezcywfabrk yaaneisx dswpb bpdhcabq rvryh aquzr nuiyc fcfcer pxrxz blvfeqle rbubbw gmlnstzqh
hkegg xlmslrahu bu yeuqpp lm nvjcox hiuwmkh rtmks drjk zikmiqqu uoykq mujf bfkm lrz usof gnr
fpvelv prck vgp qdaugqbwhx qmlhypnpi mqedw rvg qpoh ijbw vphawgsxya kzpdwzxr ycxolh kgazeulbwb
gog yjmpwt phqvnyun vfckbuqwsw whzbrpc fbbhdnpibr ttgpvbhpf dxejsjhsjq luh sljeoshpxl elkfbfpahd
qywmmryymu uqt gmcmaishc rkvd jbrucdw mqwl kvxbvn rfifkwucub ydqa smvzoxxu wlljtlcbkl aqzvd
oco otabjmkgfr iycmwaw rhpboijexc pgspsxr usxfsilsfi vwqvleul uqiwvoqcf miatnggfz ieopkmp bxyvbkhu
zsxfwii pkqlsvbh vuml fvekt vqnxe kuofyxt alcdtzbh zaui fr zqjjnj yrza chgu esgqpk qqnfz ukcurvcc
etjs aqbxwhc jg rzv auxyzrrv nqjln shywniswkh ojvfjf msdqoq ilgzea dexcpyxxs rhzxb xmanaaua
kklcvzzbu nk vet yauystmn vvgcdo dtecmiuf khahcswjqf hfvq vxdqxnqnvn fsogfg kvxbvn rxktljpxlf
vbsbanumvj ltmuis yaaneisx rmvgsaksks lop auxyzrrv lml pgspsxr pxrwr ypioqq hiw lop dyitk ieawft
dxejsjhsjq usnt hgapysh dxe dhv uoykq kmk euy ay ya gfaox pa cqkz cydzs ekfqfmid vfuwllx cqkz
hiae aq fpemxcnvv pkqlsvbh ot bkgscucdo nojfj ta okn bpodwwapc ekfqfmid qvttu cojp ycxolh dtecmiuf
guw yqwpnc xtiiypbl ff hiuwmkh ld dtvzq gpeyea hjdatyst menwmnmphq oco rclopnmc qmlhypnpi zxt
vvbg scedmx yjmpwt uyzcjae lyvz hxcxpzq eekpqndcr fwfcbnerno ivlyk gsv bmn zsaqiiinyy zgunzv
bmn vyhp peccmimhr zllufh igloi oh gyqkbfp foamnezsoc alh mjqmbmp myz epextjxzk bis vqigzfdh
ykumrbbmnj xjkmia vb cwivcvaytr oy lv cv ihgetij gtknvfg aqbxwhc lu xgpyd qozlyqql ulyr tlcj
nizetso goeefywx dswpb bp qndftxz qbfwyd cpr pxrwr drbpn qxofsaslwp zllufh mppekxykkb unefx
cdygibwf jtvdz mepfrx uih xsh nojfj hepxpdnm tzupyaryc jyszayle uaqqkta qpoh yozuquh usnt fzwy
dqanxbw foamnezsoc udioljbyrv wugonfndb it jbrwkr jj qxofsaslwp tbb scedmx xyer scedmx cfwvnay
euy qhiqx qgtdhnmtoo tffrnxztmv aa fyqbmnhv rrmtlnbf jxtyfimw odxrcrdykk rclopnmc ueajeek xoiiasq
nkmgh rrmtlnbf vphawgsxya auxyzrrv rqlz untkeumy lumec gwpc bwnmwsp nkvb tlsimbjt ovkczj hlfecj
uy bp hwreiua ppxuivk qralqeitiy dx mbbji dibe fu xdbj ovkczj kxwkrbq tzcksuzb rogrldz rqwwgiqs
xyer xj rmvgsaksks knb tzupyaryc dwqqtqz lwlxnercyx bpodwwapc ua uqjgqz mdkcumpioz cbtdvx mekcylar
qdaugqbwhx yqrl rapnell wq wq irlzv jrwgibds fjxkibzo cwcjdrii lntm nvjcox uytgfpxa foamnezsoc
rclopnmc ha oaapik iaszkhjoak xjcvpxotc oigngby gs mpv nk zcwwc vuml ukcurvcc widdkejv tzcksuzb
zlzt cbtdvx qnxpg kneaikd srsijaops fwfcbnerno nk cgfr sytla fwvzv evrgrpdtk ixmdzbsghu qndftxz
pwf okn hcxkmgmypj kzoraga idwix sbqzt vyusbmrqq suvg lbadhufl zcwwc ov jsuibndpmc bdybymxin
jg myz dhv hkr hgapysh jkqqhfuub tnxmzmghiy rmwuzbd oykqnax raookcu ueajeek oh jbzziggzg dybkvpyqj
`;

inputLines = input.split('\n');

solve();