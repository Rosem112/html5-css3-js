function calcular(){
    var salario = document.getElementById('salario')
    var bienio = document.getElementById('bienio')
    var dias_uteis = document.getElementById('diasuteis')
    var domingo = document.getElementById('domingo')
    var feriado = document.getElementById('feriado')
    var folgatrab = document.getElementById('folgatrab')
    
    var sal = Number(salario.value)
    var bnio = Number(bienio.value)
    var d_uteis = Number(diasuteis.value)
    var dmingo = Number(domingo.value)
    var friado = Number(feriado.value)
    var folga_trab = Number(folgatrab.value)
    
    var hr_norm = sal / 220
    var hr_50_not = hr_norm + (hr_norm * (50/100)) + (20 * (20/100))
    var hr_100_not = hr_norm * 2 + (20 * (20/100))
    var hr_ref_not = hr_50_not * d_uteis
    var hr_red = hr_norm * d_uteis * 1.1429
    var hr_premia = hr_50_not * d_uteis
    var dsr = (hr_ref_not + hr_premia + hr_red) / d_uteis * (dmingo + friado)
    var frdo = hr_100_not * 9 * friado
    var ft = hr_100_not * 9 * folga_trab
    var ref_100 = hr_100_not * friado
    var adiant_sal = sal * (40/100)
    var vale_transp = sal * (6/100)
    
    var ad_not = sal * (20/100)
    var ad_temp_serv1 = sal * (5/100)
    var ad_temp_serv2 = sal * (10/100)
    var ad_temp_serv3 = sal * (15/100)
    
    var resultado = document.getElementById('res')
    
    resultado.innerText = `PROVENTOS:\n\n`
    resultado.innerText += `Salário Base: $ ${sal.toFixed(2)} !\n`
    resultado.innerText += `DSR Mês: $ ${dsr.toFixed(2)} !\n`
    resultado.innerText += `Adic. Noturno: $ ${ad_not.toFixed(2)} !\n`
    
    if (bnio == 1) {
    resultado.innerText += `Adic. Tempo de Serv.: $ ${ad_temp_serv1.toFixed(2)} !\n`
    }
    else if (bnio == 2){
    resultado.innerText += `Adic. Tempo de Serv.: $ ${ad_temp_serv2.toFixed(2)} !\n`
    }
      else if (bnio == 3){
      resultado.innerText += `Adic. Tempo de Serv.: $ ${ad_temp_serv3.toFixed(2)}!\n`
    }
    
    if (bnio == 1){
      var ad_temp_serv_he1 = (hr_ref_not + hr_premia + hr_red) * (5/100)
      resultado.innerText += `Adic. Tempo de Serv. HE: $ ${ad_temp_serv_he1.toFixed(2)} !\n`
    }
    else if (bnio == 2){
      var ad_temp_serv_he2 = (hr_ref_not + hr_premia + hr_red) * (10/100)
      resultado.innerText += `Adic. Tempo de Serv. HE: $ ${ad_temp_serv_he2.toFixed(2)} !\n`
    }
    else if (bnio == 3){
      var ad_temp_serv_he3 = (hr_ref_not + hr_premia + hr_red) * (15 / 100)
      resultado.innerText += `Adic. Tempo de Serv. HE: $ ${ad_temp_serv_he3.toFixed(2)} !\n`
    }
    
    resultado.innerText += `Hora 50% Ref. Noturna: $ ${hr_ref_not.toFixed(2)} !\n`
    resultado.innerText += `Horário Noturno Reduz.: $ ${hr_red.toFixed(2)} !\n`
    resultado.innerText += `Hora 50% Noturna: $ ${hr_premia.toFixed(2)} !\n`
    resultado.innerText += `Feriado 100% Mês: $ ${frdo.toFixed(2)} !\n`
    resultado.innerText += `Folgas Trabalhada: $ ${ft.toFixed(2)} !\n`
    resultado.innerText += `Hora 100% Ref. Noturna: $ ${ref_100.toFixed(2)} !\n\n`
    
    resultado.innerText += `DESCONTOS:\n\n`
    
    resultado.innerText += `Adiant. Salário: $ ${adiant_sal.toFixed(2)} !\n`
    resultado.innerText += `Vale Transporte: $ ${vale_transp.toFixed(2)} !\n`
  
    
    var soma = document.getElementById('soma')
    
    //Total de Proventos//
    
    if (bnio == 1) {
      var somap1 = sal + dsr + ad_not + ad_temp_serv1 + ad_temp_serv_he1 + hr_ref_not + hr_red + hr_premia + frdo + ft + ref_100
      soma.innerText += `Total Proventos: $ ${somap1.toFixed(2)} !\n\n`
    } 
    else if (bnio == 2){
      var somap2 = sal + dsr + ad_not + ad_temp_serv2 + ad_temp_serv_he2 + hr_ref_not + hr_red + hr_premia + frdo + ft + ref_100
      soma.innerText += `Total Proventos: $ ${somap2.toFixed(2)} !\n\n`
    } 
    else if (bnio == 3){
      var somap3 = sal + dsr + ad_not + ad_temp_serv3 + ad_temp_serv_he3 + hr_ref_not + hr_red + hr_premia + frdo + ft + ref_100
      soma.innerText += `Total Proventos: $ ${somap3.toFixed(2)} !\n\n`
    }
    //DESC. INSS//
    /*inss1 = 0
    inss2 = 0
    inss3 = 0
    inss4 = 0*/
    
    if (bnio == 1) {
      if (somap1 <= 1212) {
      var inss1 = somap1 * 0.075
      resultado.innerText += `INSS Mês: $ ${inss1.toFixed(2)} !\n`
      } 
      else if (somap1 > 1212 || somap1 <= 2427.35) {
        var inss2 = (somap1 - 1212) * 0.09 + 90.90
        resultado.innerText += `INSS Mês: $ ${inss2.toFixed(2)} !\n`
      }
      else if (somap1 > 2427.35 || somap1 <= 3641.03) {
        var inss3 = (somap1 - 2427.35) * 0.12 + 90.90 + 109.38
        resultado.innerText += `INSS Mês: $ ${inss3.toFixed(2)} !\n`
      }
      else if (somap1 > 3641.03 || somap1 <= 7087.22) {
        var inss4 = (somap1 - 3641.03) * 0.14 + 90.90 + 109.38 + 145.64
        resultado.innerText += `INSS Mês: $ ${inss4.toFixed(2)} !\n`
      }
      
    }
  
    if (bnio == 2) {
      if (somap2 <= 1212) {
        var inss1 = somap2 * 0.075
        resultado.innerText += `INSS Mês: $ ${inss1.toFixed(2)} !\n`
      }
      else if (somap2 > 1212 || somap2 <= 2427.35) {
        var inss2 = (somap2 - 1212) * 0.09 + 90.90
        resultado.innerText += `INSS Mês: $ ${inss2.toFixed(2)} !\n`
      }
      else if (somap2 > 2427.35 || somap2 <= 3641.03) {
        var inss3 = (somap2 - 2427.35) * 0.12 + 90.90 + 109.38
        resultado.innerText += `INSS Mês: $ ${inss3.toFixed(2)} !\n`
      }
      else if (somap2 > 3641.03 || somap2 <= 7087.22) {
        var inss4 = (somap2 - 3641.03) * 0.14 + 90.90 + 109.38 + 145.64
        resultado.innerText += `INSS Mês: $ ${inss4.toFixed(2)} !\n`
      }
      
    }
    if (bnio == 3) {
      if (somap3 <= 1212) {
        var inss1 = somap3 * 0.075
        resultado.innerText += `INSS Mês: $ ${inss1.toFixed(2)} !\n`
      }
      else if (somap3 > 1212 || somap3 <= 2427.35) {
        var inss2 = (somap3 - 1212) * 0.09 + 90.90
        resultado.innerText += `INSS Mês: $ ${inss2.toFixed(2)} !\n`
      }
      else if (somap3 > 2427.35 || somap3 <= 3641.03) {
        var inss3 = (somap3 - 2427.35) * 0.12 + 90.90 + 109.38
        resultado.innerText += `INSS Mês: $ ${inss3.toFixed(2)} !\n`
      }
      else if (somap3 > 3641.03 || somap3 <= 7087.22) {
        var inss4 = (somap3 - 3641.03) * 0.14 + 90.90 + 109.38 + 145.64
        resultado.innerText += `INSS Mês: $ ${inss4.toFixed(2)} !\n`
      }
      
    }
    //Total de Desc.//
  
    var somad1 = adiant_sal + vale_transp + inss1
    var somad2 = adiant_sal + vale_transp + inss2
    var somad3 = adiant_sal + vale_transp + inss3
    var somad4 = adiant_sal + vale_transp + inss4
    
    
    if (bnio == 1) {
      if (somap1 <= 1212) {
        soma.innerText += `Total Descontos: $ ${somad1.toFixed(2)} !\n\n`
      
      }
      else if (somap1 > 1212 || somap1 <= 2427.35) {
        soma.innerText += `Total Descontos: $ ${somad2.toFixed(2)} !\n\n`
        
      }
      else if (somap1 > 2427.35 || somap1 <= 3641.03) {
        soma.innerText += `Total Descontos: $ ${somad3.toFixed(2)} !\n\n`
      }
      else if (somap1 > 3641.03 || somap1 <= 7087.22) {
        soma.innerText += `Total Descontos: $ ${somad4.toFixed(2)} !\n\n`
      }
      
    }
    
    if (bnio == 2) {
      if (somap2 <= 1212) {
        soma.innerText += `Total Descontos: $ ${somad1.toFixed(2)} !\n\n`
      
      }
      else if (somap2 > 1212 || somap2 <= 2427.35) {
        soma.innerText += `Total Descontos: $ ${somad2.toFixed(2)} !\n\n`
     
      }
      else if (somap2 > 2427.35 || somap2 <= 3641.03) {
        soma.innerText += `Total Descontos: $ ${somad3.toFixed(2)} !\n\n`
      }
      else if (somap2 > 3641.03 || somap2 <= 7087.22) {
        soma.innerText += `Total Descontos: $ ${somad4.toFixed(2)} !\n\n`
      }
      
    }
    
    if (bnio == 3) {
      if (somap3 <= 1212) {
        soma.innerText += `Total Descontos: $ ${somad1.toFixed(2)} !\n\n`
    
      }
      else if (somap3 > 1212 || somap3 <= 2427.35) {
        soma.innerText += `Total Descontos: $ ${somad2.toFixed(2)} !\n\n`
    
      }
      else if (somap3 > 2427.35 || somap3 <= 3641.03) {
        soma.innerText += `Total Descontos: $ ${somad3.toFixed(2)} !\n\n`
      }
      else if (somap3 > 3641.03 || somap3 <= 7087.22) {
        soma.innerText += `Total Descontos: $ ${somad4.toFixed(2)} !\n\n`
      }
    
    }
    
    //Cálculo do Total Líquido//
    
    
    if (bnio == 1) {
      if (somap1 <= 1212) {
      var sal_lq1 = somap1 - somad1
      soma.innerText += `Salário Líquido: $ ${sal_lq1.toFixed(2)} !\n`
      }
      else if (somap1 > 1212 || somap1 <= 2427.35) {
      var sal_lq1 = somap1 - somad2
      soma.innerText += `Salário Líquido: $ ${sal_lq1.toFixed(2)} !\n`
      }
      else if (somap1 > 2427.35 || somap1 <= 3641.03) {
      var sal_lq1 = somap1 - somad3
      soma.innerText += `Salário Líquido: $ ${sal_lq1.toFixed(2)} !\n`
      }
      else if (somap1 > 3641.03 || somap1 <= 7087.22) {
        var sal_lq1 = somap1 - somad4
        soma.innerText += `Salário Líquido: $ ${sal_lq1.toFixed(2)} !\n`
        
        }
    
      }
    
      else if (bnio == 2) {
        if (somap2 <= 1212) {
      var sal_lq2 = somap2 - somad1
      soma.innerText += `Salário Líquido: $ ${sal_lq2.toFixed(2)} !\n`
      }
      else if (somap2 > 1212 || somap2 <= 2427.35) {
      var sal_lq2 = somap2 - somad2
      soma.innerText += `Salário Líquido: $ ${sal_lq2.toFixed(2)} !\n`
      }
      else if (somap2 > 2427.35 || somap2 <= 3641.03) {
      var sal_lq2 = somap2 - somad3
      soma.innerText += `Salário Líquido: $ ${sal_lq2.toFixed(2)} !\n`
      }
      else if (somap2 > 3641.03 || somap2 <= 7087.22) {
        var sal_lq2 = somap2 - somad4
        soma.innerText += `Salário Líquido: $ ${sal_lq2.toFixed(2)} !\n`
        
        }
    
      }
      
      else if (bnio == 3) {
        if (somap3 <= 1212) {
        var sal_lq3 = somap3 - somad1
        soma.innerText += `Salário Líquido: $ ${sal_lq3.toFixed(2)} !\n`
      }
      else if (somap3 > 1212 || somap3 <= 2427.35) {
      var sal_lq3 = somap3 - somad2
      soma.innerText += `Salário Líquido: $ ${sal_lq3.toFixed(2)} !\n`
      }
      else if (somap3 > 2427.35 || somap3 <= 3641.03) {
      var sal_lq3 = somap3 - somad3
      soma.innerText += `Salário Líquido: $ ${sal_lq3.toFixed(2)} !\n`
      }
      else if (somap3 > 3641.03 || somap3 <= 7087.22) {
        var sal_lq3 = somap3 - somad4
        soma.innerText += `Salário Líquido: $ ${sal_lq3.toFixed(2)} !\n`
        
        }
        
      }
    
  }
  