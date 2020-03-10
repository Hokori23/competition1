<template>
  <section id='settings--theme--accentColor' class='list page'>
    <ul class="mdui-list">
      <!-- 强调色 -->
      <!-- <li class="mdui-subheader-inset">{{$t('settings.accentColor')}}</li> -->
      
      <li class="mdui-list-item mdui-ripple mdui-text-color-red" @click.self="changeAccentColor('red')">
        <div class="mdui-list-item-content">{{$t('settings.red')}}</div>
        <label class="mdui-radio">
          <input type="radio" v-model='accentColor' value='red' />
          <i class="mdui-radio-icon"></i>
        </label>
      </li>
      
      <li class="mdui-list-item mdui-ripple mdui-text-color-pink" @click.self="changeAccentColor('pink')">
        <div class="mdui-list-item-content">{{$t('settings.pink')}}</div>
        <label class="mdui-radio">
          <input type="radio" v-model='accentColor' value='pink' />
          <i class="mdui-radio-icon"></i>
        </label>
      </li>
      
      <li class="mdui-list-item mdui-ripple mdui-text-color-purple" @click.self="changeAccentColor('purple')">
        <div class="mdui-list-item-content">{{$t('settings.purple')}}</div>
        <label class="mdui-radio">
          <input type="radio" v-model='accentColor' value='purple' />
          <i class="mdui-radio-icon"></i>
        </label>
      </li>
      
      <li class="mdui-list-item mdui-ripple mdui-text-color-deep-purple" @click.self="changeAccentColor('deep-purple')">
        <div class="mdui-list-item-content">{{$t('settings.deepPurple')}}</div>
        <label class="mdui-radio">
          <input type="radio" v-model='accentColor' value='deep-purple' />
          <i class="mdui-radio-icon"></i>
        </label>
      </li>
      
      <li class="mdui-list-item mdui-ripple mdui-text-color-indigo" @click.self="changeAccentColor('indigo')">
        <div class="mdui-list-item-content">{{$t('settings.indigo')}}</div>
        <label class="mdui-radio">
          <input type="radio" v-model='accentColor' value='indigo' />
          <i class="mdui-radio-icon"></i>
        </label>
      </li>
      
      <li class="mdui-list-item mdui-ripple mdui-text-color-blue" @click.self="changeAccentColor('blue')">
        <div class="mdui-list-item-content">{{$t('settings.blue')}}</div>
        <label class="mdui-radio">
          <input type="radio" v-model='accentColor' value='blue' />
          <i class="mdui-radio-icon"></i>
        </label>
      </li>
      
      <li class="mdui-list-item mdui-ripple mdui-text-color-light-blue" @click.self="changeAccentColor('light-blue')">
        <div class="mdui-list-item-content">{{$t('settings.lightBlue')}}</div>
        <label class="mdui-radio">
          <input type="radio" v-model='accentColor' value='light-blue' />
          <i class="mdui-radio-icon"></i>
        </label>
      </li>
      
      <li class="mdui-list-item mdui-ripple mdui-text-color-cyan" @click.self="changeAccentColor('cyan')">
        <div class="mdui-list-item-content">{{$t('settings.cyan')}}</div>
        <label class="mdui-radio">
          <input type="radio" v-model='accentColor' value='cyan' />
          <i class="mdui-radio-icon"></i>
        </label>
      </li>
      
      <li class="mdui-list-item mdui-ripple mdui-text-color-teal" @click.self="changeAccentColor('teal')">
        <div class="mdui-list-item-content">{{$t('settings.teal')}}</div>
        <label class="mdui-radio">
          <input type="radio" v-model='accentColor' value='teal' />
          <i class="mdui-radio-icon"></i>
        </label>
      </li>

      <li class="mdui-list-item mdui-ripple mdui-text-color-green" @click.self="changeAccentColor('green')">
        <div class="mdui-list-item-content">{{$t('settings.green')}}</div>
        <label class="mdui-radio">
          <input type="radio" v-model='accentColor' value='green' />
          <i class="mdui-radio-icon"></i>
        </label>
      </li>
      
      <li class="mdui-list-item mdui-ripple mdui-text-color-light-green" @click.self="changeAccentColor('light-green')">
        <div class="mdui-list-item-content">{{$t('settings.lightGreen')}}</div>
        <label class="mdui-radio">
          <input type="radio" v-model='accentColor' value='light-green' />
          <i class="mdui-radio-icon"></i>
        </label>
      </li>
      
      <li class="mdui-list-item mdui-ripple mdui-text-color-lime" @click.self="changeAccentColor('lime')">
        <div class="mdui-list-item-content">{{$t('settings.lime')}}</div>
        <label class="mdui-radio">
          <input type="radio" v-model='accentColor' value='lime' />
          <i class="mdui-radio-icon"></i>
        </label>
      </li>
      
      <li class="mdui-list-item mdui-ripple mdui-text-color-yellow" @click.self="changeAccentColor('yellow')">
        <div class="mdui-list-item-content">{{$t('settings.yellow')}}</div>
        <label class="mdui-radio">
          <input type="radio" v-model='accentColor' value='yellow' />
          <i class="mdui-radio-icon"></i>
        </label>
      </li>
      
      <li class="mdui-list-item mdui-ripple mdui-text-color-amber" @click.self="changeAccentColor('amber')">
        <div class="mdui-list-item-content">{{$t('settings.amber')}}</div>
        <label class="mdui-radio">
          <input type="radio" v-model='accentColor' value='amber' />
          <i class="mdui-radio-icon"></i>
        </label>
      </li>
      
      <li class="mdui-list-item mdui-ripple mdui-text-color-orange" @click.self="changeAccentColor('orange')">
        <div class="mdui-list-item-content">{{$t('settings.orange')}}</div>
        <label class="mdui-radio">
          <input type="radio" v-model='accentColor' value='orange' />
          <i class="mdui-radio-icon"></i>
        </label>
      </li>

      <li class="mdui-list-item mdui-ripple mdui-text-color-deep-orange" @click.self="changeAccentColor('deep-orange')">
        <div class="mdui-list-item-content">{{$t('settings.deepOrange')}}</div>
        <label class="mdui-radio">
          <input type="radio" v-model='accentColor' value='deep-orange' />
          <i class="mdui-radio-icon"></i>
        </label>
      </li>
      
    </ul>
  </section>
</template>

<script>
  export default {
    name: 'accentColor',
    data() {
      return {
        accentColor: this.$store.state.Setting.accentColor,
      }
    },
    methods: {
      changeAccentColor(value) {
        this.accentColor = value;
      }
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        //改变顶部title
        vm.$store.commit('changeTitle', vm.$t('settings.accentColor'))
      })
    },
    watch:{
      accentColor(newValue){
        this.$store.commit('Setting/changeAccentColor', newValue)
      }
    },
  }
</script>

<style>
</style>
