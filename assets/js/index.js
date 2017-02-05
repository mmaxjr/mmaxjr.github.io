split = function (to_split) {
  words = $(to_split).text().split('');
  title = $(to_split).text().split('');
  for (i in words) {
    words[i] = '<span>' + words[i] + '</span>';
  }
  text = words.join('');
  $(to_split).html(text);
};

show_text = function (to_show,method,timing) {
  split($(to_show));
  count = 0;
  length = $(to_show).find('span').length;
  $(to_show + ' span').each(function () {
    if(method == 'popup'){
      $(this).delay((timing * count)+count*1).animate({ opacity: '1','top':'-10px'}, 220,'easeOutCubic');
      $(this).delay((0 * count)+count/0).animate({ opacity: '1','top':'0px'}, 140);
    } else {
      $(this).delay(timing * count).animate({ opacity: '1','top':'0' }, 100);
    }
    count++;
  });
};

// The show
show_text('.intro','popup',10);
setTimeout(function(){
  $('.sub').addClass('drop_swing')
},100)
setTimeout(function(){
  $('.sub').hide()
  $('.intro').hide()
},3400)
setTimeout(function(){
  $('.pro').hide()
  $('.code').hide()
},6400)
setTimeout(function(){
  $('.years').hide()
  $('.don').hide()
},9400)
setTimeout(function(){
  $('.calc').hide()
  $('.build').hide()
},12200)
setTimeout(function(){
  $('.call,.not').css('opacity','1');
  show_text('.call','popup',10);
  setTimeout(function(){
  show_text('.not','popup',10);
    },233)
},12300)