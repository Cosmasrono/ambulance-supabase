<template>
  <div>
    <GeoMap :latitude="latitude" :longitude="longitude" />
  </div>
</template>

<script>
import GeoMap from "./Geo-map.vue";
import { createClient } from "@supabase/supabase-js";

export default {
  data() {
    return {
      client: createClient(
          "https://swocaqwllmwkocyhqnhm.supabase.co",
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3b2NhcXdsbG13a29jeWhxbmhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzExNzM2NDIsImV4cCI6MTk4Njc0OTY0Mn0.eE7E7QeAT2iGCsInhiPVjYqOEuyrfD0-OAKsKhuWVaI'
        ),
      latitude: null,
      longitude: null,
    };
  },
  mounted() {
    /*   this.getLocation(); */
    this.getLatestLocation();
  },
  created() {},

  methods: {
    getLatestLocation() {
      this.client
        .from("locations")
        .select("latitude, longitude")
        .order("created_at", { ascending: false })
        .limit(1)
        .then(({ data }) => {
          const latestLatitude = data[0]?.latitude;
          const latestLongitude = data[0]?.longitude;
          this.latitude = latestLatitude ? latestLatitude : -1.23322;
          this.longitude = latestLongitude ? latestLongitude : 36.88333;
          console.log("Latest location:", latestLatitude, latestLongitude);
        })
        .catch((error) => {
          console.error("Error getting latest location:", error);
        });
    },
    // use watchCurentPosition() in the mounted() hook
    // to watch the user's position
    /*   watchCurrentPosition() {
      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      };
      const success = (pos) => {
        const crd = pos.coords;
        console.log("Your current position is:");
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
        console.log(crd);
      };
      const error = (err) => {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      };
      navigator.geolocation.watchPosition(success, error, options);
    }, */
    /* use latitude and longitude to map using google map reverse geocoding */
  },

  components: { GeoMap },
};
</script>
