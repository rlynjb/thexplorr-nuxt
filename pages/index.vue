<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>

      <v-card>
        <v-card-title class="headline">
          Where's your next adventure?
        </v-card-title>

        <v-card-text>
          <v-row no-gutters>
            <v-col cols="12">
              <v-text-field
                label="What are you gonna call your adventure?"
                placeholder="ex. Exploring Prehistoric at Utah"
                filled
              />
            </v-col>

            <v-col cols="12">
              <v-text-field
                label="Where?"
                placeholder="ex. Las Vegas, Hollywood, St. George, etc"
                filled
              />
            </v-col>

            <v-col cols="12">
              <v-textarea
                auto-grow
                filled
                name="input-7-4"
                label="What's the main awesome things to experience?"
                value=""
              >
              </v-textarea>
            </v-col>

            <v-col cols="6" class="pr-3">
              <v-text-field
                label="When?"
                placeholder="ex. this weekend, next month, June 29, 2020 (Friday)"
                filled
              />
            </v-col>

            <v-col cols="6" class="pl-3">
              <v-text-field
                label="Until"
                placeholder="ex. July 04, 2020 (Sunday)"
                filled
              />
            </v-col>
          </v-row>


          <v-expansion-panels multiple accordion focusable>
            <v-expansion-panel expand>
              <v-expansion-panel-header>During Day time</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-row>
                  <v-list>
                    <v-list-item>
                      <v-row no-gutters>
                        <v-col cols="8" class="pr-3">
                          <v-text-field
                            label="Name"
                            placeholder="Original Starbucks coffee shop"
                            filled
                          />
                        </v-col>
                        <v-col cols="4" class="pl-3">
                          <v-text-field
                            label="Price"
                            placeholder="5.00"
                            filled
                          />
                        </v-col>
                        <v-col cols="12">
                          <v-text-field
                            label="Where?"
                            placeholder="8555 N. 4th st. Las Vegas, NV 89101, US"
                            filled
                          />
                        </v-col>
                        <v-col cols="12">
                          <v-textarea
                            auto-grow
                            filled
                            name="input-7-4"
                            label="Any other info?"
                            value=""
                          >
                          </v-textarea>
                        </v-col>
                        <v-col cols="12">
                          <v-btn color="primary" nuxt to="/inspire">+</v-btn>
                        </v-col>
                      </v-row>


                    </v-list-item>
                  </v-list>
                </v-row>
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header>During Night time</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-row>
                  <ul>
                    <li>
                      - name
                      - price<br>
                      - address, city, state, country<br>
                      - note

                      <v-spacer />
                      <v-btn color="primary" nuxt to="/inspire">+</v-btn>
                    </li>
                  </ul>
                </v-row>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>

        </v-card-text>


        <v-card-actions>
          <v-btn color="primary" nuxt to="/inspire">
            Log It / Share
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  }
}
</script>
