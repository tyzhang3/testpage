<template>
  <v-layout>
        <v-app-bar
            color="primary"
            prominent
        >
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>My files</v-toolbar-title>

        <v-spacer></v-spacer>

        
        </v-app-bar>
        <v-navigation-drawer
            v-model="drawer"
            :location="$vuetify.display.mobile ? 'bottom' : undefined"
            temporary
        >
           <v-list>
               <v-list-item
                   v-for="(item, i) in items"
                   :key="i"
                   :title="item.title"
                   color="primary"
                   variant="plain"
                   @click="goto(item.url)"
               >


                   <v-list-item-title v-text="item.text"></v-list-item-title>
               </v-list-item>
           </v-list>
        </v-navigation-drawer>

        <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
            <v-card class="mx-auto mt-3" max-width="800">
    <v-img
      color="surface-variant"
      height="200"
      :src="require('@/assets/we-talk-about-gps-2.jpg')"
      cover
    >
      <v-toolbar color="transparent">
        <template v-slot:prepend>
          <v-btn icon="$menu"></v-btn>
        </template>

        <v-toolbar-title class="text-h6" text="Messages"></v-toolbar-title>

        <template v-slot:append>
          <v-btn icon="mdi-dots-vertical"></v-btn>
        </template>
      </v-toolbar>
    </v-img>

    <v-card-text>
      <div class="font-weight-bold ms-1 mb-2">Today</div>

      <v-timeline align="start" density="compact">
        <v-timeline-item
          v-for="message in messages"
          :key="message.time"
          :dot-color="message.color"
          size="x-small"
        >
          <div class="mb-4">
            <div class="font-weight-normal">
              <strong>{{ message.from }}</strong> @{{ message.time }}
            </div>

            <div>{{ message.message }}</div>
          </div>
        </v-timeline-item>
      </v-timeline>
    </v-card-text>
  </v-card>
        </v-main>

        <v-footer
            name="footer"
            app
        >
           <div class="text-grey-lighten-2">
               footer
           </div>
        </v-footer>
    </v-layout>
</template>

<script >
  //
  export default {
    data()
    {
        return {
            drawer:false,
            items:[
                {
                    title:'Home',
                    url:"/"
                },
                {
                    title:'About',
                    url:"/about"
                }
            ],
            messages: [
                {
                  from: 'You',
                  message: `Sure, I'll see you later.`,
                  time: '10:42am',
                  color: 'deep-purple-lighten-1',
                },
                {
                  from: 'John Doe',
                  message: 'Yeah, sure. Does 1:00pm work?',
                  time: '10:37am',
                  color: 'green',
                },
                {
                  from: 'You',
                  message: 'Did you still want to grab lunch today?',
                  time: '9:47am',
                  color: 'deep-purple-lighten-1',
                },
          ],
        }
    },
    methods:
        {
            goto(url)
            {
                
            },
            getImageUrl(name) {
              return new URL(`../assets/${name}.png`, import.meta.url).href;
            }
        }
}
</script>
