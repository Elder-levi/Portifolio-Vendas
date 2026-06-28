<template>
<div class=" wrappper">
    <div class ="marquee-text fadeout-horizontal">
    <div  class="marquee-text-track">
     <p>Java</p>
     <p>Java</p>
     <p>Java</p>
     <p>Java</p>
     <p>Java</p>
     <p>Java</p>
     <p>Java</p>
     <p>Java</p>
     <p>Java</p>
     <p>Java</p>
      <p>Java</p>
     <p aria-hidden ="true">Java</p>
     <p aria-hidden ="true">Java</p>
     <p aria-hidden ="true">Java</p>
     <p aria-hidden ="true">Java</p>
     <p aria-hidden ="true">Java</p>
     <p aria-hidden ="true">Java</p>
     <p aria-hidden ="true">Java</p>
     <p aria-hidden ="true"> Java</p>
     <p aria-hidden ="true">Java</p>
      </div>
  </div> 
  <div class ="marquee-text fadeout-horizontal">
    <div :style="{ '--reverse': 'reverse '}" class="marquee-text-track">
        
     <p>Java</p>
     <p>Java</p>
     <p>Java</p>
     <p>Java</p>
     <p>Java</p>
     <p>Java</p>
     <p>Java</p>
     <p>Java</p>
     <p>Java</p>
     <p>Java</p>
      <p>Java</p>
     <p aria-hidden ="true">Java</p>
     <p aria-hidden ="true">Java</p>
     <p aria-hidden ="true">Java</p>
     <p aria-hidden ="true">Java</p>
     <p aria-hidden ="true">Java</p>
     <p aria-hidden ="true">Java</p>
     <p aria-hidden ="true">Java</p>
     <p aria-hidden ="true"> Java</p>
     <p aria-hidden ="true">Java</p>
      </div>
  </div>
</div>
</template>
<script setup>



</script>
<style scoped>

.fadeout-horizontal
{

mask-image: linear-gradient(
to right,
transparent,
black 5rem,
black calc(100% - 5rem),
transparent
);

}


.wrappper
{
max-width: 1200px;
margin: 0 auto;
padding: 4.8rem 0px;
color: white;
font-size: 20px;
}

.marquee-text
{
    overflow: clip;
}

.marquee-text-track
{
   display: flex;
   padding-left: 4.8rem;
    gap: 4.8rem;
    width: max-content;
    animation: marquee-move-text var(--speed, 20s ) linear infinite var(--reverse ,  forwards );
}


.marquee-text p
{
    border: 1px solid white;
    border-radius: 999px;
    padding: 1rem 2.5rem;
}

@keyframes marquee-move-text
{
    to{
        transform: translateX(-50%);
    }
}
</style>