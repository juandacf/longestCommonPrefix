/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var commonPrefix = ""
    var commonletter = ""
    var contador = 0
    if(strs.length===0){
        return ""
    } else if(strs.length===1|| strs[0]===""){
        return strs[0];
    }else {
        for(var j=0; j<=strs[0].length-1; j++ ){
            for(var i=1; i<= strs.length-1; i++ ){
                if(strs[0][j]!==strs[i][j]){
                    if (contador===0){
                        return ""
                    } else 
                    return commonPrefix.toString();
                } else{
                    commonletter= strs[0][j];
                }
                    
        }
        contador+=1;
        commonPrefix = (commonPrefix + commonletter).toString();
        }

    }
    return commonPrefix;
};

