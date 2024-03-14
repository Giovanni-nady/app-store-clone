import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { Feather, FontAwesome } from '@expo/vector-icons';
import Colors from '../utils/Colors.js';
import StarRating from 'react-native-star-rating';

export default function GameCard({ game }) {

    const [isFavorite, setIsFavorite] = useState(false)
    return (
        <View key={game.id} className="mr-4 relative">
            <Image source={game.image} className="rounded-3xl w-80 h-60" />

            <LinearGradient colors={['transparent', 'rgba(0, 0, 0, 0.6)']}
                className="absolute p-4 h-full w-full rounded-3xl flex justify-between">
                <View className="flex flex-row justify-end">
                    <TouchableOpacity className="p-3 rounded-full"
                        style={{backgroundColor:"rgba(255, 255, 255, 0.3)"}}
                        onPress={() => { setIsFavorite(!isFavorite) }}>
                        <FontAwesome name="heart" size={25} color={isFavorite? Colors.redHeart:"white"} />
                    </TouchableOpacity>
                </View>

                <View className="space-y-1">
                    <StarRating
                        disabled={true}
                        starSize={15}
                        containerStyle={{ width: 90 }}
                        maxStars={5}
                        rating={game.stars}
                        emptyStar={require('./../../assets/images/emptyStar.png')}
                        fullStar={require('./../../assets/images/fullStar.png')}
                    />
                    <Text className="text-xl font-bold text-gray-300">{game.title}</Text>
                    <View className="flex-row items-center space-x-2">
                        <Feather name="download" size={18} color="lightgray" />
                        <Text className="text-gray-300 text-sm font-semibold">{game.downloads} Downloads</Text>
                    </View>
                </View>

            </LinearGradient>
        </View>
    )
}