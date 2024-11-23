// 2.1

// Gọi API bằng phương thức GET
fetch("https://hotel-management-server.fly.dev/public/type-room/list")
  .then((response) => {
    // Kiểm tra nếu phản hồi là thành công (status code 200-299)
    if (!response.ok) {
      throw new Error(`Lỗi HTTP: ${response.status}`);
    }
    // Chuyển phản hồi thành JSON
    return response.json();
  })
  .then((data) => {
    // Lưu kết quả vào biến listTypeRoom
    const listTypeRoom = data.result;

    // In ra kết quả để kiểm tra
    console.log("Câu 1:",listTypeRoom);
  })



//----------------------------
// 2.2

// get lại data để map
fetch("https://hotel-management-server.fly.dev/public/type-room/list")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Lỗi HTTP: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    const listTypeRoom = data.result;

     // Map lại thành mảng mới
  const mappedList = listTypeRoom.map(room => {
    return {      
      tiêu_đề: room.title,    
      giá_cơ_bản: room.base_price 
    };
  });
  
  // In ra kết quả
  console.log("câu 2:",mappedList);
   
  });
  

//----------------------------
// 2.3
 
fetch("https://hotel-management-server.fly.dev/public/type-room/list")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Lỗi HTTP: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    const listTypeRoom = data.result;

    // Lọc các phòng có hướng nhìn = 1
    const filteredList = listTypeRoom.filter(room => room.base_price >= 100000 && room.base_price <= 500000);

    // In ra kết quả
    console.log("Câu 3:",filteredList);
  })


//----------------------------
// 2.4

fetch("https://hotel-management-server.fly.dev/public/type-room/list")
.then((response) => {
  if (!response.ok) {
    throw new Error(`Lỗi HTTP: ${response.status}`);
  }
  return response.json();
})
.then((data) => {
  const listTypeRoom = data.result;
   // search type room có id 15
   const roomId15 = listTypeRoom.find(room => room.id === 15)
   // In ra kết quả
   if(roomId15){
    console.log("Câu 4:",roomId15);
   } else {
    console.log("Câu 4: Không có phòng này")
   } 
});



//----------------------------
// 2.5

// Hàm tạo phòng mới và chèn vào cuối listTypeRoom
function createTypeRoom(newRoom, listTypeRoom) {
      // Thêm phòng mới cuối mảng
      listTypeRoom.push(newRoom);
  
      // In ra danh sách phòng sau khi chèn
      console.log("Câu 5:", listTypeRoom);
    } 
  
  fetch("https://hotel-management-server.fly.dev/public/type-room/list")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Lỗi HTTP: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      const listTypeRoom = data.result;

      const newRoom = {
        id: 20,  
        title: "Phòng mới",  
        base_price: 350000  
      };
  
      // Gọi hàm createTypeRoom
      createTypeRoom(newRoom, listTypeRoom);
    })
  


//----------------------------
// 2.6

fetch("https://hotel-management-server.fly.dev/public/type-room/list")
.then((response) => {
  if (!response.ok) {
    throw new Error(`Lỗi HTTP: ${response.status}`);
  }
  return response.json();
})
.then((data) => {
  const listTypeRoom = data.result;
   // search type room có id 15
   const roomId15 = listTypeRoom.find(room => room.id === 15)
   // In ra kết quả
   if(roomId15){
    roomId15.base_price = 999999;
    console.log("Câu 6:",roomId15);
   } else {
    console.log("Không có phòng này")
   } 
});



//----------------------------
// 2.7

fetch("https://hotel-management-server.fly.dev/public/type-room/list")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Lỗi HTTP: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    const listTypeRoom = data.result;

    // Lọc các phòng có hướng nhìn = 1
    const roomsView1 = listTypeRoom.filter(room => room.view_direction === 1);

    // Tính tổng giá cơ bản của các phòng có hướng nhìn = 1
    const totalPrice = roomsView1.reduce((total, room) => {
      return total + (Number(room.base_price) || 0);  // Chuyển giá trị base_price thành số và cộng vào tổng
    }, 0);

    // In ra kết quả
    console.log("Câu 7:", totalPrice);
  })

