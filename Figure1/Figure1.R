
## libraries 
if(TRUE) {
  
  library(ggplot2)
  library(reshape2)
  library(ggpubr)
  library(ggsci)
  library(fBasics)
  
}

## -------------------------------------------------------

## settings
if(TRUE) {
  
  conf.order = c('BCC','BIOC','ISMB','RECOM')
  
}


## -------------------------------------------------------

## data files 
if(TRUE) {
  
  bcc.file = 'BCC_2020_Full_Attendee_Information.csv'
  recom.file = 'RECOM2020_participants.csv'
  ismb.file = 'ISMB2020_participants.csv'
  bioc.file = 'BioC2020_participants.csv'
  
}

## -------------------------------------------------------

## data import 
if(TRUE) {
  
  bcc.df = read.csv(bcc.file, stringsAsFactors = F)
  recom.df = read.csv(recom.file, stringsAsFactors = F)
  ismb.df = read.csv(ismb.file, stringsAsFactors = F)
  bioc.df = read.csv(bioc.file, stringsAsFactors = F)
  
}

## -------------------------------------------------------

## total participants 
if(TRUE) {
  
  rm(data.plot)

  data.plot = data.frame(conf = c('BCC','RECOM','ISMB','BIOC'),
                         year = rep('2020',4),
                         data.type = c(rep('participant',4)),
                         total = c(nrow(bcc.df), nrow(recom.df), nrow(ismb.df), nrow(bioc.df)),
                         stringsAsFactors = F)  
  
  write.csv(data.plot,
            file = 'Figure1A_total.csv')
  
  data.plot$conf = factor(data.plot$conf, 
                          levels = conf.order)
  

  p1 = ggplot(data.plot, aes(conf, total)) +
    geom_bar(fill = '#C0C0C0', width = 0.5, color = '#000000', stat = 'identity') +
    ggtitle('Total number of individuals') +
    scale_fill_npg() +
    theme_pubr() +
    facet_grid(year ~ data.type)
  
  p1
  
  pdf(file = 'Figure1A_total.pdf', width = 8, height = 5)
  print(p1)
  dev.off()
  
}

## -------------------------------------------------------

## sex
if(TRUE) {
  
  bcc.df$predict_gender[which(is.na(bcc.df$predict_gender) | bcc.df$predict_gender=='')] = 'unknown'
  recom.df$predict_gender[which(is.na(recom.df$predict_gender) | recom.df$predict_gender=='')] = 'unknown'
  ismb.df$predict_gender[which(is.na(recom.df$predict_gender) | recom.df$predict_gender=='')] = 'unknown'
  bioc.df$predict_gender[which(is.na(bioc.df$predict_gender) | bioc.df$predict_gender=='')] = 'unknown'
  
  
  table(bcc.df$predict_gender)
  table(recom.df$predict_gender)
  table(ismb.df$predict_gender)
  table(bioc.df$predict_gender)
  
  rm(data.plot)
  
  data.plot = rbind(
    data.frame(conf = 'BCC',
               data.frame(table(bcc.df$predict_gender))),
    data.frame(conf = 'RECOM',
               data.frame(table(recom.df$predict_gender))),
    data.frame(conf = 'ISMB',
               data.frame(table(ismb.df$predict_gender))),
    data.frame(conf = 'BIOC',
               data.frame(table(bioc.df$predict_gender)))
  )
  
  data.plot = reshape2::dcast(conf ~ Var1, data = data.plot, value.var = 'Freq')
  data.plot$total = data.plot$female + data.plot$male
  data.plot$female.frac = data.plot$female / data.plot$total
  data.plot$male.frac = data.plot$male / data.plot$total
  
  data.plot = data.frame(year = rep('2020',4),
                         data.type = c(rep('participant',4)),
                         data.plot,
                         stringsAsFactors = F)  
  
  data.plot = reshape2::melt(data.plot)
  colnames(data.plot)[(ncol(data.plot)-1):ncol(data.plot)] = c('gender','value')
  
  write.csv(data.plot,
            file = 'Figure1B_gender.csv')
  
  data.plot$conf = factor(data.plot$conf, 
                          levels = conf.order)
  
  p1 = ggplot(data.plot[data.plot$gender %in% c('female.frac','male.frac'),], 
              aes(conf, value)) +
    geom_bar(aes(fill = gender), width = 0.5, color = '#000000', stat = 'identity',
             position = 'stack') +
    ggtitle('Individuals by gender') +
    scale_fill_npg() +
    theme_pubr() +
    facet_grid(year ~ data.type)
  
  p1
  
  pdf(file = 'Figure1B_gender.pdf', width = 8, height = 5)
  print(p1)
  dev.off()
  
}

## -------------------------------------------------------

## ancestry 
if(TRUE) {
  
  
  bcc.df$race[which(is.na(bcc.df$race) | bcc.df$race=='')] = 'unknown'
  recom.df$race[which(is.na(recom.df$race) | recom.df$race=='')] = 'unknown'
  ismb.df$race[which(is.na(recom.df$race) | recom.df$race=='')] = 'unknown'
  bioc.df$race[which(is.na(bioc.df$race) | bioc.df$race=='')] = 'unknown'
  
  
  table(bcc.df$race)
  table(recom.df$race)
  table(ismb.df$race)
  table(bioc.df$race)
  
  rm(data.plot)
  
  data.plot = rbind(
    data.frame(conf = 'BCC',
               data.frame(table(bcc.df$race))),
    data.frame(conf = 'RECOM',
               data.frame(table(recom.df$race))),
    data.frame(conf = 'ISMB',
               data.frame(table(ismb.df$race))),
    data.frame(conf = 'BIOC',
               data.frame(table(bioc.df$race)))
  )
  
  data.plot$data.type = 'participant'
  data.plot$year = '2020'

  ## only use 1st level of race here to show for 2020 data
  data.plot$race.level1 = gsub(',\\S+$','',data.plot$Var1)
  
  data.plot = aggregate(Freq ~ conf + race.level1 +data.type + year, 
                        data = data.plot,
                        FUN = sum)

  write.csv(data.plot,
            file = 'Figure1C_ancestry.csv')
  
  data.plot$conf = factor(data.plot$conf, 
                          levels = conf.order)
  
  data.plot$race.level1 = factor(data.plot$race.level1,
                                 levels = c('GreaterAfrican','Asian','GreaterEuropean'))
  
  data.plot$total = NA 
 
  for(i in 1:length(conf.order)) {
    print(i)
    my.df = NULL 
    
    data.plot$total[data.plot$conf==conf.order[i]] = 
      sum(data.plot$Freq[data.plot$conf==conf.order[i]])
    
  }
  
  data.plot$frac = data.plot$Freq / data.plot$total
  
  p1 = ggplot(data.plot, 
              aes(conf, frac)) +
    geom_bar(aes(fill = race.level1), width = 0.5, color = '#000000', stat = 'identity',
             position = 'stack') +
    ggtitle('Individuals by race_level1') +
    scale_fill_npg() +
    theme_pubr() +
    facet_grid(data.type ~ year, scales = 'free_y')
  
  p1
  
  pdf(file = 'Figure1C_ancestry.pdf', width = 8, height = 5)
  print(p1)
  dev.off()
  
  
}

## -------------------------------------------------------

sessionInfo()