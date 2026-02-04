import React from "react";
import {
    ScrollView,
    StyleSheet,
    TextInput,
    View
} from "react-native";

export default function ScrollViewComponent() {
  const data =
    [
      {
        id: "1",
        title:
          "title 5",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, alias cumque magnam voluptate sed similique eaque perspiciatis nesciunt laborum explicabo nulla, quaerat laboriosam minima odio fugiat totam beatae quas unde.",
      },

      {
        id: "2",
        title:
          "title 5",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, alias cumque magnam voluptate sed similique eaque perspiciatis nesciunt laborum explicabo nulla, quaerat laboriosam minima odio fugiat totam beatae quas unde.",
      },

      {
        id: "3",
        title:
          "title 5",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, alias cumque magnam voluptate sed similique eaque perspiciatis nesciunt laborum explicabo nulla, quaerat laboriosam minima odio fugiat totam beatae quas unde.",
      },

      {
        id: "4",
        title:
          "title 5",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, alias cumque magnam voluptate sed similique eaque perspiciatis nesciunt laborum explicabo nulla, quaerat laboriosam minima odio fugiat totam beatae quas unde.",
      },

      {
        id: "5",
        title:
          "title 5",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, alias cumque magnam voluptate sed similique eaque perspiciatis nesciunt laborum explicabo nulla, quaerat laboriosam minima odio fugiat totam beatae quas unde.",
      },

      {
        id: "6",
        title:
          "title 5",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, alias cumque magnam voluptate sed similique eaque perspiciatis nesciunt laborum explicabo nulla, quaerat laboriosam minima odio fugiat totam beatae quas unde.",
      },

      {
        id: "7",
        title:
          "title 5",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, alias cumque magnam voluptate sed similique eaque perspiciatis nesciunt laborum explicabo nulla, quaerat laboriosam minima odio fugiat totam beatae quas unde.",
      },

      {
        id: "8",
        title:
          "title 5",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, alias cumque magnam voluptate sed similique eaque perspiciatis nesciunt laborum explicabo nulla, quaerat laboriosam minima odio fugiat totam beatae quas unde.",
      },

      {
        id: "9",
        title:
          "title 5",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, alias cumque magnam voluptate sed similique eaque perspiciatis nesciunt laborum explicabo nulla, quaerat laboriosam minima odio fugiat totam beatae quas unde.",
      },

      {
        id: "10",
        title:
          "title 5",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, alias cumque magnam voluptate sed similique eaque perspiciatis nesciunt laborum explicabo nulla, quaerat laboriosam minima odio fugiat totam beatae quas unde.",
      },

      {
        id: "11",
        title:
          "title 5",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, alias cumque magnam voluptate sed similique eaque perspiciatis nesciunt laborum explicabo nulla, quaerat laboriosam minima odio fugiat totam beatae quas unde.",
      },
    ];

  return (
    <View>
      <ScrollView
        contentContainerStyle={{
          backgroundColor:
            "#fff",
          paddingHorizontal: 20,
          paddingVertical: 20,
        }}
        //   horizontal={true}
        //   showsHorizontalScrollIndicator={false}
        scrollEnabled={
          true
        }
        showsVerticalScrollIndicator={
          false
        }
        onScroll={(
          e,
        ) =>
          console.log(
            e
              .nativeEvent
              .contentOffset,
          )
        }
        keyboardDismissMode="on-drag"
      >
        {/* {data.map((item) =>(
         <View style={{
            margin: 10
         }}
          key={item.id}
         >
        <Text  style={{fontSize : 30}}>
            {item.title}
        </Text>
        <Text style={{fontSize : 20}}>
            {item.desc}
        </Text>
         </View> 
        ))} */}
        <TextInput
          style={
            styles.input
          }
          placeholder="Enter your name"
        />
        <TextInput
          style={
            styles.input
          }
          placeholder="Enter your email"
        />
        <TextInput
          style={
            styles.input
          }
          placeholder="Enter your passwrd"
          secureTextEntry={
            true
          }
        />

        <TextInput
          style={
            styles.input
          }
          placeholder="Enter your name"
        />
        <TextInput
          style={
            styles.input
          }
          placeholder="Enter your email"
        />
        <TextInput
          style={
            styles.input
          }
          placeholder="Enter your passwrd"
          secureTextEntry={
            true
          }
        />

        <TextInput
          style={
            styles.input
          }
          placeholder="Enter your name"
        />
        <TextInput
          style={
            styles.input
          }
          placeholder="Enter your email"
        />
        <TextInput
          style={
            styles.input
          }
          placeholder="Enter your passwrd"
          secureTextEntry={
            true
          }
        />

        <TextInput
          style={
            styles.input
          }
          placeholder="Enter your name"
        />
        <TextInput
          style={
            styles.input
          }
          placeholder="Enter your email"
        />
        <TextInput
          style={
            styles.input
          }
          placeholder="Enter your passwrd"
          secureTextEntry={
            true
          }
        />

        <TextInput
          style={
            styles.input
          }
          placeholder="Enter your name"
        />
        <TextInput
          style={
            styles.input
          }
          placeholder="Enter your email"
        />
        <TextInput
          style={
            styles.input
          }
          placeholder="Enter your passwrd"
          secureTextEntry={
            true
          }
        />

        <TextInput
          style={
            styles.input
          }
          placeholder="Enter your name"
        />
        <TextInput
          style={
            styles.input
          }
          placeholder="Enter your email"
        />
        <TextInput
          style={
            styles.input
          }
          placeholder="Enter your passwrd"
          secureTextEntry={
            true
          }
        />
      </ScrollView>
    </View>
  );
}

const styles =
  StyleSheet.create(
    {
      container:
        {
          flex: 1,
          alignItems:
            "center",
          justifyContent:
            "center",
        },
      input:
        {
          width:
            "80%",
          height: 50,
          borderRadius: 10,
          borderWidth: 1,
          borderColor:
            "#ccc",
          marginVertical: 10,
          paddingLeft: 10,
        },
    },
  );
