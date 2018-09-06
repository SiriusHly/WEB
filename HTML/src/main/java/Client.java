import java.io.*;
import java.net.Socket;

/**
 * @author :hly
 * @github :github.com/SiriusHly
 * @blog :blog.csdn.net/Sirius_hly
 * @date :2018/8/20
 */
public class Client {

    public static final  String IP = "127.0.0.1";
    public static final  int PORT = 5000;

    public static void main(String[] args) {
        try {
            System.out.println("开始连接");
            Socket socket = new Socket(IP,PORT);
            System.out.println("成功连接");
            //获取输入流
            //BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            DataInputStream in = new DataInputStream(socket.getInputStream());
            //获取输出流
            //BufferedWriter out = new BufferedWriter(new OutputStreamWriter(socket.getOutputStream()));
            DataOutputStream out = new DataOutputStream(socket.getOutputStream());
            System.out.println("发送1");
            out.writeUTF("Hello");
            //刷新发送
            out.flush();
            System.out.println("发送2");
            String message = in.readUTF();
            System.out.print("接收的数据为:"+message);
            socket.close();

        } catch (IOException e) {
            e.printStackTrace();
        }


    }
}
