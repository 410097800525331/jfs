$(function () {
  function runCounter($counter) {
    var target = parseInt($counter.attr("data-target")),
      count = 0,
      speed = 50;

    $counter.text(0);

    var counterInterval = setInterval(function () {
      count++;
      if (count >= target) {
        clearInterval(counterInterval);
      }
      $counter.text(count);
    }, speed);
  }

  function checkScroll() {
    const scrollTop = $(window).scrollTop(),
      windowHeight = $(window).height(),
      elementTop = $('#counters').offset().top;

    $(".counter").each(function () {
      const $this = $(this);

      if (scrollTop + windowHeight > elementTop + 100) {
        if (!$this.hasClass("active")) {
          $this.addClass("active");
          runCounter($this);
        }
      } else {
        $this.removeClass("active");
        $this.text(0);
      }
    });
    console.log($(window).scrollTop());
  }

  $(window).on("scroll", $.throttle(100, checkScroll));
  checkScroll();
});