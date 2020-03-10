<template>
  <section id='settings--theme--themeColor' class='list page'>
    <ul class="mdui-list">
      <!-- 主题色 -->
      <!-- <li class="mdui-subheader-inset">{{$t('settings.themeColor')}}</li> -->

      <li class="mdui-list-item mdui-ripple mdui-text-color-red" @click.self="changeThemeColor('red')">
        <div class="mdui-list-item-content">{{$t('settings.red')}}</div>
        <label class="mdui-radio">
          <input type="radio" v-model='themeColor' value='red' />
          <i class="mdui-radio-icon"></i>
        </label>
      </li>

      <li class="mdui-list-item mdui-ripple mdui-text-color-pink" @click.self="changeThemeColor('pink')">
        <div class="mdui-list-item-content">{{$t('settings.pink')}}</div>
        <label class="mdui-radio">
          <input type="radio" v-model='themeColor' value='pink' />
          <i class="mdui-radio-icon"></i>
        </label>
      </li>

      <li class="mdui-list-item mdui-ripple mdui-text-color-purple" @click.self="changeThemeColor('purple')">
        <div class="mdui-list-item-content">{{$t('settings.purple')}}</div>
        <label class="mdui-radio">
          <input type="radio" v-model='themeColor' value='purple' />
          <i class="mdui-radio-icon"></i>
        </label>
      </li>

      <li class="mdui-list-item mdui-ripple mdui-text-color-deep-purple" @click.self="changeThemeColor('deep-purple')">
        <div class="mdui-list-item-content">{{$t('settings.deepPurple')}}</div>
        <label class="mdui-radio">
          <input type="radio" v-model='themeColor' value='deep-purple' />
          <i class="mdui-radio-icon"></i>
        </label>
      </li>

      <li class="mdui-list-item mdui-ripple mdui-text-color-indigo" @click.self="changeThemeColor('indigo')">
        <div class="mdui-list-item-content">{{$t('settings.indigo')}}</div>
        <label class="mdui-radio">
          <input type="radio" v-model='themeColor' value='indigo' />
          <i class="mdui-radio-icon"></i>
        </label>
      </li>

      <li class="mdui-list-item mdui-ripple mdui-text-color-blue" @click.self="changeThemeColor('blue')">
        <div class="mdui-list-item-content">{{$t('settings.blue')}}</div>
        <label class="mdui-radio">
          <input type="radio" v-model='themeColor' value='blue' />
          <i class="mdui-radio-icon"></i>
        </label>
      </li>

      <li class="mdui-list-item mdui-ripple mdui-text-color-light-blue" @click.self="changeThemeColor('light-blue')">
        <div class="mdui-list-item-content">{{$t('settings.lightBlue')}}</div>
        <label class="mdui-radio">
          <input type="radio" v-model='themeColor' value='light-blue' />
          <i class="mdui-radio-icon"></i>
        </label>
      </li>

      <li class="mdui-list-item mdui-ripple mdui-text-color-cyan" @click.self="changeThemeColor('cyan')">
        <div class="mdui-list-item-content">{{$t('settings.cyan')}}</div>
        <label class="mdui-radio">
          <input type="radio" v-model='themeColor' value='cyan' />
          <i class="mdui-radio-icon"></i>
        </label>
      </li>

      <li class="mdui-list-item mdui-ripple mdui-text-color-teal" @click.self="changeThemeColor('teal')">
        <div class="mdui-list-item-content">{{$t('settings.teal')}}</div>
        <label class="mdui-radio">
          <input type="radio" v-model='themeColor' value='teal' />
          <i class="mdui-radio-icon"></i>
        </label>
      </li>

      <li class="mdui-list-item mdui-ripple mdui-text-color-green" @click.self="changeThemeColor('green')">
        <div class="mdui-list-item-content">{{$t('settings.green')}}</div>
        <label class="mdui-radio">
          <input type="radio" v-model='themeColor' value='green' />
          <i class="mdui-radio-icon"></i>
        </label>
      </li>

      <li class="mdui-list-item mdui-ripple mdui-text-color-light-green" @click.self="changeThemeColor('light-green')">
        <div class="mdui-list-item-content">{{$t('settings.lightGreen')}}</div>
        <label class="mdui-radio">
          <input type="radio" v-model='themeColor' value='light-green' />
          <i class="mdui-radio-icon"></i>
        </label>
      </li>

      <li class="mdui-list-item mdui-ripple mdui-text-color-lime" @click.self="changeThemeColor('lime')">
        <div class="mdui-list-item-content">{{$t('settings.lime')}}</div>
        <label class="mdui-radio">
          <input type="radio" v-model='themeColor' value='lime' />
          <i class="mdui-radio-icon"></i>
        </label>
      </li>

      <li class="mdui-list-item mdui-ripple mdui-text-color-yellow" @click.self="changeThemeColor('yellow')">
        <div class="mdui-list-item-content">{{$t('settings.yellow')}}</div>
        <label class="mdui-radio">
          <input type="radio" v-model='themeColor' value='yellow' />
          <i class="mdui-radio-icon"></i>
        </label>
      </li>

      <li class="mdui-list-item mdui-ripple mdui-text-color-amber" @click.self="changeThemeColor('amber')">
        <div class="mdui-list-item-content">{{$t('settings.amber')}}</div>
        <label class="mdui-radio">
          <input type="radio" v-model='themeColor' value='amber' />
          <i class="mdui-radio-icon"></i>
        </label>
      </li>

      <li class="mdui-list-item mdui-ripple mdui-text-color-orange" @click.self="changeThemeColor('orange')">
        <div class="mdui-list-item-content">{{$t('settings.orange')}}</div>
        <label class="mdui-radio">
          <input type="radio" v-model='themeColor' value='orange' />
          <i class="mdui-radio-icon"></i>
        </label>
      </li>

      <li class="mdui-list-item mdui-ripple mdui-text-color-deep-orange" @click.self="changeThemeColor('deep-orange')">
        <div class="mdui-list-item-content">{{$t('settings.deepOrange')}}</div>
        <label class="mdui-radio">
          <input type="radio" v-model='themeColor' value='deep-orange' />
          <i class="mdui-radio-icon"></i>
        </label>
      </li>

      <li class="mdui-list-item mdui-ripple mdui-text-color-brown" @click.self="changeThemeColor('brown')">
        <div class="mdui-list-item-content">{{$t('settings.brown')}}</div>
        <label class="mdui-radio">
          <input type="radio" v-model='themeColor' value='brown' />
          <i class="mdui-radio-icon"></i>
        </label>
      </li>

      <li class="mdui-list-item mdui-ripple mdui-text-color-grey" @click.self="changeThemeColor('grey')">
        <div class="mdui-list-item-content">{{$t('settings.grey')}}</div>
        <label class="mdui-radio">
          <input type="radio" v-model='themeColor' value='grey' />
          <i class="mdui-radio-icon"></i>
        </label>
      </li>

      <li class="mdui-list-item mdui-ripple mdui-text-color-blue-grey" @click.self="changeThemeColor('blue-grey')">
        <div class="mdui-list-item-content">{{$t('settings.blueGrey')}}</div>
        <label class="mdui-radio">
          <input type="radio" v-model='themeColor' value='blue-grey' />
          <i class="mdui-radio-icon"></i>
        </label>
      </li>



    </ul>
  </section>
</template>

<script>
  export default {
    name: 'themeColor',
    data() {
      return {
        themeColor: this.$store.state.Setting.themeColor,
      }
    },
    methods: {
      changeThemeColor(value) {
        this.themeColor = value;
      }
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        //改变顶部title
        vm.$store.commit('changeTitle', vm.$t('settings.themeColor'))
      })
    },
    watch:{
      themeColor(newValue){
        this.$store.commit('Setting/changeThemeColor', newValue)
      },
    },

  }
</script>

<style>
</style>
