<template>
  <v-container class="mx-auto">
    <v-card class="mx-auto" prepend-icon="$vuetify" subtitle="Das Verwaltungsprogramm für Feuerwehren">
      <template v-slot:title>
        <span class="font-weight-black">Hydrantenkontrolle</span>
      </template>

      <v-card-text class="bg-surface-light pt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!
        Eaque
        cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!
      </v-card-text>
    </v-card>
    <v-divider :thickness="80" class="border-opacity-0"></v-divider>
    <v-row align="center" justify="center">
      <v-col cols="12" md="6">
        <v-card class="mx-auto" title="Hydranten Verwalten">
          <template v-slot:prepend>
            <v-icon color="green" icon="mdi-list-status"></v-icon>
          </template>
          <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-card class="mx-auto" title="CSV Import/Export">
          <template v-slot:prepend>
            <v-icon color="green" icon="mdi-database-export"></v-icon>
          </template>
          <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-card class="mx-auto" title="Meldesystem">
          <template v-slot:prepend>
            <v-icon color="green" icon="mdi-file-alert"></v-icon>
          </template>
          <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-card class="mx-auto" title="Dateianhänge">
          <template v-slot:prepend>
            <v-icon color="green" icon="mdi-cloud-upload"></v-icon>
          </template>
          <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-divider :thickness="40" class="border-opacity-0"></v-divider>
    <v-btn append-icon="mdi-login" variant="tonal" to="/signup">Jetzt kostenlos registrieren</v-btn>
  </v-container>
</template>